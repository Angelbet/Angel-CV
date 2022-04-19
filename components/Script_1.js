import Link from "next/link";
import jQuery from "jquery";
import $ from "jquery"


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

        

        
      }
  
  return (
    <div>
      
    </div>
  );
}

export default Home;


