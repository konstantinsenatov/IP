$(document).ready(function () {
	$(function() {
		$(".select-offices--title").click(function() {
			$(".select-offices").toggleClass("active");   
			$('.select-offices--content').toggleClass("active");
		});
		$(".swiper-pagination-bullet").click(function() {
			$(".select-offices").removeClass("active");   
			$('.select-offices--content').removeClass("active");
		});
	});
	$(document).click( function(e){ 
		var login = $( ".select-offices" );
		if ( !login.is(e.target) && login.has(e.target).length === 0 ) { 
			$(".select-offices, .select-offices--content").removeClass('active'); 
		}
	});


	$(function() {
		$(".hover-block").mouseover(function() {
			$(this).addClass('active');
		});
		$(".hover-block").mouseout(function() {
			$(this).removeClass('active');
		});
	});
	$(function() {
		$(".calendar-slide__item").click(function() {
			if (!$(".hover-block").hasClass('active')) {
				$(".calendar-slide__item").removeClass('active');
				$(this).addClass('active');
			}
		});
	});
	$(document).click( function(e){ 
		var calendar = $( ".calendar-slide__item" );
		if ( !calendar.is(e.target) && calendar.has(e.target).length === 0 ) { 
			$(".calendar-slide__item").removeClass('active'); 
		}
	});
	$(function() {
		$(".autoreply__item-calendar-row input").click(function() {
			$(".autoreply__item-calendar").addClass("active");   
		});
	});
	const picker = new easepick.create({
		element: "#datepicker",
		css: [
			"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/main.css"
		],
		lang: "ru-RU",
		calendars: 2,
		autoApply: true,
		zIndex: 10,
		plugins: ['RangePlugin'],
		RangePlugin: {
			tooltip: true,
		},
		setup(picker) {
			picker.on('hide', (e) => {
				const autoreply__item_calendar = document.querySelector('.autoreply__item-calendar');
				autoreply__item_calendar.classList.remove('active')
			});
		},
	})
});

