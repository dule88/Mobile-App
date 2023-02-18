/* --- OWL CAROUSEL ---- */

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 2000,
    // dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
});


/* --- ACTIVE LINK ---- */

jQuery(function($) {
    var path = window.location.href;
    $("ul a").each(function() {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });
});