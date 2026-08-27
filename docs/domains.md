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

Enter the domain on the domains page and add the generated `CNAME` records at your provider. Once verified, traffic is routed to your application with a platform-managed SSL certificate.

Use a `www` subdomain as your primary domain (for example, `www.acme.com`). Apex domains are not supported at this time because they must keep `SOA` and `NS` records.

Point the apex (`acme.com`) to `www` with a 301 redirect at your registrar.

> [!NOTE]
> A 301 redirect from the apex to `www` does not hurt SEO. Search engines treat this as normal domain canonicalization and pass ranking signals to the `www` version.
