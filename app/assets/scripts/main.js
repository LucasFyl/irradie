/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
var isMobile = false; //initiate as false

$(document).ready(function(){
	'use strict';

 	initPage();
 	window.onresize = resize;
 });

// Page load event
function initPage(){
	'use strict';

	// detectMobile();
	// hideLoader();

	if ( $('#content.villas').length ) {
		initSlickSliders();
	}
	// } else if ( $('#content.work').length ) {
	// } else if ( $('#content.about').length ) {
	// } else if ( $('#content.contact').length ) {
	// }
}
function initSlickSliders() {
	'use strict';
	$('.main article').each(function(){
		var _this = $(this),
				slidernav = _this.find('.slider-nav'),
				sliderfor = _this.find('.slider-for');
		sliderfor.slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: slidernav
		});
		slidernav.slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: sliderfor,
		  dots: false,
		  centerMode: false,
		  focusOnSelect: true,
			draggable: false
		});

	});
	// $('.slider-for').each(function(){
	// 	var _this = $(this);
	// 	_this.slick({
	// 	  slidesToShow: 1,
	// 	  slidesToScroll: 1,
	// 	  arrows: false,
	// 	  fade: true,
	// 	  asNavFor: '.slider-nav'
	// 	});
	// });
	// $('.slider-nav').each(function(){
	// 	var _this = $(this);
	// 	_this.slick({
	// 	  slidesToShow: 5,
	// 	  slidesToScroll: 1,
	// 	  asNavFor: '.slider-for',
	// 	  dots: false,
	// 	  centerMode: false,
	// 	  focusOnSelect: true
	// 	});
	// });
}
function detectMobile(){
	'use strict';

	// device detection
	if( $('.isMobile').is(':visible') ) {
	 	isMobile = true;
	 	TweenMax.set('html',{overflowX:'hidden',position:'relative'});
	}

	if (isMobile === true) {
		console.log('isMobile:',isMobile);
	} else {
		console.log('isMobile:',isMobile);
	}

}
function hideLoader(){
	'use strict';

}
function resize() {
	'use strict';

}
function initSlider() {
	'use strict';

}
function landingAnimHome() {
	'use strict';

	// var landingTl = new TimelineMax({paused:true});
	// TweenMax.set('.menu .menu-trigger, .center span.title, .social li', {y:-30,opacity:0});
	// TweenMax.set('.center h1', {y:20,opacity:0});
	// TweenMax.set('.center a', {opacity:0,scale:0.5});

	// landingTl.to('.menu .menu-trigger', 0.25, {y:0,opacity:1,ease:Power3.easeOut})
	// 		 .staggerTo('.social li', 0.25, {y:0,opacity:1,ease:Power3.easeOut}, 0.1, '-=0.25')
	// 		 .staggerTo('.center span.title, .center h1', 0.5, {y:0,opacity:1,ease:Power2.easeOut}, 0.2)
	// 		 .to('.center a', 0.5, {opacity:1,scale:1,ease:Power2.easeOut});

	// setTimeout(function(){landingTl.play();}, 200);
}
