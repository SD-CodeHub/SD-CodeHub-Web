// Build for GitHub Pages.
//
// `gh-pages -d dist` replaces the whole gh-pages branch on every deploy, so
// anything GitHub itself put there is lost. Two files therefore have to come
// out of this build rather than out of the GitHub UI:
//
//   CNAME     - written from public/CNAME. Adding a custom domain in Settings
//               commits this file to the branch; without it in the build, each
//               deploy silently detaches sdcodehub.tech and the site falls back
//               to /SD-CodeHub-Web/, where the root-relative assets 404.
//   404.html  - GitHub Pages has no SPA rewrite, so refreshing /about or
//               /pricing would 404. A copy of index.html hands those requests
//               back to the router.

import { build } from "vite";
import { copyFile, access } from "node:fs/promises";
import { resolve } from "node:path";

await build();

const dist = resolve(process.cwd(), "dist");
await copyFile(resolve(dist, "index.html"), resolve(dist, "404.html"));

// public/* is copied verbatim by Vite; fail loudly if CNAME went missing.
try {
  await access(resolve(dist, "CNAME"));
} catch {
  console.error(
    "\nERROR: dist/CNAME is missing. Restore public/CNAME containing" +
      " 'sdcodehub.tech' before deploying, or the custom domain will detach."
  );
  process.exit(1);
}

console.log("\nBuilt for GitHub Pages — CNAME and 404.html SPA fallback included.");
