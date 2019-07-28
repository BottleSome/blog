/*FrontMainJS - SomeBottle*/
 /*q.js*/
var md;
if (typeof($) !== 'object') {
    $ = new Object();
    $.ls = new Array();
    $.lss = '';
    $.aj = function(p, d, sf, m, hd, as) { /*(path,data,success or fail,method,authheader,async)*/
	if(p!=='false'&&p){/*奇妙的false问题*/
        var xhr = new XMLHttpRequest();
        var hm = '';
        for (var ap in d) {
            hm = hm + ap + '=' + d[ap] + '&';
        }
        hm = hm.substring(0, hm.length - 1);
        if (m == 'get') {
            xhr.open('get', p, as);
        } else if (m == 'put') {
            xhr.open('PUT', p, as);
            xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            hm = JSON.stringify(d);
        } else if (m == 'delete') {
            xhr.open('DELETE', p, as);
            xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            hm = JSON.stringify(d);
        } else {
            xhr.open('post', p, as);
        }
        xhr.setRequestHeader('Authorization', hd);
        if (m !== 'multipart/form-data') {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(hm);
        } else {
            xhr.send(d);
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                sf.success(xhr.responseText, p);
            } else if (xhr.readyState == 4 && xhr.status !== 200) {
                sf.failed(xhr.status, p);
            }
        };
        if (!as) {
            if (xhr.responseText !== undefined) {
                sf.success(xhr.responseText, p);
            } else {
                sf.failed(xhr.status, p);
            }
        }
	}
    }
    var SC = function(e) {
        if (e == 'body') {
            return document.body;
        } else if (e == 'html') {
            return document.getElementsByTagName('html')[0];
        } else {
            return document.getElementById(e);
        }
    }
    $.script = function(url) {
        if (!$.scripturl) {
            $.scripturl = [];
        }
        var script = document.createElement("script");
        var exist = false;
        for (var up in $.ls) {
            if ($.ls[up] == url) {
                exist = true;
                break;
            }
        }
        if (!exist && $.scripturl.indexOf(url) == -1) {
            $.ls[$.ls.length] = url;
            script.type = "text/javascript";
            script.src = url;
            $.scripturl.push(url);
            document.body.appendChild(script);
        }
    }
    $.ht = function(h, e, scinclude = true) { /*(html,element,run script or not when ht)*/
        var ht = SC(e);
        if (!ht) {
            console.log('Unable to find the Element:' + e);
            return false;
        }
        ht.innerHTML = h;
        os = ht.getElementsByTagName('script');
        var scr = '';
        for (var o = 0; o < os.length; o++) {
            if (os[o].src !== undefined && os[o].src !== null && os[o].src !== '') {
                $.script(os[o].src);
            } else {
                try { /*Oh...No Errors!*/
                    var h = os[o].innerHTML;
                    if (scinclude) { /*是否去除注释执行*/
                        h = B.r(h, '/*', '');
                        h = B.r(h, '*/', '');
                    }
                    eval(h);
                }
 catch (e) {
                    console.log('Page script Error: ' + e.message);
                }
            }
        }
    }
    $.tr = function(url) { /*PreventURLProblem(Fuck QQ Querying URI*/
        var a = url;
        b = a.split('?');
        if (b[1]) {
            return b[0];
        } else {
            return a;
        }
    }
}
if (!B) { /*PreventInitializingTwice*/
    /*Include LoadingPage*/
	if(localStorage['obottle-ldpage']){
		var e = document.getElementsByTagName('html')[0].innerHTML;
		document.getElementsByTagName('html')[0].innerHTML = e.replace('<!--[LoadingArea]-->',localStorage['obottle-ldpage']);
	}
    $.aj('./loading.html', '', {
        success: function(m, p) {
            B.hr('<!--[LoadingArea]-->',m);
			localStorage['obottle-ldpage']=m;
        },
        failed: function(m) { /*Failed*/
		console.log('LoadingPage Load Failed');
        }
    }, 'get', '', true); 
    $.script('./library.js');/*Include Library*/
    window.htmls = new Object();
    var B = { /*B Part*/
        moreperpage: 0,
        r: function(a, o, p, g = true) { /*(All,Original,ReplaceStr,IfReplaceAll)*/
            if (g) {
                while (a.indexOf(o) !== -1) {
                    a = a.replace(o, p);
                }
            } else {
                a = a.replace(o, p);
            }
            return a;
        },
		scrolltop:function(maxspeed,minspeed){
			var nt=document.body.scrollTop;
			var stages=Math.floor(parseInt(nt)/3);/*分成加速、匀速、减速三段*/
			var v1=maxspeed;/*加速到maxspeed px/s*/
			var vmin=minspeed;/*最小减速到minspeed px/s*/
			var a1=(Math.pow(v1,2))/(stages*2);/*2ax=V²*/
			var vn=0;/*当前速度*/
			var st=setInterval(function(){
				var ntnow=document.body.scrollTop;
				if(parseInt(ntnow)>(stages*2)){
					vn+=a1;
					document.body.scrollTop=parseInt(ntnow)-vn;
				}else if(parseInt(ntnow)>(stages)){/*第二阶段*/
					document.body.scrollTop=parseInt(ntnow)-vn;
				}else if(parseInt(ntnow)<=(stages)){/*第三阶段*/
				    vn-=a1;
					if(vn<=vmin){
						vn=vmin;
					}
					if(parseInt(ntnow)<=0){
						document.body.scrollTop=0;
						clearInterval(st);
					}else{
					   document.body.scrollTop=parseInt(ntnow)-vn;
					}
				}
			},10);
		},
        hr: function(o, p) { /*htmlreplace*/
            var e = document.getElementsByTagName('html')[0].innerHTML;
            document.getElementsByTagName('html')[0].innerHTML = this.r(e, o, p);
        },
		preventscript:function(){
			var e = document.getElementsByTagName('html')[0];
			var sc=e.getElementsByTagName('script');
			for(var i in sc){
				if(sc[i].src&&$.scripturl.indexOf(sc[i].src)==-1){
					$.scripturl.push(sc[i].src);
				}
			}
		},
        gt: function(p1, p2, ct = false) { /*htmlget*/
            var e;
            if (!ct) {
                e = document.getElementsByTagName('html')[0].innerHTML;
            } else {
                e = ct;
            }
            try {
                var k = e.split(p1)[1];
                var d = k.split(p2)[0];
                return d;
            } catch (e) {
                return false;
            }
        },
		lazypre:function(c){/*处理Lazyload图片*/
			var i=document.createElement('div');
			i.innerHTML=c;
			var s=i.getElementsByTagName('img');
			for(var p in s){
				if(s[p].src){
				var sr=s[p].src;
				s[p].src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACyCAYAAAD1XdWcAAAB8klEQVR4nO3SQRHAIADAsDH/ngEVcEcTBX10zO2Dx/23A+AEo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ0Eo5NgdBKMToLRSTA6CUYnwegkGJ2EBaeOBWBLIAKeAAAAAElFTkSuQmCC';
				s[p].setAttribute('data-src','[lazy]'+sr);
				}
			}
			return i.innerHTML;
		},
		lazycheck:function(){
            var H = window.innerHeight;
            var S = document.documentElement.scrollTop || document.body.scrollTop;
            var es=document.getElementsByTagName('img');
			for(var i in es){
				var cty=es[i].offsetTop;
				if(H + S>cty){
					var lazy=es[i].getAttribute('data-src');
					if(lazy!=='undefined'&&lazy){
					es[i].setAttribute('data-src','');
					es[i].src=lazy.split('[lazy]')[1];
					}
				}
			}
		},
        templonload: 0,
        /*LoadingTemplates*/
        templateloaded: new Array(),
        tpcheck: function() { /*template check*/
		    this.loadshow();
            var pagetype = this.gt('<!--[PageType]-->', '<!--[PageTypeEnd]-->'); /*Get Page Type*/
            if (!window.templjson) {
                var ot = this;
                $.aj('template.json', '', {
                    success: function(m) {
                        window.templjson = JSON.parse(m);
                        return ot.tpcheck();
                    },
                    failed: function(m) { /*Failed*/
					console.log('TemplateJson Load Failed.');
                    }
                }, 'get', '', true);
            } else if (!window.mainjson && window.templjson['usemain'].indexOf(pagetype) !== -1) { /*Some pages are in need of Main.json*/
                var o = this;
                setTimeout(function() {
                    return o.tpcheck();
                },
                200);
            } else if (typeof showdown !== 'object') { /*Markdown is not ready!*/
                var o = this;
                setTimeout(function() {
                    return o.tpcheck();
                },
                200);
            } else {
				this.preventscript();/*剔除已加载scripts*/
                var o = this;
                var j = window.templjson;
                j['necessary'].push(pagetype); /*Pagetype Pushed*/
                if (pagetype == j['templatehtmls']['postlist']) {
                    j['necessary'].push(j['templatehtmls']['postitem']); /*Extra Load*/
                }
                for (var i in j['necessary']) {
                    if (o.templateloaded.indexOf(j['necessary'][i]) == -1) {
                        o.templonload += 1;
                        var usecache = false;
                        var cache = q('r', 'template-' + j['necessary'][i], '', '', ''); /*Test Cache*/
                        if (cache['c']) { /*如果有缓存，先装载缓存*/
                            usecache = true;
                            var p = j['necessary'][i];
                            console.log('Template using cache:' + p);
                            window.htmls[p] = cache['c'];
                            o.templateloaded.push(p);
                            o.templonload -= 1;
                        }
                        $.aj(j['necessary'][i], '', {
                            success: function(m, p) {
                                window.htmls[p] = m;
                                if (!usecache) {
                                    o.templateloaded.push(p);
                                    o.templonload -= 1;
                                    q('w', 'template-' + p, m, timestamp(), '');
                                } else if (cache['c'] !== m) { /*缓存需要更新*/
                                    q('w', 'template-' + p, m, timestamp(), '');
                                } else { /*增加缓存读取次数*/
                                    q('e', 'template-' + p, '', '', 1);
                                }
                            },
                            failed: function(m) { /*Failed*/
							console.log('Necessary HTML Load Failed...');
                            }
                        }, 'get', '', true);
                    }
                }
                var timer = setInterval(function() {
                    if (o.templonload <= 0) {
                        clearInterval(timer);
                        o.renderer(); /*Call the renderer*/
                    }
                },
                500);
            }
            if (!window.mainjson && !window.mainjsonrequest) { /*Include Mainjson*/
                var ot = this;
                window.mainjsonrequest = true; /*make request flag*/
                $.aj('main.json', '', {
                    success: function(m) {
                        window.mainjson = JSON.parse(m.replace(/[\r\n]/g, ""));
                        ot.moreperpage = parseInt(window.mainjson['more_per_page']); /*Update moreperpage*/
                    },
                    failed: function(m) { /*Failed*/
					console.log('MainJson Load Failed');
                    }
                }, 'get', '', true);
            }
        },
        itempage: 0,
        switchpage: 0,
        nowpage: 0,
        realpage: 1,
        searchw: '',
        hashexist: false,
        renderer: function() {
            var j = window.templjson;
            md = new showdown.Converter();
            var cloth = window.htmls[j['templatehtmls']['cloth']];
            var main = window.htmls[j['templatehtmls']['main']];
            var comment = window.htmls[j['templatehtmls']['comment']];
            var pagetype = this.gt('<!--[PageType]-->', '<!--[PageTypeEnd]-->'); /*Get Page Type*/
            var tj = window.mainjson; /*get json*/
            if (pagetype == j['templatehtmls']['post']) {
				var ot=this;
                var content = ot.gt('<!--[PostContent]-->', '<!--[PostContentEnd]-->'); /*Get Post Content*/
                var title = ot.gt('<!--[PostTitle]-->', '<!--[PostTitleEnd]-->'); /*Get Post Title*/
                var date = ot.gt('<!--[PostDate]-->', '<!--[PostDateEnd]-->'); /*Get Post Date*/
                var tags = ot.gt('<!--[PostTag]-->', '<!--[PostTagEnd]-->'); /*Get Post Content*/
                var pid = ot.gt('<!--[PostID]-->', '<!--[PostIDEnd]-->'); /*Get Post ID*/
                var pagetitle = (ot.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
                var post = window.htmls[j['templatehtmls']['post']];
                var render11 = ot.r(post, '{[postcontent]}', ot.lazypre(md.makeHtml(content.trim()))); /*Analyse md*/
                var render12 = ot.r(render11, '{[posttitle]}', title);
                var alltags = [];
                if (isNaN(date)) {
                    tags = '页面';
                } else { /*Tag Process*/
                    alltags = tags.split(',');
                    tags = '';
                    alltags.forEach(function(i, v) {
                        tags = tags + '<a href="' + j['generatehtmls']['tags'] + '#' + encodeURIComponent(i) + '" class="taglink">' + i + '</a>,';
                    });
                    tags = tags.substr(0, tags.length - 1);
                }
                var render13 = ot.r(render12, '{[posttags]}', tags);
                var render14 = ot.r(render13, '{[postdate]}', date);
                var render2 = ot.r(main, '{[contents]}', render14);
                var render3 = ot.r(cloth, '{[main]}', render2);
                var render4 = ot.r(render3, '{[title]}', pagetitle);
                var render5 = ot.r(render4, '{[comments]}', comment); /*LoadCommentsForPost*/
                var render6 = ot.r(render5, '{[pid]}', pid); /*SetPid*/
                var render6 = ot.r(render6, '{[pagetype]}', pagetype); /*SetPageType*/
                if (isNaN(date)) {
                    render6 = render6.split('<!--PostEnd-->')[0] + '<!--PostEnd-->';
                }
                $.ht(render6, 'container');
				transitionchecker('loading',function(){
					ot.lazycheck();
				});
                ot.loadhide();
            } else if (pagetype == j['templatehtmls']['postlist']) {
                var ot = this;
                var content = this.gt('<!--[PostContent]-->', '<!--[PostContentEnd]-->'); /*Get Post Content*/
                var pagetitle = (this.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
                var realtitle = pagetitle.replace('-', ''); /*Remove - */
                var pt = window.htmls[j['templatehtmls']['postlist']];
                var render11 = this.r(pt, '{[postitems]}', md.makeHtml(content.trim())); /*Analyse md*/
                var render2 = this.r(main, '{[contents]}', render11);
                var render3 = this.r(cloth, '{[main]}', render2);
                var render4 = this.r(render3, '{[title]}', realtitle);
                var render4 = this.r(render4, '{[pagetype]}', pagetype); /*SetPageType*/
                this.itempage = parseInt(tj['posts_per_page']);
				ot.itempagechecker(-1,0,ot.itempage);
                $.ht(render4, 'container');
                this.loadhide();
                var timer = setInterval(function() { /*CheckIndexPage*/
                    if (ot.gt('<!--[PageType]', '[PageTypeEnd]-->') !== j['templatehtmls']['postlist']) { /*跳离index页了*/
                        PJAX.sel('container');
                        PJAX.start();
						/*修复more按钮的bug - 20190727*/
						ot.switchpage=0;
                        clearInterval(timer);
                        return false;
                    }
                    ot.indexpagechecker();
                },
                500);
            } else if (pagetype == j['templatehtmls']['archives']) {
                var pagetitle = (this.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
                /*Generate Archives*/
                var din = tj['dateindex'];
                var renderar = '';
                var year = 0;
                for (var td in din) {
                    var t = (din[td].toString()).substring(0, 4); /*get years*/
                    if (t !== year) {
                        year = t;
                        if (renderar !== '') {
                            renderar += '</ul><h2>· ' + t + '</h2><ul>';
                        } else {
                            renderar += '<h2>· ' + t + '</h2><ul>';
                        }
                    }
                    var pid = td.replace('post', '');
                    var title = Base64.decode(tj['postindex'][pid]['title']);
                    if (!tj['postindex'][pid]['link']) {
                        renderar += '<li><a class=\'taglink\' href=\'post-' + pid + '.html\'>' + title + '</a></li>';
                    } else {
                        renderar += '<li><a class=\'taglink\' href=\'' + tj['postindex'][pid]['link'] + '.html\'>' + title + '</a></li>';
                    }
                }
                renderar += '</ul>'; /*Generate Finish*/
                var ar = window.htmls[j['templatehtmls']['archives']];
                var render11 = this.r(ar, '{[archives]}', renderar);
                var render2 = this.r(main, '{[contents]}', render11);
                var render3 = this.r(cloth, '{[main]}', render2);
                var render4 = this.r(render3, '{[title]}', pagetitle);
                var render4 = this.r(render4, '{[pagetype]}', pagetype); /*SetPageType*/
                $.ht(render4, 'container');
                this.loadhide();
            } else if (pagetype == j['templatehtmls']['tags']) {
                var pagetitle = (this.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
                var href = $.tr(window.location.href); /*Generate Tags*/
                var rendertg = '';
                var ot = this;
                var pts = tj['postindex'];
                var tagarr = new Array();
                for (var i in pts) {
                    var t = pts[i]['tags'].split(',');
                    t.forEach(function(item, index) {
                        if (item !== '' && tagarr.indexOf(item) == -1) {
                            tagarr.push(item);
                        }
                    });
                }
                tagarr.forEach(function(item, index) {
                    rendertg += '[<a href=\'#' + encodeURIComponent(item) + '\' class=\'itemlink\'>' + item + '</a>]';
                });
                this.alltaghtml = rendertg;
                if (href.indexOf('#') !== -1) {
                    var pg = href.split('#')[1];
                    this.nowtag = pg;
                    if (pg !== 'alltags') {
                        rendertg = '<script>B.taguper(\'' + pg + '\');PJAX.start();</script>';
                    }
                } /*Generate Finish*/
                var timer = setInterval(function() { /*CheckTagPage*/
                    if (window.location.href.indexOf(j['generatehtmls']['tags']) == -1 && window.location.href.indexOf((j['generatehtmls']['tags']).replace('.html', '')) == -1) { /*跳离tag页了*/
                        PJAX.sel('container');
                        PJAX.start();
                        clearInterval(timer);
                        return false;
                    }
                    ot.tagpagechecker();
                },
                500);
                var tgs = window.htmls[j['templatehtmls']['tags']];
                var render11 = this.r(tgs, '{[tags]}', rendertg);
                var render2 = this.r(main, '{[contents]}', render11);
                var render3 = this.r(cloth, '{[main]}', render2);
                var render4 = this.r(render3, '{[title]}', pagetitle);
                var render4 = this.r(render4, '{[pagetype]}', pagetype); /*SetPageType*/
                $.ht(render4, 'container');
                this.loadhide();
            }
        },
        nowtag: '',
        alltaghtml: '',
        taguper: function(tg) {
            tg = decodeURIComponent(tg);
            var eh = document.getElementsByTagName('html')[0].innerHTML;
            var tj = window.mainjson; /*get json*/
            var dti = tj['dateindex'];
            var pts = tj['postindex'];
            var postlist = new Array();
            var rendertgs = '';
            for (var i in dti) { /*Sel Posts in the order of date*/
                var pid = i.replace('post', '');
                if (pts[pid]['tags'].indexOf(tg) !== -1) {
                    postlist.push(pid);
                }
            }
            rendertgs += '<ul>';
            postlist.forEach(function(it, id) {
                var post = pts[it];
                var lk = 'post-' + it + '.html';
                if (post['link']) {
                    lk = post['link'] + '.html';
                }
                rendertgs += '<li><a class=\'taglink\' href=\'' + lk + '\'>' + Base64.decode(post['title']) + '</a></li>';
            });
            SC('tags').innerHTML = rendertgs;
        },
        tagpagechecker: function() {
            var ot = this;
            var eh = document.getElementsByTagName('html')[0].innerHTML; /*Get All html*/
            var href = $.tr(window.location.href);
            if (href.indexOf('#') == -1) {
                PJAX.pause();
                window.location.href += '#alltags';
                PJAX.start();
            } else {
                var pg = href.split('#')[1];
                if (ot.nowtag !== pg) {
                    ot.nowtag = pg;
                    if (pg == 'alltags') {
                        if (SC('tags')) {
                            SC('tags').innerHTML = ot.alltaghtml;
                        }
                    } else {
                        ot.taguper(pg);
                    }
                    PJAX.start();
                }
            }
        },
		itempagechecker:function(range1,range2,t=0){/*防止因为排除页面导致的文章列表重复(开始pid,终止pid)[range2>range1]*/
		    var tj = window.mainjson; /*get json*/
			if(t==0){
			var start=range1;
			while(start<=range2){
				if(tj['postindex'][start.toString()]){
				var pt=tj['postindex'][start.toString()];
				if(pt['link']&&pt){/*有页面*/
					this.itempage+=1;
				}
				start+=1;
				}else{
					start-=1;
				}
			}
			}else{
				var start=range1;
				var end=range1-(t-1);
				if(start<0){
					start=parseInt(tj['postnum'])-1;
					end=start-(t-1);
				}
				while(start>=end){
					console.log(start);
					if(tj['postindex'][start.toString()]){
					var pt=tj['postindex'][start.toString()];
					if(pt['link']&&pt){/*有页面*/
					this.itempage+=1;
				    }
					start-=1;
					}else{
						start+=1;
					}
				}
			}
		},
        indexpagechecker: function() {
            var eh = document.getElementsByTagName('html')[0].innerHTML; /*Get All html*/
            var j = window.templjson;
            var href = $.tr(decodeURIComponent(window.location.href));
            var tj = window.mainjson; /*get json*/
            var maxrender = parseInt(tj['posts_per_page']);
            if (href.indexOf('#') !== -1) {
				var ot=this;
                ot.hashexist = true;
                var pg = href.split('#')[1];
                if (href.indexOf('#!') == -1) {
                    if (!isNaN(pg)) {
                        var pnum = parseInt(pg) - 1;
                        if (ot.nowpage !== pnum) {
                            ot.nowpage = pnum;
							var allps=maxrender * pnum * ot.moreperpage;/*根据页码计算当前页*/
                            ot.itempage = allps;
							ot.itempagechecker(-1,0,allps);
                            SC('postitems').innerHTML = '';
                            ot.more(); /*顺序不要颠倒!*/
                            ot.realpage = pnum + 1;
                            ot.switchpage = 0;
                        }
                    }
                } else { /*Search mode*/
                    var rendertp = '';
                    var item = window.htmls[j['templatehtmls']['postitem']];
                    var v = href.split('#!')[1];
                    if (v !== ot.searchw) {
                        ot.searchw = v;
                        var pt = tj['postindex'];
                        for (var i in pt) {
                            var tt = (Base64.decode(pt[i]['title'])).toLowerCase();
                            var cc = (Base64.decode(pt[i]['intro'])).toLowerCase();
                            var dd = (pt[i]['date']).toLowerCase();
                            var tg = (pt[i]['tags']).toLowerCase();
							v=v.toLowerCase();
                            if (tt.indexOf(v) !== -1 || cc.indexOf(v) !== -1 || dd.indexOf(v) !== -1 || tg.indexOf(v) !== -1) {
                                var render1 = B.r(item, '{[postitemtitle]}', tt);
                                var render2 = B.r(render1, '{[postitemintro]}', cc + '...');
                                var render3 = B.r(render2, '{[postitemdate]}', dd);
                                var render4 = B.r(render3, '{[postitemlink]}', 'post-' + i + '.html');
                                rendertp += render4; /*渲染到列表模板*/
                            }
                        }
                        if (rendertp == '') {
                            rendertp = '<h2>啥都没找到</h2>';
                        }
                        window.scrollTo(0, 0);
                        SC('postitems').innerHTML = rendertp;
                        SC('morebtn').style.display = 'none';
                        PJAX.start(); /*refresh pjax links*/
                    }
                }
            } else {
                if (this.hashexist) {
                    this.realpage = 1;
                    this.switchpage = 0;
                    this.hashexist = false;
                }
            }
        },
        loadshow: function() {
            setTimeout(function() {
                SC('loading').style.opacity = 1;
                SC('loading').style.zIndex = 200;
            }, 100);
        },
        loadhide: function() {
            setTimeout(function() {
                SC('loading').style.opacity = 0;
                SC('loading').style.zIndex = -1;
            }, 100);
        },
		morehtmls:{},
        more: function() {
            var j = window.templjson;
            var start = this.itempage + 1;
            var counter = 0;
            var itemid = 0;
            var listrender = '';
            var tj = window.mainjson; /*get json*/
            var item = window.htmls[j['templatehtmls']['postitem']];
            var maxrender = parseInt(tj['posts_per_page']);
            var end = start + maxrender;
            var tj = window.mainjson; /*get json*/
            var postids = tj['dateindex'];
            for (var i in postids) {
                if (start <= itemid) {
					console.log('[DEBUG]PageStart:'+start);
                    if (counter < maxrender) {
						console.log('[DEBUG]Counter:'+start+' ID:'+i);
                        var pid = i.replace('post', '');
                        var pt = tj['postindex'][pid];
                        if (!pt['link']) { /*排除页面在外*/
                            var render1 = B.r(item, '{[postitemtitle]}', Base64.decode(pt.title));
                            var render2 = B.r(render1, '{[postitemintro]}', Base64.decode(pt.intro) + '...');
                            var render3 = B.r(render2, '{[postitemdate]}', pt.date);
                            var render4 = B.r(render3, '{[postitemlink]}', 'post-' + pid + '.html');
                            listrender += render4; /*渲染到列表模板*/
                        } else {
                            counter -= 1;
                        }
                        counter += 1;
                    }
                } else {
                    itemid += 1;
                }
            }
            if (listrender == '') {
                listrender = '<h3 style=\'color:#AAA;\'>没有更多了呢</h3>';
                SC('morebtn').style.display = 'none';
            } else {
                SC('morebtn').style.display = 'block';
            }
			var preitem=this.itempage;
            this.itempage = this.itempage + maxrender;
			this.itempagechecker(preitem,this.itempage);
            if (this.switchpage >= (this.moreperpage - 1)) {
                SC('postitems').innerHTML = listrender;
				this.scrolltop(20,2);
                this.switchpage = 0;
                this.realpage += 1;
				PJAX.pause();
                window.location.href = '#' + this.realpage;
            } else {
                SC('postitems').innerHTML = SC('postitems').innerHTML + listrender;
                this.switchpage += 1;
            }
            PJAX.start(); /*refresh pjax links*/
        }
    };
    window.addEventListener('pjaxstart',

    function() { /*加载动画*/
        B.loadshow();
    },
    false);
    window.addEventListener('pjaxfinish',

    function() {
        B.loadhide();
    },
    false);
}
function transitionchecker(e,func){/*css3变换检查器(元素,执行完毕执行的函数)*/
       var ts='';
       var tss = {
         'transition':'transitionend',
         'OTransition':'oTransitionEnd',
         'MozTransition':'transitionend',
         'WebkitTransition':'webkitTransitionEnd'
       };/*兼容多浏览器*/
	   for(var i in tss){
		   if(SC(e).style[i]!==undefined){
			   ts=tss[i];
		   }
	   }
	   function doit(){
		   func();
		   SC(e).removeEventListener(ts,doit);
	   }
	   SC(e).addEventListener(ts,doit);
}	
/*Simple PJAX For Front MAIN - SomeBottle*/
var mainhost = window.location.host;
var dt = new Date().getTime();
if (PJAX == undefined || PJAX == null) { /*防止重初始化*/
    var PJAX = {
        index: window.history.state === null ? 1 : window.history.state.page,
        PJAXStart: new CustomEvent('pjaxstart'),
        PJAXFinish: new CustomEvent('pjaxfinish'),
        LoadedPage: {},
        lasthref: window.location.href,
        preventurl: new Array(),
        recenturl: '',
        replace: '',
        sel: function(r) {
            this.replace = r;
        },
        jump: function(href) {
            var ehref = encodeURIComponent(href);
            var ts = this;
            var usecache = false; /*是否使用缓存*/
            var e = ts.replace;
            if (ts.recenturl.indexOf('#') !== -1 && href.indexOf('#') !== -1) { /*防止Tag页面的跳转问题*/
                return false;
            } else if (ts.recenturl.indexOf('#') == -1 && href.indexOf('#') !== -1) {
                B.nowpage = 0; /*防止页码bug*/
            }
            window.dispatchEvent(ts.PJAXStart); /*激活事件来显示加载动画*/
			transitionchecker('loading',function(){
			window.scrollTo(0, 0);/*滚动到头部*/
            if (ts.LoadedPage[ehref]) { /*临时缓存*/
                $.ht(ts.LoadedPage[ehref], e, false);
                setTimeout(function(){window.dispatchEvent(ts.PJAXFinish);},1000);
            } else {
                var cache = q('r', ehref, '', '', ''); /*获取缓存信息*/
                if (cache['c']) { /*如果有缓存*/
                    usecache = true;
                    $.ht(cache['c'], e, false); /*预填装缓存*/
                }
                $.aj(href, {}, {
                    success: function(m) {
                        ts.recenturl = href;
                        ts.LoadedPage[ehref] = m;
                        if (!usecache) {
                            $.ht(m, e, false);
                            q('w', ehref, m, timestamp(), '');
                        } else {
                            if (cache['c'] !== m) { /*缓存需要更新了*/
                                q('w', ehref, m, timestamp(), '');
                                $.ht(m, e, false);
                            } else {
                                q('e', ehref, '', '', 1); /*更新缓存读取次数*/
                            }
                        }
                        setTimeout(function(){window.dispatchEvent(ts.PJAXFinish)},1000);
                    },
                    failed: function(m) {
                        window.dispatchEvent(ts.PJAXFinish);
                    }
                }, 'get', '', true);
            }
			});
        },
        start: function() {
            var ts = this;
            ts.recenturl = window.location.href;
            var p = document.getElementsByTagName("a");
            for (var i in p) {
                p[i].onclick = function(e) {
                    if (ts.preventurl.indexOf(this.href) !== -1) {
                        return true;
                    } else {
                        window.history.pushState(null, null, this.href); /*加入历史*/
                        e.preventDefault();
                        ts.jump(this.href);
                    }
                };
            }
            window.onpopstate = function(e) { /*回退或者前进时触发*/
                if (window.location.href.indexOf(mainhost) !== -1) {
                    PJAX.jump(window.location.href);
                }
            }
        },
        pause: function() {
            window.onpopstate = function(e) {
                return true;
            }
        },
        autoprevent: function() {
            var ts = this;
            var p = document.getElementsByTagName("a");
            var h = window.location.host;
            for (var i in p) {
                if (p[i].href !== undefined) {
                    if (p[i].href.indexOf(h) == -1) {
                        ts.preventurl.push(p[i].href);
                    }
                }
            }
        }
    };
} /*CacheArea - Thank you OBottle*/

function q(md, k, c, t, rt) { /*(mode,key,content,timestamp,readtime)*/
    /*初始化本地cache*/
    if (typeof localStorage.obottle == 'undefined') {
        localStorage.obottle = '{}';
    }
    var timestamp = 0,
        cache = '',
        caches = JSON.parse(localStorage.obottle),
        rs = new Array();
    if (typeof caches[k] !== 'undefined') {
        timestamp = caches[k].t;
        cache = caches[k].h;
    }
    if (md == 'w') {
        var caches = JSON.parse(localStorage.obottle);
        var cc = new Object();
        cc.h = c;
        cc.t = t;
        cc.rt = 0; /*使用缓存次数*/
        caches[k] = cc;
        try {
            localStorage.obottle = JSON.stringify(caches);
        } catch (e) {
            for (var d in caches) {
                if (Number(caches[d].rt) <= 20 || Number(t) - Number(caches[d].t) >= 172800) { /*自动清理缓存空间*/
                    delete caches[d];
                }
            }
            localStorage.obottle = JSON.stringify(caches);
        }
    } else if (md == 'r') {
        rs['t'] = timestamp;
        rs['c'] = cache;
        return rs;
    } else if (md == 'e') {
        var caches = JSON.parse(localStorage.obottle);
        caches[k].rt = Number(caches[k].rt) + rt;
        localStorage.obottle = JSON.stringify(caches);
    }
} /*GetTimestamp*/

function timestamp() {
    var a = new Date().getTime();
    return a;
}
window.onscroll=function(){/*LazyLoadCheck*/
	B.lazycheck();
}
B.tpcheck();/*Activate Template Checker*/
