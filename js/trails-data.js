/**
 * Embedded trail data - works both with file:// and http://
 */
const TRAILS_DATA = {
  "metadata": {
    "region": "Karpacz, Karkonosze, Poland",
    "data_source": "OpenStreetMap + hiking project",
    "last_updated": "2024-03-22",
    "total_trails": 14
  },
  "trails": [
    {
      "id": "trail_001",
      "name": "Karpacz Górny - Śnieżka (red trail)",
      "color": "red",
      "difficulty": "moderate",
      "length_km": 7.2,
      "elevation_gain_m": 750,
      "estimated_time_hours": 3.5,
      "start_point": { "name": "Karpacz Górny (Kocioł Łomniczki)", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Śnieżka (1602 m n.p.m.)", "lat": 50.7359, "lon": 15.7394 },
      "waypoints": [
        {"name": "Kocioł Łomniczki", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Śląski Dom", "lat": 50.7534, "lon": 15.7289, "elevation": 1100},
        {"name": "Przełęcz pod Śnieżką", "lat": 50.7400, "lon": 15.7350, "elevation": 1380},
        {"name": "Śnieżka", "lat": 50.7359, "lon": 15.7394, "elevation": 1602}
      ],
      "description": "Popular trail to the highest peak in the Sudetes. Offers stunning views but can be crowded on weekends.",
      "features": ["mountain_peak", "shelter", "scenic_views"]
    },
    {
      "id": "trail_002",
      "name": "Karpacz - Samotnia (blue trail)",
      "color": "blue",
      "difficulty": "easy",
      "length_km": 4.5,
      "elevation_gain_m": 320,
      "estimated_time_hours": 2,
      "start_point": { "name": "Karpacz Dolny (centrum)", "lat": 50.7740, "lon": 15.7550 },
      "end_point": { "name": "Samotnia Shelter", "lat": 50.7600, "lon": 15.7350 },
      "waypoints": [
        {"name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550, "elevation": 650},
        {"name": "Wang Church", "lat": 50.7700, "lon": 15.7500, "elevation": 680},
        {"name": "Biały Jar", "lat": 50.7650, "lon": 15.7400, "elevation": 750},
        {"name": "Samotnia", "lat": 50.7600, "lon": 15.7350, "elevation": 970}
      ],
      "description": "Beautiful and accessible trail leading to the historic Samotnia mountain shelter. Passes near the famous Wang Church.",
      "features": ["shelter", "historic_site", "forest"]
    },
    {
      "id": "trail_003",
      "name": "Karpacz - Śnieżne Kotły (green trail)",
      "color": "green",
      "difficulty": "difficult",
      "length_km": 9.8,
      "elevation_gain_m": 900,
      "estimated_time_hours": 5,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Śnieżne Kotły", "lat": 50.7300, "lon": 15.7100 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Przełęcz Karkonoska", "lat": 50.7450, "lon": 15.7150, "elevation": 1198},
        {"name": "Śnieżne Kotły", "lat": 50.7300, "lon": 15.7100, "elevation": 1490}
      ],
      "description": "Challenging trail to the Snow Pits - one of the most beautiful glacial cirques in the Sudetes. Spectacular views.",
      "features": ["glacial_cirque", "scenic_views", "challenging"]
    },
    {
      "id": "trail_004",
      "name": "Circular trail: Karpacz - Pielgrzymy - Karpacz (yellow trail)",
      "color": "yellow",
      "difficulty": "easy",
      "length_km": 6.0,
      "elevation_gain_m": 200,
      "estimated_time_hours": 2.5,
      "start_point": { "name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550 },
      "end_point": { "name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550 },
      "waypoints": [
        {"name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550, "elevation": 650},
        {"name": "Pielgrzymy Rocks", "lat": 50.7800, "lon": 15.7400, "elevation": 850},
        {"name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550, "elevation": 650}
      ],
      "description": "Easy circular route with interesting rock formations. Great for families and beginners.",
      "features": ["rock_formations", "family_friendly", "circular"]
    },
    {
      "id": "trail_005",
      "name": "Karpacz - Mały Staw (red trail via Liščí hora)",
      "color": "red",
      "difficulty": "moderate",
      "length_km": 5.5,
      "elevation_gain_m": 450,
      "estimated_time_hours": 2.5,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Mały Staw", "lat": 50.7450, "lon": 15.7250 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Liščí hora (Lisia Góra)", "lat": 50.7520, "lon": 15.7200, "elevation": 1085},
        {"name": "Mały Staw", "lat": 50.7450, "lon": 15.7250, "elevation": 1183}
      ],
      "description": "Trail leading to the beautiful mountain lake Mały Staw with the historic mountain hotel.",
      "features": ["mountain_lake", "shelter", "historic_site"]
    },
    {
      "id": "trail_006",
      "name": "Karkonosze Traverse: Karpacz - Przełęcz Karkonoska (green trail)",
      "color": "green",
      "difficulty": "moderate",
      "length_km": 8.5,
      "elevation_gain_m": 350,
      "estimated_time_hours": 3.5,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Przełęcz Karkonoska", "lat": 50.7450, "lon": 15.7150 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Mumlavský vodopád", "lat": 50.7550, "lon": 15.7180, "elevation": 800},
        {"name": "Przełęcz Karkonoska", "lat": 50.7450, "lon": 15.7150, "elevation": 1198}
      ],
      "description": "Scenic ridge traverse connecting Polish and Czech sides of the mountains. Passes near a beautiful waterfall.",
      "features": ["waterfall", "border_crossing", "ridge_walk"]
    },
    {
      "id": "trail_007",
      "name": "Karpacz - Śnieżka via Kopa (yellow trail)",
      "color": "yellow",
      "difficulty": "moderate",
      "length_km": 6.8,
      "elevation_gain_m": 680,
      "estimated_time_hours": 3,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Śnieżka", "lat": 50.7359, "lon": 15.7394 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Kopa (1377 m)", "lat": 50.7450, "lon": 15.7300, "elevation": 1377},
        {"name": "Śnieżka", "lat": 50.7359, "lon": 15.7394, "elevation": 1602}
      ],
      "description": "Alternative route to Śnieżka via Kopa peak. Less crowded than the red trail with equally great views.",
      "features": ["mountain_peak", "scenic_views", "less_crowded"]
    },
    {
      "id": "trail_008",
      "name": "Wild Waterfall Trail (blue circular)",
      "color": "blue",
      "difficulty": "easy",
      "length_km": 3.2,
      "elevation_gain_m": 150,
      "estimated_time_hours": 1.5,
      "start_point": { "name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400 },
      "end_point": { "name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400 },
      "waypoints": [
        {"name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400, "elevation": 750},
        {"name": "Dziki Wodospad", "lat": 50.7680, "lon": 15.7380, "elevation": 850},
        {"name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400, "elevation": 750}
      ],
      "description": "Short and easy circular trail to the Wild Waterfall. Perfect for a quick nature walk.",
      "features": ["waterfall", "family_friendly", "circular"]
    },
    {
      "id": "trail_009",
      "name": "Karpacz - Wielki Szyszak (yellow-green trail)",
      "color": "yellow",
      "difficulty": "difficult",
      "length_km": 12.5,
      "elevation_gain_m": 1050,
      "estimated_time_hours": 6,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Wielki Szyszak (1509 m)", "lat": 50.7250, "lon": 15.7000 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Przełęcz Karkonoska", "lat": 50.7450, "lon": 15.7150, "elevation": 1198},
        {"name": "Wielki Szyszak", "lat": 50.7250, "lon": 15.7000, "elevation": 1509}
      ],
      "description": "Challenging trail to one of the highest peaks on the Czech side. Offers panoramic views of both Polish and Czech sides of the mountains.",
      "features": ["mountain_peak", "border_crossing", "panoramic_views", "challenging"]
    },
    {
      "id": "trail_010",
      "name": "Karpacz - Szklarska Poręba (blue trail via Sowia Przełęcz)",
      "color": "blue",
      "difficulty": "moderate",
      "length_km": 15.0,
      "elevation_gain_m": 400,
      "estimated_time_hours": 5,
      "start_point": { "name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234 },
      "end_point": { "name": "Szklarska Poręba", "lat": 50.8250, "lon": 15.5200 },
      "waypoints": [
        {"name": "Karpacz Górny", "lat": 50.7589, "lon": 15.7234, "elevation": 850},
        {"name": "Przełęcz Karkonoska", "lat": 50.7450, "lon": 15.7150, "elevation": 1198},
        {"name": "Sowia Przełęcz", "lat": 50.7800, "lon": 15.6200, "elevation": 900},
        {"name": "Szklarska Poręba", "lat": 50.8250, "lon": 15.5200, "elevation": 450}
      ],
      "description": "Long-distance trail connecting Karpacz with Szklarska Poręba. Scenic ridge walk with views of both valleys.",
      "features": ["long_distance", "ridge_walk", "valley_views", "town_connection"]
    },
    {
      "id": "trail_011",
      "name": "Vang Church Educational Trail (green circular)",
      "color": "green",
      "difficulty": "easy",
      "length_km": 2.0,
      "elevation_gain_m": 80,
      "estimated_time_hours": 1,
      "start_point": { "name": "Kościół Wang", "lat": 50.7700, "lon": 15.7500 },
      "end_point": { "name": "Kościół Wang", "lat": 50.7700, "lon": 15.7500 },
      "waypoints": [
        {"name": "Kościół Wang", "lat": 50.7700, "lon": 15.7500, "elevation": 680},
        {"name": "Pomnik Związku Podhalan", "lat": 50.7750, "lon": 15.7450, "elevation": 720},
        {"name": "Kościół Wang", "lat": 50.7700, "lon": 15.7500, "elevation": 680}
      ],
      "description": "Short educational trail around the famous Norwegian stave church. Information boards about local flora and history.",
      "features": ["historic_site", "educational", "family_friendly", "circular"]
    },
    {
      "id": "trail_012",
      "name": "Śnieżka - Strzecha Akademicka (red trail)",
      "color": "red",
      "difficulty": "moderate",
      "length_km": 5.0,
      "elevation_gain_m": 50,
      "estimated_time_hours": 2,
      "start_point": { "name": "Śnieżka", "lat": 50.7359, "lon": 15.7394 },
      "end_point": { "name": "Strzecha Akademicka", "lat": 50.7400, "lon": 15.7100 },
      "waypoints": [
        {"name": "Śnieżka", "lat": 50.7359, "lon": 15.7394, "elevation": 1602},
        {"name": "Przełęcz pod Śnieżką", "lat": 50.7400, "lon": 15.7350, "elevation": 1380},
        {"name": "Strzecha Akademicka", "lat": 50.7400, "lon": 15.7100, "elevation": 1350}
      ],
      "description": "Scenic ridge trail from Śnieżka to Strzecha Akademicka shelter. Mostly downhill with great views of Śnieżne Kotły.",
      "features": ["ridge_walk", "shelter", "scenic_views", "mostly_downhill"]
    },
    {
      "id": "trail_013",
      "name": "Karpacz - Świątynia Wang - Zamek Leśna (yellow trail)",
      "color": "yellow",
      "difficulty": "easy",
      "length_km": 4.0,
      "elevation_gain_m": 100,
      "estimated_time_hours": 1.5,
      "start_point": { "name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550 },
      "end_point": { "name": "Zamek Leśna", "lat": 50.7850, "lon": 15.7650 },
      "waypoints": [
        {"name": "Karpacz Dolny", "lat": 50.7740, "lon": 15.7550, "elevation": 650},
        {"name": "Kościół Wang", "lat": 50.7700, "lon": 15.7500, "elevation": 680},
        {"name": "Zamek Leśna", "lat": 50.7850, "lon": 15.7650, "elevation": 750}
      ],
      "description": "Pleasant walk combining cultural highlights - the famous wooden church and the historic Leśna Castle ruins.",
      "features": ["historic_site", "castle_ruins", "cultural", "family_friendly"]
    },
    {
      "id": "trail_014",
      "name": "Biały Jar Waterfall Trail (green trail)",
      "color": "green",
      "difficulty": "easy",
      "length_km": 2.5,
      "elevation_gain_m": 120,
      "estimated_time_hours": 1,
      "start_point": { "name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400 },
      "end_point": { "name": "Wodospad Białego Jaru", "lat": 50.7620, "lon": 15.7380 },
      "waypoints": [
        {"name": "Parking Biały Jar", "lat": 50.7650, "lon": 15.7400, "elevation": 750},
        {"name": "Wodospad Białego Jaru", "lat": 50.7620, "lon": 15.7380, "elevation": 870}
      ],
      "description": "Short trail to one of the most beautiful waterfalls in the Karkonosze. The waterfall drops 30 meters into the gorge.",
      "features": ["waterfall", "nature", "family_friendly", "photography"]
    }
  ],
  "difficulty_levels": {
    "easy": { "label": "Easy", "description": "Suitable for beginners and families with children", "color_code": "#4CAF50" },
    "moderate": { "label": "Moderate", "description": "Requires some hiking experience and reasonable fitness", "color_code": "#FF9800" },
    "difficult": { "label": "Difficult", "description": "Requires good fitness and hiking experience", "color_code": "#F44336" }
  },
  "trail_colors": {
    "red": { "label": "Red Trail", "hex": "#D32F2F" },
    "blue": { "label": "Blue Trail", "hex": "#1976D2" },
    "green": { "label": "Green Trail", "hex": "#388E3C" },
    "yellow": { "label": "Yellow Trail", "hex": "#FBC02D" }
  }
};