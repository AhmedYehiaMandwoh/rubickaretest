
jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        rtl: true,
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        // autoplayHoverPause:true,
        responsive: {
            600: {
                items: 1
            }
        }
    });

});
if ($('.features-slider').length > 0) { $('.features-slider').slick({ rtl: true, dots: true, infinite: false, centerMode: true, slidesToShow: 1, speed: 500, variableWidth: true, arrows: false, autoplay: true, responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }] }); }
