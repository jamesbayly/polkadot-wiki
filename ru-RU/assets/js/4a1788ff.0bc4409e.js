(self.webpackChunk=self.webpackChunk||[]).push([[5634],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51841:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),s=["components"],r={id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets"},l=void 0,c={unversionedId:"build-integrate-assets",id:"build-integrate-assets",isDocsHomePage:!1,title:"Assets on Polkadot",description:"The Polkadot Relay Chain does not natively support assets beyond DOT (likewise, KSM for Kusama).",source:"@site/../docs/build-integrate-assets.md",sourceDirName:".",slug:"/build-integrate-assets",permalink:"/ru-RU/docs/build-integrate-assets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-integrate-assets.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628597410,formattedLastUpdatedAt:"10.08.2021",frontMatter:{id:"build-integrate-assets",title:"Assets on Polkadot",sidebar_label:"Integrating Assets"},sidebar:"docs",previous:{title:"Polkadot Protocol",permalink:"/ru-RU/docs/build-protocol-info"},next:{title:"Node Management",permalink:"/ru-RU/docs/build-node-management"}},d=[{value:"Assets Basics",id:"assets-basics",children:[{value:"Asset Operations",id:"asset-operations",children:[]}]},{value:"Integration",id:"integration",children:[{value:"Parachain Node",id:"parachain-node",children:[]},{value:"Sidecar",id:"sidecar",children:[]},{value:"Tx Wrapper Polkadot",id:"tx-wrapper-polkadot",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Polkadot Relay Chain does not natively support assets beyond DOT (likewise, KSM for Kusama).\nThis functionality exists in parachains. On Polkadot, this parachain is called Statemint, and on\nKusama it is called Statemine. All information in this guide applies equally to Kusama/Statemine."),(0,o.kt)("p",null,"Statemint provides a first-class interface for creating, managing, and using both fungible and\nnon-fungible assets. The fungible interface is similar to Ethereum's ERC-20 standard. However, the\ndata structures and stateful operations are encoded directly into the chain's runtime, making\noperations fast and fee-efficient."),(0,o.kt)("p",null,"Beyond merely supporting assets, integrating Statemint into your systems has several benefits for\ninfrastructure providers and users:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for on-chain assets."),(0,o.kt)("li",{parentName:"ul"},"Significantly lower transaction fees (about 1/10) than the Relay Chain."),(0,o.kt)("li",{parentName:"ul"},"Significantly lower deposits (1/10) than the Relay Chain. This includes the existential deposit\nand deposits for proxy/multisig operations."),(0,o.kt)("li",{parentName:"ul"},"Ability to pay transaction fees in certain assets. As in, accounts would ",(0,o.kt)("strong",{parentName:"li"},"not")," need DOT in order\nto exist on-chain nor to pay fees.")),(0,o.kt)("p",null,"Statemint will use DOT as its native currency. Users can transfer DOT from the Relay Chain into\nStatemint and use it natively. The Relay Chain will also accept DOT transfers from Statemint back to\nthe Relay Chain to use for staking, governance, or any other activity taking place there."),(0,o.kt)("p",null,"Using Statemint for DOT/KSM balance transfers will be much more efficent than the Relay Chain and is\nhighly recommended. Until domain specific parachains are built, the Relay Chain will still need to\nbe used for staking and governance."),(0,o.kt)("h2",{id:"assets-basics"},"Assets Basics"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/assets/src/lib.rs"},"Assets pallet"),"\nfor the most up-to-date info and reference documentation."),(0,o.kt)("p",null,"Assets are stored as a map from an ID to information about the asset, including a management team,\ntotal supply, total number of accounts, its sufficiency for account existence, and more.\nAdditionally, the asset owner can register metadata like the name, symbol, and number of decimals\nfor representation."),(0,o.kt)("p",null,"Some assets, as determined by on-chain governance, are regarded as \u201csufficient\u201d. Sufficiency means\nthat the asset balance is enough to create the account on-chain, with no need for the DOT/KSM\nexistential deposit. Likewise, you cannot send a non-sufficient asset to an account that does not\nexist. Sufficient assets can be used to pay transaction fees (i.e. there is no need to hold DOT/KSM\non the account)."),(0,o.kt)("p",null,"Assets do have a minimum balance (set by the creator), and if an account drops below that balance,\nthe dust is lost."),(0,o.kt)("h3",{id:"asset-operations"},"Asset Operations"),(0,o.kt)("p",null,"The Assets pallet has its own interface for dealing with assets. See the ",(0,o.kt)("a",{parentName:"p",href:"#integration"},"Integration"),"\nsection below for how to fetch information and construct transactions."),(0,o.kt)("p",null,"The main functions you will probably interact with are ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". These\nfunctions transfer some ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," (balance) of an ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId")," (a ",(0,o.kt)("inlineCode",{parentName:"p"},"u32"),", not a contract address) to\nanother account."),(0,o.kt)("p",null,"The Assets pallet also provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),"\ninterface for non-custodial operations."),(0,o.kt)("p",null,"Asset transfers will result in an ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.transferred")," event. The same instructions for\n",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/build-protocol-info#events"},"monitoring events and ",(0,o.kt)("strong",{parentName:"a"},"not")," transactions")," applies to asset\ntransfers."),(0,o.kt)("p",null,"Note that you can use the same addresses (except anonymous proxies!) on Statemint that you use on\nthe Relay Chain. The SS58 encodings are the same, only the chain information (genesis hash, etc.)\nwill change on transaction construction."),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Statemint will come with the same tooling suite that Parity Technologies provides for the Relay\nChain, namely ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"API Sidecar")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/tree/main/packages/txwrapper-polkadot"},"TxWrapper Polkadot"),".\nIf you have a technical question or issue about how to use one of the integration tools please file\na GitHub issue so a developer can help."),(0,o.kt)("h3",{id:"parachain-node"},"Parachain Node"),(0,o.kt)("p",null,"Using Statemint will require running a parachain node to sync the chain. This is very similar to\nrunning a Polkadot node, with the addition of some extra flags. The basic format looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./statemint $STATEMINT_CLI_ARGS --collator -- $POLKADOT_CLI_ARGS\n")),(0,o.kt)("p",null,"where both ",(0,o.kt)("inlineCode",{parentName:"p"},"$STATEMINT_CLI_ARGS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$POLKADOT_CLI_ARGS")," consist of regular Polkadot node flags.\nFlags can be used twice, one for the collating component and one for the Relay Chain component.\nAdditional ports that will be used are (by default) 9934, 9616, and 30334 (Relay Chain RPC,\nPrometheus endpoint, and libp2p respectively). As usual, any of these ports can be adjusted through\nflags. To deploy a Statemint RPC node, one would use the same flags as a Polkadot RPC node in place\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"$STATEMINT_CLI_ARGS"),". The node will keep both the database for Polkadot and for Statemint in its\ndatabase directory, so provision disks accordingly."),(0,o.kt)("h3",{id:"sidecar"},"Sidecar"),(0,o.kt)("p",null,"API Sidecar is a REST service for relay chain and parachain nodes; It comes with endpoints to query\ninfo about assets and asset balances on Statemint."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Asset lookups will always use the ",(0,o.kt)("inlineCode",{parentName:"li"},"AssetId")," to refer to an asset class. On-chain metadata is\nsubject to change and thus not suitable as a canonical index."),(0,o.kt)("li",{parentName:"ul"},"Please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"docs")," for full usage\ninformation. Details on options like how to make a historical query are not included here.")),(0,o.kt)("h3",{id:"tx-wrapper-polkadot"},"Tx Wrapper Polkadot"),(0,o.kt)("p",null,"TxWrapper Polkadot is a library designed to facilitate transaction construction and signing in\noffline environments; it comes with a set of asset-specific functions to use on Statemint. When\nconstructing parachain transactions, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"txwrapper-polkadot")," exactly as on the Relay Chain,\nbut would construct transactions with the appropriate parachain metadata like genesis hash, spec\nversion, and type registry."))}u.isMDXComponent=!0}}]);