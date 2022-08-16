/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

$(document).ready(function () {
  $('.header__man').click(function (event) {
    $('.login-header').toggleClass('active');
  });
  $('.page').click(function (e) {
    $('.login-header').removeClass('active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/***/ (function() {

$(document).ready(function () {
  $('.menu__item--click').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
  var philosophi = document.querySelector('.philosophi-block');

  if (philosophi) {
    $('.philosophi-link, .bureau-item').addClass('active-menu');
  }

  var offices = document.querySelector('.offices');

  if (offices) {
    $('.offices-link, .bureau-item').addClass('active-menu');
  }

  var people = document.querySelector('.people');

  if (people) {
    $('.people-link').addClass('active-menu');
  }

  var docs = document.querySelector('.docs');

  if (docs) {
    $('.docs-link').addClass('active-menu');
  }
});

/***/ }),

/***/ "./src/blocks/modules/sidebar/sidebar.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sidebar/sidebar.js ***!
  \***********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/calendar.js":
/*!***********************************!*\
  !*** ./src/js/import/calendar.js ***!
  \***********************************/
/***/ (function() {

$(document).ready(function () {
  $(function () {
    $(".select-offices--title").click(function () {
      $(".select-offices").toggleClass("active");
      $('.select-offices--content').toggleClass("active");
    });
    $(".swiper-pagination-bullet").click(function () {
      $(".select-offices").removeClass("active");
      $('.select-offices--content').removeClass("active");
    });
  });
  $(document).click(function (e) {
    var login = $(".select-offices");

    if (!login.is(e.target) && login.has(e.target).length === 0) {
      $(".select-offices, .select-offices--content").removeClass('active');
    }
  });
  $(function () {
    $(".hover-block").mouseover(function () {
      $(this).addClass('active');
    });
    $(".hover-block").mouseout(function () {
      $(this).removeClass('active');
    });
  });
  $(function () {
    $(".calendar-slide__item").click(function () {
      if (!$(".hover-block").hasClass('active')) {
        $(".calendar-slide__item").removeClass('active');
        $(this).addClass('active');
      }
    });
  });
  $(document).click(function (e) {
    var calendar = $(".calendar-slide__item");

    if (!calendar.is(e.target) && calendar.has(e.target).length === 0) {
      $(".calendar-slide__item").removeClass('active');
    }
  });
  $(function () {
    $(".autoreply__item-calendar-row input").click(function () {
      $(".autoreply__item-calendar").addClass("active");
    });
  });
  var picker = new easepick.create({
    element: "#datepicker",
    css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/main.css"],
    lang: "ru-RU",
    calendars: 2,
    autoApply: true,
    zIndex: 10,
    plugins: ['RangePlugin'],
    RangePlugin: {
      tooltip: true
    },
    setup: function setup(picker) {
      picker.on('hide', function (e) {
        var autoreply__item_calendar = document.querySelector('.autoreply__item-calendar');
        autoreply__item_calendar.classList.remove('active');
      });
    }
  });
});

/***/ }),

/***/ "./src/js/import/login.js":
/*!********************************!*\
  !*** ./src/js/import/login.js ***!
  \********************************/
/***/ (function() {

var togglePassword = document.querySelector('.form-login__eye');
var password = document.querySelector('.form-login__input-password');

if (togglePassword) {
  togglePassword.addEventListener('click', function (e) {
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('active');
  });
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/import/pages.js":
/*!********************************!*\
  !*** ./src/js/import/pages.js ***!
  \********************************/
/***/ (function() {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var autoreply = document.querySelector('.autoreply');
  var massage_icon = document.querySelector('.massage-icon');

  if (autoreply) {
    massage_icon.classList.add('active');
  }

  var signature = document.querySelector('.signature');
  var signature_icon = document.querySelector('.signature-icon');

  if (signature) {
    signature_icon.classList.add('active');
  }

  var offices_calendar = document.querySelector('.offices-calendar');
  var calendar_icon = document.querySelector('.calendar-icon');

  if (offices_calendar) {
    calendar_icon.classList.add('active');
  }

  var people = document.querySelector('.people');
  var call_icon = document.querySelector('.call-icon');

  if (people) {
    call_icon.classList.add('active');
  }
}); //MAP

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
  var _$$mapplic;

  var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
  var mapJsonSrc = '/jslibs/mall.json';

  if (document.location.href.includes('.github.io')) {
    mapJsonSrc = '/IP/dist/jslibs/mall-github.json';
  }

  var map = $('#mapplic').mapplic((_$$mapplic = {
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
    fullscreen: false
  }, _defineProperty(_$$mapplic, "developer", false), _defineProperty(_$$mapplic, "thumbholder", true), _defineProperty(_$$mapplic, "maxscale", 3), _$$mapplic));
  Fancybox.bind("[data-fancy-map]", {
    dragToClose: false,
    on: {
      reveal: function reveal(fancybox, slide) {
        $('#mapplic').trigger('resize');
      }
    }
  });
});

/***/ }),

/***/ "./src/js/import/select.js":
/*!*********************************!*\
  !*** ./src/js/import/select.js ***!
  \*********************************/
/***/ (function() {

$(document).ready(function () {
  var autoreply__item_select = document.querySelector('.autoreply__item--inner');
  var autoreply__item_select_title = autoreply__item_select.querySelector('.autoreply__item--row');
  var autoreply__item_select_labels = autoreply__item_select.querySelectorAll('.autoreply__item--label');
  autoreply__item_select_title.addEventListener('click', function () {
    autoreply__item_select.classList.toggle('active');
  });

  for (var i = 0; i < autoreply__item_select_labels.length; i++) {
    autoreply__item_select_labels[i].addEventListener('click', function (evt) {
      autoreply__item_select_title.textContent = evt.target.textContent;
      autoreply__item_select.classList.remove('active');
    });
  }
});
$(document).ready(function () {
  var selectSingle1 = document.querySelector('.select1');
  var selectSingle1_title = selectSingle1.querySelector('.select1--title');
  var selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');
  selectSingle1_title.addEventListener('click', function () {
    selectSingle1.classList.toggle('active');
  });

  for (var i = 0; i < selectSingle1_labels.length; i++) {
    selectSingle1_labels[i].addEventListener('click', function (evt) {
      selectSingle1_title.textContent = evt.target.textContent;
      selectSingle1.classList.remove('active');
    });
  }

  var selectSingle2 = document.querySelector('.select2');
  var selectSingle2_title = selectSingle2.querySelector('.select2--title');
  var selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');
  selectSingle2_title.addEventListener('click', function () {
    selectSingle2.classList.toggle('active');
  });

  for (var _i = 0; _i < selectSingle2_labels.length; _i++) {
    selectSingle2_labels[_i].addEventListener('click', function (evt) {
      selectSingle2_title.textContent = evt.target.textContent;
      selectSingle2.classList.remove('active');
    });
  }

  $(document).click(function (e) {
    var selectSingle2 = document.querySelector('.select2');
    var selectSingle2_title = $(".select2--title");

    if (!selectSingle2_title.is(e.target) && selectSingle2_title.has(e.target).length === 0) {
      selectSingle2.classList.remove('active');
    }
  });
  $(document).click(function (e) {
    var selectSingle1 = document.querySelector('.select1');
    var selectSingle1_title = $(".select1--title");

    if (!selectSingle1_title.is(e.target) && selectSingle1_title.has(e.target).length === 0) {
      selectSingle1.classList.remove('active');
    }
  });
  $(document).ready(function () {
    $('.select1--label-all').click(function () {
      $('.select1--label-left').removeClass('active');
      $('.select1--label-right').removeClass('active');
    });
    $('.select1--label-right').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.select1--label-left').removeClass('active');
    });
    $('.select1--label-left').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.select1--label-right').removeClass('active');
    });
  });
});

