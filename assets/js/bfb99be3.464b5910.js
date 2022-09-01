"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[577],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2633:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l="/info/genesis",s={unversionedId:"Api/REST/Blockchain/infogenesis",id:"Api/REST/Blockchain/infogenesis",title:"/info/genesis",description:"Request Type: GET",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Api/REST/Blockchain/infogenesis.md",sourceDirName:"Api/REST/Blockchain",slug:"/Api/REST/Blockchain/infogenesis",permalink:"/Api/REST/Blockchain/infogenesis",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Blockchain/infogenesis.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"/currency/list",permalink:"/Api/REST/Blockchain/currencylist"},next:{title:"/info/transfer",permalink:"/Api/REST/Blockchain/infotransfer"}},u={},f=[{value:"Response",id:"response",level:2}],p={toc:f};function b(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infogenesis"},"/info/genesis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request Type: GET")),(0,i.kt)("p",null,"Returns the Genesis block information."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": 10000,\n  "Empty": {\n    "Active": true,\n    "LuckyReward": 50,\n    "TotalSupply": 550000000,\n    "Reward": 2,\n    "Interval": {\n      "Time": 90,\n      "Block": 10\n    },\n    "SlowBlock": {\n      "Active": true,\n      "Count": 10,\n      "Multiply": 10\n    },\n    "Nonce": {\n      "Method": 10,\n      "Type": 1,\n      "Difficulty": 1\n    }\n  },\n  "Reserve": {\n    "Value": 100000000000000000,\n    "Total": 0,\n    "Digit": 0,\n    "Decimal": 9\n  },\n  "CoinInfo": {\n    "Tag": "NOTUS",\n    "Name": "Notus Coin",\n    "Logo": {\n      "Used": true,\n      "Base64": "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",\n      "Url": "",\n      "Source": ""\n    }\n  },\n  "Supply": {\n    "Decrease": 3,\n    "Type": 1,\n    "Modular": 4000\n  },\n  "Fee": {\n    "Transfer": {\n      "Fast": 400,\n      "Common": 150,\n      "NoName": 1000,\n      "ByPieces": 4000\n    },\n    "Token": {\n      "Generate": 500000,\n      "Update": 900000\n    },\n    "Data": 1500\n  },\n  "Info": {\n    "Creation": "2022-08-30T07:25:37.682",\n    "Creator": "NODCNaXc2hJcsCS4Wuo85W8PQQ9umgf9kms7bDF",\n    "CurveName": "prime256v1",\n    "EncryptKeyPair": false\n  },\n  "Premining": {\n    "PreSeed": {\n      "Volume": 1000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 24,\n      "PercentPerMonth": 5,\n      "Wallet": "NODcLkeUkCfoatkCrR9krjkndMLNzSfRdJuER6S",\n      "PublicKey": "d4c82794686fdb88f1106d8d3367826939f44427be64dfd456cabbc97aa079094b7256ecd0e2e81bd665352bcb484bc5d56ec46ccf0fe805fb3d2a3eb2c74535"\n    },\n    "Private": {\n      "Volume": 2000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 18,\n      "PercentPerMonth": 5,\n      "Wallet": "NODZdHPSkDxoKLQyvSxRzaxXjok7GxfjxgjnBWT",\n      "PublicKey": "9392687e4f50685104869d02075dd43ea22c38823b7342f5dd4c1d79bab1fb6841a7e885e6689d91b873739122cc44bd245b60f7c0febfe77b27ff3ce2bf82da"\n    },\n    "Public": {\n      "Volume": 10000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 12,\n      "PercentPerMonth": 5,\n      "Wallet": "NODcJG958rckJkaN2rLJbn8H4NotzPEyiPoZrdR",\n      "PublicKey": "73a4fb34f411fc72d26ad2247b5384419447b4dd20ab71b31efbafb4e12dace875b0b6624ffb40b53cc008fbc5ca5efd6fc9a88afebd6b5edb2f5789a7161bfa"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);