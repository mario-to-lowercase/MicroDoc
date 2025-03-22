# 📝 Markdown Demo & Formatting Guide

This demo showcases all the Markdown formatting features you can use with Microblog.

---

## 🔤 Headings

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

---

## ✏️ Text Formatting

**Bold Text**  
*Italic Text*  
***Bold and Italic***  
~~Strikethrough~~

```markdown
**Bold Text**  
*Italic Text*  
***Bold and Italic***  
~~Strikethrough~~
```

---

## 💬 Blockquotes

> This is a blockquote.
> 
> Nested blockquotes are also possible.
>> Second-level blockquote.

```markdown
> This is a blockquote.
> 
> Nested blockquotes are also possible.
>> Second-level blockquote.
```

---

## 📋 Lists

### 🔹 Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

### 🔢 Ordered List
1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2

```markdown
1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2
```

---

## 🔗 Links
[GitHub Repo](https://github.com/mario-fox/Microblog)

```markdown
[GitHub Repo](https://github.com/mario-fox/Microblog)
```

---

## 🖼️ Images
![Microblog Logo](https://microblog.pixelfox.io/fox.png)


```markdown
![Microblog Logo](https://microblog.pixelfox.io/fox.png)
```

---

## 💻 Code

### 📌 Inline Code
Use `inline code` for commands or short code snippets.

```markdown
Use `inline code` for commands or short code snippets.
```

### 📑 Code Blocks

```javascript
// JavaScript example
function greet() {
  console.log("Hello, World!");
}
greet();
```

```python
# Python example
def greet():
    print("Hello, World!")
greet()
```

````markdown
```javascript
// JavaScript example
function greet() {
  console.log("Hello, World!");
}
greet();
```

```python
# Python example
def greet():
    print("Hello, World!")
greet()
```
````

---

## 📊 Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Info     | Data     |

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Info     | Data     |
```

---

## 📏 Horizontal Rules

---

```markdown
---
```

---

## ✅ Tasks Lists
- [x] Task 1 (completed)
- [ ] Task 2 (pending)
- [ ] Task 3 (pending)

```markdown
- [x] Task 1 (completed)
- [ ] Task 2 (pending)
- [ ] Task 3 (pending)
```

---

## 😊 Emojis
:smile: :rocket: :+1:

```markdown
:smile: :rocket: :+1:
```

---

## 🌐 HTML in Markdown
<div style="color: blue;">This is an HTML block in Markdown.</div>

```html
<div style="color: blue;">This is an HTML block in Markdown.</div>
```

---

## 📓 Footnotes
This is a sentence with a footnote.[^1]

[^1]: This is the footnote text.

```markdown
This is a sentence with a footnote.[^1]

[^1]: This is the footnote text.
```

---

## 🧮 Math (LaTeX)
Inline: $E = mc^2$

Block:
$$
\frac{a}{b} = c
$$

```markdown
Inline: $E = mc^2$

Block:
$$
\frac{a}{b} = c
$$
```

---

## 📦 Nested Elements

> **Bold inside a blockquote** with *italic* and a [link](https://example.com).

- A list item with `inline code`.
  - Nested item with **bold text**.

```markdown
> **Bold inside a blockquote** with *italic* and a [link](https://example.com).

- A list item with `inline code`.
  - Nested item with **bold text**.
```

---

## 🎯 Advanced Formatting Tips

### 🔠 Keyboard Keys
Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.

```html
Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text.
```

### 🎨 Collapsible Sections
<details>
  <summary>Click to expand</summary>
  
  This content is hidden until you click the arrow.
  
  - You can include lists
  - And other **formatted** content
</details>

```html
<details>
  <summary>Click to expand</summary>
  
  This content is hidden until you click the arrow.
  
  - You can include lists
  - And other **formatted** content
</details>
```

### 📊 Definition Lists
<dl>
  <dt>Markdown</dt>
  <dd>A lightweight markup language.</dd>
  
  <dt>HTML</dt>
  <dd>HyperText Markup Language used for web pages.</dd>
</dl>

```html
<dl>
  <dt>Markdown</dt>
  <dd>A lightweight markup language.</dd>
  
  <dt>HTML</dt>
  <dd>HyperText Markup Language used for web pages.</dd>
</dl>
```

---

## 📚 Quick Reference

| Format | Syntax |
|--------|--------|
| **Bold** | `**text**` |
| *Italic* | `*text*` |
| `Code` | `` `code` `` |
| [Link](#) | `[Link](url)` |
| # Heading | `# Heading` |
| > Quote | `> Quote` |
| - List item | `- List item` |
| Horizontal line | `---` |
| ![Image alt text] | `![alt text](url)` |

---

## 🎁 Putting It All Together

Here's an example of combining multiple Markdown elements to create a rich document:

# 🚀 Project Update

**Status**: *In Progress*

> This project aims to revolutionize how we interact with data.

## 📋 Key Features
- [x] Basic UI
- [x] Data Processing Engine
- [ ] Advanced Visualizations
- [ ] Export Functionality

### 📊 Performance Metrics
| Metric | Before | After |
|--------|--------|-------|
| Load Time | 4.2s | 1.8s |
| Memory Usage | 380MB | 215MB |

Check out our [documentation](#) for more details!

```markdown
# 🚀 Project Update

**Status**: *In Progress*

> This project aims to revolutionize how we interact with data.

## 📋 Key Features
- [x] Basic UI
- [x] Data Processing Engine
- [ ] Advanced Visualizations
- [ ] Export Functionality

### 📊 Performance Metrics
| Metric | Before | After |
|--------|--------|-------|
| Load Time | 4.2s | 1.8s |
| Memory Usage | 380MB | 215MB |

Check out our [documentation](#) for more details!
```