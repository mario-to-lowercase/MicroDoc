# 🤝 Contributing to Microblog

Thank you for your interest in contributing to Microblog! This document provides comprehensive guidelines for contributing to the project, whether you're fixing bugs, adding features, improving documentation, or helping in other ways.

---

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)
- [Community](#community)
- [Project Structure](#project-structure)
- [Core Design Principles](#core-design-principles)
- [License](#license)

---

## 📜 Code of Conduct

All contributors are expected to adhere to the project's code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### ✨ Key Principles

- **Be respectful and inclusive**: Value each other's ideas, styles, and viewpoints
- **Be collaborative**: Work together to improve the project
- **Be clear and constructive**: Aim for clear communication and constructive feedback
- **Be responsible**: Take responsibility for your words and actions

---

## 🚀 Getting Started

### 📋 Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with Markdown
- Git installed on your local machine
- A GitHub account

### 🛠️ Setting Up Your Development Environment

1. **Fork the Repository**
   
   Start by forking the [Microblog repository](https://github.com/mario-to-lowercase/microblog) on GitHub by clicking the "Fork" button.

2. **Clone Your Fork**
   
   ```bash
   git clone https://github.com/your-username/microblog.git
   cd microblog
   ```

3. **Add Upstream Remote**
   
   This allows you to keep your fork synced with the original repository.
   
   ```bash
   git remote add upstream https://github.com/mario-to-lowercase/microblog.git
   ```

4. **Set Up Local Testing Environment**
   
   Since Microblog is primarily front-end code, you can use any basic web server to test it locally. For example:
   
   - Using Python:
     ```bash
     # Python 3
     python -m http.server
     # Python 2
     python -m SimpleHTTPServer
     ```
   
   - Using Node.js with http-server:
     ```bash
     npm install -g http-server
     http-server
     ```

5. **Create a Branch for Your Work**
   
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

---

## 💻 Development Workflow

### 🔄 Keeping Your Fork Updated

Regularly sync your fork with the upstream repository to keep it up to date:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 📝 Making Changes

1. Create a new branch for each feature or bugfix
2. Make your changes in that branch
3. Test your changes thoroughly
4. Commit your changes with clear, descriptive commit messages

### 📋 Commit Message Guidelines

Good commit messages help maintainers understand your changes. Follow these guidelines:

- Start with a concise summary line (50 characters or less)
- Use the imperative mood ("Add feature" not "Added feature")
- Include a more detailed description after the summary, if necessary
- Reference issues or pull requests when relevant

Example:
```
Add theme selection dropdown

- Add dropdown component to navigation bar
- Implement theme switching functionality
- Update documentation with theme options

Resolves #42
```

---

## 🔄 Pull Request Process

1. **Update Your Fork**
   
   Before submitting a pull request, ensure your fork is up to date with the upstream repository.

2. **Create a Pull Request**
   
   Go to the original Microblog repository on GitHub and click "New Pull Request". Select "compare across forks" and choose your fork and branch.

3. **Fill in the Pull Request Template**
   
   Provide a clear description of your changes, including:
   - The purpose of the changes
   - A summary of what was changed
   - Any issues or pull requests that are related
   - Any special considerations or notes for reviewers

4. **Address Review Feedback**
   
   Respond to any feedback or questions from reviewers. Make additional commits to address issues if necessary.

5. **Update Documentation**
   
   Ensure that any changes to functionality are reflected in the documentation.

6. **Merge Process**
   
   Once your pull request is approved, a maintainer will merge it. In some cases, you may be asked to rebase your changes before merging.

---

## 📏 Coding Standards

### 🔤 HTML

- Use semantic HTML elements where appropriate
- Maintain proper indentation (2 spaces)
- Include appropriate `alt` attributes for images
- Ensure HTML is valid and well-formed

### 🎨 CSS

- Use a consistent naming convention (BEM is recommended)
- Organize properties in a logical order
- Use CSS variables for theming and reusable values
- Ensure compatibility with major browsers

### ⚙️ JavaScript

- Follow modern ES6+ practices
- Use meaningful variable and function names
- Keep functions small and focused on a single task
- Comment complex logic or non-obvious code
- Avoid global variables and namespace pollution

### 📋 Example Style

```javascript
// Good example
function toggleNavigation() {
  const navElement = document.querySelector('.navigation');
  
  if (navElement.classList.contains('navigation--active')) {
    navElement.classList.remove('navigation--active');
  } else {
    navElement.classList.add('navigation--active');
  }
}

// Avoid
function toggle() {
  var nav = document.querySelector('.navigation');
  nav.classList.contains('navigation--active') ? nav.classList.remove('navigation--active') : nav.classList.add('navigation--active');
}
```

---

## 🧪 Testing Guidelines

### 👨‍💻 Manual Testing

Before submitting a pull request, manually test your changes:

1. **Functionality Testing**
   - Verify that your changes work as expected
   - Test in different scenarios and edge cases

2. **Cross-Browser Testing**
   - Test in multiple browsers (Chrome, Firefox, Safari, Edge)
   - Ensure compatibility with older browser versions if relevant

3. **Responsive Testing**
   - Test on different screen sizes (desktop, tablet, mobile)
   - Verify that layouts adapt appropriately

4. **Accessibility Testing**
   - Check keyboard navigation
   - Verify screen reader compatibility
   - Ensure sufficient color contrast

### 🔄 Automated Testing

While Microblog currently doesn't have a formal automated testing setup, you're encouraged to:

- Use linters to check code quality (ESLint for JavaScript, HTMLHint for HTML)
- Validate HTML and CSS using online validators
- Consider adding relevant tests if you're implementing significant new functionality

---

## 📝 Documentation

Good documentation is crucial for Microblog. When contributing, please:

### 💻 Code Documentation

- Add comments for complex logic
- Include JSDoc-style comments for functions:
  ```javascript
  /**
   * Loads a markdown file and renders it to the content area
   * @param {string} filePath - Path to the markdown file
   * @returns {Promise<void>} - Resolves when content is loaded and rendered
   */
  async function loadMarkdownContent(filePath) {
    // Implementation
  }
  ```

### 📚 User Documentation

- Update the README.md or relevant documentation files if your changes affect user-facing functionality
- Create new documentation for new features
- Include examples and use cases where helpful

---

## 🐛 Issue Reporting

### 🔍 Before Creating an Issue

1. Search existing issues to ensure your issue hasn't already been reported
2. Check if the issue has been fixed in a recent pull request or commit

### 📝 Creating an Issue

When creating a new issue:

1. Use a clear and descriptive title
2. Include detailed steps to reproduce the problem
3. Describe the expected behavior and what actually happens
4. Include relevant details such as:
   - Browser and operating system versions
   - Screenshots or videos if applicable
   - Error messages (including console errors)
   - Code samples that demonstrate the issue
---

## ✨ Feature Requests

Have an idea for improving Microblog? Feature requests are welcome!

### 📝 Submitting a Feature Request

1. Check existing issues and pull requests to ensure the feature hasn't already been suggested
2. Create a new issue using the feature request template
3. Clearly describe the feature and its purpose
4. Explain how the feature would benefit Microblog users
5. Include mockups or examples if applicable

### 💻 Implementing Features

If you'd like to implement a feature:

1. First create or find an issue discussing the feature
2. Comment on the issue expressing your interest in implementing it
3. Wait for feedback from maintainers before starting significant work
4. Follow the development workflow and pull request process

---

## 👥 Community

### 💬 Communication Channels

- GitHub Issues: For bug reports, feature requests, and technical discussions
- GitHub Discussions: For general questions and community discussions
- Pull Requests: For code contributions and review discussions

### 🆘 Getting Help

If you need help with your contribution:

1. Check the documentation first
2. Look for similar issues or discussions that might address your question
3. Ask for help in the GitHub Discussions area
4. Reach out to maintainers if you're stuck

---

## 📂 Project Structure

Understanding the project structure will help you contribute effectively:

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

### 🔑 Key Components

- **HTML (index.html)**: The structure of the application
- **CSS (style.css)**: Styling and theming
- **JavaScript (microblog.js)**: Core functionality including Markdown parsing, navigation, and routing
- **Configuration (settings.json)**: User-configurable settings

---

## 🧭 Core Design Principles

When contributing to Microblog, keep these core principles in mind:

1. **Simplicity**: Keep the codebase small, efficient, and easy to understand
2. **Minimalism**: Avoid unnecessary dependencies and bloat
3. **Performance**: Optimize for speed and efficiency
4. **Accessibility**: Ensure the application is usable by everyone
5. **Customizability**: Allow users to easily adapt the application to their needs

---

## 📜 License

Microblog is released under the Apache 2.0 License. By contributing to Microblog, you agree that your contributions will be licensed under the same license.