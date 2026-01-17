const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

module.exports = async (req, res) => {
    const { t, m } = req.query;

    // Build the card URL to screenshot
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;

    // Build query params
    const params = new URLSearchParams();
    if (t) params.set('t', t);
    if (m) params.set('m', m);

    const cardUrl = `${protocol}://${host}/card?${params.toString()}`;

    let browser = null;

    try {
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: {
                width: 1200,
                height: 1200,
                deviceScaleFactor: 2
            },
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();

        // Navigate to the card page
        await page.goto(cardUrl, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for the card to render
        await page.waitForSelector('.tab-frame:not(.hidden) .candy-cane-border-fixed', {
            timeout: 10000
        });

        // Give animations a moment to settle
        await new Promise(resolve => setTimeout(resolve, 500));

        // Find the card element and screenshot it
        const cardElement = await page.$('.tab-frame:not(.hidden) .candy-cane-border-fixed');

        if (!cardElement) {
            throw new Error('Card element not found');
        }

        const screenshot = await cardElement.screenshot({
            type: 'png',
            omitBackground: false
        });

        // Return the PNG
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', 'attachment; filename="holiday-greeting.png"');
        res.setHeader('Cache-Control', 'no-cache');
        return res.status(200).send(screenshot);

    } catch (error) {
        console.error('Screenshot error:', error);
        return res.status(500).json({ error: 'Failed to generate screenshot', details: error.message });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
};
