(function( root, $, undefined ) {
	"use strict";

    $(document).ready(function(){
        console.log(
        $('.bxslider').bxSlider({
            auto: true
        })
);
        $('.bxslider').bxSlider({
            auto: true
        });
    });

	$(function () {
		// DOM ready, take it away
        $(".trigger").click(function(event) {
    event.preventDefault();
    $(".wrapper").toggleClass("is-open");
function toggleClass(elem, clase) {
  if (hasClass(elem, clase)) {
    removeClass(elem, clase);
  } else {
    addClass(elem, clase);
  }
}
toggleClass('wrapper','is-open');
});

	});

} ( this, jQuery ));
