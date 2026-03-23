# 🥾 Karpacz Hiking Trails

An interactive web application showcasing hiking trails in Karpacz, Poland - a popular mountain resort town in the Karkonosze Mountains.

🔗 **Live Demo**: [https://yourusername.github.io/karpacz-trails](https://yourusername.github.io/karpacz-trails)

![Project Screenshot](screenshot.png)

## 📋 About the Project

This project was created as a portfolio piece to demonstrate front-end development skills. It provides hikers with an easy way to explore and filter hiking trails in the Karpacz region based on difficulty, trail color marking, and distance.

### Features

- 🗺️ **Interactive Map** - Built with Leaflet.js and OpenStreetMap tiles
- 🔍 **Trail Filtering** - Filter by difficulty (Easy/Moderate/Difficult), trail color, and maximum distance
- 📊 **Detailed Trail Information** - View trail length, elevation gain, estimated time, and waypoints
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Pure JavaScript** - No frameworks, demonstrating vanilla JS skills
- 🎨 **Modern UI** - Clean, accessible design with CSS custom properties

## 🚀 Technologies Used

| Category | Technology |
|----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Mapping** | Leaflet.js 1.9.4 |
| **Tile Server** | OpenStreetMap + OpenTopoMap |
| **Styling** | CSS Custom Properties, Flexbox, Grid |
| **Data** | JSON (trail coordinates and metadata) |
| **Hosting** | GitHub Pages |

## 📁 Project Structure

```
karpacz-trails/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles with CSS variables
├── js/
│   └── app.js              # Application logic (~400 lines)
├── data/
│   └── trails.json         # Trail data (14 routes)
└── README.md               # This file
```

## 🗺️ Trail Data

The application includes **14 hiking trails** in the Karpacz region:

| Trail | Difficulty | Length | Elevation |
|-------|------------|--------|-----------|
| Karpacz → Śnieżka | Moderate | 7.2 km | +750m |
| Karpacz → Samotnia | Easy | 4.5 km | +320m |
| Karpacz → Śnieżne Kotły | Difficult | 9.8 km | +900m |
| ...and 11 more trails | | | |

Data sources: OpenStreetMap, Karkonosze National Park official information.

## 🛠️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/karpacz-trails.git
```

2. Navigate to the project directory:
```bash
cd karpacz-trails
```

3. Serve with any static server (or simply open `index.html`):
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

4. Open your browser at `http://localhost:8000`

## 📝 Key Implementation Details

### Map Rendering
- Trails are drawn as Leaflet polylines with color-coded paths
- Start/end points marked with custom div icons
- Trail highlighting on selection with zoom-to-fit

### State Management
- Pure JavaScript state object manages:
  - Trail data
  - Active filters
  - Selected trail
  - Map layers

### Performance Optimizations
- Efficient DOM updates (only re-render when filters change)
- Debounced map interactions
- Lazy loading of map tiles

## 🎯 Skills Demonstrated

- ✅ **JavaScript (ES6+)** - Async/await, arrow functions, destructuring, modules
- ✅ **DOM Manipulation** - Event handling, dynamic content generation
- ✅ **API Integration** - Fetch API for JSON data loading
- ✅ **Responsive Design** - Mobile-first CSS, media queries
- ✅ **UI/UX Design** - Clean interface, intuitive filtering
- ✅ **Version Control** - Git workflow with meaningful commits
- ✅ **Open Source Data** - Working with OSM and public datasets

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshot-desktop.png)

### Mobile View
![Mobile Screenshot](screenshot-mobile.png)

## 🔮 Future Enhancements

- [ ] Add GPX file download for each trail
- [ ] Implement elevation profile charts
- [ ] Add weather integration for trail conditions
- [ ] Include photos of key viewpoints
- [ ] Multi-language support (EN/PL/CZ)
- [ ] User ratings and reviews

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Trail data is sourced from OpenStreetMap contributors under ODbL license.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

*Created as a portfolio project for demonstrating front-end development skills.*
