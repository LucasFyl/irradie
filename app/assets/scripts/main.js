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
	window.onresize = resize;
	if ( $('.cover').length ) {
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

$(document).ready(function(){
	'use strict';
 	initPage();
});
