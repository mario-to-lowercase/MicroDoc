# Markdown Demo File
---
## Headings

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

```
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

## Text Formatting

**Bold Text**  
*Italic Text*  
***Bold and Italic***  
~~Strikethrough~~

```
**Bold Text**  
*Italic Text*  
***Bold and Italic***  
~~Strikethrough~~
```

## Blockquotes

> This is a blockquote.
> 
> Nested blockquotes are also possible.
>> Second-level blockquote.

```
> This is a blockquote.
> 
> Nested blockquotes are also possible.
>> Second-level blockquote.
```

## Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

```
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

### Ordered List
1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2

```
1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2
```

## Links
[GitHub Repo](https://github.com/mario-fox/Microblog)

```
[GitHub Repo](https://github.com/mario-fox/Microblog)
```

## Images
![Microblog Logo](https://microblog.pixelfox.io/fox.png)

```
![Microblog Logo](https://microblog.pixelfox.io/fox.png)
```

## Code

### Inline Code
Use `inline code` for commands or short code snippets.

```
Use `inline code` for commands or short code snippets.
```

### Code Block

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

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Info     | Data     |

```
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Info     | Data     |
```

## Horizontal Rules

---

```
---
```

## Tasks Lists
- [x] Task 1 (completed)
- [ ] Task 2 (pending)
- [ ] Task 3 (pending)

```
- [x] Task 1 (completed)
- [ ] Task 2 (pending)
- [ ] Task 3 (pending)
```

## Emojis
:smile: :rocket: :+1:

```
:smile: :rocket: :+1:
```

## HTML in Markdown
<div style="color: blue;">This is an HTML block in Markdown.</div>

```
<div style="color: blue;">This is an HTML block in Markdown.</div>
```

## Footnotes
This is a sentence with a footnote.[^1]

[^1]: This is the footnote text.

```
This is a sentence with a footnote.[^1]

[^1]: This is the footnote text.
```

## Math (LaTeX)
Inline: $E = mc^2$

Block:
$$
\frac{a}{b} = c
$$

```
Inline: $E = mc^2$

Block:
$$
\frac{a}{b} = c
$$
```

## Nested Elements

> **Bold inside a blockquote** with *italic* and a [link](https://example.com).

- A list item with `inline code`.
  - Nested item with **bold text**.

```
> **Bold inside a blockquote** with *italic* and a [link](https://example.com).

- A list item with `inline code`.
  - Nested item with **bold text**.
```
