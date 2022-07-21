"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[9705],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),b=o,A=f["".concat(u,".").concat(b)]||f[b]||p[b]||i;return t?r.createElement(A,a(a({ref:n},l),{},{components:t})):r.createElement(A,a({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3475:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},u="/info/genesis",s={unversionedId:"Api/REST/Blockchain/infogenesis",id:"Api/REST/Blockchain/infogenesis",title:"/info/genesis",description:"Request Tipi: GET",source:"@site/docs/Api/REST/Blockchain/infogenesis.md",sourceDirName:"Api/REST/Blockchain",slug:"/Api/REST/Blockchain/infogenesis",permalink:"/en/Api/REST/Blockchain/infogenesis",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Blockchain/infogenesis.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"/currency/list",permalink:"/en/Api/REST/Blockchain/currencylist"},next:{title:"/info/transfer",permalink:"/en/Api/REST/Blockchain/infotransfer"}},l={},p=[{value:"Response G\xf6vdesi",id:"response-g\xf6vdesi",level:2}],f={toc:p};function b(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infogenesis"},"/info/genesis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request Tipi: GET")),(0,i.kt)("p",null,"Genesis blok bilgisini verir."),(0,i.kt)("h2",{id:"response-g\xf6vdesi"},"Response G\xf6vdesi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": 0,\n  "Empty": {\n    "Active": true,\n    "Interval": { "Time": 90, "Block": 10 },\n    "SlowBlock": { "Active": true, "Count": 10, "Multiply": 10 },\n    "Nonce": { "Method": 10, "Type": 1, "Difficulty": 1 }\n  },\n  "Reserve": {\n    "Value": 100000000000000000,\n    "Total": 0,\n    "Digit": 0,\n    "Decimal": 9\n  },\n  "CoinInfo": {\n    "Tag": "NOTUS",\n    "Name": "Notus Coin",\n    "Logo": {\n      "Used": true,\n      "Base64": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP\\u002BgvaeTAAAGsklEQVRogdWaeWzURRTHP/Pr0pJCESmCRzjKIZcQOQwNgcilBYJRua8ShbaIAioBFUExGG80AoLtUkAsGEhFRRCIQEkgKggYRE6Ru1xa2AKllrb7G/\\u002BY3e4u/e3u/HbL4TfZ/LLze2/mvXnz3pt5vxFUEcYiGxnQQ0AnoAXQGEgEanpIioCLEo4L\\u002BBPYCWxxIk5VxfgiGuY0ZJKAVAEjgQcj7OYwsNyAnEzEiUhliUiRNGQ7A6YAI4CYSAe/AaaAdSbMWojYaZfZliJpyPoGfASMsstrE7kmTMxGXNBl0BZmHHK4hAVA7YhEsw\\u002BXgPFZiJU6xGEVGYyMrQOfSUiPXjb7kJBZCC/mIkpD0YVUJBVZIx5WSUipWvHsQUBeLDw9D3ElBI01xiATHLAR6HxTpLMJAdtj4LEFiCKr94ZV42BkbDXI5Q5RAkBCshtWT0TGWb23VMTjE7d1OVlBQs8S\\u002BNTqXaWllY4cIkArUtwuSBi1ELHcvy1AEU\\u002BeOMStC7GR4jLQyok4520IWFoGzObOVwLgLuA9/4YKi2QgOwC7CBLJ6jWHgR/C1izYvyFyCeLvhpa9oMHDUKMOlBbDpVNwZBvk7wEptbuSAtpnIX4HcPi9eD2YEgDtB0C7/tAmBX54Gza8b2tQhIAuz0LXNKhWHUwTpFs9myRDh0FwZi9s/BgKjut16ZF5qPcPacgkA/4iSBQD6DsN\\u002Bs8EaYLphr1rYNk4KLkafkQjRlmzZW8l/Ok9cCgPLp8FRxzc3wZa9ABHdbheBGtmKhoNmG5osghx0kBJPzqUEqBmX5pw6je4fg3a9IGXNqolFw49JyklSq7A11Ng6RjYsUwps289/DgbFo2CE78qxfpMg1r1tRQxYtQGtkL4EeE4pFTqH9wMc/uodV03CSaug4f6BudLbAzJqeAuhdzJSngrFLtg9Rtw5g\\u002BIjYfk0VqKgDoLYWQgG6JxKJKm\\u002BiGV2T/ppRw0Nh5GZsLjU0BY2LTjIPXcsxpOhDllmOWQN1c9mySrwKCBVhnIhoaAXlrkHot4HfzaRVg4DLZlqbZHx0OqE6rXCmRLSlYOvfd7rVFwnYbzh9SkPdBWj0dAd0NCRy09pJ9VPDDLYe0sWDFB\\u002BU2zrjD\\u002BW7ivtY8moZ5y8AtH9IQCKDimlK\\u002BZqEcvoaOBKhRoKeJvEX/sXQvOIXDxJNSqB898Ae2eUO\\u002BqxSmhyv7VEwpUbpFu5fg6ENDCAJroEPv7iBXOH4KFQ\\u002BHozxDjgP5vqmjlzRd2YJoePjM8LUqkpga6WxIZvvPiQlg\\u002BHn5aoqz3yHBf0rMFqfhsJNzaBr66U\\u002Bi\\u002BNTuXJmyZB6tnQOk1n0USG2sLpZKuaUuRhJBJMKBzaa/zg5tgxSSfRYbOgebd9MeSboIuYysYqAqgRu/2O3ed9lnEEQcpr0K3DJWOQw5lc9KAqwZQqEMpNXzEks9jkR3LFG/bftBvOlRPCMVUOdSHQaEBHNOTyLYDAj6L7Fimck7JVZXoBnwA9zQNMlSIUG8FAUcNVO1VS6BoLAJwchesekXt0\\u002BJrQ78Z1n7jtYaN8HvYELBblzoai3hx\\u002BRx8Nx2ObQfDgC5j1AbR32\\u002B8FtH1RwG7DQmbdYi9PmLH2cE6j5SVqBC9cyW4y9TWpvfLvn1ahUU0x3JDnuH5PhF\\u002BeUVgkYoAYZHZpYR96yBvjjpMJSZBylRIbESlDWoYHMhG5BseGb8KR10VPmKFs/th/btQmA9xCdD9BXVYs\\u002BEjy8FzZo\\u002BBL02YSahToscidRqqYyl4Zkze8PRrd8Tp7bWKCtRZvdMwFdFq3avtI263vyKZiBPpyG8EDArGYXpmtmkXdcbwzrTWU2PTWF4KO3KgWTdo/bhvzDDIXYQ4WaGIB\\u002B8AAwlSSTm4Se2XhOHbBXudX/ovO4v2Ar1MhZRwZCu48iGpM5zZF5rc9KttBQidjlwqVCHi/4DFTsRY758An4iBqYDrlotkH64yeM2/IUCRTMTfwLhbKlJkmLAE8Y9/Q6Uo5UTkSsi8dTLZxnwnolK6sAy3AiYBUVR4bxo2u2Cy1QtLRZyIMgcMFrD95splC7844KlgH0WDJsAFiKJi6M2dYZnN5ZAS7PshhKn35iCuueDJ2\\u002Bwz84G\\u002BixEhy\\u002BV2LgwMlfA5oFfIjB6XgOeciFwdYu3iQxZipRuaAXMBuwUeO5BAjqE\\u002BrWkpARHeJ8lAtkUlzyq/VOOGt7IReoc9P0R1MWYsspEDUqVSqFWE3RxAHSNyorm7VWU3fJ5HNnBDDxM6Cd/Fs7oEXjwrEHBcwmEBu92Ql43Ir4rx/wPjwuHaWjjgkwAAAABJRU5ErkJggg==",\n      "Url": "",\n      "Source": ""\n    }\n  },\n  "Supply": { "Decrease": 3, "Type": 1, "Modular": 4000 },\n  "Fee": {\n    "Transfer": {\n      "Fast": 400,\n      "Common": 150,\n      "NoName": 1000,\n      "ByPieces": 4000\n    },\n    "Token": { "Generate": 500000, "Update": 900000 },\n    "Data": 1500\n  },\n  "Info": {\n    "Creation": "2022-07-19T23:35:38.1127478+03:00",\n    "Creator": "NRCn4jNmkbwNFLsjrQfVRinHV6KMgqHHrQTLAB",\n    "CurveName": "prime256v1",\n    "EncryptKeyPair": false\n  },\n  "Premining": {\n    "PreSeed": {\n      "Volume": 1000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 24,\n      "PercentPerMonth": 5,\n      "Wallet": "NDZbS6qY9YLHgRJVEbyidwMyppyvhoEnyJ5XiK",\n      "PublicKey": "ab69131a4326b66b5b3412cc42152cc80733fff8bbdeafb4a3bb603a8ea17b51f65538f502b85b5621a21ae8c161e325b49f6261d17964b099456dcb18446fed"\n    },\n    "Private": {\n      "Volume": 2000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 18,\n      "PercentPerMonth": 5,\n      "Wallet": "NDbo61ZzzE93TbWVq3oepK8s9aWfVPowVAX9ge",\n      "PublicKey": "1846c39ce77e57060d4ae2699f822c68ede5e2d3af9f6cac6d2f56aa72c3d40b04ea6840a939871a77f92dca2461297751444f780ebc4c03fcfebf561e2dc58d"\n    },\n    "Public": {\n      "Volume": 10000000,\n      "DecimalContains": false,\n      "HowManyMonthsLater": 12,\n      "PercentPerMonth": 5,\n      "Wallet": "NDXXh9NMch7QdKWCVtot5jK7nrA6Si6HZfoUaD",\n      "PublicKey": "4af0ef72b001af2193e282e5515e0a8eb16ea9dd770a8c5c42384b222e0283dbcc186bb5b3349221358fcb218b3b4bb2d5fa8433de52ca050bac2abfc0b6ded0"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);