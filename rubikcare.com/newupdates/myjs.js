
jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        // rtl:true,
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