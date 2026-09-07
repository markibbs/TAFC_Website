# Teddington Athletic FC homepage

This is the independently hosted version of the TAFC landing page. Cloudflare builds and publishes it automatically whenever changes are pushed to the connected GitHub repository.

## Routine updates

- Change wording, links and recruitment cards in `content/site.json`.
- Replace an image in `public/` while keeping the same filename, or add a new image and update its filename in `content/site.json`.
- Commit and push the changed files to GitHub. Cloudflare then publishes the update automatically.

## Local preview

Install Node.js 22+ and pnpm, then run:

```text
pnpm install
pnpm dev
```

## Cloudflare build settings

- Build command: `pnpm build`
- Deploy command: `npx wrangler deploy`
- Node.js version: 22

The production domain should only be pointed at this deployment after its temporary Cloudflare address has been checked.
