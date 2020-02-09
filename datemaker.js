function datemaker() {
    var dateel = document.getElementsByClassName('date');
    for (var i in dateel) {
        var e = dateel[i];
        if (e instanceof Element) {
            var dt = e.innerHTML,
                md = dt.slice(-4),
                d = md.slice(-2),
                m = md.substring(0, 2),
                y = dt.replace(md, '');
            var changed = y + '-' + m + '-' + d;
            if (dt.length == 8) {
                e.innerHTML = changed;
            }
        }
    }
}
var currentelement;

function navchecker() {
    var navs = document.getElementsByTagName('a'),
        els = [],
        navnum = 0;
    for (var i in navs) {
        if (navs[i] instanceof Element) {
            var e = navs[i].parentNode.parentNode;
            if (e.className == 'nav') {
                var hr = window.location.href;
                if ((navs[i].href!=='/'&&hr.indexOf(navs[i].href) !== -1)||navs[i].href=='/') {
                    navnum += 1;
                    if (navs[i] !== currentelement) {
                        currentelement ? (currentelement.className = '') : currentelement = currentelement;
                        navs[i].className = 'current';
                        currentelement = navs[i];
                    }
                }
            }
        }
    }
    if (navnum <= 0 && currentelement) {
        currentelement.className = '';
    }
}
setInterval(function() {
    navchecker();
    datemaker()
}, 100);