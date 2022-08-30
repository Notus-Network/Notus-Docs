"use strict";(self.webpackChunknotus_docs=self.webpackChunknotus_docs||[]).push([[6421],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=s(a),N=r,u=k["".concat(o,".").concat(N)]||k[N]||d[N]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},142:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},o="API Referans\u0131",s={unversionedId:"Api/REST/intro",id:"Api/REST/intro",title:"API Referans\u0131",description:"Her Notus Network Node'u i\xe7erisinde REST API bulundurur. Bu \u015fekilde veri payla\u015f\u0131m\u0131 ve veri al\u0131m\u0131 h\u0131zl\u0131 bir \u015fekilde yap\u0131l\u0131r.",source:"@site/docs/Api/REST/intro.md",sourceDirName:"Api/REST",slug:"/Api/REST/intro",permalink:"/tr/Api/REST/intro",draft:!1,editUrl:"https://github.com/Notus-Network/Notus-Docs/tree/main/docs/Api/REST/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"api",next:{title:"/online",permalink:"/tr/Api/REST/Node/online"}},m={},d=[{value:"Dinlenen Portlar",id:"dinlenen-portlar",level:2},{value:"Nas\u0131l Get Requesti Kullan\u0131l\u0131r?",id:"nas\u0131l-get-requesti-kullan\u0131l\u0131r",level:2},{value:"Javascript / Typescript",id:"javascript--typescript",level:3},{value:"C#",id:"c",level:3},{value:"Nas\u0131l Post Requesti Kullan\u0131l\u0131r?",id:"nas\u0131l-post-requesti-kullan\u0131l\u0131r",level:2},{value:"Javascript / Typescript",id:"javascript--typescript-1",level:3},{value:"C#",id:"c-1",level:3},{value:"Yol Listesi",id:"yol-listesi",level:2},{value:"Node",id:"node",level:3},{value:"Metrikler",id:"metrikler",level:3},{value:"Blok Zinciri",id:"blok-zinciri",level:3},{value:"C\xfczdan",id:"c\xfczdan",level:3},{value:"\u0130\u015flem",id:"i\u0307\u015flem",level:3},{value:"NFT",id:"nft",level:3}],k={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-referans\u0131"},"API Referans\u0131"),(0,l.kt)("p",null,"Her Notus Network Node'u i\xe7erisinde REST API bulundurur. Bu \u015fekilde veri payla\u015f\u0131m\u0131 ve veri al\u0131m\u0131 h\u0131zl\u0131 bir \u015fekilde yap\u0131l\u0131r.\nRequest x-www-form-urlencoded ve JSON formatlar\u0131nda yap\u0131labilir."),(0,l.kt)("h2",{id:"dinlenen-portlar"},"Dinlenen Portlar"),(0,l.kt)("p",null,"Farkl\u0131 portlar ile farkl\u0131 layerlar ve networkler dinlenir. Bu portlar\u0131n kullan\u0131m\u0131 a\u015fa\u011f\u0131daki \xf6rneklerde g\xf6r\xfclebilir."),(0,l.kt)("p",null,"Verilen portlar sadece varsay\u0131lan portlard\u0131r. Node a\xe7\u0131l\u0131rken bu varsay\u0131lan portlar\u0131 de\u011fi\u015ftirebilirsiniz."),(0,l.kt)("p",null,"Varsay\u0131lan Port Numaras\u0131: 5000"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 0")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 1")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 2")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer2"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 100")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 101")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 102")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 200")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 201")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 202")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer4"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 300")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 301")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 302")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 400")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 401")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 402")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 500")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 501")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 502")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer7"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 600")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 601")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 602")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer8"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 700")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 701")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 702")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 800")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 801")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 802")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Layer10"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mainnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 900")),(0,l.kt)("li",{parentName:"ul"},"Testnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 901")),(0,l.kt)("li",{parentName:"ul"},"Devnet: ",(0,l.kt)("inlineCode",{parentName:"li"},"Varsay\u0131lan Port + 902"))))),(0,l.kt)("h2",{id:"nas\u0131l-get-requesti-kullan\u0131l\u0131r"},"Nas\u0131l Get Requesti Kullan\u0131l\u0131r?"),(0,l.kt)("p",null,"GET tipinde requestler atmak i\xe7in \xf6rnek;"),(0,l.kt)("p",null,"Her objeye uygun JS/TS ve C# kodlar\u0131."),(0,l.kt)("h3",{id:"javascript--typescript"},"Javascript / Typescript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function GetRequest(url) {\n  return fetch(url).then(async (response) => {\n    if (!response.ok) {\n      throw new Error(response.statusText);\n    }\n    return JSON.stringify(await response.json());\n  });\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export function GetRequest(url: string): Promise<string> {\n  return fetch(url).then(async (response) => {\n    if (!response.ok) {\n      throw new Error(response.statusText);\n    }\n    return JSON.stringify(await response.json());\n  });\n}\n")),(0,l.kt)("h3",{id:"c"},"C#"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static async Task<string> Get(string UrlAddress, int TimeOut = 0, bool UseTimeoutAsSecond = true)\n{\n    try\n    {\n        using (var client = new HttpClient())\n        {\n            if (TimeOut > 0)\n            {\n                client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));\n            }\n            HttpResponseMessage response = await client.GetAsync(UrlAddress);\n            if (response.IsSuccessStatusCode)\n            {\n                HttpContent responseContent = response.Content;\n                return await responseContent.ReadAsStringAsync();\n            }\n        }\n    }\n    catch (Exception err)\n    {\n        Console.WriteLine(err.Message);\n    }\n    return string.Empty;\n}\n")),(0,l.kt)("h2",{id:"nas\u0131l-post-requesti-kullan\u0131l\u0131r"},"Nas\u0131l Post Requesti Kullan\u0131l\u0131r?"),(0,l.kt)("p",null,"POST tipinde requestler atmak i\xe7in \xf6rnek;"),(0,l.kt)("p",null,"Her objeye uygun JS/TS ve C# kodlar\u0131."),(0,l.kt)("h3",{id:"javascript--typescript-1"},"Javascript / Typescript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'export function PostRequest(url, object) {\n  return fetch(url, {\n    method: "POST",\n    body: new URLSearchParams({\n      data: JSON.stringify(object),\n    }),\n    headers: {\n      "Content-Type": "application/x-www-form-urlencoded",\n    },\n  }).then(async (response) => {\n    if (!response.ok) {\n      throw new Error(response.statusText);\n    }\n    return JSON.stringify(await response.json());\n  });\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'export function PostRequest<T>(url: string, object: T): Promise<string> {\n  return fetch(url, {\n    method: "POST",\n    // x-www-form-urlencoded\n    body: new URLSearchParams({\n      data: JSON.stringify(object),\n    }),\n    headers: {\n      "Content-Type": "application/x-www-form-urlencoded",\n    },\n  }).then(async (response) => {\n    if (!response.ok) {\n      throw new Error(response.statusText);\n    }\n    return JSON.stringify(await response.json());\n  });\n}\n')),(0,l.kt)("h3",{id:"c-1"},"C#"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"public static async Task<string> Post(string UrlAddress, Dictionary<string, string> PostData, int TimeOut = 0, bool UseTimeoutAsSecond = true)\n{\n    using (HttpClient client = new HttpClient())\n    {\n        if (TimeOut > 0)\n        {\n            client.Timeout = (UseTimeoutAsSecond == true ? TimeSpan.FromSeconds(TimeOut * 1000) : TimeSpan.FromMilliseconds(TimeOut));\n        }\n\n        HttpResponseMessage response = await client.PostAsync(UrlAddress, new FormUrlEncodedContent(PostData));\n        if (response.IsSuccessStatusCode)\n        {\n            HttpContent responseContent = response.Content;\n            return await responseContent.ReadAsStringAsync();\n        }\n    }\n    return string.Empty;\n}\n")),(0,l.kt)("h2",{id:"yol-listesi"},"Yol Listesi"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Node/online"},"/online")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Node'un online durumunu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Node/"},"/node")),(0,l.kt)("td",{parentName:"tr",align:"left"},"T\xfcm tiplerdeki node listesini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Node/master"},"/master")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Master tipinde Node'lar\u0131n listesini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Node/main"},"/main ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Main tipinde Node'lar\u0131n listesini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Node/replicant"},"/replicant ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Replicant tipinde Node'lar\u0131n listesini g\xf6sterir.")))),(0,l.kt)("h3",{id:"metrikler"},"Metrikler"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Metrics/node"},"/metrics/node")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka\xe7 Node'un var oldu\u011funu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Metrics/master"},"/metrics/master")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka\xe7 Master Node'un var oldu\u011funu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Metrics/main"},"/metrics/main")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka\xe7 Main Node'un var oldu\u011funu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Metrics/replicant"},"/metrics/replicant")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka\xe7 Replicant Node'un var oldu\u011funu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Metrics/block"},"/metrics/block")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Ka\xe7 tane blok oldu\u011funu g\xf6sterir.")))),(0,l.kt)("h3",{id:"blok-zinciri"},"Blok Zinciri"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parametreler"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/summary"},"/block/summary")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Son blok hakk\u0131nda bilgi verir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/last"},"/block/last")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Son blo\u011fun i\xe7eri\u011fini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/hash"},"/block/hash/{uuid}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block UUID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UUID de\u011ferinin verildi\u011fi blok hash de\u011ferini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/status"},"/block/status/{uuid}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Block UUID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UUID de\u011ferinin verildi\u011fi blo\u011fun durumunu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/currencylist"},"/currency/list")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"B\xfct\xfcn kullan\u0131labilir para birimlerini g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/infogenesis"},"/info/genesis")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Genesis blok bilgisini verir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/infotransfer"},"/info/transfer")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u015eu anki i\u015flemlerin \xfccret bilgisini verir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Blockchain/inforeserve"},"/info/reserve")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Notus Token'nin reserve edilmi\u015f miktar\u0131n\u0131 verir.")))),(0,l.kt)("h3",{id:"c\xfczdan"},"C\xfczdan"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parametreler"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Wallet/balance"},"/balance/{walletKey}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"C\xfczdan Anahtar\u0131"),(0,l.kt)("td",{parentName:"tr",align:"left"},"C\xfczdan anahtar\u0131n\u0131n verildi\u011fi c\xfczdan\u0131n bakiye bilgisini verir.")))),(0,l.kt)("h3",{id:"i\u0307\u015flem"},"\u0130\u015flem"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Airdrop sadece Testnet ve Devnet i\xe7in kullan\u0131labilir."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parametreler"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Transaction/send"},'/send?data="preTranfer"')),(0,l.kt)("td",{parentName:"tr",align:"left"},"preTransfer Yap\u0131s\u0131"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Transfer i\u015flemini Node'a g\xf6nderir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Transaction/transactionstatus"},"/transaction/status/{uuid}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0130\u015flem UUID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UUID de\u011ferinin verildi\u011fi i\u015flem durumunu g\xf6sterir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/Transaction/airdrop"},"/airdrop/{walletKey}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"C\xfczdan Anahtar\u0131"),(0,l.kt)("td",{parentName:"tr",align:"left"},"C\xfczdan anahtar\u0131n\u0131n verildi\u011fi c\xfczdana airdrop i\u015flemi yapar.")))),(0,l.kt)("h3",{id:"nft"},"NFT"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Tip"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Yol"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parametreler"),(0,l.kt)("th",{parentName:"tr",align:"left"},"A\xe7\u0131klama"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/NFT/new"},'/storage/file/new?data="fileMetadata"')),(0,l.kt)("td",{parentName:"tr",align:"left"},"fileMetadata"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yeni bir dosya olu\u015fturmak i\xe7in gerekli UUID'yi verir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/NFT/update"},'/storage/file/update?data="byteData"')),(0,l.kt)("td",{parentName:"tr",align:"left"},"byteData, fileUUID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fileUUID'si verilen dosyan\u0131n n 'inci byteArray'ini al\u0131r.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/tr/Api/REST/NFT/status"},"/storage/file/status/{uuid}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Dosya UUID"),(0,l.kt)("td",{parentName:"tr",align:"left"},"UUID de\u011ferinin verildi\u011fi dosyan\u0131n i\u015flem durumunu g\xf6sterir.")))))}N.isMDXComponent=!0}}]);