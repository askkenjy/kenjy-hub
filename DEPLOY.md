# Deploy Kenjy Hub (free permanent host)

Repo: [askkenjy/kenjy-hub](https://github.com/askkenjy/kenjy-hub) · branch `main` · tip at write-up: `7f3e135` (or latest `main`)  
Site type: **static HTML** (`index.html` at root, folders with their own `index.html`)  
Config already in repo: `vercel.json` → `{ "cleanUrls": true, "trailingSlash": true }`

**Policy:** free host only. Do **not** buy Pro / Team / custom paid add-ons. Custom domain can wait until Kenllaly/Ortiz pick `aicaption.ai` vs `kenjyoptimistic.com`.

Temp live (ephemeral): https://glacial-lagoon-tayg.here.now/ · claim https://here.now/c/waXA2OUv43joUIKA

---

## Option A — Vercel Hobby (preferred free permanent)

Hobby is free for personal/static projects. Sign in with the **existing GitHub** account that owns `askkenjy/kenjy-hub`. Skip any “Upgrade” / Pro prompts.

### Exact clicks (browser)

1. Open https://vercel.com/login → **Continue with GitHub** → authorize Vercel if asked.
2. Stay on **Hobby** (personal). Decline Pro/Team trials.
3. Click **Add New…** → **Project**.
4. **Import Git Repository** → find `askkenjy/kenjy-hub` → **Import**.
   - If missing: **Adjust GitHub App Permissions** → grant access to that repo → refresh.
5. Configure (do not change to Next.js):
   - **Framework Preset:** Other
   - **Root Directory:** `.` (site root)
   - **Build Command:** empty / leave default blank
   - **Output Directory:** empty
   - **Install Command:** empty / skip
6. Click **Deploy**.
7. When green: copy the production URL (`https://<project>.vercel.app`). That is the permanent free host until a custom domain is added.
8. Later deploys: every push to `main` auto-redeploys (Production).

### Verify after deploy

Open these and expect **200** (not a directory listing):

- `/` `/enter/` `/free/` `/club/` `/courses/` `/affiliates/` `/shop/` `/tools/`
- Nav **Courses** → `/courses/` (not a single course deep-link)
- Nav CTA → Free Pack (`/enter/`)
- `/club/` Month 2: one list Outline → W5 Prove → W6 Package → W7 Price → W8 Publish

### Custom domain (later, still free on Hobby for typical 1–2 domains)

1. Vercel → Project → **Settings** → **Domains** → add domain.
2. DNS as Vercel shows (A/CNAME). Wait for SSL.
3. Do **not** buy Vercel domain marketplace upsells unless Ortiz explicitly wants that.

### CLI note (agents)

`vercel` CLI and Vercel MCP are **not** connected on the Code agent box. Prefer the browser import above. Do not create paid plans to unblock CLI.

---

## Option B — GitHub Pages (free fallback, no Vercel account)

Use if Vercel login is blocked or Ortiz prefers staying on GitHub only.

### Exact clicks

1. Open https://github.com/askkenjy/kenjy-hub/settings/pages
2. **Build and deployment** → **Source:** Deploy from a branch
3. **Branch:** `main` → folder `/ (root)` → **Save**
4. Wait 1–2 minutes. Site URL: `https://askkenjy.github.io/kenjy-hub/`
5. Because the Hub uses root-absolute paths (`/styles.css`, `/enter/`), GitHub project Pages can break asset/links under `/kenjy-hub/`.

### If paths break on `github.io/kenjy-hub/`

Pick one (Ortiz):

- **User/org site (cleanest free Pages):** rename or mirror to a repo named `askkenjy.github.io` with the Hub at the repo root → serves at `https://askkenjy.github.io/`
- **Or** keep Vercel Hobby (Option A) — better fit for this static root-absolute site

Do **not** enable paid GitHub features for hosting.

---

## here.now (preview only)

Anonymous/claimed here.now is fine for drafts. Prefer Vercel Hobby or Pages for bios / “permanent” links. Keep the claim URL if still using here.now temporarily.

---

## After permanent host is live

- [ ] Tell Kenllaly / Records the `*.vercel.app` or Pages URL to supersede glacial-lagoon in bios
- [ ] Stripe Payment Links in `config.js` still `#` until approved
- [ ] Affiliate URLs stay `#` until named approval (HOLD)
- [ ] Smoke the permanent host the same way as glacial-lagoon
