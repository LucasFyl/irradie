/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

	var MagicStuff = {
		init: function(){
			if ( $('#main.home').length ) {
				this.home(controller);
			} else if ( $('#main.about').length ) {
        // this.about(controller);
      } else if ( $('#main.project').length ) {
        this.project(controller);
      }

      if ( $('.projects').length ) {
        this.projects(controller);
      }
		},
		about: function(controller){
      var el = $('.gallery');
      var duration = $(window).height() / 2.3;
      var limit1, limit2;
      var galleryTween;

      setTimeout(function(){
        el.each(function(index,value) {
          // namespace
          var element = $(value),
              wrap = element.find('.wrap');
          // define sizes for calc
          var foo = wrap.width(),
              bar = element.find('figure.infos').width();

          if ( element.is('.gallery-1') ) {
            // define limit scroll-x : - (container width - .infos width)
            limit1 = foo - bar; limit1 = -limit1;
            // define tween per gallery
            galleryTween = new TweenMax.to(wrap, 0.25, {left:limit1,ease:Linear.easeNone});
          } else if ( element.is('.gallery-2') ) {
            limit2 = foo - bar; limit2 = -limit2;
            galleryTween = new TweenMax.to(wrap, 0.25, {left:limit2,ease:Linear.easeNone});
          }

          // Scroll animation scene :
          var galleryScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.3,
            duration: duration,
            offset: 0
          }).addTo(controller)
          .setTween(galleryTween);
        });
      },1000);

      // var winH =  $(window).height(),
      //     halfWinH = winH / 2;
      // var slowBody = new TweenMax.to('html, body', 1, {scrollTo:'-='+halfWinH,ease:Linear.easeNone});
      // var slowScroll = new ScrollMagic.Scene({
      //   triggerElement: '.gallery',
      //   triggerHook: 0.5,
      //   duration: halfWinH
      // }).addTo(controller)
      // .setTween(slowBody);
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

        // // Projects 'parallax' style anim:
        // var el = $('.projects figure'),
        //     length = el.length;
        // var duration = $(window).height() * 1.5;
        // TweenMax.set(el, {y:50});

        // // Pour chaque figure dans .projects, when reaches 0.25 viewport anim y :
        // for (var i = 0; i < length; i++) {
        //   var element = el[i];
        //   var tween = TweenMax.to(element, 0.75, {y:0,ease:Power2.easeOut});
        //   var projectsTween = new ScrollMagic.Scene({
        //     triggerElement: element,
        //     triggerHook: 0.25,
        //     duration: duration
        //   }).addTo(controller)
        //   .setTween(tween);
        // }
		},
    project: function(controller) {
      // Project image anim
      var el = $('#main .wrap > img'),
          duration = $(window).height();
      TweenMax.set(el, {y:50});
      el.each(function(index, value){
        var projectTween = TweenMax.to(value, 0.75, {y:0,ease:Power2.easeOut});
        var projectScene = new ScrollMagic.Scene({
          triggerElement: value,
          triggerHook: 0.8,
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
