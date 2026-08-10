---
title: Getting Started - October Cloud
---

<!-- start-no-copy -->
<p class="doc-section">Get Started</p>
<!-- end-no-copy -->

# October CMS

Our platform is built specifically for [October CMS](https://octobercms.com), and is deeply integrated with it to create the best possible experience. We'll handle both local and production environments.

You just focus on making your website amazing.

## Local Development

We recommend using the [official October Cloud runtimes](https://github.com/octobercms/runtimes). These Docker images are the shared foundation for production deployments, and a [dev container](https://containers.dev/) configuration is included in the October CMS codebase by default—no special setup is required to use them.

Open your project in a dev container for the same PHP, Node, Nginx, and tooling stack that October Cloud runs in production. In other words: **If it works on your machine, it will work on production.**

Just install a container engine like [Docker](https://www.docker.com/get-started), [OrbStack](https://orbstack.dev/download), or [Podman](https://podman.io/get-started), and you're good to go!

Day to day, treat your repo like any other Git project: branch, commit, and push. You can develop with VS Code, Cursor, Claude Code, or even GitHub Codespaces. Use any setup you're familiar with.

> [!NOTE] 💡 Tip
> Don't worry if you're new to dev containers. Almost every IDE supports them out of the box. It's usually just a matter of clicking "yes" when opening the project.

## Backend Editor

The backend editor is a first-class citizen of the October Cloud — not a side path. Content editors, designers, and developers can make changes live in the admin area without leaving the browser or setting up a local environment.

When a backend edit is saved, October Cloud reconciles that change into Git, and everyone stays on the same page.

## Reconciliation

Source control is one of the oldest problems in content management. October has an amazing backend editor. Our platform fully supports the editor, so your team can work however they prefer.

Developers can use Git, and content teams may use the backend. We'll make sure they don't step on each other's toes. We call this feature "reconciliation".

**You'll never lose a change again.**

At a high level, your Git repository remains the source of truth. Backend edits will automatically open a pull request, and commits will trigger a deployment.

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

## Licensing

October Cloud provides and manages the license for your project. All plugins and themes are supported, including private and paid versions.

You can manage your plugins and themes on [October CMS &rarr;](https://octobercms.com/account/project/dashboard)
