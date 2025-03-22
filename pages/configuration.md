# 🛠️ Microblog Configuration Settings Guide

This comprehensive guide explains all available configuration options in the `settings.json` file, which controls the behavior and appearance of your Microblog site.

---

## 📄 Configuration File Overview

The `settings.json` file is the central configuration point for your Microblog installation. It controls everything from basic site information to navigation structure, page definitions, and visual styling.

### 📂 File Location

The `settings.json` file should be placed in the root directory of your Microblog installation.

### 📝 JSON Format

The configuration file uses JSON (JavaScript Object Notation) format. Some important points to remember:

- Property names must be in double quotes
- String values must be in double quotes
- Boolean values are written as `true` or `false` without quotes
- Numbers are written without quotes
- Arrays are enclosed in square brackets `[]`
- Objects are enclosed in curly braces `{}`
- Commas separate items in arrays and objects
- No trailing commas are allowed after the last item

### 📋 Example Configuration

Here's a complete example of a `settings.json` file:

```json
{
  "sitename": "Microblog | PixelFox.io",
  "base-page": "readme.md",
  "favicon": "favicon.ico",
  "navigation": {
    "title": "Microblog",
    "logo": {
      "enabled": true,
      "url": "logo.png"
    },
    "color": "#007bff",
    "sticky": true,
    "pages-title": "Posts",
    "external-url": {
      "enabled": true,
      "title": "GitHub",
      "url": "https://github.com/mario-to-lowercase/Microblog"
    },
    "sidebar-color": "#4d4d4d"
  },
  "pages": [
    {
      "file": "readme.md",
      "title": "Readme",
      "url": "/",
      "category": "General",
      "enabled": true
    },
    {
      "file": "pages/markdown-demo.md",
      "title": "Markdown Overview",
      "url": "/markdown",
      "category": "Demos",
      "enabled": true
    }
  ],
  "footer": {
    "enabled": true,
    "color": "#333",
    "fixed": false,
    "content": "© 2025 PixelFox.io | All rights reserved."
  },
  "credits": true
}
```

---

## 🏠 Site-wide Settings

These settings control basic information about your Microblog site.

### 📛 sitename

The `sitename` setting defines the title that appears in the browser tab or window title bar.

**Type**: String  
**Default**: "Microblog"  
**Example**:
```json
"sitename": "My Tech Blog"
```

**Best Practices**:
- Keep it concise (under 60 characters)
- Include your brand or site name
- Consider adding a brief descriptor for SEO benefits

### 📑 base-page

The `base-page` setting specifies which Markdown file should be displayed when a user first visits your site or navigates to the root URL.

**Type**: String  
**Default**: "readme.md"  
**Example**:
```json
"base-page": "homepage.md"
```

**Notes**:
- This should be the filename of a Markdown file in your Microblog root directory
- The file must be included in your `pages` configuration (see below)
- This page will be shown when users navigate to your site's root URL

### 🌐 favicon

The `favicon` setting specifies the icon that appears in browser tabs, bookmarks, and other locations.

**Type**: String  
**Default**: "favicon.ico"  
**Example**:
```json
"favicon": "images/site-icon.ico"
```

**Technical Details**:
- Recommended format: ICO, PNG, or SVG
- Recommended size: 32x32 pixels (minimum), with larger versions (up to 512x512) for high-resolution displays
- Path is relative to the root directory of your Microblog installation

---

## 🧭 Navigation Settings

The `navigation` object controls the appearance and behavior of the navigation bar at the top of your Microblog site.

### 🏷️ navigation.title

The text that appears in the navigation bar as your site's title.

**Type**: String  
**Default**: "Microblog"  
**Example**:
```json
"title": "John's Coding Blog"
```

### 🖼️ navigation.logo

Controls the display of a logo image in the navigation bar.

**Type**: Object  
**Properties**:
- `enabled` (Boolean): Whether to display a logo
- `url` (String): Path to the logo image file

