/*FrontMainJS - SomeBottle*/
 /*q.js*/var md;if("object"!==typeof $){$={ls:[],lss:"",aj:function(a,d,c,f,g,k){if("false"!==a&&a){var l=new XMLHttpRequest,h="",m;for(m in d)h=h+m+"\x3d"+d[m]+"\x26";""!==g&&(a=g+a);h=h.substring(0,h.length-1);"get"==f?l.open("get",a,k):"put"==f?(l.open("PUT",a,k),l.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),h=JSON.stringify(d)):"delete"==f?(l.open("DELETE",a,k),l.setRequestHeader("Content-type","application/json;charset\x3dUTF-8"),h=JSON.stringify(d)):l.open("post",a,k);"multipart/form-data"!==f?(l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l.send(h)):l.send(d);l.onreadystatechange=function(){4==l.readyState&&200==l.status?c.success(l.responseText,a):4==l.readyState&&200!==l.status&&c.failed(l.status,a)};k||(void 0!==l.responseText?c.success(l.responseText,a):c.failed(l.status,a))}}};var SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.script=function(a){$.scripturl||($.scripturl=[]);var d=document.createElement("script"),c=!1,f;for(f in $.ls)if($.ls[f]==a){c=!0;break}c||-1!=$.scripturl.indexOf(a)||($.ls[$.ls.length]=a,d.type="text/javascript",d.src=a,$.scripturl.push(a),document.body.appendChild(d))};$.ht=function(a,d,c){c=void 0===c?!0:c;var f=SC(d);if(!f)return console.log("Unable to find the Element:"+d),!1;f.innerHTML=a;os=f.getElementsByTagName("script");for(d=0;d<os.length;d++)if(void 0!==os[d].src&&null!==os[d].src&&""!==os[d].src)$.script(os[d].src);else try{a=os[d].innerHTML,c&&(a=B.r(a,"/*",""),a=B.r(a,"*/","")),eval(a)}catch(g){console.log("Page script Error: "+g.message)}};$.tr=function(a){b=a.split("?");return b[1]?b[0]:a}}if(!B){if(localStorage["obottle-ldpage"]){var e=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=e.replace("\x3c!--[LoadingArea]--\x3e",localStorage["obottle-ldpage"])}$.aj("./loading.html","",{success:function(a,d){B.hr("\x3c!--[LoadingArea]--\x3e",a);localStorage["obottle-ldpage"]=a},failed:function(a){console.log("LoadingPage Load Failed")}},"get","https://b.bottle.moe/bcdn/",!0);$.script("./library.js");window.htmls={};var B={moreperpage:0,r:function(a,d,c,f){if(void 0===f||f)for(;-1!==a.indexOf(d);)a=a.replace(d,c);else a=a.replace(d,c);return a},scrolltop:function(a,d){var c=Math.floor(parseInt(document.body.scrollTop)/3),f=Math.pow(a,2)/(2*c),g=0,k=setInterval(function(){var a=document.body.scrollTop;parseInt(a)>2*c?(g+=f,document.body.scrollTop=parseInt(a)-g):parseInt(a)>c?document.body.scrollTop=parseInt(a)-g:parseInt(a)<=c&&(g-=f,g<=d&&(g=d),0>=parseInt(a)?(document.body.scrollTop=0,clearInterval(k)):document.body.scrollTop=parseInt(a)-g)},10)},hc:function(a){return a=a.replace(/&amp;/g,"\x26").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")},hr:function(a,d){var c=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=this.r(c,a,d)},preventscript:function(){var a=document.getElementsByTagName("html")[0].getElementsByTagName("script"),d;for(d in a)a[d].src&&-1==$.scripturl.indexOf(a[d].src)&&$.scripturl.push(a[d].src)},gt:function(a,d,c){c=(c=void 0===c?!1:c)?c:document.getElementsByTagName("html")[0].innerHTML;try{return c.split(a)[1].split(d)[0]}catch(f){return!1}},lazypre:function(a){var d=document.createElement("div");d.innerHTML=a;a=d.getElementsByTagName("img");for(var c in a)if(a[c].src){var f=a[c].src;a[c].src="data:image/gif;base64,R0lGODlhkAGQAYAAAP///wAAACH5BAEAAAAALAAAAACQAZABAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aN/xw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz7+03/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjm0UAAA7";""!==a[c].style.width&&(f=f+"[width]"+a[c].style.width);a[c].setAttribute("data-src","[lazy]"+f);a[c].style.width="100%"}return d.innerHTML},lazycheck:function(){var a=window.innerHeight,d=document.documentElement.scrollTop||document.body.scrollTop,c=document.getElementsByTagName("img"),f;for(f in c)if(a+d>c[f].offsetTop){var g=c[f].getAttribute("data-src");if("undefined"!==g&&g){c[f].setAttribute("data-src","");var k=g.split("[lazy]")[1];-1!==k.indexOf("[width]")?(g=k.split("[width]"),c[f].src=g[0],c[f].style.width=g[1]):(c[f].src=g.split("[lazy]")[1],c[f].style.width="auto")}}},templonload:0,templateloaded:[],tpcheckstatu:!1,loadstatu:!1,tpcheck:function(){var a=this,d=this;a.tpcheckstatu=!0;a.loadshow();var c=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e");if(window.templjson)if(window.mainjson||-1===window.templjson.usemain.indexOf(c))if("object"!==typeof showdown)setTimeout(function(){return d.tpcheck()},200);else{a.preventscript();var f=window.templjson;f.necessary.push(c);c==f.templatehtmls.postlist&&f.necessary.push(f.templatehtmls.postitem);for(var g in f.necessary)if(-1==d.templateloaded.indexOf(f.necessary[g])){d.templonload+=1;var k=!1,l=q("r","template-"+f.necessary[g],"","","");l.c&&(k=!0,c=f.necessary[g],console.log("Template using cache:"+c),window.htmls[c]=l.c,d.templateloaded.push(c),--d.templonload);$.aj(f.necessary[g],"",{success:function(a,c){window.htmls[c]=a;k?l.c!==a?q("w","template-"+c,a,timestamp(),""):q("e","template-"+c,"","",1):(d.templateloaded.push(c),--d.templonload,q("w","template-"+c,a,timestamp(),""))},failed:function(a){console.log("Necessary HTML Load Failed...")}},"get","https://b.bottle.moe/bcdn/",!0)}var h=setInterval(function(){0>=d.templonload&&(clearInterval(h),d.renderer())},500)}else setTimeout(function(){return d.tpcheck()},200);else $.aj("template.json","",{success:function(c){window.templjson=JSON.parse(c);return a.tpcheck()},failed:function(a){console.log("TemplateJson Load Failed.")}},"get","https://b.bottle.moe/bcdn/",!0);window.mainjson||window.mainjsonrequest||(window.mainjsonrequest=!0,$.aj("main.json","",{success:function(c){window.mainjson=JSON.parse(c.replace(/[\r\n]/g,""));a.moreperpage=parseInt(window.mainjson.more_per_page)},failed:function(a){console.log("MainJson Load Failed")}},"get","https://b.bottle.moe/bcdn/",!0))},itempage:0,switchpage:0,nowpage:0,realpage:1,searchw:"",hashexist:!1,itempagefixer:function(){var a=window.mainjson,d=1,c;for(c in a.dateindex){var f=this.itempage,g=c.replace("post",""),g=a.postindex[g];d<=f&&g.link&&(this.itempage+=1);d+=1}--this.itempage},cd:function(a){for(;-1!==a.indexOf("\x3cifcover\x3e");){var d=B.gt("\x3cifcover\x3e","\x3c/ifcover\x3e",a);a=B.r(a,"\x3cifcover\x3e"+d+"\x3c/ifcover\x3e","")}return a},renderer:function(){var a=this,d=window.templjson;md=new showdown.Converter;var c=window.htmls[d.templatehtmls.cloth],f=window.htmls[d.templatehtmls.main],g=window.htmls[d.templatehtmls.comment],k=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e"),l=window.mainjson;if(k==d.templatehtmls.post){var h=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e"),m=a.gt("\x3c!--[PostTitle]--\x3e","\x3c!--[PostTitleEnd]--\x3e"),l=a.gt("\x3c!--[PostDate]--\x3e","\x3c!--[PostDateEnd]--\x3e"),p=a.gt("\x3c!--[PostTag]--\x3e","\x3c!--[PostTagEnd]--\x3e"),n=a.gt("\x3c!--[PostID]--\x3e","\x3c!--[PostIDEnd]--\x3e"),t=a.gt("\x3c!--[PostCover]--\x3e","\x3c!--[PostCoverEnd]--\x3e"),r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),h=a.r(window.htmls[d.templatehtmls.post],"{[postcontent]}",a.lazypre(md.makeHtml(a.hc(h.trim())))),m=a.r(h,"{[posttitle]}",m),h=[];isNaN(l)?p="\u9875\u9762":(h=p.split(","),p="",h.forEach(function(a,c){p=p+'\x3ca href\x3d"'+d.generatehtmls.tags+"#"+encodeURIComponent(a)+'" class\x3d"taglink"\x3e'+a+"\x3c/a\x3e,"}),p=p.substr(0,p.length-1));m=a.r(m,"{[posttags]}",p);m=a.r(m,"{[postdate]}",l);f=a.r(f,"{[contents]}",m);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[comments]}",g);c=a.r(c,"{[pid]}",n);c=a.r(c,"{[pagetype]}",k);c=t&&"none"!==t&&""!==t?a.r(c,"{[postcover]}",t):a.cd(c);isNaN(l)&&(k=c.split("\x3c!--PostEnd--\x3e")[0]+"\x3c!--PostEnd--\x3e",c="\x3c!--Footer--\x3e"+c.split("\x3c!--Footer--\x3e")[1],c=k+c);$.ht(c,"container");transitionchecker("loading",function(){a.lazycheck()});a.loadhide()}else if(k==d.templatehtmls.postlist){h=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e");r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,"");r=r.replace("-","");h=a.r(window.htmls[d.templatehtmls.postlist],"{[postitems]}",md.makeHtml(h.trim()));f=a.r(f,"{[contents]}",h);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",k);a.itempage=parseInt(l.posts_per_page);a.itempagefixer();$.ht(c,"container");a.loadhide();var v=setInterval(function(){if(a.gt("\x3c!--[PageType]","[PageTypeEnd]--\x3e")!==d.templatehtmls.postlist)return PJAX.sel("container"),PJAX.start(),a.switchpage=0,clearInterval(v),!1;a.indexpagechecker()},500)}else if(k==d.templatehtmls.archives){var r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=l.dateindex,h="",x=0;for(t in g)n=g[t].toString().substring(0,4),n!==x&&(x=n,h=""!==h?h+("\x3c/ul\x3e\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e"):h+("\x3ch2\x3e\u00b7 "+n+"\x3c/h2\x3e\x3cul\x3e")),n=t.replace("post",""),m=Base64.decode(l.postindex[n].title),h=l.postindex[n].link?h+("\x3cli\x3e\x3ca class\x3d'taglink archivelink' href\x3d'"+l.postindex[n].link+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e"):h+("\x3cli\x3e\x3ca class\x3d'taglink archivelink' href\x3d'post-"+n+".html'\x3e"+m+"\x3c/a\x3e\x3c/li\x3e");h=a.r(window.htmls[d.templatehtmls.archives],"{[archives]}",h+"\x3c/ul\x3e");f=a.r(f,"{[contents]}",h);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",k);$.ht(c,"container");a.loadhide()}else if(k==d.templatehtmls.tags){var r=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),g=$.tr(window.location.href),u="",l=l.postindex,w=[];for(m in l)n=l[m].tags.split(","),n.forEach(function(a,c){""!==a&&-1==w.indexOf(a)&&w.push(a)});w.forEach(function(a,c){u+="[\x3ca href\x3d'#"+encodeURIComponent(a)+"' class\x3d'itemlink'\x3e"+a+"\x3c/a\x3e]"});a.alltaghtml=u;-1!==g.indexOf("#")&&(n=g.split("#")[1],a.nowtag=n,"alltags"!==n&&(u="\x3cscript\x3eB.taguper('"+n+"');PJAX.sel('container');PJAX.start();\x3c/script\x3e"));v=setInterval(function(){if(-1==window.location.href.indexOf(d.generatehtmls.tags)&&-1==window.location.href.indexOf(d.generatehtmls.tags.replace(".html","")))return PJAX.sel("container"),PJAX.start(),clearInterval(v),!1;a.tagpagechecker()},500);h=a.r(window.htmls[d.templatehtmls.tags],"{[tags]}",u);f=a.r(f,"{[contents]}",h);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",r);c=a.r(c,"{[pagetype]}",k);$.ht(c,"container");a.loadhide()}a.tpcheckstatu=!1},nowtag:"",alltaghtml:"",taguper:function(a){a=decodeURIComponent(a);document.getElementsByTagName("html");var d=window.mainjson,c=d.dateindex,f=d.postindex,d=[],g="",k;for(k in c)c=k.replace("post",""),-1!==f[c].tags.indexOf(a)&&d.push(c);g+="\x3cul\x3e";d.forEach(function(a,c){var d=f[a],h="post-"+a+".html";d.link&&(h=d.link+".html");g+="\x3cli\x3e\x3ca class\x3d'taglink' href\x3d'"+h+"'\x3e"+Base64.decode(d.title)+"\x3c/a\x3e\x3c/li\x3e"});SC("tags").innerHTML=g},tagpagechecker:function(){document.getElementsByTagName("html");var a=$.tr(window.location.href);-1==a.indexOf("#")?(PJAX.pause(),window.location.replace(a+"#alltags"),PJAX.start()):(a=a.split("#")[1],this.nowtag!==a&&(this.nowtag=a,"alltags"==a?SC("tags")&&(SC("tags").innerHTML=this.alltaghtml):this.taguper(a),PJAX.start()))},indexpagechecker:function(){document.getElementsByTagName("html");var a=window.templjson,d=$.tr(decodeURIComponent(window.location.href)),c=window.mainjson,f=parseInt(c.posts_per_page);if(-1!==d.indexOf("#")){this.hashexist=!0;var g=d.split("#")[1];if(-1==d.indexOf("#!")){if(!isNaN(g)){var k=parseInt(g)-1;this.nowpage!==k&&(this.searchw="",this.nowpage=k,this.itempage=f*k*this.moreperpage,this.itempagefixer(),SC("postitems").innerHTML="",this.more(),this.realpage=k+1,this.switchpage=0)}}else{var l="",f=window.htmls[a.templatehtmls.postitem],d=d.split("#!")[1];if(d!==this.searchw){var h=function(){SC("postitems")&&SC("morebtn")?(window.scrollTo(0,0),SC("postitems").innerHTML=l,SC("morebtn").style.display="none",PJAX.start()):setTimeout(function(){return h()},500)};this.searchw=d;c=c.postindex;for(k in c){var m=Base64.decode(c[k].title).toLowerCase(),g=Base64.decode(c[k].intro).toLowerCase(),a=c[k].date.toLowerCase(),p=c[k].tags.toLowerCase(),d=d.toLowerCase();if(-1!==m.indexOf(d)||-1!==g.indexOf(d)||-1!==a.indexOf(d)||-1!==p.indexOf(d))m=B.r(f,"{[postitemtitle]}",m),g=B.r(m,"{[postitemintro]}",g+"..."),a=B.r(g,"{[postitemdate]}",a),a=c[k].link?B.r(a,"{[postitemlink]}",c[k].link+".html"):B.r(a,"{[postitemlink]}","post-"+k+".html"),a=c[k].cover?B.r(a,"{[postcover]}",c[k].cover):this.cd(a),l+=a}""==l&&(l="\x3ch2\x3e\u5565\u90fd\u6ca1\u627e\u5230\x3c/h2\x3e");this.tpcheckstatu||this.loadstatu||h()}if(this.tpcheckstatu||this.loadstatu)this.searchw=""}}else this.searchw="",this.hashexist&&(this.realpage=1,this.switchpage=0,this.hashexist=!1)},loadshow:function(){this.loadstatu=!0;setTimeout(function(){SC("loading").style.opacity=1;SC("loading").style.zIndex=200},100)},loadhide:function(){this.loadstatu=!1;setTimeout(function(){SC("loading").style.opacity=0;SC("loading").style.zIndex=-1},100)},morehtmls:{},more:function(){var a=this.itempage+1,d=0,c=0,f="",g=window.mainjson,k=window.htmls[window.templjson.templatehtmls.postitem],l=parseInt(g.posts_per_page),g=window.mainjson,h=g.dateindex,m;for(m in h)if(a<=c){if(d<l){var p=m.replace("post",""),h=g.postindex[p];if(h.link)this.itempage+=1,--d;else var n=B.r(k,"{[postitemtitle]}",Base64.decode(h.title)),n=B.r(n,"{[postitemintro]}",Base64.decode(h.intro)+"..."),n=B.r(n,"{[postitemdate]}",h.date),p=B.r(n,"{[postitemlink]}","post-"+p+".html"),p=h.cover?B.r(p,"{[postcover]}",h.cover):this.cd(p),f=f+p;d+=1}}else c+=1;""==f?(f="\x3ch3 style\x3d'color:#AAA;'\x3e\u6ca1\u6709\u66f4\u591a\u4e86\u5462\x3c/h3\x3e",SC("morebtn").style.display="none"):SC("morebtn").style.display="block";this.itempage+=l;this.switchpage>=this.moreperpage-1?(SC("postitems").innerHTML=f,this.scrolltop(20,2),this.switchpage=0,this.realpage+=1,PJAX.pause(),window.location.href="#"+this.realpage):(SC("postitems").innerHTML=SC("postitems").innerHTML+f,this.switchpage+=1);PJAX.start()}};window.addEventListener("scroll",B.lazycheck,!1);window.addEventListener("pjaxstart",function(){B.loadshow()},!1);window.addEventListener("pjaxfinish",function(){B.loadhide()},!1)}function transitionchecker(a,d){function c(){d();SC(a).removeEventListener(f,c)}var f="",g={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},k;for(k in g)void 0!==SC(a).style[k]&&(f=g[k]);SC(a).addEventListener(f,c)}var mainhost=window.location.host,dt=(new Date).getTime();if(void 0==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),LoadedPage:{},lasthref:window.location.href,preventurl:[],recenturl:"",replace:"",sel:function(a){this.replace=a},jump:function(a){var d=encodeURIComponent(a),c=this,f=!1,g=c.replace;""==g&&(g="container");if(-1!==c.recenturl.indexOf("#")&&-1!==a.indexOf("#"))return!1;-1==c.recenturl.indexOf("#")&&-1!==a.indexOf("#")&&(B.nowpage=0);window.dispatchEvent(c.PJAXStart);transitionchecker("loading",function(){window.scrollTo(0,0);if(c.LoadedPage[d])$.ht(c.LoadedPage[d],g,!1),setTimeout(function(){window.dispatchEvent(c.PJAXFinish)},1E3);else{var k=q("r",d,"","","");k.c&&(f=!0,$.ht(k.c,g,!1));$.aj(a,{},{success:function(l){c.recenturl=a;c.LoadedPage[d]=l;f?k.c!==l?(q("w",d,l,timestamp(),""),$.ht(l,g,!1)):q("e",d,"","",1):($.ht(l,g,!1),q("w",d,l,timestamp(),""));setTimeout(function(){window.dispatchEvent(c.PJAXFinish)},1E3)},failed:function(a){window.dispatchEvent(c.PJAXFinish)}},"get","https://b.bottle.moe/bcdn/",!0)}})},pjaxautojump:function(){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)},start:function(){var a=this;a.recenturl=window.location.href;var d=document.getElementsByTagName("a"),c;for(c in d)"function"==typeof d[c].addEventListener&&d[c].addEventListener("click",function(c){if(-1!==a.preventurl.indexOf(this.href))return!0;window.history.pushState(null,null,this.href);c.preventDefault();a.jump(this.href)},!1);window.addEventListener("popstate",PJAX.pjaxautojump,!1)},pause:function(){window.removeEventListener("popstate",PJAX.pjaxautojump)},autoprevent:function(){var a=document.getElementsByTagName("a"),d=window.location.host,c;for(c in a)void 0!==a[c].href&&-1==a[c].href.indexOf(d)&&this.preventurl.push(a[c].href)}};function q(a,d,c,f,g){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");var k=0,l="",h=JSON.parse(localStorage.obottle),m=[];"undefined"!==typeof h[d]&&(k=h[d].t,l=h[d].h);if("w"==a){h=JSON.parse(localStorage.obottle);a={};a.h=c;a.t=f;a.rt=0;h[d]=a;try{localStorage.obottle=JSON.stringify(h)}catch(n){for(var p in h)(20>=Number(h[p].rt)||172800<=Number(f)-Number(h[p].t))&&delete h[p];localStorage.obottle=JSON.stringify(h)}}else{if("r"==a)return m.t=k,m.c=l,m;"e"==a&&(h=JSON.parse(localStorage.obottle),h[d].rt=Number(h[d].rt)+g,localStorage.obottle=JSON.stringify(h))}}function timestamp(){return(new Date).getTime()}B.tpcheck();
