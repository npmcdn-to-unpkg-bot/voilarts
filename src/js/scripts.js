(function( root, $, undefined ) {
	"use strict";

    $(document).ready(function(){
        $('.bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            easing: 'ease'
        });
    });

	$(function () {
		// DOM ready, take it away
        $(".trigger").click(function(event) {
    event.preventDefault();
    console.log(event.type);
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
