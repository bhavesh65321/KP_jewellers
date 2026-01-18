# Google Sheets Integration Guide

This guide explains how to set up Google Sheets as a live data source for your KP Jewellers website.

## Benefits

- ✅ **Live Updates**: Change data in Google Sheets → Website updates automatically
- ✅ **No Redeployment**: No need to redeploy for product/rate changes
- ✅ **Easy to Use**: Familiar spreadsheet interface
- ✅ **Multi-Admin**: Multiple people can update the sheet
- ✅ **Free**: No hosting costs for data

---

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "KP Jewellers Data"

---

## Step 2: Set Up Products Sheet (Tab 1)

Create columns with these exact headers:

| id | weight | size | stoneCharge | purity | image |
|----|--------|------|-------------|--------|-------|
| gold-rings-royal-diamond | 4.5 | 12 | 3500 | 22K | [image_url] |
| silver-bracelets-charm | 15.5 | M | | 925 | [image_url] |

### Column Descriptions:

- **id**: Product identifier in format `{material}-{category}-{name}`
  - Examples: `gold-rings-royal`, `silver-earrings-stud`, `platinum-pendants-heart`
- **weight**: Weight in grams (required)
- **size**: Size (optional) - can be number or text (M, L, XL)
- **stoneCharge**: Extra charge for stones (optional)
- **purity**: Metal purity (optional) - e.g., 22K, 18K, 925, 950
- **image**: Google Drive image URL (optional) - see Step 4

---

## Step 3: Set Up Rates Sheet (Tab 2)

Create a new tab named "Rates" with these columns:

| material | purity | rate |
|----------|--------|------|
| gold | 18K | 5200 |
| gold | 22K | 6400 |
| gold | 24K | 7200 |
| silver | 925 | 85 |
| silver | 999 | 95 |
| platinum | 950 | 3200 |

---

## Step 4: Upload Images to Google Drive

1. Create a folder in Google Drive for product images
2. Upload your images
3. For each image:
   - Right-click → "Share"
   - Change to "Anyone with the link"
   - Copy the link

4. Convert the link format:
   ```
   Original:  https://drive.google.com/file/d/ABC123xyz/view?usp=sharing
   Convert to: https://drive.google.com/uc?export=view&id=ABC123xyz
   ```

5. Paste the converted URL in the `image` column

---

## Step 5: Publish Your Sheet

1. Go to **File** → **Share** → **Publish to web**
2. Choose **Entire document** or specific sheets
3. Select **Comma-separated values (.csv)**
4. Click **Publish**
5. Note down your Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

---

## Step 6: Get Tab GIDs

Each tab has a unique GID:

1. Click on your **Products** tab
2. Look at the URL: `...#gid=0` → GID is `0`
3. Click on your **Rates** tab
4. Look at the URL: `...#gid=123456789` → GID is `123456789`

---

## Step 7: Configure Your Website

Edit `src/config/googleSheets.js`:

```javascript
export const GOOGLE_SHEETS_CONFIG = {
  // Enable Google Sheets
  enabled: true,
  
  // Your Sheet ID
  sheetId: "YOUR_SHEET_ID_HERE",
  
  // Products tab GID (usually 0)
  productsGid: "0",
  
  // Rates tab GID
  ratesGid: "123456789",
  
  // Cache duration (5 minutes)
  cacheDuration: 300000,
};
```

---

## Step 8: Test It!

1. Save your configuration
2. Refresh your website
3. Products and rates should load from Google Sheets!

---

## Making Updates

### To Add a New Product:
1. Add a new row in Google Sheets
2. Fill in all required fields
3. Add image URL if available
4. Wait 5 minutes (or refresh cache)
5. Product appears on website!

### To Update Rates:
1. Edit the rate value in Rates tab
2. Save the sheet
3. Wait 5 minutes (or refresh cache)
4. All product prices update automatically!

---

## Troubleshooting

### Products not showing?
- Check if the sheet is published
- Verify the Sheet ID and GIDs are correct
- Check browser console for errors

### Images not loading?
- Make sure the Drive folder is public
- Use the correct URL format with `uc?export=view`

### Prices showing as ₹0?
- Check if rates are properly configured
- Verify purity values match between products and rates

---

## Cache Settings

By default, data is cached for 5 minutes to reduce API calls.

To change cache duration, edit `cacheDuration` in `googleSheets.js`:
- `0` = No caching (always fresh, but slower)
- `300000` = 5 minutes (recommended)
- `600000` = 10 minutes
- `3600000` = 1 hour

---

## Example Sheet Structure

### Products Tab:
```
id,weight,size,stoneCharge,purity,image
gold-rings-royal-diamond,4.5,12,3500,22K,https://drive.google.com/uc?export=view&id=xxx
gold-rings-classic-band,3.2,10,,,https://drive.google.com/uc?export=view&id=yyy
silver-bracelets-chain,15.5,M,,925,https://drive.google.com/uc?export=view&id=zzz
```

### Rates Tab:
```
material,purity,rate
gold,18K,5200
gold,22K,6400
gold,24K,7200
silver,925,85
platinum,950,3200
```

---

## Need Help?

If you have issues:
1. Check the browser console (F12 → Console)
2. Verify your Google Sheet is published
3. Make sure all column headers are lowercase
4. Ensure Sheet ID and GIDs are correct
