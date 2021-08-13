---
id: silta-examples
title: Silta examples
--- 

## silta.yml configuration examples

The default values are documented here: 
 - Drupal chart: https://github.com/wunderio/charts/blob/master/drupal/values.yaml
 - Frontend chart: https://github.com/wunderio/charts/blob/master/frontend/values.yaml
 - Simple chart: https://github.com/wunderio/charts/blob/master/simple/values.yaml

Below is a list of examples for common needs.
All examples are meant to be used in the `silta.yml` file of your project. Most of the examples work with both drupal chart and frontend chart, unless name is explicitly mentioned above the code snippet. Double-check with default value files for each chart - [drupal](https://github.com/wunderio/charts/blob/master/drupal/values.yaml) and [frontend](https://github.com/wunderio/charts/blob/master/frontend/values.yaml).

Also note that increasing resources will result in increased costs, so use sensible values.

## Allocate more storage for your database.

*Drupal chart*:
```yaml
mariadb:
  master:
    persistence:
      size: 2G
```
Note that storage can only be increased, not decreased.

## Mount Drupal public files to a different location

*Drupal chart*:
```yaml
mounts:
  public-files:
    mountPath: `/app/web/sites/my-other-location/files`
```

## Enabling private files for drupal
There is a pre-built mount template for drupal private file storage in silta (check values.yaml), you just have to enable it

*Drupal chart*:
```yaml
mounts:
  private-files:
    enabled: true
```
Enabling this will mount shared storage to `/app/private` and set `$settings['file_private_path']` accordingly. See chart values for override parameters.

## Change how often the standard Drupal cron is executed

*Drupal chart*:
```yaml
php:
  cron:
    drupal:
      # Run every 5 minutes
      schedule: '*/5 * * * *'
```

## Run a custom cron job

*Drupal chart*:
```yaml
php:
  cron:
    my-custom-cron-job:
      # Run a custom drush command at midnight
      schedule: '0 0 * * *'
      command: 'drush my-custom-command'
```

*Frontend chart*:
```yaml
services:
  myservice:
    cron:
      my-custom-cron-job:
        # Run a custom command at midnight
        schedule: '0 0 * * *'
        command: 'my-custom-command'
```

## Add additional environment variables

*Drupal chart*:
```yaml
php:
  env:
    MY_VARIABLE_NAME: 'theValueOfMyVariable'
```

*Frontend chart*:
```yaml
services:
  myservice:
    env:
      MY_VARIABLE_NAME: 'theValueOfMyVariable'
```

## Change basic auth username and password

*Drupal chart and Frontend chart*:
```yaml
nginx:
  basicauth:
    credentials:
      username: hello
      password: My$ecretP4ssw0rd
```

## Enable elasticsearch

*Drupal chart and Frontend chart*:
```yaml
elasticsearch:
  enabled: true
```

## Enable memcached

*Drupal chart*:
```yaml
memcached:
  enabled: true
```

## Using varnish

*Drupal chart*:
```yaml
varnish:
  enabled: true
```
If extra cookies are needed, they can be defined in a vcl_extra_cookies variable:

```yaml
varnish:
  vcl_extra_cookies: |
    if (req.http.Cookie ~ "extra_cookie_name") {
      return (pass);
    }

```

When varnish is enabled in silta config, drupal configuration needs to be adjusted, so purge can find the varnish server.

**Using [varnish](https://www.drupal.org/project/varnish) module:**

*You should consider using purge module instead*
No adjustments needed

**Using [varnish_purge](https://www.drupal.org/project/varnish_purge) module:**

1. Add varnish purger to purge settings.
2. Find purger configuration name. You can see it by hovering over the configuration link (i.e. `1b619ba479`). This will be Your `<PURGER_ID>`.
3. Put this snippet into your `settings.php` file:
```
if (getenv('SILTA_CLUSTER') && getenv('VARNISH_ADMIN_HOST')) {
  $config['varnish_purger.settings.<PURGER_ID>']['hostname'] = trim(getenv('VARNISH_ADMIN_HOST'));
  $config['varnish_purger.settings.<PURGER_ID>']['port'] = '80';
}
```
Make sure to replace `<PURGER_ID>` with an actual id of purger configuration!

## Sanitize a table that contains sensitive information

*Drupal chart*:
```yaml
gdprDump:
  my_table_name:
    my_field_name:
      formatter: name
```
Here `name` is the formatter type. See https://github.com/machbarmacher/gdpr-dump/#using-gdpr-replacements for additonal formatter types.

## Skip taking reference data dumps on each deployment

*Drupal chart*:
```yaml
referenceData:
  updateAfterDeployment: false
```
For some sites with a lot of files, taking a reference data dump after each deployment can cause the builds to time out. Disabling `updateAfterDeployment` means new environments will be created with reference data from the previous nightly dump.

## Sending e-mail

Note: There is no e-mail handling for frontend chart currently. You must implement the smtp workflow via application. 

If you just want to test email, you can use mailhog:

*Drupal chart*:
```
mailhog:
  enabled: true
```

For emails to be actually sent out of the cluster, you can use any external smtp server. Here's an example for sparkpost.

*Drupal chart*:
```yaml
smtp:
  enabled: true
  address: smtp.sparkpostmail.com:587 # or smtp.eu.sparkpost.com:587
  tls: "YES"
  # StartTLS is required when you use smtp.office365.com:587
  # starttls: "YES"
  username: "SMTP_Injection"
  # Encrypt this password. See: docs/encrypting_sensitive_configuration.md
  password: "MYAPIKEY"
```
Note: To get the sparkpost API key, you have to [validate your domain](https://www.sparkpost.com/docs/getting-started/setting-up-domains/) first.

If the `smtp` is configured and enabled, but it does not appear to send anything, make sure `mailhog` is not enabled.

## Expose domains and SSL certificates
Various `exposeDomains` examples for SSL certificate issuers. Same structure can be reused for release `ssl` parameter too. 

Note: You can also use `letsencrypt-staging` issuer to avoid hitting `letsencrypt` [rate limits](https://letsencrypt.org/docs/rate-limits/).

Note 2: For custom certificates it's advised to add CA root certificate to `exposeDomains[].ssl.crt` value. Having it under `exposeDomains[].ssl.ca` is not enough.

Note 3: Deploy `exposeDomains` entries only when DNS entries are changed or are soon to be changed. Otherwise, Letsencrypt validation might eventually get stuck due to retries.  

*Drupal chart and Frontend chart*:
```yaml
exposeDomains:

  example-le:
    hostname: ssl-le.example.com
    ssl:
      enabled: true
      issuer: letsencrypt

  example-customcert:
    hostname: ssl-custom.example.com
    ssl:
      enabled: true
      issuer: custom
      # Encrypt key and certificate. See: docs/encrypting_sensitive_configuration.md
      ca: |
        -----BEGIN PRIVATE KEY-----
        MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1AnQnJXBJWw3A
        (..)
        N/a90beSt0vJ6Cy+jMCVQ0s=
        -----END PRIVATE KEY-----
      key: |
        -----BEGIN PRIVATE KEY-----
        MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1AnQnJXBJWw3A
        (..)
        N/a90beSt0vJ6Cy+jMCVQ0s=
        -----END PRIVATE KEY-----
      crt: |
        -----BEGIN CERTIFICATE-----
        MIIDPzCCAiegAwIBAgIUe0NEJnh4ffNBsdKzT5/PTlFRoQYwDQYJKoZIhvcNAQEL
        (..)
        jyj9OmdjZTJAwwqDdcs6TaRXxQ==
        -----END CERTIFICATE-----
```
You don't need a custom static ip (via gce ingress) normally, but if Your project requires, here's how - 
```
exposeDomains:
  example-gce-ingress:
    hostname: gce-ingress.example.com
    # see ingress.gce definition. This can also be a custom ingress too.
    ingress: gce
    ssl:
      enabled: true
      issuer: letsencrypt

ingress:
  gce:
    # Request a global static ip from OPS team first
    staticIpAddressName: custom-ip-name

# Whitelist reverse proxy ip's to accept X-Forwarded-For header 
nginx:
  serverExtraConfig: |
    # Traefik IP for pre-generated hostname
    set_real_ip_from 10.0.0.0/8;
    # Load Balancer IP
    set_real_ip_from 1.2.3.4/32;
    # Google load balancer IP's
    set_real_ip_from 130.211.0.0/22;
    set_real_ip_from 35.191.0.0/16;
    real_ip_recursive on;

# Depending on the cluster type, You might need to enable this. 
# A safe default is "false" (works in both cases), but "VPC Native" 
# clusters work more correcly with cluster.vpcNative set to "true".
cluster: 
  vpcNative: true
```

## Add redirects
Redirects can be relative to current domain or contain full domain for more targeted redirects when multiple external domains (`exposeDomains`) are attached to deployment, and you only need this redirect for a specific URL. Redirect URL's can have regular expressions.

If You are scattering the redirect rules into separate yaml's use keys (or the latter yaml will overwrite the whole `nginx.redirects` object) and the alphabetical order of keys will be respected in nginx redirect map. Because of this, it's better to put everything in one file without keys, just descriptions and the order of the yaml will be respected.

*Drupal chart and Frontend chart*:
```yaml
nginx:
  redirects:
    - from: /test1 
      to: /
    - from: http://exact-matching.example.com/test2
      to: /test2-redirect
    - from: '~://exact-matching-url-with-protocol-wildcard.example.com/test3$' 
      to: /test3-redirect
    - from: ~/test4$ 
      to: https://another-domain.example.com/test4-redirect
```

## Add custom include files for nginx
Drupal chart builds nginx container using web/ folder as build context. This prevents files being included from outside the web folder and it's not a good idea to put config files under it.
To be able to add include files the build context needs to be changed from `web/` into `.` by passing `nginx_build_context: "."` to `drupal-docker-build` in `.circleci/config.yml`:
```
jobs:
  - silta/drupal-docker-build:
      nginx_build_context: "."
```
Due root containing Drupal / shell container compatible .dockerignore file and for frontend there is a separate one inside the web/ folder this doesn't work anymore. Since version 19.03 Docker supports separate .dockerignore files for each Dockerfile. This requires Docker build to be made with BuildKit enabled. To enable BuildKit just pass the `DOCKER_BUILDKIT=1` to the build environment as an environment variable:
```
environment:
  DOCKER_BUILDKIT: 1
```
The ignore file itself needs to be named the same as the Dockerfile with .dockerignore appended to the end and need to reside at the same place as the Dockerfile:
```
cp web/.gitignore silta/nginx.Dockerfile.dockerignore
```
Note: our validation checks if the .dockerignore is present under web/ so you can either leave it there or just add an empty file in it's place.
To make the image to build correctly in this new context you need to update the COPY command in the nginx.Dockerfile to copy `web` instead of `.` and also add COPY commands to any custom config files you want to be able to include:
```
COPY silta/nginx.serverextra.conf /etc/nginx

COPY web /app/web
```
Now you can include the config file in silta.yml like this:
```
nginx:
  serverExtraConfig: |
    include nginx.serverextra.conf;
```
or if you `COPY` the file under `/etc/nginx/conf.d` they will be included automatically without the need to add them to silta.yml configs.

## Deploy sub-project from the same repo using simple chart

Having e.g. Storybook or other frontend application included in the base project codebase that require 
separate deployment can be easily done even using different chart.
See [https://wunderio.github.io/silta/docs/circleci-conf-examples](circleci-examples.md) for the deployment setup part.

When using different charts (e.g. drupal and simple) you need to separate chart specific configurations to their own silta-*.yml files if you want to share any configs between the application deployments (for example basic auth credentials). Best way to do it is to put only the shared configurations to the silta.yml file and have e.g. silta-cms.yml and silta-storybook.yml for application specific configurations.


