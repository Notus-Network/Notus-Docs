"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[1179],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"/balance/{walletKey}"},c="/balance/",u={unversionedId:"Api/REST/Wallet/balance",id:"Api/REST/Wallet/balance",title:"/balance/{walletKey}",description:"Request Tipi: GET",source:"@site/docs/Api/REST/Wallet/balance.md",sourceDirName:"Api/REST/Wallet",slug:"/Api/REST/Wallet/balance",permalink:"/en/Api/REST/Wallet/balance",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Wallet/balance.md",tags:[],version:"current",frontMatter:{title:"/balance/{walletKey}"},sidebar:"api",previous:{title:"/info/reserve",permalink:"/en/Api/REST/Blockchain/inforeserve"},next:{title:"/send",permalink:"/en/Api/REST/Transaction/send"}},p={},s=[{value:"Parametreler",id:"parametreler",level:2},{value:"Response G\xf6vdesi",id:"response-g\xf6vdesi",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"balancewalletkey"},"/balance/{walletKey}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Request Tipi: GET")),(0,l.kt)("p",null,"C\xfczdan anahtar\u0131n\u0131n verildi\u011fi c\xfczdan\u0131n bakiye bilgisini verir."),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Wallet Key",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"38 haneli bir c\xfczdan anahtar\u0131.")))),(0,l.kt)("h2",{id:"response-g\xf6vdesi"},"Response G\xf6vdesi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Wallet": "NRHf747BCHuFvpzDWpxrXvKm1hNBruM7eNmUH4",\n  "Balance": {\n    "NOTUS": {\n      "20220721131729188": "0"\n    }\n  },\n  "RowNo": 0,\n  "UID": ""\n}\n')))}m.isMDXComponent=!0}}]);