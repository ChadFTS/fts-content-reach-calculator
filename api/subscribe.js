// Vercel Serverless Function - Beehiiv Subscription
export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, platform, frequency, views, currentReach, gapPercent } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
    const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

    try {
        const response = await fetch(
            `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${BEEHIIV_API_KEY}`
                },
                body: JSON.stringify({
                    email: email,
                    reactivate_existing: true,
                    send_welcome_email: true,
                    utm_source: 'content_reach_calculator',
                    utm_medium: 'website',
                    custom_fields: [
                        { name: 'platform', value: platform || '' },
                        { name: 'posting_frequency', value: String(frequency) || '' },
                        { name: 'avg_views', value: String(views) || '' },
                        { name: 'current_reach', value: String(currentReach) || '' },
                        { name: 'gap_percent', value: String(gapPercent) || '' },
                        { name: 'lead_source', value: 'Content Reach Calculator' }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('Beehiiv API error:', data);
            return res.status(response.status).json({ error: data.message || 'Subscription failed' });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Subscription error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
