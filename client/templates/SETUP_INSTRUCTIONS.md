# 🚀 Complete Google Sheets Setup Guide for KP Jewellers

Follow these steps exactly to connect your website to Google Sheets and Google Drive.

---

## 💡 How Pricing Works

**IMPORTANT**: You do NOT enter price for each product!

```
┌─────────────────────────────────────────────────────────────────┐
│                     AUTOMATIC PRICE CALCULATION                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  RATES TAB (Global - Update Once Daily)                        │
│  ┌─────────────────────────────────────┐                       │
│  │ gold    │ 22K │ 6400 ₹/gram        │                        │
│  │ gold    │ 24K │ 7200 ₹/gram        │                        │
│  │ silver  │ 925 │ 85 ₹/gram          │                        │
│  └─────────────────────────────────────┘                       │
│                      ↓                                          │
│  PRODUCTS TAB (Just weight & purity)                           │
│  ┌─────────────────────────────────────┐                       │
│  │ gold-ring │ 4.5g │ 22K │           │  ← No price needed!   │
│  └─────────────────────────────────────┘                       │
│                      ↓                                          │
│  WEBSITE CALCULATES AUTOMATICALLY:                              │
│  ┌─────────────────────────────────────┐                       │
│  │ Metal Cost:  4.5g × ₹6400 = ₹28,800│                        │
│  │ Making:      4.5g × ₹500  = ₹2,250 │                        │
│  │ Subtotal:                   ₹31,050│                        │
│  │ GST (3%):                   ₹932   │                        │
│  │ TOTAL:                      ₹31,982│                        │
│  └─────────────────────────────────────┘                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**When gold rate changes from ₹6400 to ₹6500:**
1. Update ONLY the Rates tab: `gold | 22K | 6500`
2. ALL gold 22K products automatically show new prices! 🎉

---

## 📋 What You'll Need

- Google Account
- Product images (JPG/PNG)
- Product details (weight, purity, etc.)
- Current metal rates (updated daily)

---

## PART 1: GOOGLE DRIVE SETUP (For Images)

### Step 1.1: Create Main Folder

1. Go to [Google Drive](https://drive.google.com)
2. Click **+ New** → **New folder**
3. Name it: `KP Jewellers Images`
4. Press Enter

### Step 1.2: Create Subfolders

Inside `KP Jewellers Images`, create these folders:

```
📂 KP Jewellers Images
├── 📂 gold
├── 📂 silver
└── 📂 platinum
```

Inside each material folder, create category folders:

```
📂 gold
├── 📂 rings
├── 📂 earrings
├── 📂 pendants
├── 📂 bangles
├── 📂 bracelets
├── 📂 necklaces
├── 📂 nose-pins
└── 📂 coins
```

### Step 1.3: Make Folder Public

1. Right-click on `KP Jewellers Images` folder
2. Click **Share**
3. Click **General access** dropdown
4. Select **Anyone with the link**
5. Keep it as **Viewer**
6. Click **Done**

✅ Now all images you upload will be publicly accessible!

### Step 1.4: Upload Images

1. Navigate to the correct folder (e.g., `gold/rings/`)
2. Drag & drop your image OR click **+ New** → **File upload**
3. **IMPORTANT**: Name the file exactly like the product ID:

```
✅ Correct: gold-rings-royal-diamond.jpg
❌ Wrong:   Royal Diamond Ring.jpg
❌ Wrong:   IMG_1234.jpg
```

### Step 1.5: Get Image URL

For each image:

1. Right-click the image
2. Click **Share**
3. Click **Copy link**
4. You'll get:
   ```
   https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
   ```

5. **Convert to direct URL:**
   - Find the ID: `1ABC123xyz` (between `/d/` and `/view`)
   - Create new URL:
   ```
   https://drive.google.com/uc?export=view&id=1ABC123xyz
   ```

### 💡 Quick URL Converter

```
ORIGINAL URL:
https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
                              └───────────┘
                              Copy this ID

DIRECT URL (use this in Google Sheet):
https://drive.google.com/uc?export=view&id=1ABC123xyz

