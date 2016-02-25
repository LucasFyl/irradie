/* jshint undef:false */
/* jshint unused:false */
/* jshint latedef:false */

// first detect if browser is NOT Safari and trigger page transition function :
// user-agent sniffing method but best recomendation from : 
// http://stackoverflow.com/a/6849172

if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {

} else {
    (function(){
    'use strict';

    function loadProject(_href) {
      var thisPos = $(window).scrollTop();
      TweenMax.fromTo(window, 1, {scrollTo:thisPos}, {scrollTo:0,ease:Power2.easeOut});
      if( thisPos === 0 ) {
        TweenMax.to('#main .wrap, header, footer', 0.5,{y:50,opacity:0,ease:Expo.easeIn});
      }
      TweenMax.to('#loader', 0.5, {delay:0.5,opacity:1,visibility:'visible',onComplete:function(){
        window.location.href = _href;
      }});
    }
    function loadNext(_href) {
      TweenMax.set('footer', {display:'none'});
      TweenMax.to('#main .wrap, header, .prev', 0.75, {x:-250,opacity:0,ease:Power2.easeInOut});
      TweenMax.to('.next', 0.5, {x:'100%',ease:Power2.easeIn,delay:0.2});
      TweenMax.to('#loader', 0.5, {delay:0.5,opacity:1,visibility:'visible',onComplete:function(){
        window.location.href = _href;
      }});
    }
    function loadPrevious(_href) {
      TweenMax.set('footer', {display:'none'});
      TweenMax.to('#main .wrap, header, .next', 0.75, {x:250,opacity:0,ease:Power2.easeInOut});
      TweenMax.to('.prev', 0.5, {x:'-100%',ease:Power2.easeIn,delay:0.2});
      TweenMax.to('#loader', 0.5, {delay:0.5,opacity:1,visibility:'visible',onComplete:function(){
        window.location.href = _href;
      }});
    }

    if (Modernizr.history) {
      var everPushedSomething = false;
      // hijack the nav click event
      $('body').on('click', 'a.ajaxy', function(e){
        e.preventDefault();
        var _this = $(this),
          _href = _this.attr('href');
        // change the url without a page refresh and add a history entry.
        history.pushState(null, null, _href);
        everPushedSomething = true;
        // load the content
        if ( _this.hasClass('prev-project') ) {
          loadPrevious(_href);
        } else if ( _this.hasClass('next-project') ) {
          loadNext(_href);
        } else {
          loadProject(_href);
        }
      });
    } else {
        // history is not supported; nothing fancy here
    }

    // Bind popstate event to redirect when use hits 'previous page' button
    $(window).bind('popstate', function() {
      if (!everPushedSomething) {
        /* jshint ignore:start */
        var link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
        /* jshint ignore:end */
        loadProject(link);
      }
      everPushedSomething = true;
    });

  })();
}