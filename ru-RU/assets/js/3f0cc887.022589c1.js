(self.webpackChunk=self.webpackChunk||[]).push([[7133],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var r=o.createContext({}),c=function(t){var e=o.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return o.createElement(r.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,r=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return a?o.createElement(h,s(s({ref:e},p),{},{components:a})):o.createElement(h,s({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l.mdxType="string"==typeof t?t:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72833:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>r,metadata:()=>c,toc:()=>p,default:()=>d});var o=a(22122),n=a(19756),i=(a(67294),a(3905)),s=["components"],l={id:"claims",title:"Polkadot Claims",sidebar_label:"Claims"},r=void 0,c={unversionedId:"claims",id:"claims",isDocsHomePage:!1,title:"Polkadot Claims",description:"If you made a DOT purchase in one of the pre-launch sales, then you will need to claim your DOT",source:"@site/../docs/claims.md",sourceDirName:".",slug:"/claims",permalink:"/ru-RU/docs/claims",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/claims.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626467613,formattedLastUpdatedAt:"16.07.2021",frontMatter:{id:"claims",title:"Polkadot Claims",sidebar_label:"Claims"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/ru-RU/docs/getting-started"},next:{title:"Redenomination of DOT",permalink:"/ru-RU/docs/redenomination"}},p=[{value:"Making a Claim",id:"making-a-claim",children:[{value:"What You Will Need",id:"what-you-will-need",children:[]},{value:"Third Party Claims Processes",id:"third-party-claims-processes",children:[]}]},{value:"Attesting to a Statement",id:"attesting-to-a-statement",children:[]},{value:"Using Polkadot-JS Apps",id:"using-polkadot-js-apps",children:[{value:"What you will need",id:"what-you-will-need-1",children:[]},{value:"Go to Polkadot-JS Apps",id:"go-to-polkadot-js-apps",children:[]},{value:"Make the Attestation",id:"make-the-attestation",children:[]}]},{value:"Using Parity Signer",id:"using-parity-signer",children:[{value:"What you will need",id:"what-you-will-need-2",children:[]},{value:"Go to Polkadot-JS Apps",id:"go-to-polkadot-js-apps-1",children:[]},{value:"Make the Attestation",id:"make-the-attestation-1",children:[]}]}],u={toc:p};function d(t){var e=t.components,l=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you made a DOT purchase in one of the pre-launch sales, then you will need to claim your DOT\ntokens. For those who made a pre-genesis claim by sending a claim transaction to the Claims Contract\non Ethereum, you will still need to send a free ",(0,i.kt)("em",{parentName:"p"},"attest")," transaction that will agree to the terms\nand conditions of your allocation. If you did not make a pre-genesis claim, then you will claim and\nattest in a single transaction."),(0,i.kt)("p",null,"This guide will walk you through the steps for either making a claim or attesting to the statement."),(0,i.kt)("p",null,"If you are making a claim on Polkadot for the first time, please read on below in the\n",(0,i.kt)("a",{parentName:"p",href:"#making-a-claim"},"making a claim")," section. If you've already claimed during the pre-genesis claims\nperiod, please proceed to the ",(0,i.kt)("a",{parentName:"p",href:"#attesting-to-a-statement"},"attesting to a statement")," section instead."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more on How to claim your DOT post genesis, check out our walkthrough\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rjhWfKXJTCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=22"},"video"),"\nand our video on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=AlwrM27x3As&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=16"},"Claiming DOT with an Ethereum address generated using an old mnemonic phrase"))),(0,i.kt)("h2",{id:"making-a-claim"},"Making a Claim"),(0,i.kt)("p",null,"If you did not make a claim in the pre-genesis claims period, then you are able to claim your DOT\ntokens after genesis. There is no time limit for making your claim so feel free to do this whenever\nyou are most comfortable."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Note: When you make a claim, you will also attest to the agreement that corresponds to your DOT\nallocation. The two actions, "claim" and "attest", are done in a single transaction, but for the\nmost part this is simplified from the perspective of the user.')),(0,i.kt)("h3",{id:"what-you-will-need"},"What You Will Need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Ethereum account that holds the DOT indicator tokens"),(0,i.kt)("li",{parentName:"ul"},"The MyCrypto wallet"),(0,i.kt)("li",{parentName:"ul"},"A Polkadot account")),(0,i.kt)("p",null,"You should already have your Ethereum account that holds the DOT indicator tokens from Polkadot's\nprior sales. You will need to have access to this account in order to make a signature."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://download.mycrypto.com/"},"MyCrypto")," is a versatile wallet that supports a variety of storage methods for your Ethereum\naccount. Go to their downloads page and ensure that you download the latest version for your\noperating system. This is important because the latest version will always have the latest security\npatches."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTICE"),": It is much more secure to download and use the MyCrypto app locally. You can always\nfind the most up-to-date releases of the desktop app on their ",(0,i.kt)("a",{parentName:"p",href:"https://download.mycrypto.com/"},"releases page"),".")),(0,i.kt)("p",null,"You will need a Polkadot account to claim your DOT. Please follow the instructions on the ",(0,i.kt)("a",{parentName:"p",href:"learn-account-generation"},"account\ngeneration")," page for generating a new Polkadot account."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://claims.polkadot.network/"},"claims guide")," to claim DOT that were purchased in the form of DOT Allocation Indicators on Ethereum before June 30, 2020. These steps are broken down in the remaining sections of this page."),(0,i.kt)("h4",{id:"claiming-your-dot-with-mycrypto"},"Claiming your DOT with MyCrypto"),(0,i.kt)("p",null,"The Polkadot-JS ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Claims app")," helps you sign a message from MyCrypto. MyCrypto is a good choice in\ncase you have stored the key to the Ethereum account holding your DOT indicator tokens on a hardware\ndevice like a Ledger Nano S or a Trezor. It also supports raw private keys, mnemonics, and Parity\nsigner."),(0,i.kt)("p",null,'Once you\'ve downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for\nmaximum security), you can start by navigating to the Claims app on Polkadot-JS Apps. Select the\naccount you would like to claim the DOT into and click the blue "Continue" button to proceed. Your\nscreen should look something like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-1",src:a(18151).Z})),(0,i.kt)("p",null,'Now you will need to provide the Ethereum address that is associated with the DOT indicator tokens\nthat you will claim. Enter the Ethereum address into the box and click "Continue".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-2",src:a(57974).Z})),(0,i.kt)("p",null,"Next your screen should look the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-2-1",src:a(47978).Z})),(0,i.kt)("p",null,'The hex-encoded string that follows the sentence: "Pay DOT to the Polkadot account:" is the\nhex-encoded public key of your Polkadot account, minus the ',(0,i.kt)("inlineCode",{parentName:"p"},"0x")," prefix."),(0,i.kt)("p",null,'The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-3",src:a(40023).Z})),(0,i.kt)("p",null,"This will prompt you to select a method for unlocking your wallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-4",src:a(54509).Z})),(0,i.kt)("p",null,'After unlocking your wallet, paste the message from Polkadot-JS into the "Message" box.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-5",src:a(41132).Z})),(0,i.kt)("p",null,'When you click "Sign Message" you will get a JSON output like the one below:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-6",src:a(75262).Z})),(0,i.kt)("p",null,'Copy and paste the JSON output of the signed message from MyCrypto into the input box on the\nPolkadot-JS UI and click "Confirm Claim."'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-7",src:a(94317).Z})," ",(0,i.kt)("img",{alt:"claim-8",src:a(17295).Z})),(0,i.kt)("p",null,'A green box will appear telling you the amount to claim with a "Claim" button to make the claim.\nClick on the "Claim" button and click "Submit (no signature)" to complete the claim.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-9",src:a(48758).Z})),(0,i.kt)("p",null,"If this claim succeeded, then you will see a success message and your DOT will be in the account\nthat you claimed to."),(0,i.kt)("h4",{id:"verifying-your-claim"},"Verifying your Claim"),(0,i.kt)("p",null,"After you make an on-chain claim for DOT, your balance should be updated on the Polkadot UI\nimmediately."),(0,i.kt)("p",null,"Having trouble? Get support in the DOT ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:web3.foundation?via=web3.foundation&via=matrix.org&via=matrix.parity.io"},"Claims Support")," channel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-10",src:a(87342).Z})),(0,i.kt)("p",null,"Congratulations, you have now completed the process for claiming and signing for your DOT."),(0,i.kt)("h3",{id:"third-party-claims-processes"},"Third Party Claims Processes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We do not recommend using third-party apps or processes to perform your claim or acquire DOT.")),(0,i.kt)("p",null,"Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot\nrecommend using any third party apps to do so. Manually specifying your transaction data, as\nspecified in our claims process, is the only way to be certain you will receive your allocation."),(0,i.kt)("h2",{id:"attesting-to-a-statement"},"Attesting to a Statement"),(0,i.kt)("p",null,"If you've already made a pre-genesis claim, you still have to agree to a statement using your\nPolkadot account."),(0,i.kt)("h2",{id:"using-polkadot-js-apps"},"Using Polkadot-JS Apps"),(0,i.kt)("h3",{id:"what-you-will-need-1"},"What you will need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your Polkadot account unlocked on Polkadot-JS Apps UI.")),(0,i.kt)("p",null,"You will be sending a free transaction from your Polkadot account on the Polkadot-JS Apps UI. Once\nyou make this transaction you will have the tokens available in your account."),(0,i.kt)("h3",{id:"go-to-polkadot-js-apps"},"Go to Polkadot-JS Apps"),(0,i.kt)("p",null,"Proceed to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"polkadot-js Apps"),'. You will need to grant Apps access to your account in\nsome way. One way would be to go to the Accounts page and "create" a new account, replacing the\ngenerated seed or mnemonic with the one belonging to your account. The other way is by using the\nPolkadot-JS extension and entering your seed or mnemonic there, which is generally safer than\nentering it directly to the Apps page.'),(0,i.kt)("h3",{id:"make-the-attestation"},"Make the Attestation"),(0,i.kt)("p",null,'After entering your account, you should see a red counter appear on the "Claim Tokens" tab on the\nleft navigation drawer.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-1",src:a(36640).Z})),(0,i.kt)("p",null,'Click on the "Claim Tokens" tab and you will see a large notification at the top of the page that\ntells you that you need to sign an attestation.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-2",src:a(45446).Z})),(0,i.kt)("p",null,"The notification will display one or more Polkadot addresses that you have loaded in Polkadot-JS\nthat you need to sign. Select a Polkadot account with a claim using the drop down selection. If you\ndon't see a notification or don't see the selector, please double check that the account has been\nloaded into Polkadot-JS and that it has already claimed during the preclaim period. As always, feel\nfree to reach out for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:web3.foundation?via=web3.foundation&via=matrix.org&via=matrix.parity.io"},"Claims Support")," channel."),(0,i.kt)("p",null,'Click "Continue" and you will see a green box appear on the right.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-3",src:a(50559).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-4",src:a(96602).Z})),(0,i.kt)("p",null,'Click on "I Agree" and then "Sign and Submit" to make your free attest transaction. When the\ntransaction is included in the block, you will see a green success box appear in the upper right\ncorner and the DOT will be in your account.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"claim-attest-5",src:a(98417).Z})),(0,i.kt)("h2",{id:"using-parity-signer"},"Using Parity Signer"),(0,i.kt)("h3",{id:"what-you-will-need-2"},"What you will need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parity Signer"),(0,i.kt)("li",{parentName:"ul"},"Your Polkadot account linked to Polkadot-JS Apps UI")),(0,i.kt)("p",null,"Before claiming, you should import your Polkadot address on Parity Signer to the Polkadot-JS Apps.\nAll operations will use Parity Signer to sign the transaction, but will broadcast it via the\nPolkadot-JS Apps remote node. If you do not have a Polkadot address, please follow the instructions\non the Parity Signer section in the ",(0,i.kt)("a",{parentName:"p",href:"learn-account-generation"},"account generation")," page for generating a new Polkadot\naccount."),(0,i.kt)("h3",{id:"go-to-polkadot-js-apps-1"},"Go to Polkadot-JS Apps"),(0,i.kt)("p",null,"Proceed to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Polkadot-JS Apps"),". You will need to import your address on Parity Signer to\nthe Accounts page first."),(0,i.kt)("h3",{id:"make-the-attestation-1"},"Make the Attestation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-1",src:a(49293).Z})),(0,i.kt)("p",null,'Click "Add via Qr" on the right side.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-2",src:a(48210).Z})),(0,i.kt)("p",null,'Open Parity Signer and choose "Polkadot" network.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-1",src:a(98038).Z})),(0,i.kt)("p",null,"Select the address that you have claimed DOT to during pre-genesis."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-2",src:a(95473).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-3",src:a(23815).Z})),(0,i.kt)("p",null,"Your address will be displayed in QR code format. You can move the QR code to the camera so that the\nPolkadot-JS Apps can decode it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-3",src:a(49048).Z})),(0,i.kt)("p",null,'Once decoded successfully, input the name for your address and click "Create".'),(0,i.kt)("p",null,'You will notice that the digit beside the "Claim Tokens" menu increased by 1. It means the number of\naddresses on the Accounts page that need to do attestations.'),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Claim Tokens")," page and and you will see a large\nnotification at the top of the page that tells you that you need to sign an attestation."),(0,i.kt)("p",null,"Select the Polkadot account that you just have imported with a claim using the drop-down selection.\nIf you don't see a notification or don't see the selector, please double check that the account has\nbeen loaded into Polkadot-JS and that it has already claimed during the pre-genesis period. As\nalways, feel free to reach out for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://riot.im/app/#/room/!kwIkVteRpPRjjTyvTe:web3.foundation?via=web3.foundation&via=matrix.org&via=matrix.parity.io"},"Claims Support")," channel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-5",src:a(66491).Z})),(0,i.kt)("p",null,'Then click "Continue" and you will see a green box appear on the right.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-6",src:a(2854).Z})),(0,i.kt)("p",null,'Click on "I Agree" and then "Sign via Qr".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-7",src:a(47698).Z})),(0,i.kt)("p",null,"Now you need to sign the transaction using the Parity Signer with your Polkadot address."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-claim-8",src:a(73979).Z})),(0,i.kt)("p",null,'First, you need to press the "QR Scanner" on the Parity Signer to scan the QR code that\'s shown on\nthe authorize transaction window to generate the raw transaction. Next, you may be required to input\nthe PIN on the Parity Signer to generate the signed transaction as a QR code. Then move the QR code\nto the camera on the Polkadot-JS Apps to continue.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ps-3r",src:a(65141).Z})),(0,i.kt)("p",null,"When the transaction is included in the block, you will see a green success box appear in the upper\nright corner and the DOT will be in your account."))}d.isMDXComponent=!0},18151:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-1-ff5dcd3fbeada2b002501f292f4da02a.jpg"},87342:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-10-799e90c9d873c80183348f9ad68a9274.jpg"},47978:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-2-1-9e2e871503afb23603193006d447f883.jpg"},57974:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-2-e7b2ee36681cc0f0b566f953eb422f7a.jpg"},40023:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-3-16e81a0109a873f0c030034f674cec8d.png"},54509:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-4-170ea8013244afa3df6e0375b6040a60.png"},41132:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-5-835b431e8fafffc99a3c40a9617e744e.png"},75262:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-6-e0dd078dae274a278d1f589c8587a7a9.png"},94317:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-7-0bdce1a43a529c84836dbcab7c052b58.jpg"},17295:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-8-8cba48113c1e4857cc8d8c54ce77ddda.jpg"},48758:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/claim-9-ca5c62e0f1b162882420784ad507e545.jpg"},36640:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/new-attest-1-6d7b059e5dfdea0c8b2c7c2c73d1bb64.jpg"},45446:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/new-attest-2-cfb172078aa6bcfc74dd27f163b250a5.png"},50559:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/new-attest-3-e52739ba1873b5fbde59569d86aafa49.jpg"},96602:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/new-attest-4-6164bf84e415c6426f870e2e1fe2c2ef.jpg"},98417:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/new-attest-5-e889111ec8f084ebb3bfcf4f570addb3.jpg"},98038:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-01-2438560c82f3a159c66613a40e202527.jpg"},95473:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-02-3cbd3c4add4560521159584d7110aa0c.jpg"},23815:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-03-62a975f1a0f3155ff332dc0dedf6b65e.jpg"},65141:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-3r-875c5cf5cdd8c56183aa8f68dda0bffc.jpg"},49293:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-1-7dbe2c2efeca52c0ab338f4acab543aa.jpg"},48210:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-2-cf46d1b92ae8dd3a25b752a8e7515cd0.png"},49048:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-3-9ce4a32ed8f395200ac959a213ee2d64.png"},66491:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-5-aee0f04744f1a5f6caeaac255461ac86.png"},2854:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-6-35bc3613252a7c2b5df256be317305a4.png"},47698:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-7-0e7824e2b64338eb803396640b0325c3.png"},73979:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/ps-claim-8-2276ccfcf6ba99246529201f34cc63e6.png"}}]);