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


    $(document).on("click", ".js_faq", function () {
        $(this).siblings().removeAttr("open");
    });

    $('.section__news-item').each(function () {
        console.log($(this).attr('data-tag'))
    });

    $(document).on("click", ".js_tag", function () {
        var $tag = $(this).attr('data-tag');

        $(this).addClass('active').siblings().removeClass('active');
        $('.js_news').removeClass('active');
        $('.js_news').each(function () {
            $itemTag = $(this).attr('data-tag');
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