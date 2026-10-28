# Girdhar Morari, Mathura — Google Review Assistant

A responsive, mobile-first web application for **Girdhar Morari, Mathura**, associated with the official website [https://girdharmorarimathura.com](https://girdharmorarimathura.com).

This tool empowers genuine customers to write and submit honest Google Business Profile reviews using **100 editable writing suggestions** (50 in English and 50 in Hindi), while providing an in-store **QR Code Generator & Printable Acrylic Standee** for counter placement.

---

## 1. Google Review Configuration

- **Official Google Review URL:**
  `https://g.page/r/CfcwIoRWwFg7EBM/review`
- **Official Website:**
  `https://girdharmorarimathura.com`
- **Location:** Mathura, Uttar Pradesh, India
- **Primary Keywords & Landmarks:**
  - `Guest House near Dwarika dheesh`
  - `hotel near vishram ghar`
  - `gujrat samaj guest house`

---

## 2. Technology Stack & Architecture

This repository delivers both an interactive modern React SPA (Vite + Tailwind CSS + Lucide Icons + motion) and a **zero-dependency static bundle** (`index.html`, `style.css`, `script.js`) located in `public/standalone/` ready for instant drag-and-drop deployment onto Hostinger.

- **Frontend:** HTML5, CSS3, JavaScript / React 19 + TypeScript
- **Styling:** Custom Warm Cream (`#FAF7F2`), Deep Maroon (`#58111A`), Saffron (`#D97706`), accessible typography with Noto Sans Devanagari & Plus Jakarta Sans
- **Storage:** LocalStorage (`gm_review_drafts`, `gm_review_lang`) — no server, database, or login required
- **QR Code Engine:** Client-side canvas generation with high resolution (PNG download and printable counter standee)
- **Zero Automation:** No programmatic Google submissions, bot manipulation, or fake reviews. The customer retains full agency.

---

## 3. Review Suggestion Library (100 Unique Templates)

Exactly **100 unique, editable suggestions** organized across 10 categories:
- **50 English suggestions** (IDs 1–50)
- **50 Hindi suggestions** (IDs 51–100)

### Categories:
1. **Overall experience** (IDs 1–5 EN, 51–55 HI)
2. **Staff behaviour** (IDs 6–10 EN, 56–60 HI)
3. **Customer service** (IDs 11–15 EN, 61–65 HI)
4. **Communication** (IDs 16–20 EN, 66–70 HI)
5. **Product or service quality** (IDs 21–25 EN, 71–75 HI)
6. **Value for money** (IDs 26–30 EN, 76–80 HI)
7. **Convenience** (IDs 31–35 EN, 81–85 HI)
8. **Cleanliness & ambience** (IDs 36–40 EN, 86–90 HI)
9. **Repeat visits** (IDs 41–45 EN, 91–95 HI)
10. **Suggestions for improvement** (IDs 46–50 EN, 96–100 HI)

Each template contains editable bracketed placeholders (e.g., `[mention product/service]`, `[अपना वास्तविक अनुभव लिखें]`) and a balanced mix of positive, neutral, and constructive feedback starting points.

---

## 4. Local Testing Instructions

### Option A: Testing the Vite Development App
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run the Vite development server on port 3000
npm run dev

# 3. Open your browser at http://localhost:3000
```

### Option B: Testing the Zero-Dependency Standalone Static Site
You can test the standalone files directly without any build tools or Node.js:
```bash
# Navigate to the standalone directory
cd public/standalone

# Option 1: Open index.html directly in any web browser (Chrome, Edge, Safari, Firefox)
# (Double-click index.html or drag it into your browser)

# Option 2: Using python's built-in HTTP server
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

---

## 5. Exact Hostinger Deployment Steps

Deploying to Hostinger takes under 2 minutes because the site is static with zero server-side prerequisites:

### Method 1: Hostinger hPanel File Manager (Recommended)
1. Log in to your Hostinger account at **[https://hpanel.hostinger.com](https://hpanel.hostinger.com)**.
2. Under **Websites**, click **Manage** next to `girdharmorarimathura.com`.
3. In the left sidebar, navigate to **Files** → **File Manager**.
4. Double-click the **`public_html`** folder.
5. If deploying to the root domain (`girdharmorarimathura.com`):
   - Upload the 3 standalone files directly into `public_html/`:
     - `index.html`
     - `style.css`
     - `script.js`
6. If deploying as a dedicated subfolder (e.g. `girdharmorarimathura.com/reviews/`):
   - Create a folder named `reviews` inside `public_html/`.
   - Upload the 3 files inside `public_html/reviews/`.
7. Navigate to **Security** → **SSL** in hPanel and confirm that the Free SSL Certificate is **Active (HTTPS)**.
8. Visit `https://girdharmorarimathura.com` on your mobile phone to verify.

### Method 2: Hostinger via FTP (FileZilla)
1. In hPanel, go to **Files** → **FTP Accounts** to find your FTP host, username, and port (21).
2. Connect using FileZilla or Cyberduck.
3. Drag `index.html`, `style.css`, and `script.js` into the remote `public_html` directory.

---

## 6. Configuring the Public Webpage URL for In-Store QR Generation

For the acrylic counter standees placed at Girdhar Morari in Mathura:
1. Navigate to the **In-Store QR Code Standee** section of the application.
2. **Preset 1 — Official Google Review:**
   - URL: `https://g.page/r/CfcwIoRWwFg7EBM/review`
   - Directs customers straight to Google's official review submission box.
3. **Preset 2 — Review Assistant Webpage:**
   - URL: Set to your public production URL (e.g., `https://girdharmorarimathura.com` or `https://girdharmorarimathura.com/reviews/`).
   - Opens the assistant on the customer's phone so they can pick a template, personalize it, and copy it before opening Google.
4. Toggle on **"Display business name on standee"**.
5. Click **Download QR Code PNG** for a 300 DPI high-resolution branded graphic, or click **Print Standee** to print directly onto an A5/A6 acrylic standee insert.

---

## 7. Testing & Quality Verification Checklist

| Verified Item | Status | Notes |
| :--- | :---: | :--- |
| Exactly 100 unique suggestions | PASSED | 50 English + 50 Hindi across 10 categories |
| Editable Textareas | PASSED | Every template editable with real-time character & word counters |
| Draft Persistence | PASSED | Edits saved in `localStorage`; retained across filter switches & reloads |
| Search & Category Filter | PASSED | Instant bilingual search across text, IDs, and categories |
| Copy Review Text Workflow | PASSED | Async Clipboard API with automatic fallback; toast alert feedback |
| Reset Template Button | PASSED | Reverts modified card back to original text without losing other edits |
| Official Google Review Link | PASSED | Prominently opens `https://g.page/r/CfcwIoRWwFg7EBM/review` in new tab |
| QR Code Generation | PASSED | High-res QR code with maroon brand coloring and custom preset selector |
| Download PNG & Print Standee | PASSED | Downloads composite branded card and provides clean `@media print` layout |
| Hindi Devanagari Display | PASSED | Tested with Google Noto Sans Devanagari typography |
| Mobile-First Responsiveness | PASSED | Tested for 375px–430px viewports with touch targets ≥ 44px |
| Hostinger Static Compatibility | PASSED | Verified standalone `index.html`, `style.css`, `script.js` bundle |
| Zero Automated Submission | PASSED | 100% compliant with Google Business Profile policies (no bots or fake posts) |
