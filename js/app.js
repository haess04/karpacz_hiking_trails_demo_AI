/**
 * Karpacz Hiking Trails - Interactive Map Application
 * 
 * Features:
 * - Interactive Leaflet map with hiking trails
 * - Trail filtering by difficulty, color, and length
 * - Detailed trail information panel
 * - Responsive design
 */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    map: {
        center: [50.775, 15.73], // Karpacz center
        zoom: 13,
        minZoom: 10,
        maxZoom: 17
    },
    colors: {
        red: '#dc2626',
        blue: '#2563eb',
        green: '#16a34a',
        yellow: '#ca8a04'
    },
    apiUrl: 'data/trails.json',
    tiles: {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd'
    }
};

// ========================================
// State Management
// ========================================
const state = {
    trails: [],
    filteredTrails: [],
    activeTrail: null,
    map: null,
    trailLayers: {},
    markers: []
};

// ========================================
// DOM Elements
// ========================================
const elements = {
    trailList: document.getElementById('trail-list'),
    trailCount: document.getElementById('trail-count'),
    trailDetail: document.getElementById('trail-detail'),
    detailContent: document.getElementById('detail-content'),
    closeDetailBtn: document.getElementById('close-detail'),
    themeToggle: document.getElementById('theme-toggle'),
    filters: {
        difficulty: document.getElementById('difficulty-filter'),
        color: document.getElementById('color-filter'),
        length: document.getElementById('length-filter'),
        reset: document.getElementById('reset-filters')
    }
};

// ========================================
// Map Initialization
// ========================================
function initMap() {
    // Create map instance
    state.map = L.map('map', {
        center: CONFIG.map.center,
        zoom: CONFIG.map.zoom,
        minZoom: CONFIG.map.minZoom,
        maxZoom: CONFIG.map.maxZoom
    });

    // Add CartoDB Voyager tile layer (clean, modern style)
    L.tileLayer(CONFIG.tiles.url, {
        attribution: CONFIG.tiles.attribution,
        maxZoom: 19,
        subdomains: CONFIG.tiles.subdomains
    }).addTo(state.map);
}

// ========================================
// Data Loading
// ========================================
async function loadTrailsData() {
    try {
        // Use embedded data if available (works with file:// protocol)
        // Otherwise try to fetch from JSON file
        let data;
        
        if (typeof TRAILS_DATA !== 'undefined') {
            console.log('Using embedded trails data');
            data = TRAILS_DATA;
        } else {
            console.log('Fetching trails from:', CONFIG.apiUrl);
            const response = await fetch(CONFIG.apiUrl);
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            data = await response.json();
        }
        
        console.log('Data loaded:', data);
        state.trails = data.trails;
        state.filteredTrails = [...state.trails];
        
        // Store metadata for later use
        state.difficultyLevels = data.difficulty_levels;
        state.trailColors = data.trail_colors;
        
        return data;
    } catch (error) {
        console.error('Error loading trails data:', error);
        showError('Failed to load trails data. Please refresh the page.');
        return null;
    }
}

// ========================================
// Trail Rendering - List
// ========================================
function renderTrailList() {
    elements.trailList.innerHTML = '';
    elements.trailCount.textContent = state.filteredTrails.length;

    if (state.filteredTrails.length === 0) {
        elements.trailList.innerHTML = `
            <div class="empty-state">
                <p>No trails match your filters.</p>
                <button onclick="resetFilters()" class="btn-secondary">Reset Filters</button>
            </div>
        `;
        return;
    }

    state.filteredTrails.forEach(trail => {
        const card = createTrailCard(trail);
        elements.trailList.appendChild(card);
    });
}

function createTrailCard(trail) {
    const card = document.createElement('div');
    card.className = 'trail-card';
    card.dataset.id = trail.id;
    card.dataset.color = trail.color;
    
    if (state.activeTrail && state.activeTrail.id === trail.id) {
        card.classList.add('active');
    }

    const difficultyClass = `badge-difficulty-${trail.difficulty}`;
    const difficultyLabel = trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1);

    card.innerHTML = `
        <div class="trail-card-header">
            <div class="trail-card-title">${trail.name}</div>
            <div class="trail-card-badges">
                <span class="badge ${difficultyClass}">${difficultyLabel}</span>
                <span class="badge badge-color ${trail.color}"></span>
            </div>
        </div>
        <div class="trail-card-stats">
            <div class="trail-card-stat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                ${trail.length_km} km
            </div>
            <div class="trail-card-stat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                +${trail.elevation_gain_m}m
            </div>
            <div class="trail-card-stat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ${trail.estimated_time_hours}h
            </div>
        </div>
    `;

    card.addEventListener('click', () => selectTrail(trail));

    return card;
}

