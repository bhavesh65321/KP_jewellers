import {
  GOOGLE_SHEETS_CONFIG,
  getProductsCSVUrl,
  getRatesCSVUrl,
  isGoogleSheetsConfigured,
  convertDriveUrlToDirectLink,
} from "../config/googleSheets";

// Simple in-memory cache
const cache = {
  products: { data: null, timestamp: 0 },
  rates: { data: null, timestamp: 0 },
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
 * Load rates - from Google Sheets or local file
 */
export async function loadRates() {
  // Check cache first
  if (isCacheValid("rates")) {
    return cache.rates.data;
  }

  if (isGoogleSheetsConfigured()) {
    // Load rates from Google Sheets
    const url = getRatesCSVUrl();
    
    const csvData = await loadCSV(url, false);
    
    // Convert CSV rows to rates object
    // Expected format: material, purity, rate
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
      
      if (material && purity && rates[material] !== undefined) {
        rates[material][purity] = rate;
      }
    });
    
    // Cache the result
    cache.rates = { data: rates, timestamp: Date.now() };
    
    return rates;
  } else {
    // Load from local file or localStorage
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
    
    // Fallback to rates.json
    const response = await fetch("/data/rates.json");
    const rates = await response.json();
    
    cache.rates = { data: rates, timestamp: Date.now() };
    return rates;
  }
}

/**
 * Clear cache to force refresh
 */
export function clearCache() {
  cache.products = { data: null, timestamp: 0 };
  cache.rates = { data: null, timestamp: 0 };
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

      // Convert numeric fields
      if (header === "weight" || header === "stonecharge" || header === "rate") {
        entry[header === "stonecharge" ? "stoneCharge" : header] = value ? parseFloat(value) : null;
      } else if (header === "size") {
        // Size can be number or string (e.g., "M", "L")
        entry[header] = value || null;
      } else {
        entry[header] = value || null;
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
