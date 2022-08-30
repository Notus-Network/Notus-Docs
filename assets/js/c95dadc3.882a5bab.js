"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[8733],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"/transaction/status/{uuid}"},u="/transaction/status/",c={unversionedId:"Api/REST/Transaction/transactionstatus",id:"Api/REST/Transaction/transactionstatus",title:"/transaction/status/{uuid}",description:"Request Type: GET",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Api/REST/Transaction/transactionstatus.md",sourceDirName:"Api/REST/Transaction",slug:"/Api/REST/Transaction/transactionstatus",permalink:"/Api/REST/Transaction/transactionstatus",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Transaction/transactionstatus.md",tags:[],version:"current",frontMatter:{title:"/transaction/status/{uuid}"},sidebar:"api",previous:{title:"/send",permalink:"/Api/REST/Transaction/send"},next:{title:"/airdrop/{walletKey}",permalink:"/Api/REST/Transaction/airdrop"}},p={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Response",id:"response",level:2}],f={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transactionstatusuuid"},"/transaction/status/{uuid}"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request Type: GET")),(0,o.kt)("p",null,"Indicates the process state for which the UUID value is given."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tx UUID",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A 90-character uuid value.")))),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"78\n")))}d.isMDXComponent=!0}}]);