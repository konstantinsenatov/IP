$(document).ready(function() {
	$('.menu__item--click').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
	const philosophi = document.querySelector('.philosophi-block');
	if (philosophi) {
		$('.philosophi-link, .bureau-item').addClass('active-menu')
	}

	const offices = document.querySelector('.offices');
	if (offices) {
		$('.offices-link, .bureau-item').addClass('active-menu')
	}

	const people = document.querySelector('.people');
	if (people) {
		$('.people-link').addClass('active-menu')
	}

	const docs = document.querySelector('.docs');
	if (docs) {
		$('.docs-link').addClass('active-menu')
	}
});