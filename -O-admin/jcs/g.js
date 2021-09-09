"use strict";function timestamp(){return(new Date).getTime()}function gh(){this.getfileshas=function(i,o,n,a,t=!1){this.getbasetree(i,o,t).then(s=>new Promise(function(e,t){window.gstate+=1,$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/trees/"+s.basetreesha+"?"+timestamp(),{},{success:function(t){t=JSON.parse(t).tree;a.success(t),e(t),--window.gstate},failed:function(t){a.failed(t),e(t),console.log("[GetBaseTree]Failed"),--window.gstate}},"get","token "+i,n)}))},this.findfilesha=function(t){if(window.fileshas){var e,s=window.fileshas;for(e in s)if(s[e].path==t)return s[e].sha}},this.getfileblob=function(s,i,o,n,a){return new Promise(function(e,t){window.gstate+=1,$.ft("https://api.github.com/repos/"+window.githubuser+"/"+i+"/git/blobs/"+o+"?"+timestamp(),{},{success:function(t){t=JSON.parse(t);a.success(t),e(t),--window.gstate},failed:function(t){a.failed(t),e(t),console.log("[GetFileBlob]Failed"),--window.gstate}},"get","token "+s,n)})},this.getbasetree=function(i,o,n=!1){return window.gstate+=1,new Promise(function(e,t){let s={};n?(s.lastcommitsha=n,e(s)):$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/ref/heads/main","",{success:function(t){s.lastcommitsha=JSON.parse(t).object.sha,e(s)},failed:function(t){console.log("[Push]Failed to get ref"),--window.gstate}},"get","token "+i,!0)}).then(s=>new Promise(function(e,t){$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/commits/"+s.lastcommitsha,"",{success:function(t){s.basetreesha=JSON.parse(t).tree.sha,e(s)},failed:function(t){console.log("[Push]Failed to get basetree"),--window.gstate}},"get","token "+i,!0)}))},this.gpush=function(i,o,n,a,c){window.gstate+=1,this.getbasetree(i,o).then(s=>new Promise(function(e,t){$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/trees",{base_tree:s.basetreesha,tree:n},{success:function(t){s.treesha=JSON.parse(t).sha,e(s)},failed:function(t){console.log("[Push]Failed to update tree"),c.failed(t),--window.gstate}},"post","token "+i,!0)})).then(s=>new Promise(function(e,t){$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/commits",{message:a,parents:[s.lastcommitsha],tree:s.treesha},{success:function(t){s.commitsha=JSON.parse(t).sha,e(s)},failed:function(t){console.log("[Push]Failed to make commit"),c.failed(t),--window.gstate}},"post","token "+i,!0)})).then(e=>{$.ft("https://api.github.com/repos/"+window.githubuser+"/"+o+"/git/refs/heads/main",{sha:e.commitsha,force:!0},{success:function(t){e.commitsha=JSON.parse(t).sha,c.success(t),--window.gstate},failed:function(t){console.log("[Push]Failed to update ref."),c.failed(t),--window.gstate}},"patch","token "+i,!0)})},this.getfile=function(s,i,o,n,a){return new Promise(function(e,t){window.gstate+=1,$.ft("https://api.github.com/repos/"+window.githubuser+"/"+i+"/contents/"+o+"?"+timestamp(),{},{success:function(t){console.log("[GetFile]Successfully get "+o);t=JSON.parse(t);a.success(t),e(t),--window.gstate},failed:function(t){a.failed(t),e(t),console.log("[GetFile]Failed"),--window.gstate}},"get","token "+s,n)})},this.getusr=function(t,e,s){loadshow(),$.ft("https://api.github.com/user",{},{success:function(t){loadhide();t=JSON.parse(t);window.githubuser=t.login,s.success()},failed:function(t){loadhide(),notice("获取用户信息失败"),s.failed()}},"get","token "+t,e)},this.getrepo=function(t,e,s,i){window.gstate+=1,$.ft("https://api.github.com/repos/"+window.githubuser+"/"+e+"?"+timestamp(),{},{success:function(t){let e=JSON.parse(t);"Not Found"==e.message&&(e="empty"),i.success(e),--window.gstate},failed:function(t){i.failed(t),console.log("[GetRepo]Failed"),--window.gstate}},"get","token "+t,s)},this.cr=async function(t,e,s,i){window.gstate+=1,$.ft("https://api.github.com/repos/"+window.githubuser+"/"+e+"/git/blobs?"+timestamp(),{content:Base64.encode(s),encoding:"base64"},{success:function(t){i.success(JSON.parse(t)),console.log("[CreateBlob]Success"),--window.gstate},failed:function(t,e){i.failed(JSON.parse(t)),console.log("[CreateBlob]Failed"),--window.gstate}},"post","token "+t,!0)},this.crypt=function(t,e,s=!1){try{if($.ce(t)&&$.ce(e)){if(s){var i=CryptoJS.RC4.decrypt(t,e);return CryptoJS.enc.Utf8.stringify(i)}return CryptoJS.RC4.encrypt(t,e)}return!1}catch(t){return""}}}window.ua="",window.authstatu=!1,window.gstate=0;var blog=new gh;