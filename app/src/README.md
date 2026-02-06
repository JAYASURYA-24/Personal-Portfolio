# 🚀 Surya's Portfolio Website

A modern, responsive personal portfolio website built with **React** (JavaScript) and **CSS3**. Features include dark mode, smooth scrolling, form validation, and beautiful animations.

![Portfolio Preview](https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?w=800)

## ✨ Features

### 🎨 Design & UI/UX
- **Clean, Professional Design** - Developer-style modern interface
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - CSS keyframe animations for enhanced user experience
- **Hover Effects** - Interactive elements with smooth transitions

### 📱 Sections
1. **Header** - Fixed navigation with smooth scrolling
2. **Hero** - Eye-catching introduction with CTAs and social links
3. **About** - Personal story with highlights and statistics
4. **Skills** - Categorized skills with animated progress bars
5. **Projects** - Portfolio showcase with images and links
6. **Experience** - Timeline-based work history and education
7. **Contact** - Validated contact form with success states
8. **Footer** - Quick links, services, and social media

### 🛠️ Technical Features
- ✅ React Functional Components (JavaScript/JSX)
- ✅ React Hooks (useState, useEffect, useRef)
- ✅ Vanilla CSS3 (No Tailwind/Bootstrap)
- ✅ Flexbox & CSS Grid Layouts
- ✅ Form Validation
- ✅ Smooth Scroll Navigation
- ✅ Intersection Observer API
- ✅ LocalStorage for theme persistence
- ✅ Responsive Breakpoints
- ✅ SEO-Friendly HTML Structure

## 📂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Projects.jsx      # Projects section
│   │   ├── Experience.jsx    # Experience & Education
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer
│   ├── styles/
│   │   ├── main.css          # Global styles & utilities
│   │   ├── header.css        # Header styles
│   │   ├── hero.css          # Hero section styles
│   │   ├── sections.css      # About, Skills, Projects
│   │   ├── experience.css    # Experience timeline styles
│   │   ├── contact.css       # Contact form styles
│   │   └── footer.css        # Footer styles
│   ├── App.jsx               # Main app component
│   └── index.js              # Entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone or download the project**
```bash
git clone https://github.com/surya/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm start
# or
yarn start
```

4. **Open in browser**
```
http://localhost:3000
```

The app will automatically reload when you make changes.

## 🎨 Customization

### Update Personal Information

#### 1. **Name, Role, and Contact Info**
Edit the following files:
- `src/components/Hero.jsx` - Name and role
- `src/components/Contact.jsx` - Email, phone, location
- `src/components/Footer.jsx` - Footer information

#### 2. **About Section**
Edit `src/components/About.jsx`:
```javascript
<p>
  Your custom description here...
</p>
```

#### 3. **Skills**
Edit `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90 },
      // Add more skills
    ],
  },
];
```

#### 4. **Projects**
Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: 'project-image-url',
    techStack: ['Tech1', 'Tech2'],
    github: 'github-url',
    live: 'live-demo-url',
    category: 'Web/Mobile',
  },
];
```

#### 5. **Experience & Education**
Edit `src/components/Experience.jsx`:
```javascript
const experiences = [
  {
    type: 'work',
    title: 'Job Title',
    company: 'Company Name',
    period: 'Date Range',
    description: 'Job description...',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
];
```

### Update Colors & Styles

Edit `src/styles/main.css`:
```css
:root {
  --accent-blue: #3b82f6;    /* Change primary color */
  --accent-purple: #8b5cf6;  /* Change secondary color */
  --gradient-primary: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
```

### Update Images

Replace project images in `src/components/Projects.jsx` with your own:
```javascript
image: 'https://your-image-url.com/image.jpg'
```

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Create a Netlify account at https://netlify.com
   - Click "New site from Git" or drag & drop the `build` folder
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`

3. **Custom Domain** (Optional)
   - Go to Domain Settings
   - Add your custom domain

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow the prompts to complete deployment.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Technologies

- **React 18** - UI library
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Styling (Flexbox, Grid, Animations)
- **HTML5** - Semantic markup
- **LocalStorage API** - Theme persistence
- **Intersection Observer API** - Scroll animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Surya** - Flutter & React Developer

- 📧 Email: surya@example.com
- 💼 LinkedIn: [linkedin.com/in/surya](https://linkedin.com/in/surya)
- 🐙 GitHub: [github.com/surya](https://github.com/surya)

---

⭐ **If you found this helpful, please give it a star!**

Made with ❤️ using React & CSS
