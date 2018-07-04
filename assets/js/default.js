$(function() {
	$(document).scroll(function(){
	    var top = $(document).scrollTop();
	    if (top<400) {
	        $('.go-top').fadeOut(200);
	    } else {
	        $('.go-top').fadeIn(800);
	    }
	});

	$('.go-top').click(function(){
        $('body,html').animate({scrollTop:0},300);
    });       
})


