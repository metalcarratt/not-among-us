(function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"09a3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["StartPage"===e.page?n("StartPage",{on:{host:function(t){e.page="HostPage"},join:function(t){e.page="NewPage"}}}):"HostPage"===e.page?n("HostGamePage"):"NewPage"===e.page?n("NewPlayerPage"):e._e()],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Not Among Us")]),n("form",[n("fieldset",[n("label",[e._v("Join game:")]),n("input",{attrs:{type:"text",placeholder:"Enter code"}}),n("button",{on:{click:function(t){return e.$emit("join")}}},[e._v("Join Game")])]),n("fieldset",[n("label",[e._v("Or:")]),n("button",{on:{click:function(t){return e.$emit("host")}}},[e._v("Host Game")])])])])},i=[],l=n("2877"),u={},s=Object(l["a"])(u,c,i,!1,null,"ee51569c",null),f=s.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Not Among Us")]),n("label",[e._v("Game code:")]),n("p",{staticClass:"code"},[e._v(e._s(e.code))])])},d=[],g=n("1da1"),v=(n("96cf"),n("bc3a")),b=n.n(v),m={data:function(){return{code:""}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("http://192.168.1.92:3000/new");case 2:n=t.sent,console.log(n),e.code=n.data.gameId;case 5:case"end":return t.stop()}}),t)})))()}},h=m,_=(n("b450"),Object(l["a"])(h,p,d,!1,null,"6c7361e4",null)),w=_.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Not Among Us")]),n("form",[n("fieldset",[n("label",{staticClass:"left"},[e._v("New Player:")]),n("ul",[n("li",{staticClass:"blue"}),n("li",{staticClass:"red"}),n("li",{staticClass:"yellow"}),n("li",{staticClass:"white"}),n("li",{staticClass:"green"}),n("li",{staticClass:"purple"}),n("li",{staticClass:"brown"}),n("li",{staticClass:"black"})]),n("input",{attrs:{type:"text",placeholder:"Name"}}),n("button",[e._v("Join")])])])])}],O=(n("dee2"),{}),j=Object(l["a"])(O,y,P,!1,null,"529f7ab8",null),x=j.exports,C={name:"App",data:function(){return{page:"StartPage"}},components:{StartPage:f,HostGamePage:w,NewPlayerPage:x}},N=C,S=(n("034f"),Object(l["a"])(N,a,o,!1,null,null,null)),$=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e($)}}).$mount("#app")},"85ec":function(e,t,n){},b450:function(e,t,n){"use strict";n("09a3")},dee2:function(e,t,n){"use strict";n("e740")},e740:function(e,t,n){}});
//# sourceMappingURL=app.d05fdef4.js.map