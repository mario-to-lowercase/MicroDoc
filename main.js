function loadSettings() {
    fetch('settings.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log("Fetch success!");

            // Set site name and favicon
            document.title = data.sitename || "Microblog by PixelFox.io";
            document.getElementById("favicon").href = data.favicon || "favicon.ico";

            // Configure navigation
            const nav = document.getElementById("main-nav");
            const navTitle = document.getElementById("nav-title");

            // Add logo or title
            if (data.navigation?.logo?.enabled) {
                const logo = document.createElement("img");
                logo.src = data.navigation.logo.url;
                logo.alt = "Logo";
                navTitle.appendChild(logo);
            }
            navTitle.appendChild(document.createTextNode(data.navigation?.title || "Microblog"));
            navTitle.onclick = () => loadPage(data["base-page"] || "readme.md");

            const navPagesTitle = document.getElementById("nav-pages-title");
            navPagesTitle.textContent = data.navigation?.["pages-title"] || "Posts";

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

            // Populate dropdown menu
            const dropdown = document.getElementById("pages-dropdown");
            const categories = {};

            data.pages.forEach(page => {
                if (page.enabled) {
                    const category = page.category || "none";

                    if (category === "none") {
                        // Add directly to the main dropdown
                        const link = document.createElement("a");
                        link.textContent = page.title;
                        link.href = page.external ? page.file : "#";
                        if (!page.external) link.onclick = () => loadPage(page.file);
                        dropdown.appendChild(link);
                    } else {
                        // Create or find the category dropdown
                        if (!categories[category]) {
                            // Create a submenu container
                            const submenuContainer = document.createElement("div");
                            submenuContainer.className = "dropdown-submenu";

                            // Submenu title
                            const submenuTitle = document.createElement("button");
                            submenuTitle.textContent = category;
                            submenuContainer.appendChild(submenuTitle);

                            // Submenu content
                            const submenuContent = document.createElement("div");
                            submenuContent.className = "dropdown-content";
                            submenuContainer.appendChild(submenuContent);

                            dropdown.appendChild(submenuContainer);
                            categories[category] = submenuContent;
                        }

                        // Add the page link to the category
                        const link = document.createElement("a");
                        link.textContent = page.title;
                        link.href = page.external ? page.file : "#";
                        if (!page.external) link.onclick = () => loadPage(page.file);
                        categories[category].appendChild(link);
                    }
                }
            });

            // Add external link if enabled
            if (data.navigation?.["external-url"]?.enabled) {
                const externalContainer = document.getElementById("external-nav-item");
                const externalLink = document.createElement("a");
                externalLink.href = data.navigation["external-url"].url;
                externalLink.textContent = data.navigation["external-url"].title;
                externalLink.target = "_blank";
                externalLink.rel = "noopener noreferrer";
                externalContainer.appendChild(externalLink);
            }

            // Configure footer
            const footer = document.getElementById("footer");
            if (data.footer?.enabled) {
                footer.textContent = data.footer.content;
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
                    creditsLink.href = "https://github.com";
                    creditsLink.textContent = "Microblog";
                    creditsLink.target = "_blank";

                    creditsDiv.appendChild(creditsText);
                    creditsDiv.appendChild(creditsLink);
                    footer.appendChild(document.createElement("br"));
                    footer.appendChild(creditsDiv);
                }
            }

            // Load the default page
            loadPage(data["base-page"] || "readme.md");
        })
        .catch(error => {
            console.error("Error loading settings.json:", error);
        });
}

// Function to load a page into the content area
function loadPage(filePath) {
    fetch(filePath)
        .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! status: ${response.status}`))
        .then(markdown => {
            document.getElementById('content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            document.getElementById('content').textContent = "Error loading Markdown file.";
            console.error("Error:", error);
        });
}

// Load settings.json on page load
loadSettings();