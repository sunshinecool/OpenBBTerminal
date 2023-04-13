"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={title:"Installation and Updates",sidebar_position:1,description:"TBD",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb terminal"]},r=void 0,o={unversionedId:"terminal/faqs/installation_updates",id:"terminal/faqs/installation_updates",title:"Installation and Updates",description:"TBD",source:"@site/content/terminal/faqs/installation_updates.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/installation_updates",permalink:"/terminal/faqs/installation_updates",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/installation_updates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation and Updates",sidebar_position:1,description:"TBD",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb terminal"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/terminal/faqs/"},next:{title:"Launching",permalink:"/terminal/faqs/launching"}},s={},p=[{value:"Installation and Updates",id:"installation-and-updates",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation-and-updates"},"Installation and Updates"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"How much hard drive space is required?"),(0,l.kt)("p",null,"An installation will use approximately 4-5 GB of space, with additional storage required for optional machine learning models.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"What is the minimum version of Windows or MacOS required to install the OpenBB Terminal?"),(0,l.kt)("p",null,"The OpenBB Terminal installation packages are compatible with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows 10 or later."),(0,l.kt)("li",{parentName:"ul"},"MacOS Monterey or later.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Machines which are not compatible with the installer packages may be able to install from the source code.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"How do I update my installation to the latest version?"),(0,l.kt)("p",null,"The terminal is constantly being updated with new features and bug fixes. The process for updating will vary by the installation type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"As of version 2.4.1, the Windows installer has an option for uninstalling the existing prior to updating."),(0,l.kt)("li",{parentName:"ul"},"For other installer versions, uninstall the previous version (uninstall.exe for Windows, delete the Application folder on MacOS); then, download the latest version and reinstall. User settings and data will remain."),(0,l.kt)("li",{parentName:"ul"},"For a ",(0,l.kt)("inlineCode",{parentName:"li"},"pip")," installation, when a new version is published: ",(0,l.kt)("inlineCode",{parentName:"li"},"pip install -U openbb[all]")),(0,l.kt)("li",{parentName:"ul"},"Upgrade a cloned version of the GitHub repo with:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"git fetch\ngit pull\npoetry install -E all\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes:")," If the cloned repository is a fork, pull from: ",(0,l.kt)("inlineCode",{parentName:"p"},"git pull origin main")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"git pull origin develop"),". If there are changes locally to the files that conflict with the incoming changes from GitHub, stash them before pulling from main with ",(0,l.kt)("inlineCode",{parentName:"p"},"git stash"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,'"Microsoft Visual C++ 14.0 or greater is required"'),(0,l.kt)("p",null,"Download and install ",(0,l.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"C++ Build Tools"),", restart the machine, then try again.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Error: failed building wheel for bt"),(0,l.kt)("p",null,'There may be an additional message that is printed from this error, stating: "Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools".'),(0,l.kt)("p",null,"Download and install it. ",(0,l.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/")),(0,l.kt)("p",null,"Mac and Linux users may also encounter a similar error because a C++ compiler is not installed. Install Homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Then run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"brew install gcc\nbrew install cmake\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Miniconda3 will not install on ARM/Linux Raspberry Pi machines."),(0,l.kt)("p",null,"Refer to this issue on the Conda ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/conda/conda/issues/10723"},"GitHub")," page.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Error: Library not loaded: '/usr/local/opt/libomp/lib/libomp.dylib'"),(0,l.kt)("p",null,"This error is resolved by installing libomp from Homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"brew install libomp\n"))))}d.isMDXComponent=!0}}]);