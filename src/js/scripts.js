(function( root, $, undefined ) {
	"use strict";

function menuV() {
Tweenmax.staggerFrom('.cd-navigation',2,{scale:0},1);
}
$(".wrapper").ready(function(){
    window.pleaseWait({
        return finish();
    });
});
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
