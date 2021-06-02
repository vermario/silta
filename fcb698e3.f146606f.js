(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(96)),i={id:"help-with-silta-dev",title:"Helping with Silta development"},l={unversionedId:"help-with-silta-dev",id:"help-with-silta-dev",isDocsHomePage:!1,title:"Helping with Silta development",description:"First and foremost, help updating this docs directory.",source:"@site/docs/helping_with_silta_development.md",slug:"/help-with-silta-dev",permalink:"/silta/docs/help-with-silta-dev",editUrl:"https://github.com/wunderio/silta/tree/master/docs/helping_with_silta_development.md",version:"current",sidebar:"someSidebar",previous:{title:"Go-live checklist",permalink:"/silta/docs/go-live-checklist"},next:{title:"Key components",permalink:"/silta/docs/key-components"}},c=[{value:"Development workflow",id:"development-workflow",children:[]},{value:"Testing workflow",id:"testing-workflow",children:[]},{value:"Some tips and external documentation when working with HELM charts",id:"some-tips-and-external-documentation-when-working-with-helm-charts",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First and foremost, help updating this docs directory."),Object(o.b)("h2",{id:"development-workflow"},"Development workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Each chart (drupal, frontend, simple) has respective project that uses the chart as subfolder under ",Object(o.b)("inlineCode",{parentName:"li"},"/charts"),". So adjustments to chart can be made on each commit. Check ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wunderio/drupal-project-k8s/blob/master/.circleci/config.yml#L29"},".cirlceci/config.yml")," in Drupal chart to see how it's defined. So you make a PR for a specific chart (either ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wunderio/drupal-project-k8s"},"drupal-project-k8s")," or ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wunderio/frontend-project-k8s"},"frontend-project-k8s")," or ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wunderio/simple-project-k8s"},"simple-project-k8s"),")"),Object(o.b)("li",{parentName:"ol"},"Someone from core dev team will review changes and accept or reject the PR. Once accepted by one of them, it can be merged to master."),Object(o.b)("li",{parentName:"ol"},"Then there are 2 options:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Time to time one of us diffs wunderio/charts/drupal to wunderio/drupal-project-k8s/charts/drupal and just copies over multiple changes in bulk and increments chart version in both repos, making them in sync again."),Object(o.b)("li",{parentName:"ol"},"You can make a copy of that accepted PR to wunderio/charts repo where it will be accepted again.")))),Object(o.b)("h2",{id:"testing-workflow"},"Testing workflow"),Object(o.b)("p",null,"If you want to test a feature PR, you can do it like this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make a new branch from feature/myAwesomeThing -> feature/myAwesomeThing-test."),Object(o.b)("li",{parentName:"ol"},"Enable the myAwesomeThing related functionality or apply new configuration related to the feature."),Object(o.b)("li",{parentName:"ol"},"Commit the changes to the test branch and push to origin."),Object(o.b)("li",{parentName:"ol"},"Check that functionality works as it should."),Object(o.b)("li",{parentName:"ol"},"Write tests when possible and push them to the original feature branch or request the original author to add them."),Object(o.b)("li",{parentName:"ol"},"Delete the test branch if everything works.")),Object(o.b)("h2",{id:"some-tips-and-external-documentation-when-working-with-helm-charts"},"Some tips and external documentation when working with HELM charts"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/control_structures/"},"Helm template guide - control structures"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/defaults.html"},"Goland Sprig functions")),Object(o.b)("p",null,"Before making a pull request you should install the unittest helm plugin:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"helm plugin install https://github.com/quintush/helm-unittest --version 0.2.4\n")),Object(o.b)("p",null,"and run in on your updated chart:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"helm unittest ./charts/drupal --helm3\n")),Object(o.b)("p",null,"To test charts locally You will need access to ",Object(o.b)("a",{parentName:"p",href:"https://intra.wunder.io/info/silta/silta-ops-manual"},"Silta Dev cluster")," and Helm installed locally",Object(o.b)("br",{parentName:"p"}),"\n","Most likely You will need to add Helm repos before testing.",Object(o.b)("br",{parentName:"p"}),"\n","See example below.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"helm repo add wunderio https://storage.googleapis.com/charts.wdr.io"),"  "),Object(o.b)("p",null,"Do dry-run with",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"helm upgrade --install test charts/drupal --dry-run --debug --values silta/silta.yml"),"  "))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(h,l(l({ref:t},p),{},{components:n})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);