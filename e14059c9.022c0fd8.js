(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(92)),c={id:"encrypting-sensitive-configuration",title:"Encrypting sensitive configuration"},o={unversionedId:"encrypting-sensitive-configuration",id:"encrypting-sensitive-configuration",isDocsHomePage:!1,title:"Encrypting sensitive configuration",description:"Certain configuration items such as access tokens or secret keys are quite sensitive",source:"@site/docs/encrypting_sensitive_configuration.md",slug:"/encrypting-sensitive-configuration",permalink:"/silta/docs/encrypting-sensitive-configuration",editUrl:"https://github.com/wunderio/silta/tree/master/docs/encrypting_sensitive_configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Docker images",permalink:"/silta/docs/docker-images"},next:{title:"Go-live checklist",permalink:"/silta/docs/go-live-checklist"}},l=[{value:"Example of secret environment variables",id:"example-of-secret-environment-variables",children:[]},{value:"Using a custom encryption key",id:"using-a-custom-encryption-key",children:[]},{value:"Decrypting existing secrets file",id:"decrypting-existing-secrets-file",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Certain configuration items such as access tokens or secret keys are quite sensitive\nand should not be committed to the repository in plain text. Silta supports decrypting certain files\nduring the build process."),Object(a.b)("p",null,"We use ",Object(a.b)("inlineCode",{parentName:"p"},"openssl")," to encrypt files, but there are many versions available with incompatible ciphers.\nWe therefore recommend the following process:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'SSH into a CircleCI environment using "Rerun workflow > Rerun job with SSH" from the last build. Note that different environments might have different circleci contexts and hence - different encryption keys. Check your circleci config file for context information.\nYou will get a command like (the actual IP and port changes for each build)'),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"ssh -p 64537 3.80.240.10\n")),Object(a.b)("p",{parentName:"li"},"If you have trouble getting in, please refer to ",Object(a.b)("inlineCode",{parentName:"p"},"troubleshooting.md")," SSH section.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Create your file named ",Object(a.b)("inlineCode",{parentName:"p"},"/tmp/secret_file"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Encrypt it with"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"openssl aes-256-cbc -pbkdf2 -in /tmp/secret_file -out /tmp/encrypted_file -pass env:SECRET_KEY\n")),Object(a.b)("p",{parentName:"li"},"Make sure that the ",Object(a.b)("inlineCode",{parentName:"p"},"-in")," and ",Object(a.b)("inlineCode",{parentName:"p"},"-out")," parameters are not the same, or openssl will encrypt its own output.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Now copy the encrypted file back to your local environment with"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-bash"},"scp -P 64537 3.80.240.10:/tmp/encrypted_file path/to/file\n")),Object(a.b)("p",{parentName:"li"},"The port and IP should be the same as the SSH instructions. Note that ",Object(a.b)("inlineCode",{parentName:"p"},"-P")," is uppercase for ",Object(a.b)("inlineCode",{parentName:"p"},"scp"),"!")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Commit the encrypted file to git at the location where you want to have it.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In your CircleCI configuration, add following "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Drupal chart"),": Add following under ",Object(a.b)("inlineCode",{parentName:"li"},"silta/drupal-build-deploy"),":")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"decrypt_files: path/to/file\n")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Frontend chart"),": Add following under ",Object(a.b)("inlineCode",{parentName:"li"},"codebase-build"),":")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"- silta/decrypt-files:\n    files: path/to/file\n")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path/to/file")," is relative to the build folder (root)"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Your secret file can also contain an extension to the configuration in silta.yml, for example to set encrypted environment variables. To do that, add this to your ",Object(a.b)("inlineCode",{parentName:"p"},"drupal-build-deploy")," CircleCI job:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"silta_config: silta/silta.yml,silta/secrets\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Push your code, the file will get decrypted in place at the build time.\nCheck the CircleCI step "Decrypt secret files".')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Your secret file can be used as it is (for example, the private key to connect to another service)."))),Object(a.b)("h2",{id:"example-of-secret-environment-variables"},"Example of secret environment variables"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Drupal chart")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"php:\n  env:\n    PAYMENT_GW_KEY: '1234567890qwertyuiop'\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Frontend chart")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"services:\n  myservice:\n    env:\n      PAYMENT_GW_KEY: '1234567890qwertyuiop'\n")),Object(a.b)("h2",{id:"using-a-custom-encryption-key"},"Using a custom encryption key"),Object(a.b)("p",null,"For cases where you want to have your own encryption key, you can do that with the following steps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create an environment variable in your CircleCI project.\nClick the gear icon on a build page > Environment variables > Add Variable.\nUse a name like ",Object(a.b)("inlineCode",{parentName:"li"},"MYPROJECT_SECRET_KEY")," and the value of your choice (preferably a strong key)."),Object(a.b)("li",{parentName:"ul"},"Use the same step as above, but specify the environment variable to be used as the decryption key:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"- silta/decrypt-files:\n    files: path/to/file\n    secret_key_env: MYPROJECT_SECRET_KEY\n")))),Object(a.b)("h2",{id:"decrypting-existing-secrets-file"},"Decrypting existing secrets file"),Object(a.b)("p",null,"Check the port and IP address by Rerunning the latest workflow in CircleCI: > Rerun job with SSH"),Object(a.b)("p",null,"Using the SSH port and IP address securely copy your silta/secrets file to CircleCI"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"scp -P 64537 silta/secrets 3.80.240.10:/tmp/encrypted_file\n")),Object(a.b)("p",null,"SSH to CircleCI using the correct port/IP you got from rerunning the job with SSH"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ssh -p 64537 3.80.240.10\n")),Object(a.b)("p",null,"Run following command in CircleCI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"openssl aes-256-cbc -pbkdf2 -d -in /tmp/encrypted_file -out /tmp/decrypted_file -pass env:SECRET_KEY\n")),Object(a.b)("p",null,"Check ",Object(a.b)("inlineCode",{parentName:"p"},"/tmp/decrypted_file")," or scp it back to your local using"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"scp -P 64537 3.80.240.10:/tmp/decrypted_file silta/secrets_decrypted\n")))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);