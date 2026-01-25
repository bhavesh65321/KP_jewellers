/**
 * Google Sheets Configuration
 * 
 * HOW TO SET UP:
 * 
 * 1. Create a Google Sheet with your product data
 * 2. Go to File → Share → Publish to web
 * 3. Select "Entire Document" and "Comma-separated values (.csv)"
 * 4. Click "Publish" and copy the link
 * 5. Paste the FULL published URL below
 * 
 * PUBLISHED URL FORMAT:
 * https://docs.google.com/spreadsheets/d/e/XXXXX/pub?gid=0&single=true&output=csv
 * 
 * SHEET STRUCTURE:
 * 
 * Tab 1: Products (gid=0)
 * Columns: id, weight, size, stoneCharge, purity, image
 * 
 * Tab 2: Rates (gid=RATES_GID)
 * Columns: material, purity, rate
 * 
 * Tab 3: Hero Images (gid=HERO_GID) - OPTIONAL
 * Columns: image, title, subtitle
 */

export const GOOGLE_SHEETS_CONFIG = {
  // Set to true to use Google Sheets, false to use local files
  enabled: true,
  
  // PASTE YOUR FULL PUBLISHED URLs HERE:
  // Get these from File → Share → Publish to web
  
  // Products tab published URL (gid=0)
  productsUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAp60CQuzqk1Bv00iiK74GTvgkoE77XyD-rHYd2ULrdEc0mQdhwc2hzEHIgHHiv42EDd2YMSXHmYKh/pub?gid=0&single=true&output=csv",
  
  // Rates tab published URL (change gid to your rates tab)
  ratesUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZvpPm_9VLS7SdjBcqvRZuK102UGLheks-BUN18SrUQwHrytZfzcoyL3R0QE72PU6az_aP-41zgK_C/pub?gid=616740870&single=true&output=csv",
  
  // Hero Images tab published URL (OPTIONAL - leave empty to use default images)
  // Create a new tab in your sheet with columns: image, title, subtitle
  // Then publish that specific tab and paste the URL here
  heroImagesUrl: "",
  
  // Cache duration in milliseconds (5 minutes = 300000)
  // Set to 0 to always fetch fresh data
  cacheDuration: 300000,
};

/**
 * Get the published CSV URL for products
 */
export function getProductsCSVUrl() {
  return GOOGLE_SHEETS_CONFIG.productsUrl;
}

/**
 * Get the published CSV URL for rates
 */
export function getRatesCSVUrl() {
  return GOOGLE_SHEETS_CONFIG.ratesUrl;
}

/**
 * Get the published CSV URL for hero images
 */
export function getHeroImagesCSVUrl() {
  return GOOGLE_SHEETS_CONFIG.heroImagesUrl;
}

/**
 * Check if hero images are configured
 */
export function isHeroImagesConfigured() {
  return (
    GOOGLE_SHEETS_CONFIG.heroImagesUrl &&
    GOOGLE_SHEETS_CONFIG.heroImagesUrl.includes("docs.google.com")
  );
}

/**
 * Convert Google Drive share link to direct image URL
 * Uses lh3.googleusercontent.com format which works better for embedding
 * Input: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Output: https://lh3.googleusercontent.com/d/FILE_ID
 */
export function convertDriveUrlToDirectLink(driveUrl) {
  if (!driveUrl) return null;
  
  // Already using lh3 format
  if (driveUrl.includes("lh3.googleusercontent.com")) {
    return driveUrl;
  }
  
  // Extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,  // /file/d/FILE_ID/
    /id=([a-zA-Z0-9_-]+)/,          // id=FILE_ID
    /\/d\/([a-zA-Z0-9_-]+)/,        // /d/FILE_ID/
    /uc\?export=view&id=([a-zA-Z0-9_-]+)/, // uc?export=view&id=FILE_ID
  ];
  
  for (const pattern of patterns) {
    const match = driveUrl.match(pattern);
    if (match && match[1]) {
      // Use lh3.googleusercontent.com format - more reliable for embedding
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  
  // Return original URL if not a Drive link
  return driveUrl;
}

/**
 * Helper to check if Google Sheets is properly configured
 */
export function isGoogleSheetsConfigured() {
  return (
    GOOGLE_SHEETS_CONFIG.enabled &&
    GOOGLE_SHEETS_CONFIG.productsUrl &&
    GOOGLE_SHEETS_CONFIG.productsUrl.includes("docs.google.com")
  );
}
