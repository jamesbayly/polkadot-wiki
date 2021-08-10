(self.webpackChunk=self.webpackChunk||[]).push([[2059],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=h(a),u=o,m=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98366:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>h,toc:()=>d,default:()=>p});var n=a(22122),o=a(19756),i=(a(67294),a(3905)),r=["components"],l={id:"learn-auction",title:"Parachain Slots Auction",sidebar_label:"Parachain Slots Auction"},s=void 0,h={unversionedId:"learn-auction",id:"learn-auction",isDocsHomePage:!1,title:"Parachain Slots Auction",description:"For a parachain to be added to Polkadot it must inhabit one of the available",source:"@site/../docs/learn-auction.md",sourceDirName:".",slug:"/learn-auction",permalink:"/docs/learn-auction",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-auction.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628597410,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"learn-auction",title:"Parachain Slots Auction",sidebar_label:"Parachain Slots Auction"},sidebar:"docs",previous:{title:"Common Good Parachains",permalink:"/docs/learn-common-goods"},next:{title:"Parachain Crowdloans",permalink:"/docs/learn-crowdloans"}},d=[{value:"Mechanics of a Candle auction",id:"mechanics-of-a-candle-auction",children:[]},{value:"Rationale",id:"rationale",children:[]},{value:"Polkadot Implementation",id:"polkadot-implementation",children:[]},{value:"Bidding",id:"bidding",children:[{value:"Examples",id:"examples",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"Why doesn&#39;t everyone bid for the max length?",id:"why-doesnt-everyone-bid-for-the-max-length",children:[]},{value:"How does this mechanism help ensure parachain diversity?",id:"how-does-this-mechanism-help-ensure-parachain-diversity",children:[]},{value:"Why is randomness difficult on blockchains?",id:"why-is-randomness-difficult-on-blockchains",children:[]},{value:"Are there other ways of acquiring a slot besides the candle auction?",id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction",children:[]}]},{value:"Resources",id:"resources",children:[]}],c={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," to be added to Polkadot it must inhabit one of the available\nparachain slots. A parachain slot is a scarce resource on Polkadot and only a limited number will be\navailable. As parachains ramp up there may only be a few slots that are unlocked every few months.\nThe goal is to eventually have 100 parachain slots available on Polkadot\n(these will be split between parachains and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathread pool"),"). If a parachain wants to have guaranteed block inclusion at\nevery Relay Chain block, it must acquire a parachain slot."),(0,i.kt)("p",null,"The parachain slots will be sold according to an unpermissioned\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Candle_auction"},"candle auction")," that has been slightly modified to be\nsecure on a blockchain."),(0,i.kt)("h2",{id:"mechanics-of-a-candle-auction"},"Mechanics of a Candle auction"),(0,i.kt)("p",null,"Candle auctions are a variant of open auctions where bidders submit bids that are increasingly\nhigher and the highest bidder at the conclusion of the auction is considered the winner."),(0,i.kt)("p",null,'Candle auctions were originally employed in 16th century for the sale of ships and get their name\nfrom the "inch of a candle" that determined the open period of the auction. When the flame\nextinguished and the candle went out, the auction would suddenly terminate and the standing bid at\nthat point would win.'),(0,i.kt)("p",null,"When candle auctions are used online, they require a random number to decide the moment of\ntermination."),(0,i.kt)("p",null,"Parachain slot auctions will differ slightly from a normal candle auction in that it does not use\nthe random number to decide the duration of its opening phase. Instead, it has a known open phase\nand will be retroactively determined (at the normal close) to have ended at some point in the past\nduring the ending phase. So during the open phase, bids will continue to be accepted, but later bids\nhave higher probability of losing since the retroactively determined close moment may be found to\nhave preceded the time that a bid was submitted."),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"The open and transparent nature of blockchain systems opens attack vectors that are non-existent in\ntraditional auction formats. Normal open auctions in particular can be vulnerable to ",(0,i.kt)("em",{parentName:"p"},"auction\nsniping")," when implemented over the internet or on a blockchain."),(0,i.kt)("p",null,"Auction sniping takes place when the end of an auction is known and bidders are hesitant to bid\ntheir true price early, in hopes of paying less than they actually value the item."),(0,i.kt)("p",null,"For example, Alice may value an item at auction for 30 USD. She submits an initial bid of 10 USD in\nhopes of acquiring the items at a lower price. Alice's strategy is to place incrementally higher\nbids until her true value of 30 USD is exceeded. Another bidder Eve values the same item at 11 USD.\nEve's strategy is to watch the auction and submit a bid of 11 USD at the last second. Alice will\nhave no time to respond to this bid before the close of the auction and will lose the item. The\nauction mechanism is sub-optimal because it has not discovered the true price of the item and the\nitem has not gone to the actor who valued it the most."),(0,i.kt)("p",null,"On blockchains this problem may be even worse, since it potentially gives the producer of the block\nan opportunity to snipe any auction at the last concluding block by adding it themselves and/or\nignoring other bids. There is also the possibility of a malicious bidder or a block producer trying\nto ",(0,i.kt)("em",{parentName:"p"},"grief")," honest bidders by sniping auctions."),(0,i.kt)("p",null,"For this reason, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vickrey_auction"},"Vickrey auctions"),", a variant of\nsecond price auction in which bids are hidden and only revealed in a later phase, have emerged as a\nwell-regarded mechanic. For example, it is implemented as the mechanism to auction human readable\nnames on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ens"},"ENS"),". The Candle auction is another solution that does not need the two-step\ncommit and reveal schemes (a main component of Vickrey auctions), and for this reason allows smart\ncontracts to participate."),(0,i.kt)("p",null,"Candle auctions allow everyone to always know the states of the bid, but not when the auction will\nbe determined to have ended. This helps to ensure that bidders are willing to bid their true bids\nearly. Otherwise, they might find themselves in the situation that the auction was determined to\nhave ended before they even bid."),(0,i.kt)("h2",{id:"polkadot-implementation"},"Polkadot Implementation"),(0,i.kt)("p",null,"Polkadot will use a ",(0,i.kt)("em",{parentName:"p"},"random beacon")," based on the VRF that's used also in other places of the\nprotocol. The VRF will provide the base of the randomness, which will retroactively determine the\nend-time of the auction."),(0,i.kt)("p",null,"The slot durations are capped to 2 years and divided into 3-month periods\n; Parachains may lease a slot for any\ncombination of periods of the slot duration. Parachains may lease more than one slot over time,\nmeaning that they could extend their lease to Polkadot past the maximum duration by leasing a\ncontiguous slot."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Individual parachain slots are fungible. This means that parachains do not need to always\ninhabit the same slot, but as long as a parachain inhabits any slot it can continue as a\nparachain.")),(0,i.kt)("h2",{id:"bidding"},"Bidding"),(0,i.kt)("p",null,"Parachains, or parachain teams, can bid in the auction by specifying the slot range that they want\nto lease as well as the number of tokens they are willing to reserve. Bidders can be either ordinary\naccounts, or use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloan functionality")," to source tokens from the\ncommunity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Parachain slots at genesis\n\n       --3 months--\n       v          v\nSlot A |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot B |     1    |     2     |     3     |     4     |     5     |     6    |     7     |     8     |     9     |...\nSlot C |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot D |__________|     1     |     2     |     3     |     4     |     5    |     6     |     7     |     8     |     9     |...\nSlot E |__________|___________|     1     |     2     |     3     |     4    |     5     |     6     |     7     |     8     |     9     |...\n       ^                                                                                             ^\n       ---------------------------------------------max lease-----------------------------------------\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Each period of the range 1 - 4 represents a\n{{ polkadot: 3-month duration for a total of 2 years :polkadot }}\n{{ kusama: 6-week duration for a total of 1 year :kusama }} ")),(0,i.kt)("p",null,"Bidders will submit a configuration of bids specifying the token amount they are willing to bond and\nfor which periods. The slot ranges may be any of the periods 1 - ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the number of\nperiods available for a slot (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," will be 8 for both Polkadot and Kusama)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note: If you bond tokens with a parachain slot, you cannot stake with those tokens. In this\nway, you pay for the parachain slot by forfeiting the opportunity to earn staking rewards.")),(0,i.kt)("p",null,"A bidder configuration for a single bidder may look like the following pseudocode example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bids = [\n  {\n    range: [1, 2, 3, 4, 5, 6, 7, 8],\n    bond_amount: 300,\n  },\n  {\n    range: [1, 2, 3, 4],\n    bond_amount: 777,\n  },\n  {\n    range: [2, 3, 4, 5, 6, 7],\n    bond_amount: 450,\n  },\n];\n")),(0,i.kt)("p",null,"The important concept to understand from this example is that bidders may submit different\nconfigurations at different prices (",(0,i.kt)("inlineCode",{parentName:"p"},"bond_amount"),"). However, only one of these bids would be\neligible to win exclusive of the others."),(0,i.kt)("p",null,"The winner selection algorithm will pick bids that may be non-overlapping in order to maximize the\namount of tokens held over the entire lease duration of the parachain slot. This means that the\nhighest bidder for any given slot lease period might not always win (see the\n",(0,i.kt)("a",{parentName:"p",href:"#examples"},"example below"),")."),(0,i.kt)("p",null,"A random number, which is based on the VRF used by Polkadot, is determined at each block.\nAdditionally, each auction will have a threshold that starts at 0 and increases to 1. The random\nnumber produced by the VRF is examined next to the threshold to determine if that block is the end\nof the auction withing the so-called ",(0,i.kt)("em",{parentName:"p"},"ending period"),". Additionally, the VRF will pick a block from\nthe last epoch to take the state of bids from (to mitigate some types of attacks from malicious\nvalidators)."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"There is one parachain slot available."),(0,i.kt)("p",null,"Charlie bids ",(0,i.kt)("inlineCode",{parentName:"p"},"75")," for the range 1 - 8."),(0,i.kt)("p",null,"Dave bids ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," for the range 5 - 8."),(0,i.kt)("p",null,"Emily bids ",(0,i.kt)("inlineCode",{parentName:"p"},"40")," for the range 1 - 4."),(0,i.kt)("p",null,"Let's calculate each bidder's valuation according to the algorithm. We do this by multiplying the\nbond amount by the number of periods in the specified range of the bid."),(0,i.kt)("p",null,"Charlie - 75 ","*"," 8 = 600 for range 1 - 8"),(0,i.kt)("p",null,"Dave - 100 ","*"," 4 = 400 for range 5 - 8"),(0,i.kt)("p",null,"Emily - 40 ","*"," 4 = 160 for range 1 - 4"),(0,i.kt)("p",null,"Although Dave had the highest bid in accordance to token amount, when we do the calculations we see\nthat since he only bid for a range of 4, he would need to share the slot with Emily who bid much\nless. Together Dave's and Emily's bids only equal a valuation of ",(0,i.kt)("inlineCode",{parentName:"p"},"560"),"."),(0,i.kt)("p",null,"Charlie's valuation for the entire range is ",(0,i.kt)("inlineCode",{parentName:"p"},"600")," therefore Charlie is awarded the complete range of\nthe parachain slot."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"why-doesnt-everyone-bid-for-the-max-length"},"Why doesn't everyone bid for the max length?"),(0,i.kt)("p",null,"For the duration of the slot the tokens bid in the auction will be locked up. This means that there\nare opportunity costs from the possibility of using those tokens for something else. For parachains\nthat are beneficial to Polkadot, this should align the interests between parachains and the Polkadot\nRelay Chain."),(0,i.kt)("h3",{id:"how-does-this-mechanism-help-ensure-parachain-diversity"},"How does this mechanism help ensure parachain diversity?"),(0,i.kt)("p",null,"The method for dividing the parachain slots into intervals was partly inspired by the desire to\nallow for a greater amount of parachain diversity, and prevent particularly large and well-funded\nparachains from hoarding slots. By making each period a three-month duration but the\noverall slot a 2-year duration , the mechanism can cope with well-funded parachains that will ensure they secure\na slot at the end of their lease, while gradually allowing other parachains to enter the ecosystem\nto occupy the durations that are not filled. For example, if a large, well-funded parachain has\nalready acquired a slot for range 1 - 8, they would be very interested in getting the next slot that\nwould open for 2 - 9. Under this mechanism that parachain could acquire period 5 (since that is the\nonly one it needs) and allow range 2 - 8 of the second parachain slot to be occupied by another."),(0,i.kt)("h3",{id:"why-is-randomness-difficult-on-blockchains"},"Why is randomness difficult on blockchains?"),(0,i.kt)("p",null,"Randomness is problematic for blockchain systems. Generating a random number trustlessly on a\ntransparent and open network in which other parties must be able to verify opens the possibility for\nactors to attempt to alter or manipulate the randomness. There have been a few solutions that have\nbeen put forward, including hash-onions like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/randao/randao"},"RANDAO")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"verifiable random functions")," (VRFs). The\nlatter is what Polkadot uses as a base for its randomness."),(0,i.kt)("h3",{id:"are-there-other-ways-of-acquiring-a-slot-besides-the-candle-auction"},"Are there other ways of acquiring a slot besides the candle auction?"),(0,i.kt)("p",null,"Another way, besides the candle auction, to acquire a parachain slot is through a secondary market\nwhere an actor who has already won a parachain slot can resell the slot along with the associated\ndeposit of tokens that is locked up to another buyer. This would allow the seller to get liquid\ntokens in exchange for the parachain slot and the buyer to acquire the slot as well as the deposited\ntokens."),(0,i.kt)("p",null,"A number of system or common-good parachains may be granted slots by the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governing bodies")," of the Relay Chain. System parachains can be recognized by a\nparachain ID lower than 1_000, and common-good parachains by a parachain ID between 1_000 and 1_999.\nOther parachains will have IDs 2_000 or higher. Such parachains would not have to bid for or renew\ntheir slots as they would be considered essential to the ecosystem's future."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/3-parachain-allocation.html"},"Parachain Allocation")," -\nW3F research page on parachain allocation that goes more in depth to the mechanism.")))}p.isMDXComponent=!0}}]);