"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[4608],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),b=a,m=f["".concat(i,".").concat(b)]||f[b]||s[b]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={title:"/balance/{walletKey}"},i="/balance/",u={unversionedId:"Api/REST/Wallet/balance",id:"Api/REST/Wallet/balance",title:"/balance/{walletKey}",description:"Request Type: GET",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Api/REST/Wallet/balance.md",sourceDirName:"Api/REST/Wallet",slug:"/Api/REST/Wallet/balance",permalink:"/Api/REST/Wallet/balance",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Wallet/balance.md",tags:[],version:"current",frontMatter:{title:"/balance/{walletKey}"},sidebar:"api",previous:{title:"/info/reserve",permalink:"/Api/REST/Blockchain/inforeserve"},next:{title:"/send",permalink:"/Api/REST/Transaction/send"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Response",id:"response",level:2}],f={toc:s};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"balancewalletkey"},"/balance/{walletKey}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Type: GET")),(0,l.kt)("p",null,"Returns the balance information of the wallet to which the wallet key is given."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wallet Key",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A 39-character wallet key.")))),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Wallet": "NODcT4M7P5aDap1ieUUq4nXsCjypgTUg8vHaxoG",\n  "Balance": {\n    "NOTUS": {\n      "20220830211048003": "2000000000",\n      "20220831003826802": "2000000000"\n    }\n  },\n  "RowNo": 73,\n  "UID": "1348b9e34358000c88dbc28438baf0ef8a33bf3c0b0b6ba03fd20492f075f1347d3bc842bca8c5ea1dd1c63a88"\n}\n')))}b.isMDXComponent=!0}}]);