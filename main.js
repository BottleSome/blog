/*FrontMainJS - SomeBottle*/
 /*q.js*/
var md;if("object"!==typeof $){$={ls:[],lss:"",aj:function(a,d,c,f,g,l){if("false"!==a&&a){var h=new XMLHttpRequest,k="",m;for(m in d)k=k+m+"\x3d"+d[m]+"\x26";k=k.substring(0,k.length-1);"get"==f?h.open("get",a,l):"put"==f?(h.open("PUT",a,l),h.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),k=JSON.stringify(d)):"delete"==f?(h.open("DELETE",a,l),h.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),k=JSON.stringify(d)):h.open("post",a,l);h.setRequestHeader("Authorization",g);"multipart/form-data"!==f?(h.setRequestHeader("Content-type","application/x-www-form-urlencoded"),h.send(k)):h.send(d);h.onreadystatechange=function(){4==h.readyState&&200==h.status?c.success(h.responseText,a):4==h.readyState&&200!==h.status&&c.failed(h.status,a)};l||(void 0!==h.responseText?c.success(h.responseText,a):c.failed(h.status,a))}}};var SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.script=function(a){$.scripturl||($.scripturl=[]);var d=document.createElement("script"),c=!1,f;for(f in $.ls)if($.ls[f]==a){c=!0;break}c||-1!=$.scripturl.indexOf(a)||($.ls[$.ls.length]=a,d.type="text/javascript",d.src=a,$.scripturl.push(a),document.body.appendChild(d))};$.ht=function(a,d,c){c=void 0===c?!0:c;var f=SC(d);if(!f)return console.log("Unable to find the Element:"+d),!1;f.innerHTML=a;os=f.getElementsByTagName("script");for(d=0;d<os.length;d++)if(void 0!==os[d].src&&null!==os[d].src&&""!==os[d].src)$.script(os[d].src);else try{a=os[d].innerHTML,c&&(a=B.r(a,"/*",""),a=B.r(a,"*/","")),eval(a)}catch(g){console.log("Page script Error: "+g.message)}};$.tr=function(a){b=a.split("?");return b[1]?b[0]:a}}if(!B){if(localStorage["obottle-ldpage"]){var e=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=e.replace("\x3c!--[LoadingArea]--\x3e",localStorage["obottle-ldpage"])}$.aj("./loading.html","",{success:function(a,d){B.hr("\x3c!--[LoadingArea]--\x3e",a);localStorage["obottle-ldpage"]=a},failed:function(a){console.log("LoadingPage Load Failed")}},"get","",!0);$.script("./library.js");window.htmls={};var B={moreperpage:0,r:function(a,d,c,f){if(void 0===f||f)for(;-1!==a.indexOf(d);)a=a.replace(d,c);else a=a.replace(d,c);return a},scrolltop:function(a,d){var c=Math.floor(parseInt(document.body.scrollTop)/3),f=Math.pow(a,2)/(2*c),g=0,l=setInterval(function(){var a=document.body.scrollTop;parseInt(a)>2*c?(g+=f,document.body.scrollTop=parseInt(a)-g):parseInt(a)>c?document.body.scrollTop=parseInt(a)-g:parseInt(a)<=c&&(g-=f,g<=d&&(g=d),0>=parseInt(a)?(document.body.scrollTop=0,clearInterval(l)):document.body.scrollTop=parseInt(a)-g)},10)},hr:function(a,d){var c=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=this.r(c,a,d)},preventscript:function(){var a=document.getElementsByTagName("html")[0].getElementsByTagName("script"),d;for(d in a)a[d].src&&-1==$.scripturl.indexOf(a[d].src)&&$.scripturl.push(a[d].src)},gt:function(a,d,c){c=(c=void 0===c?!1:c)?c:document.getElementsByTagName("html")[0].innerHTML;try{return c.split(a)[1].split(d)[0]}catch(f){return!1}},lazypre:function(a){var d=document.createElement("div");d.innerHTML=a;a=d.getElementsByTagName("img");for(var c in a)if(a[c].src){var f=a[c].src;a[c].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACyCAYAAAD1XdWcAAAB8klEQVR4nO3SQRHAIADAsDH/ngEVcEcTBX10zO2Dx/23A+AEo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ2EBaeOBWBLIAKeAAAAAElFTkSuQmCC";a[c].setAttribute("data-src","[lazy]"+f)}return d.innerHTML},lazycheck:function(){var a=window.innerHeight,d=document.documentElement.scrollTop||document.body.scrollTop,c=document.getElementsByTagName("img"),f;for(f in c)if(a+d>c[f].offsetTop){var g=c[f].getAttribute("data-src");"undefined"!==g&&g&&(c[f].setAttribute("data-src",""),c[f].src=g.split("[lazy]")[1])}},templonload:0,templateloaded:[],tpcheck:function(){var a=this,d=this;a.loadshow();var c=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e");if(window.templjson)if(window.mainjson||-1===window.templjson.usemain.indexOf(c))if("object"!==typeof showdown)setTimeout(function(){return d.tpcheck()},200);else{a.preventscript();var f=window.templjson;f.necessary.push(c);c==f.templatehtmls.postlist&&f.necessary.push(f.templatehtmls.postitem);for(var g in f.necessary)if(-1==d.templateloaded.indexOf(f.necessary[g])){d.templonload+=1;var l=!1,h=q("r","template-"+f.necessary[g],"","","");h.c&&(l=!0,c=f.necessary[g],console.log("Template using cache:"+c),window.htmls[c]=h.c,d.templateloaded.push(c),--d.templonload);$.aj(f.necessary[g],"",{success:function(a,c){window.htmls[c]=a;l?h.c!==a?q("w","template-"+c,a,timestamp(),""):q("e","template-"+c,"","",1):(d.templateloaded.push(c),--d.templonload,q("w","template-"+c,a,timestamp(),""))},failed:function(a){console.log("Necessary HTML Load Failed...")}},"get","",!0)}var k=setInterval(function(){0>=d.templonload&&(clearInterval(k),d.renderer())},500)}else setTimeout(function(){return d.tpcheck()},200);else $.aj("template.json","",{success:function(c){window.templjson=JSON.parse(c);return a.tpcheck()},failed:function(a){console.log("TemplateJson Load Failed.")}},"get","",!0);window.mainjson||window.mainjsonrequest||(window.mainjsonrequest=!0,$.aj("main.json","",{success:function(c){window.mainjson=JSON.parse(c.replace(/[\r\n]/g,""));a.moreperpage=parseInt(window.mainjson.more_per_page)},failed:function(a){console.log("MainJson Load Failed")}},"get","",!0))},itempage:0,switchpage:0,nowpage:0,realpage:1,searchw:"",hashexist:!1,itempagefixer:function(){var a=window.mainjson,d=1,c;for(c in a.dateindex){var f=this.itempage,g=c.replace("post",""),g=a.postindex[g];d<=f&&g.link&&(this.itempage+=1);d+=1}--this.itempage},renderer:function(){var a=this,d=window.templjson;md=new showdown.Converter;var c=window.htmls[d.templatehtmls.cloth],f=window.htmls[d.templatehtmls.main],g=window.htmls[d.templatehtmls.comment],l=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e"),h=window.mainjson;if(l==d.templatehtmls.post){var k=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e"),m=a.gt("\x3c!--[PostTitle]--\x3e","\x3c!--[PostTitleEnd]--\x3e"),h=a.gt("\x3c!--[PostDate]--\x3e","\x3c!--[PostDateEnd]--\x3e"),p=a.gt("\x3c!--[PostTag]--\x3e","\x3c!--[PostTagEnd]--\x3e"),n=a.gt("\x3c!--[PostID]--\x3e","\x3c!--[PostIDEnd]--\x3e"),r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),k=a.r(window.htmls[d.templatehtmls.post],"{[postcontent]}",a.lazypre(md.makeHtml(k.trim()))),m=a.r(k,"{[posttitle]}",m),k=[];isNaN(h)?p="\u9875\u9762":(k=p.split(","),p="",k.forEach(function(a,c){p=p+'\x3ca href\x3d"'+d.generatehtmls.tags+"#"+encodeURIComponent(a)+'" class\x3d"taglink"\x3e'+a+"\x3c/a\x3e,"}),p=p.substr(0,p.length-1));m=a.r(m,"{[posttags]}",p);m=a.r(m,"{[postdate]}",h);f=a.r(f,"{[contents]}",m);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[comments]}",g);c=a.r(c,"{[pid]}",n);c=a.r(c,"{[pagetype]}",l);isNaN(h)&&(c=c.split("\x3c!--PostEnd--\x3e")[0]+"\x3c!--PostEnd--\x3e");$.ht(c,"container");transitionchecker("loading",function(){a.lazycheck()});a.loadhide()}else if(l==d.templatehtmls.postlist){k=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e");r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,"");r=r.replace("-","");k=a.r(window.htmls[d.templatehtmls.postlist],"{[postitems]}",md.makeHtml(k.trim()));f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",l);a.itempage=parseInt(h.posts_per_page);a.itempagefixer();$.ht(c,"container");a.loadhide();var v=setInterval(function(){if(a.gt("\x3c!--[PageType]","[PageTypeEnd]--\x3e")!==d.templatehtmls.postlist)return PJAX.sel("container"),PJAX.start(),a.switchpage=0,clearInterval(v),!1;a.indexpagechecker()},500)}else if(l==d.templatehtmls.archives){var r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=h.dateindex,t="",x=0;for(k in g)n=g[k].toString().substring(0,4),n!==x&&(x=n,t=""!==t?t+("\x3c/ul\x3e\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e"):t+("\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e")),n=k.replace("post",""),m=Base64.decode(h.postindex[n].title),t=h.postindex[n].link?t+("\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'"+h.postindex[n].link+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e"):t+("\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'post-"+n+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e");k=a.r(window.htmls[d.templatehtmls.archives],"{[archives]}",t+"\x3c/ul\x3e");f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",l);$.ht(c,"container");a.loadhide()}else if(l==d.templatehtmls.tags){var r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=$.tr(window.location.href),u="",h=h.postindex,w=[];for(m in h)n=h[m].tags.split(","),n.forEach(function(a,c){""!==a&&-1==w.indexOf(a)&&w.push(a)});w.forEach(function(a,c){u+="[\x3ca href\x3d'#"+encodeURIComponent(a)+"' class\x3d'itemlink'\x3e"+a+"\x3c/a\x3e]"});a.alltaghtml=u;-1!==g.indexOf("#")&&(n=g.split("#")[1],a.nowtag=n,"alltags"!==n&&(u="\x3cscript\x3eB.taguper('"+n+"');PJAX.start();\x3c/script\x3e"));v=setInterval(function(){if(-1==window.location.href.indexOf(d.generatehtmls.tags)&&-1==window.location.href.indexOf(d.generatehtmls.tags.replace(".html","")))return PJAX.sel("container"),PJAX.start(),clearInterval(v),!1;a.tagpagechecker()},500);k=a.r(window.htmls[d.templatehtmls.tags],"{[tags]}",u);f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",l);$.ht(c,"container");a.loadhide()}},nowtag:"",alltaghtml:"",taguper:function(a){a=decodeURIComponent(a);document.getElementsByTagName("html");var d=window.mainjson,c=d.dateindex,f=d.postindex,d=[],g="",l;for(l in c)c=l.replace("post",""),-1!==f[c].tags.indexOf(a)&&d.push(c);g+="\x3cul\x3e";d.forEach(function(a,c){var d=f[a],h="post-"+a+".html";d.link&&(h=d.link+".html");g+="\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'"+h+"'\x3e"+Base64.decode(d.title)+"\x3c/a\x3e\x3c/li\x3e"});SC("tags").innerHTML=g},tagpagechecker:function(){document.getElementsByTagName("html");var a=$.tr(window.location.href);-1==a.indexOf("#")?(PJAX.pause(),window.location.href+="#alltags",PJAX.start()):(a=a.split("#")[1],this.nowtag!==a&&(this.nowtag=a,"alltags"==a?SC("tags")&&(SC("tags").innerHTML=this.alltaghtml):this.taguper(a),PJAX.start()))},indexpagechecker:function(){document.getElementsByTagName("html");var a=window.templjson,d=$.tr(decodeURIComponent(window.location.href)),c=window.mainjson,f=parseInt(c.posts_per_page);if(-1!==d.indexOf("#")){this.hashexist=!0;var g=d.split("#")[1];if(-1==d.indexOf("#!")){if(!isNaN(g)){var l=parseInt(g)-1;this.nowpage!==l&&(this.nowpage=l,this.itempage=f*l*this.moreperpage,this.itempagefixer(),SC("postitems").innerHTML="",this.more(),this.realpage=l+1,this.switchpage=0)}}else if(f="",a=window.htmls[a.templatehtmls.postitem],d=d.split("#!")[1],d!==this.searchw){this.searchw=d;c=c.postindex;for(l in c){var h=Base64.decode(c[l].title).toLowerCase(),k=Base64.decode(c[l].intro).toLowerCase(),g=c[l].date.toLowerCase(),m=c[l].tags.toLowerCase(),d=d.toLowerCase();if(-1!==h.indexOf(d)||-1!==k.indexOf(d)||-1!==g.indexOf(d)||-1!==m.indexOf(d))h=B.r(a,"{[postitemtitle]}",h),k=B.r(h,"{[postitemintro]}",k+"..."),g=B.r(k,"{[postitemdate]}",g),g=B.r(g,"{[postitemlink]}","post-"+l+".html"),f+=g}""==f&&(f="\x3ch2\x3e\u5565\u90fd\u6ca1\u627e\u5230\x3c/h2\x3e");window.scrollTo(0,0);SC("postitems").innerHTML=f;SC("morebtn").style.display="none";PJAX.start()}}else this.hashexist&&(this.realpage=1,this.switchpage=0,this.hashexist=!1)},loadshow:function(){setTimeout(function(){SC("loading").style.opacity=1;SC("loading").style.zIndex=200},100)},loadhide:function(){setTimeout(function(){SC("loading").style.opacity=0;SC("loading").style.zIndex=-1},100)},morehtmls:{},more:function(){var a=this.itempage+1,d=0,c=0,f="",g=window.mainjson,l=window.htmls[window.templjson.templatehtmls.postitem],h=parseInt(g.posts_per_page),g=window.mainjson,k=g.dateindex,m;for(m in k)if(a<=c){if(d<h){var k=m.replace("post",""),p=g.postindex[k];if(p.link)this.itempage+=1,--d;else var n=B.r(l,"{[postitemtitle]}",Base64.decode(p.title)),n=B.r(n,"{[postitemintro]}",Base64.decode(p.intro)+"..."),p=B.r(n,"{[postitemdate]}",p.date),k=B.r(p,"{[postitemlink]}","post-"+k+".html"),f=f+k;d+=1}}else c+=1;""==f?(f="\x3ch3 style\x3d'color:#AAA;'\x3e\u6ca1\u6709\u66f4\u591a\u4e86\u5462\x3c/h3\x3e",SC("morebtn").style.display="none"):SC("morebtn").style.display="block";this.itempage+=h;this.switchpage>=this.moreperpage-1?(SC("postitems").innerHTML=f,this.scrolltop(20,2),this.switchpage=0,this.realpage+=1,PJAX.pause(),window.location.href="#"+this.realpage):(SC("postitems").innerHTML=SC("postitems").innerHTML+f,this.switchpage+=1);PJAX.start()}};window.addEventListener("pjaxstart",function(){B.loadshow()},!1);window.addEventListener("pjaxfinish",function(){B.loadhide()},!1)}function transitionchecker(a,d){function c(){d();SC(a).removeEventListener(f,c)}var f="",g={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},l;for(l in g)void 0!==SC(a).style[l]&&(f=g[l]);SC(a).addEventListener(f,c)}var mainhost=window.location.host,dt=(new Date).getTime();if(void 0==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),LoadedPage:{},lasthref:window.location.href,preventurl:[],recenturl:"",replace:"",sel:function(a){this.replace=a},jump:function(a){var d=encodeURIComponent(a),c=this,f=!1,g=c.replace;if(-1!==c.recenturl.indexOf("#")&&-1!==a.indexOf("#"))return!1;-1==c.recenturl.indexOf("#")&&-1!==a.indexOf("#")&&(B.nowpage=0);window.dispatchEvent(c.PJAXStart);transitionchecker("loading",function(){window.scrollTo(0,0);if(c.LoadedPage[d])$.ht(c.LoadedPage[d],g,!1),setTimeout(function(){window.dispatchEvent(c.PJAXFinish)},1E3);else{var l=q("r",d,"","","");l.c&&(f=!0,$.ht(l.c,g,!1));$.aj(a,{},{success:function(h){c.recenturl=a;c.LoadedPage[d]=h;f?l.c!==h?(q("w",d,h,timestamp(),""),$.ht(h,g,!1)):q("e",d,"","",1):($.ht(h,g,!1),q("w",d,h,timestamp(),""));setTimeout(function(){window.dispatchEvent(c.PJAXFinish)},1E3)},failed:function(a){window.dispatchEvent(c.PJAXFinish)}},"get","",!0)}})},start:function(){var a=this;a.recenturl=window.location.href;var d=document.getElementsByTagName("a"),c;for(c in d)d[c].onclick=function(c){if(-1!==a.preventurl.indexOf(a.href))return!0;window.history.pushState(null,null,a.href);c.preventDefault();a.jump(a.href)};window.onpopstate=function(a){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)}},pause:function(){window.onpopstate=function(a){return!0}},autoprevent:function(){var a=document.getElementsByTagName("a"),d=window.location.host,c;for(c in a)void 0!==a[c].href&&-1==a[c].href.indexOf(d)&&this.preventurl.push(a[c].href)}};function q(a,d,c,f,g){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");var l=0,h="",k=JSON.parse(localStorage.obottle),m=[];"undefined"!==typeof k[d]&&(l=k[d].t,h=k[d].h);if("w"==a){k=JSON.parse(localStorage.obottle);a={};a.h=c;a.t=f;a.rt=0;k[d]=a;try{localStorage.obottle=JSON.stringify(k)}catch(n){for(var p in k)(20>=Number(k[p].rt)||172800<=Number(f)-Number(k[p].t))&&delete k[p];localStorage.obottle=JSON.stringify(k)}}else{if("r"==a)return m.t=l,m.c=h,m;"e"==a&&(k=JSON.parse(localStorage.obottle),k[d].rt=Number(k[d].rt)+g,localStorage.obottle=JSON.stringify(k))}}function timestamp(){return(new Date).getTime()}window.onscroll=function(){B.lazycheck()};B.tpcheck();