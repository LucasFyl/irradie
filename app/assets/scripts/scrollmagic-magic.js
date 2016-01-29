/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

	var MagicStuff = {
		init: function(){
			if ( $('#main.home').length ) {
				this.home(controller);
			}
		},
		about: function(controller){
			console.log('controller:',controller);
		},
    home: function(controller){
			console.log('controller:',controller);
      //  Scene for 4 small texts : graphic design art direction
      var topEl = $('.landing .top'),
          bottomEl = $('.landing .bottom'),
          duration = $('.landing').height() / 2,
          textTween = TweenMax.to([topEl, bottomEl], 0.25, {top:'-=10rem',opacity:0,ease:Linear.easeNone});
      var landingTextScene = new ScrollMagic.Scene({
      		triggerElement: '#main',
      		triggerHook: 'onEnter',
      		duration: duration,
          offset: 0
      	}).addTo(controller)
      	.setTween(textTween);
        // Scene for the logo
      var logo = $('.landing .logo-wrap'),
          cover = $('.landing .cover'),
          duration1 = $('.landing').height(),
          logoTween = TweenMax.to(logo, 0.25, {top:'-=40rem',ease:Linear.easeNone});
      var logoScene = new ScrollMagic.Scene({
      		triggerElement: '#main',
      		triggerHook: 'onEnter',
      		duration: duration1,
          offset: 50
      	}).addTo(controller)
      	.setTween(logoTween);
      // Splash scene
      var splash = $('.landing .fixed-wrap'),
          duration2 = $('.landing').height() / 1.6,
          splashTween = TweenMax.to(splash, 0.25, {top:'-=8rem',opacity:0,ease:Linear.easeNone});
      var splashScene = new ScrollMagic.Scene({
          triggerElement: '#main',
          triggerHook: 'onEnter',
          duration: duration2,
          offset: 50
        }).addTo(controller)
        .setTween(splashTween);

		},
		work: function(controller){
			// var UJheight = $('article.first').height();
			// var UJTween1 = new TweenMax.to('article.first .big', 0.25, {top:'-=60rem',ease:Linear.easeNone});
			// var UJTween2 = new TweenMax.to('article.first .small', 0.25, {top:'-=20rem',ease:Linear.easeNone});
			// var UJscene1 = new ScrollMagic.Scene({
			// 		triggerElement: 'article.first',
			// 		triggerHook: 'onLeave',
			// 		duration: UJheight
			// 	}).addTo(controller)
			// 	.setTween(UJTween1);
			// var UJscene2 = new ScrollMagic.Scene({
			// 		triggerElement: 'article.first',
			// 		triggerHook: 'onLeave',
			// 		duration: UJheight
			// 	}).addTo(controller)
			// 	.setTween(UJTween2);
		}
	};
	MagicStuff.init();
})();
