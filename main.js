/*FrontMainJS - SomeBottle*/
 /*q.js*/
var md;if("object"!==typeof $){$={ls:[],lss:"",aj:function(a,c,d,g,l,k){if("false"!==a&&a){var f=new XMLHttpRequest,h="",m;for(m in c)h=h+m+"\x3d"+c[m]+"\x26";h=h.substring(0,h.length-1);"get"==g?f.open("get",a,k):"put"==g?(f.open("PUT",a,k),f.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),h=JSON.stringify(c)):"delete"==g?(f.open("DELETE",a,k),f.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),h=JSON.stringify(c)):f.open("post",a,k);f.setRequestHeader("Authorization",l);"multipart/form-data"!==g?(f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),f.send(h)):f.send(c);f.onreadystatechange=function(){4==f.readyState&&200==f.status?d.success(f.responseText,a):4==f.readyState&&200!==f.status&&d.failed(f.status,a)};k||(void 0!==f.responseText?d.success(f.responseText,a):d.failed(f.status,a))}}};var SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.script=function(a){$.scripturl||($.scripturl=[]);var c=document.createElement("script"),d=!1,g;for(g in $.ls)if($.ls[g]==a){d=!0;break}d||-1!=$.scripturl.indexOf(a)||($.ls[$.ls.length]=a,c.type="text/javascript",c.src=a,$.scripturl.push(a),document.body.appendChild(c))};$.ht=function(a,c,d){d=void 0===d?!0:d;var g=SC(c);if(!g)return console.log("Unable to find the Element:"+c),!1;g.innerHTML=a;os=g.getElementsByTagName("script");for(c=0;c<os.length;c++)if(void 0!==os[c].src&&null!==os[c].src&&""!==os[c].src)$.script(os[c].src);else try{a=os[c].innerHTML,d&&(a=B.r(a,"/*",""),a=B.r(a,"*/","")),eval(a)}catch(l){console.log("Page script Error: "+l.message)}};$.tr=function(a){b=a.split("?");return b[1]?b[0]:a}}if(!B){if(localStorage["obottle-ldpage"]){var e=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=e.replace("\x3c!--[LoadingArea]--\x3e",localStorage["obottle-ldpage"])}$.aj("./loading.html","",{success:function(a,c){B.hr("\x3c!--[LoadingArea]--\x3e",a);localStorage["obottle-ldpage"]=a},failed:function(a){console.log("LoadingPage Load Failed")}},"get","",!0);$.script("./library.js");window.htmls={};var B={moreperpage:0,r:function(a,c,d,g){if(void 0===g||g)for(;-1!==a.indexOf(c);)a=a.replace(c,d);else a=a.replace(c,d);return a},hr:function(a,c){var d=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=this.r(d,a,c)},preventscript:function(){var a=document.getElementsByTagName("html")[0].getElementsByTagName("script"),c;for(c in a)a[c].src&&-1==$.scripturl.indexOf(a[c].src)&&$.scripturl.push(a[c].src)},gt:function(a,c,d){d=(d=void 0===d?!1:d)?d:document.getElementsByTagName("html")[0].innerHTML;try{return d.split(a)[1].split(c)[0]}catch(g){return!1}},lazypre:function(a){var c=document.createElement("div");c.innerHTML=a;a=c.getElementsByTagName("img");for(var d in a){var g=a[d].src;a[d].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACyCAYAAAD1XdWcAAAB8klEQVR4nO3SQRHAIADAsDH/ngEVcEcTBX10zO2Dx/23A+AEo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ2EBaeOBWBLIAKeAAAAAElFTkSuQmCC";a[d].name="[lazy]"+g}return c.innerHTML},lazycheck:function(){var a=window.innerHeight,c=document.documentElement.scrollTop||document.body.scrollTop,d=document.getElementsByTagName("img"),g;for(g in d)if(a+c>d[g].offsetTop&&"undefined"!==d[g].name&&d[g].name){var l=d[g].name;d[g].name="";d[g].src=l.split("[lazy]")[1]}},templonload:0,templateloaded:[],tpcheck:function(){this.loadshow();var a=this.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e");if(window.templjson)if(window.mainjson||-1===window.templjson.usemain.indexOf(a))if("object"!==typeof showdown)c=this,setTimeout(function(){return c.tpcheck()},200);else{this.preventscript();var c=this,d=window.templjson;d.necessary.push(a);a==d.templatehtmls.postlist&&d.necessary.push(d.templatehtmls.postitem);for(var g in d.necessary)if(-1==c.templateloaded.indexOf(d.necessary[g])){c.templonload+=1;var l=!1,k=q("r","template-"+d.necessary[g],"","","");k.c&&(l=!0,a=d.necessary[g],console.log("Template using cache:"+a),window.htmls[a]=k.c,c.templateloaded.push(a),--c.templonload);$.aj(d.necessary[g],"",{success:function(a,d){window.htmls[d]=a;l?k.c!==a?q("w","template-"+d,a,timestamp(),""):q("e","template-"+d,"","",1):(c.templateloaded.push(d),--c.templonload,q("w","template-"+d,a,timestamp(),""))},failed:function(a){console.log("Necessary HTML Load Failed...")}},"get","",!0)}var f=setInterval(function(){0>=c.templonload&&(clearInterval(f),c.renderer())},1E3)}else{var c=this;setTimeout(function(){return c.tpcheck()},200)}else{var h=this;$.aj("template.json","",{success:function(a){window.templjson=JSON.parse(a);return h.tpcheck()},failed:function(a){console.log("TemplateJson Load Failed.")}},"get","",!0)}window.mainjson||window.mainjsonrequest||(h=this,window.mainjsonrequest=!0,$.aj("main.json","",{success:function(a){window.mainjson=JSON.parse(a.replace(/[\r\n]/g,""));h.moreperpage=parseInt(window.mainjson.more_per_page)},failed:function(a){console.log("MainJson Load Failed")}},"get","",!0))},itempage:0,switchpage:0,nowpage:0,realpage:1,searchw:"",hashexist:!1,renderer:function(){var a=window.templjson;md=new showdown.Converter;var c=window.htmls[a.templatehtmls.cloth],d=window.htmls[a.templatehtmls.main],g=window.htmls[a.templatehtmls.comment],l=this.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e"),k=window.mainjson;if(l==a.templatehtmls.post){var f=this,h=f.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e"),m=f.gt("\x3c!--[PostTitle]--\x3e","\x3c!--[PostTitleEnd]--\x3e"),k=f.gt("\x3c!--[PostDate]--\x3e","\x3c!--[PostDateEnd]--\x3e"),p=f.gt("\x3c!--[PostTag]--\x3e","\x3c!--[PostTagEnd]--\x3e"),n=f.gt("\x3c!--[PostID]--\x3e","\x3c!--[PostIDEnd]--\x3e"),r=f.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),h=f.r(window.htmls[a.templatehtmls.post],"{[postcontent]}",f.lazypre(md.makeHtml(h.trim()))),m=f.r(h,"{[posttitle]}",m),h=[];isNaN(k)?p="\u9875\u9762":(h=p.split(","),p="",h.forEach(function(c,d){p=p+'\x3ca href\x3d"'+a.generatehtmls.tags+"#"+encodeURIComponent(c)+'" class\x3d"taglink"\x3e'+c+"\x3c/a\x3e,"}),p=p.substr(0,p.length-1));m=f.r(m,"{[posttags]}",p);m=f.r(m,"{[postdate]}",k);d=f.r(d,"{[contents]}",m);c=f.r(c,"{[main]}",d);c=f.r(c,"{[title]}",r);c=f.r(c,"{[comments]}",g);c=f.r(c,"{[pid]}",n);c=f.r(c,"{[pagetype]}",l);isNaN(k)&&(c=c.split("\x3c!--PostEnd--\x3e")[0]+"\x3c!--PostEnd--\x3e");$.ht(c,"container");transitionchecker("loading",function(){f.lazycheck()});f.loadhide()}else if(l==a.templatehtmls.postlist){f=this;h=this.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e");r=this.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,"");r=r.replace("-","");h=this.r(window.htmls[a.templatehtmls.postlist],"{[postitems]}",md.makeHtml(h.trim()));d=this.r(d,"{[contents]}",h);c=this.r(c,"{[main]}",d);c=this.r(c,"{[title]}",r);c=this.r(c,"{[pagetype]}",l);this.itempage=parseInt(k.posts_per_page);$.ht(c,"container");this.loadhide();var v=setInterval(function(){if(f.gt("\x3c!--[PageType]","[PageTypeEnd]--\x3e")!==a.templatehtmls.postlist)return PJAX.sel("container"),PJAX.start(),f.switchpage=0,clearInterval(v),!1;f.indexpagechecker()},500)}else if(l==a.templatehtmls.archives){var r=this.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=k.dateindex,t="",x=0;for(h in g)n=g[h].toString().substring(0,4),n!==x&&(x=n,t=""!==t?t+("\x3c/ul\x3e\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e"):t+("\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e")),n=h.replace("post",""),m=Base64.decode(k.postindex[n].title),t=k.postindex[n].link?t+("\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'"+k.postindex[n].link+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e"):t+("\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'post-"+n+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e");h=this.r(window.htmls[a.templatehtmls.archives],"{[archives]}",t+"\x3c/ul\x3e");d=this.r(d,"{[contents]}",h);c=this.r(c,"{[main]}",d);c=this.r(c,"{[title]}",r);c=this.r(c,"{[pagetype]}",l);$.ht(c,"container");this.loadhide()}else if(l==a.templatehtmls.tags){var r=this.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=$.tr(window.location.href),u="",f=this,k=k.postindex,w=[];for(m in k)n=k[m].tags.split(","),n.forEach(function(a,c){""!==a&&-1==w.indexOf(a)&&w.push(a)});w.forEach(function(a,c){u+="[\x3ca href\x3d'#"+encodeURIComponent(a)+"' class\x3d'itemlink'\x3e"+a+"\x3c/a\x3e]"});this.alltaghtml=u;-1!==g.indexOf("#")&&(this.nowtag=n=g.split("#")[1],"alltags"!==n&&(u="\x3cscript\x3eB.taguper('"+n+"');PJAX.start();\x3c/script\x3e"));v=setInterval(function(){if(-1==window.location.href.indexOf(a.generatehtmls.tags)&&-1==window.location.href.indexOf(a.generatehtmls.tags.replace(".html","")))return PJAX.sel("container"),PJAX.start(),clearInterval(v),!1;f.tagpagechecker()},500);h=this.r(window.htmls[a.templatehtmls.tags],"{[tags]}",u);d=this.r(d,"{[contents]}",h);c=this.r(c,"{[main]}",d);c=this.r(c,"{[title]}",r);c=this.r(c,"{[pagetype]}",l);$.ht(c,"container");this.loadhide()}},nowtag:"",alltaghtml:"",taguper:function(a){a=decodeURIComponent(a);document.getElementsByTagName("html");var c=window.mainjson,d=c.dateindex,g=c.postindex,c=[],l="",k;for(k in d)d=k.replace("post",""),-1!==g[d].tags.indexOf(a)&&c.push(d);l+="\x3cul\x3e";c.forEach(function(a,c){var d=g[a],f="post-"+a+".html";d.link&&(f=d.link+".html");l+="\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'"+f+"'\x3e"+Base64.decode(d.title)+"\x3c/a\x3e\x3c/li\x3e"});SC("tags").innerHTML=l},tagpagechecker:function(){document.getElementsByTagName("html");var a=$.tr(window.location.href);-1==a.indexOf("#")?(PJAX.pause(),window.location.href+="#alltags",PJAX.start()):(a=a.split("#")[1],this.nowtag!==a&&(this.nowtag=a,"alltags"==a?SC("tags")&&(SC("tags").innerHTML=this.alltaghtml):this.taguper(a),PJAX.start()))},indexpagechecker:function(){document.getElementsByTagName("html");var a=window.templjson,c=$.tr(decodeURIComponent(window.location.href)),d=window.mainjson,g=parseInt(d.posts_per_page);if(-1!==c.indexOf("#")){this.hashexist=!0;var l=c.split("#")[1];if(-1==c.indexOf("#!")){if(!isNaN(l)){var k=parseInt(l)-1;this.nowpage!==k&&(this.nowpage=k,this.itempage=g*k*this.moreperpage,SC("postitems").innerHTML="",this.more(),this.realpage=k+1,this.switchpage=0)}}else if(g="",a=window.htmls[a.templatehtmls.postitem],c=c.split("#!")[1],c!==this.searchw){this.searchw=c;d=d.postindex;for(k in d){var f=Base64.decode(d[k].title),h=Base64.decode(d[k].intro),l=d[k].date,m=d[k].tags;if(-1!==f.indexOf(c)||-1!==h.indexOf(c)||-1!==l.indexOf(c)||-1!==m.indexOf(c))f=B.r(a,"{[postitemtitle]}",f),h=B.r(f,"{[postitemintro]}",h+"..."),l=B.r(h,"{[postitemdate]}",l),l=B.r(l,"{[postitemlink]}","post-"+k+".html"),g+=l}""==g&&(g="\x3ch2\x3e\u5565\u90fd\u6ca1\u627e\u5230\x3c/h2\x3e");window.scrollTo(0,0);SC("postitems").innerHTML=g;SC("morebtn").style.display="none";PJAX.start()}}else this.hashexist&&(this.realpage=1,this.switchpage=0,this.hashexist=!1)},loadshow:function(){setTimeout(function(){SC("loading").style.opacity=1;SC("loading").style.zIndex=200},100)},loadhide:function(){setTimeout(function(){SC("loading").style.opacity=0;SC("loading").style.zIndex=-1},100)},morehtmls:{},more:function(){var a=this.itempage+1,c=0,d=0,g="",l=window.mainjson,k=window.htmls[window.templjson.templatehtmls.postitem],f=parseInt(l.posts_per_page),l=window.mainjson,h=l.dateindex,m;for(m in h)if(a<=d){if(c<f){var h=m.replace("post",""),p=l.postindex[h];if(p.link)--c;else var n=B.r(k,"{[postitemtitle]}",Base64.decode(p.title)),n=B.r(n,"{[postitemintro]}",Base64.decode(p.intro)+"..."),p=B.r(n,"{[postitemdate]}",p.date),h=B.r(p,"{[postitemlink]}","post-"+h+".html"),g=g+h;c+=1}}else d+=1;""==g?(g="\x3ch3 style\x3d'color:#AAA;'\x3e\u6ca1\u6709\u66f4\u591a\u4e86\u5462\x3c/h3\x3e",SC("morebtn").style.display="none"):SC("morebtn").style.display="block";this.itempage+=f;this.switchpage>=this.moreperpage-1?(window.scrollTo(0,0),SC("postitems").innerHTML=g,this.switchpage=0,this.realpage+=1,PJAX.pause(),window.location.href="#"+this.realpage):(SC("postitems").innerHTML=SC("postitems").innerHTML+g,this.switchpage+=1);PJAX.start()}};window.addEventListener("pjaxstart",function(){B.loadshow()},!1);window.addEventListener("pjaxfinish",function(){B.loadhide()},!1)}function transitionchecker(a,c){function d(){c();SC(a).removeEventListener(g,d)}var g="",l={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},k;for(k in l)void 0!==SC(a).style[k]&&(g=l[k]);SC(a).addEventListener(g,d)}var mainhost=window.location.host,dt=(new Date).getTime();if(void 0==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),LoadedPage:{},lasthref:window.location.href,preventurl:[],recenturl:"",replace:"",sel:function(a){this.replace=a},jump:function(a){var c=encodeURIComponent(a),d=this,g=!1,l=d.replace;if(-1!==d.recenturl.indexOf("#")&&-1!==a.indexOf("#"))return!1;-1==d.recenturl.indexOf("#")&&-1!==a.indexOf("#")&&(B.nowpage=0);window.dispatchEvent(d.PJAXStart);transitionchecker("loading",function(){if(d.LoadedPage[c])$.ht(d.LoadedPage[c],l,!1),setTimeout(function(){window.dispatchEvent(d.PJAXFinish)},1E3);else{var k=q("r",c,"","","");k.c&&(g=!0,$.ht(k.c,l,!1));$.aj(a,{},{success:function(f){d.recenturl=a;d.LoadedPage[c]=f;g?k.c!==f?(q("w",c,f,timestamp(),""),$.ht(f,l,!1)):q("e",c,"","",1):($.ht(f,l,!1),q("w",c,f,timestamp(),""));setTimeout(function(){window.dispatchEvent(d.PJAXFinish)},1E3)},failed:function(a){window.dispatchEvent(d.PJAXFinish)}},"get","",!0)}})},start:function(){var a=this;a.recenturl=window.location.href;var c=document.getElementsByTagName("a"),d;for(d in c)c[d].onclick=function(c){if(-1!==a.preventurl.indexOf(this.href))return!0;window.history.pushState(null,null,this.href);c.preventDefault();a.jump(this.href)};window.onpopstate=function(a){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)}},pause:function(){window.onpopstate=function(a){return!0}},autoprevent:function(){var a=document.getElementsByTagName("a"),c=window.location.host,d;for(d in a)void 0!==a[d].href&&-1==a[d].href.indexOf(c)&&this.preventurl.push(a[d].href)}};function q(a,c,d,g,l){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");var k=0,f="",h=JSON.parse(localStorage.obottle),m=[];"undefined"!==typeof h[c]&&(k=h[c].t,f=h[c].h);if("w"==a){h=JSON.parse(localStorage.obottle);a={};a.h=d;a.t=g;a.rt=0;h[c]=a;try{localStorage.obottle=JSON.stringify(h)}catch(n){for(var p in h)(20>=Number(h[p].rt)||172800<=Number(g)-Number(h[p].t))&&delete h[p];localStorage.obottle=JSON.stringify(h)}}else{if("r"==a)return m.t=k,m.c=f,m;"e"==a&&(h=JSON.parse(localStorage.obottle),h[c].rt=Number(h[c].rt)+l,localStorage.obottle=JSON.stringify(h))}}function timestamp(){return(new Date).getTime()}window.onscroll=function(){B.lazycheck()};B.tpcheck();
