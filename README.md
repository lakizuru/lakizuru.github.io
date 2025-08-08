# Lakisuru Semasinghe - Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic content management through JSON files, dark/light mode toggle, and optimized for GitHub Pages deployment.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and micro-interactions
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Dynamic Content Management**: Easy content updates through JSON files
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Print-Friendly**: Optimized resume section for printing
- **GitHub Pages Ready**: Static build optimized for GitHub Pages hosting

## 📁 Project Structure

```
├── public/
│   ├── data/           # JSON files for dynamic content
│   │   ├── about.json  # Personal information and stats
│   │   ├── skills.json # Skills and technologies
│   │   ├── experience.json # Work experience, education, certifications
│   │   ├── projects.json   # Portfolio projects
│   │   └── blog.json   # Blog posts and publications
│   └── ...
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Hero.tsx    # Hero section
│   │   ├── About.tsx   # About section
│   │   ├── Skills.tsx  # Skills section
│   │   ├── Experience.tsx # Experience timeline
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Blog.tsx    # Blog section
│   │   ├── Contact.tsx # Contact form and info
│   │   └── Footer.tsx  # Footer
│   ├── context/        # React contexts
│   │   └── ThemeContext.tsx # Dark/light mode management
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── index.html          # Main HTML file with SEO meta tags
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # This file
```

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Fonts**: Inter from Google Fonts

## 📝 Content Management

### Adding New Content

All content is managed through JSON files in the `public/data/` directory:

#### About Section (`public/data/about.json`)
```json
{
  "title": "Your professional title",
  "description": "Your professional summary",
  "details": {
    "location": "Your location",
    "age": 25,
    "experience": "Years of experience",
    "education": "Your education"
  },
  "highlights": ["Achievement 1", "Achievement 2"],
  "stats": {
    "experience": 2,
    "certifications": 3,
    "awards": 9,
    "communities": 3
  }
}
```

#### Skills Section (`public/data/skills.json`)
```json
{
  "categories": [
    {
      "name": "Category Name",
      "skills": [
        {
          "name": "Skill Name",
          "icon": "🚀",
          "category": "subcategory"
        }
      ]
    }
  ]
}
```

#### Experience Section (`public/data/experience.json`)
```json
{
  "items": [
    {
      "type": "work|education|certification|volunteer",
      "title": "Position Title",
      "organization": "Company/Institution",
      "location": "Location",
      "period": "Date Range",
      "description": "Brief description",
      "highlights": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

#### Projects Section (`public/data/projects.json`)
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "Image URL",
      "technologies": ["Tech1", "Tech2"],
      "liveUrl": "https://live-demo.com",
      "githubUrl": "https://github.com/username/repo",
      "date": "2023",
      "featured": true
    }
  ]
}
```

#### Blog Section (`public/data/blog.json`)
```json
{
  "posts": [
    {
      "title": "Article Title",
      "excerpt": "Article summary",
      "url": "https://medium.com/@username/article",
      "date": "2023",
      "readTime": "5 min read",
      "type": "article|video",
      "platform": "Medium",
      "image": "Image URL"
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lakizuru/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Fork this repository**
2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "GitHub Actions" as source
3. **Push changes** - The site will automatically deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Green shades */ },
  accent: { /* Orange shades */ }
}
```

### Fonts
Change fonts in `index.html` and update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
}
```

### Layout
Modify components in `src/components/` to customize layouts and styling.

## 📊 Performance Optimizations

- **Image Optimization**: Uses Pexels URLs for placeholder images
- **Font Loading**: Preconnect to Google Fonts for faster loading
- **Code Splitting**: Automatic code splitting with Vite
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Create corresponding JSON data file if needed
4. Update navigation in `src/components/Header.tsx`

## 📞 Support

If you encounter any issues or have questions:

1. **Check the documentation** above
2. **Look at the JSON file examples** for correct data structure
3. **Check the browser console** for error messages
4. **Open an issue** on GitHub with detailed information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design inspiration**: Modern portfolio trends and Apple's design principles
- **Icons**: Lucide React icon library
- **Images**: Pexels for placeholder images
- **Fonts**: Inter font family from Google Fonts

---

**Built with ❤️ by Lakisuru Semasinghe**

*This README provides comprehensive documentation for setting up, customizing, and maintaining your portfolio website. For additional support, feel free to reach out through the contact form on the website.*