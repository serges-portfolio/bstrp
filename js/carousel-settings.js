$(document).ready(function(){
    $(".our-team__team-slider").slick({
        dots: true,
        infinite: true,
        //autoplay: true,
        slide: ".our-team__team-slide",
        arrows: true,
        prevArrow:$(".our-team__previous-button"),
        nextArrow:$(".our-team__next-button"),
        slidesToShow: 1,
        slidesToScroll: 1,
        /*asNavFor: ".our-team__team-slider-mini",*/
        /*responsive: [
            {
                breakpoint: 477,
                settings: {
                    slidesToShow: 1
                }
            }
        ]*/
    });
    $(".our-team__team-slider-mini").slick({
        slide: ".our-team__team-mini-slide",
        slidesToShow: 5,
        slidesToScroll: 0,
        asNavFor: ".our-team__team-slider",
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        /*responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]*/
    });
});

