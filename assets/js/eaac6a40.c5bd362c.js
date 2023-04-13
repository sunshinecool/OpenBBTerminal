"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44649],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),a=t(67294),o=t(86010),i=t(16550);function c(e){let{title:r,url:t,description:c,command:s}=e;const{pathname:l}=(0,i.TH)();return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!l.startsWith("/terminal")&&!l.startsWith("/sdk")&&!l.startsWith("/bot")}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},59631:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(62872);const i={},c="general",s={unversionedId:"bot/reference/discord/general/index",id:"bot/reference/discord/general/index",title:"general",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/general/index.mdx",sourceDirName:"bot/reference/discord/general",slug:"/bot/reference/discord/general/",permalink:"/bot/reference/discord/general/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/general/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"urban",permalink:"/bot/reference/discord/fun/urban"},next:{title:"futures",permalink:"/bot/reference/discord/general/futures"}},l={},d=[],u={toc:d},m="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general"},"general"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"futures",description:"This command allows the user to retrieve futures prices on the stock market.",url:"/bot/reference/discord/general/futures",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"heatchart",description:"This command allows the user to retrieve a Daily Market Heat Chart (15 minute delayed). The heat chart shows a...",url:"/bot/reference/discord/general/heatchart",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"heatmap",description:"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the...",url:"/bot/reference/discord/general/heatmap",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"markets",description:"This command allows the user to retrieve a markets overview which provides a quick summary of current market...",url:"/bot/reference/discord/general/markets",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"news",description:"This command allows the user to retrieve the latest news for a given ticker.",url:"/bot/reference/discord/general/news",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"quote",description:"This command allows the user to retrieve display quote stats for a stock - including the 52 week high/low, market...",url:"/bot/reference/discord/general/quote",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ta",description:"This command allows the user to retrieve a technical analysis summary for a given stock ticker. The summary...",url:"/bot/reference/discord/general/ta",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"watchlist",description:"This command allows the user to retrieve an overview of their watchlist, which includes the current price,...",url:"/bot/reference/discord/general/watchlist",mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);