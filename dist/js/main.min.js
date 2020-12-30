(function ($) {

    $('.section__quote-slider').slick({
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    arrow: false
                }
            }
        ]
    });

    $('.section__sectors-slider').slick({
        slidesToShow: 3.5,
        infinite: false,
        arrow: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.5
                }
            }
        ]
    });

})(jQuery);