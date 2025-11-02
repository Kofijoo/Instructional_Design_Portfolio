# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed
- Node.js and npm installed

## Setup Steps

### 1. Install gh-pages
```bash
npm install
```

### 2. Repository Already Connected ✅
Your repository is already set up:
- Repository: `Instructional_Design_Portfolio`
- Remote: `https://github.com/Kofijoo/Instructional_Design_Portfolio.git`

### 3. Commit Your Changes
```bash
git add .
git commit -m "Add React portfolio with GitHub Pages config"
git push origin main
```

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### 6. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Source should be set to `gh-pages` branch
5. Your site will be live at: `https://kofijoo.github.io/Instructional_Design_Portfolio`

## File Checklist

Before deploying, ensure these files are in place:

### Images
- ✅ `public/images/profile_photo.png`
- ✅ `public/images/ja_logo.png`
- ✅ `public/images/about_me.png` (presentation thumbnail)

### PDF
- ✅ `public/projects/Joshua Agyekum About Me.pdf`

## Update Content

To update your portfolio:

1. Make changes to your files
2. Commit changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

3. Redeploy:
```bash
npm run deploy
```

## Local Development

Run locally before deploying:
```bash
npm start
```

Test at `http://localhost:3000`

## Build for Production

Test production build locally:
```bash
npm run build
npx serve -s build
```

## Troubleshooting

### Images not showing
- Check file paths start with `/` (e.g., `/images/photo.png`)
- Verify files are in `public/` folder
- Clear browser cache

### Routing issues
- Ensure `basename="/Instructional_Design_Portfolio"` is set in App.js
- Use `<Link>` from react-router-dom, not `<a>` tags

### 404 on refresh
- GitHub Pages handles this automatically with React Router
- If issues persist, add a 404.html redirect

## Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

---

**Your portfolio will be live at:**
`https://kofijoo.github.io/Instructional_Design_Portfolio`

**Repository:**
`https://github.com/Kofijoo/Instructional_Design_Portfolio`