**Example**:
```json
"logo": {
  "enabled": true,
  "url": "images/logo.png"
}
```

**Technical Details**:
- Recommended logo size: 30-40px height
- Supported formats: PNG, JPG, SVG
- For best results, use an image with transparent background
- Path is relative to the root directory

### 🎨 navigation.color

Sets the background color of the navigation bar.

**Type**: String (Hex color code)  
**Default**: "#007bff" (blue)  
**Example**:
```json
"color": "#2c3e50"
```

**Technical Details**:
- Must be a valid hexadecimal color code starting with #
- Controls the background color of the entire navigation bar
- Choose a color that provides good contrast with white text

### 📌 navigation.sticky

Determines whether the navigation bar remains visible at the top of the screen when scrolling down the page.

**Type**: Boolean  
**Default**: true  
**Example**:
```json
"sticky": false
```

**User Experience Considerations**:
- Sticky navigation (true) provides easier navigation for longer pages
- Non-sticky navigation (false) gives more screen space for content

### 📚 navigation.pages-title

The label used for the dropdown menu that contains your blog posts or pages.

**Type**: String  
**Default**: "Posts"  
**Example**:
```json
"pages-title": "Articles"
```

**Notes**:
- This label only appears on desktop views
- Choose a term that best represents your content (e.g., "Posts," "Articles," "Guides")

### 🔗 navigation.external-url

Configures an external link in the navigation bar, typically used for linking to a GitHub repository, social media profile, or related site.

**Type**: Object  
**Properties**:
- `enabled` (Boolean): Whether to display the external link
- `title` (String): The text label for the link
- `url` (String): The full URL for the link

**Example**:
```json
"external-url": {
  "enabled": true,
  "title": "Twitter",
  "url": "https://twitter.com/yourusername"
}
```

