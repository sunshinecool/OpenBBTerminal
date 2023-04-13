"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,p=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(p,l(l({ref:t},f),{},{components:r})):o.createElement(p,l({ref:t},f))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),n=r(67294),a=r(86010),l=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:s}=(0,l.TH)();return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},69027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var o=r(87462),n=(r(67294),r(3905)),a=r(62872);const l={},i="flowsum",c={unversionedId:"bot/reference/telegram/flow/flowsum/index",id:"bot/reference/telegram/flow/flowsum/index",title:"flowsum",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/flow/flowsum/index.mdx",sourceDirName:"bot/reference/telegram/flow/flowsum",slug:"/bot/reference/telegram/flow/flowsum/",permalink:"/bot/reference/telegram/flow/flowsum/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/flowsum/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wk",permalink:"/bot/reference/telegram/flow/flow/wk"},next:{title:"day",permalink:"/bot/reference/telegram/flow/flowsum/day"}},s={},f=[],m={toc:f},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flowsum"},"flowsum"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"day",description:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day",url:"/bot/reference/telegram/flow/flowsum/day",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"exp",description:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day by expiration.",url:"/bot/reference/telegram/flow/flowsum/exp",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"top",description:"This command allows the user to retrieve the top flow for the day for Calls and Puts by stock.",url:"/bot/reference/telegram/flow/flowsum/top",mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"wk",description:"This command allows the user to retrieve the top flow for the week for Calls and Puts by stock.",url:"/bot/reference/telegram/flow/flowsum/wk",mdxType:"ReferenceCard"})))}d.isMDXComponent=!0}}]);