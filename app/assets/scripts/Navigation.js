/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
// (function(){
/*
  'use strict';
	var Navigation = {
    init: function(){
      'use strict';
      if (Modernizr.history) {
      	var everPushedSomething = false;
      	// hijack click event on .ajaxy link
      	$('body').on('click', 'a.ajaxy', function(e){
      		e.preventDefault();
        	var _href = $(this).attr('href');

        	// change the url without a page refresh and add a history entry.
        	history.pushState(null, '', _href);
        	everPushedSomething = true;

        	// load the content
        	Navigation.loadContent(_href);
      	});
        // Bind click on prev/next browser buttons :
        $(window).bind('popstate', function() {
          if (everPushedSomething) {
              $.getScript(location.href);
          }
          everPushedSomething = true;
        	// if (everPushedSomething) {
          //   var link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
      	  //   Navigation.switchPage(link);
          // }
          // everPushedSomething = true;
      	});
      }
    },
    switchPage: function(link){
      'use strict';
      TweenMax.to('#loader', 1, {opacity:1,visibility:'visible',onComplete:function(){
         window.location.href = _href;
      }}, '-=0.5');
      // console.log(link);
      // history.pushState(null, null, _href);
      // window.location.href = link;
      // TweenMax.to('#loader', 1, {opacity:1,visibility:'visible',onComplete:function(){
      // }}, '-=0.5');
    },
    loadContent: function(_href) {
      'use strict';

      var elToGo,
			    pageTl = new TimelineMax();

      if( $('#main.home').length ) {
        elToGo = [
          '.landing .bottom',
          '.landing .fixed-wrap',
          '.landing .logo-wrap'
        ];
      } else if ( $('#main.about').length ) {
        elToGo = [
          '#main > *:not(header)'
        ];
      }
			pageTl
					.to(window, 1.5, {scrollTo:0,ease:Power2.easeInOut})
				  .staggerTo(elToGo, 0.5, {y:'+=100%',ease:Power2.easeInOut})
				  .to('#loader', 1, {opacity:1,visibility:'visible',onComplete:function(){
					       window.location.href = _href;
				  }}, '-=0.5');
			pageTl.play();
    }
  };

// })();
*/
