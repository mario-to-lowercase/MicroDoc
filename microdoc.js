class Microblog {
    constructor() {
        // Initialize properties
        this.urlToFileMap = {};
        this.fileToUrlMap = {};

        // Bind methods
        this.loadSettings = this.loadSettings.bind(this);
        this.populateSidebar = this.populateSidebar.bind(this);
        this.navigateToPage = this.navigateToPage.bind(this);
        this.loadPageContent = this.loadPageContent.bind(this);
        this.handleUrlNavigation = this.handleUrlNavigation.bind(this);
        this.openSidebar = this.openSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.onPopState = this.onPopState.bind(this);

        // Set up event listeners
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById("nav-pages-title").addEventListener("click", this.openSidebar);
        document.getElementById("hamburger-menu").addEventListener("click", this.openSidebar);
        document.getElementById("close-sidebar").addEventListener("click", this.closeSidebar);
        window.onpopstate = this.onPopState;
        window.addEventListener('load', this.loadSettings);
    }

    loadSettings() {
        fetch('settings.json')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log("Settings loaded successfully");

                // site name & favicon
                document.title = data.sitename || "Microblog by PixelFox.io";
                document.getElementById("favicon").href = data.favicon || "favicon.ico";

                // navigation
                const nav = document.getElementById("main-nav");
                const navTitle = document.getElementById("nav-title");
                if (data.navigation?.logo?.enabled) {
                    const logo = document.createElement("img");
                    logo.src = data.navigation.logo.url;
                    logo.alt = "Logo";
                    navTitle.appendChild(logo);
                }
                navTitle.appendChild(document.createTextNode(data.navigation?.title || "Microblog"));
                navTitle.onclick = () => this.navigateToPage(data["base-page"] || "readme.md");

                if (data.navigation?.color) {
                    nav.style.backgroundColor = data.navigation.color;
                }

                if (data.navigation?.sticky) {
                    nav.style.position = "sticky";
                    nav.style.top = "0";
                    nav.style.zIndex = "1000";
                } else {
                    nav.style.position = "static";
                }

                // Main "posts" item
                const navPagesTitle = document.getElementById("nav-pages-title");
                navPagesTitle.textContent = data.navigation?.["pages-title"] || "Posts";

                // external link
                if (data.navigation?.["external-url"]?.enabled) {
                    const externalContainer = document.getElementById("external-nav-item");
                    if (externalContainer) {
                        const externalLink = document.createElement("a");
                        externalLink.href = data.navigation["external-url"].url || "#";
                        externalLink.textContent = data.navigation["external-url"].title || "External Link";
                        externalLink.target = "_blank";
                        externalLink.rel = "noopener noreferrer";
                        externalContainer.appendChild(externalLink);
                    } else {
                        console.warn("External navigation container not found.");
                    }
                }

                // Create URL mappings
                data.pages.forEach(page => {
                    if (page.enabled && !page.external) {
                        // Default URL is the filename without extension if not specified
                        const url = page.url || `/${page.file.replace(/\.md$/, '').replace(/^pages\//, '')}`;
                        this.urlToFileMap[url] = page.file;
                        this.fileToUrlMap[page.file] = url;
                    }
                });

                // Default page URL
                const defaultFile = data["base-page"] || "readme.md";
                if (!this.fileToUrlMap[defaultFile]) {
                    this.fileToUrlMap[defaultFile] = "/";
                    this.urlToFileMap["/"] = defaultFile;
                }

                // sidebar
                this.populateSidebar(data.pages);

                const sidebar = document.getElementById("sidebar");
                sidebar.style.backgroundColor = data.navigation?.["sidebar-color"] || "#222";

                // footer
                const footer = document.getElementById("footer");
                if (data.footer?.enabled) {
                    footer.textContent = data.footer.content || "";
                    footer.style.backgroundColor = data.footer.color || "#333";
                    if (data.footer.fixed) {
                        footer.classList.add("fixed");
                    } else {
                        footer.classList.remove("fixed");
                    }

                    if (data.credits) {
                        const creditsDiv = document.createElement("div");
                        const creditsText = document.createTextNode("Made with ");
                        const creditsLink = document.createElement("a");
                        creditsLink.href = "https://github.com/mario-fox/Microblog";
                        creditsLink.textContent = "Microblog";
                        creditsLink.target = "_blank";

                        creditsDiv.appendChild(creditsText);
                        creditsDiv.appendChild(creditsLink);
                        footer.appendChild(document.createElement("br"));
                        footer.appendChild(creditsDiv);
                    }
                }

                // Load page based on current URL
                this.handleUrlNavigation();
            })
            .catch(error => {
                console.error("Error loading settings.json:", error);
            });
    }

    populateSidebar(pages) {
        const sidebarContent = document.getElementById("sidebar-content");
        sidebarContent.innerHTML = '';

        const categories = {};

        pages.forEach(page => {
            if (page.enabled) {
                const category = page.category || "none";

                if (category === "none") {
                    // Add directly to sidebar
                    const link = document.createElement("a");
                    link.textContent = page.title;

                    if (page.external) {
                        link.href = page.file;
                        link.target = "_blank";
                    } else {
                        // Use the URL for internal pages
                        link.href = page.url || this.fileToUrlMap[page.file] || "/";
                        link.onclick = (e) => {
                            e.preventDefault();
                            this.navigateToPage(page.file);
                        };
                    }

                    sidebarContent.appendChild(link);
                } else {
                    // Create or find category section
                    if (!categories[category]) {
                        // Create category
                        const categoryContainer = document.createElement("div");
                        categoryContainer.className = "sidebar-category";

                        const categoryTitle = document.createElement("div");
                        categoryTitle.textContent = category;
                        categoryTitle.className = "sidebar-category-title";
                        categoryContainer.appendChild(categoryTitle);

                        sidebarContent.appendChild(categoryContainer);
                        categories[category] = categoryContainer;
                    }

                    // Add page to category
                    const link = document.createElement("a");
                    link.textContent = page.title;

                    if (page.external) {
                        link.href = page.file;
                        link.target = "_blank";
                    } else {
                        // Use the URL for internal pages
                        link.href = page.url || this.fileToUrlMap[page.file] || "/";
                        link.onclick = (e) => {
                            e.preventDefault();
                            this.navigateToPage(page.file);
                        };
                    }

                    categories[category].appendChild(link);
                }
            }
        });
    }

    navigateToPage(filePath) {
        this.closeSidebar();

        // Get the URL for this file
        const url = this.fileToUrlMap[filePath] || `/${filePath.replace(/\.md$/, '')}`;

        // Update browser history
        history.pushState({ filePath }, '', url);

        // Load the page content
        this.loadPageContent(filePath);
    }

    loadPageContent(filePath) {
        fetch(filePath)
            .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! status: ${response.status}`))
            .then(markdown => {
                document.getElementById('content').innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                document.getElementById('content').textContent = "Could not load Markdown file '" + filePath + "'!";
                console.error("Error:", error);
            });
    }

    handleUrlNavigation() {
        // Check if we have a path parameter (workaround for GitHub Pages)
        const urlParams = new URLSearchParams(window.location.search);
        const pathParam = urlParams.get('path');

        // Get current path (either from URL or from path parameter)
        const path = pathParam || window.location.pathname;

        // If we came from the 404 page with a path parameter, update the URL
        if (pathParam) {
            // Replace the URL without reloading the page
            window.history.replaceState(null, '', pathParam);
        }

        // Find matching file
        const filePath = this.urlToFileMap[path];

        if (filePath) {
            this.loadPageContent(filePath);
        } else {
            if (path === '/' || path === '') {
                const defaultFile = this.urlToFileMap['/'];
                if (defaultFile) {
                    this.loadPageContent(defaultFile);
                } else {
                    document.getElementById('content').textContent = "Default page not found!";
                }
            } else {
                document.getElementById('content').textContent = "Page not found!";
            }
        }
    }

    onPopState(event) {
        if (event.state && event.state.filePath) {
            this.loadPageContent(event.state.filePath);
        } else {
            this.handleUrlNavigation();
        }
    }

    openSidebar() {
        document.getElementById("sidebar").style.width = "400px";
    }

    closeSidebar() {
        document.getElementById("sidebar").style.width = "0";
    }
}

// Create an instance of the Microblog class when the script loads
const microblog = new Microblog();
