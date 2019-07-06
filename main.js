/*FrontMainJS - SomeBottle*/
/*q.js*/
$ = new Object();
var md;
$.ls = new Array();
	$.lss = '';
	$.aj = function(p, d, sf, m, hd, as) { /*(path,data,success or fail,method,authheader,async)*/
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
	if(!$.scripturl){
		$.scripturl=[];
	}
	var script = document.createElement("script");
	var exist = false;
	for (var up in $.ls) {
		if ($.ls[up] == url) {
			exist = true;
			break;
		}
	}
	if (!exist&&$.scripturl.indexOf(url)==-1) {
		$.ls[$.ls.length] = url;
		script.type = "text/javascript";
		script.src = url;
		$.scripturl.push(url);
		document.body.appendChild(script);
	}
}
	$.ht = function(h, e) {
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
				eval(os[o].innerHTML);
			}
		}

	}
	$.tr = function(url) { /*PreventURLProblem*/
		var a = url;
		a = a.split('?');
		if ((a.length - 1) > 1 || url.indexOf('!') !== -1) {
			if (url.indexOf('?') !== -1) {
				a.pop();
			}
		}
		var u = '';
		for (var i in a) {
			u = u + a[i] + '?';
		}
		u = u.substring(0, u.length - 1);
		return u;
	} 