/***/ }),

/***/ "./src/js/import/swiper.js":
/*!*********************************!*\
  !*** ./src/js/import/swiper.js ***!
  \*********************************/
/***/ (function() {

var swiper = new Swiper(".swiper-offices-calendar", {
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
  effect: 'fade'
});
var swiper2 = new Swiper(".select-offices--title", {
  thumbs: {
    swiper: swiper
  },
  effect: 'fade',
  pagination: {
    el: ".select-offices--content-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".meeting-rooms__swiper-mosk", {
  effect: 'fade',
  pagination: {
    el: ".meeting-rooms-mosk-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".meeting-rooms__swiper-pit", {
  effect: 'fade',
  pagination: {
    el: ".meeting-rooms-pit-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".calendar__swiper-inner1", {
  effect: 'fade',
  navigation: {
    nextEl: ".calendar-slide__next1",
    prevEl: ".calendar-slide__prev1"
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/login */ "./src/js/import/login.js");
/* harmony import */ var _import_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/swiper */ "./src/js/import/swiper.js");
/* harmony import */ var _import_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/select */ "./src/js/import/select.js");
/* harmony import */ var _import_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/calendar */ "./src/js/import/calendar.js");
/* harmony import */ var _import_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/pages */ "./src/js/import/pages.js");
/* harmony import */ var _import_pages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_pages__WEBPACK_IMPORTED_MODULE_5__);






}();
/******/ })()
;
//# sourceMappingURL=main.js.map