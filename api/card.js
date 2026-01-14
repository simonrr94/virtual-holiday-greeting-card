const fs = require('fs');
const path = require('path');

// Theme data (matches client-side shareThemeMap)
const themes = {
    '1': { name: 'Snowy Cabin' },
    '2': { name: "Santa's Workshop" },
    '3': { name: 'Winter Wonderland' }
};

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeJs(str) {
    if (!str) return '';
    return str
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r');
}

function truncate(str, maxLength = 200) {
    if (!str || str.length <= maxLength) return str;
    return str.substring(0, maxLength - 3) + '...';
}

function buildShareMessage(userMessage) {
    const baseMessage = "Happy Holidays! 🎄✨ Check out this custom holiday greeting I made using the Virtual Holiday Greeting Card app.";
    if (userMessage && userMessage.trim()) {
        return `${userMessage.trim()} ${baseMessage}`;
    }
    return baseMessage;
}

module.exports = async (req, res) => {
    const { t, m } = req.query;

    // Get theme info (default to theme 1)
    const themeIndex = t && themes[t] ? t : '1';
    const theme = themes[themeIndex];

    // Decode user message
    const userMessage = m ? decodeURIComponent(m) : '';

    // Build the full card URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const cardUrl = `${protocol}://${host}${req.url}`;

    // Build the auto-generated share message
    const shareMessage = buildShareMessage(userMessage);

    // Build meta tag content
    const baseUrl = `${protocol}://${host}`;
    const ogTitle = escapeHtml(`${theme.name} - Holiday Greeting`);
    const ogDescription = escapeHtml(truncate(shareMessage, 200));
    const ogImage = `${baseUrl}/placeholder-preview.png`;
    const ogUrl = cardUrl;

    // Generate OG meta tags
    const ogTags = `
    <!-- Open Graph Meta Tags (Dynamic) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:image" content="${ogImage}" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${ogDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
`;

    // Script to expose share data to client-side JS
    const clientDataScript = `
    <script>
        window.shareMessage = '${escapeJs(shareMessage)}';
        window.cardUrl = '${escapeJs(cardUrl)}';
    </script>
`;

    try {
        // Read the base HTML file
        const htmlPath = path.join(process.cwd(), 'holiday greeting scenes and web ui', 'webpage-skeleton.html');
        let html = fs.readFileSync(htmlPath, 'utf8');

        // Update the title tag
        html = html.replace(
            /<title>.*?<\/title>/,
            `<title>${ogTitle}</title>`
        );

        // Inject OG tags after the title
        html = html.replace(
            /<\/title>/,
            `</title>${ogTags}`
        );

        // Inject client data script before closing </head>
        html = html.replace(
            /<\/head>/,
            `${clientDataScript}</head>`
        );

        // Set content type and return
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).send(html);

    } catch (error) {
        console.error('Error serving card:', error);
        res.status(500).send('Error loading greeting card');
    }
};
