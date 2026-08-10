<!-- start-no-copy -->
<p class="doc-section">Basics</p>
<!-- end-no-copy -->

# Domains

Connect custom domains to your October Cloud applications.

## Domains page

The domains page can be opened from the **Domains** block on your application's homepage, or directly at `octobercms.cloud/<org>/<app>/domains`.

From here you can manage your platform domain and connect custom domains.

## Platform domain

Every application is provided a platform domain at `<app>.octobercms.cloud`. This domain is available after the [initial deployment](/applications#initial-deployment) and can be used to preview your site before connecting a custom domain.

The platform domain can be changed from the domains page if you need a different subdomain.

## Custom domains

To connect a custom domain, enter the domain on the domains page and follow the instructions to attach the generated CNAME records through your domain provider. Once DNS has propagated and the records are verified, traffic to your custom domain will be routed to your application with a platform-managed SSL certificate.

## Recommended setup

We strongly recommend using a `www` subdomain as your primary domain—for example, `www.example.com` rather than `example.com`.

Point the apex domain (`example.com`) to the `www` version using a 302 redirect at your domain provider. This approach offers the best compatibility across domain providers, since apex domains cannot always be configured with a CNAME record.
