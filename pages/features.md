# 🛠️ Upcoming Features for Microblog

This document outlines the features currently in development for Microblog, including detailed explanations, development status, and estimated release timeframes.

---

## 📋 Development Roadmap

Microblog is under active development with several exciting features on the horizon. This roadmap provides transparency about our development priorities and gives users insight into what they can expect in future releases.

---

## 👨‍💻 Admin Page

### 📝 Description
The admin page will provide a user-friendly interface for managing Microblog content, including a built-in Markdown editor for creating and editing posts.

### ✨ Detailed Features
- **Markdown Editor**: WYSIWYG-style editor with Markdown syntax highlighting
- **Live Preview**: Side-by-side editing and preview
- **File Management**: Interface for creating, editing, and deleting posts
- **Media Upload**: Support for uploading and managing images and other media
- **Metadata Editor**: UI for editing post metadata like titles, categories, and URLs
- **Draft System**: Save posts as drafts before publishing
- **Password Protection**: Simple authentication for the admin area

### 🔧 Implementation Details
- The admin interface will be built using vanilla JavaScript for minimal dependencies
- Admin authentication will use local storage and basic authentication
- The editor will use CodeMirror or a similar lightweight editor component

### 📊 Current Status
- Designing the admin UI

---

## 🌓 Light/Dark Mode

### 📝 Description
This feature will allow users to switch between light and dark color schemes, either manually or based on system preferences.

### ✨ Detailed Features
- **Manual Toggle**: A visible control to switch between modes
- **System Preference Detection**: Automatic mode selection based on user's system preferences
- **Persistent Preference**: Remember user's mode preference across visits
- **Transition Effects**: Smooth transitions between modes

### 🔧 Implementation Details
- Implementation will use CSS variables and the `prefers-color-scheme` media query
- Mode preferences will be stored in localStorage
- Transition effects will use CSS transitions for smooth visual changes

### 📊 Current Status
- Proof of concept implemented

---

## 🌟 Additional Planned Features

Beyond the major features detailed above, these additional enhancements are being considered for future releases:

### 📑 Table of Contents Generation
- Automatic generation of ToC from Markdown headings
- Smooth scrolling to sections

### 💻 Syntax Highlighting
- Enhanced code block rendering with syntax highlighting
- Copy-to-clipboard functionality for code blocks

---

## 💬 Feature Requests and Feedback

We welcome input from the Microblog community to help prioritize and refine these upcoming features. To provide feedback or suggest new features:

1. **GitHub Issues**: Create or comment on issues in the [GitHub repository](https://github.com/mario-to-lowercase/microblog/issues)
2. **Discussions**: Join conversations in the GitHub Discussions section
3. **Pull Requests**: Submit working implementations or prototypes of features you'd like to see

When providing feedback, please:
- Be specific about the feature or enhancement
- Explain the use case and why it would be valuable
- Consider implementation complexity and maintenance implications
- Provide examples of similar features in other systems if relevant

---

## 🧭 Development Principles

As we develop these new features, we remain committed to Microblog's core principles:

1. **Simplicity First**: Features must maintain the lightweight, minimalist nature of Microblog
2. **No Database Dependency**: Preserve the file-based approach that makes Microblog easy to deploy
3. **Performance Focus**: New features should not significantly impact load times or responsiveness
4. **Accessibility**: All features must be accessible to users with different abilities
5. **Progressive Enhancement**: Core functionality should work even if JavaScript is disabled

These principles guide our development process and help ensure that Microblog remains true to its original vision as it evolves.