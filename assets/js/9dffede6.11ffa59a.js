(self.webpackChunk=self.webpackChunk||[]).push([[6673],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:e},c),{},{components:n})):o.createElement(h,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47433:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>p});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},s=void 0,u={unversionedId:"build-integration",id:"build-integration",isDocsHomePage:!1,title:"Polkadot Integration Guide",description:"Welcome to the Polkadot integration guide. This guide will provide all the information you need to",source:"@site/../docs/build-integration.md",sourceDirName:".",slug:"/build-integration",permalink:"/docs/build-integration",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-integration.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626107511,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"build-integration",title:"Polkadot Integration Guide",sidebar_label:"Integration Initiation"},sidebar:"docs",previous:{title:"Polkadot Wallets",permalink:"/docs/build-wallets"},next:{title:"Polkadot Protocol",permalink:"/docs/build-protocol-info"}},c=[{value:"Structure",id:"structure",children:[]},{value:"Recommendation",id:"recommendation",children:[]}],d={toc:c};function p(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Polkadot integration guide. This guide will provide all the information you need to\nget started on your integration. The target audiences for this guide are wallets and custodians, but\nit will be useful to any infrastructure provider such as validators or chain indexers."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"The guide focuses on Polkadot and Kusama, but the principles will apply to parachains and other\nSubstrate-based chains. The guide contains four sections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully as\nit provides information about Polkadot that differentiates it from other blockchains. Use this\npage to check your assumptions."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/build-integrate-assets"},"Assets"),": The guide to integrating assets on Polkadot into your systems."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/build-node-management"},"Node Management"),": This page will guide you to starting and monitoring a\nnode."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your node\nvia multiple RPC tooling options."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/build-transaction-construction"},"Transaction Construction"),": A guide to transaction construction,\nsigning, decoding, and serialization using several available tools.")),(0,a.kt)("h2",{id:"recommendation"},"Recommendation"),(0,a.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to\nlist several options to accomplish the same thing. We want you to know your options and choose the\nsolution that is best for you."),(0,a.kt)("p",null,"That said, the easiest path to integration is almost always to use\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your\nnode and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/"},"TxWrapper Core")," to construct and sign\ntransactions. Parity and Web3 Foundation will be able to provide the best support if you use these\ntools."),(0,a.kt)("p",null,"If your team would like support, join some of our ",(0,a.kt)("a",{parentName:"p",href:"/docs/community"},"community channels")," or contact\n",(0,a.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."))}p.isMDXComponent=!0}}]);