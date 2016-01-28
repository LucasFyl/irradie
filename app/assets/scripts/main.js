/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
var isMobile = false;
var controller = new ScrollMagic.Controller();
// Page load event
function initPage(){
	'use strict';
	detectMobile();
	hideLoader();
	initMenu();
	window.onresize = resize;
	if ( $('#main.home').length ) {

    if($(window).width()>950){
      setTimeout(splashHome.init,250);
    }

		$('body').on('mouseenter', '.landing .logo-wrap', function(){
				TweenMax.to('.cover', 0.5, {opacity:1,ease:Expo.easeOut});
		});
		$('body').on('mouseleave', '.landing .logo-wrap', function(){
				TweenMax.to('.cover', 0.5, {opacity:0,ease:Expo.easeOut});
		});
	}
	if ( $('.projects').length ) {
		// initScroll();
	}
}
function detectMobile(){
	'use strict';
	// Simple media-query to detect screen size, no user-agent sniffing
	if( $('.isMobile').is(':visible') ) {
	 	isMobile = true;
	 	TweenMax.set('html',{overflowX:'hidden',position:'relative'});
	}
}
function hideLoader(){
	'use strict';
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Expo.easeOut});
}
function resize() {
	'use strict';
	// Manage resize exception
}
function initScroll() {
		'use strict';
		var el = $('.projects figure');
		var parentH = el.parent().height();
		var tween = new TweenMax.to(el, 0.25, {paddingTop:'-=50rem',ease:Linear.easeNone});
		var UJscene1 = new ScrollMagic.Scene({
				triggerElement: '.projects',
				duration: parentH
			}).addTo(controller)
			.setTween(tween);
}
function initMenu() {
	'use strict';
	$('.menu-trigger').on('click', function(e){
		e.preventDefault();
		$('body').addClass('locked');
		TweenMax.to('#menu', 1, {opacity:1,display:'block',ease:Expo.easeOut});
		TweenMax.fromTo('#menu .half a', 0.5, {y:50,opacity:0}, {y:0,opacity:1,ease:Expo.easeOut,delay:0.6});
	});
	$('#menu .close').on('click', function(e){
		e.preventDefault();
		$('body').removeClass('locked');
		TweenMax.to('#menu .half a', 0.35, {y:50,opacity:0,ease:Expo.easeIn});
		TweenMax.to('#menu', 1, {opacity:0,display:'none',ease:Expo.easeIn,delay:0.35});
	});
}

$(document).ready(function(){
	'use strict';
 	initPage();
});
