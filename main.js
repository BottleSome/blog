/*FrontMainJS - SomeBottle*/
var B = { /*Replace Part*/
	r: function(a, o, p, g=true) { /*(All,Original,ReplaceStr,IfReplaceAll)*/
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
	gt: function(p1,p2) { /*htmlget*/
		var e = document.getElementsByTagName('html')[0].innerHTML;
		var k=e.split(p1)[1];
		var d=k.split(p2)[0];
		return d;
	}
};