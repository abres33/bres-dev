# bres.dev

Landing page for [bres.dev](https://bres.dev) — cursor-driven particle typography.

## Setup

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### Option 1: GitHub Actions (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — it deploys automatically

### Option 2: Manual deploy

```bash
npm run deploy
```

## Custom Domain (bres.dev)

The `public/CNAME` file is already set to `bres.dev`.

In your domain registrar, point your DNS to GitHub Pages:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | your-github-username.github.io |

Then in GitHub: **Settings → Pages → Custom domain** → enter `bres.dev` and enable **Enforce HTTPS**.
