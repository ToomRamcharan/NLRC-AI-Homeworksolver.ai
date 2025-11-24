// Vercel Serverless Function for Secure API Key Handling
// This function acts as a proxy to keep your API key secure on the server

export default async function handler(req, res) {
    // Enable CORS for your frontend
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { contents } = req.body;

        if (!contents) {
            return res.status(400).json({ error: 'Missing required field: contents' });
        }

        // Get API key from environment variable (set in Vercel dashboard)
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            console.error('GEMINI_API_KEY environment variable is not set');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Make request to Gemini API
        const response = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': API_KEY
                },
                body: JSON.stringify({ contents })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API Error:', response.status, errorText);
            return res.status(response.status).json({
                error: `Gemini API Error: ${response.statusText}`,
                details: errorText
            });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}
