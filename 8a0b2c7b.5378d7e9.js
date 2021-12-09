(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(96)),o={id:"migrating-an-existing-drupal-project",title:"Migrating an existing Drupal project"},c={unversionedId:"migrating-an-existing-drupal-project",id:"migrating-an-existing-drupal-project",isDocsHomePage:!1,title:"Migrating an existing Drupal project",description:"General tips",source:"@site/docs/migrating_existing_project.md",slug:"/migrating-an-existing-drupal-project",permalink:"/silta/docs/migrating-an-existing-drupal-project",editUrl:"https://github.com/wunderio/silta/tree/master/docs/migrating_existing_project.md",version:"current",sidebar:"someSidebar",previous:{title:"Key components",permalink:"/silta/docs/key-components"},next:{title:"Request workflow",permalink:"/silta/docs/request-workflow"}},l=[{value:"General tips",id:"general-tips",children:[]},{value:"Step by step instructions",id:"step-by-step-instructions",children:[]},{value:"Drupal 7 migration tips",id:"drupal-7-migration-tips",children:[{value:"Project uses make file for builds",id:"project-uses-make-file-for-builds",children:[]},{value:"Missing drush",id:"missing-drush",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general-tips"},"General tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We automate as much as possible, but many projects have project-specific differences."),Object(i.b)("li",{parentName:"ul"},"When in doubt, ask for advice."),Object(i.b)("li",{parentName:"ul"},"Ask any questions in our #dev-silta slack channel.")),Object(i.b)("h2",{id:"step-by-step-instructions"},"Step by step instructions"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure you have a clean, up-to-date checkout of your repository.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a new feature branch:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feature/silta\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the migration script from the project root:",Object(i.b)("br",{parentName:"p"}),"\n","For Drupal 8+  "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl -s https://raw.githubusercontent.com/wunderio/silta/master/scripts/drupal-migrate.sh | bash\n")),Object(i.b)("p",{parentName:"li"},"For Drupal 7 with composer.json run      "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl -s https://raw.githubusercontent.com/wunderio/silta/master/scripts/drupal7-migrate.sh | bash\n")),Object(i.b)("p",{parentName:"li"},"Please check ",Object(i.b)("a",{parentName:"p",href:"/silta/docs/troubleshooting"},"troubleshooting")," for other Drupal 7 cases  "),Object(i.b)("p",{parentName:"li"},"Migration script will create ",Object(i.b)("inlineCode",{parentName:"p"},".circleci/config.yml")," file for CircleCI builds. You might need to adapt branch names or contexts."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Important"),Object(i.b)("br",{parentName:"p"}),"\n","Add this to silta.yml config if You use Drupal 7 "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'php:\n  drupalCoreVersion: "7"\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Read through the output of the script and check for any instructions to perform manual steps.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check modifications made by the script with ",Object(i.b)("inlineCode",{parentName:"p"},"git diff"),". Pay particular attention to code that has been removed, we don't want to lose anything important.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Commit all changes and push them to Github. You should see a build starting automatically on CircleCI: ",Object(i.b)("a",{parentName:"p",href:"https://circleci.com/gh/wunderio"},"https://circleci.com/gh/wunderio"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the build has errors, try to fix them until the build is green."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"build-deploy")," is the one that matters the most. The ",Object(i.b)("inlineCode",{parentName:"li"},"validation")," job can point out issues with your code would prevent it from running. However, you may decide to ignore phpcs errors for now."),Object(i.b)("li",{parentName:"ul"},"Have a look at our ",Object(i.b)("a",{parentName:"li",href:"/silta/docs/troubleshooting"},"troubleshooting")," section."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The last step of the ",Object(i.b)("inlineCode",{parentName:"p"},"build-deploy")," contains information on how to access your newly created Silta environment."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You should be able to access the site at the given URL with the given basic authentication username and password."),Object(i.b)("li",{parentName:"ul"},"The site is not yet installed, we'll do that in the next step."),Object(i.b)("li",{parentName:"ul"},"You should also be able to access the environment using the provided SSH instructions."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload a database dump using the command provided in CircleCI output.\nYou might need to log in via SSH and clear the caches, import configuration or run updates if your database dump is not in sync with the current codebase.\nAt this point you should have a somewhat functioning environment accessible.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a pull request for your feature branch, have a peer review it, and merge it.\nCircleCI should automatically build the master environment.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload the database dump and the files to the master environment.\nThis is the ",Object(i.b)("em",{parentName:"p"},"reference environment")," by default, meaning that new environments\nwill be created with a copy of this content.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Congratulations, your project is now up and running! Please share any issues you had or ideas for improvements."))),Object(i.b)("h2",{id:"drupal-7-migration-tips"},"Drupal 7 migration tips"),Object(i.b)("h3",{id:"project-uses-make-file-for-builds"},"Project uses make file for builds"),Object(i.b)("p",null,"Have something like this in .circleci/config.yml"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"codebase-build:\n   - run:\n      name: Build from makefile\n      command: |\n         composer install\n         vendor/drush/drush/drush make ~/project/drupal/conf/site.make ~/project/drupal/web/\n         mkdir -p web/sites/all/modules\n         cp -r code/modules/custom web/sites/all/modules/\n")),Object(i.b)("h3",{id:"missing-drush"},"Missing drush"),Object(i.b)("p",null,"Add composer.json in Drupal folder"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "require": {\n        "drush/drush": "8.*"\n    },\n    "extra": {\n        "installer-paths": {\n            "web/": ["type:drupal-core"]\n        }\n    }\n}\n')),Object(i.b)("p",null,"And then in .circleci/config.yml add"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"command: |\n   composer install\n")))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);