/**
 * Production API Architecture — AtlasAI Masterpiece Layer
 * Communicates with Gemini API using secure Vercel Environment Variables.
 */
export const fetchLiveItineraryMatrix = async (destination, days, style, budget) => {
  // 🔐 Secure Environmental Variable Hook (Declared exactly once)
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const systemPrompt = `
    You are the premium AI travel architect. Generate a data dossier for: "${destination}" (${days} Days, ${style} style, budget: ${budget}).
    Respond with a single, valid JSON object matching this structure exactly. Do not wrap in markdown tags like \`\`\`json.
    
    {
      "destination": "${destination}",
      "duration": "${days} Days",
      "style": "${style}",
      "budget": "${budget}",
      "summary": "High-end text capsule summarizing the journey architecture.",
      "hotel": {
        "name": "Design Boutique Hotel Name",
        "rating": 4.9,
        "price": "₹12,500/night",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        "desc": "Bespoke design lodging synced with user metrics."
      },
      "timeline": [
        {
          "day": 1,
          "dateLabel": "Day 01",
          "colorIndex": 1,
          "weather": { "temp": "24°C", "condition": "Clear Skies" },
          "mapSnippet": { "lat": "35.6762", "lng": "139.6503", "zoneName": "Central Core Hub" },
          "activities": [
            { "time": "09:00 AM", "type": "Exploration", "title": "Priority Landmark Routing", "desc": "Bespoke guided integration run.", "cost": "Included" },
            { "time": "01:30 PM", "type": "Gastronomy", "title": "Culinary Matrix Session", "desc": "High-concept tasting sequence of local flavor hubs.", "cost": "₹1,800" }
          ],
          "restaurant": {
            "name": "Bespoke Table Hub",
            "cuisine": "Modern Local Fusion",
            "highlight": "Signature seasonal menu selection"
          }
        }
      ]
    }
  `;

  // Gorgeous design fallback system if key is missing or system is offline
  const fallbackMasterpieceData = {
    destination: destination.charAt(0).toUpperCase() + destination.slice(1),
    duration: `${days} Days`,
    style: style,
    budget: budget,
    summary: `Synchronized Matrix Dossier. System generated a premium, zero-friction workflow for your ${style} expedition to ${destination}.`,
    hotel: {
      name: `The Luminary Architectural Hub`,
      rating: 4.9,
      price: budget === '40k' ? '₹4,200/night' : '₹14,800/night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      desc: 'Bespoke high-end glassmorphic architecture featuring panoramic workspace bays and integrated health suites.'
    },
    timeline: Array.from({ length: parseInt(days) || 3 }, (_, i) => {
      const colors = [
        { border: 'border-l-primary-neon', text: 'text-primary-neon', bg: 'bg-primary-neon/5' },
        { border: 'border-l-secondary-neon', text: 'text-secondary-neon', bg: 'bg-secondary-neon/5' },
        { border: 'border-l-accent-cyan', text: 'text-accent-cyan', bg: 'bg-accent-cyan/5' }
      ];
      const matchColor = colors[i % colors.length];

      return {
        day: i + 1,
        dateLabel: `Day 0${i + 1}`,
        colorTheme: matchColor,
        weather: { temp: `${21 + (i % 3)}°C`, condition: i % 2 === 0 ? 'Clear Skies' : 'Soft Overcast' },
        mapSnippet: { lat: 'COORD.X', lng: 'COORD.Y', zoneName: `${destination} Grid Sector ${i + 1}` },
        activities: [
          { time: '09:00 AM', type: 'Exploration', title: 'Macro Architectural Navigation', desc: `Priority access deployment across primary historical and visual landmarks in ${destination}.`, cost: 'Included' },
          { time: '01:30 PM', type: 'Gastronomy', title: 'Concept Culinary Tasting Menu', desc: 'Curated dining checkpoint matching regional profile parameters and clean flavor mapping.', cost: '₹1,500' },
          { time: '06:00 PM', type: 'Leisure', title: 'Golden Hour Drone Orientation', desc: 'Strategic high-vantage location chosen for twilight viewports and community interaction.', cost: '₹600' }
        ],
        restaurant: {
          name: `The ${destination} Tasting Lab`,
          cuisine: 'Modern Hyper-Local Fusion',
          highlight: 'Chef special computational tasting course'
        }
      };
    })
  };

  if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
    return fallbackMasterpieceData;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt }] }] })
    });

    if (!response.ok) throw new Error(`Status error: ${response.status}`);
    const rawData = await response.json();
    let textResponse = rawData.candidates[0].content.parts[0].text.trim();
    
    if (textResponse.startsWith("```json")) {
      textResponse = textResponse.replace(/^```json/, "").replace(/```$/, "").trim();
    } else if (textResponse.startsWith("```")) {
      textResponse = textResponse.replace(/^```/, "").replace(/```$/, "").trim();
    }

    const liveData = JSON.parse(textResponse);
    
    const colors = [
      { border: 'border-l-primary-neon', text: 'text-primary-neon', bg: 'bg-primary-neon/5' },
      { border: 'border-l-secondary-neon', text: 'text-secondary-neon', bg: 'bg-secondary-neon/5' },
      { border: 'border-l-accent-cyan', text: 'text-accent-cyan', bg: 'bg-accent-cyan/5' }
    ];

    liveData.timeline = liveData.timeline.map((item, index) => ({
      ...item,
      colorTheme: colors[index % colors.length]
    }));

    return liveData;
  } catch (error) {
    console.warn('API error tracking. Spawning design canvas data layers:', error);
    return fallbackMasterpieceData;
  }
};