# Markdown Monroe fixture

This page exercises **strong emphasis**, *emphasis*, ~~strikethrough~~, and a [safe link](https://example.com/markdown-monroe).

## GFM table

| Feature | Status | Notes |
| --- | :---: | --- |
| Tables | ✅ | GitHub Flavored Markdown |
| Tasks | ✅ | Keyboard-friendly controls |

## Tasks and lists

- [x] Detect a Markdown response
- [ ] Keep ordinary HTML untouched
- [ ] Preserve the source for raw mode

1. First ordered item
2. Second ordered item
   - Nested unordered item

> A quoted passage should retain its blockquote styling.

## Fenced code

```typescript
type Greeting = { message: string };

const greeting: Greeting = { message: "Hello, Monroe" };
console.log(greeting.message);
```

```bash
printf '%s\n' "copy me"
```

## Final section

The table of contents should link to every heading and can be hidden with the TOC control.
