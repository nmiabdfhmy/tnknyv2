var countDownDate = new Date("Jul 16, 2022 02:59:58").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
