(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/hello-world/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1962:function(e,t,n){"use strict";n("d85a")},"27a4":function(e,t,n){e.exports=n.p+"img/slide1.2429b8c8.jpg"},2842:function(e,t,n){"use strict";n("e1ef")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen",attrs:{id:"app"}},[n(e.nav,{tag:"Component",attrs:{"nav-list":e.navList},on:{switchHeader:e.setNav}}),n("div",{class:["HeaderNav"==e.nav?"top":"left"],attrs:{id:"view"}},[n("transition",{attrs:{name:e.transitionName,mode:"out-in"},on:{beforeLeave:e.beforeLeave,enter:e.enter,afterEnter:e.afterEnter}},[n("router-view")],1)],1)],1)},s=[],r=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"border-r border-l h-full"},[n("ul",{staticClass:"p-4 -m-1 text-left"},[e._l(e.navList,(function(t){return n("li",{key:t.name,staticClass:"m-1"},[n("router-link",{staticClass:"block px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out",attrs:{"exact-active-class":"bg-green-500 text-white hover:bg-green-600",to:t.path}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:t.icon}}),e._v(e._s(t.name))],1)],1)})),n("li",{staticClass:"m-1"},[n("a",{staticClass:"block px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out cursor-pointer",on:{click:function(t){return t.preventDefault(),e.switchHeader("HeaderNav")}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"angle-up"}}),e._v("Header Nav")],1)])],2)])])}),o=[],l={props:["navList"],methods:{switchHeader:function(e){this.$emit("switchHeader",e)}}},c=l,u=(n("7fd5"),n("2877")),d=Object(u["a"])(c,r,o,!1,null,"6028c85d",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"w-full border-b overflow-hidden"},[n("ul",{staticClass:"p-4 -m-1 flex"},[e._l(e.navList,(function(t){return n("li",{key:t.name,staticClass:"m-1"},[n("router-link",{staticClass:"px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out",attrs:{"exact-active-class":"bg-green-500 text-white hover:bg-green-600",to:t.path}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:t.icon}}),e._v(e._s(t.name))],1)],1)})),n("li",{staticClass:"m-1"},[n("a",{staticClass:"px-4 py-1 bg-white text-black tracking-wide rounded-full uppercase text-xs hover:bg-gray-200 transition duration-150 ease-out cursor-pointer",on:{click:function(t){return t.preventDefault(),e.switchHeader("SidebarNav")}}},[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"angle-left"}}),e._v("Sidebar Nav")],1)])],2)])])},h=[],m={props:["navList"],methods:{switchHeader:function(e){this.$emit("switchHeader",e)}}},v=m,g=(n("2842"),Object(u["a"])(v,p,h,!1,null,"6e2e8016",null)),b=g.exports,x="fade",w={data:function(){return{transitionName:x,nav:"HeaderNav",navList:[{name:"Home",path:"/",icon:"home"},{name:"Marketing Message",path:"/marketing-message",icon:"images"}]}},components:{SidebarNav:f,HeaderNav:b},created:function(){var e=this;this.$router.beforeEach((function(t,n,i){var a=t.meta.transitionName||n.meta.transitionName;if("slide"===a){var s=t.path.split("/").length,r=n.path.split("/").length;a=s<r?"slide-right":"slide-left"}e.transitionName=a||x,i()}))},methods:{setNav:function(e){this.nav=e},beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),n=t.height;e.style.height=this.prevHeight,setTimeout((function(){e.style.height=n}))},afterEnter:function(e){e.style.height="auto"}}},_=w,k=(n("5c0b"),Object(u["a"])(_,a,s,!1,null,null,null)),y=k.exports,C=n("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",[e._v(" Not really sure what's gonna go here, maybe links to stuff or something. ")])])}],O={name:"Home"},M=O,N=Object(u["a"])(M,S,j,!1,null,null,null),E=N.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],$={},L=Object(u["a"])($,H,T,!1,null,null,null),D=L.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page__marketing-message"},[n("h1",[e._v("Marketing Message Component")]),n("p",[e._v(" Minimal marketing message component with configurable title, text, and cta as well as multiple events. ")]),n("h2",[e._v("Basic example")]),n("MarketingMessage",{attrs:{data:e.marketingData}}),n("h2",{staticClass:"mt-4"},[e._v("HTML")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._m(0)]),n("h2",{staticClass:"mt-4"},[e._v("Data Object")]),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._m(1)])],1)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-html"},[n("code",[e._v('<MarketingMessage :data="marketingData" />')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"language-json"},[n("code",[e._v('marketingData: {\n    slides: [\n        {\n            title: \'Slide 1 Title Text\',\n            body: "<p>this is slide 1\'s body content</p><p>now with a second line</p>",\n            image: \'slide1.jpg\'\n            cta: {\n                text: "Click me",\n                link: "https://google.com/",\n                title: "External link to google"\n            },\n        },\n        {\n            title: \'Slide 2 Title Text\',\n            body: "<p>this is slide 2\'s body content</p>",\n            image: \'slide2.jpg\'\n            cta: {\n                text: "Click me",\n                link: "https://google.com/",\n                title: "External link to google"\n            },\n        }\n    ]\n}')])])}],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"marketing-message h-64",style:e.shellBinder},e._l(e.data.slides,(function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.activeSlide==i,expression:"activeSlide == index"}],key:i,staticClass:"p-4"},[n("p",{staticClass:"text-4xl text-white"},[e._v(e._s(t.title))]),n("div",{staticClass:"text-white my-4",domProps:{innerHTML:e._s(t.body)}}),n("div",{staticClass:"-m-1 flex"},e._l(e.slideCount,(function(t){return n("div",{key:"mmnav"+(t-1),staticClass:"m-1 h-4 w-4 bg-white cursor-pointer",class:[t-1==e.activeSlide?"opacity-100":"opacity-50"],on:{click:function(n){return e.setActiveSlide(t-1)}}})})),0),n("div",{staticClass:"-m-1"},[n("button",{staticClass:"bg-white text-black py-1 px-3 m-1",on:{click:e.prevSlide}},[e._v(" Previous ")]),n("button",{staticClass:"bg-white text-black py-1 px-3 m-1",on:{click:e.nextSlide}},[e._v(" Next ")])])])})),0)},G=[],J={props:["data"],data:function(){return{activeSlide:0}},computed:{slideCount:function(){return this.data.slides.length},currentBGSource:function(){return n("ea82")("./".concat(this.data.slides[this.activeSlide].image))},shellBinder:function(){return{backgroundImage:"url(".concat(this.currentBGSource,")")}}},methods:{prevSlide:function(){this.activeSlide=0==this.activeSlide?this.slideCount-1:this.activeSlide-1},nextSlide:function(){this.activeSlide=this.activeSlide==this.slideCount-1?0:this.activeSlide+1},setActiveSlide:function(e){this.activeSlide=e}}},U=J,F=(n("1962"),Object(u["a"])(U,A,G,!1,null,"42ceef45",null)),I=F.exports,q={name:"Marketing Message",data:function(){return{marketingData:{slides:[{title:"Slide 1 Title Text",body:"<p>this is slide 1's body content</p><p>now with a second line</p>",image:"slide1.jpg",cta:{text:"Click me",link:"https://google.com/",title:"External link to google"}},{title:"Slide 2 Title Text",body:"<p>this is slide 2's body content</p>",image:"slide2.jpg",cta:{text:"Click me",link:"https://google.com/",title:"External link to google"}}]}}},components:{MarketingMessage:I}},z=q,K=Object(u["a"])(z,P,B,!1,null,null,null),Q=K.exports;i["default"].use(C["a"]);var R=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:D},{path:"/marketing-message",name:"Marketing Message",component:Q}],V=new C["a"]({mode:"history",base:"/hello-world/",routes:R}),W=V,X=n("2f62");i["default"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=n("aff1"),ee=n.n(Z),te=n("d36c"),ne=n("ecee"),ie=n("ad3d"),ae=n("c074");n("def6"),n("4357");ne["c"].add(ae["c"],ae["e"],ae["b"],ae["a"],ae["d"]),i["default"].component("font-awesome-icon",ie["a"]),i["default"].config.productionTip=!1,i["default"].use(ee.a),i["default"].use(te["a"]),new i["default"]({router:W,store:Y,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7fd5":function(e,t,n){"use strict";n("e311")},"9c0c":function(e,t,n){},d85a:function(e,t,n){},def6:function(e,t,n){},e1ef:function(e,t,n){},e311:function(e,t,n){},ea82:function(e,t,n){var i={"./slide1.jpg":"27a4","./slide2.jpg":"f862"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="ea82"},f862:function(e,t,n){e.exports=n.p+"img/slide2.ae3b476f.jpg"}});
//# sourceMappingURL=app.865f2d4e.js.map