if (!B) { /*PreventInitializingTwice*/
	/*Include MdJS*/
	$.ht("<script src='./library.js'></script>" + SC('container').innerHTML, 'container');
	window.htmls = new Object();
	var B = { /*Replace Part*/
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
		hr: function(o, p) { /*htmlreplace*/
			var e = document.getElementsByTagName('html')[0].innerHTML;
			document.getElementsByTagName('html')[0].innerHTML = this.r(e, o, p);
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
		templonload: 0,
		/*LoadingTemplates*/
		templateloaded: new Array(),
		tpcheck: function() { /*template check*/
			var pagetype = this.gt('<!--[PageType]-->', '<!--[PageTypeEnd]-->'); /*Get Page Type*/
			if (!window.templjson) {
				var ot = this;
				$.aj('template.json', '', {
					success: function(m) {
						window.templjson = JSON.parse(m);
						return ot.tpcheck();
					},
					failed: function(m) { /*Failed*/

					}
				}, 'get', '', true);
			}else if (!window.mainjson&&window.templjson['usemain'].indexOf(pagetype)!==-1) {/*Some pages are in need of Main.json*/
				var o=this;
				setTimeout(function(){
					return o.tpcheck();
				},500);
			} else {
				var o = this;
				var j = window.templjson;
				j['necessary'].push(pagetype); /*Pagetype Pushed*/
				for (var i in j['necessary']) {
					if (o.templateloaded.indexOf(j['necessary'][i]) == -1) {
						o.templonload += 1;
						$.aj(j['necessary'][i], '', {
							success: function(m, p) {
								window.htmls[p] = m;
								o.templateloaded.push(p);
								o.templonload -= 1;
							},
							failed: function(m) { /*Failed*/

							}
						}, 'get', '', true);
					}
				}
				var timer = setInterval(function() {
					if (o.templonload <= 0) {
						clearInterval(timer);
						o.renderer(); /*Call the renderer*/
					}
				}, 1000);
			}
			if (!window.mainjson&&!window.mainjsonrequest) {/*Include Mainjson*/
				var ot = this;
				window.mainjsonrequest=true;/*make request flag*/
				$.aj('main.json', '', {
					success: function(m) {
						window.mainjson = JSON.parse(m.replace(/[\r\n]/g, ""));
					},
					failed: function(m) { /*Failed*/

					}
				}, 'get', '', true);
			} 
		},
		itempage:0,
		renderer: function() {
			md=new Markdown.Converter()
			var cloth = window.htmls['cloth.html'];
			var main = window.htmls['main.html'];
			var comment = window.htmls['comment.html'];
			var pagetype = this.gt('<!--[PageType]-->', '<!--[PageTypeEnd]-->'); /*Get Page Type*/
			var tj = window.mainjson; /*get json*/
			if (pagetype == 'post.html') {
				var content = this.gt('<!--[PostContent]-->', '<!--[PostContentEnd]-->'); /*Get Post Content*/
				var title = this.gt('<!--[PostTitle]-->', '<!--[PostTitleEnd]-->'); /*Get Post Title*/
				var date = this.gt('<!--[PostDate]-->', '<!--[PostDateEnd]-->'); /*Get Post Date*/
				var tags = this.gt('<!--[PostTag]-->', '<!--[PostTagEnd]-->'); /*Get Post Content*/
				var pid = this.gt('<!--[PostID]-->', '<!--[PostIDEnd]-->'); /*Get Post ID*/
				var pagetitle = (this.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
				var post = window.htmls['post.html'];
				var render11 = this.r(post, '{[postcontent]}', md.makeHtml(content.trim())); /*Analyse md*/
				var render12 = this.r(render11, '{[posttitle]}', title);
				if(isNaN(date)){
					tags='页面';
				}
				var render13 = this.r(render12, '{[posttags]}', tags);
				var render14 = this.r(render13, '{[postdate]}', date);
				var render2 = this.r(main, '{[contents]}', render14);
				var render3 = this.r(cloth, '{[main]}', render2);
				var render4 = this.r(render3, '{[title]}', pagetitle);
				var render5 = this.r(render4, '{[comments]}', comment); /*LoadCommentsForPost*/
				var render6 = this.r(render5, '{[pid]}', pid); /*SetPid*/
				if(isNaN(date)){
					render6=render6.split('<!--PostEnd-->')[0]+'<!--PostEnd-->';
				}
				$.ht(render6, 'container');
				this.loadhide();
			} else if (pagetype == 'postlist.html') {
				var content = this.gt('<!--[PostContent]-->', '<!--[PostContentEnd]-->'); /*Get Post Content*/
				var pagetitle = (this.gt('<!--[MainTitle]-->', '<!--[MainTitleEnd]-->')).replace(/<\/?.+?>/g, ""); /*Get Page Title(No html characters)*/
				var realtitle = pagetitle.replace('-', ''); /*Remove - */
				var pt = window.htmls['postlist.html'];
				var render11 = this.r(pt, '{[postitems]}', md.makeHtml(content.trim())); /*Analyse md*/
				var render2 = this.r(main, '{[contents]}', render11);
				var render3 = this.r(cloth, '{[main]}', render2);
				var render4 = this.r(render3, '{[title]}', realtitle);
				this.itempage=parseInt(tj['posts_per_page']);
				$.ht(render4, 'container');
				this.loadhide();
			} else if (pagetype == 'archives.html') {
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
				var ar = window.htmls['archives.html'];
				var render11 = this.r(ar, '{[archives]}', renderar);
				var render2 = this.r(main, '{[contents]}', render11);
				var render3 = this.r(cloth, '{[main]}', render2);
				var render4 = this.r(render3, '{[title]}', pagetitle);
				$.ht(render4, 'container');
				this.loadhide();
			} else if (pagetype == 'tags.html') {
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
					if (window.location.href.indexOf('tag') == -1) { /*跳离tag页了*/
						PJAX.sel('container');
						PJAX.start();
						clearInterval(timer);
						return false;
					}
					ot.tagpagechecker();
				}, 500);
				var tgs = window.htmls['tags.html'];
				var render11 = this.r(tgs, '{[tags]}', rendertg);
				var render2 = this.r(main, '{[contents]}', render11);
				var render3 = this.r(cloth, '{[main]}', render2);
				var render4 = this.r(render3, '{[title]}', pagetitle);
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
			var eh = document.getElementsByTagName('html')[0].innerHTML; /*Get All html*/
			var href = $.tr(window.location.href);
			if (href.indexOf('#') == -1) {
				window.open('#alltags', '_self');
			} else {
				var pg = href.split('#')[1];
				if (this.nowtag !== pg) {
					this.nowtag = pg;
					if (pg == 'alltags') {
						SC('tags').innerHTML = this.alltaghtml;
					} else {
						this.taguper(pg);
					}
					PJAX.start();
				}
			}
		},
		loadshow: function() {
			SC('loading').style.opacity = 1;
			SC('loading').style.zIndex = 200;
		},
		loadhide: function() {
			SC('loading').style.opacity = 0;
			SC('loading').style.zIndex = -1;
		},
		more:function(){
			var start=this.itempage+1;
			var tj = window.mainjson; /*get json*/
			var maxrender=parseInt(tj['posts_per_page']);
		}
	};
	window.addEventListener('pjaxstart', function() { /*加载动画*/
		B.loadshow();
	}, false);
	window.addEventListener('pjaxfinish', function() {
		B.loadhide();
	}, false);
}

/*Simple PJAX For Front MAIN - SomeBottle*/
var mainhost = window.location.host;
var dt = new Date().getTime();
if (PJAX == undefined || PJAX == null) { /*防止重初始化*/
	var PJAX = {
		index: window.history.state === null ? 1 : window.history.state.page,
		PJAXStart: new CustomEvent('pjaxstart'),
		PJAXFinish: new CustomEvent('pjaxfinish'),
		lasthref: window.location.href,
		preventurl: new Array(),
		recenturl: '',
		replace: '',
		sel: function(r) {
			this.replace = r;
		},
		jump: function(href) {
			var ts = this;
			var usecache = false; /*是否使用缓存*/
			if (ts.recenturl.indexOf('#') !== -1 && href.indexOf('#') !== -1) { /*防止Tag页面的跳转问题*/
				return false;
			}
			window.dispatchEvent(ts.PJAXStart); /*激活事件来显示加载动画*/
			var cache = q('r', encodeURIComponent(href), '', '', ''); /*获取缓存信息*/
			if (cache['c']) { /*如果有缓存*/
				usecache = true;
				var e = ts.replace;
				$.ht(cache['c'], e); /*预填装缓存*/
			}
			$.aj(href, {}, {
				success: function(m) {
					var e = ts.replace;
					ts.recenturl = href;
					if (!usecache) {
						$.ht(m, e);
						q('w', encodeURIComponent(href), m, timestamp(), '');
					} else {
						if (cache['c'] !== m) { /*缓存需要更新了*/
							q('w', encodeURIComponent(href), m, timestamp(), '');
							$.ht(m, e);
						} else {
							q('e', encodeURIComponent(href), '', '', 1); /*更新缓存读取次数*/
						}
					}
					window.dispatchEvent(ts.PJAXFinish);
				},
				failed: function(m) {
					window.dispatchEvent(ts.PJAXFinish);
				}
			}, 'get', '', true);
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
				if (Number(caches[d].rt) <= 8 || Number(t) - Number(caches[d].t) >= 172800) { /*自动清理缓存空间*/
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
