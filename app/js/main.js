$(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix:"$",
        skin:"round"
    });

    $('input, select').styler();

    var mixer = mixitup('.products-new__container');

    $('.slider__wrapper').slick({
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        dots: true
    });


    $(" .tabs__wrapper .tab").click(function() {
        $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});

