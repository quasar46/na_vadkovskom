// custom code
document.addEventListener('DOMContentLoaded', function () {

	const body = document.querySelector('body')

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
			el: '.swiper-main-slider + .swiper-pagination',
		},

		navigation: {
			nextEl: '.main-slider .swiper-button-next',
			prevEl: '.main-slider .swiper-button-prev',
		},
	});

	const swiper2 = new Swiper('.news-block-slider', {
		spaceBetween: 24,
		slidesPerView: 4,
		loop: true,
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
		pagination: {
			el: '.clubs-slider .swiper-pagination'
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

	const swiper5 = new Swiper('#swiper-story', {
		slidesPerView: 1,
		simulateTouch: false,
		allowTouchMove: false,

		navigation: {
			nextEl: '.story__nav .swiper-button-next',
			prevEl: '.story__nav .swiper-button-prev',
		},
		pagination: {
			el: "#swiper-story .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}"> <i>${index + 2016}</i> </span> `
			},
		}
	})
	if (document.querySelectorAll('.story__line').length > 0) {
		const bullets = document.querySelector('.story__line').querySelectorAll('.swiper-pagination-bullet')
		swiper5.on('slideChange', function () {
			bullets[swiper5.realIndex].classList.add('current')
		})
	}


	const swiper6 = new Swiper('#swiper-about', {
		spaceBetween: 8,
		slidesPerView: "auto",
		navigation: {
			nextEl: '.swiper-about__nav .swiper-button-next',
			prevEl: '.swiper-about__nav .swiper-button-prev',
		},
	})

	if (window.innerWidth > 767) {
		const swiper8 = new Swiper('#swiper-team', {
			spaceBetween: 16,
			slidesPerView: "auto",
			navigation: {
				nextEl: '.team-nav .swiper-button-next',
				prevEl: '.team-nav .swiper-button-prev',
			}
		})
	}


	const swiper10 = new Swiper('#swiper-staff', {
		slidesPerView: "auto",
		spaceBetween: 28,
		navigation: {
			nextEl: ".staff__head .swiper-button-next"
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

		})

		const swiper7 = new Swiper('#swiper-leisure', {
			slidesPerView: 1,
		})
		const swiper11 = new Swiper('#swiper-gallery', {
			slidesPerView: 1,
			autoHeight: true,
			pagination: {
				el: ".swiper-pagination",
				type: "bullets"
			}
		})
		const swiper12 = new Swiper('#swiper-vacansion', {
			slidesPerView: 1,
			autoHeight: true,
		})

		const swiper13 = new Swiper('#swiper-advantages', {
			slidesPerView: 1,
			spaceBetween: 8,
			grid: {
				rows: 2,
				fill: "row"
			},
		})
	}

	const swiper14 = new Swiper('#swiper-reviews', {
		slidesPerView: "auto",
		spaceBetween: 24,
		navigation: {
			nextEl: '.reviews__nav .swiper-button-next',
			prevEl: '.reviews__nav .swiper-button-prev',
		},
		scrollbar: {
			el: "#swiper-reviews .swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			0: {
				spaceBetween: 8,
			},
			768: {
				spaceBetween: 24,
				slidesPerView: "auto",
			}
		}
	})

	// const btnsOpenModal = document.querySelectorAll('.clubs .showModal1')
	// btnsOpenModal.forEach(btn => {
	// 	btn.addEventListener('click', function () {
	// 		const titleClub = btn.closest('.swiper-slide').querySelector('.clubs__title').textContent
	// 		document.querySelector('.modal__title span').innerHTML = titleClub;
	// 	})
	// })

	// цветные кнопки
	const btnColor = document.querySelectorAll('.clubs__item .btn')
	const lenghtBtn = btnColor.length
	const colors = ['#F3AADB', '#F5C356', '#94D388', '#ABB8DA', '#F5C356'];

	for (var i = 0; i <= lenghtBtn; i++) {
		// btnColor[i].style.backgroundColor = colors[i]
		// btnColor[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

	}

	// AOS.init({});


	const footerWrap = document.querySelector('.footer__wrap')
	const footerSubscripe = document.querySelector('.footer__subscribe')
	const footerCenter = document.querySelector('.footer__center')
	const footerCopy = document.querySelector('.footer__copy')
	const footerBox = document.querySelector('.footer__box:last-child')
	const footerBottom = document.querySelector('.footer__bottom')
	if (window.innerWidth < 1000) {
		footerCenter.append(footerSubscripe)
		footerWrap.append(footerCenter)
		footerWrap.append(footerCopy)
		footerBox.append(footerBottom)
	}

	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuClose = document.querySelector('.menu__close')
	const overlay = document.querySelector('.overlay')
	burger.addEventListener('click', function () {
		// this.classList.toggle('active')
		menu.classList.toggle('active')
		overlay.classList.toggle('active');
		body.classList.toggle('hidden')
	})
	menuClose.addEventListener('click', function () {
		menu.classList.remove('active')
		overlay.classList.remove('active')
		body.classList.remove('hidden')
	})

	// 	const headerSocial = document.querySelector('.header__social')
	// 	if (window.innerWidth < 768) {
	// 		menu.append(headerSocial)
	// 	}
})

const menuItems = document.querySelectorAll('.menu__item')
if (window.innerWidth < 768) {
	menuItems.forEach(item => {
		item.addEventListener('click', function () {
			item.querySelector('.submenu').classList.toggle('show')
		})
	})
}


const scrollTop = document.querySelector('.scroll-top')
scrollTop.addEventListener('click', ev => {
	window.scrollTo(0, 0)
})
let showHideButton = function () {
	window.scrollY > 300
		? scrollTop.classList.add('vis')
		: scrollTop.classList.remove('vis')
}

window.addEventListener('scroll', showHideButton)
showHideButton()



window.addEventListener('scroll', showHideButton)
showHideButton()


$(document).ready(function () {
	$('.marquee').marquee();
	$(".fancybox").fancybox();

	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		iframe: {
			preload: false
		}
	});
	$(".fancybox-video").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	})
});

const btnsOpenModal1 = document.querySelectorAll('.showModal1')
const btnsOpenModal2 = document.querySelectorAll('.showModal2')
const modal1 = document.querySelector('#modal1')
const modal2 = document.querySelector('#modal2')
const overlay = document.querySelector('.overlay')

const modal = document.querySelectorAll('.modal')
modal.forEach(modal => {
	const modalBtnClose = modal.querySelector('.modal__close')
	modalBtnClose.addEventListener('click', function (e) {
		e.preventDefault()
		modal.classList.remove('active')
		overlay.classList.remove('active')
	})
})

btnsOpenModal1.forEach(btn => {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		modal1.classList.add('active')
		overlay.classList.add('active')
	})
})

btnsOpenModal2.forEach(btn => {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		modal2.classList.add('active')
		overlay.classList.add('active')
	})
})

if (document.querySelectorAll('.modal-video').length > 0) {
	const modalVideo = document.querySelector('.modal-video')
	const btnShowModalVideo = document.querySelector('.main-block__play')
	const btnHiddenModalVideo = modalVideo.querySelector('.modal__close')
	btnShowModalVideo.addEventListener('click', function (e) {
		e.preventDefault()
		modalVideo.classList.add('active');
		overlay.classList.add('active')
	})

	btnHiddenModalVideo.addEventListener('click', function () {
		modalVideo.classList.remove('active');
		overlay.classList.remove('active')
	})
}



customSelect('select');

if (document.querySelector('.tab-container')) {
	tabs(document.querySelector('.tab-container'));
}

if (document.querySelector('.tab-container2')) {
	tabs(document.querySelector('.tab-container2'));
}

if (document.querySelectorAll('.accordion-container').length > 0) {
	new Accordion(".accordion-container");
}

