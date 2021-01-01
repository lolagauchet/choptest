(function ($) {

    // QUOTE SLIDER
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
    // SECTOR SLIDER 
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
    // FAQ 
    $(document).on("click", ".js_faq", function () {
        $(this).siblings().removeAttr("open");
    });

    // NEWS LISTING TAG 
    $(document).on("click", ".js_tag", function () {
        var $tag = $(this).attr('data-tag');
        $(this).addClass('active').siblings().removeClass('active');
        $('.js_news').removeClass('active');
        $('.js_news').each(function () {
            $itemTag = $(this).attr('data-tag');
            // chech if item tag is the same as the tag selected
            if ($tag === $itemTag || $tag === 'all') {
                $(this).addClass('active')
            }
        });
        // check the number of items showed
        $activeNb = $('.js_news.active').length;
        if ($activeNb == 0) {
            $('.js_news_list').prepend("<span class='js-no-result'>No news matching this tag</span>")
        } else {
            $('.js-no-result').remove()
        }
    });

})(jQuery);