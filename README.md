<div align="center">

![WhichDoorBest icon](docs/img/icon.png)

# WhichDoorBest

Finds the best door at every MRT station so you can exit right at the escalator landing!

![](docs/img/screenshot.png)

</div>

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, React 19, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for hosting on Cloudflare Workers
- `priorityqueue` for the Dijkstra search over the platform graph

## Running locally

Requires Node.js >= 20.9.

```sh
npm install
npm run dev      # Next.js dev server
npm run preview  # build and run on the actual Workers runtime (workerd)
npm run lint
```

## Deploying to Cloudflare Workers

The app is deployed as a single Worker (server-rendered `/route/...` pages plus
static assets). It targets Cloudflare's **free tier**:

- No R2 bucket is required (the app has no ISR/incremental cache).
- Image optimization is disabled (`images.unoptimized`), so Cloudflare Images is
  not required.
- The bundled Worker is ~1 MB gzipped, well under the 3 MiB free-tier limit.

```sh
npx wrangler login   # once
npm run deploy       # build with OpenNext and deploy the Worker
```

`npm run deploy` runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.
`npm run upload` uploads a new version without deploying it.

> Note: the `cf` CLI's `cf deploy` does not support OpenNext projects yet — it
> delegates to `next build` and then expects a Build Output Specification that
> the OpenNext adapter does not emit. Use the OpenNext/Wrangler scripts above.

## Data

The graph is static JSON under `data/`:

- `stations.json` – station id, MRT code + name, platform ids
- `platforms.json` – per-platform doors and weighted connections
- `terminations.json` – terminal station names
