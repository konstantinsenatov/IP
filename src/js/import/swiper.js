var swiper = new Swiper(".swiper-offices-calendar", {
	slidesPerView: 1,
	watchSlidesProgress: true,
	allowTouchMove: false,
	effect: 'fade',
});

var swiper2 = new Swiper(".select-offices--title", {
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	pagination: {
		el: ".select-offices--content-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-mosk", {
	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-mosk-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".meeting-rooms__swiper-pit", {
	effect: 'fade',
	pagination: {
		el: ".meeting-rooms-pit-pagination",
		clickable: true,
	},
	allowTouchMove: false,
}); 

var swiper2 = new Swiper(".calendar__swiper-inner1", {
	effect: 'fade',
	navigation: {
		nextEl: ".calendar-slide__next1",
		prevEl: ".calendar-slide__prev1",
	},
}); 