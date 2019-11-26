var elMenu = document.getElementsByClassName('menu')[0];
var btnTop = document.getElementsByClassName('back-to-top')[0];
btnTop.addEventListener('click', function() {
	scrollToTop(1000)
});

window.onscroll = function() {
	var sTop = window.pageYOffset;
	
	//var btnTop = $('.back-to-top')[0];
	//console.log(sTop);
	if(sTop>20){
		elMenu.classList.add('co-dinh-menu');
		btnTop.classList.add('hien-ra');
		// $('.back-to-top').fadeIn();
	} else {
		elMenu.classList.remove('co-dinh-menu');
		btnTop.classList.remove('hien-ra');
		// $('.back-to-top').fadeOut();
	}
};
function scrollToTop(scrollDuration) {
const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
var     scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
}

