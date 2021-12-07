
//Инициализация:
let myImageSlider = new Swiper('.swiper', {
	// ОПЦИОНАЛЬНЫЕ ПАРАМЕТРЫ:

	// Направление:
	//direction: 'vertical',

	// Бесконечная прокрутка (скроллбар отключать, мультирядность отключать):
	loop: true,

	// Количество дублирующих слайдов:
	//loopedSlides: 0,

	// Свободная прокрутка:
	//freeMode: true,

	//Автоматическая прокрутка (пауза, остановить на последнем, отключить при ручном):
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},

	/* ЕСЛИ нужна pagination (точки):
	HTML:
	<div class="swiper-pagination"></div>
	*/
	pagination: {
		el: '.swiper-pagination',

		// ИЛИ bullets
		type: 'bullets',
		clickable: true,
		//dynamic bullets
		dynamicBullets: true,
		//custom bullets
		renderBullet: function (index, className) {
			return `<span class="${className}">${index + 1}</span>`;
		},

		/* ИЛИ fractions		
		type: 'fraction',
		// Кастомные:
		renderFraction: function (currentClass, totalClass) {
		return `Photo <span class="${currentClass}""></span> from <span class="${totalClass}"></span>`;
		},
		*/
		/* ИЛИ пргрессбар:
		type: 'progressbar',
		*/
	},

	/* Навигационные кнопки-стрелки
	HTML:
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	/* Если нужен скроллбар (и в HTML 
	<div class="swiper-scrollbar"></div>)
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	*/
	// Курсор-рука:
	grabCursor: true,

	// Переключение на слайдб по которому клик:
	slideToClickedSlide: true,

	//Добавление адреса в адресной строке слайду:
	//hashNavigation: {
	//	watchState: true,
	//},

	// Пееключение стрелками:
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// Прокрутка колесиком:
	mousewheel: {
		eventsTarget: ".slider"
	},

	// Автовысота (удобно с разным количеством текста):
	autoHeight: true,

	// Отступ между слайдами:
	//spaceBetween: 20,

	// Количество показанных слайдов (можно дробное число и auto):
	slidesPerView: 1.2,

	// Количество пролистываемых слайдов:
	//slidesPerGroup: 3,

	// Первый активный слайд по центру:
	centeredSlides: true,

	// Стартовій слайд:
	//initialSlide: 1,

	/*---------------------------------------------------------
		Мультирядность (обязательно отключить автовысоту,       |
		Количество показанных слайдов 2 или больше,             |
		В стилях:
		.slider {
			height: 700px;
			.swiper-slide {
				height: calc((100% - 30px) / 2);
				overflow: hidden;
			}
		}
	----------------------------------------------------------:
	SlidesPerColumn: 2,
	*/

	// Скорость переключения (300 по умолчанию):
	//speed: 1000,

	// Эффекты переключения: (slide по умолчанию):
	/*
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	*/
	/*
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},
	*/

	// в стилях ограничить ширину слайдера 
	//	.slider { width: 500px;}
	/*
		effect: 'cube',
		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowsScale: 0.94
		},
	*/
	/*
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 40,
		stretch: 50,
		slideShadows: true,
	},
	*/

	// Адаптивность:
	//	Ширина экрана:
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	*/

},
);


// Запуск автопрокрутки при наведении:
let slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', function (e) {
	myImageSlider.autoplay.stop();
});
slider.addEventListener("mouseleave", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	//myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
