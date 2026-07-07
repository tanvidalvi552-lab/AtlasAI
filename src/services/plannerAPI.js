/**
 * Production API Architecture — AtlasAI Masterpiece Layer
 * Communicates with Gemini API or serves structured design matrices.
 */
export const fetchLiveItineraryMatrix = async (destination, days, style, budget) => {
  const GEMINI_API_KEY = "AQ.Ab8RN6JwiSTOLhrziGM8z2vPvGy438GuKmGw5xnnzwJgsBNOGg"; 
  // Replace your hardcoded string assignments on lines 6 and 89 with this:
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (GEMINI_API_KEY === "AQ.Ab8RN6JwiSTOLhrziGM8z2vPvGy438GuKmGw5xnnzwJgsBNOGg") {
    await new Promise((res) => setTimeout(res, 2200));
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
    
    // Smooth helper injected to ensure fallback safety for color layouts from live API
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