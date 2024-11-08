// cusom code
document.addEventListener('DOMContentLoaded', function () {

	const body = document.querySelector('.body')

	const dropdowns = document.querySelectorAll("nav ul li");

	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].addEventListener("mouseenter", function () {
			var submenu = this.querySelector("ul");
			if (submenu) {
				submenu.style.display = "block";
			}
		});

		dropdowns[i].addEventListener("mouseleave", function () {
			var submenu = this.querySelector("ul");
			if (submenu) {
				submenu.style.display = "none";
			}
		});
	}

	const swiper = new Swiper('.main-slider', {
		spaceBetween: 20,
		pagination: {
			// el: '.main-slider .swiper-pagination',
		},

		navigation: {
			nextEl: '.main-slider .swiper-button-next',
			prevEl: '.main-slider .swiper-button-prev',
		},
	});

	const swiper2 = new Swiper('.news-block-slider', {
		spaceBetween: 24,
		slidesPerView: 4,
		navigation: {
			nextEl: '.news-block__nav .swiper-button-next',
			prevEl: '.news-block__nav .swiper-button-prev',
		},
		scrollbar: {
			el: ".news-block-slider .swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			0: {
				slidesPerView: 'auto',
				spaceBetween: 8,
			},
			768: {
				spaceBetween: 24,
				slidesPerView: 4,
			}
		}
	})

	const swiper3 = new Swiper('.clubs-slider', {
		spaceBetween: 16,
		slidesPerView: 4,
		navigation: {
			nextEl: '.clubs-slider__nav .swiper-button-next',
			prevEl: '.clubs-slider__nav .swiper-button-prev',
		},
		scrollbar: {
			el: ".clubs-slider .swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			0: {
				spaceBetween: 16,
				slidesPerView: "auto",
			},
			768: {
				spaceBetween: 16,
				slidesPerView: 4,
			}
		}
	})

	if (window.innerWidth < 768) {
		const swiper4 = new Swiper('.directions-slider', {
			spaceBetween: 8,
			slidesPerView: 1,
			grid: {
				rows: 2,
				fill: "row",
			},
			// navigation: {
			// 	nextEl: '.directions-slider .swiper-button-next',
			// 	prevEl: '.directions-slider .swiper-button-prev',
			// },
		})
	}


	// цветные кнопки
	const btnColor = document.querySelectorAll('.clubs__item .btn')
	const lenghtBtn = btnColor.length
	const colors = ['#F3AADB', '#F5C356', '#94D388', '#ABB8DA', '#F5C356'];

	for (var i = 0; i <= lenghtBtn; i++) {
		// btnColor[i].style.backgroundColor = colors[i]
		// btnColor[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

	}

	AOS.init({});


	const footerWrap = document.querySelector('.footer__wrap')
	const footerSubscripe = document.querySelector('.footer__subscribe')
	const footerCenter = document.querySelector('.footer__center')
	const footerCopy = document.querySelector('.footer__copy')
	const footerBox = document.querySelector('.footer__box:last-child')
	const footerBottom = document.querySelector('.footer__bottom')
	if (window.innerWidth < 768) {
		footerCenter.append(footerSubscripe)
		footerWrap.append(footerCenter)
		footerWrap.append(footerCopy)
		footerBox.append(footerBottom)
	}

	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuClose = document.querySelector('.menu__close')
	burger.addEventListener('click', function () {
		// this.classList.toggle('active')
		menu.classList.toggle('active')
	})
	menuClose.addEventListener('click', function() {
		menu.classList.remove('active')
	})

// 	const headerSocial = document.querySelector('.header__social')
// 	if (window.innerWidth < 768) {
// 		menu.append(headerSocial)
// 	}
})

$(document).ready(function () {
	$('.marquee').marquee();
});