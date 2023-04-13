"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||c;return r?n.createElement(u,a(a({ref:t},l),{},{components:r})):n.createElement(u,a({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(39960),o=r(67294),c=r(86010),a=r(16550);function i(e){let{title:t,url:r,description:i,command:s}=e;const{pathname:d}=(0,a.TH)();return o.createElement(n.Z,{className:(0,c.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!d.startsWith("/terminal")&&!d.startsWith("/sdk")&&!d.startsWith("/bot")}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},32654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),c=r(62872);const a={},i="crypto",s={unversionedId:"sdk/reference/crypto/index",id:"sdk/reference/crypto/index",title:"crypto",description:"<ReferenceCard",source:"@site/content/sdk/reference/crypto/index.mdx",sourceDirName:"sdk/reference/crypto",slug:"/sdk/reference/crypto/",permalink:"/sdk/reference/crypto/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_towns_sold_prices",permalink:"/sdk/reference/alt/realestate/get_towns_sold_prices"},next:{title:"candle",permalink:"/sdk/reference/crypto/candle"}},d={},l=[],p={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crypto"},"crypto"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(c.Z,{title:"ov",description:"markets, contracts, crypto_hack, info, indexes, derivatives, exrates, wf, exchanges, platforms, defi,...",url:"/sdk/reference/crypto/ov",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"defi",description:"dtvl, stats, ayr, anchor_data, swaps, gacc, aterra, gov_proposals, tokens, sreturn, luna_supply, vaults,...",url:"/sdk/reference/crypto/defi",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"disc",description:"coins, top_coins, coins_for_given_exchange, top_dexes, trending, coin_list, top_dapps, categories_keys,...",url:"/sdk/reference/crypto/disc",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"nft",description:"stats, fp, collections",url:"/sdk/reference/crypto/nft",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"dd",description:"social, trades, mkt, binance_available_quotes_for_each_coin, atl, active, pr, links, candle, stats,...",url:"/sdk/reference/crypto/dd",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"onchain",description:"ttcp, token_decimals, btc_supply, erc20_tokens, btcsingleblock, info, lt, holders, hist, balance,...",url:"/sdk/reference/crypto/onchain",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"tools",description:"il, apy",url:"/sdk/reference/crypto/tools",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"candle",description:"Plot candle chart from dataframe. [Source: Binance]",url:"/sdk/reference/crypto/candle",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"chart",description:"Load data for Technical Analysis",url:"/sdk/reference/crypto/chart",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"find",description:"Find similar coin by coin name,symbol or id.",url:"/sdk/reference/crypto/find",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"load",description:"Load crypto currency to get data for",url:"/sdk/reference/crypto/load",command:"true",mdxType:"ReferenceCard"}),(0,o.kt)(c.Z,{title:"price",description:"Returns price and confidence interval from pyth live feed. [Source: Pyth]",url:"/sdk/reference/crypto/price",command:"true",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);