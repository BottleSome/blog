/*FrontMainJS - SomeBottle*/
/*q.js*/
var md;if("object"!==typeof $){$={ls:[],lss:"",loadset:{},aj:function(a,d,c,f,h,g){if("false"!==a&&a){var k=new XMLHttpRequest,l="",n;for(n in d)l=l+n+"\x3d"+d[n]+"\x26";""!==h&&(a=h+a);l=l.substring(0,l.length-1);"get"==f?k.open("get",a,g):k.open("post",a,g);k.setRequestHeader("Content-type","application/x-www-form-urlencoded");k.send(l);k.onreadystatechange=function(){4==k.readyState&&200==k.status?c.success(k.responseText,a):4==k.readyState&&200!==k.status&&c.failed(k.status,a)};g||(void 0!==k.responseText?c.success(k.responseText,a):c.failed(k.status,a))}}};var SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.script=function(a){$.scripturl||($.scripturl=[]);var d=document.createElement("script"),c=!1,f;for(f in $.ls)if($.ls[f]==a){c=!0;break}c||-1!=$.scripturl.indexOf(a)||($.ls[$.ls.length]=a,d.type="text/javascript",d.src=a,$.scripturl.push(a),document.body.appendChild(d))};$.ht=function(a,d,c){c=void 0===c?!0:c;var f=SC(d);if(!f)return console.log("Unable to find the Element:"+d),!1;f.innerHTML=a;os=f.getElementsByTagName("script");for(d=0;d<os.length;d++)if(void 0!==os[d].src&&null!==os[d].src&&""!==os[d].src)$.script(os[d].src);else try{a=os[d].innerHTML,c&&(a=B.r(a,"/*",""),a=B.r(a,"*/","")),eval(a)}catch(h){console.log("Page script Error: "+h.message)}os=null};$.tr=function(a){b=a.split("?");return b[1]?b[0]:a};$.dt=function(a){if(1E7<=Number(a)){a=String(a);var d=a.slice(-4),c=d.slice(-2),f=d.substring(0,2);return a.replace(d,"")+"-"+f+"-"+c}return a};$.rmhead=function(a){var d=document.createElement("html");d.innerHTML=a;a=d.getElementsByTagName("clothhead")[0];a.parentNode.removeChild(a);a=[d.innerHTML,a.innerHTML];d.remove();return a};$.addhead=function(a){var d=SC("html").getElementsByTagName("head")[0],c=d.getElementsByTagName("clothhead");if("html"!==d.parentNode.tagName.toLowerCase())return!1;0>=c.length?(c=document.createElement("clothhead"),c.innerHTML=a,d.appendChild(c)):c[0].innerHTML=a};$.ldparse=function(a){var d=document.createElement("html");d.innerHTML=a;(a=(a=d.getElementsByTagName("loadset"))?JSON.parse(a[0].innerHTML):!1)?$.loadset=a:console.log("Failed to initialize loading page.");d.remove()};$.ecls=function(a,d,c,f){c=void 0===c?!1:c;f=void 0===f?!1:f;a=a.split(":");var h=document.getElementsByTagName("html")[0],g;switch(a[0]){case "id":g=document.getElementById(a[1]);break;case "class":g=h.getElementsByClassName(a[1]);break;case "tag":g=h.getElementsByTagName(a[1])}if(f)return g;if(g instanceof Element)c?g.classList.remove(d):g.classList.add(d);else for(var k in g)g[k]instanceof Element&&(c?g[k].classList.remove(d):g[k].classList.add(d))}}if(!B){if(localStorage["obottle-ldpage"]){var e=SC("html").innerHTML;$.ldparse(localStorage["obottle-ldpage"]);SC("html").innerHTML=e.replace("\x3c!--[LoadingArea]--\x3e",localStorage["obottle-ldpage"])}$.aj("./loading.html","",{success:function(a,d){B.hr("\x3c!--[LoadingArea]--\x3e",a);localStorage["obottle-ldpage"]=a;$.ldparse(a)},failed:function(a){console.log("LoadingPage Load Failed")}},"get","",!0);$.script("https://cdn.jsdelivr.net/gh/BottleSome/blog/library.js");window.htmls={};var B={moreperpage:0,r:function(a,d,c,f){if(void 0===f||f)for(;-1!==a.indexOf(d);)a=a.replace(d,c);else a=a.replace(d,c);return a},navlist:{statu:!1,conf:{}},navcurrent:function(a){a=void 0===a?"":a;return((-1==a.indexOf("http")?a:a.replace(window.location.protocol+"//"+window.location.hostname,""))||window.location.pathname).replace(".html","")},navcheck:function(){var a=document.body,d=this.navlist.conf;if(this.navlist.statu){var a=a.getElementsByClassName(d.navclass),c=this.navcurrent(),f;for(f in a){var h=this.navcurrent(a[f].href);c==h&&a[f]instanceof Element?a[f].classList.add(d.activeclass):a[f]instanceof Element&&a[f].classList.contains(d.activeclass)&&a[f].classList.remove(d.activeclass)}}},nav:function(a){this.navlist.statu=!0;this.navlist.conf=a},scrolltop:function(a,d){var c=Math.floor(parseInt(document.body.scrollTop)/3),f=Math.pow(a,2)/(2*c),h=0,g=setInterval(function(){var a=document.body.scrollTop;parseInt(a)>2*c?(h+=f,document.body.scrollTop=parseInt(a)-h):parseInt(a)>c?document.body.scrollTop=parseInt(a)-h:parseInt(a)<=c&&(h-=f,h<=d&&(h=d),0>=parseInt(a)?(document.body.scrollTop=0,clearInterval(g)):document.body.scrollTop=parseInt(a)-h)},10)},hc:function(a){return a=a.replace(/&amp;/g,"\x26").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")},hr:function(a,d){var c=SC("html").innerHTML;SC("html").innerHTML=this.r(c,a,d)},unrnspace:function(a){a=a.replace(/{{s}}/g," ");a=a.replace(/{{rn}}/g,"\r\n");return a=a.replace(/{{n}}/g,"\n")},deltemptags:function(a){return a.replace(/\{\((.*?)\)\}/g,"")},preventscript:function(){var a=SC("html").getElementsByTagName("script"),d;for(d in a)a[d].src&&-1==$.scripturl.indexOf(a[d].src)&&$.scripturl.push(a[d].src)},dehtml:function(a){return a.replace(/&amp;/g,"\x26").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&quot;/g,'"')},gt:function(a,d,c){c=(c=void 0===c?!1:c)?c:SC("html").innerHTML;try{var f=c.split(a)[1].split(d)[0];return this.dehtml(f)}catch(h){return!1}},lazypre:function(a){var d=document.createElement("div");d.innerHTML=a;a=d.getElementsByTagName("img");for(var c in a)if(a[c].src){var f=a[c].src;a[c].src="data:image/gif;base64,R0lGODlhkAGQAYAAAP///wAAACH5BAEAAAAALAAAAACQAZABAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aN/xw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fz7+03/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjm0UAAA7";""!==a[c].style.width&&(f=f+"[width]"+a[c].style.width);a[c].setAttribute("data-src","[lazy]"+f);a[c].style.width="100%"}c=d.innerHTML;d.remove();return c},lazycheck:function(){var a=window.innerHeight,d=document.documentElement.scrollTop||document.body.scrollTop,c=document.getElementsByTagName("img"),f;for(f in c)if(a+d>c[f].offsetTop){var h=c[f].getAttribute("data-src");if("undefined"!==h&&h){c[f].setAttribute("data-src","");var g=h.split("[lazy]")[1];-1!==g.indexOf("[width]")?(h=g.split("[width]"),c[f].src=h[0],c[f].style.width=h[1]):(c[f].src=h.split("[lazy]")[1],c[f].style.width="auto")}}},templonload:0,templateloaded:[],tpcheckstatu:!1,loadstatu:!1,tpcheck:function(){var a=this,d=this;a.tpcheckstatu=!0;a.loadshow();var c=a.gt("{(PageType)}","{(PageTypeEnd)}");if(window.templjson)if(window.mainjson||-1===window.templjson.usemain.indexOf(c))if("object"!==typeof showdown)setTimeout(function(){return d.tpcheck()},100);else if(localStorage["obottle-ldpage"]){a.preventscript();var f=window.templjson;f.necessary.push(c);c==f.templatehtmls.postlist&&f.necessary.push(f.templatehtmls.postitem);for(var h in f.necessary)if(-1==d.templateloaded.indexOf(f.necessary[h])){d.templonload+=1;var g=!1,k=q("r","template-"+f.necessary[h],"","","");k.c&&(g=!0,c=f.necessary[h],console.log("Template using cache:"+c),window.htmls[c]=k.c,d.templateloaded.push(c),--d.templonload);$.aj(f.necessary[h],"",{success:function(a,c){window.htmls[c]=a;g?k.c!==a?q("w","template-"+c,a,timestamp(),""):q("e","template-"+c,"","",1):(d.templateloaded.push(c),--d.templonload,q("w","template-"+c,a,timestamp(),""))},failed:function(a){console.log("Necessary HTML Load Failed...")}},"get","",!0)}var l=setInterval(function(){0>=d.templonload&&(clearInterval(l),d.renderer())},200),f=null}else setTimeout(function(){return d.tpcheck()},100);else window.mainjsonrequest||(window.mainjsonrequest=!0,$.aj(window.templjson.mainjson,"",{success:function(c){window.mainjson=JSON.parse(c.replace(/[\r\n]/g,""));a.moreperpage=parseInt(window.mainjson.more_per_page)},failed:function(a){console.log("MainJson Load Failed")}},"get","https://cdn.jsdelivr.net/gh/BottleSome/blog/",!0)),setTimeout(function(){return d.tpcheck()},100);else $.aj("template.json","",{success:function(c){window.templjson=JSON.parse(c);return a.tpcheck()},failed:function(a){console.log("TemplateJson Load Failed.")}},"get","",!0)},itempage:0,switchpage:0,nowpage:0,realpage:1,searchw:"",hashexist:!1,itempagefixer:function(){var a=window.mainjson,d=1,c;for(c in a.dateindex){var f=this.itempage,h=c.replace("post",""),h=a.postindex[h];d<=f&&h.link&&(this.itempage+=1);d+=1}--this.itempage},cd:function(a){for(;-1!==a.indexOf("\x3cifcover\x3e");){var d=B.gt("\x3cifcover\x3e","\x3c/ifcover\x3e",a);a=B.r(a,"\x3cifcover\x3e"+d+"\x3c/ifcover\x3e","")}return a},renderer:function(){var a=this,d=window.templjson;md=new showdown.Converter;var c=window.htmls[d.templatehtmls.cloth],f=window.htmls[d.templatehtmls.main],h=window.htmls[d.templatehtmls.comment],g=a.gt("{(PageType)}","{(PageTypeEnd)}"),k=window.mainjson;if(g==d.templatehtmls.post){var l=a.gt("{(PostContent)}","{(PostContentEnd)}"),n=a.gt("{(PostTitle)}","{(PostTitleEnd)}"),p=a.gt("{(PostDate)}","{(PostDateEnd)}"),t=a.gt("{(PostTag)}","{(PostTagEnd)}"),r=a.gt("{(PostID)}","{(PostIDEnd)}"),k=a.gt("{(PostCover)}","{(PostCoverEnd)}"),m=a.gt("{(MainTitle)}","{(MainTitleEnd)}").replace(/<\/?.+?>/g,""),l=a.r(window.htmls[d.templatehtmls.post],"{[postcontent]}",a.lazypre(md.makeHtml(a.hc(a.unrnspace(l.trim()))))),n=a.r(l,"{[posttitle]}",n),l=[];isNaN(p)?t="\u9875\u9762":(l=t.split(","),t="",l.forEach(function(a,c){t=t+'\x3ca href\x3d"'+d.generatehtmls.tags+"#"+encodeURIComponent(a)+'" class\x3d"taglink"\x3e'+a+"\x3c/a\x3e,"}),t=t.substr(0,t.length-1));n=a.r(n,"{[posttags]}",t);n=a.r(n,"{[postdate]}",$.dt(p));f=a.r(f,"{[contents]}",n);c=a.r(c,"{[main]}",f);m=a.r(c,"{[title]}",m);c=$.rmhead(m);m=a.r(c[0],"{[comments]}",h);m=a.r(m,"{[pid]}",r);m=a.r(m,"{[pagetype]}",g);m=a.r(m,"{(PageType)}","\x3c!--[PageType]");m=a.r(m,"{(PageTypeEnd)}","[PageTypeEnd]--\x3e");m=k&&"none"!==k&&""!==k?a.r(m,"{[postcover]}",k):a.cd(m);isNaN(p)&&(g=m.split("{(:PostEnd)}")[0]+"\x3c!--PostEnd--\x3e",m="\x3c!--Footer--\x3e"+m.split("{(Footer:)}")[1],m=g+m);$.ht(a.deltemptags(m),"container");$.addhead(c[1]);anichecker($.ecls($.loadset.listening,"",!1,!0),function(){a.lazycheck()});a.loadhide();m=k=null}else if(g==d.templatehtmls.postlist){l=a.gt("{(PostContent)}","{(PostContentEnd)}");m=a.gt("{(MainTitle)}","{(MainTitleEnd)}").replace(/<\/?.+?>/g,"");m=m.replace("-","");l=a.r(window.htmls[d.templatehtmls.postlist],"{[postitems]}",md.makeHtml(a.unrnspace(l.trim())));f=a.r(f,"{[contents]}",l);c=a.r(c,"{[main]}",f);m=a.r(c,"{[title]}",m);c=$.rmhead(m);m=a.r(c[0],"{[pagetype]}",g);m=a.r(m,"{(PageType)}","\x3c!--[PageType]");m=a.r(m,"{(PageTypeEnd)}","[PageTypeEnd]--\x3e");a.itempage=parseInt(k.posts_per_page);a.itempagefixer();$.ht(a.deltemptags(m),"container");$.addhead(c[1]);a.loadhide();var m=null,x=setInterval(function(){if(a.gt("\x3c!--[PageType]","[PageTypeEnd]--\x3e")!==d.templatehtmls.postlist)return PJAX.sel("container"),PJAX.start(),a.switchpage=0,clearInterval(x),!1;a.indexpagechecker()},100)}else if(g==d.templatehtmls.archives){var m=a.gt("{(MainTitle)}","{(MainTitleEnd)}").replace(/<\/?.+?>/g,""),p=window.htmls[d.templatehtmls.archives],h=a.gt("{(Archives)}","{(ArchivesEnd)}",p),D=a.gt("{(ArchiveTemplate)}","{(ArchiveTemplateEnd)}",p),E=a.gt("{(ArchiveItemTemplate)}","{(ArchiveItemTemplateEnd)}",p),z=k.dateindex,v="",u="",A=0;for(l in z){p=z[l].toString().substring(0,4);p!==A&&(A=p,""!==u&&(v=a.r(v,"{[archiveitems]}",u),u=""),v+=a.r(D,"{[archiveyear]}",p));var r=l.replace("post",""),n=Base64.decode(k.postindex[r].title),p=k.postindex[r].date,C="",C=k.postindex[r].link?k.postindex[r].link:"post-"+r+".html",r=a.r(E,"{[archiveitemlink]}",C),r=a.r(r,"{[archiveitemtitle]}",n),r=a.r(r,"{[archiveitemdate]}",$.dt(p)),u=u+r}""!==u&&(v=a.r(v,"{[archiveitems]}",u));l=a.r(h,"{[archives]}",v+"\x3c/ul\x3e");f=a.r(f,"{[contents]}",l);c=a.r(c,"{[main]}",f);m=a.r(c,"{[title]}",m);c=$.rmhead(m);m=a.r(c[0],"{[pagetype]}",g);m=a.r(m,"{(PageType)}","\x3c!--[PageType]");m=a.r(m,"{(PageTypeEnd)}","[PageTypeEnd]--\x3e");$.ht(a.deltemptags(m),"container");$.addhead(c[1]);a.loadhide();m=null}else if(g==d.templatehtmls.tags){var m=a.gt("{(MainTitle)}","{(MainTitleEnd)}").replace(/<\/?.+?>/g,""),p=window.htmls[d.templatehtmls.tags],h=a.gt("{(Tags)}","{(TagsEnd)}",p),F=a.gt("{(TagItemTemplate)}","{(TagItemTemplateEnd)}",p),n=$.tr(window.location.href),w="",k=k.postindex,y=[];for(r in k)p=k[r].tags.split(","),p.forEach(function(a,c){""!==a&&-1==y.indexOf(a)&&y.push(a)});y.forEach(function(c,d){var f=a.r(F,"{[tagitemtitle]}",c),f=a.r(f,"{[tagitemlink]}","#"+encodeURIComponent(c));w+=f});a.alltaghtml=w;-1!==n.indexOf("#")&&(k=n.split("#")[1],a.nowtag=k,"alltags"!==k&&(w="\x3cscript\x3eB.taguper('"+k+"');PJAX.sel('container');PJAX.start();\x3c/script\x3e"));x=setInterval(function(){if(-1==window.location.href.indexOf(d.generatehtmls.tags)&&-1==window.location.href.indexOf(d.generatehtmls.tags.replace(".html","")))return PJAX.sel("container"),PJAX.start(),clearInterval(x),!1;a.tagpagechecker()},100);l=a.r(h,"{[tags]}",w);f=a.r(f,"{[contents]}",l);c=a.r(c,"{[main]}",f);m=a.r(c,"{[title]}",m);c=$.rmhead(m);m=a.r(c[0],"{[pagetype]}",g);m=a.r(m,"{(PageType)}","\x3c!--[PageType]");m=a.r(m,"{(PageTypeEnd)}","[PageTypeEnd]--\x3e");$.ht(a.deltemptags(m),"container");$.addhead(c[1]);a.loadhide();m=null}a.tpcheckstatu=!1},nowtag:"",alltaghtml:"",taguper:function(a){a=decodeURIComponent(a);SC("html");var d=this,c=window.htmls[window.templjson.templatehtmls.tags],f=d.gt("{(TagListTemplate)}","{(TagListTemplateEnd)}",c),h=d.gt("{(TagListItemTemplate)}","{(TagListItemTemplateEnd)}",c),g=window.mainjson,c=g.dateindex,k=g.postindex,g=[],l="",n;for(n in c)c=n.replace("post",""),-1!==k[c].tags.indexOf(a)&&g.push(c);l+="\x3cul\x3e";g.forEach(function(a,c){var f=k[a],g="post-"+a+".html",n=$.dt(f.date);f.link&&(g=f.link+".html");g=d.r(h,"{[taglistitemlink]}",g);g=d.r(g,"{[taglistitemtitle]}",Base64.decode(f.title));g=d.r(g,"{[taglistitemdate]}",$.dt(n));l+=g});l=d.r(f,"{[taglist]}",l);l=d.r(l,"{[tagcurrent]}",a);SC("tags").innerHTML=l;l=null},tagpagechecker:function(){SC("html");var a=$.tr(window.location.href);-1==a.indexOf("#")?(PJAX.pause(),window.location.replace(a+"#alltags"),PJAX.start()):(a=a.split("#")[1],this.nowtag!==a&&(this.nowtag=a,"alltags"==a?SC("tags")&&(SC("tags").innerHTML=this.alltaghtml):this.taguper(a),PJAX.start()))},indexpagechecker:function(){SC("html");var a=window.templjson,d=$.tr(decodeURIComponent(window.location.href)),c=window.mainjson,f=parseInt(c.posts_per_page);if(-1!==d.indexOf("#")){this.hashexist=!0;var h=d.split("#")[1];if(-1==d.indexOf("#!")){if(!isNaN(h)){var g=parseInt(h)-1;this.nowpage!==g&&(this.searchw="",this.nowpage=g,this.itempage=f*g*this.moreperpage,this.itempagefixer(),SC("postitems").innerHTML="",this.more(),this.realpage=g+1,this.switchpage=0)}}else{var k="",a=window.htmls[a.templatehtmls.postitem],f=this.gt("{(PostItem)}","{(PostItemEnd)}",a),a=this.gt("{(NoItem)}","{(NoItemEnd)}",a),d=d.split("#!")[1];if(d!==this.searchw){var l=function(){SC("postitems")&&SC("morebtn")?(window.scrollTo(0,0),SC("postitems").innerHTML=k,SC("morebtn").style.display="none",PJAX.start()):setTimeout(function(){return l()},500)};this.searchw=d;c=c.postindex;for(g in c){var n=Base64.decode(c[g].title).toLowerCase(),p=Base64.decode(c[g].intro).toLowerCase(),h=c[g].date.toLowerCase(),t=c[g].tags.toLowerCase(),d=d.toLowerCase();if(-1!==n.indexOf(d)||-1!==p.indexOf(d)||-1!==h.indexOf(d)||-1!==t.indexOf(d))n=B.r(f,"{[postitemtitle]}",n),p=B.r(n,"{[postitemintro]}",p+"..."),h=B.r(p,"{[postitemdate]}",$.dt(h)),h=c[g].link?B.r(h,"{[postitemlink]}",c[g].link+".html"):B.r(h,"{[postitemlink]}","post-"+g+".html"),h=c[g].cover?B.r(h,"{[postcover]}",c[g].cover):this.cd(h),k+=h,h=null}""==k&&(k=a);this.tpcheckstatu||this.loadstatu||l()}if(this.tpcheckstatu||this.loadstatu)this.searchw=""}}else this.searchw="",this.hashexist&&(this.realpage=1,this.switchpage=0,this.hashexist=!1)},loadshow:function(){this.loadstatu=!0;if($.loadset.animations){var a=$.loadset.animations["in"],d=$.loadset.animations.out,c;for(c in a)$.ecls(c,a[c]);for(c in d)$.ecls(c,d[c],!0)}},loadhide:function(){this.loadstatu=!1;var a=$.loadset.animations.out,d=$.loadset.animations["in"],c;for(c in a)$.ecls(c,a[c]);for(c in d)$.ecls(c,d[c],!0)},morehtmls:{},more:function(){var a=this.itempage+1,d=0,c=0,f="",h=window.mainjson,g=window.htmls[window.templjson.templatehtmls.postitem],k=this.gt("{(PostItem)}","{(PostItemEnd)}",g),g=this.gt("{(NoItem)}","{(NoItemEnd)}",g),l=parseInt(h.posts_per_page),n=h.dateindex,p;for(p in n)if(a<=c){if(d<l){var t=p.replace("post",""),n=h.postindex[t];if(n.link)this.itempage+=1,--d;else var r=B.r(k,"{[postitemtitle]}",Base64.decode(n.title)),r=B.r(r,"{[postitemintro]}",Base64.decode(n.intro)+"..."),r=B.r(r,"{[postitemdate]}",$.dt(n.date)),t=B.r(r,"{[postitemlink]}","post-"+t+".html"),t=n.cover?B.r(t,"{[postcover]}",n.cover):this.cd(t),f=f+t;d+=1}}else c+=1;""==f?(f=g,SC("morebtn").style.display="none"):SC("morebtn").style.display="block";this.itempage+=l;this.switchpage>=this.moreperpage-1?(SC("postitems").innerHTML=f,this.scrolltop(20,2),this.switchpage=0,this.realpage+=1,PJAX.pause(),window.location.href="#"+this.realpage):(SC("postitems").innerHTML=SC("postitems").innerHTML+f,this.switchpage+=1);PJAX.start()}};window.addEventListener("scroll",B.lazycheck,!1);window.addEventListener("pjaxstart",function(){B.loadshow()},!1);window.addEventListener("pjaxfinish",function(){B.loadhide()},!1)}function anichecker(a,d){function c(){d();a.removeEventListener(f,c)}var f="",h={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},g;for(g in h)void 0!==a.style[g]&&(f=h[g]);a.addEventListener(f,c)}var mainhost=window.location.host,dt=(new Date).getTime();if(void 0==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),LoadedPage:{},lasthref:window.location.href,preventurl:[],recenturl:"",replace:"",statu:!0,sel:function(a){this.replace=a},jump:function(a){var d=encodeURIComponent(a),c=this,f=!1,h=c.replace;""==h&&(h="container");if(-1!==c.recenturl.indexOf("#")&&-1!==a.indexOf("#"))return!1;-1==c.recenturl.indexOf("#")&&-1!==a.indexOf("#")&&(B.nowpage=0);window.dispatchEvent(c.PJAXStart);anichecker($.ecls($.loadset.listening,"",!1,!0),function(){window.scrollTo(0,0);if(c.LoadedPage[d])c.clearevent(!0),$.ht(c.LoadedPage[d],h,!1),anichecker($.ecls($.loadset.listening,"",!1,!0),function(){window.dispatchEvent(c.PJAXFinish)});else{var g=q("r",d,"","","");g.c&&(f=!0,c.clearevent(!0),$.ht(g.c,h,!1));$.aj(a,{},{success:function(k){c.recenturl=a;c.LoadedPage[d]=k;f?g.c!==k?(q("w",d,k,timestamp(),""),c.clearevent(!0),$.ht(k,h,!1),c.start()):q("e",d,"","",1):(c.clearevent(!0),$.ht(k,h,!1),q("w",d,k,timestamp(),""));anichecker($.ecls($.loadset.listening,"",!1,!0),function(){window.dispatchEvent(c.PJAXFinish)})},failed:function(a){window.dispatchEvent(c.PJAXFinish)}},"get","",!0)}})},pjaxautojump:function(){-1!==window.location.href.indexOf(mainhost)&&PJAX.jump(window.location.href)},clickevent:function(a){if(-1===PJAX.preventurl.indexOf(this.href)&&this.href&&""!=this.href)window.history.pushState(null,null,this.href),a.preventDefault(),PJAX.jump(this.href);else return!0},clearevent:function(a){a=void 0===a?!1:a;var d=document.getElementsByTagName("a"),c;for(c in d)"function"==typeof d[c].removeEventListener&&(d[c].removeEventListener("click",this.clickevent),a?d[c].parentNode.removeChild(d[c]):d[c]=d[c])},start:function(){this.statu=!0;this.recenturl=window.location.href;this.clearevent();var a=document.getElementsByTagName("a"),d;for(d in a)"function"==typeof a[d].addEventListener&&(a[d].setAttribute("pjax",""),a[d].addEventListener("click",this.clickevent,!1));window.addEventListener("popstate",PJAX.pjaxautojump,!1)},pause:function(){this.statu=!1;window.removeEventListener("popstate",PJAX.pjaxautojump)},autoprevent:function(){var a=document.getElementsByTagName("a"),d=window.location.host,c;for(c in a)void 0!==a[c].href&&-1==a[c].href.indexOf(d)&&this.preventurl.push(a[c].href)}};function q(a,d,c,f,h){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");var g=0,k="",l=JSON.parse(localStorage.obottle),n=[];"undefined"!==typeof l[d]&&(g=l[d].t,k=l[d].h);if("w"==a){l=JSON.parse(localStorage.obottle);a={};a.h=c;a.t=f;a.rt=0;l[d]=a;try{localStorage.obottle=JSON.stringify(l)}catch(t){for(var p in l)(20>=Number(l[p].rt)||172800<=Number(f)-Number(l[p].t))&&delete l[p];localStorage.obottle=JSON.stringify(l)}}else{if("r"==a)return n.t=g,n.c=k,n;"e"==a&&(l=JSON.parse(localStorage.obottle),l[d].rt=Number(l[d].rt)+h,localStorage.obottle=JSON.stringify(l))}}function timestamp(){return(new Date).getTime()}B.tpcheck();