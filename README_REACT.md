# Joshua Agyekum - React Portfolio

Professional portfolio website built with React showcasing instructional design and educational technology expertise.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

The app will open at `http://localhost:3000`

3. **Build for production:**
```bash
npm build
```

## 📁 Project Structure

```
src/
├── App.js                 # Main app with routing
├── index.js              # React entry point
├── components/
│   ├── Navigation.js     # Top navigation bar
│   └── Footer.js         # Footer component
├── pages/
│   ├── About.js          # About Me page
│   ├── Projects.js       # Work Samples & Projects
│   ├── Experience.js     # Professional Experience
│   ├── Certifications.js # Certifications & Education
│   ├── Recommendations.js # Professional Recommendations
│   ├── Articles.js       # LinkedIn Articles
│   └── Contact.js        # Contact Information
└── styles/
    └── App.css           # All styles

public/
├── index.html            # HTML template
└── images/               # Copy your images here
    ├── ja_logo.png
    └── profile_photo.png
```

## 🎨 Features

- ✅ React Router for navigation
- ✅ Component-based architecture
- ✅ Fully responsive design
- ✅ Professional styling
- ✅ 7 complete pages
- ✅ Clean, maintainable code

## 📄 Pages

1. **About Me** - Professional introduction with photo
2. **Projects** - 5 detailed project case studies
3. **Experience** - Timeline of professional roles
4. **Certifications** - Education and certifications
5. **Recommendations** - Professional testimonials
6. **Articles** - LinkedIn posts and articles
7. **Contact** - Contact information and social links

## 🔧 Customization

### Update Content
Edit the respective page files in `src/pages/` to update content.

### Modify Styles
All styles are in `src/styles/App.css` - organized by component.

### Add Images
Place images in `public/images/` folder and reference as `/images/filename.png`

## 🌐 Deployment

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
```bash
npm install -g vercel
vercel
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🛠️ Technologies

- React 18.2
- React Router 6.20
- CSS3 (Flexbox & Grid)
- Modern JavaScript (ES6+)

## 📧 Contact

Joshua Agyekum
- Email: joshuaagyekum21@gmail.com
- LinkedIn: [joshua-agyekum](https://www.linkedin.com/in/joshua-agyekum/)
- Location: Oslo, Norway

---

**© 2025 Joshua Agyekum | Instructional Designer & EdTech Developer**
