# 📰 Gazet Printer

A beautiful, modern web application for creating and printing vintage-style newspapers. Craft authentic-looking newspaper layouts with camera integration, apply stylish filters, and print everything on a single A4 page—perfect for creative projects, invitations, or nostalgic designs!

## ✨ Features

- **📸 Camera Integration** - Capture photos directly from your webcam and insert them into the newspaper layout
- **🎨 Canvas Filters** - Apply stunning visual effects to your images (vintage, sepia, black & white, and more)
- **📄 Print-Ready Design** - Optimized for single-page A4 printing with perfect scaling and layout preservation
- **🎯 Centered Layout** - Professional newspaper design centered on the page with authentic vintage styling
- **🎭 Vintage Aesthetic** - Classic Times New Roman typography with authentic newspaper colors (#fdf6e3)
- **📱 Responsive Interface** - Works seamlessly on desktop and tablet devices
- **⚡ Fast & Modern** - Built with React 19, TypeScript, and Vite for lightning-fast performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gazet_printer

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📋 Project Structure

```
gazet_printer/
├── src/
│   ├── components/
│   │   ├── CameraBlock.tsx       # Camera capture component
│   │   ├── NewspaperLayout.tsx   # Main newspaper layout
│   │   ├── PrintButton.tsx       # Print functionality
│   │   └── NewspaperLayout.css   # Styling & print optimization
│   ├── utils/
│   │   └── canvasFilters.ts      # Image filter effects
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 📖 How to Use

1. **Open the App** - Launch the application in your browser
2. **Capture Photos** - Use the camera block to take photos from your webcam
3. **Apply Filters** - Enhance your images with built-in filters (optional)
4. **Compose Layout** - The newspaper automatically layouts your content with a professional design
5. **Print** - Click the Print button to generate a single-page A4 PDF or print directly

## 🎨 Customization

### Modify Newspaper Styling
Edit `src/components/NewspaperLayout.css` to customize:
- Font sizes (currently optimized to fit one page)
- Colors and background
- Spacing and padding
- Typography and heading styles

### Add New Filters
Extend `src/utils/canvasFilters.ts` to add custom image effects:
```typescript
export function myCustomFilter(context: CanvasRenderingContext2D, imageData: ImageData) {
  // Your filter implementation
}
```

## 🖨️ Print Optimization

The newspaper is optimized for A4 printing (210mm × 297mm) with:
- ✅ Single-page layout that fits everything
- ✅ Proper image scaling
- ✅ Correct color preservation (#fdf6e3 background)
- ✅ No page breaks within content
- ✅ Professional typography and spacing

## 🛠️ Tech Stack

- **React 19** - UI framework with hooks and latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **CSS3** - Modern styling with flexbox and grid
- **Canvas API** - Image processing and filters

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

## 💡 Tips & Tricks

- **Best Print Results** - Use a modern browser (Chrome, Firefox, Edge) for optimal printing
- **Camera Setup** - Ensure proper lighting for best photo quality
- **A4 Format** - The layout is specifically tuned for A4 paper size (210×297mm)
- **Professional Look** - Keep headlines concise for authentic newspaper appearance

## 🎯 Future Ideas

- [ ] Add more filter effects
- [ ] Image gallery with multiple photos
- [ ] Customizable newspaper masthead
- [ ] Text editing directly in the layout
- [ ] Export as PDF with download option
- [ ] Multiple language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Made with ❤️ for newspaper enthusiasts and creative makers**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
