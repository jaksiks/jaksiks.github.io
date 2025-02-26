# CLAUDE.md - Guidelines for GitHub Pages Website

## Build/Development Commands
- Preview site locally: `python -m http.server` (navigate to http://localhost:8000)
- Deploy: Changes to main branch automatically deploy via GitHub Pages

## Code Style Guidelines

### HTML
- Use HTML5 doctype: `<!DOCTYPE html>`
- Indent with 2 spaces
- Use semantic HTML elements where appropriate (header, nav, main, etc.)
- Include alt text for all images
- Keep structure simple and minimal
- Avoid excessive div nesting

### CSS
- Use external stylesheets, not inline styles
- Use simple selectors with minimal specificity
- Use monospace font for text
- Color scheme:
  - Background: #1a1a1a (dark grey)
  - Lighter background: #252525
  - Text: #e0e0e0 (light grey)
  - Accent: #6aa5c9 (blue)
  - Muted: #a0a0a0 (medium grey)

### JavaScript
- Use ES6+ syntax
- Prefer const/let over var
- Add comments for complex logic
- Prefer descriptive function and variable names

### General
- Keep design minimal and text-focused
- Maintain simple layout with basic styling
- Ensure accessibility compliance
- Style for readability over decoration