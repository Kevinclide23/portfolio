# portfolio
# Kevin Clide Bautista - Personal Portfolio Website

A modern, responsive personal portfolio website built with pure HTML5, CSS3, and vanilla JavaScript for student activity submission and professional showcase. Designed to work seamlessly on mobile phones, tablets, and desktop computers with zero build dependencies.

---

## 🌐 Live Website & Repository

- **Live Published URL (GitHub Pages):** [https://kevinclide23.github.io/portfolio/](https://kevinclide23.github.io/portfolio/)
- **Live Published URL (Vercel):** `https://kevin-clide-portfolio.vercel.app`
- **GitHub Repository:** [https://github.com/Kevinclide23/portfolio](https://github.com/Kevinclide23/portfolio)

---

## 👤 About the Author

- **Name:** Kevin Clide Bautista
- **Program:** Bachelor of Science in Information Technology (BSIT, 2023–2026)
- **Institution:** Cebu Eastern College, Cebu City, Philippines
- **High School:** Don Vicente Rama Memorial National High School (STEM Strand, 2017–2023)
- **Email:** [kbautista063@gmail.com](mailto:kbautista063@gmail.com)
- **Phone:** (+63) 992 431 8641
- **Location:** E. Sabellano St. Quiot, Cebu City, Philippines
- **LinkedIn:** [linkedin.com/in/kevin-clide-bautista](https://linkedin.com/in/kevin-clide-bautista)
- **GitHub:** [github.com/Kevinclide23](https://github.com/Kevinclide23)

---

## 🚀 Key Features

1. **Fully Responsive Layout:** Optimized for narrow smartphone screens, tablets, laptops, and ultra-wide desktop monitors.
2. **Dark / Light Theme Toggle:** Clean toggle button with automatic theme persistence via `localStorage`.
3. **Interactive Navigation:** Sticky header with backdrop blur, smooth scrolling to `#section` targets, and a mobile hamburger menu.
4. **Featured Projects Showcase:**
   - **SafeDrive: Records (Activity Project):** Driver and vehicle records dashboard with instant search, filter logic, and status verification.
   - **SmartCane (Capstone Project):** IoT-driven assistive navigation cane with high-contrast UI, Antigravity rules, and JavaScript telemetry.
   - **CuePoint (Activity Project):** Real-time AI presentation prompter and speech coach using Node.js and OpenAI GPT-4o.
   - **FashionPulse (Activity Project):** Curated fashion lookbook and apparel catalog platform powered by Python, Django, and JavaScript.
5. **Project Details Modal:** In-depth popups detailing the problem statement, personal contributions, and tech stacks for every project.
6. **Direct Contact Integration:** Interactive form with client-side mailto handler, quick email clipboard copy, and social links.
7. **Downloadable Resume:** Direct link to official resume PDF (`assets/resume.pdf`).

---

## 📁 Project File Structure

```text
portfolio/
├── index.html            # Main homepage containing all sections
├── style.css             # Modern stylesheet with CSS variables (Dark/Light themes)
├── script.js             # Vanilla JavaScript (Theme, mobile menu, filter, modal)
├── README.md             # Project documentation and publishing guide
├── images/               # High-res project screenshots & profile photo
│   ├── profile.jpg       # Profile photo
│   ├── project-safedrive.svg
│   ├── project-smartcane.png
│   ├── project-cuepoint.png
│   └── project-fashionpulse.png
└── assets/
    └── resume.pdf        # Official one-page resume
```

---

## 🛠️ How to Test Locally

1. Open File Explorer and navigate to `D:\portfolio`.
2. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Brave).
3. Alternatively, in **VS Code**:
   - Open the `portfolio` folder (`File > Open Folder...`).
   - If you have the Microsoft **Live Preview** extension installed, right-click `index.html` and select **Show Preview**.

---

## 🚢 Publishing Instructions

### Option 1: Publish with GitHub Pages (Recommended)

1. Sign in to your account at [github.com](https://github.com).
2. Click the **+** icon in the top right corner and choose **New repository**.
3. Name your repository `portfolio`.
4. Select **Public** and check **Add a README file** (or leave it unchecked if uploading the existing one). Click **Create repository**.
5. In your new repository, click **Add file > Upload files**.
6. Drag and drop all the files and folders from your `portfolio` directory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `images/` (folder)
   - `assets/` (folder)
7. Type a commit message like `"Publish Kevin Clide portfolio website"` and click **Commit changes**.
8. Go to **Settings > Pages** in your repository.
9. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or `master`)
   - **Folder:** `/(root)`
10. Click **Save**. Wait 1–3 minutes, then refresh the page to get your live URL:
    `https://Kevinclide23.github.io/portfolio/`

### Option 2: Publish with Vercel

1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New > Project**.
3. Select your `portfolio` GitHub repository and click **Import**.
4. In the build settings:
   - **Framework Preset:** `Other`
   - **Root Directory:** `./`
   - **Build Command:** *(Leave blank)*
   - **Output Directory:** `.`
5. Click **Deploy**. Vercel will give you a live production URL like `your-portfolio.vercel.app`.

### Option 3: Deploy with Firebase Hosting

1. In the terminal:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```
2. Configure settings:
   - Use existing Firebase project or create new.
   - Public directory: `.` (or create `public` and copy files).
   - Single Page App: `No`.
   - Overwrite index.html: `No`.
3. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

---

## 📝 Student Submission Format

- **Student Name:** Kevin Clide Bautista
- **Degree Program:** Bachelor of Science in Information Technology (BSIT)
- **Institution:** Cebu Eastern College
- **Live Website URL:** `https://kevinclide23.github.io/portfolio/`
- **Hosting Service:** GitHub Pages / Vercel
- **Source Code Repository:** `https://github.com/Kevinclide23/portfolio`
- **AI Tools & IDEs Used:** Antigravity IDE, Google Gemini

