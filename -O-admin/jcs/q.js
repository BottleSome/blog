"use strict";var $=new Object;$.ls=new Array,$.lss="",$.hash=window.location.href;var SC=function(e){return"body"==e?document.body:document.getElementById(e)};$.chash=function(e){return $.tr(window.location.href)==e},$.script=function(e){$.scripturl||($.scripturl=[]);var t,n=document.createElement("script"),r=!1;for(t in $.ls)if($.ls[t]==e){r=!0;break}r||-1!=$.scripturl.indexOf(e)||($.ls[$.ls.length]=e,n.type="text/javascript",n.src=e,$.scripturl.push(e),document.body.appendChild(n))},$.tr=function(e){var t=e;(1<(t=t.split("?")).length-1||-1!==e.indexOf("!"))&&-1!==e.indexOf("?")&&t.pop();var n,r="";for(n in t)r=r+t[n]+"?";return r=r.substring(0,r.length-1)},$.op=function(e,t){ht=SC(t),1==Number(e)?(ht.style.transition="0.5s ease",ht.style.opacity="1"):(ht.style.transition="none",ht.style.opacity="0")},$.rm=function(e){SC(e).parentNode.removeChild(SC(e))},$.ht=function(e,t){t=SC(t);t.innerHTML=e;for(var n=t.getElementsByTagName("script"),r=0;r<n.length;r++)void 0!==n[r].src&&null!==n[r].src&&""!==n[r].src?$.script(n[r].src):setTimeout(n[r].innerHTML,0)},$.ce=function(e){return null!=e&&"undefined"!=String(e)&&!e.match(/^\s*$/)},$.getquery=function(e){e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(e);return null!=e?unescape(e[2]):null},$.param=function(e,t=!1){var n,r="?";for(n in e)r+=n+"="+e[n]+"&";return r=r.slice(0,r.length-1),t?Base64.encode(JSON.stringify(e)):r},$.ft=function(t,e,n,r,i){let c={body:JSON.stringify(e),cache:"default",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),method:r.toUpperCase()};"get"==r&&delete c.body,$.ce(i)&&c.headers.append("Authorization",i),fetch(t,c).then(e=>e.text()).then(e=>n.success(e,t)).catch(e=>n.failed(e,t))},$.r=function(e,t,n,r=!0){if(r)for(;-1!==e.indexOf(t);)e=e.replace(t,n);else e=e.replace(t,n);return e};