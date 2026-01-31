import {
  GOOGLE_SHEETS_CONFIG,
  getProductsCSVUrl,
  getRatesCSVUrl,
  getHeroImagesCSVUrl,
  isGoogleSheetsConfigured,
  isHeroImagesConfigured,
  convertDriveUrlToDirectLink,
} from "../config/googleSheets";

// Simple in-memory cache
const cache = {
  products: { data: null, timestamp: 0 },
  rates: { data: null, timestamp: 0 },
  heroImages: { data: null, timestamp: 0 },
};

/**
 * Check if cached data is still valid
 */
function isCacheValid(cacheKey) {
  const cached = cache[cacheKey];
  if (!cached.data) return false;
  
  const now = Date.now();
  return now - cached.timestamp < GOOGLE_SHEETS_CONFIG.cacheDuration;
}

/**
 * Load products CSV - from Google Sheets or local file
 */
export async function loadProductsCSV() {
  // Check cache first
  if (isCacheValid("products")) {
    return cache.products.data;
  }

  let url;
  
  if (isGoogleSheetsConfigured()) {
    url = getProductsCSVUrl();
  } else {
    url = "/data/products.csv";
  }

  const data = await loadCSV(url, true);
  
  // Cache the result
  cache.products = { data, timestamp: Date.now() };
  
  return data;
}

/**
 * Convert CSV rows to rates object
 * Expected CSV format: material, purity, rate
 */
function parseRatesCSV(csvData) {
  const rates = {
    gold: {},
    silver: {},
    platinum: {},
    lastUpdated: new Date().toISOString().split("T")[0],
  };

  csvData.forEach((row) => {
    const material = row.material?.toLowerCase();
    const purity = row.purity?.toUpperCase();
    const rate = parseFloat(row.rate) || 0;

    if (material && purity) {
      // Initialize material object if it doesn't exist
      if (!rates[material]) {
        rates[material] = {};
      }
      rates[material][purity] = rate;
    }
  });

  return rates;
}

/**
 * Load rates - from Google Sheets or local CSV file
 * CSV Format: material, purity, rate
 * Example: gold, 22K, 6400
 * 
 * Note: Silver rate should be per KG, Gold/Platinum per gram
 */
export async function loadRates() {
  // Check cache first
  if (isCacheValid("rates")) {
    return cache.rates.data;
  }

  // Check localStorage for admin-saved rates first
  const savedRates = localStorage.getItem("kp_jewellers_rates");
  if (savedRates) {
    try {
      const parsed = JSON.parse(savedRates);
      if (parsed && parsed.gold) {
        cache.rates = { data: parsed, timestamp: Date.now() };
        return parsed;
      }
    } catch (e) {
      console.warn("Invalid localStorage rates");
    }
  }

  let url;

  if (isGoogleSheetsConfigured()) {
    // Load rates from Google Sheets
    url = getRatesCSVUrl();
  } else {
    // Load from local CSV file
    url = "/data/rates.csv";
  }

  try {
    const csvData = await loadCSV(url, false);
    
    if (csvData && csvData.length > 0) {
      const rates = parseRatesCSV(csvData);
      
      // Cache the result
      cache.rates = { data: rates, timestamp: Date.now() };
      return rates;
    }
  } catch (error) {
    console.warn("Failed to load rates CSV:", error);
  }

  // Final fallback - return default rates
  const defaultRates = {
    gold: { "18K": 5200, "22K": 6400, "24K": 7200 },
    silver: { "925": 85000, "999": 95000 },
    platinum: { "950": 3200 },
    lastUpdated: new Date().toISOString().split("T")[0],
  };

  cache.rates = { data: defaultRates, timestamp: Date.now() };
  return defaultRates;
}

/**
 * Load hero images - from Google Sheets or return null (use defaults)
 */
export async function loadHeroImages() {
  // Check cache first
  if (isCacheValid("heroImages")) {
    return cache.heroImages.data;
  }

  // Check if hero images are configured
  if (!isHeroImagesConfigured()) {
    return null; // Will use default images
  }

  try {
    const url = getHeroImagesCSVUrl();
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn("Failed to load hero images, using defaults");
      return null;
    }

    const text = await response.text();
    const lines = text.trim().split("\n");
    
    if (lines.length < 2) return null;

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const heroImages = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = parseCSVLine(line);
      const entry = {};

      headers.forEach((header, index) => {
        entry[header] = values[index]?.trim() || "";
      });

      // Convert Google Drive URL to direct link
      if (entry.image) {
        entry.image = convertDriveUrlToDirectLink(entry.image);
      }

      // Only add if image exists
      if (entry.image) {
        heroImages.push({
          id: i,
          image: entry.image,
          title: entry.title || "",
          subtitle: entry.subtitle || "",
        });
      }
    }

    if (heroImages.length === 0) {
      return null;
    }

    // Cache the result
    cache.heroImages = { data: heroImages, timestamp: Date.now() };
    return heroImages;
  } catch (error) {
    console.error("Error loading hero images:", error);
    return null;
  }
}

/**
 * Clear cache to force refresh
 */
export function clearCache() {
  cache.products = { data: null, timestamp: 0 };
  cache.rates = { data: null, timestamp: 0 };
  cache.heroImages = { data: null, timestamp: 0 };
}

/**
 * Load and parse CSV file
 * @param {string} url - URL to fetch CSV from
 * @param {boolean} processImages - Whether to convert Drive URLs to direct links
 */
export async function loadCSV(url, processImages = false) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${response.statusText}`);
    }

    const text = await response.text();
    const data = parseCSV(text);
    
    // Convert Google Drive URLs to direct links if needed
    if (processImages) {
      return data.map((row) => ({
        ...row,
        image: row.image ? convertDriveUrlToDirectLink(row.image) : null,
      }));
    }
    
    return data;
  } catch (error) {
    console.error("Error loading CSV:", error);
    return [];
  }
}

/**
 * Parse CSV string into array of objects
 */
export function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  // First line is headers
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());

  // Parse remaining lines as data
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);
    const entry = {};

    headers.forEach((header, index) => {
      const value = values[index]?.trim() || "";

      // Normalize header names (remove spaces, lowercase)
      const normalizedHeader = header.toLowerCase().replace(/\s+/g, "");

      // Map of numeric fields (CSV header -> object key)
      const numericFields = {
        weight: "weight",
        rate: "rate",
        makingcharge: "makingCharge",
        othercharge: "otherCharge",
        gst: "gst",
        discount: "discount",
        stonecharge: "stoneCharge", // Legacy support
      };

      if (numericFields[normalizedHeader]) {
        entry[numericFields[normalizedHeader]] = value ? parseFloat(value) : null;
      } else if (normalizedHeader === "size") {
        // Size can be number or string (e.g., "M", "L")
        entry.size = value || null;
      } else {
        entry[normalizedHeader] = value || null;
      }
    });

    // Only add entries with valid id
    if (entry.id) {
      data.push(entry);
    }
  }

  return data;
}

/**
 * Parse a single CSV line, handling quoted values
 */
function parseCSVLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}
