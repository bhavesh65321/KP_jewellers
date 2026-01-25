# KP Jewellers - GitHub Pages Deployment Guide

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) → Sign in
2. Click **"+"** → **"New repository"**
3. Repository name: `kp-jewellers` (or your preferred name)
4. Keep it **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

### Step 2: Update Repository Name (If Different)

If your repository name is NOT `kp-jewellers`, update these files:

**vite.config.js** - Change the base URL:
```javascript
base: process.env.GITHUB_ACTIONS ? '/YOUR-REPO-NAME/' : '/',
```

**public/404.html** - Change the repo name:
```javascript
const repo = '/YOUR-REPO-NAME';
```

### Step 3: Push Code to GitHub

```bash
# Navigate to project folder
cd /Users/bhavesh.soni/Downloads/KP_jewellers/client

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - KP Jewellers"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kp-jewellers.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in left sidebar
4. Under **"Build and deployment"**:
   - Source: **"GitHub Actions"**
5. The workflow will automatically run and deploy!

### Step 5: Access Your Website

After deployment completes (1-2 minutes), your site will be live at:
```
https://YOUR_USERNAME.github.io/kp-jewellers/
```

---

## 🔄 How Updates Work

### Automatic Deployment
Every time you push to `main` branch:
```bash
git add .
git commit -m "Your changes"
git push
```
GitHub Actions will automatically rebuild and deploy!

### Content Updates (No Push Needed)
| Update Type | How to Update | Time to Reflect |
|-------------|---------------|-----------------|
| Products | Edit Google Sheet | ~5 minutes |
| Prices/Rates | Edit Rates tab | ~5 minutes |
| Images | Upload to Drive, add URL | ~5 minutes |

---

## 📂 URL Structure

With GitHub Pages, URLs will look like:
```
Home:     https://username.github.io/kp-jewellers/#/
Shop:     https://username.github.io/kp-jewellers/#/shop
Product:  https://username.github.io/kp-jewellers/#/product/gold-ring-1
About:    https://username.github.io/kp-jewellers/#/about
```

---

## ⚠️ Important Notes

### Google Sheets Must Stay Active
- Keep sheets "Published to web"
- Don't change sharing settings
- Don't rename columns

### Google Drive Images
- Keep images publicly shared
- Don't move or delete images folder

---

## 🔧 Troubleshooting

### Deployment Failed
1. Check **"Actions"** tab in GitHub for error logs
2. Ensure `package-lock.json` exists (run `npm install` locally)
3. Verify all files are committed

### Page Shows 404
1. Wait 1-2 minutes for deployment
2. Check GitHub Pages is enabled in Settings
3. Verify the URL includes `/#/` for routes

### Images Not Loading
1. Check Google Drive sharing settings
2. Verify image URLs in Google Sheet
3. Clear browser cache

---

## 🏗️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Current Configuration

**Live Site URL:** `https://YOUR_USERNAME.github.io/kp-jewellers/`

**Products Sheet:**
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vQAp60CQuzqk1Bv00iiK74GTvgkoE77XyD-rHYd2ULrdEc0mQdhwc2hzEHIgHHiv42EDd2YMSXHmYKh/pub?gid=0&single=true&output=csv
```

**Rates Sheet:**
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vSZvpPm_9VLS7SdjBcqvRZuK102UGLheks-BUN18SrUQwHrytZfzcoyL3R0QE72PU6az_aP-41zgK_C/pub?gid=616740870&single=true&output=csv
```

---

## 🔐 Admin Panel

Access at: `https://YOUR_USERNAME.github.io/kp-jewellers/#/admin/rates`

Password: `kpjewellers2024`

Note: Admin changes are stored in browser localStorage (device-specific).
For global updates, edit Google Sheets directly.
