module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=19)}({0:function(t,e){t.exports=flarum.core.compat.app},16:function(t,e){t.exports=flarum.core.compat["components/LogInButton"]},17:function(t,e){t.exports=flarum.core.compat["components/LogInButtons"]},18:function(t,e){t.exports=flarum.core.compat.extend},19:function(t,e,o){"use strict";o.r(e);var n=o(18),r=o(0),u=o.n(r),a=o(17),c=o.n(a),f=o(16),i=o.n(f);u.a.initializers.add("flarum-auth-facebook",function(){Object(n.extend)(c.a.prototype,"items",function(t){t.add("facebook",m(i.a,{className:"Button LogInButton--facebook",icon:"fab fa-facebook",path:"/auth/facebook"},u.a.translator.trans("flarum-auth-facebook.forum.log_in.with_facebook_button")))})})}});
//# sourceMappingURL=forum.js.map