# Calculator Lead Nurture Sequence

## Overview
- **Trigger:** New subscriber from Content Reach Calculator
- **Goal:** Book strategy call
- **Tone:** Personal, direct, value-first
- **Cadence:** 5 emails over 14 days

---

## Email 1: Your Results (Immediate)

**Subject:** You're leaving {{gap_percent}}% of your audience on the table

Hey,

You just ran the numbers.

Right now you're reaching about {{current_reach}} views/month.

FTS clients? 540,000.

That's not a gap — it's a canyon.

Here's the thing: you're already creating content. The problem isn't effort. It's distribution.

One hour of your time → we turn it into 60-120 posts across 6 platforms.

Want to see what that would actually look like for your business?

Book 15 mins and I'll walk you through it:
https://calendly.com/chad-fts/videxpert

Cheers,
Chad
FTS

---

## Email 2: Case Study (Day 2)

**Subject:** How April went from invisible to 400,000 views

Quick story:

April Davis runs LUMA Luxury Matchmaking.

She was posting occasionally. Getting a few hundred views. The usual.

120 days later?
→ 400,000 views
→ 15,000 new followers
→ Clients finding her through content she didn't even remember posting

The difference wasn't working harder. It was showing up everywhere, every day, with content that actually hit.

We do 1 interview/month with April. 60 minutes.

We turn it into 60-120 posts. She doesn't touch any of it.

If that sounds interesting:
https://calendly.com/chad-fts/videxpert

— Chad

P.S. More case studies here if you're curious: https://www.ftspod.com/case-studies

---

## Email 3: The Offer (Day 5)

**Subject:** Want me to build this out for you?

Hey,

I've been thinking about your calculator results.

Would it help if I put together a quick doc showing exactly how we'd package your expertise into viral content?

No strings. Just a 1-pager with:
- Topic ideas specific to your industry
- Which platforms would hit hardest for you
- What 60-120 posts/month would actually look like

If you want it, just reply "send it" and I'll put something together.

— Chad

---

## Email 4: Social Proof Stack (Day 8)

**Subject:** 70 million views later...

Some numbers from the last 12 months:

→ 70M+ total views generated
→ 5M+ followers added
→ 100+ CEOs and founders

Not influencers. Business owners.

People who don't have time to post every day. Who tried hiring a social media person and it didn't work. Who know they should be doing this but can't figure out how.

Sound familiar?

15 minutes. I'll show you how it works:
https://calendly.com/chad-fts/videxpert

— Chad

---

## Email 5: Last Call (Day 14)

**Subject:** Still leaving views on the table?

Hey,

Two weeks ago you found out you're capturing less than 1% of your potential audience.

Has anything changed?

If not, I'd love to help.

If it's not a fit, no worries — just reply "stop" and I'll leave you alone forever.

But if you're still curious:
https://calendly.com/chad-fts/videxpert

— Chad

---

## Custom Fields for Personalization

These fields are captured from the calculator and sent to Beehiiv:

| Field Name | Description | Example |
|------------|-------------|---------|
| `coresocial` | Main platform they use | linkedin |
| `posting_frequency` | Posts per month | 4 |
| `avg_views` | Average views per post | 200 |
| `current_reach` | Calculated monthly reach | 800 |
| `gap_percent` | % of potential they're missing | 99.85 |
| `lead_source` | Always "Content Reach Calculator" | Content Reach Calculator |

## Beehiiv Automation Setup

1. Go to **Automations** in Beehiiv
2. Create new automation
3. Trigger: **New Subscriber**
4. Filter: `lead_source` equals "Content Reach Calculator"
5. Add email sequence with delays:
   - Email 1: Immediate
   - Email 2: 2 day delay
   - Email 3: 3 day delay (Day 5)
   - Email 4: 3 day delay (Day 8)
   - Email 5: 6 day delay (Day 14)
