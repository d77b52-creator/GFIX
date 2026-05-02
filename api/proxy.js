Found the problem. In your GFIX repo the files look like this:

- `index.html` ✓
- `README.md` ✓
- `proxy.js` ✗ — this is at the ROOT, not inside an `api/` folder

Vercel needs `proxy.js` to be inside a folder called `api/`. That's what makes it a serverless function.

**Fix — 2 steps:**

**1.** Go to GFIX repo → click `proxy.js` → three dots → **Delete file** → Commit

**2.** Click **Add file** → **Create new file** → in the filename box type:
```
api/proxy.js
```
Typing the slash automatically creates the folder. Then paste the proxy code and commit.

The proxy code to paste:
```javascript
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
```

Vercel will auto-redeploy and it will work.
