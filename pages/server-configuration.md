# 🌍 Server Configuration for Microblog

This document provides detailed instructions for configuring various web servers to work optimally with Microblog, particularly for enabling clean URLs and proper routing.

---

## 🤔 Why Server Configuration Matters

Microblog uses client-side routing to create a smooth, single-page application experience. Without proper server configuration, you may encounter issues such as:

- 404 errors when directly accessing URLs other than the homepage
- Inability to refresh pages at specific routes
- Problems with bookmarking specific pages
- SEO limitations due to search engines being unable to properly index your content

Proper server configuration ensures that all requests are correctly routed to your Microblog application, allowing it to handle the routing internally.

---

## 🦬 Apache Configuration

Apache is one of the most popular web servers and offers straightforward configuration for Microblog.

### 📄 Using .htaccess

The `.htaccess` file is the preferred method for configuring Apache when you don't have access to the main server configuration files (common with shared hosting).

1. Create a file named `.htaccess` in your Microblog root directory
2. Add the following configuration:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html to allow html5 state links
  RewriteRule ^(.*)$ index.html?url=$1 [QSA,L]
</IfModule>
```

### 🔍 Explanation of Apache Rules

- `RewriteEngine On`: Enables the rewrite engine
- `RewriteBase /`: Sets the base URL for rewrites (change if your blog is in a subdirectory)
- `RewriteCond %{REQUEST_FILENAME} !-f`: Skip existing files
- `RewriteCond %{REQUEST_FILENAME} !-d`: Skip existing directories
- `RewriteRule ^(.*)$ index.html?url=$1 [QSA,L]`: Route all other requests to index.html with the original URL as a parameter

### 🖥️ Apache Virtual Host Configuration

If you have access to your Apache configuration files, you can add these rules to your virtual host configuration:

```apache
<VirtualHost *:80>
  ServerName yourdomain.com
  DocumentRoot /path/to/microblog
  
  <Directory "/path/to/microblog">
    AllowOverride All
    Require all granted
    
    RewriteEngine On
    RewriteBase /
    
    # Don't rewrite files or directories
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    
    # Rewrite everything else to index.html
    RewriteRule ^(.*)$ index.html?url=$1 [QSA,L]
  </Directory>
</VirtualHost>
```

After making changes to Apache configuration files, restart the server:

```bash
sudo systemctl restart apache2
# or on some systems
sudo service apache2 restart
```

### ✅ Verifying Apache Configuration

To verify that your Apache configuration is working:

1. Restart your Apache server
2. Navigate directly to a route in your browser (e.g., `https://yourdomain.com/some-post`)
3. Refresh the page to ensure it loads correctly
4. Check the Apache error logs if you encounter issues:
   ```bash
   tail -f /var/log/apache2/error.log
   ```

---

## 🐘 Nginx Configuration

Nginx is known for its high performance and is increasingly popular for web hosting.

### 📄 Basic Nginx Configuration

