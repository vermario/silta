(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(100)),l={id:"silta-examples",title:"Silta examples"},o={unversionedId:"silta-examples",id:"silta-examples",isDocsHomePage:!1,title:"Silta examples",description:"silta.yml configuration examples",source:"@site/docs/silta-examples.md",slug:"/silta-examples",permalink:"/silta/docs/silta-examples",editUrl:"https://github.com/wunderio/silta/tree/master/docs/silta-examples.md",version:"current",sidebar:"someSidebar",previous:{title:"Request workflow",permalink:"/silta/docs/request-workflow"},next:{title:"Troubleshooting and FAQ",permalink:"/silta/docs/troubleshooting"}},s=[{value:"silta.yml configuration examples",id:"siltayml-configuration-examples",children:[]},{value:"Allocate more storage for your database.",id:"allocate-more-storage-for-your-database",children:[]},{value:"Mount Drupal public files to a different location",id:"mount-drupal-public-files-to-a-different-location",children:[]},{value:"Enabling private files for drupal",id:"enabling-private-files-for-drupal",children:[]},{value:"Change how often the standard Drupal cron is executed",id:"change-how-often-the-standard-drupal-cron-is-executed",children:[]},{value:"Deploy a custom service using frontend chart",id:"deploy-a-custom-service-using-frontend-chart",children:[]},{value:"Run a custom cron job",id:"run-a-custom-cron-job",children:[]},{value:"Add additional environment variables",id:"add-additional-environment-variables",children:[]},{value:"Change basic auth username and password",id:"change-basic-auth-username-and-password",children:[]},{value:"Enable elasticsearch",id:"enable-elasticsearch",children:[]},{value:"Using plugins with Elasticsearch",id:"using-plugins-with-elasticsearch",children:[]},{value:"Enable memcached",id:"enable-memcached",children:[]},{value:"Using varnish",id:"using-varnish",children:[]},{value:"Skip taking reference data dumps on each deployment",id:"skip-taking-reference-data-dumps-on-each-deployment",children:[]},{value:"Sending e-mail",id:"sending-e-mail",children:[]},{value:"Domain names and SSL certificates",id:"domain-names-and-ssl-certificates",children:[]},{value:"Add redirects",id:"add-redirects",children:[]},{value:"Add custom include files for nginx",id:"add-custom-include-files-for-nginx",children:[]},{value:"Deploy sub-project from the same repo using simple chart",id:"deploy-sub-project-from-the-same-repo-using-simple-chart",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"siltayml-configuration-examples"},"silta.yml configuration examples"),Object(i.b)("p",null,"The default values are documented here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Drupal chart: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/wunderio/charts/blob/master/drupal/values.yaml"},"https://github.com/wunderio/charts/blob/master/drupal/values.yaml")),Object(i.b)("li",{parentName:"ul"},"Frontend chart: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/wunderio/charts/blob/master/frontend/values.yaml"},"https://github.com/wunderio/charts/blob/master/frontend/values.yaml")),Object(i.b)("li",{parentName:"ul"},"Simple chart: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/wunderio/charts/blob/master/simple/values.yaml"},"https://github.com/wunderio/charts/blob/master/simple/values.yaml"))),Object(i.b)("p",null,"Below is a list of examples for common needs.\nAll examples are meant to be used in the ",Object(i.b)("inlineCode",{parentName:"p"},"silta.yml")," file of your project. Most of the examples work with both drupal chart and frontend chart, unless name is explicitly mentioned above the code snippet. Double-check with default value files for each chart - ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wunderio/charts/blob/master/drupal/values.yaml"},"drupal")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wunderio/charts/blob/master/frontend/values.yaml"},"frontend"),"."),Object(i.b)("p",null,"Also note that increasing resources will result in increased costs, so use sensible values."),Object(i.b)("h2",{id:"allocate-more-storage-for-your-database"},"Allocate more storage for your database."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"mariadb:\n  master:\n    persistence:\n      size: 2G\n")),Object(i.b)("p",null,"Note that storage can only be increased, not decreased."),Object(i.b)("p",null,"Note 2: If you change it for existing deployment, You'll need to run special comands in cluster to expand the storage or deployment will fail (see ",Object(i.b)("a",{parentName:"p",href:"/silta/docs/troubleshooting#mariadb-or-elasticsearch-running-out-of-disk-space"},"Mariadb or Elasticsearch running out of disk space")," in troubleshooting page)."),Object(i.b)("h2",{id:"mount-drupal-public-files-to-a-different-location"},"Mount Drupal public files to a different location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"mounts:\n  public-files:\n    mountPath: `/app/web/sites/my-other-location/files`\n")),Object(i.b)("h2",{id:"enabling-private-files-for-drupal"},"Enabling private files for drupal"),Object(i.b)("p",null,"There is a pre-built mount template for drupal private file storage in silta (check values.yaml), you just have to enable it"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"mounts:\n  private-files:\n    enabled: true\n")),Object(i.b)("p",null,"Enabling this will mount shared storage to ",Object(i.b)("inlineCode",{parentName:"p"},"/app/private")," and set ",Object(i.b)("inlineCode",{parentName:"p"},"$settings['file_private_path']")," accordingly. See chart values for override parameters."),Object(i.b)("h2",{id:"change-how-often-the-standard-drupal-cron-is-executed"},"Change how often the standard Drupal cron is executed"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"php:\n  cron:\n    drupal:\n      # Run every 5 minutes\n      schedule: '*/5 * * * *'\n")),Object(i.b)("h2",{id:"deploy-a-custom-service-using-frontend-chart"},"Deploy a custom service using frontend chart"),Object(i.b)("p",null,'While Frontend chart was originally meant to host NodeJS frontend projects, it also allows running custom docker images and optionally exposing them via nginx reverse proxy. These containers are called "services" in Frontend chart.'),Object(i.b)("p",null,'In this example, we are setting up two custom services - "mynodeservice" that will use a custom built image (see circleci configuration below) and "mongo" that will use prebuilt mongodb docker imageservice.'),Object(i.b)("p",null,'Note: This ".Values.services.mongo" service is not the same as ".Values.mongodb", it\'s just an example.'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"services:\n  mynodeservice:\n    replicas: 1\n    port: 3000\n    env:\n      VARIABLE: 'VALUE'\n    # Exposed at [hostname]/servicepath\n    exposedRoute: '/servicepath'\n\n  mongo:\n    # Mongo image does not need to be built,\n    # uses https://hub.docker.com/_/mongo\n    image: mongo\n    port: 27017\n")),Object(i.b)("p",null,"See ",Object(i.b)("inlineCode",{parentName:"p"},".Values.serviceDefaults")," for service default values."),Object(i.b)("p",null,"Service images are built at ",Object(i.b)("inlineCode",{parentName:"p"},".circleci/config.yaml"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  build_deploy:\n    jobs:\n      - silta/frontend-build-deploy: &build-deploy\n          image_build_steps:\n            - silta/build-docker-image:\n                dockerfile: 'silta/mynodeservice.Dockerfile'\n                path: '.'\n                identifier: 'mynodeservice'\n")),Object(i.b)("p",null,"It is very important to understand kubernetes containers are stateless, the moment container gets restarted, it will reset the storage to contents of docker image. To persist some particular filesystem path, you need to define persistent storage at ",Object(i.b)("inlineCode",{parentName:"p"},".Values.mounts")," and attach it to the service (this only applies to containers defined at ",Object(i.b)("inlineCode",{parentName:"p"},".Values.services")," since other applications (",Object(i.b)("inlineCode",{parentName:"p"},".Values.mongodb"),", ",Object(i.b)("inlineCode",{parentName:"p"},".Values.mariadb"),", etc.) have default configurations in chart that persist data)."),Object(i.b)("p",null,'In this example, we are setting up a custom "mongo" service that will use prebuilt mongodb docker imageservice.'),Object(i.b)("p",null,'Note: This ".Values.services.mongo" service is not the same as ".Values.mongodb", it\'s just an example.'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"services:\n  mongo:\n    # Mongo image does not need to be built,\n    # uses https://hub.docker.com/_/mongo\n    image: mongo\n    port: 27017\n    mounts:\n      - mongodb-data\n    strategy:\n      type: Recreate\n\nmounts:\n  mongodb-data:\n    enabled: true\n    storage: 5Gi\n    mountPath: /data/db\n    # GKE storage class\n    storageClassName: standard\n    accessModes: ReadWriteOnce\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageClassName")," is only available on GKE. AWS and other cloud providers have different storageclasses, so it depends on cloud provider. There are several options and they differ by access (read / write) speed. ",Object(i.b)("inlineCode",{parentName:"li"},"standard")," is a safe choice."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accessModes")," depends on storageClass. ",Object(i.b)("inlineCode",{parentName:"li"},"standard")," on GKE provides ",Object(i.b)("inlineCode",{parentName:"li"},"ReadWriteOnce"),". See ",Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes")," for more information"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".Values.services.mongo.strategy.type: Recreate"),' is required for "read write once" type storage mounts, because they only allow mounting storage once, but default strategy for services is ',Object(i.b)("inlineCode",{parentName:"li"},"RollingUpdate")," and it would fail deployment. See  ",Object(i.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy"},"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy")," for more information.")),Object(i.b)("h2",{id:"run-a-custom-cron-job"},"Run a custom cron job"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"php:\n  cron:\n    my-custom-cron-job:\n      # Run a custom drush command at midnight\n      schedule: '0 0 * * *'\n      command: 'drush my-custom-command'\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"services:\n  myservice:\n    cron:\n      my-custom-cron-job:\n        # Run a custom command at midnight\n        schedule: '0 0 * * *'\n        command: 'my-custom-command'\n")),Object(i.b)("h2",{id:"add-additional-environment-variables"},"Add additional environment variables"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"php:\n  env:\n    MY_VARIABLE_NAME: 'theValueOfMyVariable'\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"services:\n  myservice:\n    env:\n      MY_VARIABLE_NAME: 'theValueOfMyVariable'\n")),Object(i.b)("h2",{id:"change-basic-auth-username-and-password"},"Change basic auth username and password"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart and Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  basicauth:\n    credentials:\n      username: hello\n      password: My$ecretP4ssw0rd\n")),Object(i.b)("h2",{id:"enable-elasticsearch"},"Enable elasticsearch"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart and Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"elasticsearch:\n  enabled: true\n")),Object(i.b)("h2",{id:"using-plugins-with-elasticsearch"},"Using plugins with Elasticsearch"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create a custom elasticsearch dockerfile to silta/elasticsearch.Dockerfile:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ARG ES_VERSION=7.17.0\nFROM docker.elastic.co/elasticsearch/elasticsearch:${ES_VERSION}\nARG ES_VERSION\n\nUSER root\n\n# Install Elasticsearch plugins\nRUN elasticsearch-plugin install analysis-icu\n\nUSER elasticsearch\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Build the custom Elasticsearch image in CircleCI:")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"silta/drupal-build-deploy"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"      - silta/drupal-build-deploy:\n          pre-release:\n            - silta/build-docker-image:\n                dockerfile: silta/elasticsearch.Dockerfile\n                tag: with-plugins\n                identifier: elasticsearch\n                expose_image: false\n")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"silta/frontend-build-deploy"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"      - silta/frontend-build-deploy:\n          image_build_steps:\n            - silta/build-docker-image:\n                dockerfile: silta/elasticsearch.Dockerfile\n                tag: with-plugins\n                identifier: elasticsearch\n                expose_image: false\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use the custom elasticsearch image in your silta helm charts file:")),Object(i.b)("p",null,"The container URL could be found in the CircleCI container build information."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"elasticsearch:\n  enabled: true\n  image: <CONTAINER-URL>\n  imageTag: 'with-plugins'\n  imagePullPolicy: Always\n")),Object(i.b)("h2",{id:"enable-memcached"},"Enable memcached"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"memcached:\n  enabled: true\n")),Object(i.b)("h2",{id:"using-varnish"},"Using varnish"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"varnish:\n  enabled: true\n")),Object(i.b)("p",null,"If extra cookies are needed, they can be defined in a vcl_extra_cookies variable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'varnish:\n  vcl_extra_cookies: |\n    if (req.http.Cookie ~ "extra_cookie_name") {\n      return (pass);\n    }\n\n')),Object(i.b)("p",null,"When varnish is enabled in silta config, drupal configuration needs to be adjusted, so purge can find the varnish server."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using ",Object(i.b)("a",{parentName:"strong",href:"https://www.drupal.org/project/varnish"},"varnish")," module:")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You should consider using purge module instead"),"\nNo adjustments needed"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using ",Object(i.b)("a",{parentName:"strong",href:"https://www.drupal.org/project/varnish_purge"},"varnish_purge")," module:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add varnish purger to purge settings."),Object(i.b)("li",{parentName:"ol"},"Find purger configuration name. You can see it by hovering over the configuration link (i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"1b619ba479"),"). This will be Your ",Object(i.b)("inlineCode",{parentName:"li"},"<PURGER_ID>"),"."),Object(i.b)("li",{parentName:"ol"},"Put this snippet into your ",Object(i.b)("inlineCode",{parentName:"li"},"settings.php")," file:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"if (getenv('SILTA_CLUSTER') && getenv('VARNISH_ADMIN_HOST')) {\n  $config['varnish_purger.settings.<PURGER_ID>']['hostname'] = trim(getenv('VARNISH_ADMIN_HOST'));\n  $config['varnish_purger.settings.<PURGER_ID>']['port'] = '80';\n}\n")),Object(i.b)("p",null,"Make sure to replace ",Object(i.b)("inlineCode",{parentName:"p"},"<PURGER_ID>")," with an actual id of purger configuration!"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Changing varnish default control-key value")),Object(i.b)("p",null,"This can be done by adding ",Object(i.b)("inlineCode",{parentName:"p"},"secret")," variable."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"varnish:\n  secret: 'my-secret-key'\n")),Object(i.b)("p",null,"Please remember: best practice is to encrypt secrets."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Changing varnish cache backend")),Object(i.b)("p",null,"The current default cache backend is set to file storage. The setting is exposed in values file and can be changed. Here are few examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"varnish:\n  resources:\n    requests:\n      memory: 768Mi\n  # Memory allocated storage. Make sure to adjust varnish memory allocation too (see above)\n  storageBackend: 'malloc,512m'\n  # Disc allocated storage.\n  storageBackend: 'file,/var/lib/varnish/varnish_storage.bin,512M'\n")),Object(i.b)("h2",{id:"skip-taking-reference-data-dumps-on-each-deployment"},"Skip taking reference data dumps on each deployment"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"referenceData:\n  updateAfterDeployment: false\n")),Object(i.b)("p",null,"For some sites with a lot of files, taking a reference data dump after each deployment can cause the builds to time out. Disabling ",Object(i.b)("inlineCode",{parentName:"p"},"updateAfterDeployment")," means new environments will be created with reference data from the previous nightly dump."),Object(i.b)("h2",{id:"sending-e-mail"},"Sending e-mail"),Object(i.b)("p",null,"Note: There is no e-mail handling for frontend chart. You must implement the smtp workflow via application."),Object(i.b)("p",null,"If you just want to test email, you can use mailhog:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"mailhog:\n  enabled: true\n")),Object(i.b)("p",null,"Mailhog access information will be printed in release notes."),Object(i.b)("p",null,"For emails to be actually sent out of the cluster, you can use any external smtp server. Here's an example for sparkpost."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'smtp:\n  enabled: true\n  address: smtp.sparkpostmail.com:587 # or smtp.eu.sparkpost.com:587\n  tls: "YES"\n  # StartTLS is required when you use smtp.office365.com:587\n  # starttls: "YES"\n  username: "SMTP_Injection"\n  # Encrypt this password. See: docs/encrypting_sensitive_configuration.md\n  password: "MYAPIKEY"\n')),Object(i.b)("p",null,"Note: To get the sparkpost API key, you have to ",Object(i.b)("a",{parentName:"p",href:"https://www.sparkpost.com/docs/getting-started/setting-up-domains/"},"validate your domain")," first."),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"smtp")," is configured and enabled, but it does not appear to send anything, make sure ",Object(i.b)("inlineCode",{parentName:"p"},"mailhog")," is not enabled."),Object(i.b)("h2",{id:"domain-names-and-ssl-certificates"},"Domain names and SSL certificates"),Object(i.b)("p",null,"All environments are given a hostname by default. It is possible to attach a custom domain name to environment by configuring ",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains")," configuration parameter. All hostnames attached to environment are printed in release notes."),Object(i.b)("p",null,"Note: You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"letsencrypt-staging")," issuer to avoid hitting ",Object(i.b)("inlineCode",{parentName:"p"},"letsencrypt")," ",Object(i.b)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"rate limits"),"."),Object(i.b)("p",null,"Note 2: For custom certificates it's advised to add CA root certificate to ",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains[].ssl.crt")," value. Having it under ",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains[].ssl.ca")," is not enough."),Object(i.b)("p",null,"Note 3: Deploy ",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains")," entries only when DNS entries are changed or are soon to be changed. Otherwise, Letsencrypt validation might eventually get stuck due to retries."),Object(i.b)("p",null,"Note 4: Put ",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains")," in a dedicated configuration yaml file, so only one environment (branch) would be assigned this hostname. Having multiple environments with the same domain will act as a round robin load balancer for all environments and unexpected responses might be returned."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart and Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"exposeDomains:\n\n  example-le:\n    hostname: ssl-le.example.com\n    ssl:\n      enabled: true\n      issuer: letsencrypt\n\n  example-customcert:\n    hostname: ssl-custom.example.com\n    ssl:\n      enabled: true\n      issuer: custom\n      # Encrypt key and certificate. See: docs/encrypting_sensitive_configuration.md\n      ca: |\n        -----BEGIN CERTIFICATE-----\n        < CA CHAIN ROOT >\n        -----END CERTIFICATE-----\n        -----BEGIN CERTIFICATE-----\n        < CA CHAIN RCA >\n        -----END CERTIFICATE-----\n        -----BEGIN CERTIFICATE-----\n        < CA CERTIFICATE >\n        -----END CERTIFICATE-----\n      key: |\n        -----BEGIN RSA PRIVATE KEY-----\n        <KEY>\n        -----END RSA PRIVATE KEY-----\n\n      crt: |\n        -----BEGIN CERTIFICATE-----\n        < CERTIFICATE >\n        -----END CERTIFICATE-----\n        -----BEGIN CERTIFICATE-----\n        < CA CHAIN ROOT >\n        -----END CERTIFICATE-----\n        -----BEGIN CERTIFICATE-----\n        < CA CHAIN RCA >\n        -----END CERTIFICATE-----\n        -----BEGIN CERTIFICATE-----\n        < CA CERTIFICATE >\n        -----END CERTIFICATE-----\n")),Object(i.b)("p",null,"You don't need a custom static ip (via gce ingress) normally, but if Your project requires, here's how -"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'exposeDomains:\n  example-gce-ingress:\n    hostname: gce-ingress.example.com\n    # see ingress.gce definition. This can also be a custom ingress too.\n    ingress: gce\n    ssl:\n      enabled: true\n      issuer: letsencrypt\n\ningress:\n  gce:\n    # Request a global static ip from OPS team first\n    staticIpAddressName: custom-ip-name\n\nnginx:\n  # Reverse proxy IP\'s to trust with contents of X-Forwarded-For header\n  realipfrom:\n    gke-internal: 10.0.0.0/8\n    # Load Balancer IP (static ip you were given)\n    gce-lb-ip: 1.2.3.4/32;\n\n# Depending on the cluster type, You might need to enable this.\n# A safe default is "false" (works in both cases), but "VPC Native"\n# clusters work more correcly with cluster.vpcNative set to "true".\ncluster:\n  vpcNative: true\n')),Object(i.b)("h2",{id:"add-redirects"},"Add redirects"),Object(i.b)("p",null,"Redirects can be relative to current domain or contain full domain for more targeted redirects when multiple external domains (",Object(i.b)("inlineCode",{parentName:"p"},"exposeDomains"),") are attached to deployment, and you only need this redirect for a specific URL. Redirect URL's can have regular expressions."),Object(i.b)("p",null,"If You are scattering the redirect rules into separate yaml's use keys (or the latter yaml will overwrite the whole ",Object(i.b)("inlineCode",{parentName:"p"},"nginx.redirects")," object) and the alphabetical order of keys will be respected in nginx redirect map. Because of this, it's better to put everything in one file without keys, just descriptions and the order of the yaml will be respected."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Drupal chart and Frontend chart"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  redirects:\n    - from: /test1\n      to: /\n    - from: http://exact-matching.example.com/test2\n      to: /test2-redirect\n    - description: 'Redirect non-www site to www site.'\n      from: '~://example.com'\n      to: https://www.example.com$request_uri\n    - from: '~://exact-matching-url-with-protocol-wildcard.example.com/test3$'\n      to: /test3-redirect\n    - from: ~/test4$\n      to: https://another-domain.example.com/test4-redirect\n")),Object(i.b)("p",null,"Note: ",Object(i.b)("inlineCode",{parentName:"p"},"description")," key does not do anything currently, it's a documentation comment for configuration maintainer."),Object(i.b)("h2",{id:"add-custom-include-files-for-nginx"},"Add custom include files for nginx"),Object(i.b)("p",null,"Drupal chart builds nginx container using web/ folder as build context. This prevents files being included from outside the web folder and it's not a good idea to put config files under it.\nTo be able to add include files the build context needs to be changed from ",Object(i.b)("inlineCode",{parentName:"p"},"web/")," into ",Object(i.b)("inlineCode",{parentName:"p"},".")," by passing ",Object(i.b)("inlineCode",{parentName:"p"},'nginx_build_context: "."')," to ",Object(i.b)("inlineCode",{parentName:"p"},"drupal-docker-build")," in ",Object(i.b)("inlineCode",{parentName:"p"},".circleci/config.yml"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  - silta/drupal-docker-build:\n      nginx_build_context: "."\n')),Object(i.b)("p",null,"Due root containing Drupal / shell container compatible .dockerignore file and for frontend there is a separate one inside the web/ folder this doesn't work anymore. Since version 19.03 Docker supports separate .dockerignore files for each Dockerfile. This requires Docker build to be made with BuildKit enabled. To enable BuildKit just pass the ",Object(i.b)("inlineCode",{parentName:"p"},"DOCKER_BUILDKIT=1")," to the build environment as an environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"environment:\n  DOCKER_BUILDKIT: 1\n")),Object(i.b)("p",null,"The ignore file itself needs to be named the same as the Dockerfile with .dockerignore appended to the end and need to reside at the same place as the Dockerfile:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cp web/.gitignore silta/nginx.Dockerfile.dockerignore\n")),Object(i.b)("p",null,"Note: our validation checks if the .dockerignore is present under web/ so you can either leave it there or just add an empty file in it's place.\nTo make the image to build correctly in this new context you need to update the COPY command in the nginx.Dockerfile to copy ",Object(i.b)("inlineCode",{parentName:"p"},"web")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},".")," and also add COPY commands to any custom config files you want to be able to include:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"COPY silta/nginx.serverextra.conf /etc/nginx\n\nCOPY web /app/web\n")),Object(i.b)("p",null,"Now you can include the config file in silta.yml like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"nginx:\n  serverExtraConfig: |\n    include nginx.serverextra.conf;\n")),Object(i.b)("p",null,"or if you ",Object(i.b)("inlineCode",{parentName:"p"},"COPY")," the file under ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d")," they will be included automatically without the need to add them to silta.yml configs."),Object(i.b)("h2",{id:"deploy-sub-project-from-the-same-repo-using-simple-chart"},"Deploy sub-project from the same repo using simple chart"),Object(i.b)("p",null,"Having e.g. Storybook or other frontend application included in the base project codebase that require\nseparate deployment can be easily done even using different chart.\nSee ",Object(i.b)("a",{parentName:"p",href:"/silta/docs/circleci-conf-examples"},"https://wunderio.github.io/silta/docs/circleci-conf-examples")," for the deployment setup part."),Object(i.b)("p",null,"When using different charts (e.g. drupal and simple) you need to separate chart specific configurations to their own silta-*.yml files if you want to share any configs between the application deployments (for example basic auth credentials). Best way to do it is to put only the shared configurations to the silta.yml file and have e.g. silta-cms.yml and silta-storybook.yml for application specific configurations."))}p.isMDXComponent=!0}}]);