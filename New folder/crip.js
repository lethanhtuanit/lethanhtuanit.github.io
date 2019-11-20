window.onscroll = function() {
	var sTop = window.pageYOffset;
	var elMenu = document.getElementsByClassName('menu')[0];
	var btnTop = document.getElementsByClassName('back-to-top')[0];
	//var btnTop = $('.back-to-top')[0];
	//console.log(sTop);
	if(sTop>20){
		elMenu.classList.add('co-dinh-menu');
		//btnTop.classList.add('hien-ra');
		// $('.back-to-top').fadeIn();
	} else {
		elMenu.classList.remove('co-dinh-menu');
		//btnTop.classList.remove('hien-ra');
		// $('.back-to-top').fadeOut();
	}
}

/*
$(document).ready(function() {
	$(window).scroll(function(event){
		var pos_body = $('html,body').scrollTop();
		//console.log(pos-body);
		if(pos_body>20){
			$('.menu').addClass('co-dinh-menu');
		}
		else {
			$('.menu').removeClass('co-dinh-menu');
		}
		if(pos_body>1200){
			$('.back-to-top').addClass('hien-ra');
		}
		else{
			$('.back-to-top').removeClass('hien-ra');
		}
	});
	$('.back-to-top').click(function(envent){
		$('html,body').animate({screenTop:0},1000);
	});
});*/