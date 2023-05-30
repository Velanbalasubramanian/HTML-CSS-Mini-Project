$( '.common-ho .navbar-nav li a' ).on( 'click', function () {
  
	$( '.common-ho .navbar-nav' ).find( 'li a.active' ).removeClass( 'active' );
	$( this ).parent( 'a' ).addClass( 'active' );
});


  $(document).ready(function () {
    $("#customers-testimonials2").owlCarousel({
      loop: true,
      items: 4,
      margin: 20,
      autoplay: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navigation: true,
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        768: {
          items: 2,
        },
        991: {
          items: 4,
        },
        1340: {
          items: 4,
        },
        1600: {
          items: 4,
        },
        1920: {
          items: 4,
        },
      },
    });
  });

  jQuery(document).ready(function ($) {
    "use strict";
    $("#customers-testimonials1").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        768: {
          items: 1,
        },
        991: {
          items: 1,
        },
        1340: {
          items: 1,
        },
        1600: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });
  });

  $(".clientswrap").hide();
  $(".client-ples").click(function () {
    $(".clientswrap").show("1000");
    $("#customers-testimonials2").hide();
  });
  $(".clients-close-icon").click(function () {
    $(".clientswrap").hide();
    $("#customers-testimonials2").show("1000");
  });
