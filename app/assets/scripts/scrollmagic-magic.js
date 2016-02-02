/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

	var MagicStuff = {
		init: function(){
			if ( $('#main.home').length ) {
				this.home(controller);
			}

      if ( $('.projects').length ) {
        this.projects(controller);
      }
		},
		about: function(controller){
			console.log('controller:',controller);
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

        // console.log(el, length);
        // var duration = $('.projects').height();
        var duration = $(window).height();
        TweenMax.set(el, {y:50});

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
        //  Scene for 4 small texts : graphic design art direction
        // var duration = $('.projects').height();
        // $('.projects figure').each(function(duration){
        //   var _this = $(this),
        //       _this1 = this;
        //   // TweenMax.set(_this, {y:'+=10rem'});
        //
        //   var tween = TweenMax.to(_this, 0.75, {top:'+=100px',ease:Power2.easeOut});
        //   var projectsTween = new ScrollMagic.Scene({
        //     triggerElement: _this,
        //     triggerHook: 0.5,
        //     duration: duration
        //   }).addTo(controller)
        //   .setTween(tween);
        // });
		}
	};
	MagicStuff.init();
})();
