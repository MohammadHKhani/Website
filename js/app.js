const $ = document

const navbarMobileToggle = $.querySelector('.nav__mobile-toggle'),
navbarMobileMenu = $.querySelector('.mobile-nav'),
navbarMobileCloseBtn = $.querySelector('.mobile-nave__close-btn'),
cover = $.querySelector('.cover'),
scrollToTopBtn = $.querySelector('.scroll-to-top')

function navbarMobileActions () {
    navbarMobileToggle.classList.toggle('nav__mobile-toggle--active')
    navbarMobileMenu.classList.toggle('mobile-nav--active')
    cover.classList.toggle('cover--active')
}

navbarMobileToggle.addEventListener('click', () => navbarMobileActions())

navbarMobileCloseBtn.addEventListener('click', () => {
    navbarMobileActions()
})

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.addEventListener('click', e => {
    if (e.target.classList.contains('cover')) {
        navbarMobileActions()
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        scrollToTopBtn.classList.add('scroll-to-top--active')
    }
    else {
        scrollToTopBtn.classList.remove('scroll-to-top--active')
    }
})

AOS.init({
    duration: 1000,
    offset: 250,
});

const headerSlider = new Swiper('.header-houses', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1400: {
            slidesPerView: 2,
        }
    }
})

const recommendationSlider = new Swiper('.recommendation__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".recommendation__slider-btn--next",
        prevEl: ".recommendation__slider-btn--prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    }
})

const reviewSlider = new Swiper('.review__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".review__pagination",
        clickable: true,
    },
    breakpoints: {
        1400: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 1.5,
        },
    }
})