The website automatically converts to:
https://lh3.googleusercontent.com/d/1ABC123xyz
(This format works best for embedding!)
```

---

## PART 2: GOOGLE SHEETS SETUP (For Data)

### Step 2.1: Create New Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** (or the big + button)
3. Click "Untitled spreadsheet" at top
4. Rename to: `KP Jewellers Data`

### Step 2.2: Import Products Template

**Option A: Copy-Paste Method**
1. Open `templates/products_template.csv` from your project folder
2. Copy all content
3. In Google Sheets, click cell A1
4. Paste (Ctrl+V or Cmd+V)
5. Click the paste icon → **Split text to columns**

**Option B: Import Method**
1. In Google Sheets, go to **File** → **Import**
2. Click **Upload** tab
3. Drag `templates/products_template.csv`
4. Select **Replace current sheet**
5. Click **Import data**

**Products Tab Columns Explained:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Column      │ Required │ Description                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ id          │ YES      │ Product identifier: gold-rings-royal-diamond       │
│ weight      │ YES      │ Weight in grams: 4.5                               │
│ size        │ NO       │ Size (ring size, bracelet M/L): 12                 │
│ stoneCharge │ NO       │ Extra charge for diamonds/stones: 3500             │
│ purity      │ NO       │ Which rate to use: 22K, 925, 950 (has defaults)    │
│ image       │ NO       │ Google Drive image URL                             │
└─────────────────────────────────────────────────────────────────────────────┘

NOTE: You do NOT enter price! Price is calculated automatically:
      Price = (weight × global rate) + making charges + stone charge + GST
```

### Step 2.3: Create Rates Tab (GLOBAL RATES)

**This is where you update rates ONCE - affects ALL products!**

1. Click the **+** button at bottom (next to Sheet1 tab)
2. Right-click new tab → **Rename**
3. Name it: `Rates`
4. Import `templates/rates_template.csv` same way

**Rates Tab Structure:**
```
┌──────────┬────────┬────────┐
│ material │ purity │ rate   │  ← Rate per gram in ₹
├──────────┼────────┼────────┤
│ gold     │ 18K    │ 5200   │  ← All 18K gold products use this
│ gold     │ 22K    │ 6400   │  ← All 22K gold products use this
│ gold     │ 24K    │ 7200   │  ← All 24K gold products use this
│ silver   │ 925    │ 85     │  ← All 925 silver products use this
│ platinum │ 950    │ 3200   │  ← All 950 platinum products use this
└──────────┴────────┴────────┘
```

**Daily Rate Update:**
- Just change the rate number in this tab
- Example: Gold 22K rate changes from 6400 → 6500
- ALL gold 22K products automatically show new prices!

### Step 2.4: Add Your Image URLs

In the Products tab:
1. Go to column F (image)
2. For each product, paste the direct Drive URL you created

Example row:
```
| gold-rings-royal | 4.5 | 12 | 3500 | 22K | https://drive.google.com/uc?export=view&id=1ABC123 |
```

### Step 2.5: Publish the Sheet

1. Go to **File** → **Share** → **Publish to web**
2. A dialog appears
3. Under "Link", select: **Entire document**
4. Select format: **Comma-separated values (.csv)**
5. Click **Publish**
6. Click **OK** to confirm

✅ Sheet is now publicly accessible!

### Step 2.6: Get Sheet ID

Look at your sheet URL:
```
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/edit#gid=0
                                       └─────────────────────────────┘
                                       This is your SHEET ID
```

Copy this ID! You'll need it.

### Step 2.7: Get Tab GIDs

**Products Tab GID:**
1. Click on "Products" tab (or Sheet1)
2. Look at URL: `...#gid=0`
3. The GID is: `0`

**Rates Tab GID:**
1. Click on "Rates" tab
2. Look at URL: `...#gid=1234567890`
3. The GID is: `1234567890`

---

## PART 3: CONNECT TO WEBSITE

### Step 3.1: Edit Configuration

Open file: `src/config/googleSheets.js`

Change these values:

