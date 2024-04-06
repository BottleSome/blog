/*FrontMainJS ver 5.0.9 - SomeBottle20240406*/
"use strict";const barnDir="barn/",mainHost=window.location.host;if("object"!=typeof $){var $={},SC=function(a){return"body"==a?document.body:"html"==a?document.getElementsByTagName("html")[0]:document.getElementById(a)};$.loadedScripts=[],$.loadSettings={},$.loadingJS=0,$.ft=function(a,b="",c="get",e={}){if("false"!==a&&a){let d={body:JSON.stringify(e),cache:"default",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),method:c};return"get"==c&&delete d.body,a=""===b?a:b+a,fetch(a,d).then(a=>200<=a.status&&400>a.status?a.text():Promise.reject("failed:invalid status code.")).catch(a=>Promise.reject(a))}return Promise.reject("failed:wrong URL.")},$.script=function(a,b=!1){let c=document.createElement("script"),d=$.loadedScripts.includes(a),e=b?$.attrs(b):{};if(!d){for(var f in $.loadingJS+=1,$.loadedScripts.push(a),c.type="text/javascript",c.src=a,e)c.setAttribute(f,e[f]);document.body.appendChild(c);let b=function(){$.loadingJS-=1,this.removeEventListener("load",b,!1)}.bind(c);c.addEventListener("load",b,!1)}c=null},$.aniChecker=function(a,b){function c(){a.removeEventListener(d,c),b()}let d="",e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var f in e)void 0!==a.style[f]&&(d=e[f]);a.addEventListener(d,c)},$.scriptCircle=function(a){let b=0;return new Promise(c=>{let d=setInterval(()=>{0<$.loadingJS?b+=1:(clearInterval(d),a.forEach(a=>{setTimeout("try{"+a+"}catch(e){console.log('Page script Error: ' + e.message);}",0)}),setTimeout(()=>c("done"),10))},100)})},$.attrs=function(a){let b={};if(a.hasAttributes()){let c=a.attributes;for(let a of c)a.name&&a.value&&(b[a.name]=a.value)}return b},$.scriptRestore=function(a){return a.replace(/^(?:\/\*)([\s\S]*?)(?:\*\/)$/gi,(a,b)=>b)},$.ht=function(a,b,c=!0){let d=SC(b),e=[],f="Unable to find the Element:"+b;if(!d)return console.log(f),Promise.reject(f);else{d.innerHTML=a;let b=d.getElementsByTagName("script");for(var g=0,i=b.length;g<i;g++)if(void 0!==b[g].src&&null!==b[g].src&&""!==b[g].src)$.script(b[g].src,b[g]);else{var j=b[g].innerHTML;c&&(j=$.scriptRestore(j.trim())),e.push(j)}return $.scriptCircle(e)}},$.useLinkPattern=function(a,b){return a.replaceAll(/\{\s*?pid\s*?\}/gi,b)},$.trimMark=function(c){var d=c;let a=d.split("?");return a[1]?a[0]:d},$.dt=function(a){if(1e7<=+a){let b=a+"",c=b.slice(-4),e=c.slice(-2),d=c.substring(0,2),f=b.replace(c,"");return f+"-"+d+"-"+e}return a},$.rmHead=function(a){let b=document.createElement("html");b.innerHTML=a;let c=b.getElementsByTagName("clothhead")[0];c.parentNode.removeChild(c);let d=[b.innerHTML,c.innerHTML];return b.remove(),c=null,d},$.addHead=function(a){let b=SC("html").getElementsByTagName("head")[0],c=b.getElementsByTagName("clothhead");if("html"!==b.parentNode.tagName.toLowerCase())return!1;if(0>=c.length){let c=document.createElement("clothhead");c.innerHTML=a,b.appendChild(c),c=null}else c[0].innerHTML=a;b=c=null},$.title=function(a){let b=SC("html").getElementsByTagName("head")[0],c=b.getElementsByTagName("title");if(0>=c.length){let c=document.createElement("title");c.innerHTML=a,b.appendChild(c)}else c[0].innerHTML=a},$.ldParse=function(a){let b=document.createElement("html");b.innerHTML=a;let c=b.getElementsByTagName("loadset"),d=!!c&&JSON.parse(c[0].innerHTML);d?$.loadSettings=d:console.log("Failed to initialize loading page."),b.remove(),c=null},$.alterClass=function(a,b,c=!1,d=!1){var e,f=a.split(":"),g=document.getElementsByTagName("html")[0];switch(f[0]){case"id":e=document.getElementById(f[1]);break;case"class":e=g.getElementsByClassName(f[1]);break;case"tag":e=g.getElementsByTagName(f[1]);}if(d)return e;if(!(e instanceof Element))for(let a of e)c?a.classList.remove(b):a.classList.add(b);else c?e.classList.remove(b):e.classList.add(b);e=g=null}}if(!B){if(localStorage["obottle-ldpage"]){var prevHtml=SC("html").innerHTML,ldLocalUsed=!0;$.ldParse(localStorage["obottle-ldpage"]),SC("html").innerHTML=prevHtml.replace("<loadingarea></loadingarea>",()=>localStorage["obottle-ldpage"])}else var ldLocalUsed=!1;$.ft(`${barnDir}loading.otp.html`).then(a=>{a=B.r(a,"barndir",barnDir,!0),ldLocalUsed||(B.hr("<loadingarea></loadingarea>",a),$.ldParse(a)),localStorage["obottle-ldpage"]=a},a=>{console.log("LoadingPage Load Failed -> "+a)}),window.tpHtmls={};var B={morePerPage:0,r:function(a,b,c,d=!1,e=!0){if(d)a="("==d?a.replace(new RegExp("\\{\\("+b+"\\)\\}",(e?"g":"")+"i"),()=>c):a.replace(new RegExp("\\{\\["+b+"\\]\\}",(e?"g":"")+"i"),()=>c);else if(e)for(;-1!==a.indexOf(b);)a=a.replace(b,c);else a=a.replace(b,c);return a},navList:{status:!1,conf:{}},navCurrent:function(a=""){let b=window.location.port;return((a.includes("http")?a.replace(window.location.protocol+"//"+window.location.hostname+(b?":"+b:""),""):a)||window.location.pathname).replace(".html","")},navcheck:function(){let a=this,b=a.navList.conf;if(a.navList.status){let c=document.body.getElementsByClassName(b.navclass),d=a.navCurrent();for(let e of c){let c=a.navCurrent(e.href),f=d.lastIndexOf(c),g=d.length,h=c.length;(d==c||f+h==g&&-1!==f)&&e instanceof Element?e.classList.add(b.activeclass):e instanceof Element&&(e.classList.contains(b.activeclass)?e.classList.remove(b.activeclass):c=c)}c=null}},nav:function(a){let b=this;b.navList.status=!0,b.navList.conf=a},scrollbottom:function(){let a=document.documentElement.scrollHeight;window.scrollTo(0,a)},scrolltop:function(a,b){var c=document.body.scrollTop,d=Math.floor(parseInt(c)/3),e=b,f=Math.pow(a,2)/(2*d),g=0,h=setInterval(function(){let a=document.body.scrollTop;parseInt(a)>2*d?(g+=f,document.body.scrollTop=parseInt(a)-g):parseInt(a)>d?document.body.scrollTop=parseInt(a)-g:parseInt(a)<=d&&(g-=f,g<=e&&(g=e),0>=parseInt(a)?(document.body.scrollTop=0,clearInterval(h)):document.body.scrollTop=parseInt(a)-g)},10)},hr:function(a,b){var c=SC("html").innerHTML;SC("html").innerHTML=this.r(c,a,b)},delTempTags:function(a){return a.replace(/\{\((.*?)\)\}/g,"")},preventScript:function(){let a=SC("html").getElementsByTagName("script");for(let b of a)b.src&&!$.loadedScripts.includes(b.src)&&$.loadedScripts.push(b.src);a=null},deHtml:function(a){return a.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#039;/g,"'").replace(/&#39;/g,"'").replace(/&quot;/g,"\"")},gt:function(a,b,c=!1,d=!1){let e=c?c:SC("html").innerHTML;try{let c=d?e.split(a)[1]:e.split(new RegExp("\\{\\("+a+"\\)\\}","i"))[1],f=d?c.split(b)[0]:c.split(new RegExp("\\{\\("+b+"\\)\\}","i"))[0];return f}catch(a){return!1}},lazyLoad:!0,lazy:a=>{B.lazyLoad=a},lazyPre:function(a){let b=document.createElement("div");b.innerHTML=a;let c=b.getElementsByTagName("img");for(let b of c)if(b.src){let a=b,c=a.src;a.src="data:image/svg+xml,%3Csvg width='302' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E %3Ctitle%3Ebackground%3C/title%3E %3Crect x='-1' y='-1' width='304' height='29' id='canvas_background' fill='none'/%3E %3Cg id='canvasGrid' display='none'%3E %3Crect id='svg_2' width='100%25' height='100%25' x='0' y='0' stroke-width='0' fill='url(%23gridpattern)'/%3E %3C/g%3E %3C/g%3E %3Cg%3E %3Ctitle%3ELayer 1%3C/title%3E %3Ctext fill='%23000000' stroke='%23000' stroke-width='0' x='129.703125' y='16.303124' id='svg_1' font-size='8' font-family='Helvetica, Arial, sans-serif' text-anchor='start' xml:space='preserve'%3Epic sleeping%3C/text%3E %3C/g%3E %3C/svg%3E",""!==a.style.width&&(c+="[width]"+a.style.width),a.setAttribute("data-src","[lazy]"+c),a.style.width="100%"}let d=b.innerHTML;return b.remove(),c=null,d},lazyCheck:function(){if(!B.lazyLoad)return!1;let a=window.innerHeight,b=document.documentElement.scrollTop||document.body.scrollTop,c=document.getElementsByTagName("img");for(let d of c){let c=d.offsetTop;a+b>c&&a+b-c<a&&B.lazyShow(d)}c=null},lazyShow:function(a){let b=a.getAttribute("data-src");if("undefined"!==b&&b){a.setAttribute("data-src","");let c=b.split("[lazy]")[1];if(-1!==c.indexOf("[width]")){let b=c.split("[width]");a.src=b[0],a.style.width=b[1]}else a.src=b.split("[lazy]")[1],a.style.width="auto"}},templateOnload:0,templateLoaded:[],tpcheckStatus:!1,loadStatus:!1,tpcheck:function(a=!1){let b=this;if(!b.tpcheckStatus){b.tpcheckStatus=!0,b.loadshow();let c=b.gt("PageType","PageTypeEnd",a);Promise.resolve(!window.tpJson&&$.ft(`${barnDir}template.json`)).then(a=>{a&&(window.tpJson=JSON.parse(a));let b=!window.mainJson&&window.tpJson.usemain.includes(c);return Promise.resolve(!!b&&$.ft(barnDir+window.tpJson.mainjson,""))},a=>{throw"TemplateJson Load Failed -> "+a}).then(a=>(a&&(window.mainJson=JSON.parse(a.replace(/[\r\n]/g,"")),b.morePerPage=parseInt(window.mainJson.more_per_page)),new Promise(a=>{let b=setInterval(()=>{0>=$.loadingJS&&localStorage["obottle-ldpage"]&&(clearInterval(b),a(!0))},25)})),a=>{throw"MainJson Load Failed -> "+a}).then(()=>{b.preventScript();let d=window.tpJson,e=d.templatehtmls;d.necessary.push(c),c==e.postlist&&d.necessary.push(e.postitem);for(let a of d.necessary)if(!b.templateLoaded.includes(a)){b.templateOnload+=1;let c=!1,d=q("r","template-"+a,"","",""),e=window.tpHtmls;d.c&&(c=!0,console.log("Preload the template locally: "+a),e[a]=d.c,b.templateLoaded.push(a),b.templateOnload-=1),(a=>{$.ft(barnDir+a).then(f=>{f=B.r(f,"barndir",barnDir,!0),e[a]=f,c?d.c===f?q("e","template-"+a,"","",1):q("w","template-"+a,f,timestamp(),""):(b.templateLoaded.push(a),b.templateOnload-=1,q("w","template-"+a,f,timestamp(),""))},a=>{console.log("Necessary HTML Load Failed... -> "+a)})})(a)}let f=setInterval(function(){0>=b.templateOnload&&(clearInterval(f),b.renderer(a))},50);d=null})}},itemPage:0,switchPage:0,currentPageBefore:0,realPage:1,searchWd:"",hashExist:!1,itemPageFixer:function(){let a=this,b=window.mainJson,c=a.itemPage;for(let d,e=0;e<c;e++)if(d=b.dateindex[e],d){let e=d[0],f=b.postindex[e];f.link&&(a.itemPage+=1,c++)}a.itemPage-=1,b=null},cd:function(a){return a.replaceAll(/<ifcover.*?>(.*?)<\/ifcover.*?>/gis,"")},clothFirstRendered:!1,checkFirstRender:function(){let a=this,b=window.tpJson,c=window.tpHtmls,d=b.templatehtmls,e=c[d.cloth],f=c[d.main];if(!a.clothFirstRendered){console.log("Document rendered with clothes.(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727");let b=a.r(f,"contents","<div id='contentcontainer'></div>",!0),c=a.r(e,"main",b,!0),d=$.rmHead(c);$.ht(a.delTempTags(d[0]),"container"),$.addHead(d[1]),a.clothFirstRendered=!0,b=c=d=null}},back:function(){window.history.go(-1)},turnback:function(){let a=this.realPage;window.location.href=window.location.protocol+"//"+window.location.host+window.location.pathname+"#"+(1<a?a-1:1)},notNumber:function(a){return!/^\d+$/g.test(a.toString())},isDate:function(a){return /^\d{4}?(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/gi.test(a)},currentPageType:"",isPost:!1,renderer:function(a=!1){let b,c=this,d=window.tpJson,e=window.tpHtmls,f=d.templatehtmls,g=e[f.comment],h=window.mainJson,k=c.gt("MainTitle","MainTitleEnd",a).replace(/<\/?.+?>/g,""),l=c.gt("PageType","PageTypeEnd",a);if(c.currentPageType=l,c.currentPostInfo=!1,c.isPost=!1,l==f.post){let h=c.deHtml(c.gt("PostContent","PostContentEnd",a)),i=c.gt("PostTitle","PostTitleEnd",a),j=c.gt("PostDate","PostDateEnd",a),m=c.gt("PostTag","PostTagEnd",a),n=c.gt("PostID","PostIDEnd",a),o=c.gt("PostCover","PostCoverEnd",a),p=c.gt("PubTime","PubTimeEnd",a),q=c.gt("EditTime","EditTimeEnd",a),r=e[f.post],s=c.gt("PostTagsTemplate","PostTagsTemplateEnd",r),t=c.gt("PostTagsDelimiter","PostTagsDelimiterEnd",r),u=c.gt("IfPage","IfPageEnd",r),v=c.r(r,"postcontent",c.lazyPre($.mark(h.trim())),!0),w=[],x={title:i,date:j,tags:m,pid:n,cover:o||"",pubTime:p?+p:0,editTime:q?+q:0};v=c.r(v,"posttitle",i,!0),c.isDate(j)?(w=m.split(","),m="",w.forEach(function(a,b){let e=c.r(s,"tagurl",d.generatehtmls.tags+"#"+encodeURIComponent(a),!0);e=c.r(e,"tagname",a,!0),m+=e,b!==w.length-1&&(m+=t)}),c.isPost=!0):(m=u,delete x.date,x.link=j),c.currentPostInfo=x,v=c.r(v,"posttags",m,!0),v=c.r(v,"postdate",$.dt(j),!0),v=c.r(v,"comments",g,!0),v=c.r(v,"pid",n,!0);let y=$.trimMark(window.location.hash).replace("#","");if(v=c.r(v,"pagetype",l,!0),v=c.r(v,"PageType","<!--[PageType]","(",!1),v=c.r(v,"PageTypeEnd","[PageTypeEnd]-->","(",!1),v=o&&"none"!==o?c.r(v,"postcover",o,!0):c.cd(v),!c.isDate(j)){let a=v.split(/\{\(:PostEnd\)\}/gi)[0]+"<!--PostEnd-->",b="<!--Footer-->"+v.split(/\{\(Footer:\)\}/gi)[1];v=a+b}v=c.gt("PostTemplate","PostTemplateEnd",v),c.checkFirstRender(),$.title(k),b=$.ht(c.delTempTags(v),"contentcontainer"),$.aniChecker($.alterClass($.loadSettings.listening,"",!1,!0),function(){c.lazyCheck()}),c.applyAfterLoad(()=>{SC(y)&&SC(y).scrollIntoView()}),window.addEventListener("scroll",B.lazyCheck,!1),v=d=null}else if(l==f.postlist){let g=c.deHtml(c.gt("PostContent","PostContentEnd",a)),i=e[f.postlist],j=c.gt("PostListTemplate","PostListTemplateEnd",i),n=c.gt("MoreBtn","MoreBtnEnd",i),o=c.gt("BackBtn","BackBtnEnd",i);j=c.r(j,"morebtn","<span id='morebtn'>"+n+"</span>",!0),j=c.r(j,"backbtn","<span id='backbtn'>"+o+"</span>",!0);let p=c.r(j,"postitems","<div id='postitems'>"+$.mark(g.trim())+"</div>",!0);p=c.r(p,"pagetype",l,!0),p=c.r(p,"PageType","<!--[PageType]","(",!1),p=c.r(p,"PageTypeEnd","[PageTypeEnd]-->","(",!1),c.itemPage=parseInt(h.posts_per_page),c.itemPageFixer(),c.checkFirstRender(),$.title(k),b=$.ht(c.delTempTags(p),"contentcontainer"),p=null,c.backChecker(),c.indexPageChecker();var m=setInterval(function(){return c.gt("<!--[PageType]","[PageTypeEnd]-->",!1,!0)===f.postlist?void c.indexPageChecker():(console.log("Jumped out of the index page w(\uFF9F\u0414\uFF9F)w"),c.switchPage=0,clearInterval(m),d=null,!1)},100)}else if(l==f.archives){let a=e[f.archives],g=c.gt("Archives","ArchivesEnd",a),j=c.gt("ArchiveTemplate","ArchiveTemplateEnd",a),m=c.gt("ArchiveItemTemplate","ArchiveItemTemplateEnd",a),n=h.dateindex,o="",p="",q=0;for(let a=0,b=n.length;a<b;a++){let b=n[a],d=b[1].toString().substring(0,4);d!==q&&(q=d,""!==p&&(o=c.r(o,"archiveitems",p,!0),p=""),o+=c.r(j,"archiveyear",d,!0));let e=b[0],f=h.postindex[e],g=f.permalink||"post-{pid}",i=$.useLinkPattern(g,e),k=Base64.decode(f.title),l=f.date,r=f.link?f.link+".html":i+".html",s=c.r(m,"archiveitemlink",r,!0);s=c.r(s,"archiveitemtitle",k,!0),s=c.r(s,"archiveitemdate",$.dt(l),!0),p+=s}o=""===p?o:c.r(o,"archiveitems",p,!0),o+="</ul>";let r=c.r(g,"archives",o,!0);r=c.r(r,"pagetype",l,!0),r=c.r(r,"PageType","<!--[PageType]","(",!1),r=c.r(r,"PageTypeEnd","[PageTypeEnd]-->","(",!1),c.checkFirstRender(),$.title(k),b=$.ht(c.delTempTags(r),"contentcontainer"),r=p=o=d=null}else if(l==f.tags){let a=e[f.tags],g=c.gt("Tags","TagsEnd",a),i=c.gt("TagItemTemplate","TagItemTemplateEnd",a),j=$.trimMark(window.location.href),m="",o=h.postindex,p=[];if(""==c.allTagsHtml){for(var n in o){let a=o[n].tags.split(",");a.forEach(function(a){""!==a&&-1==p.indexOf(a)&&p.push(a)})}p.forEach(function(a){let b=c.r(i,"tagitemtitle",a,!0);b=c.r(b,"tagitemlink","#"+encodeURIComponent(a),!0),m+=b}),c.allTagsHtml=m}else m=c.allTagsHtml;if(-1!==j.indexOf("#")){let a=j.split("#")[1];c.nowTag=a,"alltags"!==a&&(m="<script>B.tagUper('"+a+"');PJAX.sel('contentcontainer');PJAX.start();</script>")}let q=setInterval(function(){return-1==window.location.href.indexOf(d.generatehtmls.tags)&&-1==window.location.href.indexOf(d.generatehtmls.tags.replace(".html",""))?(clearInterval(q),d=null,!1):void c.tagPageChecker()},100),r=c.r(g,"tags","<div id='contenttags'>"+m+"</div>",!0);r=c.r(r,"pagetype",l,!0),r=c.r(r,"PageType","<!--[PageType]","(",!1),r=c.r(r,"PageTypeEnd","[PageTypeEnd]-->","(",!1),c.checkFirstRender(),$.title(k),b=$.ht(c.delTempTags(r),"contentcontainer"),r=null}c.searchWd="",c.tpcheckStatus=!1,PJAX.autoprevent(),PJAX.sel("contentcontainer"),PJAX.start(),c.navcheck(),window.dispatchEvent(PJAX.PJAXFinish),b.then(()=>{let a=c.rendererCallBacks;a instanceof Array&&a.forEach(a=>{"function"==typeof a&&a(l)})},a=>{console.log(a)}),h=e=null},rendererCallBacks:[],callAfterRender:function(a){"function"==typeof a&&this.rendererCallBacks.push(a)},currentPostInfo:!1,backChecker:function(){SC("backbtn").style.display=1==this.realPage?"none":"initial"},nowTag:"",allTagsHtml:"",tagUper:function(a){a=decodeURIComponent(a);let b=this,c=window.tpJson,d=window.tpHtmls[c.templatehtmls.tags],e=b.gt("TagListTemplate","TagListTemplateEnd",d),f=b.gt("TagListItemTemplate","TagListItemTemplateEnd",d),g=window.mainJson,h=g.dateindex,k=g.postindex,l=[],m="";for(let b,c=0,d=h.length;c<d;c++)b=h[c][0],-1!==k[b].tags.indexOf(a)&&l.push(b);m+="<ul>",l.forEach(function(a){let c=k[a],d=c.permalink||"post-{pid}",e=$.useLinkPattern(d,a),h=e+".html",i=$.dt(c.date);c.link&&(h=c.link+".html");let j=b.r(f,"taglistitemlink",h,!0);j=b.r(j,"taglistitemtitle",Base64.decode(c.title),!0),j=b.r(j,"taglistitemdate",$.dt(i),!0),m+=j}),m=b.r(e,"taglist",m,!0),m=b.r(m,"tagcurrent",a,!0),SC("contenttags").innerHTML=m,m=g=c=null},tagPageChecker:function(){let a=this,b=$.trimMark(window.location.href);if(-1==b.indexOf("#"))PJAX.pause(),window.location.replace(b+"#alltags"),PJAX.start();else{let c=b.split("#")[1];a.nowTag!==c&&(a.nowTag=c,"alltags"==c?SC("contenttags")&&(SC("contenttags").innerHTML=a.allTagsHtml):(a.tagUper(c),PJAX.start()))}},indexPageChecker:function(){let a=window.tpJson,b=$.trimMark(decodeURIComponent(window.location.href)),c=window.mainJson,d=parseInt(c.posts_per_page),e=this;if(-1!==b.indexOf("#")){e.hashExist=!0;let g=b.split("#")[1]||1;if(-1!=b.indexOf("#!")){let d=window.tpHtmls[a.templatehtmls.postitem],g=e.gt("PostItem","PostItemEnd",d),h=e.gt("NoItem","NoItemEnd",d),i=b.split("#!")[1];if(i!==e.searchWd&&!e.tpcheckStatus&&!e.loadStatus){function a(a,b){let c=a[b],d=c.permalink||"post-{pid}",f=$.useLinkPattern(d,b),h=c.title,i=c.intro,j=c.date,k=c.tags,l=B.r(g,"postitemtitle",h,!0);return l=B.r(l,"postitemintro",i+"...",!0),l=B.r(l,"postitemdate",$.dt(j),!0),l=B.r(l,"postitemtags",k.replace(/,/g,"\xB7"),!0),l=c.link?B.r(l,"postitemlink",c.link+".html",!0):B.r(l,"postitemlink",f+".html",!0),l=c.cover?B.r(l,"postcover",c.cover,!0):e.cd(l),l}function b(){SC("postitems")&&SC("morebtn")&&SC("backbtn")?(window.scrollTo(0,0),SC("postitems").innerHTML="Searching...\u2220( \u141B \u300D\u2220)\uFF3F",SC("morebtn").style.display="none",SC("backbtn").style.display="none",Promise.resolve(j).then(a=>"function"==typeof e.searchInj?e.searchInj(d,i,a):Promise.resolve(a)).then(b=>{b=Array.from(new Set(b)),b.forEach(b=>{k+=a(d,b)}),k=k||h,SC("postitems").innerHTML=k,PJAX.start(),a=d=k=null})):setTimeout(function(){return b()},10),b=j=null}e.searchWd=i;let d=Object.assign({},c.postindex);for(f in d)d[f]="object"==typeof d[f]?Object.assign({},d[f]):d[f],d[f].title=Base64.decode(d[f].title),d[f].intro=Base64.decode(d[f].intro);i=i.toLowerCase();let j=[],k="";for(var f in d){let a=d[f].title.toLowerCase(),b=d[f].intro.toLowerCase(),c=d[f].date.toLowerCase(),e=d[f].tags.toLowerCase();-1!==(a+b+c+e).indexOf(i)&&j.push(f)}e.tpcheckStatus||e.loadStatus||b()}}else if(!e.notNumber(g)){let a=parseInt(g),b=a-1;e.currentPageBefore!==b&&e.realPage!==a&&(console.log("Page change triggered by indexPageChecker <(\uFFE3\uFE36\uFFE3)>"),e.currentPageBefore=b,e.itemPage=d*b*e.morePerPage,e.itemPageFixer(),SC("postitems").innerHTML="",e.more(!0),e.realPage=b+1,e.switchPage=0,e.backChecker())}}else e.hashExist&&(e.realPage=1,e.switchPage=0,e.hashExist=!1);a=c=null},loadshow:function(){if(B.loadStatus=!0,$.loadSettings.animations){let{in:b,out:c}=$.loadSettings.animations;for(var a in b)$.alterClass(a,b[a]);for(var a in c)$.alterClass(a,c[a],!0)}},loadhide:function(){B.loadStatus=!1;let{out:a,in:b}=$.loadSettings.animations;for(var c in a)$.alterClass(c,a[c]);for(var c in b)$.alterClass(c,b[c],!0)},applyAfterLoad:function(){let a=this,b=arguments,c=Array.from(b),d=c.shift();a.loadStatus?setTimeout(()=>a.applyAfterLoad.apply(a,b),50):(d(c),d=a=null)},more:function(a=!1){let b=this,c=window.tpJson,d=b.itemPage+1,e=0,f="",g=window.mainJson,h=window.tpHtmls[c.templatehtmls.postitem],i=b.gt("PostItem","PostItemEnd",h),k=b.gt("NoItem","NoItemEnd",h),l=parseInt(g.posts_per_page),m=g.dateindex;for(let c,h=d,j=m.length;h<j&&(c=m[h],e<l&&c);h++){let a=c[0],d=g.postindex[a];if(!d.link){let c=B.r(i,"postitemtitle",Base64.decode(d.title),!0),e=d.permalink||"post-{pid}",g=$.useLinkPattern(e,a);c=B.r(c,"postitemintro",Base64.decode(d.intro)+"...",!0),c=B.r(c,"postitemdate",$.dt(d.date),!0),c=B.r(c,"postitemtags",d.tags.replace(/,/g,"\xB7"),!0),c=B.r(c,"postitemlink",g+".html",!0),c=d.cover?B.r(c,"postcover",d.cover,!0):b.cd(c),f+=c,c=null}else b.itemPage+=1,e-=1;e+=1}""==f?(f=k,SC("morebtn").style.display="none"):SC("morebtn").style.display="initial",b.itemPage+=l,b.switchPage>=b.morePerPage-1&&!a?(b.currentPageBefore=b.realPage,b.scrolltop(20,2),b.switchPage=0,b.realPage+=1,PJAX.pause(),window.location.href="#"+b.realPage,SC("postitems").innerHTML=f,PJAX.start()):(b.applyAfterLoad(a=>{SC("postitems").innerHTML=a[1]?a[0]:SC("postitems").innerHTML+a[0],PJAX.start()},f,a),b.switchPage+=1),b.backChecker(),c=m=f=null}};$.script(`${barnDir}library.js`),$.script(`${barnDir}search.js`),window.addEventListener("pjaxstart",B.loadshow,!1),window.addEventListener("pjaxfinish",B.loadhide,!1)}if(null==PJAX||null==PJAX)var PJAX={index:null===window.history.state?1:window.history.state.page,PJAXStart:new CustomEvent("pjaxstart"),PJAXFinish:new CustomEvent("pjaxfinish"),loadedPage:{},lastHref:window.location.href,preventUrl:[],recentUrl:"",replace:"",status:!0,sel:function(a){this.replace=a},jump:function(a){let b=encodeURIComponent(a),c=this;return(c.replace=c.replace||"contentcontainer",-1===c.recentUrl.indexOf("#")||-1===a.indexOf("#")||c.recentUrl.split("#")[0]!=a.split("#")[0])&&void(-1==c.recentUrl.indexOf("#")&&-1!==a.indexOf("#")&&(B.currentPageBefore=0),window.dispatchEvent(c.PJAXStart),window.removeEventListener("scroll",B.lazyCheck,!1),$.aniChecker($.alterClass($.loadSettings.listening,"",!1,!0),function(){if(window.scrollTo(0,0),c.loadedPage[b])c.clearEvent(),B.tpcheck(c.loadedPage[b]);else{let d=q("r",b,"","",""),e=d.c;e&&(c.clearEvent(),B.tpcheck(e)),$.ft(a).then(d=>{c.recentUrl=a,c.loadedPage[b]=d,e===d?q("e",b,"","",1):(q("w",b,d,timestamp(),""),c.clearEvent(),B.tpcheck(d))},a=>{window.dispatchEvent(c.PJAXFinish),console.log(a)})}}))},pjaxAutoJump:function(){let a=window.location.href,b=window.tpJson.templatehtmls;return PJAX.recentUrl.split("#")[0]==a&&B.currentPageType==b.postlist?(window.history.replaceState(null,null,a+"#1"),!0):PJAX.recentUrl==a.split("#")[0]&&B.currentPageType==b.post||void(-1!==a.indexOf(mainHost)&&PJAX.jump(a))},clickEvent:function(a){return!!(-1!==PJAX.preventUrl.indexOf(this.href)||!this.href||this.href.includes(location.pathname)&&this.href.includes("#"))||void(window.history.pushState(null,null,this.href),a.preventDefault(),PJAX.jump(this.href))},clearEvent:function(){let a=this,b=document.getElementsByTagName("a");for(let c of b)c.removeEventListener("click",a.clickEvent);b=null},start:function(){let a=this;a.status=!0,a.recentUrl=window.location.href,a.clearEvent(),window.removeEventListener("popstate",PJAX.pjaxAutoJump);let b=document.getElementsByTagName("a");for(let c of b){let b=c.getAttribute("onclick");b||(c.setAttribute("pjax",""),c.addEventListener("click",a.clickEvent,!1))}window.addEventListener("popstate",PJAX.pjaxAutoJump,!1),b=null},pause:function(){this.status=!1,window.removeEventListener("popstate",PJAX.pjaxAutoJump)},autoprevent:function(){let a=this,b=document.getElementsByTagName("a"),c=window.location.host;for(let d of b)void 0!==d.href&&-1==d.href.indexOf(c)&&a.preventUrl.push(d.href);b=null}};function q(a,b,e,c,f){"undefined"==typeof localStorage.obottle&&(localStorage.obottle="{}");let g=0,h="",i=JSON.parse(localStorage.obottle),j={};switch("undefined"!=typeof i[b]&&(g=i[b].t,h=i[b].h),a){case"w":let d={};d.h=e,d.t=c,d.rt=0,i[b]=d;try{localStorage.obottle=JSON.stringify(i)}catch(a){for(var k in i)(20>=+i[k].rt||172800<=+c-+i[k].t)&&delete i[k];localStorage.obottle=JSON.stringify(i)}break;case"r":return j={t:g,c:h},j;case"e":i[b].rt=+i[b].rt+f,localStorage.obottle=JSON.stringify(i);}}function timestamp(){var b=new Date().getTime();return b}B.tpcheck();