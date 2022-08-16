$(document).ready(function() {
	$('.header__man').click(function(event) {
		$('.login-header').toggleClass('active');
	});
	$('.page').click( function(e){ 
		$('.login-header').removeClass('active');
	});
});