Add the following to your server block in your Nginx configuration file:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/microblog;
    
    location / {
        try_files $uri $uri/ /index.html?url=$uri;
    }
    
    # Optional: Configure caching for static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires max;
        add_header Cache-Control "public, max-age=31536000";
    }
}
```

### 🔍 Explanation of Nginx Rules

- `try_files $uri $uri/ /index.html?url=$uri;`: This directive tells Nginx to:
  1. Try to serve the requested URI as a file
  2. If that fails, try to serve it as a directory
  3. If both fail, rewrite to index.html with the original URI as a parameter

### 🧪 Testing Nginx Configuration

After updating your Nginx configuration:

1. Test the configuration for syntax errors:
   ```bash
   sudo nginx -t
   ```

2. If the test is successful, reload Nginx:
   ```bash
   sudo systemctl reload nginx
   # or
   sudo nginx -s reload
   ```

3. Test different routes in your browser to ensure they work correctly

---

## 🔰 Caddy Server Configuration

Caddy is a modern web server with automatic HTTPS and a simple configuration syntax.

### 📄 Basic Caddy Configuration

Create a `Caddyfile` with the following content:

```
yourdomain.com {
    root * /path/to/microblog
    
    # Handle SPA routing
    try_files {path} /index.html?url={path}
    
    # Optional: Cache static assets
    @static {
        file
        path *.css *.js *.ico *.gif *.jpg *.jpeg *.png *.svg *.woff
    }
    header @static Cache-Control "max-age=31536000"
}
```

### 🚀 Applying Caddy Configuration

Start or reload Caddy with:

```bash
caddy reload
# or
caddy start
```

---

## 🪟 IIS Configuration (Windows Server)

For Microsoft IIS, you'll need to create a URL Rewrite rule.

1. Install the URL Rewrite module if you haven't already
2. Create a `web.config` file in your Microblog root directory with the following content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.html?url={R:0}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

---

## 🔥 Firebase Hosting Configuration

If you're deploying Microblog to Firebase Hosting, create a `firebase.json` file with:

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 🐙 GitHub Pages Configuration

GitHub Pages doesn't support server-side redirects by default, but you can use a 404.html trick:

1. Create a file named `404.html` in your Microblog root directory
2. Add the following content:

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    // Redirect all 404s to the index page with the path as a parameter
    var path = window.location.pathname;
    window.location.href = '/?url=' + path;
  </script>
</head>
<body>
  Redirecting...
</body>
</html>
```

3. Update your Microblog script to handle the `url` parameter from the query string

---

## 🧪 Testing Your Configuration

Regardless of which server you're using, test your configuration thoroughly:

1. **Direct URL Access**: Navigate directly to different routes in your browser
2. **Page Refresh**: Refresh the page while on different routes
3. **Bookmark Testing**: Bookmark different routes and try accessing them later
4. **Navigation Testing**: Test the navigation elements on your site
5. **404 Handling**: Try accessing a non-existent route to ensure proper 404 handling

---

## 🔧 Troubleshooting

### 🚫 Common Issues and Solutions

#### 404 Errors When Accessing Routes Directly

**Symptoms**: You can navigate to routes through the site interface, but get 404 errors when trying to access them directly.

**Solutions**:
- Verify your server configuration is correct
- Ensure the rewrite rules are actually being applied
- Check server logs for any errors

#### Incorrect Path References

**Symptoms**: Assets like CSS, JavaScript, or images fail to load on routes other than the homepage.

**Solutions**:
- Use absolute paths (starting with /) for all assets
- Alternatively, use relative paths with the `<base>` tag:
  ```html
  <base href="/">
  ```

#### Infinite Redirects

**Symptoms**: The browser shows a redirect loop error.

**Solutions**:
- Check your rewrite rules for logic errors
- Ensure you're not redirecting already rewritten requests

#### CORS Issues in Development

**Symptoms**: API requests fail due to CORS errors when testing locally.

**Solutions**:
- Set appropriate CORS headers in your server configuration
- For local testing, consider using a CORS proxy

---

## ⚡ Performance Optimization

Once your basic server configuration is working, consider these performance optimizations:

### 🗄️ Caching

Add cache headers for static assets:

**Apache (.htaccess)**:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

**Nginx**:
```nginx
location ~* \.(css|js|jpg|jpeg|png|gif)$ {
  expires 1y;
  add_header Cache-Control "public, max-age=31536000";
}
```

### 🗜️ Compression

Enable GZIP or Brotli compression:

**Apache (.htaccess)**:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript
</IfModule>
```

**Nginx**:
```nginx
gzip on;
gzip_types text/plain text/css application/javascript;
```

---

## 🔒 Security Considerations

Consider these security enhancements for your server configuration:

### 🛡️ Content Security Policy

Add a Content Security Policy header to protect against XSS attacks:

**Apache (.htaccess)**:
```apache
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self'"
</IfModule>
```

**Nginx**:
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self'";
```

### 🔐 HTTPS Redirection

Force HTTPS usage:

**Apache (.htaccess)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

**Nginx**:
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}
```