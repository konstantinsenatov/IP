



$(document).ready(function () {
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});


	
	const autoreply = document.querySelector('.autoreply');
	const massage_icon = document.querySelector('.massage-icon');
	if (autoreply) {
		massage_icon.classList.add('active')
	}
	
	const signature = document.querySelector('.signature');
	const signature_icon = document.querySelector('.signature-icon');
	if (signature) {
		signature_icon.classList.add('active')
	}
	
	const offices_calendar = document.querySelector('.offices-calendar');
	const calendar_icon = document.querySelector('.calendar-icon');
	if (offices_calendar) {
		calendar_icon.classList.add('active')
	}
	
	const people = document.querySelector('.people');
	const call_icon = document.querySelector('.call-icon');
	if (people) {
		call_icon.classList.add('active')
	}
});






//MAP

/* Landing page scripts */
/* $(document).ready(function() {
	$('.usage').click(function(e) {
		e.preventDefault();
		$('.editor-window').slideToggle(200);
	});

	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var map = $('.mapplic-map'),
		x = (e.pageX - map.offset().left) / map.width(),
			y = (e.pageY - map.offset().top) / map.height();
			$('.mapplic-coordinates-x').text(parseFloat(x).toFixed(4));
			$('.mapplic-coordinates-y').text(parseFloat(y).toFixed(4));
		});
		
		$('.editor-window .window-mockup').click(function() {
			$('.editor-window').slideUp(200);
		});
	}); */

	jQuery(function () {
		var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
		
	var mapJsonSrc= '/jslibs/mall.json';
	if(document.location.href.includes('.github.io')){
		mapJsonSrc= '/IP/dist/jslibs/mall-github.json';
	}
	

	var map = $('#mapplic').mapplic({
		source: mapJsonSrc,
		customcss: css,
		sidebar: true,
		sidebartoggle: true,
		alphabetic: true,
		height: 560,
		developer: true,
		searchdescription: true,
		searcheverywhere: true,
		animations: true,
		minimap: false,
		marker: 'hidden',
		fillcolor: false,
		fullscreen: false,
		developer: false,
		thumbholder: true,
		maxscale: 3
	});
	
	Fancybox.bind("[data-fancy-map]", {
		dragToClose:false,
		on: {
			reveal: (fancybox, slide) => {
				$('#mapplic').trigger('resize')
			}
		}
	});
});
