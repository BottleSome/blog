/*Initialization - SomeBottle*/
$bueue.de(!0);function typer(){var a=SC("r").value;$.ce(a)&&(window.githubrepo=SC("r").value,loadshow(),blog.getrepo(window.accesstoken,a,!0,{success:function(a){loadhide();SC("f").style.marginTop="1000px";setTimeout(initialcheck,1E3);lc("githubrepo",window.githubrepo)},failed:function(a){listener();notice("No Such Repo.");loadhide()}}),document.onkeydown=function(){return!0})}function initialcheck(){loadshow();var a,c,d;(new Promise(function(e,b){console.log("Trying to get templatejson from the remote repo.");blog.getfile(window.accesstoken,window.githubrepo,"template.json",!0,{success:function(b){a=Base64.decode(b.content);window.tjson=a;c=JSON.parse(a);e(b)},failed:function(b){console.log("No template.json in the remote repo.");$.aj("./template/template.json",{},{success:function(b){window.tjson=JSON.parse(b);initialization()},failed:function(b){notice("Initialization Failed.")}},"get","",!0)}})})).then(function(a){return new Promise(function(b,a){blog.getfile(window.accesstoken,window.githubrepo,c.templatehtmls.postitem,!0,{success:function(a){d=Base64.decode(a.content);window.htmls["postitem.html"]=d;b(a)},failed:function(b){notice("Failed to get Necessary Template.");loadhide();errshow()}})})}).then(function(a){return new Promise(function(b,a){blog.getfileshas(window.accesstoken,window.githubrepo,!0,{success:function(a){window.fileshas=a;b(blog.findfilesha(c.mainjson))},failed:function(a){notice("Failed to get file shas.");loadhide();errshow()}})})}).then(function(a){blog.getfileblob(window.accesstoken,window.githubrepo,a,!0,{success:function(a){window.mainjson=a;loadhide();PJAX.jump("editor.html")},failed:function(a){notice("Failed to get Main.json.");loadhide();errshow()}})});notice("Checking...")}function initialization(){if(confirm("\u5373\u5c06\u5e2e\u60a8\u521d\u59cb\u5316\u535a\u5ba2\uff0c\u662f\u5426\u7ee7\u7eed\uff1f\nReady for initialization, please confirm to continue.")){notice("Initializing...");var a=window.tjson.alltp,c=[],d;for(d in a)console.log("file:"+a[d]),function(a){$bueue.c(function(){$.aj("./template/"+a,{},{success:function(b){notice(a);blog.cr(window.accesstoken,window.githubrepo,b,{success:function(b){c.push({path:a,mode:"100644",type:"blob",sha:b.sha});$bueue.next()},failed:function(a){notice("\u521d\u59cb\u5316\u51fa\u9519",!0);notice("\u8bf7\u5220\u9664template.json.");notice("\u91cd\u65b0\u521d\u59cb\u5316.");errshow()}})},failed:function(a){notice("\u521d\u59cb\u5316\u51fa\u9519",!0);notice("\u8bf7\u5220\u9664template.json.");notice("\u91cd\u65b0\u521d\u59cb\u5316.");errshow()}},"get","",!0)})}(a[d]);$bueue.c(function(){notice("All template blobs have been made")});$bueue.start();var e=setInterval(function(){3==$bueue.state&&0>=window.gstate&&blog.gpush(window.accesstoken,window.githubrepo,c,"Initial commit of -O-",{success:function(a){notice("Finished");notice("\u4e94\u79d2\u540e\u5c06\u5237\u65b0\u9875\u9762");SC("t").style.opacity=0;setTimeout(function(){location.reload()},5E3);loadhide();clearInterval(e)},failed:function(a){notice("Commit\u63d0\u4ea4\u5931\u8d25",!0);errshow()}})},1E3)}else alert("\u5982\u679c\u60f3\u597d\u4e86\uff0c\u5237\u65b0\u9875\u9762\u521d\u59cb\u5316\u5427\uff01")};