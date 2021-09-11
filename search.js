/*Config*/
B.githubrepo = "BottleSome/blog";/*博客所在github仓库，比如我的在github.com/SomeBottle/test/ ，这里填SomeBottle/test*/
/*ConfigEnd*/
B.searchinj = (postindexes, searchword, callback) => {
    if (B.githubrepo !== "") {
        let queryString = encodeURIComponent(searchword) + "+in:file+language:html+repo:" + B.githubrepo;
        $.ft("https://api.github.com/search/code?q=" + queryString, {}, {
            success: (j) => {
                let rs = JSON.parse(j), items = rs['items'], resultarr = [];
                for (var o in items) resultarr.push(parseInt(items[o]["name"].replace("post-", "").replace(".html", "")));
                callback(resultarr);/*回调的是搜索出的文章ID组成的数组*/
            }, failed: (j) => {
                console.log('API Search failed');
            }
        }, 'get', '');
    }
}