// ========================================
// Trail Rendering - Map
// ========================================
function renderTrailsOnMap() {
    // Clear existing layers
    Object.values(state.trailLayers).forEach(layer => {
        state.map.removeLayer(layer);
    });
    state.trailLayers = {};

    // Clear existing markers
    state.markers.forEach(marker => state.map.removeLayer(marker));
    state.markers = [];

    // Add new trails
    state.filteredTrails.forEach(trail => {
        addTrailToMap(trail);
    });

    // Fit map to show all trails if no active trail
    if (!state.activeTrail && state.filteredTrails.length > 0) {
        fitMapToTrails();
    }
}

function addTrailToMap(trail) {
    const color = CONFIG.colors[trail.color] || '#333';
    
    // Create polyline from waypoints
    const latlngs = trail.waypoints.map(wp => [wp.lat, wp.lon]);
    
    const polyline = L.polyline(latlngs, {
        color: color,
        weight: 4,
        opacity: 0.8,
        dashArray: trail.id === state.activeTrail?.id ? null : '10, 10',
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(state.map);

    // Add click event
    polyline.on('click', () => selectTrail(trail));

    // Add popup
    const popupContent = `
        <div class="popup-title">${trail.name}</div>
        <div class="popup-stats">
            ${trail.length_km} km | ${trail.estimated_time_hours}h | ${trail.difficulty}
        </div>
    `;
    polyline.bindPopup(popupContent);

    state.trailLayers[trail.id] = polyline;

    // Add markers for start and end points
    const startIcon = createMarkerIcon('start', trail.color);
    const endIcon = createMarkerIcon('end', trail.color);

    const startMarker = L.marker([trail.start_point.lat, trail.start_point.lon], { icon: startIcon })
        .addTo(state.map)
        .bindPopup(`<b>Start:</b> ${trail.start_point.name}`);
    
    const endMarker = L.marker([trail.end_point.lat, trail.end_point.lon], { icon: endIcon })
        .addTo(state.map)
        .bindPopup(`<b>End:</b> ${trail.end_point.name}`);

    state.markers.push(startMarker, endMarker);
}

function createMarkerIcon(type, color) {
    const colorHex = CONFIG.colors[color] || '#333';
    const iconHtml = type === 'start' 
        ? `<div style="background: ${colorHex}; width: 12px; height: 12px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`
        : `<div style="background: white; width: 12px; height: 12px; border-radius: 50%; border: 3px solid ${colorHex}; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`;
    
    return L.divIcon({
        html: iconHtml,
        className: 'custom-marker',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });
}

function fitMapToTrails() {
    if (state.filteredTrails.length === 0) return;

    const allPoints = [];
    state.filteredTrails.forEach(trail => {
        trail.waypoints.forEach(wp => {
            allPoints.push([wp.lat, wp.lon]);
        });
    });

    if (allPoints.length > 0) {
        state.map.fitBounds(allPoints, { padding: [50, 50] });
    }
}

// ========================================
// Trail Selection & Detail View
// ========================================
function selectTrail(trail) {
    state.activeTrail = trail;

    // Update UI
    document.querySelectorAll('.trail-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.id === trail.id) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    // Highlight on map
    Object.entries(state.trailLayers).forEach(([id, layer]) => {
        if (id === trail.id) {
            layer.setStyle({ weight: 6, opacity: 1, dashArray: null });
            layer.bringToFront();
        } else {
            layer.setStyle({ weight: 3, opacity: 0.5, dashArray: '5, 5' });
        }
    });

    // Show detail panel
    showTrailDetail(trail);

    // Zoom to trail
    const latlngs = trail.waypoints.map(wp => [wp.lat, wp.lon]);
    state.map.fitBounds(latlngs, { padding: [100, 100], maxZoom: 15 });
}

function showTrailDetail(trail) {
    const difficultyInfo = state.difficultyLevels[trail.difficulty];
    const colorInfo = state.trailColors[trail.color];

    elements.detailContent.innerHTML = `
        <div class="trail-detail-header">
            <h2 class="trail-detail-title">${trail.name}</h2>
            <div class="trail-detail-badges">
                <span class="badge badge-difficulty-${trail.difficulty}">
                    ${difficultyInfo.label}
                </span>
                <span class="badge" style="background: ${colorInfo.hex}20; color: ${colorInfo.hex};">
                    ${colorInfo.label}
                </span>
            </div>
        </div>

        <div class="trail-detail-stats">
            <div class="stat-box">
                <div class="stat-value">${trail.length_km}</div>
                <div class="stat-label">km</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">+${trail.elevation_gain_m}</div>
                <div class="stat-label">m elevation</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">${trail.estimated_time_hours}</div>
                <div class="stat-label">hours</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">${trail.waypoints[trail.waypoints.length - 1].elevation}</div>
                <div class="stat-label">m max alt</div>
            </div>
        </div>

        <div class="trail-detail-section">
            <h3>📖 Description</h3>
            <p>${trail.description}</p>
        </div>

        <div class="trail-detail-section">
            <h3>🗺️ Route Points</h3>
            <ul class="waypoints-list">
                ${trail.waypoints.map((wp, index) => `
                    <li>
                        <span class="waypoint-marker"></span>
                        <span>${index === 0 ? '🚀 ' : index === trail.waypoints.length - 1 ? '🏁 ' : '📍 '}${wp.name}</span>
                        <span class="waypoint-elevation">${wp.elevation}m</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="trail-detail-section">
            <h3>⭐ Features</h3>
            <div class="features-list">
                ${trail.features.map(feature => `
                    <span class="feature-tag">${formatFeature(feature)}</span>
                `).join('')}
            </div>
        </div>

        <div class="trail-detail-section">
            <h3>📍 Start & End</h3>
            <p><strong>Start:</strong> ${trail.start_point.name}</p>
            <p style="margin-top: 0.5rem;"><strong>End:</strong> ${trail.end_point.name}</p>
        </div>
    `;

    elements.trailDetail.classList.remove('hidden');
}

function formatFeature(feature) {
    const featureMap = {
        'mountain_peak': '⛰️ Mountain Peak',
        'shelter': '🏠 Mountain Shelter',
        'scenic_views': '📸 Scenic Views',
        'waterfall': '💧 Waterfall',
        'forest': '🌲 Forest',
        'historic_site': '🏛️ Historic Site',
        'glacial_cirque': '🏔️ Glacial Cirque',
        'challenging': '⚡ Challenging',
        'family_friendly': '👨‍👩‍👧‍👦 Family Friendly',
        'rock_formations': '🪨 Rock Formations',
        'circular': '🔄 Circular',
        'mountain_lake': '🏞️ Mountain Lake',
        'border_crossing': '🌐 Border Crossing',
        'ridge_walk': '🥾 Ridge Walk',
        'valley_views': '🏞️ Valley Views',
        'town_connection': '🏘️ Town Connection',
        'less_crowded': '✨ Less Crowded',
        'panoramic_views': '🌄 Panoramic Views',
        'long_distance': '📏 Long Distance',
        'mostly_downhill': '⬇️ Mostly Downhill',
        'educational': '📚 Educational',
        'castle_ruins': '🏰 Castle Ruins',
        'cultural': '🎭 Cultural',
        'nature': '🌿 Nature',
        'photography': '📷 Photography'
    };
    return featureMap[feature] || feature.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function closeTrailDetail() {
    elements.trailDetail.classList.add('hidden');
    state.activeTrail = null;

    // Reset map styles
    Object.values(state.trailLayers).forEach(layer => {
        layer.setStyle({ weight: 4, opacity: 0.8, dashArray: '10, 10' });
    });

    // Reset card selection
    document.querySelectorAll('.trail-card').forEach(card => {
        card.classList.remove('active');
    });

    // Fit to all trails
    fitMapToTrails();
}

// ========================================
// Filtering
// ========================================
function applyFilters() {
    const difficulty = elements.filters.difficulty.value;
    const color = elements.filters.color.value;
    const maxLength = elements.filters.length.value;

    state.filteredTrails = state.trails.filter(trail => {
        // Difficulty filter
        if (difficulty !== 'all' && trail.difficulty !== difficulty) {
            return false;
        }

        // Color filter
        if (color !== 'all' && trail.color !== color) {
            return false;
        }

        // Length filter
        if (maxLength !== 'all' && trail.length_km > parseInt(maxLength)) {
            return false;
        }

        return true;
    });

    renderTrailList();
    renderTrailsOnMap();
}

function resetFilters() {
    elements.filters.difficulty.value = 'all';
    elements.filters.color.value = 'all';
    elements.filters.length.value = 'all';

    state.filteredTrails = [...state.trails];
    state.activeTrail = null;

    renderTrailList();
    renderTrailsOnMap();
    closeTrailDetail();
}

// ========================================
// Error Handling
// ========================================
function showError(message) {
    elements.trailList.innerHTML = `
        <div class="error-state" style="padding: 2rem; text-align: center; color: #dc2626;">
            <p style="font-size: 1.1rem; margin-bottom: 1rem;">⚠️ ${message}</p>
            <button onclick="location.reload()" class="btn-secondary">Refresh Page</button>
        </div>
    `;
}

// ========================================
// Theme Toggle
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ========================================
// Event Listeners
// ========================================
function initEventListeners() {
    // Filter changes
    elements.filters.difficulty.addEventListener('change', applyFilters);
    elements.filters.color.addEventListener('change', applyFilters);
    elements.filters.length.addEventListener('change', applyFilters);

    // Reset button
    elements.filters.reset.addEventListener('click', resetFilters);

    // Close detail panel
    elements.closeDetailBtn.addEventListener('click', closeTrailDetail);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTrailDetail();
        }
    });
}

// ========================================
// Initialization
// ========================================
async function init() {
    // Initialize theme (dark mode default)
    initTheme();

    // Initialize map
    initMap();

    // Initialize event listeners
    initEventListeners();

    // Load data
    const data = await loadTrailsData();
    if (data) {
        renderTrailList();
        renderTrailsOnMap();
    }
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);