# Deploy Kenjy Hub

Repo target: [askkenjy/kenjy-hub](https://github.com/askkenjy/kenjy-hub) · branch `main`

## Vercel (recommended)

1. Push this folder to GitHub `askkenjy/kenjy-hub` on `main`.
2. Import the repo in [Vercel](https://vercel.com):
   - Framework Preset: **Other**
   - Root Directory: `.` (site root with `index.html`)
   - Build Command: leave empty
   - Output Directory: leave empty (static files at root)
3. Deploy. Vercel serves `index.html` in folders automatically (`/club/` → `club/index.html`).
4. Optional: add `404.html` rewrite in `vercel.json` if you want custom 404s:

```json
{
  "cleanUrls": true,
  "trailingSlash": true
}
```

### Custom domain

1. In Vercel → Project → Settings → Domains, add your domain (e.g. `kenjyoptimistic.com`).
2. Point DNS:
   - Apex: A record to Vercel’s IPs (or use their nameservers), or
   - `www` CNAME → `cname.vercel-dns.com`
3. Wait for SSL. Set primary domain and redirect www ↔ apex as preferred.

## here.now (preview / ephemeral)

From the site root (or parent with path):

```bash
npx --yes skills add heredotnow/skill --skill here-now -g
# then publish with SPA mode + client attribution, e.g.:
# here-now publish ./kenjy-hub --spa --client grok-bot/Kenllaly
```

Anonymous publishes typically expire in ~24h; use the claim URL to keep the site.

## Local preview

```bash
npx --yes serve /workspace/kenjy-hub -p 4173
# or: python3 -m http.server 4173 --directory /workspace/kenjy-hub
```

## After deploy checklist

- [ ] Fill Stripe Payment Links in `config.js`
- [ ] Add real affiliate URLs only after approval
- [ ] Confirm `/` CTAs and aicaption.ai link work
- [ ] Test mobile nav and form mailto on Free Pack
