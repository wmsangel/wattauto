$(function (){
    var body = $('body');

    // mobile menu
    body.on('click', '.js-mobile-menu-btn', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $('.js-mobile-nav').toggleClass('is-opened')
    })


    // hero
    if ( $('.js-hero-slider').length ) {
        const hero = new Swiper('.js-hero-slider', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '.js-hero-slider .swiper-button-next',
                prevEl: '.js-hero-slider .swiper-button-prev',
            },
            scrollbar: {
                el: '.js-hero-slider .swiper-scrollbar',
            },
        });
    }

    // top sale
    if ( $('.js-top-sale').length ) {
        const topSale = new Swiper('.js-top-sale', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 26,
            navigation: {
                nextEl: '.js-top-sale-nav.swiper-button-next',
                prevEl: '.js-top-sale-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-top-sale .swiper-scrollbar',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                }
            }
        });
    }

    // more news
    if ( $('.js-more-news').length ) {
        const moreNews = new Swiper('.js-more-news', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 26,
            navigation: {
                nextEl: '.js-more-news-nav.swiper-button-next',
                prevEl: '.js-more-news-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-more-news .swiper-scrollbar',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                }
            }
        });
    }

    // more articles
    if ( $('.js-more-articles').length ) {
        const moreArticles = new Swiper('.js-more-articles', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 26,
            navigation: {
                nextEl: '.js-more-articles-nav.swiper-button-next',
                prevEl: '.js-more-articles-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-more-articles .swiper-scrollbar',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2
                }
            }
        });
    }

    // features
    if ( $('.js-features-step-2').length ) {
        const featuresStep = new Swiper('.js-features-step-2', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-features-step-2-nav.swiper-button-next',
                prevEl: '.js-features-step-2-nav.swiper-button-prev',
            },
        });
    }

    // features
    if ( $('.js-brands-list').length ) {
        const brandsList = new Swiper('.js-brands-list', {
            slidesPerView: 11,
            spaceBetween: 80,
            navigation: {
                nextEl: '.js-brands-list-nav.swiper-button-next',
                prevEl: '.js-brands-list-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-brands-list-nav.swiper-scrollbar',
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                767: {
                    slidesPerView: 8,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 8,
                    spaceBetween: 80,
                },
                1200: {
                    slidesPerView: 11,
                    spaceBetween: 80,
                }
            }
        });
    }

    // filters
    body.on('click', '.js-filter-block-btn', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $(this).next('.js-filter-block-list').slideToggle();
    })
    body.on('click', '.js-filter-btn', function (e) {
        e.preventDefault();
        $('.js-filters').toggleClass('is-opened');
    })


    // fancybox
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }


    // product page
    if ( $('.js-product-page-gallery').length ) {
        const productPageGallery = new Swiper('.js-product-page-gallery', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-product-gallery-nav.swiper-button-next',
                prevEl: '.js-product-gallery-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-product-page-gallery .swiper-scrollbar',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }
        });
    }

    if ( $('.js-car-color-body-gallery').length ) {
        $('.js-car-color-body-gallery').each(function () {
            let idGallery = $(this).data('gallery');
            const carColorChoice = new Swiper('.js-car-color-body-gallery[data-gallery="'+idGallery+'"]', {
                loop: true,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.js-car-color-body-gallery[data-gallery="'+idGallery+'"] .swiper-button-next',
                    prevEl: '.js-car-color-body-gallery[data-gallery="'+idGallery+'"] .swiper-button-prev',
                },
            })
        })
    }

    if ( $('.js-car-color-interior-gallery').length ) {
        $('.js-car-color-interior-gallery').each(function () {
            let idGallery = $(this).data('gallery');
            const carColorChoice = new Swiper('.js-car-color-interior-gallery[data-gallery="'+idGallery+'"]', {
                loop: true,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.js-car-color-interior-gallery-nav[data-gallery="'+idGallery+'"].swiper-button-next',
                    prevEl: '.js-car-color-interior-gallery-nav[data-gallery="'+idGallery+'"].swiper-button-prev',
                },
            })
        })
    }


    // TABS
    body.on('click', '.js-tab-btn', function (e) {
        e.preventDefault();
        if ($(this).data('color-name') !== undefined) {
            let colorName = $(this).data('color-name');
            $('.js-car-body-color-name').html(colorName)
        }
        let tabID = $(this).data('tab-id');
        let groupGallery = $(this).data('tab-group');
        if (!$(this).hasClass('is-selected')) {
            $('.js-tab-content[data-tab-group="'+groupGallery+'"], .js-tab-btn[data-tab-group="'+groupGallery+'"]').removeClass('is-selected');
            $(this).addClass('is-selected');
            $('.js-tab-content[data-tab-group="'+groupGallery+'"][data-tab-id="'+tabID+'"], .js-tab-btn[data-tab-group="'+groupGallery+'"][data-tab-id="'+tabID+'"]').addClass('is-selected');
        }
    })
})


// PHONE MASK
$(function () {
    //+7 (XXX) XXX-XX-XX
    if ($('.js-phone').length > 0) {
        var trigger = false;
        var options = {
            'translation': {
                C: {
                    pattern: /[7]/
                },
                M: {
                    pattern: /[9,7,5,3,2]/
                },
                L: {
                    pattern: /[9,7,5]/
                }
            },
            onKeyPress: function onKeyPress(cep, e, field, options) {
                var masks = ['+7 (000) 000-00-00'];
                if (cep.length === 8) {
                    trigger = true;
                }
                if (cep.length < 8) {
                    trigger = false;
                }
                var mask = cep.length > 7 && trigger ? masks[0] : masks[0];
            }
        };
        $('.js-phone').mask('+7 (000) 000-00-00', options);
    }
});