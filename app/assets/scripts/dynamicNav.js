/* jshint undef:false */
/* jshint unused:false */
/* jshint latedef:false */
(function(){
  'use strict';
	function loadContent(_href) {
    TweenMax.to(window, 1, {scrollTo:0,ease:Power2.easeOut});
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
    	loadContent(_href);
  	});
    window.addEventListener('popstate', function(event) {
      if (!everPushedSomething) {
        /* jshint ignore:start */
        var _href = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
        /* jshint ignore:end */
        loadContent(_href);
      }
        everPushedSomething = true;
    });
  }


})();