**Notes**:
- External URLs should include the full URL with protocol (http:// or https://)
- The link will open in a new tab/window

### 📱 navigation.sidebar-color

Sets the background color of the mobile navigation sidebar that appears when the menu button is tapped on smaller screens.

**Type**: String (Hex color code)  
**Default**: "#4d4d4d" (dark gray)  
**Example**:
```json
"sidebar-color": "#34495e"
```

**Technical Details**:
- Must be a valid hexadecimal color code starting with #
- Only affects the mobile sidebar navigation
- Choose a color that provides good contrast with white text

---

## 📄 Pages Configuration

The `pages` array defines all the content pages available on your Microblog site. Each page is represented by an object with several properties.

### 📝 Page Object Properties

Each object in the `pages` array must have the following properties:

- `file` (String): The filename of the Markdown file containing the page content
- `title` (String): The display title for the page in navigation menus
- `url` (String): The URL path for accessing the page
- `category` (String): A category label for organizing pages
- `enabled` (Boolean): Whether the page is active and should be displayed

**Example**:
```json
"pages": [
  {
    "file": "pages/welcome.md",
    "title": "Welcome to My Blog",
    "url": "/",
    "category": "Introduction",
    "enabled": true
  },
  {
    "file": "pages/project-a.md",
    "title": "Project A Overview",
    "url": "/projects/a",
    "category": "Projects",
    "enabled": true
  },
  {
    "file": "pages/draft-post.md",
    "title": "Upcoming Feature (Draft)",
    "url": "/draft",
    "category": "Drafts",
    "enabled": false
  }
]
```

### 📂 File Property

The `file` property specifies the Markdown file that contains the content for this page.

**Technical Details**:
- Path is relative to the Microblog root directory
- File must exist and be a valid Markdown file
- File should have `.md` extension

**Best Practices**:
- Use lowercase filenames with no spaces
- Use descriptive filenames that reflect the content
- Keep filenames relatively short

### 📌 Title Property

The `title` property sets the display name for the page in navigation menus and as the page heading.

**Best Practices**:
- Keep titles concise but descriptive
- Use title case (capitalize important words)
- Avoid very long titles that might break the layout

### 🔗 URL Property

The `url` property defines the URL path where the page can be accessed.

**Technical Details**:
- Should start with a forward slash (/)
- Should contain only URL-safe characters
- Can include subdirectories (e.g., "/blog/2023/first-post")

**Best Practices**:
- Use lowercase
- Use hyphens instead of spaces
- Keep URLs short but descriptive
- Use a logical structure for nested content

### 🏷️ Category Property

The `category` property groups pages in the navigation menu.

**User Experience**:
- Pages with the same category will be grouped together
- Categories appear as sections in the navigation menu
- Choose categories that logically organize your content

**Best Practices**:
- Use broad categories for main content types
- Be consistent with category naming
- Use singular forms (e.g., "Project" not "Projects")
- Limit the total number of categories to prevent overwhelming navigation

### ✅ Enabled Property

The `enabled` property controls whether a page is active and visible in the navigation.

**Usage Scenarios**:
- Set to `false` for draft content you're still working on
- Set to `false` for seasonal or temporary content you want to keep but not display
- Set to `false` for archived content you might want to reactivate later

**Notes**:
- Disabled pages remain in the configuration but are not visible to users
- Disabled pages cannot be accessed via direct URL

---

## 👣 Footer Settings

The `footer` object controls the appearance and content of the page footer.

### 👁️ footer.enabled

Determines whether the footer is displayed at all.

**Type**: Boolean  
**Default**: true  
**Example**:
```json
"enabled": false
```

### 🎨 footer.color

Sets the background color of the footer.

**Type**: String (Hex color code)  
**Default**: "#333" (dark gray)  
**Example**:
```json
"color": "#2c3e50"
```

**Design Considerations**:
- Should contrast well with the footer text (which is white)
- Often matches or complements the navigation bar color

### 📌 footer.fixed

Determines whether the footer stays fixed at the bottom of the viewport or appears at the end of the content.

**Type**: Boolean  
**Default**: false  
**Example**:
```json
"fixed": true
```

**User Experience Notes**:
- Fixed footers (true) are always visible, which can be useful for important information
- Non-fixed footers (false) only appear when users scroll to the bottom of the page
- Fixed footers reduce the available space for content

### 📝 footer.content

Specifies the HTML content to display in the footer.

**Type**: String  
**Default**: "© [current year] | All rights reserved."  
**Example**:
```json
"content": "© 2024 My Blog | <a href='/privacy'>Privacy Policy</a> | <a href='/terms'>Terms of Use</a>"
```

**Technical Details**:
- Can contain HTML for formatting and links
- Use proper HTML entity encoding for special characters
- Current year is automatically updated

---

## 🙏 Credits Setting

The `credits` setting controls whether attribution to Microblog is displayed in the footer.

**Type**: Boolean  
**Default**: true  
**Example**:
```json
"credits": true
```

**Notes**:
- When enabled, adds "Made with Microblog" text to the footer
- Helps others discover the Microblog platform
- Consider keeping this enabled to support the project

---

## 🔧 Advanced Configuration

### 🎨 Custom CSS Integration

While not directly part of `settings.json`, you can add custom CSS to modify the appearance of your Microblog site:

1. Create a file named `custom.css` in your Microblog root directory
2. Add your custom CSS rules to this file
3. The Microblog system will automatically detect and load this file

**Example custom.css**:
```css
body {
  font-family: 'Georgia', serif;
}

h1, h2, h3 {
  color: #336699;
}

.content {
  max-width: 800px;
  line-height: 1.6;
}
```

### 🔗 Multiple External Links

While the base configuration supports one external link, you can modify the `index.html` file to add more:

1. Locate the navigation section in `index.html`
2. Add additional link elements following the pattern of the existing external link
3. Style them using custom CSS if needed

---

## ✅ Configuration Validation

It's important to ensure your `settings.json` file contains valid JSON. Invalid configurations can prevent your Microblog site from loading properly.

### ❌ Common JSON Errors

- Missing commas between properties
- Extra commas after the last item in an array or object
- Missing quotes around property names
- Unmatched brackets or braces
- Using single quotes instead of double quotes

### 🔍 Validation Tools

Before deploying changes to your configuration, validate your JSON using:

1. Online tools like [JSONLint](https://jsonlint.com/)
2. VS Code's built-in JSON validation
3. Command-line tools like `jq`

---

## 📋 Configuration Examples

### 📝 Minimal Blog Configuration

```json
{
  "sitename": "My Microblog",
  "base-page": "home.md",
  "favicon": "favicon.ico",
  "navigation": {
    "title": "My Blog",
    "logo": {
      "enabled": false,
      "url": ""
    },
    "color": "#333333",
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
      "file": "pages/home.md",
      "title": "Home",
      "url": "/",
      "category": "Main",
      "enabled": true
    },
    {
      "file": "pages/about.md",
      "title": "About Me",
      "url": "/about",
      "category": "Main",
      "enabled": true
    }
  ],
  "footer": {
    "enabled": true,
    "color": "#333333",
    "fixed": false,
    "content": "© 2025 My Blog"
  },
  "credits": true
}
```

### 📚 Project Documentation Configuration

```json
{
  "sitename": "Project Docs",
  "base-page": "overview.md",
  "favicon": "project-icon.ico",
  "navigation": {
    "title": "Project Name",
    "logo": {
      "enabled": true,
      "url": "project-logo.png"
    },
    "color": "#6200ea",
    "sticky": true,
    "pages-title": "Documentation",
    "external-url": {
      "enabled": true,
      "title": "GitHub",
      "url": "https://github.com/username/project"
    },
    "sidebar-color": "#4d0099"
  },
  "pages": [
    {
      "file": "pages/overview.md",
      "title": "Overview",
      "url": "/",
      "category": "Introduction",
      "enabled": true
    },
    {
      "file": "pages/installation.md",
      "title": "Installation Guide",
      "url": "/install",
      "category": "Getting Started",
      "enabled": true
    },
    {
      "file": "pages/api.md",
      "title": "API Reference",
      "url": "/api",
      "category": "Reference",
      "enabled": true
    }
  ],
  "footer": {
    "enabled": true,
    "color": "#6200ea",
    "fixed": false,
    "content": "© 2025 Project Name | <a href='https://example.com'>Official Website</a>"
  },
  "credits": true
}
```

---

## 💡 Configuration Best Practices

1. **Plan Your Structure First**: Before defining pages, plan your content structure and categories
2. **Use Meaningful URLs**: Create clean, descriptive URLs that reflect the content
3. **Maintain Consistency**: Use consistent naming conventions for files, titles, and categories
4. **Test Your Configuration**: After making changes, test all navigation and links
5. **Version Control**: Keep your `settings.json` file in version control to track changes
6. **Regular Backups**: Backup your configuration before making significant changes
7. **Color Coordination**: Use a cohesive color scheme for navigation and footer
8. **Mobile Consideration**: Test your configuration on mobile devices to ensure good usability

---

## 🔧 Troubleshooting

### 🚫 Page Not Displaying

**Problem**: A page is defined in the configuration but doesn't appear.
**Possible Solutions**:
- Check that the `enabled` property is set to `true`
- Verify that the file exists in the specified location
- Ensure the file has the correct extension
- Check for JSON syntax errors in your configuration

### 🔗 Navigation Not Working

**Problem**: Navigation elements don't respond or link to the wrong pages.
**Possible Solutions**:
- Verify URL paths start with a forward slash
- Check server configuration for URL rewriting
- Ensure page URLs are unique
- Validate the JSON structure of your configuration

### 🎨 Styling Issues

**Problem**: Colors or layout don't match your configuration.
**Possible Solutions**:
- Ensure color codes are valid hexadecimal values
- Check for custom CSS that might override configurations
- Clear browser cache to ensure new settings are applied
- Verify JSON syntax in your configuration file