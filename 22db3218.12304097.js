(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||c;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(105)),r=c(a(106));function c(e){return e&&e.__esModule?e:{default:e}}var i={Google:n.default,Baidu:r.default};t.default=i},105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=i(a(0)),c=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return r.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),t}(r.default.Component);t.default=s,s.propTypes={className:c.default.string,style:c.default.object,client:c.default.string.isRequired,slot:c.default.string.isRequired,layout:c.default.string,layoutKey:c.default.string,format:c.default.string,responsive:c.default.string},s.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},106:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),i=(n=c)&&n.__esModule?n:{default:n};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),t}(i.default.Component);t.default=s},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(21);t.a=function(){const e=Object(c.default)(),{siteConfig:t}=e;return r.a.useEffect((()=>{const e=document.getElementsByClassName(t.customFields.commentSelector);if(0===e.length)return;const a=document.createElement("script");a.setAttribute("src","https://utteranc.es/client.js"),a.setAttribute("repo",t.customFields.ghRepoUtterance),a.setAttribute("issue-term","title"),a.setAttribute("theme","boxy-light"),a.setAttribute("crossorigin","anonymous"),a.setAttribute("async",!0),e[0].insertAdjacentElement("afterend",a)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.customFields.commentSelector}))}},110:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(21),i=function(e){return Number(e)<10?"0"+e:e};t.a=function(e){var t=e.created,a=e.modified,n=new Date(t),o=new Date(a),l=(Object(c.default)().siteConfig.organizationName,n.getFullYear()+"-"+i(n.getMonth()+1)+"-"+i(n.getDate())),s=o.getFullYear()+"-"+i(o.getMonth()+1)+"-"+i(o.getDate());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text--right text--italic"},r.a.createElement("span",null,"Created on "),r.a.createElement("time",{itemProp:"datePublished",dateTime:n.toISOString(),className:"text--bold"},l),r.a.createElement("span",null," / Last updated on "),r.a.createElement("time",{itemProp:"dateModified",dateTime:o.toISOString(),className:"text--bold"},s))))}},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure00-927fd47321f2d54b1a6a96a7d9cfdebd.png"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure01-2e220cb7f91a7dc4b81a86667849e4f0.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure02-9a6deb93ed04b8fbba9e99a1694d0f3e.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure03-6bef06857a51f9fa0cc5de0dd2d34836.png"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure04-b28488ebc1d8e424bb5a98fca44488f4.png"},165:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure05-79b286fbeed17c7f55be582324d237d3.png"},166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure06-532e0d6856bbbde1717f6515e1843520.png"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure07-79cfdc49589bc9495847cc58731baa24.png"},168:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure08-ce8218a2fe2dc09c8ee9a1d9e29cb698.png"},169:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure09-a19bad691a609b89ae37b04a5cc9bcf2.png"},170:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure010-96cadce01d391d0ab7ec68c6c9a2f211.png"},171:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure011-cfcb0bf6da301543e4bf24c6de062632.png"},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure012-bee9d1f73075a64da1445fed14be2c39.png"},173:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure013-16649837c893e6179705a741380fd261.png"},174:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure014-65c04349f85869835f31550c6390ebc2.png"},175:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/001-azure015-56fa784798bcdc4b3e3e3671c86846e7.png"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(103)),i=a(104),o=a.n(i),l=a(109),s=a(110),u={title:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",sidebar_label:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",description:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",keywords:["azure","Azure Certification","\uc790\uaca9\uc99d","Microsoft Virtual Training Day","DP-900"],image:"azure/001-azurecert.png",date:"2022-3-5"},b={unversionedId:"azure/certified-dp900",id:"azure/certified-dp900",isDocsHomePage:!1,title:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",description:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",source:"@site/docs/azure/certified-dp900.mdx",slug:"/azure/certified-dp900",permalink:"/docs/azure/certified-dp900",version:"current",sidebar_label:"Azure DP-900 \uc790\uaca9\uc99d \uc2dc\ud5d8\ud6c4\uae30",sidebar:"Azure"},p=[{value:"\ubb34\ub8cc \uc751\uc2dc \uae30\ud68c \uc5bb\uae30",id:"\ubb34\ub8cc-\uc751\uc2dc-\uae30\ud68c-\uc5bb\uae30",children:[]},{value:"\uc2dc\ud5d8\uacf5\ubd80",id:"\uc2dc\ud5d8\uacf5\ubd80",children:[]},{value:"1\ucc28 \uc2dc\ud5d8(1/19)",id:"1\ucc28-\uc2dc\ud5d8119",children:[{value:"\ub2e4\uc2dc\ud55c\ubc88 \uae30\ud68c\ub97c \uc8fc\uc138\uc694..",id:"\ub2e4\uc2dc\ud55c\ubc88-\uae30\ud68c\ub97c-\uc8fc\uc138\uc694",children:[]},{value:"\uc2dc\ud5d8 \uc7ac\uc751\uc2dc \uc608\uc678 \uc694\uccad \uc81c\ucd9c",id:"\uc2dc\ud5d8-\uc7ac\uc751\uc2dc-\uc608\uc678-\uc694\uccad-\uc81c\ucd9c",children:[]},{value:"\uc2dc\ud5d8 \uc7ac\uc751\uc2dc \uc608\uc678\uc758 \ud0c0\ub2f9\ud55c \uc0ac\uc720",id:"\uc2dc\ud5d8-\uc7ac\uc751\uc2dc-\uc608\uc678\uc758-\ud0c0\ub2f9\ud55c-\uc0ac\uc720",children:[]},{value:"\uc7ac\uc751\uc2dc \uba54\uc77c \ubcf4\ub0b4\ub2e4",id:"\uc7ac\uc751\uc2dc-\uba54\uc77c-\ubcf4\ub0b4\ub2e4",children:[]},{value:"\uc2dc\ud5d8 \ud504\ub85c\uadf8\ub7a8 \ub370\ubaa8 \ubcf4\uae30",id:"\uc2dc\ud5d8-\ud504\ub85c\uadf8\ub7a8-\ub370\ubaa8-\ubcf4\uae30",children:[]}]},{value:"2\ucc28 \uc2dc\ud5d8(3/2)",id:"2\ucc28-\uc2dc\ud5d832",children:[{value:"\ud569\uaca9",id:"\ud569\uaca9",children:[]}]},{value:"\uc18c\uac10",id:"\uc18c\uac10",children:[]}],d={toc:p};function m(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s.a,{created:"2022/3/05",modified:"2021/3/05",mdxType:"PostingDate"}),Object(c.b)(o.a.Google,{client:"ca-pub-4861235624374871",slot:"4257032916",style:{display:"block"},format:"auto",responsive:"true"}),Object(c.b)("h2",{id:"\ubb34\ub8cc-\uc751\uc2dc-\uae30\ud68c-\uc5bb\uae30"},"\ubb34\ub8cc \uc751\uc2dc \uae30\ud68c \uc5bb\uae30"),Object(c.b)("p",null,"\uba3c\uc800 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.microsoft.com/ko-kr/events/training-days"}),"Microsoft Azure Virtual Training Day")," \uc0ac\uc774\ud2b8\ub97c \ud1b5\ud574\uc11c \uac15\uc758 \uc2a4\ucf00\uc974\uc744 \ud655\uc778\ud558\uace0 \uc218\uac15 \uc2e0\uccad\uc744 \ud55c\ub2e4."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\uc120\ucc29\uc21c\uc774\ubbc0\ub85c \ub2a6\uac8c \uc2e0\uccad\ud558\uba74 \ub4f1\ub85d\uc774 \ub9c8\uac10\ub418\uc5c8\ub2e4\uace0 \uc548\ub0b4\uac00 \ub098\uc624\ub2c8 \uba74\ubc00\ud558\uac8c \ud655\uc778 \ud560 \uac83"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure00",src:a(160).default})),Object(c.b)("p",null,"DP-900 \uc740 Data Fundamentals \uc218\uc5c5\uc774\uc5c8\uace0, 2\uc77c\uc9dc\ub9ac\uc600\ub2e4. \uc624\ud6c4 2\uc2dc\uc5d0 \ubcf4\ud1b5 \uc2dc\uc791\ud574\uc11c 2\uc2dc\uac04 30\ubd84 \uc815\ub3c4 \ud55c\ub2e4."),Object(c.b)("p",null,"\uc218\uac15\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uba74 \uac15\uc758 \uc2a4\ucf00\uc974 \uc774\uba54\uc77c\uc774 \ub0a0\ub77c\uc624\uace0, \uc628\ub77c\uc778\uc73c\ub85c \uc218\uc5c5\uc744 \ub4e3\ub294\ub2e4."),Object(c.b)("p",null,"\uc6e8\ube44\ub098 2\uc77c \uad50\uc721\uc744 \ubaa8\ub450 \ub4e3\uace0 \ub098\uba74 3~4\uc77c \ud6c4\uc5d0 \uc544\ub798 \uc774\uba54\uc77c\uc774 \ub0a0\ub77c\uc624\uace0 \ubb34\ub8cc\ub85c \uc2dc\ud5d8\uc744 \ubcfc \uc218 \uc788\ub294 \ud61c\ud0dd\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure01",src:a(161).default})),Object(c.b)(o.a.Google,{client:"ca-pub-4861235624374871",slot:"4257032916",style:{display:"block"},format:"auto",responsive:"true"}),Object(c.b)("h2",{id:"\uc2dc\ud5d8\uacf5\ubd80"},"\uc2dc\ud5d8\uacf5\ubd80"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.examtopics.com/exams/microsoft/dp-900/"}),"examtopics - \ub364\ud504 \uc0ac\uc774\ud2b8: Microsoft DP-900 Exam")))),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.examtopics.com/exams/microsoft/dp-900/"}),"examtopics"),"\ub77c\ub294 \ub364\ud504 \uc0ac\uc774\ud2b8\ub97c \uc6b0\uc5f0\ud788 \ubc1c\uacac\ud574\uc11c \ubb38\uc81c \ub2f5\ub9cc \uc678\uc6b4 \uac8c \uc544\ub2c8\ub77c MSDN \ubb38\uc11c\uae4c\uc9c0 \ubcf4\uba74\uc11c \ub300\ub7b5\uc801\uc778 \uac1c\ub150\uc744 \uc815\ub9ac\ud558\uba74\uc11c \uacf5\ubd80\ud588\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure02",src:a(162).default})),Object(c.b)("p",null,"\uc704 \uc2a4\uc0f7\uc5d0\uc11c ",Object(c.b)("inlineCode",{parentName:"p"},"Reveal Solution"),"\uc744 \ud1b5\ud574\uc11c \uc815\ub2f5\uc744 \ud655\uc778 \ud560 \uc218 \uc788\uc9c0\ub9cc \uac00\ub054 \uc62c\ub77c\uac00 \uc788\ub294 \ubb38\uc81c\uc5d0 \ub300\ud55c \ub2f5\uc774 \ub2e4\ub978 \uacbd\uc6b0\ub3c4 \uc788\uc5c8\ub2e4. \ub54c\ubb38\uc5d0 \ubb38\uc81c \uc544\ub798\uc5d0 \uc788\ub294 ",Object(c.b)("inlineCode",{parentName:"p"},"Discussion"),"\ubc84\ud2bc\uc744 \uc5f4\uc5b4 \ubd10\uc11c \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ub0a8\uae34 \ub313\uae00\ub4e4\uc744 \ubcf4\uba74\uc11c \uc798\ubabb\ub41c \uc9c0\uc2dd\uc744 \ubc14\ub85c \uc7a1\uc544\uc57c \ud55c\ub2e4. \uac00\ub054\uc740 \ub2f5\uc774 \uc5b4\ub5a4 \uac83\uc778 \uc9c0 \uc758\uacac \ud1b5\uc77c\uc774 \uc548\ub418\ub294 \ubb38\uc81c\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub0b4\uac00 \uc9c1\uc811 \uc54c\uc544\ubcf4\uc544\uc57c \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure03",src:a(163).default})),Object(c.b)("p",null,"\ub178\uc158\uc758 \uce98\ub9b0\ub354 \uae30\ub2a5\uc744 \uc801\uadf9 \ud65c\uc6a9\ud574 \uac00\uc9c0\uace0 \uc77c \ub05d\ub098\uace0 \ub9e4\uc77c \uacf5\ubd80\ud560 \ubc94\uc704 \uc815\ud574\uac00\uc9c0\uace0 \uc2a4\ucf00\uc974\uc744 \uc9c0\ud0a4\uba74\uc11c \ud574 \ubcf4\uc558\ub2e4. \uc9c4\uc9dc \uc774\ub807\uac8c\uae4c\uc9c0 \uc9dc\uc784\uc0c8\uc788\uac8c \uacc4\ud68d \uc9dc\uace0 \uc5f4\uacf5\ud558\ub294 \uac74 \ud0dc\uc5b4\ub098\uc11c \ucc98\uc74c\uc774\uc5c8\ub358 \uac83 \uac19\ub2e4."),Object(c.b)("p",null,"\uc774\ub807\uac8c \ub9e4\uc77c\ub9c8\ub2e4 1~2\uc2dc\uac04\uc529 \ud55c\ub2ec\uac04 \uc5f4\uacf5\uc744 \ud588\ub358 \uac83 \uac19\ub2e4."),Object(c.b)("h2",{id:"1\ucc28-\uc2dc\ud5d8119"},"1\ucc28 \uc2dc\ud5d8(1/19)"),Object(c.b)("p",null,"\ub4dc\ub514\uc5b4 \uadf8\ub0a0\uc774 \uc640\uc11c \uc790\uc2e0\uc788\uac8c \uc2dc\ud5d8\uc7a5\uc5d0 \ub4e4\uc5b4\uac14\ub2e4."),Object(c.b)("p",null,"AWS Associate Developer \uc2dc\ud5d8\uc744 \ubcf8 \uc7a5\uc18c\uc600\uae30 \ub54c\ubb38\uc5d0 \ub098\uc5d0\uac8c \uc775\uc219\ud55c \uacf3\uc774\uc5c8\uace0, Azure \uc2dc\ud5d8 \uc778\ud130\ud398\uc774\uc2a4\ub294 AWS\uc640\ub294 \uc644\uc804 \ub2e4\ub974\ub124, \ud770 \ubc30\uacbd\uc5d0 \uc0b0\ub73b\ud558\ub124..\ud558\uba74\uc11c \ud55c \ubb38\uc81c\ub97c \uac00\ubccd\uac8c \ud480\uc5c8\ub2e4."),Object(c.b)("p",null,"\uadf8\ub9ac\uace0 \uc544\ub798 \uadf8\ub9bc\ub4e4\uc740 \ub0b4\uac00 \uc2dc\ud5d8\uc7a5\uc18c\uc5d0\uc11c \ubcf4\uc558\ub358 UI\ub97c \ub1cc\ud53c\uc15c\ub85c \uadf8\ub9b0 \uac83\uc774\ub2c8 \ub290\ub08c \ucc38\uace0\ub9cc \ud560 \uac83.."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure04",src:a(164).default})),Object(c.b)("p",null,"\uc67c\ucabd \uc0c1\ub2e8\uc5d0 \ubb38\uc81c \uac80\ud1a0\ubc84\ud2bc\uc774 \uc788\uc5b4\uc11c \uc544 \ubb38\uc81c\uc5d0 \ub9c8\ud0b9\uc744 \ud574 \ub193\uace0 \ub2e4 \ud47c \ub2e4\uc74c\uc5d0 \uac80\ud1a0\ud558\ub294 \ud398\uc774\uc9c0\uad6c\ub098 \ud558\uba74\uc11c \ud638\uae30\uc2ec\uc5d0 \uadf8\ub0e5 \ub4e4\uc5b4\uac00 \ubd24\ub294\ub370, \uac80\ud1a0 \ucc3d\uc5d0\uc11c \ub2e4\uc2dc \ubb38\uc81c \ud654\uba74\uc73c\ub85c \uc5b4\ub5bb\uac8c \ub3cc\uc544\uac00\uc57c \ud558\ub294 \uc9c0 \ubaa8\ub974\uaca0\ub294 \uac83\uc774\uc5c8\ub2e4.."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure05",src:a(165).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure06",src:a(166).default})),Object(c.b)("p",null,"\ub3c4\ubb34\uc9c0 \ubaa8\ub974\uaca0\uc5b4\uc11c \uac80\ud1a0 \ud654\uba74\uc744 \ub2eb\uc73c\ub824\ub2e4 \uc644\ub8cc\ub97c \ub20c\ub7ec \ubc84\ub838\ub294\ub370,"),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure07",src:a(167).default})),Object(c.b)("p",null,"\uc774\ub807\uac8c 5\ubd84\ub9cc\uc5d0 \ubd88\ud569\uaca9 \ucc98\ub9ac\uac00 \ub418\uc5c8\ub2e4.. \ub0b4 \ud55c\ub2ec\uac04\uc758 \ub178\ub825...\u3160\u315c"),Object(c.b)(o.a.Google,{client:"ca-pub-4861235624374871",slot:"4257032916",style:{display:"block"},format:"auto",responsive:"true"}),Object(c.b)("h3",{id:"\ub2e4\uc2dc\ud55c\ubc88-\uae30\ud68c\ub97c-\uc8fc\uc138\uc694"},"\ub2e4\uc2dc\ud55c\ubc88 \uae30\ud68c\ub97c \uc8fc\uc138\uc694.."),Object(c.b)("p",null,"\uac10\ub3c5\uad00\uc5d0\uac8c \uac00\uc11c \uc774\uac70 \uc5b4\ucc0c\ud558\ub2e4\uac00 \uc2dc\ud5d8\uc774 \ub05d\ub098\ubc84\ub838\ub294\ub370 \ub2e4\uc2dc \uc2dc\ud5d8 \uce60 \uc218 \uc788\ub098\uc694? \ub77c\uace0 \ubb3c\uc5b4\ubd24\ub294\ub370, \uc774\uc804\uc5d0\ub3c4 \uac19\uc740 \ucf00\uc774\uc2a4\uac00 \uc788\uc5b4\uc11c \ubb38\uc758\ud574 \ubd24\ub294\ub370, \uc751\uc2dc\uc790 \uacfc\uc2e4\ub85c \ucc98\ub9ac\ub418\uc5c8\ub2e4\uace0 \ud558\uc600\ub2e4.. \uc5b5\uc6b8\ud55c \ub9d8\uc73c\ub85c \uc2dc\ud5d8\uc7a5\uc744 \ub098\uc654\ub2e4.."),Object(c.b)("p",null,"\ud558\ub8e8 \ud6c4\uc5d0 Microsoft Certification\uc5d0\uc11c \uba54\uc77c\uc774 \ub0a0\ub77c\uc654\ub2e4."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/ko-kr/learn/certifications/exam-retake-policy"}),"\uc2dc\ud5d8 \uc7ac\uc751\uc2dc \uc815\ucc45")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure08",src:a(168).default})),Object(c.b)("h3",{id:"\uc2dc\ud5d8-\uc7ac\uc751\uc2dc-\uc608\uc678-\uc694\uccad-\uc81c\ucd9c"},"\uc2dc\ud5d8 \uc7ac\uc751\uc2dc \uc608\uc678 \uc694\uccad \uc81c\ucd9c"),Object(c.b)("p",null,"\uc544\ub798 \uc548\ub0b4\uc0ac\ud56d\uc744 \uc77d\uace0 \uc608\uc678\uc694\uccad\uc744 \ud55c\ubc88 \ud574 \ubcf4\uae30\ub85c \ud588\ub2e4"),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\ud544\uc218 \uc2dc\uac04\uc744 \uae30\ub2e4\ub9ac\uc9c0 \uc54a\uace0 \uc2dc\ud5d8\uc5d0 \uc7ac\uc751\uc2dc\ud558\ub824\uba74 \uc608\uc678 \uc694\uccad\uc744 \uc81c\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc544\ub798\uc5d0 \ub098\uc5f4\ub41c \uc608\uc678 \uc911 \ud558\ub098\ub97c \ucda9\uc871\ud558\ub294 \uacbd\uc6b0 \uc694\uccad\uc774 \uc2b9\uc778\ub429\ub2c8\ub2e4. \uc2dc\ud5d8 \ubd88\ud569\uaca9\uc774 \uc751\uc2dc\uc790\uc758 \uc900\ube44, \uc9c0\uc2dd, \uae30\uc220 \ub610\ub294 \ub2a5\ub825 \ubd80\uc871\uc73c\ub85c \uc778\ud55c \uacbd\uc6b0 \uc7ac\uc751\uc2dc \uc608\uc678\ub294 \uc2b9\uc778\ub418\uc9c0\xa0",Object(c.b)("strong",{parentName:"p"},"\uc54a\uc2b5\ub2c8\ub2e4"),"."),Object(c.b)("p",{parentName:"div"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:mlsecure@microsoft.com"}),"mlsecure@microsoft.com"),"\uc5d0 \uc694\uccad\uc744 \uc81c\ucd9c\ud558\uc138\uc694. \uc694\uccad\uc5d0\ub294 \ub2e4\uc74c \uc815\ubcf4\uac00 \ubaa8\ub450 \ud3ec\ud568\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\uc131 \ubc0f \uc774\ub984."),Object(c.b)("li",{parentName:"ul"},"\uc751\uc2dc\uc790 ID."),Object(c.b)("li",{parentName:"ul"},"\uc751\uc2dc\uc790 ID\uc640 \uc5f0\uacb0\ub41c \uba54\uc77c."),Object(c.b)("li",{parentName:"ul"},"\uc2dc\ud5d8 \ub4f1\ub85d ID."),Object(c.b)("li",{parentName:"ul"},"\uc2dc\ud5d8 \ubc88\ud638."),Object(c.b)("li",{parentName:"ul"},"\uc624\ub958\uc5d0 \ub300\ud55c \uc124\uba85."),Object(c.b)("li",{parentName:"ul"},"Pearson VUE \uc0ac\ub840 \ubc88\ud638.")),Object(c.b)("p",{parentName:"div"},"\uc774 \uc815\ubcf4 \uc911\xa0",Object(c.b)("strong",{parentName:"p"},"\ud558\ub098"),"\xa0\ub77c\ub3c4 \ub204\ub77d\ub41c \uacbd\uc6b0 \uc7ac\uc751\uc2dc \uc608\uc678 \uc694\uccad\uc774 \uac70\ubd80\ub429\ub2c8\ub2e4."))),Object(c.b)("h3",{id:"\uc2dc\ud5d8-\uc7ac\uc751\uc2dc-\uc608\uc678\uc758-\ud0c0\ub2f9\ud55c-\uc0ac\uc720"},"\uc2dc\ud5d8 \uc7ac\uc751\uc2dc \uc608\uc678\uc758 \ud0c0\ub2f9\ud55c \uc0ac\uc720"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ub7a9 \ud06c\ub798\uc2dc\ub85c \uc778\ud55c \ubd88\ud569\uaca9"),Object(c.b)("li",{parentName:"ul"},"\uc778\ud130\ub137 \uc5f0\uacb0 \ubb38\uc81c\ub85c \uc778\ud55c \ubd88\ud569\uaca9"),Object(c.b)("li",{parentName:"ul"},"\uc7a5\ube44 \uace0\uc7a5\uc73c\ub85c \uc778\ud55c \ubd88\ud569\uaca9")),Object(c.b)("p",null,"\ub098\ub294 \uc0ac\uc2e4 \uc704\uc758 \ucf00\uc774\uc2a4\uc5d0 \ud574\ub2f9\uc774 \ub418\uc9c0 \uc54a\uc544\uc11c \uba54\uc77c\uc744 \ubcf4\ub0b4\uc57c\ud558\ub098 \ub9d0\uc544\uc57c \ud558\ub098 \uace0\ubbfc\uc744 \ud588\uc9c0\ub9cc.. \uc77c\ub2e8\uc740 \ud55c\ubc88 \ubcf4\ub0b4 \ubcf4\uae30\ub85c \ud588\ub2e4."),Object(c.b)("h3",{id:"\uc7ac\uc751\uc2dc-\uba54\uc77c-\ubcf4\ub0b4\ub2e4"},"\uc7ac\uc751\uc2dc \uba54\uc77c \ubcf4\ub0b4\ub2e4"),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure09",src:a(169).default})),Object(c.b)("p",null,"\ub2f5\uc774 \uc654\ub294\ub370.. \ubb34\uc131\uc758\ud55c \ub2f5\ubcc0\uc774\ub2e4. \uc800 Pearson VUE customer service \uc0ac\uc774\ud2b8\ub294 \uc5f0\ub77d\ucc98\ub9cc \uc54c\ub824\uc8fc\uace0 \uc788\ub294\ub370,"),Object(c.b)("p",null,"\uc0ac\uc2e4 \uc5f0\ub77d\ud574\ub3c4 \uc18c\uc6a9 \uc5c6\ub2e4 \uc0dd\uac01 \ud55c \uac8c \uac10\ub3c5\uad00\uc774 \uc2dc\ud5d8 \ub2f9\uc77c\ub0a0\uc5d0 \ud55c\ubc88 \uc804\ud654\ub97c \ud588\ub358 \uac83 \uac19\uace0, \uc774\uac70\ub294 \uc2dc\ud5d8\uc790 \uacfc\uc2e4\uc774\ub77c\uc11c \uc548\ub41c\ub2e4\uace0 \ub2f5\uc744 \ubc1b\uc558\ub358 \uae30\uc5b5\uc774 \ub098\uc11c \uadf8\ub0e5 \uc5ec\uae30\uae4c\uc9c0\ub9cc \ud558\uae30\ub85c \ud588\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure010",src:a(170).default})),Object(c.b)("h3",{id:"\uc2dc\ud5d8-\ud504\ub85c\uadf8\ub7a8-\ub370\ubaa8-\ubcf4\uae30"},"\uc2dc\ud5d8 \ud504\ub85c\uadf8\ub7a8 \ub370\ubaa8 \ubcf4\uae30"),Object(c.b)("p",null,"\uc544\uc26c\uc6b4 \ub9c8\uc74c\uc5d0 PearsonVUE \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc774\uac83\uc800\uac83 \uae30\uc6c3\ub300\ub2e4\uac00 \uc2dc\ud5d8 \ud504\ub85c\uadf8\ub7a8 \ub370\ubaa8\ub97c \ud55c\ubc88 \ubd24\uc5c8\ub294\ub370 \uac80\ud1a0\uc5d0 \ub300\ud55c \uba54\ub274\ub294 \ucc3e\uc544\ubcfc \uc218 \uc5c6\uc5c8\ub2e4... \uc544\ub194..."),Object(c.b)("p",null,"AWS\uac00 \ub531 \uc774\ub807\uac8c \uc0dd\uacbc\uc5c8\ub294\ub370.. Azure\ub294 \ub2ec\ub790\ub2e4."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://korea.pearsonvue.com/test-taker.aspx"}),"\uc751\uc2dc\uc790 :: Pearson VUE \ud55c\uad6d")))),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure011",src:a(171).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure012",src:a(172).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure013",src:a(173).default})),Object(c.b)(o.a.Google,{client:"ca-pub-4861235624374871",slot:"4257032916",style:{display:"block"},format:"auto",responsive:"true"}),Object(c.b)("h2",{id:"2\ucc28-\uc2dc\ud5d832"},"2\ucc28 \uc2dc\ud5d8(3/2)"),Object(c.b)("p",null,"\uc774\ubc88\uc5d0\ub294 2/24~2/25\uc77c\uc5d0 ",Object(c.b)("inlineCode",{parentName:"p"},"Microsoft Azure Virtual Training Day: \ub370\uc774\ud130 \uae30\ubcf8 \uc0ac\ud56d 1")," \uad50\uc721\uc744 \uc218\uac15\ud558\uace0 2/28\uc77c\uc5d0 \uc774\uba54\uc77c\uc774 \uc640\uc11c \ubb34\ub8cc \uc2dc\ud5d8 \uc751\uc2dc \uc548\ub0b4\ub97c \ubc1b\uc740 \ub4a4\uc5d0 PearsonVUE\ub97c \ud1b5\ud558\uc5ec \uc2dc\ud5d8\uc811\uc218\ub97c \ub2e4\uc2dc \ud588\uace0, \uc601\ubb38 \ubc84\uc804\uc73c\ub85c \uc2dc\ud5d8 \uc811\uc218\ub97c \ud588\ub2e4."),Object(c.b)("p",null,"\uc2dc\ud5d8\uc7a5\uc5d0 \uac00\uc11c \ubcf4\ub2c8\uae4c \uc778\ud130\ud398\uc774\uc2a4\uc640 \ud55c\uae00\ubc84\uc804\uc744 \ubd24\uc744\ub54c\uc640 \ub2e4\ub974\uace0, \ucc98\uc74c \uc2dc\ud5d8 \ubd24\uc744\ub54c\uc640 \ub2e4\ub974\uac8c \ubb54\uac00 \uc880 \ub354 \uce5c\uc219\ud574\uc9c4 \uc778\ud130\ud398\uc774\uc2a4 \ub290\ub08c\uc774 \ub4e4\uc5c8\ub2e4."),Object(c.b)("p",null,"\ud06c\uac8c \ub2e4\ub974\ub2e4\uace0 \ub290\uaf08\ub358 \uac83\uc740 \uc2dc\ud5d8 \ubcf4\ub294 \uc911\uc5d0 \uc774\uc804 \ubb38\uc81c\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\ub294 \ubc84\ud2bc\uc774 \uc788\ub2e4.. \uc774\uac70\ub294 \uad1c\ud788 \ud55c\ubc88 \ub4a4\ub85c \uac14\ub2e4\uac00 \uc55e\uc73c\ub85c \uac14\ub2e4\uac00 \ud574 \ubd24\ub2e4. \uadf8\uce58\ub9cc \ub3d9\uc2dc\uc5d0 \ub0b4\uac00 \uc774\ubbf8 \ud480\uc5c8\ub358 \ubb38\uc81c\uc758 \ub2f5\uc548\uc9c0\uac00 \ucd08\uae30\ud654 \ub418\ub294\uac70 \uc544\ub0d0? \ub77c\uace0 \uad1c\ud788 \ub35c\ub35c \ub5a8\uc5c8\uace0..\u314e"),Object(c.b)("p",null,"1\ucc28\ub54c \uc5b4\uc774\uc5c6\ub294 \ubc84\ud2bc\ud074\ub9ad \uc2e4\uc218\ub85c \ub5a8\uc5b4\uc84c\uae30 \ub54c\ubb38\uc5d0 \uc660\ub9cc\ud558\uba74 \uc774\uac83\uc800\uac83 \uac74\ub4dc\ub9ac\uc9c0 \uc54a\uc73c\ub824 \ub178\ub825\ud588\ub2e4..;"),Object(c.b)("p",null,"\uadf8 \uacb0\uacfc,"),Object(c.b)("h3",{id:"\ud569\uaca9"},"\ud569\uaca9"),Object(c.b)("p",null,"\ud55c 2\ubb38\uc81c \uc815\ub3c4 \ud2c0\ub9b0 \uac83 \uac19\ub2e4.\n\uacf5\ubd80\ud588\ub358 \ub364\ud504 \uc0ac\uc774\ud2b8\uc5d0 \uc788\ub294 \ubb38\uc81c\uac00 \uac70\uc758 \ud1a0\uc528\ud558\ub098 \uc548 \ud2c0\ub9ac\uace0 \ub300\ubd80\ubd84 \uadf8\ub300\ub85c \ub098\uc654\uc5c8\uace0, \uc544\uc8fc \uc0c8\ub85c\uc6b4 \ubb38\uc81c \ud55c \uac1c\uc640, \ub108\ubb34 \uc26c\uc6b4\uac74\ub370 \ud5f7\uac08\ub838\ub358 \uac1c\ub150 \uad00\ub828\ub41c \ubb38\uc81c \ud55c \uac1c \uc774\ub807\uac8c \ub450 \uac1c\ub97c \ud2c0\ub9b0 \uac83 \uac19\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure014",src:a(174).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"azure/001-azure015",src:a(175).default})),Object(c.b)("h2",{id:"\uc18c\uac10"},"\uc18c\uac10"),Object(c.b)("p",null,"\uac1c\uc778\uc801\uc73c\ub85c \uc774\ub7ec\ud55c \uc790\uaca9\uc99d\uc744 \ub530\uae30 \uc704\ud574 \uc5f4\uacf5\ud558\ub294 \uac83\uc740 \uc0ac\ube44\ub85c \ubcf4\ub294 \uac83\uc740 \uc870\uae08 \uc544\uae5d\ub2e4\uace0 \uc0dd\uac01\uc740 \ud574\uc654\ub294\ub370, Azure\uc5d0\uc11c \uc774\ub7f0 \uc88b\uc740 \ud504\ub85c\uadf8\ub7a8\uc774 \uc788\uc5b4\uc11c \ub355\ubd84\uc5d0 Azure \uac04\uc811 \uacbd\ud5d8\uc744 \ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\uc558\uace0, \ub0b4\uac00 \uae4a\uac8c \uc54c\uc9c0 \ubabb\ud588\ub358 \ub370\uc774\ud130 \uad00\ub828 \uac1c\ub150\uc744 \uacf5\ubd80\ud560 \uc218 \uc788\uac8c \ub418\uc5b4\uc11c \uc88b\uc740 \uc2dc\uac04\uc774\uc5c8\ub2e4."),Object(c.b)("p",null,"\uc55e\uc73c\ub85c AI \ucabd\uc73c\ub85c\ub3c4 Azure \uc6e8\ube44\ub098\uac00 \uc788\uc73c\ub2c8 \uc218\uac15\uc744 \ud558\uace0 \ub3d9\uae30\ubd80\uc5ec\ub97c \ud30d\ud30d \ubc1b\uc544\uc11c \uc2a4\ud130\ub514\ub97c \ud588\uc73c\uba74 \uc88b\uaca0\ub2e4."),Object(c.b)("p",null,"\uadf8\ub9ac\uace0 \ucf54\ub85c\ub098 \uc2dc\uad6d\uc5d0 \uc624\ud504\ub77c\uc778 \uc2a4\ud130\ub514\uac00 \uc5c6\uc5b4\uc11c \uc644\uc804 \ub098\ud0dc\ud574\uc9c4 \ub0b4 \uc790\uc2e0\uc744 \uc870\uae08 \uc7a1\uac8c \ub41c \uc2dc\uac04\uc774 \ub418\uc5b4\uc11c \uc88b\uc558\ub2e4."),Object(c.b)(o.a.Google,{client:"ca-pub-4861235624374871",slot:"4257032916",style:{display:"block"},format:"auto",responsive:"true"}),Object(c.b)(l.a,{mdxType:"Comment"}))}m.isMDXComponent=!0}}]);