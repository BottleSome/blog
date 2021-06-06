var tsi=setInterval(function(){
if($N){
clearInterval(tsi);
$N.x('pc');
var time=0;
$N.createlist('about');
ppgt = function(p, sf) { /*(path,success or fail)*/
  	var xhr = new XMLHttpRequest();
  	xhr.open('get', p, true);
  	xhr.send();
  	xhr.onreadystatechange = function() {
  		if (xhr.readyState == 4 && xhr.status == 200) {
  			sf.success(xhr.responseText);
  		} else if (xhr.readyState == 4 && xhr.status !== 200) {
  			sf.failed(xhr.status);
  		}
  	};
}
ppgt('./danmaku/about.json', {
  	success: function(msg) {
  		$N.json(msg, 'about');
  	},
  	failed: function(msg) {
  		console.log('弹幕Json装填失败');
  	}
});
function cleartime(){
	time=0;
}
function turn(){
	if(window.location.href.indexOf('aboutme')!==-1){
		$N.x('pc');
	$N.lc(time,'about');
	}
	time+=1;
	if(time>=57){
		cleartime();
	}
}
setInterval(turn,1000);
cleartime();
}
},1000);