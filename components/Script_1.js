import Link from "next/link";
import jQuery from "jquery";
import $ from "jquery";

function Home() {
  if (typeof window !== "undefined") {
    jQuery(document).ready(function ($) {
      var mastheadheight = $(".ds-header").outerHeight();
      //console.log(mastheadheight);
      $(".ds-banner,.ds-main-section").css("margin-top", mastheadheight);

      $(window)
        .scroll(function () {
          if ($(window).scrollTop() >= 10) {
            $(".ds-header").addClass("ds-fixed-header");
          } else {
            $(".ds-header").removeClass("ds-fixed-header");
          }
        })
        .scroll();
    });

    // $(document).ready(function () {
    //   $(".filter-button").click(function () {
    //     var value = $(this).attr("data-filter");

    //     if (value == "all") {
    //       //$('.filter').removeClass('hidden');
    //       $(".filter").show("1000");
    //     } else {
    //       //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //       //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    //       $(".filter")
    //         .not("." + value)
    //         .hide("3000");
    //       $(".filter")
    //         .filter("." + value)
    //         .show("3000");
    //     }
    //   });

    //   if ($(".filter-button").removeClass("active")) {
    //     $(this).removeClass("active");
    //   }
    //   $(this).addClass("active");
    // });
  }

  return <div></div>;
}

export default Home;
