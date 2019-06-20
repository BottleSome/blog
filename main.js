/*FrontMainJS - SomeBottle*/
var $ = new Object();
if (!B) { /*PreventInitializingTwice*/
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
		gt: function(p1, p2) { /*htmlget*/
			var e = document.getElementsByTagName('html')[0].innerHTML;
			var k = e.split(p1)[1];
			var d = k.split(p2)[0];
			return d;
		},
		templonload: 0,
		/*LoadingTemplates*/
		templateloaded: new Array(),
		tpcheck: function() { /*template check*/
			if (!window.templjson) {
				$.aj('template.json', '', {
					success: function(m) {
						window.templjson = JSON.parse(m);
					},
					failed: function(m) { /*Failed*/

					}
				}, 'get', '', true);
				var ot = this;
				var timer = setInterval(function() {
					if (window.templjson) {
						clearInterval(timer);
						return ot.tpcheck();
					}
				}, 1000);
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
		},
		renderer: function() {
			var cloth = window.htmls['cloth.html'];
			var main = window.htmls['main.html'];
			if (pagetype == 'post.html') {
				var content = this.gt('<!--[PostContent]-->', '<!--[PostContentEnd]-->'); /*Get Post Content*/
				var title = this.gt('<!--[PostTitle]-->', '<!--[PostTitleEnd]-->'); /*Get Post Title*/
				var date = this.gt('<!--[PostDate]-->', '<!--[PostDateEnd]-->'); /*Get Post Date*/
				var tags = this.gt('<!--[PostTag]-->', '<!--[PostTagEnd]-->'); /*Get Post Content*/
				var post = window.htmls['post.html'];
				var render11 = this.r(post, '{[postcontent]}', content);
				var render12 = this.r(render11, '{[posttitle]}', title);
				var render13 = this.r(render12, '{[posttags]}', tags);
				var render14 = this.r(render13, '{[postdate]}', date);
				var render2 = this.r(main, '{[contents]}', render14);
				var render3 = this.r(cloth, '{[main]}', render2);
				$.ht(render3, 'html');
			}
		}
	};
}

/*q.js*/
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
	var script = document.createElement("script");
	var exist = false;
	for (var up in $.ls) {
		if ($.ls[up] == url) {
			exist = true;
			break;
		}
	}
	if (!exist) {
		$.ls[$.ls.length] = url;
		script.type = "text/javascript";
		script.src = url;
		document.body.appendChild(script);
	}
}
$.ht = function(h, e) {
	var ht = SC(e);
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