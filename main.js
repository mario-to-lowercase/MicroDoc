function loadSettings() {
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
            navTitle.onclick = () => loadPage(data["base-page"] || "readme.md");

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

            // sidebar
            populateSidebar(data.pages);

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

            // Load default page
            loadPage(data["base-page"] || "readme.md");
        })
        .catch(error => {
            console.error("Error loading settings.json:", error);
        });
}

function populateSidebar(pages) {
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
                link.href = page.external ? page.file : "#";
                if (!page.external) link.onclick = () => loadPage(page.file);
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
                link.href = page.external ? page.file : "#";
                if (!page.external) link.onclick = () => loadPage(page.file);
                categories[category].appendChild(link);
            }
        }
    });
}

function loadPage(filePath) {
    closeSidebar();

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

// Sidebar toggle
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}


// Event listeners
document.getElementById("nav-pages-title").addEventListener("click", openSidebar);
document.getElementById("hamburger-menu").addEventListener("click", openSidebar);
document.getElementById("close-sidebar").addEventListener("click", closeSidebar);

// Run on pageload
window.addEventListener('load', loadSettings);
