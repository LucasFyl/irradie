/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

	var MagicStuff = {
		init: function(){
			if ( $('#main.home').length ) {
				this.home(controller);
			}
      if ( $('#main.about').length ) {
        this.about(controller);
      }

      if ( $('.projects').length ) {
        this.projects(controller);
      }


		},
		about: function(controller){
      var el = $('.gallery');
      var duration = $(window).height();
      // For each gallery, trigger horizontal scroll when in viewport until it leaves:
      el.each(function(index, value){
        var element = $(value),
            wrap = element.find('.wrap');

        // var fixedPageTween = TweenMax.set('body', {overflow:'hidden'});
        var galleryTween = TweenMax.to(wrap, 0.25, {x:'-60%',ease:Linear.easeNone});
        var galleryScene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 'onEnter',
          duration: duration,
          offset: 0
        }).addTo(controller)
        .setTween(galleryTween);
      });
		},
    home: function(controller){
      //  Scene for 4 small texts : graphic design art direction
      var topEl = $('.landing .top'),
          bottomEl = $('.landing .bottom'),
          duration = $('.landing').height() / 2,
          textTween = TweenMax.to([topEl, bottomEl], 0.25, {top:'-=5rem',opacity:0,ease:Linear.easeNone});
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

        var el = $('.projects figure'),
            length = el.length;
        // var duration = $('.projects').height();
        var duration = $(window).height() * 1.5;
        TweenMax.set(el, {y:50});
        // Pour chaque figure dans .projects, when reaches 0.25 viewport anim y :
        for (var i = 0; i < length; i++) {
          var element = el[i];
          var tween = TweenMax.to(element, 0.75, {y:0,ease:Power2.easeOut});
          var projectsTween = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.25,
            duration: duration
          }).addTo(controller)
          .setTween(tween);
        }
		}
	};
	MagicStuff.init();
})();
