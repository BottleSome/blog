function datemaker(){
var dateel=document.getElementsByClassName('date');
for(var i in dateel){
	var e=dateel[i];
	if(e instanceof Element){
	   var dt=e.innerHTML,md=dt.slice(-4),d=md.slice(-2),m=md.substring(0,2),y=dt.replace(md,'');
	   var changed=y+'-'+m+'-'+d;
	   if(dt.length==8){
	   e.innerHTML=changed;
	   }
	}
}
}
setInterval(datemaker,100);