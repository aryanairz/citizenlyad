# Citizenly Remotion Ad Campaign

A polished family of 15-second vertical product advertisements for Citizenly, built with React, TypeScript, and Remotion. Every composition is 1080 × 1920, 30 fps, and 450 frames.

Available compositions include French, Spanish, German, Dutch, Swedish, Norwegian, Danish, Italian, Portuguese, Catalan, Indonesian, Tagalog, Finnish, Croatian, and Bosnian variants.

The third-generation **Creative Campaign** contains eleven independently directed 15-second Reels for German, Dutch, Swedish, Norwegian, Danish, Italian, Portuguese, Catalan, Indonesian, Tagalog, and Finnish. The campaign replaces template-like phone/card montages with focused product films: an eligibility diagnostic, command workflow, audio player, state-profile walkthrough, deadpan pricing memo, study timeline, feature canvas, native-review document, language search, family handoff, and 65/20 onboarding. The Croatian creative and the existing French, Spanish, and Bosnian work remain separate and unchanged.

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
npm.cmd run render:spanish
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

The manually triggered **Render Citizenly Localized Ads** workflow renders the 13 Germanic, Romance, and other localized variants as separate downloadable artifacts.

The manually triggered **Quality Control Creative Ads** workflow renders PNG storyboard checkpoints for design inspection only. These are not the finished videos.

The **Render Citizenly Creative Ads** workflow renders all eleven third-generation campaign videos in parallel. Download `DOWNLOAD-ALL-11-MP4-VIDEOS` to get one ZIP containing only the eleven finished MP4 files. Individual language artifacts are also retained for 14 days.

The **Render Reference-Style Citizenly Ads** workflow renders the German, Swedish, Norwegian, and Portuguese films built from the approved SaaS motion references. Download `DOWNLOAD-GERMAN-SWEDISH-NORWEGIAN-PORTUGUESE-MP4S` for the four finished MP4 files.

## GitHub setup

This working copy is configured for `https://github.com/aryanairz/citizenlyad.git`. If setting up another clone, use:

```powershell
git remote add origin https://github.com/aryanairz/citizenlyad.git
git push -u origin main
```

Generated output, `node_modules`, local Remotion downloads, caches, logs, and environment files are excluded from Git.
