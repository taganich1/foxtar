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
    
    

    $('.slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:false
    });

    $(" .tabs__wrapper .tab").click(function() {
        $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.menu__btn').click(function(){
        $('.menu ul').slideToggle();
    })

    var mixer = mixitup('.products-new__container');

});

