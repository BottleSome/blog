var Friendy = {
    appendStyle: function (newStyle) {
        var se = document.getElementById('friendystyles');
        if (!se) {
            se = document.createElement('style');
            se.type = 'text/css';
            se.id = 'friendystyles';
            document.getElementsByTagName('head')[0].appendChild(se);
            newStyle = ".friendy img{max-width:5em}.friendy .frienditem{display:inline-block;position:relative;width:5em;height:5em;overflow:hidden;border-radius:.5em;margin:-10%;transition:1s ease;opacity:0}.friendy .frienditem:hover>.name{opacity:0}.friendy .frienditem:hover>.desc{opacity:1;animation:playdesc 6s linear infinite}.friendy a{display:block;position:absolute;z-index:1;left:0;top:0;width:100%;height:100%}.friendy .name{position:absolute;left:2px;top:2px;color:#fcfcfc;text-shadow:1px 1px 0 #0e0e0e;transition:.5s ease;word-wrap:break-word;max-width:100%}.friendy .desc{position:absolute;height:100%;width:10em;padding:5px;background-color:rgba(100,100,100,0.384);opacity:0;transition:1s ease}.friendy p{margin:0;color:#fff}@keyframes playdesc{0%{left:0}50%{left:-100%}100%{left:0}}" + newStyle;
        }
        se.appendChild(document.createTextNode(newStyle));
    },
    links: {},
    linkloaded: false,
    j: function (json, url = false) {
        var ot = this;
        ot.appendStyle("");
        return new Promise(function (res, rej) {
            if (ot.linkloaded) {
                console.log('res');
                res(ot.links);
            }; /*已经载入了列表*/
            if (url) {
                $.aj(json, [], {
                    success: function (m) {
                        ot.links = JSON.parse(m);
                        ot.linkloaded = true;
                        res(ot.links);
                    },
                    failed: function (m) {
                        console.log('Failed to get links.');
                    }
                }, "get", "", true);
            } else {
                ot.links = JSON.parse(json);
                ot.linkloaded = true;
                res(ot.links);
            }
        });
    },
    x: function (selector) {
        var el = document.querySelector(selector),
            ot = this,
            construct = "",
            randomlist = [];
        if (el instanceof Element) {
            el.classList.add("friendy");
            for (var i in ot.links) {
                randomlist[i] = ot.links[i];
            }
            randomlist.sort(function () {
                return Math.random() > 0.5 ? -1 : 1;
            });
            for (var i in randomlist) {
                var item = randomlist[i];
                construct += '<div class="frienditem"><a class="jump" href="' + item["url"] + '" target="_blank"></a><div class="desc"><p>' + item["desc"] + '</p></div><img src="' + item["pic"] + '"></img><span class="name">' + item["name"] + '</span></div>';
            }
            el.innerHTML = construct;
            setTimeout(function () {
                ot.appendStyle(".friendy .frienditem {margin: 0 10px 10px 0;opacity:1;}");
            }, 10);
        }
    }
}
