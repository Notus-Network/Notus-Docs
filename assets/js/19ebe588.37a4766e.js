"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[4166],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return A}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},B=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),B=l(r),A=i,f=B["".concat(a,".").concat(A)]||B[A]||p[A]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function A(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=B;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}B.displayName="MDXCreateElement"},4269:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return A},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),u=["components"],c={},a="/currency/list",l={unversionedId:"Api/REST/Blockchain/currencylist",id:"Api/REST/Blockchain/currencylist",title:"/currency/list",description:"Request Tipi: GET",source:"@site/docs/Api/REST/Blockchain/currencylist.md",sourceDirName:"Api/REST/Blockchain",slug:"/Api/REST/Blockchain/currencylist",permalink:"/Api/REST/Blockchain/currencylist",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/Blockchain/currencylist.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"/block/status/{uuid}",permalink:"/Api/REST/Blockchain/status"},next:{title:"/info/genesis",permalink:"/Api/REST/Blockchain/infogenesis"}},s={},p=[{value:"Response G\xf6vdesi",id:"response-g\xf6vdesi",level:2}],B={toc:p};function A(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},B,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"currencylist"},"/currency/list"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request Tipi: GET")),(0,o.kt)("p",null,"B\xfct\xfcn kullan\u0131labilir para birimlerini verir."),(0,o.kt)("h2",{id:"response-g\xf6vdesi"},"Response G\xf6vdesi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "ReserveCurrency": true,\n    "Tag": "NOTUS",\n    "Name": "Notus Coin",\n    "Logo": {\n      "Used": true,\n      "Base64": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP\\u002BgvaeTAAAGsklEQVRogdWaeWzURRTHP/Pr0pJCESmCRzjKIZcQOQwNgcilBYJRua8ShbaIAioBFUExGG80AoLtUkAsGEhFRRCIQEkgKggYRE6Ru1xa2AKllrb7G/\\u002BY3e4u/e3u/HbL4TfZ/LLze2/mvXnz3pt5vxFUEcYiGxnQQ0AnoAXQGEgEanpIioCLEo4L\\u002BBPYCWxxIk5VxfgiGuY0ZJKAVAEjgQcj7OYwsNyAnEzEiUhliUiRNGQ7A6YAI4CYSAe/AaaAdSbMWojYaZfZliJpyPoGfASMsstrE7kmTMxGXNBl0BZmHHK4hAVA7YhEsw\\u002BXgPFZiJU6xGEVGYyMrQOfSUiPXjb7kJBZCC/mIkpD0YVUJBVZIx5WSUipWvHsQUBeLDw9D3ElBI01xiATHLAR6HxTpLMJAdtj4LEFiCKr94ZV42BkbDXI5Q5RAkBCshtWT0TGWb23VMTjE7d1OVlBQs8S\\u002BNTqXaWllY4cIkArUtwuSBi1ELHcvy1AEU\\u002BeOMStC7GR4jLQyok4520IWFoGzObOVwLgLuA9/4YKi2QgOwC7CBLJ6jWHgR/C1izYvyFyCeLvhpa9oMHDUKMOlBbDpVNwZBvk7wEptbuSAtpnIX4HcPi9eD2YEgDtB0C7/tAmBX54Gza8b2tQhIAuz0LXNKhWHUwTpFs9myRDh0FwZi9s/BgKjut16ZF5qPcPacgkA/4iSBQD6DsN\\u002Bs8EaYLphr1rYNk4KLkafkQjRlmzZW8l/Ok9cCgPLp8FRxzc3wZa9ABHdbheBGtmKhoNmG5osghx0kBJPzqUEqBmX5pw6je4fg3a9IGXNqolFw49JyklSq7A11Ng6RjYsUwps289/DgbFo2CE78qxfpMg1r1tRQxYtQGtkL4EeE4pFTqH9wMc/uodV03CSaug4f6BudLbAzJqeAuhdzJSngrFLtg9Rtw5g\\u002BIjYfk0VqKgDoLYWQgG6JxKJKm\\u002BiGV2T/ppRw0Nh5GZsLjU0BY2LTjIPXcsxpOhDllmOWQN1c9mySrwKCBVhnIhoaAXlrkHot4HfzaRVg4DLZlqbZHx0OqE6rXCmRLSlYOvfd7rVFwnYbzh9SkPdBWj0dAd0NCRy09pJ9VPDDLYe0sWDFB\\u002BU2zrjD\\u002BW7ivtY8moZ5y8AtH9IQCKDimlK\\u002BZqEcvoaOBKhRoKeJvEX/sXQvOIXDxJNSqB898Ae2eUO\\u002BqxSmhyv7VEwpUbpFu5fg6ENDCAJroEPv7iBXOH4KFQ\\u002BHozxDjgP5vqmjlzRd2YJoePjM8LUqkpga6WxIZvvPiQlg\\u002BHn5aoqz3yHBf0rMFqfhsJNzaBr66U\\u002Bi\\u002BNTuXJmyZB6tnQOk1n0USG2sLpZKuaUuRhJBJMKBzaa/zg5tgxSSfRYbOgebd9MeSboIuYysYqAqgRu/2O3ed9lnEEQcpr0K3DJWOQw5lc9KAqwZQqEMpNXzEks9jkR3LFG/bftBvOlRPCMVUOdSHQaEBHNOTyLYDAj6L7Fimck7JVZXoBnwA9zQNMlSIUG8FAUcNVO1VS6BoLAJwchesekXt0\\u002BJrQ78Z1n7jtYaN8HvYELBblzoai3hx\\u002BRx8Nx2ObQfDgC5j1AbR32\\u002B8FtH1RwG7DQmbdYi9PmLH2cE6j5SVqBC9cyW4y9TWpvfLvn1ahUU0x3JDnuH5PhF\\u002BeUVgkYoAYZHZpYR96yBvjjpMJSZBylRIbESlDWoYHMhG5BseGb8KR10VPmKFs/th/btQmA9xCdD9BXVYs\\u002BEjy8FzZo\\u002BBL02YSahToscidRqqYyl4Zkze8PRrd8Tp7bWKCtRZvdMwFdFq3avtI263vyKZiBPpyG8EDArGYXpmtmkXdcbwzrTWU2PTWF4KO3KgWTdo/bhvzDDIXYQ4WaGIB\\u002B8AAwlSSTm4Se2XhOHbBXudX/ovO4v2Ar1MhZRwZCu48iGpM5zZF5rc9KttBQidjlwqVCHi/4DFTsRY758An4iBqYDrlotkH64yeM2/IUCRTMTfwLhbKlJkmLAE8Y9/Q6Uo5UTkSsi8dTLZxnwnolK6sAy3AiYBUVR4bxo2u2Cy1QtLRZyIMgcMFrD95splC7844KlgH0WDJsAFiKJi6M2dYZnN5ZAS7PshhKn35iCuueDJ2\\u002Bwz84G\\u002BixEhy\\u002BV2LgwMlfA5oFfIjB6XgOeciFwdYu3iQxZipRuaAXMBuwUeO5BAjqE\\u002BrWkpARHeJ8lAtkUlzyq/VOOGt7IReoc9P0R1MWYsspEDUqVSqFWE3RxAHSNyorm7VWU3fJ5HNnBDDxM6Cd/Fs7oEXjwrEHBcwmEBu92Ql43Ir4rx/wPjwuHaWjjgkwAAAABJRU5ErkJggg==",\n      "Url": "",\n      "Source": ""\n    }\n  }\n]\n')))}A.isMDXComponent=!0}}]);