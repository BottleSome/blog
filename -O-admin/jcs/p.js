"use strict";var PJAX,mainhost=window.location.host,dt=(new Date).getTime();null!=PJAX&&null!=PJAX||(PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),lasthref:window.location.href,preventurl:new Array,replace:"",sel:function(t){this.replace=t},jump:function(t){var e=this;window.dispatchEvent(e.PJAXStart),$.ft(t,{},{success:function(t){var n=e.replace;$.ht(t,n),window.dispatchEvent(e.PJAXFinish)},failed:function(t){window.dispatchEvent(e.PJAXFinish)}},"get","")},start:function(){var t,n=this,e=document.getElementsByTagName("a");for(t in e)e[t].onclick=function(t){if(-1!==n.preventurl.indexOf(this.href)||-1!==this.href.indexOf("#"))return!0;window.history.pushState(null,null,this.href),t.preventDefault(),n.jump(this.href)};window.onpopstate=function(t){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)}},autoprevent:function(){var t,n=document.getElementsByTagName("a"),e=window.location.host;for(t in n)void 0!==n[t].href&&-1==n[t].href.indexOf(e)&&this.preventurl.push(n[t].href)}});