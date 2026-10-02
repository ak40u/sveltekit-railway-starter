# SvelteKit starter for Railway

SvelteKit 3 on Svelte 5, server-rendered by `adapter-node`.

## Why this exists

The SvelteKit template on Railway builds from a repository last updated in
November 2024. It pins Vite 5 and Tailwind 3, and it carries a full lint and
format toolchain — ESLint, Prettier, three plugins — in a project whose purpose
is to show you a working page. Roughly three deployments in ten do not come up,
and a lockfile with a HIGH advisory is enough to stop a build here.

This one tracks current versions, keeps the dependency list to what actually
renders the page, and commits a lockfile that passes `npm audit --audit-level=high`.

Nothing is missing that you cannot add in a minute: `npx sv add tailwindcss`,
`npx sv add eslint`. A starter should not choose your linter for you.

## What's in here

| File | Why it exists |
|------|---------------|
| `src/routes/+page.svelte` | The page, with a Svelte 5 rune for state |
| `src/routes/health/+server.ts` | `/health` as a route, so the check exercises the server |
| `vite.config.ts` | SvelteKit 3 is configured here, not in `svelte.config.js`: `adapter-node` — a plain Node server in `build/` |
| `railway.json` | Health check, restart policy |
| `package-lock.json` | Committed, audited clean at HIGH |

`adapter-node` reads `PORT` and `HOST` from the environment itself, so there is
no wrapper script and no static-file server to configure — `node build/index.js`
is the whole start command.

The health check is a route rather than a file in `static/`, on purpose: a static
file can be served by something in front of the app, so a passing check would not
prove the server itself is alive.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:5173
```

Production build, served the way Railway serves it:

```bash
npm run build && npm start
```

## Configuration

| Variable | Required | Purpose |
|----------|----------|---------|
| `PORT` | no | Read by `adapter-node`; defaults to 3000 |
| `HOST` | no | Defaults to `0.0.0.0` |

## License

MIT
