
# Microblog  ![GitHub Repo stars](https://img.shields.io/github/stars/mario-to-lowercase/microblog)

**Microblog** is a lightweight, minimalist blogging tool that allows you to create and share posts using Markdown. With its simple setup and file-based storage, Microblog is perfect for anyone looking to maintain a clean and straightforward blogging experience.

---

## 🌟 Features  

- **🖋️ Markdown-Based**  
  Write and format posts using Markdown for a clean and intuitive writing experience.

- **🚀 Lightweight and Fast**  
  Built with only four files (HTML, CSS, JS and JSON), Microblog is small, efficient, and easy to set up.

- **📂 File-Based Storage**  
  Posts are stored as plain `.md` files—no database or complicated setups required.  

- **🎨 Customizable Themes**  
  Change the look and feel of your blog effortlessly with themes.

---

## 🖥️ Demo's

Explore the features and experience how easy it is to create and manage your blog, notes or website using Markdown!

You can try out a live demos of Microblog here:
- [Official Microblog Documentation](https://microblog.pixelfox.io).
- [Pixelfox.io Website](https://pixelfox.io).

If you're using Microblog for your site, feel free to reach out to get your website listed here as an example!

---

## 🛠️ Upcoming Features

I'am actively developing new features and currently working on:

-  **Themes**: Add and customize themes to suit your preferences.
-  **Admin Page**: Manage posts with a built-in Markdown editor.
-  **Light/Darkmode**: Option to set and toggle between modes

---

## 🚀 Getting Started  

1. Clone the repository:  
   ```bash
   git clone https://github.com/mario-to-lowercase/microblog.git
   ```
2. Place your `.md` files in the root folder.  
3. Open `index.html` in your browser to start blogging.

---

## 🌍 Server Configuration

To enable direct access to pages using custom URLs, include the following configuration based on your web server:

#### Apache (.htaccess)

If you are using Apache, create or update your `.htaccess` file with the following rules:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  RewriteRule ^(.*)$ index.html?url=$1 [QSA,L]
<IfModule mod_rewrite.c>
```

#### Nginx

If you are using Nginx, add the following configuration to your server block:

```
location / {
    try_files $uri /index.html?url=$uri;
}
```

This ensures that custom URLs are properly routed to the index.html file, allowing your Microblog pages to be accessible via their defined URLs.

---

## 🛠️ Configuration Settings
Microblog is easily customizable through the settings.json file. This file allows you to configure various aspects of your blog, such as the site title, navigation, footer, and pages.
To customize your Microblog experience, simply open the `settings.json` file and adjust the parameters according to your preferences.
For example, to change the site title, update the `sitename` field, or to enable the sticky navigation bar, set `sticky` to `true`.

Below is a breakdown of the key settings and their purpose.

### 🏠 sitename
- Description: Sets the title of your blog, which will appear in the browser tab.
- Example:
  ```json
    "sitename": "Microblog | PixelFox.io"
  ```
### 📑 base-page
- Description: Specifies the default page to be displayed when opening your blog. Typically, this will be a `.md` file.
- Example
  ```json
    "base-page": "readme.md"
  ```
### 🌐 favicon
- Description: Defines the icon that will appear in the browser tab for your site. This should be a `.ico` file.
- Example
  ```json
    "favicon": "favicon.ico"
  ```

### 🧭 navigation
- Description: Controls the navigation bar at the top of your blog. You can customize the title, add external links, and enable a sticky header.

  - `title`: The title of your blog that appears in the navigation bar.
  - `logo`: A logo or icon that appears in the navigation bar.
    - `enabled`: Weather to display the navbar icon or not
    - `url`: Path to your image file
  - `color`: The hex colorcode used for the navigation.
  - `sticky`: When set to true, the navigation bar will remain at the top of the page when scrolling.
  - `pages-title`: The label used for the posts section in the navigation (for desktop devices).
  - `external-url`: Defines an external URL to be added to the navigation, such as a GitHub link.
  - `sidebar-color`: The hex colorcode used for the sidebar (mobile navigation)
- Example:
  ```json
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
    }
  ```
### 📄 pages
- Description: Specifies the pages that will be included in your blog. Each page is defined by a `.md` file, a title, a category, and an enabled flag to indicate if the page is active.
  Pages can be used to create different sections or posts on your blog.
  - `file`: The path to the `.md` file that contains the content for the page.
  - `title`: The title of the page, which will be displayed in the navigation and header.
  - `url`: The url that will be used for this page in the adressbar.
  - `category`: The category that the page belongs to, helping you organize and group similar content.
  - `enabled`: A boolean flag that indicates whether the page is active and should be displayed. Set this to `true` to include the page, or `false` to hide it from the navigation.
- Example:
  ```json
  "pages": [
    {
        "file": "readme.md",
        "title": "Readme",
        "url": "/",
        "category": "General",
        "enabled": true
    },
    {
        "file": "demo.md",
        "title": "Markdown Overview",
        "url": "/markdown",
        "category": "Demos",
        "enabled": false
    }
  ]
  ```
### 📜 footer
- Description: Configures the footer of the page, including enabling/disabling it and whether it should be fixed at the bottom of the screen.

  - `enabled`: Set to true to display the footer.
  - `color`: The hex colorcode used for the footer.
  - `fixed`: When set to true, the footer will remain fixed at the bottom of the page.
  - `content`: The text or HTML content to be displayed in the footer.
- Example:
  ```json
    "footer": {
      "enabled": true,
      "color": "#333",
      "fixed": false,
      "content": "© 2024 PixelFox.io | All rights reserved."
    }
  ```
### 🎨 credits
- Description: Toggles the display of credits. When set to true, the credits `Made with Microblog` will be shown in the footer.
- Example:
  ```json
    "credits": true
  ```
---

## 🤝 Contributing  

We welcome contributions to improve Microblog! Follow these steps:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/new-feature
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add a new feature"
   ```  
4. Push your branch:  
   ```bash
   git push origin feature/new-feature
   ```  
5. Submit a pull request for review.  

---

## 📜 License  

Microblog is released under the [Apache 2.0 License](https://github.com/mario-to-lowercase/Microblog/blob/master/LICENSE).  
