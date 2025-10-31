# Matthias Masiero — Personal Portfolio

A fast, animated personal website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

✨ **Live site:** [matthiasmasiero.vercel.app](https://matthiasmasiero.vercel.app)

---

## 🚀 Features

- **Modern stack:** React + Vite + Tailwind + Framer Motion
- **Animated background:** smooth gradient drift with vivid color blending
- **Quantum Projects section:** interactive superposition wave animations that collapse when clicked
- **Fully responsive:** adaptive layout with touch-friendly mobile behavior
- **Performance optimized:** lazy motion rendering and GPU-accelerated animations
- **Automatic updates:** linked to Vercel for instant deployment

---

## 🧩 Technologies Used

**Languages:** JavaScript, HTML, CSS  
**Frameworks:** React, Vite, Tailwind CSS  
**Animation:** Framer Motion, SVG animations  
**Hosting:** Vercel

---

## 🧠 Sections Overview

### 👤 Hero
- Intro, tagline, and quick contact links to GitHub, LinkedIn, and Resume.

### 💻 Projects
- Showcases featured development projects with GitHub links.

### ⚛️ Quantum
- Visual “superposition” effect using animated sine waves that smoothly collapse to a single wave upon click.

### 📄 Resume
- Directly accessible PDF stored in `/public/Resume.pdf`.

---

## 🛠 Local Development

### Prerequisites
- Node.js 18+

### Steps
```bash
# Clone this repo
 git clone https://github.com/MatthiasMasiero/Portfolio.git
 cd Portfolio

# Install dependencies
 npm install

# Start development server
 npm run dev

# To test on your phone (same Wi-Fi)
 npm run dev -- --host
# Then open http://<your-ip>:5173 on mobile
```

### Build for production
```bash
npm run build
npm run preview
```

---

## 🧱 Structure

```
matthias-portfolio/
├─ public/
│  ├─ Resume.pdf
│  └─ favicon.ico
├─ src/
│  ├─ App.jsx          # Main file — components and section structure
│  ├─ components/      # Subcomponents (cards, wave animation, etc.)
│  └─ index.css        # Tailwind + custom styles
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 🌐 Deployment

Deployed with **Vercel**:
1. Connect GitHub repo to Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Every push to `main` redeploys automatically.

---

## 📞 Contact

**Matthias Masiero**  
📧 matthiasmasiero0@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/matthiasmasiero)  
💻 [GitHub](https://github.com/MatthiasMasiero)

---

© 2025 Matthias Masiero. All Rights Reserved.