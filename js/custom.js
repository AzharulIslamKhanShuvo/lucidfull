
//stick.js plug in code goes here
//initiating jQuery
jQuery(function($) {
    $(document).ready( function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
    });


//wow.js plug in code goes here
//initiating jQuery
jQuery(function($) {
    $(document).ready(function(){
       new WOW().init();
   });
});

// ----------------------------------------------------------------------
    // Owl-carousel
// ----------------------------------------------------------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})