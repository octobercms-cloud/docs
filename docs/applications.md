<!-- start-no-copy -->
<p class="doc-section">Basics</p>
<!-- end-no-copy -->

# Applications

Applications represent the heart of your October CMS website. It's the central hub for all of it's related resources like domains and databases.

## Creating applications

Applications can be created by personal accounts, or belong to an organization. Once created, an application cannot be transfered ownership.

To create an application navigate to the desired owner's overview page and click the green "Create application" button.

From here, choose the repository containing your October CMS application, and click "Create application"

## Initial deployment

The initial deployment will create several resources. These are only built on the first deploy, so it may take a bit longer than secondary deploys.

- Database
- Storage bucket
- Platform domain
- SSL certificate
- Content delivery network
- Load balancer rules

Once your initial deployment is complete, you can preview it using your platform domain at `<your‑app>.octobercms.cloud`

## Deployment triggers

For new applications, push‑to‑deploy will be enabled by default. If you'd like to handle deployments manually, this feature can be disabled in "Settings".

During reconciliation, when the platform opens a pull request from the backend, push‑to‑deploy is paused until that pull request is merged. Once merged, push‑to‑deploy resumes automatically.

## Environment variables

Environment variables can be edited in "Settings". There are two entries: custom variables and injected variables. Custom variables normally override injected ones, though some injected variables cannot be overridden:

| Variable                | Reason                                        |
| ----------------------- | --------------------------------------------- |
| `CMS_DB_TEMPLATES`      | Required for template editing                 |
| `CMS_DB_ASSETS`         | Required for theme asset editing              |
| `FILESYSTEM_DISK`       | Platform-managed                              |
| `AWS_ACCESS_KEY_ID`     | Platform-managed                              |
| `AWS_SECRET_ACCESS_KEY` | Platform-managed                              |
| `AWS_DEFAULT_REGION`    | Platform-managed                              |
| `AWS_BUCKET`            | Platform-managed                              |
| `AWS_URL`               | Platform-managed                              |
| `AWS_ENDPOINT`          | Platform-managed                              |
| `ASSET_URL`             | Platform-managed                              |
| `THEMES_ASSET_URL`      | Platform-managed                              |
| `LOG_CHANNEL`           | Platform-managed                              |
| `LOG_LEVEL`             | Platform-managed                              |
| `OCTOBER_CLOUD_APP`     | Required for communication with October Cloud |
| `OCTOBER_CLOUD_SECRET`  | Required for communication with October Cloud |

## Build and deploy scripts

Application can define a build and deploy script in "Settings"

The **build script** runs during the image build, before the application is deployed. Use it for compile-time work, such as installing frontend dependencies or compiling assets.

The **deploy script** runs when a build is complete and before traffic is switched to the new image. Use it for release-time tasks, such as running database migrations or clearing application caches.
