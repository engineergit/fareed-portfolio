# Feloria Group Website

Static website built from the provided Sigma Decorations content and redesigned around the Feloria Group business card.

## Pages

- `index.html`
- `about.html`
- `markets.html`
- `contact.html`

## Local preview

```bash
python3 -m http.server 3000
```

Open `http://localhost:3000`.

## Deploy to Vercel

### Option 1: GitHub import

1. Push this folder to a GitHub repository.
2. Open Vercel.
3. Import the repository.
4. Framework preset: `Other`.
5. Build command: leave empty or use `npm run build`.
6. Output directory: leave empty.
7. Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

When asked for the project settings, keep the default static-site settings.
