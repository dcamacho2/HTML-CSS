$(document).ready(function() {
    $('.article').children('.item').click(function() {
    	if($(this).parent().hasClass('current') === true) {
    		$('.description').hide();
    		$(this).parent().removeClass('current');
    	} else {
	    	$('.article').removeClass('current');
	        $('.description').hide();
	        $(this).parent().children('.description').show();
	        $(this).parent().addClass('current');
	    }
    });

    $('.icon-menu').click(function() {
    	$('.menu').animate({
    		left: '0px'
    	}, 200);
    	// $('body').animate({
    	// 	left: '285px'
    	// }, 200);
    });

    $('.icon-close').click(function() {
    	$('.menu').animate({
    		left: '-285px'
    	}, 200);
    	// $('body').animate({
    	// 	left: '0px'
    	// }, 200);
    });
});