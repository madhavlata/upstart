(function($) {
  $(window).load(function() {
    $("#navigation").sticky({ topSpacing: 0 });
  });
  wow = new WOW({ animateClass: "animated", offset: 0 });
  wow.init();
  $("ul.nav li.dropdown").hover(
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(200)
        .fadeIn(500);
    },
    function() {
      $(this)
        .find(".dropdown-menu")
        .stop(true, true)
        .delay(200)
        .fadeOut(500);
    }
  );
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
  $(function() {
    $(".navbar-nav li a").bind("click", function(event) {
      var $anchor = $(this);
      var nav = $($anchor.attr("href"));
      if (nav.length) {
        $("html, body")
          .stop()
          .animate(
            { scrollTop: $($anchor.attr("href")).offset().top },
            1500,
            "easeInOutExpo"
          );
        event.preventDefault();
      }
    });
    $("a.totop,a#btn-scroll,a.btn-slide").bind("click", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $($anchor.attr("href")).offset().top },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
  jQuery("#valera-slippry").slippry({ pager: false });
  $(".testimonialslide").flexslider({
    animation: "slide",
    slideshow: false,
    directionNav: false,
    controlNav: true
  });
  $("#owl-works").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 5],
    itemsDesktopSmall: [980, 5],
    itemsTablet: [768, 5],
    itemsTabletSmall: [550, 2],
    itemsMobile: [480, 2]
  });
  $(".owl-carousel .item a").nivoLightbox({
    effect: "fadeScale",
    theme: "default",
    keyboardNav: true,
    clickOverlayToClose: true,
    onInit: function() {},
    beforeShowLightbox: function() {},
    afterShowLightbox: function(lightbox) {},
    beforeHideLightbox: function() {},
    afterHideLightbox: function() {},
    onPrev: function(element) {},
    onNext: function(element) {},
    errorMessage:
      "The requested content cannot be loaded. Please try again later."
  });
  jQuery(".appear").appear();
  jQuery(".appear").on("appear", function(data) {
    var id = $(this).attr("id");
    jQuery(".nav li").removeClass("active");
    jQuery(".nav a[href='#" + id + "']")
      .parent()
      .addClass("active");
  });
  var runOnce = true;
  jQuery(".stats").on("appear", function(data) {
    var counters = {};
    var i = 0;
    if (runOnce) {
      jQuery(".number").each(function() {
        counters[this.id] = $(this).html();
        i++;
      });
      jQuery.each(counters, function(i, val) {
        jQuery({ countNum: 0 }).animate(
          { countNum: val },
          {
            duration: 3000,
            easing: "linear",
            step: function() {
              jQuery("#" + i).text(Math.floor(this.countNum));
            }
          }
        );
      });
      runOnce = false;
    }
  });
  if ($("#parallax1").length || $("#parallax2").length) {
    $(window).stellar({
      responsive: true,
      scrollProperty: "scroll",
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });
  }
  $(".bg-player").mb_YTPlayer();
  $("#js-rotating").Morphext({
    animation: "fadeInDown",
    separator: ",",
    speed: 3000
  });
  $("html").niceScroll({
    zindex: 999,
    cursorborder: "",
    cursorborderradius: "0px",
    cursorwidth: "10px",
    cursorcolor: "#555",
    cursoropacitymin: 0.5
  });
  function initNice() {
    if ($(window).innerWidth() <= 960) {
      $("html")
        .niceScroll()
        .remove();
    } else {
      $("html").niceScroll({
        zindex: 999,
        cursorborder: "",
        cursorborderradius: "2px",
        cursorcolor: "#555",
        cursoropacitymin: 0.1
      });
    }
  }
  $(window).load(initNice);
  $(window).resize(initNice);
})(jQuery);
$(window).load(function() {
  $(".loader")
    .delay(300)
    .fadeOut();
  $("#page-loader")
    .delay(500)
    .fadeOut("slow");
  $(".overlay")
    .delay(300)
    .fadeOut();
});
