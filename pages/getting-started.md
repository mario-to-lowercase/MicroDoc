# 🚀 Getting Started with Microblog

This comprehensive guide will walk you through setting up, configuring, and using Microblog for your website or blog.

---

## 📋 Prerequisites

Before installing Microblog, ensure you have:

- Basic knowledge of HTML, Markdown, and JSON
- A text editor for editing files (VS Code, Sublime Text, etc.)
- A web server or hosting service to deploy your site (optional for local testing)
- Git installed (for cloning the repository)

---

## 💿 Installation Options

### 🔄 Option 1: Clone from GitHub (Recommended)

1. Open your terminal or command prompt
2. Navigate to the directory where you want to install Microblog
3. Clone the repository:
   ```bash
   git clone https://github.com/mario-to-lowercase/microblog.git
   ```
4. Navigate to the newly created directory:
   ```bash
   cd microblog
   ```

### 📦 Option 2: Download ZIP File

1. Visit the [Microblog GitHub page](https://github.com/mario-to-lowercase/microblog)
2. Click the "Code" button and select "Download ZIP"
3. Extract the ZIP file to your desired location

### 🍴 Option 3: Fork the Repository

If you plan to contribute to Microblog or want to maintain your own version:

1. Visit the [Microblog GitHub page](https://github.com/mario-to-lowercase/microblog)
2. Click the "Fork" button in the top-right corner
3. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/microblog.git
   ```

---

## 📁 File Structure Overview

After installation, you'll have a directory with these key files and folders:

```
microblog/
│
├── index.html         # Main HTML file that loads the blog
├── style.css          # Default styling
├── custon.css         # Custom styling
├── microblog.js       # Core functionality 
├── settings.json      # Configuration file
├── favicon.ico        # Default favicon
├── logo.png           # Logo for navbar
└── pages/             # Your pages (documentation on install)
```

---

## 📝 Creating Your First Post

1. Create a new Markdown file in the root directory:
   ```bash
   touch my-first-post.md
   ```

2. Open `my-first-post.md` in your text editor and add some content:
   ```markdown
   # My First Microblog Post

   Welcome to my blog! This is my first post using Microblog.

   ## Why I Chose Microblog

   I wanted a simple, lightweight blogging platform that:

   - Uses Markdown for content
   - Doesn't require a database
   - Is easy to customize

   ```

3. Update the `settings.json` file to include your new post (see Configuration section below)

---

## ⚙️ Basic Configuration

The `settings.json` file controls how your Microblog site works. Here's a minimal configuration example:

```json
{
  "sitename": "My Microblog",
  "base-page": "my-first-post.md",
  "favicon": "favicon.ico",
  "navigation": {
    "title": "My Blog",
    "logo": {
      "enabled": false,
      "url": ""
    },
    "color": "#007bff",
    "sticky": true,
    "pages-title": "Posts",
    "external-url": {
      "enabled": false,
      "title": "",
      "url": ""
    },
    "sidebar-color": "#4d4d4d"
  },
  "pages": [
    {
      "file": "pages/my-first-post.md",
      "title": "My First Post",
      "url": "/first-post",
      "category": "Blog",
      "enabled": true
    }
  ],
  "footer": {
    "enabled": true,
    "color": "#333",
    "fixed": false,
    "content": "© 2024 My Blog | All rights reserved."
  },
  "credits": true
}
```

---

## 🧪 Testing Your Blog

### 🏠 Local Testing

For basic testing, you can simply open the `index.html` file in your browser:

1. Navigate to your Microblog directory
2. Double-click on `index.html` or open it with your browser

Note: Some features like URL routing may not work properly with direct file access.

### 🔌 Using a Local Server

For more accurate testing, use a local web server:

#### 🐍 Using Python (Simple Option)

1. Navigate to your Microblog directory in the terminal
2. Run one of these commands:
   - Python 3: `python -m http.server`
   - Python 2: `python -m SimpleHTTPServer`
3. Open `http://localhost:8000` in your browser

#### 📦 Using Node.js and http-server

1. Install http-server if you haven't already:
   ```bash
   npm install -g http-server
   ```
2. Navigate to your Microblog directory
3. Run:
   ```bash
   http-server
   ```
4. Open `http://localhost:8080` in your browser

---

## 🌐 Deployment

### 🐙 Deploying to GitHub Pages

1. Create a GitHub repository for your Microblog site
2. Push your Microblog files to the repository:
   ```bash
   git add .
   git commit -m "Initial Microblog setup"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main`)
6. Click "Save"

Your site will be available at `https://your-username.github.io/your-repo-name/`

### 🏢 Deploying to a Web Hosting Service

1. Prepare your files locally with your desired configuration
2. Upload all files to your web hosting service using FTP or their provided upload tool
3. Ensure server configuration is set up correctly (see Server Configuration document)

---

## ➕ Adding More Content

### 📄 Creating New Posts

1. Create a new Markdown file in the pages directory
2. Add your content using Markdown formatting
3. Update `settings.json` to include the new post:
   ```json
   "pages": [
     // Existing pages...
     {
       "file": "pages/new-post.md",
       "title": "My New Post",
       "url": "/new-post",
       "category": "Blog",
       "enabled": true
     }
   ]
   ```

### 📚 Organizing Content with Categories

Use the `category` field in the page configuration to organize your content:

```json
"pages": [
  {
    "file": "pages/tech-post.md",
    "title": "Technology Update",
    "url": "tech-update",
    "category": "Technology",
    "enabled": true
  },
  {
    "file": "pages/personal-post.md",
    "title": "Personal Thoughts",
    "url": "personal",
    "category": "Personal",
    "enabled": true
  }
]
```

This will group your posts by category in the navigation menu.

---

## 🖼️ Using Images in Your Posts

1. Create an `images` folder in your Microblog directory
2. Add your images to this folder
3. Reference them in your Markdown:
   ```markdown
   ![My Image Description](images/my-image.jpg)
   ```

---

## 🎨 Customizing Appearance

### 🖌️ Basic CSS Customization

1. Create a new CSS file (e.g., `custom.css`)
2. Add your custom styles
3. Link it in the `index.html` file by adding this line:
   ```html
   <link rel="stylesheet" href="custom.css">
   ```

### 🎭 Changing Colors

Edit the color values in `settings.json`:

```json
"navigation": {
  "color": "#3498db"
},
"footer": {
  "color": "#2c3e50"
}
```

---

## 🔧 Troubleshooting Common Issues

### 🔍 Posts Not Appearing

- Check that the file path in `settings.json` is correct
- Ensure the page is enabled (`"enabled": true`)
- Verify the file exists and has the correct extension

### 🖌️ Styling Issues

- Check for CSS conflicts in custom stylesheets
- Verify browser compatibility
- Use browser developer tools to inspect elements

### 🔗 URL Routing Problems

- Ensure server configuration is correct (see Server Configuration document)
- Check that page URLs in `settings.json` are properly formatted
- Verify that the web server supports URL rewriting

---

## 🔜 Next Steps

After setting up your basic Microblog, consider:

- Configuring server settings for better URL handling
- Adding custom themes
- Setting up a custom domain
- Implementing a content creation workflow

For more detailed information on these topics, refer to the other documentation files in this series.