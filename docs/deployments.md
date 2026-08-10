<!-- start-no-copy -->
<p class="doc-section">Basics</p>
<!-- end-no-copy -->

# Deployments

Deploy new releases and manage application deployments on October Cloud.

## Push-to-deploy

Unless disabled, deployments are triggered automatically when you push to the main branch of the connected repository. Push-to-deploy is enabled by default for new applications and can be turned off in **Settings** if you prefer to deploy manually.

Push-to-deploy is temporarily disabled while a [reconciliation](/october#reconciliation) pull request is open. You can review and merge the branch from **Settings**; once merged, push-to-deploy resumes automatically.

## Rollbacks

Rolling back to a previous deployment triggers a new deployment using the code from that earlier release. Your application is redeployed with the selected version rather than reverting in place.

You may optionally roll back the database along with the code. This uses [Neon's](https://neon.com/blog/pitr-deep-dive) point-in-time recovery (PITR) to restore your data to the state it was in at the time of the selected deployment. Additional controls for data rollbacks and disaster recovery will be added in a future release.

## Build and deploy scripts

Applications can define [build and deploy scripts](/applications#build-and-deploy-scripts) in **Settings**. The build script runs during the image build; the deploy script runs before traffic is switched to the new release in the same [command context](/commands) as the command runner.
