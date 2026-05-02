# Sonder — Deploy Guide
## Live in 10 minutes, completely free

---

## What's in this folder

```
sonder-deploy/
├── index.html        ← The full app (frontend)
├── api/
│   └── proxy.js      ← Serverless proxy (connects to AI)
├── vercel.json       ← Vercel config
└── README.md         ← This file
```

---

## Step 1 — Get your Anthropic API key

1. Go to https://console.anthropic.com
2. Sign up or log in
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)
5. Keep it safe — you'll need it in Step 4

---

## Step 2 — Upload to GitHub

1. Go to https://github.com and create a free account (if you don't have one)
2. Click **New repository** → name it `sonder` → click **Create repository**
3. Upload all files from this folder:
   - Click **uploading an existing file**
   - Drag the entire `sonder-deploy` folder contents
   - Make sure `api/proxy.js` is inside an `api` folder
   - Click **Commit changes**

---

## Step 3 — Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `sonder` repository
4. Click **Deploy** (Vercel auto-detects the config)
5. Wait ~60 seconds — your site is live at a `.vercel.app` URL

---

## Step 4 — Add your API key (critical)

Without this step the AI won't work.

1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Click **Add New**
3. Set:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your key from Step 1 (the `sk-ant-...` one)
4. Click **Save**
5. Go to **Deployments** → click the three dots on your latest deploy → **Redeploy**

Your app is now fully live and working.

---

## Step 5 — Custom domain (optional)

1. Buy a domain (e.g. `trysonder.com`) from Namecheap or GoDaddy (~$12/year)
2. In Vercel → **Settings** → **Domains** → add your domain
3. Follow Vercel's DNS instructions (takes ~10 minutes to propagate)

---

## Cost breakdown

| Service | Cost |
|--------|------|
| Vercel hosting | Free |
| GitHub | Free |
| Anthropic API | ~$0.01–0.03 per conversation |
| Custom domain | ~$12/year (optional) |

**Total to launch: $0** (until you get real users)

---

## Troubleshooting

**"Something went wrong"** → Check that your API key is saved in Vercel environment variables and you redeployed after adding it.

**Blank page** → Make sure all files were uploaded, including `api/proxy.js` inside the `api/` folder.

**Domain not working** → DNS can take up to 24 hours. Usually it's under 30 minutes.
