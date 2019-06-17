// (function($) {
//   $(window).load(function() {
//     $("#navigation").sticky({ topSpacing: 0 });
//   });
  wow = new WOW({ animateClass: "animated", offset: 0 });
  wow.init();
//   $("ul.nav li.dropdown").hover(
//     function() {
//       $(this)
//         .find(".dropdown-menu")
//         .stop(true, true)
//         .delay(200)
//         .fadeIn(500);
//     },
//     function() {
//       $(this)
//         .find(".dropdown-menu")
//         .stop(true, true)
//         .delay(200)
//         .fadeOut(500);
//     }
//   );
//   $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//       $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//       $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
//   });
//   $(function() {
//     $(".navbar-nav li a").bind("click", function(event) {
//       var $anchor = $(this);
//       var nav = $($anchor.attr("href"));
//       if (nav.length) {
//         $("html, body")
//           .stop()
//           .animate(
//             { scrollTop: $($anchor.attr("href")).offset().top },
//             1500,
//             "easeInOutExpo"
//           );
//         event.preventDefault();
//       }
//     });
//     $("a.totop,a#btn-scroll,a.btn-slide").bind("click", function(event) {
//       var $anchor = $(this);
//       $("html, body")
//         .stop()
//         .animate(
//           { scrollTop: $($anchor.attr("href")).offset().top },
//           1500,
//           "easeInOutExpo"
//         );
//       event.preventDefault();
//     });
//   });
//   jQuery(".appear").appear();
//   jQuery(".appear").on("appear", function(data) {
//     var id = $(this).attr("id");
//     jQuery(".nav li").removeClass("active");
//     jQuery(".nav a[href='#" + id + "']")
//       .parent()
//       .addClass("active");
//   });
//   var runOnce = true;
//   jQuery(".stats").on("appear", function(data) {
//     var counters = {};
//     var i = 0;
//     if (runOnce) {
//       jQuery(".number").each(function() {
//         counters[this.id] = $(this).html();
//         i++;
//       });
//       jQuery.each(counters, function(i, val) {
//         jQuery({ countNum: 0 }).animate(
//           { countNum: val },
//           {
//             duration: 3000,
//             easing: "linear",
//             step: function() {
//               jQuery("#" + i).text(Math.floor(this.countNum));
//             }
//           }
//         );
//       });
//       runOnce = false;
//     }
//   });
// })(jQuery);
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


// Accordions (Used in FAQs and Judging Criteria...)
var coll = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("activetoggle");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

