# Kenjy Optimistic — Marketing Hub

Static multi-page marketing site for **Kenjy Optimistic**: teach beginners to make money with AI.

**Tagline:** LEARN AI. BUILD YOUR BRAND. CREATE CONTENT. MAKE MONEY.

- TikTok: [@kenjy_optimistic](https://www.tiktok.com/@kenjy_optimistic)
- Email: askkenjy@gmail.com
- Live tool: [aicaption.ai](https://aicaption.ai) (linked out; not rebuilt here)

## Pages

| Path | Description |
|------|-------------|
| `/` | Home — hero, niche pitch, CTAs |
| `/free/` | Free Pack — Starter Checklist + email capture |
| `/shop/` | Shop overview cards |
| `/club/` | Kenjy AI Money Club ($37/mo · $297/yr · founding $27) |
| `/courses/ai-made-simple/` | Course 1 sales page |
| `/courses/ai-music/` | Course 2 stub |
| `/courses/agents/` | Agents course stub |
| `/website-package/` | Website package for AI/creator businesses |
| `/tools/` | aicaption.ai + placeholders |
| `/affiliates/` | Honest disclosure + affiliate placeholders |

## Tech

- Shared `styles.css` (neon pink/magenta, black, purple, glassmorphism)
- Shared `nav.js` + `config.js` (Stripe & affiliate URL placeholders)
- Mobile-first, accessible, folder/`index.html` paths for static hosting

## Configure checkout

Edit `config.js`:

- `STRIPE_CLUB_MONTHLY`, `STRIPE_CLUB_YEARLY`, `STRIPE_CLUB_FOUNDING`
- `STRIPE_COURSE_*`, `STRIPE_WEBSITE_PACKAGE`
- `AFFILIATE_ELEVENLABS`, `AFFILIATE_LOVABLE`, `AFFILIATE_MUBERT`

Keep customers on-site (no Skool/Whop as primary checkout).

## Deploy

See [DEPLOY.md](./DEPLOY.md).

## License

All rights reserved © Kenjy Optimistic.
