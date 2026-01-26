# Content Reach Calculator

A lead generation tool for FTS (Failing to Success) that shows prospects how much audience they're missing by not distributing content across multiple platforms.

## Features

- 4-step flow: Platform → Frequency → Views → Email capture
- Animated results with visual comparison
- Dynamic "spicy quotes" based on user inputs
- Mobile responsive
- Calendly CTA integration

## The Math

- **FTS Client Average:** 3,000 views per post
- **FTS Posting Frequency:** Daily across 6 platforms = 180 posts/month
- **FTS Monthly Reach:** 540,000 views/month

User's gap = their reach vs. 540,000

## Deployment Options

### Option 1: GitHub Pages (Free)
```bash
cd content-reach-calculator
git init
git add .
git commit -m "Content Reach Calculator"
gh repo create fts-reach-calculator --public --source=. --push
# Then enable GitHub Pages in repo settings
```

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop this folder
3. Done!

### Option 3: Vercel (Free)
```bash
npm i -g vercel
cd content-reach-calculator
vercel
```

## Email Capture

Currently logs to console. To send leads somewhere:

1. **Beehiiv:** Add their embed form or API call
2. **Webhook (Zapier/Make):** Uncomment the fetch() in showResults()
3. **Google Sheets:** Use a Google Apps Script webhook

Example webhook integration (in index.html):
```javascript
fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, platform, frequency, views, currentMonthlyReach, gapPercent })
});
```

## Customization

- **Colors:** Edit CSS variables in `:root`
- **FTS stats:** Change `FTS_VIEWS_PER_POST` and `FTS_POSTS_PER_MONTH` in JavaScript
- **Quotes:** Edit the `spicyQuotes` object
- **Calendly link:** Update the href in the CTA button

## Files

- `index.html` - Everything in one file (HTML + CSS + JS)
