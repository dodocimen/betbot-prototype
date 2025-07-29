# betbot-prototype
Betbot AI protoype (Chatbot Interface &amp; Betslip features)

A simple prototype for the Betbot AI web-app (No real working features whatsoever).

## Pages

- **Home Page** (`index.html`) - Landing page with chat interface
- **Dashboard** (`dashboard.html`) - Detailed betting analysis and management

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript (ES6+)
- Custom fonts (IBM Plex Sans, Pretendard, Publica Sans)

## Setup for GitHub Pages

1. Clone this repository
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to "Deploy from a branch"
5. Select main/master branch
6. Save

The site will be available at: `https://dodocimen.github.io/betbot-prototype`

## Git Configuration

The project includes a comprehensive `.gitignore` file that excludes:
- macOS system files (.DS_Store, ._*, etc.)
- IDE and editor files
- Log files and temporary files
- Build directories and dependencies

## File Structure

```
├── index.html              # Home page
├── dashboard.html          # Dashboard page
├── styles/
│   ├── main.css           # Main styles
│   └── dashboard.css      # Dashboard-specific styles
├── scripts/
│   ├── main.js            # Main functionality
│   ├── dashboard.js       # Dashboard functionality
│   └── quick-actions.js   # Quick actions
├── fonts/                 # Custom fonts
└── img/                   # Images and icons
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.

## ✅ GitHub Pages Readiness Status

### Fixed Issues:
- ✅ **Font Loading Problems** - All IBM Plex Sans font paths corrected
- ✅ **Font Cleanup** - Removed Neue Haas Grotesk fonts, replaced with Pretendard
- ✅ **Missing SVG Files** - All referenced SVG files verified and present
- ✅ **No Absolute Paths** - All paths are relative and GitHub Pages compatible
- ✅ **No Localhost References** - No development server dependencies
- ✅ **File System Issues** - All .DS_Store files removed and .gitignore added

### File Verification:
- ✅ All 12 referenced SVG files exist and are properly sized
- ✅ All font files are accessible with correct paths
- ✅ All JavaScript and CSS files are properly linked
- ✅ No broken image references found

The project is ready for GitHub Pages deployment! 