```javascript
export const GOOGLE_SHEETS_CONFIG = {
  // Change to true
  enabled: true,
  
  // Your Sheet ID from Step 2.6
  sheetId: "1AbCdEfGhIjKlMnOpQrStUvWxYz",
  
  // Products tab GID (usually 0)
  productsGid: "0",
  
  // Rates tab GID from Step 2.7
  ratesGid: "1234567890",
  
  // Keep as 5 minutes
  cacheDuration: 300000,
};
```

### Step 3.2: Save and Refresh

1. Save the file
2. Refresh your website
3. Products now load from Google Sheets! 🎉

---

## PART 4: DAILY OPERATIONS

### Adding a New Product

```
Step 1: Upload image to Google Drive
        📂 gold/rings/gold-rings-new-design.jpg

Step 2: Get direct image URL
        https://drive.google.com/uc?export=view&id=NEW_ID

Step 3: Add row in Google Sheet
        | gold-rings-new-design | 5.0 | 12 | | 22K | [image URL] |

Step 4: Wait 5 minutes OR click refresh 🔄 on website

Step 5: New product appears! ✅
```

### Updating Metal Rates (GLOBAL - Updates ALL Products!)

```
┌─────────────────────────────────────────────────────────────┐
│  🏆 This is the MAIN benefit of this system!                │
│  Update rate ONCE → ALL product prices change instantly!    │
└─────────────────────────────────────────────────────────────┘

Step 1: Open Rates tab in Google Sheet

Step 2: Change the rate value
        
        Before: | gold | 22K | 6400 |
        After:  | gold | 22K | 6500 |

Step 3: Wait 5 minutes OR click refresh 🔄 on website

Step 4: ALL 22K gold products now show new prices! ✅

Example: If you have 50 gold 22K products:
- Before: All showing prices based on ₹6400/gram
- After:  All showing prices based on ₹6500/gram
- You changed: ONLY 1 cell in the Rates tab!
```

### Removing a Product

```
Step 1: Delete the row from Google Sheet

Step 2: (Optional) Delete image from Drive

Step 3: Wait 5 minutes OR click refresh 🔄

Step 4: Product removed from website! ✅
```

---

## 🔧 TROUBLESHOOTING

### Products not showing?
- ✅ Check: Is Google Sheet published?
- ✅ Check: Is `enabled: true` in config?
- ✅ Check: Is Sheet ID correct?
- ✅ Check: Are column headers exactly: `id,weight,size,stoneCharge,purity,image`

### Images not loading?
- ✅ Check: Is Drive folder set to "Anyone with link"?
- ✅ Check: Is URL in correct format? `uc?export=view&id=...`
- ✅ Check: Is file actually shared?

### Prices showing ₹0?
- ✅ Check: Is weight filled in for the product?
- ✅ Check: Is purity matching between Products and Rates tab?
- ✅ Check: Is Rates tab GID correct?

### Changes not appearing?
- ✅ Wait 5 minutes (cache duration)
- ✅ OR click the refresh 🔄 button on shop page
- ✅ OR clear browser cache

---

## 📱 QUICK REFERENCE

### Product ID Format
```
{material}-{category}-{name-with-dashes}

Examples:
gold-rings-royal-diamond
silver-earrings-stud-simple
platinum-pendants-heart-love
gold-nose-pins-small-stud
gold-coins-laxmi-goddess
```

### Valid Materials
- gold
- silver
- platinum

### Valid Categories
- rings
- earrings
- pendants
- bangles
- bracelets
- necklaces
- nose-pins
- coins

### Valid Purities
- Gold: 14K, 18K, 22K, 24K
- Silver: 925, 999
- Platinum: 950, 999

---

## ✅ CHECKLIST

Before going live, verify:

- [ ] Google Drive folder is public
- [ ] All images uploaded with correct names
- [ ] Google Sheet is published
- [ ] Products tab has all products
- [ ] Rates tab has all rates
- [ ] Sheet ID is copied to config
- [ ] Products GID is correct
- [ ] Rates GID is correct
- [ ] `enabled: true` in config
- [ ] Website shows products correctly
- [ ] Prices are calculating correctly

---

## 🎉 YOU'RE DONE!

Your website is now connected to Google Sheets. 
Any changes you make in the spreadsheet will reflect on the website within 5 minutes!

For immediate updates, use the refresh 🔄 button on the shop page.
