/*Initialization - SomeBottle*/
$bueue.de(!0);function typer(){var a=SC("r").value;$.ce(a)&&(window.githubrepo=SC("r").value,loadshow(),blog.getrepo(window.accesstoken,a,!0,{success:function(a){loadhide();SC("f").style.marginTop="1000px";setTimeout(initialcheck,1E3);lc("githubrepo",window.githubrepo)},failed:function(a){listener();notice("No Such Repo.");loadhide()}}),document.onkeydown=function(){return!0})}function initialcheck(){loadshow();var a,b,c;(new Promise(function(d,f){blog.getfile(window.accesstoken,window.githubrepo,"template.json",!0,{success:function(e){a=Base64.decode(e.content);window.tjson=a;b=JSON.parse(a);d(e)},failed:function(a){$.aj("./template/template.json",{},{success:function(a){window.tjson=JSON.parse(a);initialization()},failed:function(a){notice("Initialization Failed.")}},"get","",!0)}})})).then(function(a){return new Promise(function(a,d){blog.getfile(window.accesstoken,window.githubrepo,b.templatehtmls.postitem,!0,{success:function(b){c=Base64.decode(b.content);window.htmls["postitem.html"]=c;a(b)},failed:function(a){notice("Failed to get Necessary Template.");loadhide();errshow()}})})}).then(function(a){return new Promise(function(a,d){blog.getfile(window.accesstoken,window.githubrepo,b.mainjson,!0,{success:function(a){window.mainjson=a;loadhide();PJAX.jump("editor.html")},failed:function(a){notice("Failed to get Main.json.");loadhide();errshow()}})})});notice("Checking...")}function initialization(){if(confirm("\u5373\u5c06\u5e2e\u60a8\u521d\u59cb\u5316\u535a\u5ba2\uff0c\u662f\u5426\u7ee7\u7eed\uff1f\nReady for initialization, please confirm to continue.")){notice("Initializing...");var a=window.tjson.alltp,b;for(b in a)console.log("file:"+a[b]),function(a){$bueue.c(function(){$.aj("./template/"+a,{},{success:function(b){notice(a);blog.cr(window.accesstoken,window.githubrepo,a,"Initial Commit",b,{success:function(a){$bueue.next()},failed:function(a){notice("\u521d\u59cb\u5316\u51fa\u9519");notice("\u8bf7\u5220\u9664main.json.");notice("\u91cd\u65b0\u521d\u59cb\u5316.");errshow()}})},failed:function(a){notice("\u521d\u59cb\u5316\u51fa\u9519");notice("\u8bf7\u5220\u9664main.json.");notice("\u91cd\u65b0\u521d\u59cb\u5316.");errshow()}},"get","",!0)})}(a[b]);$bueue.start();var c=setInterval(function(){3==$bueue.state&&0>=window.gstate&&(notice("Finished"),notice("\u4e94\u79d2\u540e\u5c06\u5237\u65b0\u9875\u9762"),SC("t").style.opacity=0,setTimeout(function(){location.reload()},5E3),loadhide(),clearInterval(c))},1E3)}else alert("\u5982\u679c\u60f3\u597d\u4e86\uff0c\u5237\u65b0\u9875\u9762\u521d\u59cb\u5316\u5427\uff01")};