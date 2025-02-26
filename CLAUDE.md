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

### CSS
- Use external stylesheets, not inline styles
- Follow BEM naming conventions for classes
- Organize properties alphabetically within selectors

### JavaScript
- Use ES6+ syntax
- Prefer const/let over var
- Add comments for complex logic
- Prefer descriptive function and variable names

### General
- Keep file sizes optimized for web (compress images, minify production code)
- Maintain mobile-first responsive design
- Ensure accessibility compliance