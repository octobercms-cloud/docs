<!-- start-no-copy -->
<p class="doc-section">Basics</p>
<!-- end-no-copy -->

# Storage

Every October Cloud application is provisioned with dedicated object storage for media, uploads, and other files.

## S3 bucket

Each application receives its own S3 bucket during the [initial deployment](/applications#initial-deployment). The bucket is managed by the platform and connected to your application automatically—no manual configuration is required.

October CMS uses this bucket for theme assets, media library files, and other content stored through Laravel's filesystem.

## Content delivery network

Storage is served via a CDN powered by [CloudFront](https://aws.amazon.com/cloudfront/). When a visitor requests a file, it is served from an edge location close to them rather than from a single origin server.

This provides several benefits:

- **Speed** — Files load faster for users around the world because they are cached near the requester.
- **Security** — Traffic is served over HTTPS with platform-managed certificates.
- **Global reach** — A globally distributed network reduces latency for international audiences and handles traffic spikes without overloading your application.

## Monitoring

Storage usage can be monitored at `octobercms.cloud/<org>/<app>/storage`. This page shows metrics such as available capacity and current usage for your application's bucket.

## Capacity

Higher capacity options will be made available closer to general availability. October Cloud is currently in [private beta](/#project-status), and storage limits may change as pricing and plans are finalized.
