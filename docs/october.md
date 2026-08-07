---
title: Getting Started - October Cloud
---

<!-- start-no-copy -->
<p class="doc-section">Get Started</p>
<!-- end-no-copy -->

# October CMS

Our platform is built specifically for, and deeply integrated with [October CMS](https://octobercms.com). We support both local editing, and using the backend editor. No matter your workflow, **you'll never lose a change again**.

## How it works

October Cloud solves one of the oldest problems with CMS development. Enabling modern git-based workflows, while still allowing live edits from the backend.

We call this feature “reconciliation”. When a backend edit is made, October Cloud will open a pull request for that change. From there, every commit will trigger a deployment.

<!-- start-no-copy -->
<svg viewBox="0 0 560 330" role="img" aria-labelledby="workflow-title workflow-desc" class="mx-auto my-8 h-auto w-full max-w-[560px]">
  <title id="workflow-title">October Cloud workflow</title>
  <desc id="workflow-desc">Local development and the backend editor both flow into reconciliation, then push to deploy.</desc>
  <defs>
    <marker id="workflow-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" class="fill-indigo-400 dark:fill-indigo-500/50" />
    </marker>
  </defs>
  <g fill="none" stroke-width="1.5" marker-end="url(#workflow-arrow)" class="stroke-indigo-400/80 dark:stroke-indigo-500/50">
    <path d="M 130 76 L 130 118 L 240 118 L 240 148" />
    <path d="M 430 76 L 430 118 L 320 118 L 320 148" />
    <path d="M 280 196 L 280 240" />
  </g>
  <g stroke-width="1.5" class="fill-indigo-50 stroke-indigo-300 dark:fill-indigo-500/10 dark:stroke-indigo-500/40">
    <rect x="40" y="28" width="180" height="48" rx="8" ry="8" />
    <rect x="340" y="28" width="180" height="48" rx="8" ry="8" />
  </g>
  <rect x="170" y="148" width="220" height="48" rx="8" ry="8" stroke-width="1.5" class="fill-none fill-orange-100 stroke-october/50 dark:fill-orange-600/15" />
  <rect x="170" y="240" width="220" height="48" rx="8" ry="8" stroke-width="1.5" class="fill-green-100 stroke-green-300 dark:fill-green-500/10 dark:stroke-green-500/40" />
  <g font-size="14" text-anchor="middle" class="fill-gray-900 dark:fill-gray-100">
    <text x="130" y="57">Local development</text>
    <text x="430" y="57">Backend editor</text>
    <text x="280" y="177">Reconciliation</text>
    <text x="280" y="269">Push to deploy</text>
  </g>
</svg>
<!-- end-no-copy -->

<pre data-copy-hidden>
┌────────────────────┐          ┌────────────────────┐
│ Local development  │          │   Backend editor   │
└─────────┬──────────┘          └─────────┬──────────┘
          └───────────┐       ┌───────────┘
                      ▼       ▼
                ┌──────────────────┐
                │  Reconciliation  │
                └────────┬─────────┘
                         ▼
                ┌──────────────────┐
                │  Push to deploy  │
                └──────────────────┘
</pre>

## Local Development

For local work, we recommend using the [official October Cloud runtimes](https://github.com/octobercms/runtimes). These Docker images are the shared foundation for local development, GitHub Codespaces, and production deployments. Opening your project in a [dev container](https://containers.dev/) gives you the same PHP, Node, Nginx, and tooling stack that October Cloud runs in production.

Day to day, treat your repo like any other Git project: branch, commit, and push from your editor. You can develop entirely in VS Code, or even in a GitHub Codespace, and ship with confidence!

Because your app is built and served by the same images on your machine and in the cloud, parity is the default — not something you chase later. **If it works in the dev container, you can trust it will work on October Cloud.**

## Backend Editor

Prefer working in the CMS? The backend editor is a first-class part of the October Cloud workflow — not a side path. Content editors, designers, and developers can make changes live in the admin area without leaving the browser or setting up a local environment.

When a backend edit is saved, October Cloud reconciles that change into Git, and everyone stays on the same page.
