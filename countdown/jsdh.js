var date = new Date("JAN 25, 2020 00:00:00").getTime();
var theInterValFunction = setInterval(function(){
	var theNowDate = new Date().getTime();
	var theDisDate = date - theNowDate;
	var days = Math.floor(theDisDate / (1000*60*60*24));
	var hours = Math.floor((theDisDate % (1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((theDisDate % (1000*60*60)) / (1000*60));
	var seconds = Math.floor((theDisDate % (1000*60)) / 1000);
	document.getElementById('day').innerHTML = days;
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = minutes;
	document.getElementById('second').innerHTML = seconds;
}, 1000);
//console.log (date);