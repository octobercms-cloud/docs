<!-- start-no-copy -->
<p class="doc-section">Advanced</p>
<!-- end-no-copy -->

# Commands

Run Artisan commands on your October Cloud applications.

## Command runner

The command runner is available at `octobercms.cloud/<org>/<app>/commands` and can also be opened from the top bar navigation under **Commands**.

Use it to run one-off Artisan commands against your application, such as clearing caches or running database migrations outside of a deployment.

## Restrictions

Long-running Artisan commands are not permitted. This includes commands that would block indefinitely or require an interactive session, such as:

- `horizon`
- `horizon:listen`
- `queue:listen`
- `queue:work`
- `reverb:start`
- `schedule:work`
- `serve`
- `tinker`

For background processing, use [queue workers](/queue-workers) instead. For recurring tasks, use [scheduled tasks](/scheduled-tasks) instead.

## Deploy scripts

Each deployment runs its [deploy script](/applications#build-and-deploy-scripts) in this same command context. Anything you can run manually in the command runner can also be used in your deploy script.
