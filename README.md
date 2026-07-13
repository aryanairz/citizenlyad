# Citizenly French Remotion Ad

A polished 15-second vertical product advertisement for Citizenly, built with React, TypeScript, and Remotion. The `CitizenlyFrenchAd` composition is 1080 × 1920, 30 fps, and 450 frames. It renders to H.264 at `out/citizenly-french-ad.mp4`.

All motion is deterministic and frame-driven. The project uses only bundled Citizenly PNGs, React/CSS, and inline SVG; rendering does not fetch fonts, images, or API data.

## Local commands

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd run studio
```

Attempt a local MP4 render with:

```powershell
npm.cmd run render
```

PowerShell on this machine blocks the `npm.ps1` shim, so the examples use `npm.cmd`. From Command Prompt, ordinary `npm` also works.

## Windows ARM limitation

The current development machine reports `win32` and `arm64`. Remotion's managed Chrome availability on Windows ARM may prevent Studio, still-image, or video rendering even when the React/TypeScript project is valid. Do not install an unofficial browser binary or weaken Windows security to work around this. The Ubuntu GitHub Actions workflow is the authoritative renderer.

## Render with GitHub Actions

1. Push this repository to GitHub.
2. Open the repository's **Actions** tab.
3. Select **Render Citizenly Ad** in the workflow list.
4. Choose **Run workflow**, select the branch, and confirm.
5. Wait for the `render` job to complete.
6. Open the completed workflow run and download **citizenly-french-ad** from the **Artifacts** section.

The artifact contains `citizenly-french-ad.mp4` and is retained for 14 days.

## GitHub setup

This working copy is configured for `https://github.com/aryanairz/citizenlyad.git`. If setting up another clone, use:

```powershell
git remote add origin https://github.com/aryanairz/citizenlyad.git
git push -u origin main
```

Generated output, `node_modules`, local Remotion downloads, caches, logs, and environment files are excluded from Git.
