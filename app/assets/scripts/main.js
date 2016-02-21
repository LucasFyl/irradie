/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
var Spash;
var isMobile = false;
var controller = new ScrollMagic.Controller();
var landingTl = new TimelineMax();

// Page load function
function initPage(){
	'use strict';
	detectMobile();

	window.onresize = resize;

	if ( $('#main.home').length ) {
		SplashHome.init();
		landingHomeTl();
	} else if ( $('#main.about').length ) {
		TweenMax.fromTo('#main.about', 1, {backgroundColor: 'white'}, {backgroundColor: 'black', ease: Power2.easeOut, delay: 0.75});
		// TweenMax.fromTo('.intro .image', 1, {y:50,opacity:0}, {y:0,opacity:1,ease: Power2.easeOut, delay: 0.75});
	} else if ( $('#main.project').length ) {
		TweenMax.set(window, {scrollTo:0});
		landingProjectTl();
		initNextPrev();
	}

	if( $('.projects').length ) {
		setTimeout(ProjectsParallax.init, 200);
	}


	if( $('.newsletter').length ) {
		setTimeout(initNewsletter, 100);
	}

	setTimeout(hideLoader, 250);
	setTimeout(setFooter, 300);
	setTimeout(initMenu, 300);
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
	TweenMax.to('#loader', 1, {opacity:0,visibility:'hidden',display:'none',ease:Power2.easeOut});
}
function resize() {
	'use strict';
	// Manage resize exception
	setTimeout(function(){
		setFooter();
	}, 250);
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
	var isSplash = false;
	// openMenu
	$(document).on('click', '.menu-trigger', function(e){
		e.preventDefault();
		//  Temp fix for overlaping landing on home page
		if($('#main.home').length && isMobile === false) {
			if ( $(window).scrollTop() < $(window).height() ) {
				TweenMax.to(window, 0.25, {scrollTo: $(window).height(),ease:Power2.easeOut});
			}
		}
		$('body').addClass('locked');
		TweenMax.to('#menu', 1, {delay:0.25,opacity:1,visibility:'visible',ease:Expo.easeOut});
		TweenMax.fromTo('#menu .half a', 0.5, {y:50,opacity:0}, {y:0,opacity:1,ease:Expo.easeOut,delay:0.6,onComplete:function(){
			$('.half').addClass('ready');
			TweenMax.to('.half:first .cover', 0.5, {opacity:1,ease:Power2.easeOut});
			Splash.init();
			isSplash = true;
		}});
	});
	// closeMenu
	$(document).on('click', '#menu .close', function(e){
		e.preventDefault();
		$('.half').removeClass('ready');
		$('body').removeClass('locked');
		TweenMax.to('#menu .half a', 0.35, {y:50,opacity:0,ease:Expo.easeIn});
		TweenMax.to('#menu', 0.5, {opacity:0,visibility:'hidden',ease:Expo.easeIn});
		if(isSplash) isSpash = false;
		$('#menu .half').off('mousemove');
	});
	// Menu hover effect :
	$(document).on({
    mouseenter: function () {
		var target = $(this).next('.cover');
		TweenMax.to(target,0.5,{opacity:1,ease:Power2.easeInOut});
		if(!isSplash) Splash.init();
    },

    mouseleave: function () {
		var target = $(this).next('.cover');
		TweenMax.to(target,0.5,{opacity:0,ease:Power2.easeInOut});
		$('#menu .half').off('mousemove');
		isSplash = false;
    }
	}, '.half.ready > a');
}
function setFooter() {
	'use strict';
	var footerH = $('footer').height() + 80;
	if ($('#main.home').length && isMobile === false) {
		var mb = $(window).height() + footerH
		TweenMax.set('body', {marginBottom:mb});
	} else {
		TweenMax.set('body', {marginBottom:footerH});
	}
	TweenMax.set('footer', {position:'fixed', height:footerH});
}
function initNextPrev() {
	'use strict';
	// var isVisible = false;
	var onEnter   = new TimelineMax();
	var onLeave   = new TimelineMax();
	var _this, imgWrap, img, text;

	$(document).on({
	    mouseenter: function () {
	    	if( $(this).is(':visible')) {
	    		_this   = this,
	    		text    = $(_this).find('.title-block'),
	    		imgWrap = $(_this).find('.img-wrap'),
	    		img     = imgWrap.find('img');

		    	onEnter
				  	.to(_this, 0.5, {width:'18rem',ease:Power2.easeOut})
				  	.to(text, 0.25, {opacity:0,ease:Power2.easeInOut}, '-=0.5')
		    		.set(imgWrap, {visibility:'visible'})
				  	.staggerFromTo(img, 0.25, {opacity:0,y:30}, {opacity:1,y:0,ease:Power2.easeOut}, 0.1);
				
				if ( $(_this).is('.prev') ) {
					TweenMax.to('#main .wrap, header, footer, .next', 0.5, {x:115,ease:Power2.easeOut});
				} else {
					TweenMax.to('#main .wrap, header, footer, .prev', 0.5, {x:-115,ease:Power2.easeOut});
				}
				onEnter.play();
	    	}
		    	
	    },
	    mouseleave: function () {
	    	_this   = this,
			text    = $(_this).find('.title-block'),
    		imgWrap = $(_this).find('.img-wrap'),
    		img     = imgWrap.find('img');

			onLeave
			  	.to(img, 0.25, {opacity:0,y:20,ease:Power2.easeIn})
			  	.to(_this, 0.25, {width:'8.8rem',ease:Power2.easeIn})
			  	.to(text, 0.25, {opacity:1,ease:Power2.easeInOut})
				.set(imgWrap, {visibility:'hidden'});
			
			if ( $(_this).is('.prev') ) {
				TweenMax.to('#main .wrap, header, footer, .next', 0.25, {x:0,ease:Power2.easeIn});
			} else {
				TweenMax.to('#main .wrap, header, footer, .prev', 0.25, {x:0,ease:Power2.easeIn});
			}
			onLeave.play();
	    }
	}, '.block-prevnext');

	// TODO: test this,  might be useless
	$('.block-prevnext').off('mouseenter, mouseleave');
}
function landingProjectTl() {
	'use strict';
	landingTl
		.set('.share li', {y:20,opacity:0,delay:0.25})
		.set('header, .block-prevnext', {opacity:0})
		.set('.wrap img', {opacity:0})
		.staggerFromTo('.infos h1, .infos .client', 0.5, {y:50,opacity:0}, {y:0,opacity:1,ease:Power2.easeOut}, 0.1)
		.staggerTo('.share li', 0.25, {y:0,opacity:1,ease:Power2.easeOut}, 0.1)
		.to('.wrap img', 0.5, {opacity:1})
		.fromTo('header', 0.5, {y:-50,opacity:0}, {y:0,opacity:1,ease:Power2.easeOut}, '-=1')
		.play();
}
function landingHomeTl() {
	'use strict';
	landingTl
		.set('.top, .bottom', {y:20,opacity:0})
		.set('.landing .logo-wrap', {y:'-60%',opacity:0})
		.set('.fixed-wrap', {opacity:0})
		.staggerTo('.top, .bottom', 0.25, {delay:0.5,y:0,opacity:1,ease:Power2.easeOut}, 0.1)
		.to('.landing .logo-wrap', 0.5, {y:'-50%',opacity:1,ease:Power3.easeOut})
		.to('.fixed-wrap', 1.5, {opacity:1,ease:Power1.easeOut})
		.play();
}
function initNewsletter() {
	$('.newsletter').each(function(index, value) {
		var _this = $(value),
			form = _this.find('form'),
			link = _this.find('a');
		link.on('click', function(e){
			e.preventDefault();
			link.hide();
			form.show();
		});

	});
}
$(document).ready(function(){
	'use strict';
 	initPage();
});
