/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

	var MagicStuff = {
		init: function(){
			if ( $('#main.home').length ) {
				this.home(controller);
			} else if ( $('#main.about').length ) {
        this.about(controller);
      } else if ( $('#main.project').length ) {
        this.project(controller);
      }

      if ( $('.projects').length ) {
        this.projects(controller);
      }
		},
		about: function(controller){
      if(isMobile === false && winW >= 1024) {
        $('#main section.fixable').each(function(index, value) {

          var thisText      = $(value).find('.big-text-block p, .big-text-block h3'),
              thisContent   = $(value).find('.content-wrap'),
              fixTrigger    = 1 - (0.5 + ((thisText.height()/2)/winH)),
              unFixOffset   = thisContent.find('.image').height() - 100;

          var fixIt   = new TweenMax.to(thisText, 0.0001, {className: '+=fixed'});
          var unFixIt = new TweenMax.to(thisText, 0.0001, {position: 'absolute', bottom:'100px', top: 'auto', y:0});

          var fixScene = new ScrollMagic.Scene({
            triggerElement: value,
            triggerHook: fixTrigger,
            duration: 0
          }).setTween(fixIt)
          .addTo(controller);
          
          var unFixScene = new ScrollMagic.Scene({
            triggerElement: thisContent[0],
            triggerHook: 'onLeave',
            offset: unFixOffset,
            duration: 0
          }).setTween(unFixIt)
          .addTo(controller);
        });
      }
		},
    home: function(controller){
      //  Scene for 4 small texts : graphic design art direction
      var topEl = $('.landing .top'),
          bottomEl = $('.landing .bottom'),
          duration = $('.landing').height() / 2,
          textTween = TweenMax.to([topEl, bottomEl], 0.25, {y:-50,opacity:0,ease:Linear.easeNone});
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
		projects: function(controller){

      // See  ../scripts/ProjectsParallax.js

		},
    project: function(controller) {
      // Project image anim
      var el = $('#main .wrap > img'),
          duration = (winH / 3) * 2;
      if (isMobile === true) {duration = winH / 2}
      TweenMax.set(el, {y:50});
      el.each(function(index, value){
        var projectTween = TweenMax.to(value, 0.75, {y:0,ease:Power2.easeOut});
        var projectScene = new ScrollMagic.Scene({
          triggerElement: value,
          triggerHook: 'onEnter',
          duration: duration
        }).addTo(controller)
        .setTween(projectTween);
      });

      if (isMobile === false ) {
        // Project next/prev anim : 
        TweenMax.set('.block-prevnext', {opacity:0, display:'none', visibility:'hidden'});
        var prevnextTween = new TweenMax.fromTo('.block-prevnext', 0.5, {opacity:0, display:'none', visibility:'hidden'}, {opacity:1, display:'block', visibility:'visible'});
        var prevnextScene = new ScrollMagic.Scene({
          triggerElement: 'header',
          triggerHook:    'onLeave',
          duration:        250,
          offset:          50
        }).addTo(controller)
        .setTween(prevnextTween);
      }
    }
	};
	MagicStuff.init();
})();
