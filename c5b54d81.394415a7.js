(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(100)),s={},i={unversionedId:"vendor-gcs",id:"vendor-gcs",isDocsHomePage:!1,title:"vendor-gcs",description:"Google Cloud compatibility",source:"@site/docs/vendor-gcs.md",slug:"/vendor-gcs",permalink:"/silta/docs/vendor-gcs",editUrl:"https://github.com/wunderio/silta/tree/master/docs/vendor-gcs.md",version:"current"},l=[{value:"Cluster requirements",id:"cluster-requirements",children:[]},{value:"Deployment specifics",id:"deployment-specifics",children:[]},{value:"Google Cloud features",id:"google-cloud-features",children:[{value:"VPC native cluster",id:"vpc-native-cluster",children:[]},{value:"GKE Ingress for HTTP(S) Load Balancing",id:"gke-ingress-for-https-load-balancing",children:[]},{value:"Cloud Armor",id:"cloud-armor",children:[]},{value:"Filestore",id:"filestore",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"google-cloud-compatibility"},"Google Cloud compatibility"),Object(o.b)("p",null,"Silta is fully GKE compatible since it's primarily used on it."),Object(o.b)("h2",{id:"cluster-requirements"},"Cluster requirements"),Object(o.b)("p",null,"Requirements are listed on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wunderio/charts/tree/master/silta-cluster#requirements"},"silta-cluster chart page"),", those are common for all silta-cluster installations. "),Object(o.b)("h2",{id:"deployment-specifics"},"Deployment specifics"),Object(o.b)("p",null,"There is no extra configuration required for basic deployments. The only change would be ",Object(o.b)("inlineCode",{parentName:"p"},"cluster.type")," but it's normally overridden in CI pipeline."),Object(o.b)("p",null,"Drupal, frontend and simple charts:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"cluster:\n  type: gke\n")),Object(o.b)("h2",{id:"google-cloud-features"},"Google Cloud features"),Object(o.b)("h3",{id:"vpc-native-cluster"},"VPC native cluster"),Object(o.b)("p",null,"GKE clusters are ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/alias-ips"},"VPC native")," the default now, but for compatibility reasons silta deployments are set to route-based mode by default now. This is normally overridden in CI, according to cluster."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"cluster:\n  type: gke\n  vpcNative: true\n")),Object(o.b)("h3",{id:"gke-ingress-for-https-load-balancing"},"GKE Ingress for HTTP(S) Load Balancing"),Object(o.b)("p",null,"Projects can define ",Object(o.b)("inlineCode",{parentName:"p"},"exposeDomain")," hosts and use ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/ingress"},"GKE Ingress Class")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"exposeDomains:\n  example-gce-ingress:\n    hostname: example.com\n    # see ingress.gce definition. This can also be a custom ingress too.\n    ingress: gce\n    \ningress:\n  gce:\n    # Request a global static ip from cluster administrator first\n    staticIpAddressName: custom-ip-name\n\nnginx:\n  # Reverse proxy IP's to trust with contents of X-Forwarded-For header \n  realipfrom: \n    # Load Balancer IP (static ip you were given)\n    gce-lb-ip: 1.2.3.4/32;\n")),Object(o.b)("h3",{id:"cloud-armor"},"Cloud Armor"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#cloud_armor"},"Cloud Armor")," can only be used with GKE Ingress. Once enabled, You can define security policy (Cloud Armor policy) for Your service's backendConfig."),Object(o.b)("p",null,'Silta uses "silta-ingress" security policy name by default, it can be adjusted.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'backendConfig:\n  securityPolicy:\n    name: "silta-ingress"\n')),Object(o.b)("h3",{id:"filestore"},"Filestore"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/filestore"},"Filestore")," - add an alternate storageclass with a shared Filestore volume.",Object(o.b)("br",null),"\nPublic and private files can be stored on Google Filestore via NFS mount, providing higher i/o access than default storage. This option is useful for projects with lots of files served.",Object(o.b)("br",null),"\nHave an exported share named ",Object(o.b)("inlineCode",{parentName:"p"},"/main_share"),".",Object(o.b)("br",null)),Object(o.b)("p",null,"Example configuration for ",Object(o.b)("strong",{parentName:"p"},"new")," projects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"mounts:\n  public-files:\n    enabled: true\n    storage: 1G\n    mountPath: /app/web/sites/default/files\n    storageClassName: nfs-shared\n  private-files:\n    enabled: true\n    storage: 1G\n    mountPath: /app/private\n    storageClassName: nfs-shared\n")),Object(o.b)("p",null,"Full example on using the provisioned storageclass in ",Object(o.b)("strong",{parentName:"p"},"new and existing")," projects ",Object(o.b)("a",{parentName:"p",href:"/silta/docs/storage_migration"},"here")))}u.isMDXComponent=!0}}]);