/*FrontMainJS - SomeBottle*/
 /*q.js*/
var md;if("object"!==typeof $){$={ls:[],lss:"",aj:function(a,d,c,f,h,g){if("false"!==a&&a){var l=new XMLHttpRequest,k="",m;for(m in d)k=k+m+"\x3d"+d[m]+"\x26";""!==h&&(a=h+a);k=k.substring(0,k.length-1);"get"==f?l.open("get",a,g):l.open("post",a,g);l.setRequestHeader("Content-type","application/x-www-form-urlencoded");l.send(k);l.onreadystatechange=function(){4==l.readyState&&200==l.status?c.success(l.responseText,a):4==l.readyState&&200!==l.status&&c.failed(l.status,a)};g||(void 0!==l.responseText?c.success(l.responseText,a):c.failed(l.status,a))}}};var SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.script=function(a){$.scripturl||($.scripturl=[]);var d=document.createElement("script"),c=!1,f;for(f in $.ls)if($.ls[f]==a){c=!0;break}c||-1!=$.scripturl.indexOf(a)||($.ls[$.ls.length]=a,d.type="text/javascript",d.src=a,$.scripturl.push(a),document.body.appendChild(d))};$.ht=function(a,d,c){c=void 0===c?!0:c;var f=SC(d);if(!f)return console.log("Unable to find the Element:"+d),!1;f.innerHTML=a;os=f.getElementsByTagName("script");for(d=0;d<os.length;d++)if(void 0!==os[d].src&&null!==os[d].src&&""!==os[d].src)$.script(os[d].src);else try{a=os[d].innerHTML,c&&(a=B.r(a,"/*",""),a=B.r(a,"*/","")),eval(a)}catch(h){console.log("Page script Error: "+h.message)}};$.tr=function(a){b=a.split("?");return b[1]?b[0]:a};$.dt=function(a){if(1E7<=Number(a)){a=String(a);var d=a.slice(-4),c=d.slice(-2),f=d.substring(0,2);return a.replace(d,"")+"-"+f+"-"+c}return a}}if(!B){if(localStorage["obottle-ldpage"]){var e=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=e.replace("\x3c!--[LoadingArea]--\x3e",localStorage["obottle-ldpage"])}$.aj("./loading.html","",{success:function(a,d){B.hr("\x3c!--[LoadingArea]--\x3e",a);localStorage["obottle-ldpage"]=a},failed:function(a){console.log("LoadingPage Load Failed")}},"get","",!0);$.script("./library.js");window.htmls={};var B={moreperpage:0,r:function(a,d,c,f){if(void 0===f||f)for(;-1!==a.indexOf(d);)a=a.replace(d,c);else a=a.replace(d,c);return a},navlist:{statu:!1,conf:{}},navcurrent:function(a){a=void 0===a?"":a;return((-1==a.indexOf("http")?a:a.replace(window.location.protocol+"//"+window.location.hostname,""))||window.location.pathname).replace(".html","")},navcheck:function(){var a=document.body,d=this.navlist.conf;if(this.navlist.statu){var a=a.getElementsByClassName(d.navclass),c=this.navcurrent(),f;for(f in a){var h=this.navcurrent(a[f].href);c==h&&a[f]instanceof Element?a[f].classList.add(d.activeclass):a[f]instanceof Element&&a[f].classList.contains(d.activeclass)&&a[f].classList.remove(d.activeclass)}}},nav:function(a){this.navlist.statu=!0;this.navlist.conf=a},scrolltop:function(a,d){var c=Math.floor(parseInt(document.body.scrollTop)/3),f=Math.pow(a,2)/(2*c),h=0,g=setInterval(function(){var a=document.body.scrollTop;parseInt(a)>2*c?(h+=f,document.body.scrollTop=parseInt(a)-h):parseInt(a)>c?document.body.scrollTop=parseInt(a)-h:parseInt(a)<=c&&(h-=f,h<=d&&(h=d),0>=parseInt(a)?(document.body.scrollTop=0,clearInterval(g)):document.body.scrollTop=parseInt(a)-h)},10)},hc:function(a){return a=a.replace(/&amp;/g,"\x26").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")},hr:function(a,d){var c=document.getElementsByTagName("html")[0].innerHTML;document.getElementsByTagName("html")[0].innerHTML=this.r(c,a,d)},preventscript:function(){var a=document.getElementsByTagName("html")[0].getElementsByTagName("script"),d;for(d in a)a[d].src&&-1==$.scripturl.indexOf(a[d].src)&&$.scripturl.push(a[d].src)},gt:function(a,d,c){c=(c=void 0===c?!1:c)?c:document.getElementsByTagName("html")[0].innerHTML;try{return c.split(a)[1].split(d)[0]}catch(f){return!1}},lazypre:function(a){var d=document.createElement("div");d.innerHTML=a;a=d.getElementsByTagName("img");for(var c in a)if(a[c].src){var f=a[c].src;a[c].src="data:image/gif;base64,R0lGODlhkAGQAYAAAP///wAAACH5BAEAAAAALAAAAACQAZABAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aN/xw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz7+03/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjm0UAAA7";""!==a[c].style.width&&(f=f+"[width]"+a[c].style.width);a[c].setAttribute("data-src","[lazy]"+f);a[c].style.width="100%"}return d.innerHTML},lazycheck:function(){var a=window.innerHeight,d=document.documentElement.scrollTop||document.body.scrollTop,c=document.getElementsByTagName("img"),f;for(f in c)if(a+d>c[f].offsetTop){var h=c[f].getAttribute("data-src");if("undefined"!==h&&h){c[f].setAttribute("data-src","");var g=h.split("[lazy]")[1];-1!==g.indexOf("[width]")?(h=g.split("[width]"),c[f].src=h[0],c[f].style.width=h[1]):(c[f].src=h.split("[lazy]")[1],c[f].style.width="auto")}}},templonload:0,templateloaded:[],tpcheckstatu:!1,loadstatu:!1,tpcheck:function(){var a=this,d=this;a.tpcheckstatu=!0;a.loadshow();var c=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e");if(window.templjson)if(window.mainjson||-1===window.templjson.usemain.indexOf(c))if("object"!==typeof showdown)setTimeout(function(){return d.tpcheck()},100);else{a.preventscript();var f=window.templjson;f.necessary.push(c);c==f.templatehtmls.postlist&&f.necessary.push(f.templatehtmls.postitem);for(var h in f.necessary)if(-1==d.templateloaded.indexOf(f.necessary[h])){d.templonload+=1;var g=!1,l=q("r","template-"+f.necessary[h],"","","");l.c&&(g=!0,c=f.necessary[h],console.log("Template using cache:"+c),window.htmls[c]=l.c,d.templateloaded.push(c),--d.templonload);$.aj(f.necessary[h],"",{success:function(a,c){window.htmls[c]=a;g?l.c!==a?q("w","template-"+c,a,timestamp(),""):q("e","template-"+c,"","",1):(d.templateloaded.push(c),--d.templonload,q("w","template-"+c,a,timestamp(),""))},failed:function(a){console.log("Necessary HTML Load Failed...")}},"get","",!0)}var k=setInterval(function(){0>=d.templonload&&(clearInterval(k),d.renderer())},50)}else window.mainjsonrequest||(window.mainjsonrequest=!0,$.aj(window.templjson.mainjson,"",{success:function(c){window.mainjson=JSON.parse(c.replace(/[\r\n]/g,""));a.moreperpage=parseInt(window.mainjson.more_per_page)},failed:function(a){console.log("MainJson Load Failed")}},"get","",!0)),setTimeout(function(){return d.tpcheck()},100);else $.aj("template.json","",{success:function(c){window.templjson=JSON.parse(c);return a.tpcheck()},failed:function(a){console.log("TemplateJson Load Failed.")}},"get","",!0)},itempage:0,switchpage:0,nowpage:0,realpage:1,searchw:"",hashexist:!1,itempagefixer:function(){var a=window.mainjson,d=1,c;for(c in a.dateindex){var f=this.itempage,h=c.replace("post",""),h=a.postindex[h];d<=f&&h.link&&(this.itempage+=1);d+=1}--this.itempage},cd:function(a){for(;-1!==a.indexOf("\x3cifcover\x3e");){var d=B.gt("\x3cifcover\x3e","\x3c/ifcover\x3e",a);a=B.r(a,"\x3cifcover\x3e"+d+"\x3c/ifcover\x3e","")}return a},renderer:function(){var a=this,d=window.templjson;md=new showdown.Converter;var c=window.htmls[d.templatehtmls.cloth],f=window.htmls[d.templatehtmls.main],h=window.htmls[d.templatehtmls.comment],g=a.gt("\x3c!--[PageType]--\x3e","\x3c!--[PageTypeEnd]--\x3e"),l=window.mainjson;if(g==d.templatehtmls.post){var k=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e"),m=a.gt("\x3c!--[PostTitle]--\x3e","\x3c!--[PostTitleEnd]--\x3e"),n=a.gt("\x3c!--[PostDate]--\x3e","\x3c!--[PostDateEnd]--\x3e"),r=a.gt("\x3c!--[PostTag]--\x3e","\x3c!--[PostTagEnd]--\x3e"),p=a.gt("\x3c!--[PostID]--\x3e","\x3c!--[PostIDEnd]--\x3e"),l=a.gt("\x3c!--[PostCover]--\x3e","\x3c!--[PostCoverEnd]--\x3e"),t=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),k=a.r(window.htmls[d.templatehtmls.post],"{[postcontent]}",a.lazypre(md.makeHtml(a.hc(k.trim())))),m=a.r(k,"{[posttitle]}",m),k=[];isNaN(n)?r="\u9875\u9762":(k=r.split(","),r="",k.forEach(function(a,c){r=r+'\x3ca href\x3d"'+d.generatehtmls.tags+"#"+encodeURIComponent(a)+'" class\x3d"taglink"\x3e'+a+"\x3c/a\x3e,"}),r=r.substr(0,r.length-1));m=a.r(m,"{[posttags]}",r);m=a.r(m,"{[postdate]}",$.dt(n));f=a.r(f,"{[contents]}",m);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",t);c=a.r(c,"{[comments]}",h);c=a.r(c,"{[pid]}",p);c=a.r(c,"{[pagetype]}",g);c=l&&"none"!==l&&""!==l?a.r(c,"{[postcover]}",l):a.cd(c);isNaN(n)&&(g=c.split("\x3c!--PostEnd--\x3e")[0]+"\x3c!--PostEnd--\x3e",c="\x3c!--Footer--\x3e"+c.split("\x3c!--Footer--\x3e")[1],c=g+c);$.ht(c,"container");transitionchecker("loading",function(){a.lazycheck()});a.loadhide()}else if(g==d.templatehtmls.postlist){k=a.gt("\x3c!--[PostContent]--\x3e","\x3c!--[PostContentEnd]--\x3e");t=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,"");t=t.replace("-","");k=a.r(window.htmls[d.templatehtmls.postlist],"{[postitems]}",md.makeHtml(k.trim()));f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",t);c=a.r(c,"{[pagetype]}",g);a.itempage=parseInt(l.posts_per_page);a.itempagefixer();$.ht(c,"container");a.loadhide();var x=setInterval(function(){if(a.gt("\x3c!--[PageType]","[PageTypeEnd]--\x3e")!==d.templatehtmls.postlist)return PJAX.sel("container"),PJAX.start(),a.switchpage=0,clearInterval(x),!1;a.indexpagechecker()},100)}else if(g==d.templatehtmls.archives){var t=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),n=window.htmls[d.templatehtmls.archives],h=a.gt("\x3c!--Archives--\x3e","\x3c!--ArchivesEnd--\x3e",n),D=a.gt("\x3c!--ArchiveTemplate--\x3e","\x3c!--ArchiveTemplateEnd--\x3e",n),E=a.gt("\x3c!--ArchiveItemTemplate--\x3e","\x3c!--ArchiveItemTemplateEnd--\x3e",n),z=l.dateindex,v="",u="",A=0;for(k in z){n=z[k].toString().substring(0,4);n!==A&&(A=n,""!==u&&(v=a.r(v,"{[archiveitems]}",u),u=""),v+=a.r(D,"{[archiveyear]}",n));var p=k.replace("post",""),m=Base64.decode(l.postindex[p].title),n=l.postindex[p].date,C="",C=l.postindex[p].link?l.postindex[p].link:"post-"+p+".html",p=a.r(E,"{[archiveitemlink]}",C),p=a.r(p,"{[archiveitemtitle]}",m),p=a.r(p,"{[archiveitemdate]}",$.dt(n)),u=u+p}""!==u&&(v=a.r(v,"{[archiveitems]}",u));k=a.r(h,"{[archives]}",v+"\x3c/ul\x3e");f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",t);c=a.r(c,"{[pagetype]}",g);$.ht(c,"container");a.loadhide()}else if(g==d.templatehtmls.tags){var t=a.gt("\x3c!--[MainTitle]--\x3e","\x3c!--[MainTitleEnd]--\x3e").replace(/<\/?.+?>/g,""),n=window.htmls[d.templatehtmls.tags],m=a.gt("\x3c!--Tags--\x3e","\x3c!--TagsEnd--\x3e",n),F=a.gt("\x3c!--TagItemTemplate--\x3e","\x3c!--TagItemTemplateEnd--\x3e",n),k=$.tr(window.location.href),w="",l=l.postindex,y=[];for(p in l)n=l[p].tags.split(","),n.forEach(function(a,c){""!==a&&-1==y.indexOf(a)&&y.push(a)});y.forEach(function(c,d){var f=a.r(F,"{[tagitemtitle]}",c),f=a.r(f,"{[tagitemlink]}","#"+encodeURIComponent(c));w+=f});a.alltaghtml=w;-1!==k.indexOf("#")&&(l=k.split("#")[1],a.nowtag=l,"alltags"!==l&&(w="\x3cscript\x3eB.taguper('"+l+"');PJAX.sel('container');PJAX.start();\x3c/script\x3e"));x=setInterval(function(){if(-1==window.location.href.indexOf(d.generatehtmls.tags)&&-1==window.location.href.indexOf(d.generatehtmls.tags.replace(".html","")))return PJAX.sel("container"),PJAX.start(),clearInterval(x),!1;a.tagpagechecker()},100);k=a.r(m,"{[tags]}",w);f=a.r(f,"{[contents]}",k);c=a.r(c,"{[main]}",f);c=a.r(c,"{[title]}",t);c=a.r(c,"{[pagetype]}",g);$.ht(c,"container");a.loadhide()}a.tpcheckstatu=!1},nowtag:"",alltaghtml:"",taguper:function(a){a=decodeURIComponent(a);document.getElementsByTagName("html");var d=this,c=window.htmls[window.templjson.templatehtmls.tags],f=d.gt("\x3c!--TagListTemplate--\x3e","\x3c!--TagListTemplateEnd--\x3e",c),h=d.gt("\x3c!--TagListItemTemplate--\x3e","\x3c!--TagListItemTemplateEnd--\x3e",c),g=window.mainjson,c=g.dateindex,l=g.postindex,g=[],k="",m;for(m in c)c=m.replace("post",""),-1!==l[c].tags.indexOf(a)&&g.push(c);k+="\x3cul\x3e";g.forEach(function(a,c){var f=l[a],g="post-"+a+".html",m=$.dt(f.date);f.link&&(g=f.link+".html");g=d.r(h,"{[taglistitemlink]}",g);g=d.r(g,"{[taglistitemtitle]}",Base64.decode(f.title));g=d.r(g,"{[taglistitemdate]}",$.dt(m));k+=g});k=d.r(f,"{[taglist]}",k);k=d.r(k,"{[tagcurrent]}",a);SC("tags").innerHTML=k},tagpagechecker:function(){document.getElementsByTagName("html");var a=$.tr(window.location.href);-1==a.indexOf("#")?(PJAX.pause(),window.location.replace(a+"#alltags"),PJAX.start()):(a=a.split("#")[1],this.nowtag!==a&&(this.nowtag=a,"alltags"==a?SC("tags")&&(SC("tags").innerHTML=this.alltaghtml):this.taguper(a),PJAX.start()))},indexpagechecker:function(){document.getElementsByTagName("html");var a=window.templjson,d=$.tr(decodeURIComponent(window.location.href)),c=window.mainjson,f=parseInt(c.posts_per_page);if(-1!==d.indexOf("#")){this.hashexist=!0;var h=d.split("#")[1];if(-1==d.indexOf("#!")){if(!isNaN(h)){var g=parseInt(h)-1;this.nowpage!==g&&(this.searchw="",this.nowpage=g,this.itempage=f*g*this.moreperpage,this.itempagefixer(),SC("postitems").innerHTML="",this.more(),this.realpage=g+1,this.switchpage=0)}}else{var l="",f=window.htmls[a.templatehtmls.postitem],d=d.split("#!")[1];if(d!==this.searchw){var k=function(){SC("postitems")&&SC("morebtn")?(window.scrollTo(0,0),SC("postitems").innerHTML=l,SC("morebtn").style.display="none",PJAX.start()):setTimeout(function(){return k()},500)};this.searchw=d;c=c.postindex;for(g in c){var m=Base64.decode(c[g].title).toLowerCase(),h=Base64.decode(c[g].intro).toLowerCase(),a=c[g].date.toLowerCase(),n=c[g].tags.toLowerCase(),d=d.toLowerCase();if(-1!==m.indexOf(d)||-1!==h.indexOf(d)||-1!==a.indexOf(d)||-1!==n.indexOf(d))m=B.r(f,"{[postitemtitle]}",m),h=B.r(m,"{[postitemintro]}",h+"..."),a=B.r(h,"{[postitemdate]}",$.dt(a)),a=c[g].link?B.r(a,"{[postitemlink]}",c[g].link+".html"):B.r(a,"{[postitemlink]}","post-"+g+".html"),a=c[g].cover?B.r(a,"{[postcover]}",c[g].cover):this.cd(a),l+=a}""==l&&(l="\x3ch2\x3e\u5565\u90fd\u6ca1\u627e\u5230\x3c/h2\x3e");this.tpcheckstatu||this.loadstatu||k()}if(this.tpcheckstatu||this.loadstatu)this.searchw=""}}else this.searchw="",this.hashexist&&(this.realpage=1,this.switchpage=0,this.hashexist=!1)},loadshow:function(){this.loadstatu=!0;setTimeout(function(){SC("loading").style.opacity=1;SC("loading").style.zIndex=200},10)},loadhide:function(){this.loadstatu=!1;setTimeout(function(){SC("loading").style.opacity=0;SC("loading").style.zIndex=-1},10)},morehtmls:{},more:function(){var a=this.itempage+1,d=0,c=0,f="",h=window.mainjson,g=window.htmls[window.templjson.templatehtmls.postitem],l=this.gt("\x3c!--PostItem--\x3e","\x3c!--PostItemEnd--\x3e",g),g=this.gt("\x3c!--NoItem--\x3e","\x3c!--NoItemEnd--\x3e",g),k=parseInt(h.posts_per_page),h=window.mainjson,m=h.dateindex,n;for(n in m)if(a<=c){if(d<k){var r=n.replace("post",""),m=h.postindex[r];if(m.link)this.itempage+=1,--d;else var p=B.r(l,"{[postitemtitle]}",Base64.decode(m.title)),p=B.r(p,"{[postitemintro]}",Base64.decode(m.intro)+"..."),p=B.r(p,"{[postitemdate]}",$.dt(m.date)),r=B.r(p,"{[postitemlink]}","post-"+r+".html"),r=m.cover?B.r(r,"{[postcover]}",m.cover):this.cd(r),f=f+r;d+=1}}else c+=1;""==f?(f=g,SC("morebtn").style.display="none"):SC("morebtn").style.display="block";this.itempage+=k;this.switchpage>=this.moreperpage-1?(SC("postitems").innerHTML=f,this.scrolltop(20,2),this.switchpage=0,this.realpage+=1,PJAX.pause(),window.location.href="#"+this.realpage):(SC("postitems").innerHTML=SC("postitems").innerHTML+f,this.switchpage+=1);PJAX.start()}};window.addEventListener("scroll",B.lazycheck,!1);window.addEventListener("pjaxstart",function(){B.loadshow()},!1);window.addEventListener("pjaxfinish",function(){B.loadhide()},!1)}function transitionchecker(a,d){function c(){d();SC(a).removeEventListener(f,c)}var f="",h={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},g;for(g in h)void 0!==SC(a).style[g]&&(f=h[g]);SC(a).addEventListener(f,c)}var mainhost=window.location.host,dt=(new Date).getTime();if(void 0==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),LoadedPage:{},lasthref:window.location.href,preventurl:[],recenturl:"",replace:"",sel:function(a){this.replace=a},jump:function(a){var d=encodeURIComponent(a),c=this,f=!1,h=c.replace;""==h&&(h="container");if(-1!==c.recenturl.indexOf("#")&&-1!==a.indexOf("#"))return!1;-1==c.recenturl.indexOf("#")&&-1!==a.indexOf("#")&&(B.nowpage=0);window.dispatchEvent(c.PJAXStart);transitionchecker("loading",function(){window.scrollTo(0,0);if(c.LoadedPage[d])$.ht(c.LoadedPage[d],h,!1),transitionchecker("loading",function(){window.dispatchEvent(c.PJAXFinish)});else{var g=q("r",d,"","","");g.c&&(f=!0,$.ht(g.c,h,!1));$.aj(a,{},{success:function(l){c.recenturl=a;c.LoadedPage[d]=l;f?g.c!==l?(q("w",d,l,timestamp(),""),$.ht(l,h,!1)):q("e",d,"","",1):($.ht(l,h,!1),q("w",d,l,timestamp(),""));transitionchecker("loading",function(){window.dispatchEvent(c.PJAXFinish)})},failed:function(a){window.dispatchEvent(c.PJAXFinish)}},"get","",!0)}})},pjaxautojump:function(){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)},start:function(){var a=this;a.recenturl=window.location.href;var d=document.getElementsByTagName("a"),c;for(c in d)"function"==typeof d[c].addEventListener&&d[c].addEventListener("click",function(c){if(-1===a.preventurl.indexOf(this.href)&&this.href&&""!=this.href)window.history.pushState(null,null,this.href),c.preventDefault(),a.jump(this.href);else return!0},!1);window.addEventListener("popstate",PJAX.pjaxautojump,!1)},pause:function(){window.removeEventListener("popstate",PJAX.pjaxautojump)},autoprevent:function(){var a=document.getElementsByTagName("a"),d=window.location.host,c;for(c in a)void 0!==a[c].href&&-1==a[c].href.indexOf(d)&&this.preventurl.push(a[c].href)}};function q(a,d,c,f,h){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");var g=0,l="",k=JSON.parse(localStorage.obottle),m=[];"undefined"!==typeof k[d]&&(g=k[d].t,l=k[d].h);if("w"==a){k=JSON.parse(localStorage.obottle);a={};a.h=c;a.t=f;a.rt=0;k[d]=a;try{localStorage.obottle=JSON.stringify(k)}catch(r){for(var n in k)(20>=Number(k[n].rt)||172800<=Number(f)-Number(k[n].t))&&delete k[n];localStorage.obottle=JSON.stringify(k)}}else{if("r"==a)return m.t=g,m.c=l,m;"e"==a&&(k=JSON.parse(localStorage.obottle),k[d].rt=Number(k[d].rt)+h,localStorage.obottle=JSON.stringify(k))}}function timestamp(){return(new Date).getTime()}B.tpcheck();