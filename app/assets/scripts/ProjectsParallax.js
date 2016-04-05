/* jshint undef:false */
/* jshint unused:false */
/* jshint latedef:false */

// This Function will always return the initial font-size of the html element 
   var rem = function rem() {
        'use strict';
        var html = document.getElementsByTagName('html')[0];

        return function () {
            return parseInt(window.getComputedStyle(html)['fontSize']);
        };
    }();

// This function will convert pixel to rem
    function toRem(length) {
        'use strict';
        return (parseInt(length) / rem());
    }

// first assign a data-parallax to each figure in .projects
// Then tween this element with different Y value according to data-parallax
  var ProjectsParallax = {
    init: function() {
        'use strict';

        ProjectsParallax.config = {
            el: $('.projects figure'),
            effect: true
        };

        $(window).resize(function(){
            $('img.lazy').lazyload({
                threshold : 200
            });
            if ($(window).width() < 480) {
                return;
            } else {
                setTimeout(ProjectsParallax.run, 250);
            }
        });

        $(window).trigger('resize');

    },

    run: function() {
        'use strict';
        
        $('[data-parallax="fast"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:150});
            ProjectsParallax.bindAnimation(element, value);
        });
        $('[data-parallax="medium"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:100});
            ProjectsParallax.bindAnimation(element, value);
        });
        $('[data-parallax="slow"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:50});
            ProjectsParallax.bindAnimation(element, value);
        });
    },
    
    bindAnimation: function(element, value) {
        'use strict';
        var randomTrigger = (0.7+(Math.random()*(1-0.7))).toFixed(2);
        // var duration = $(window).height();
        var randomDuration = (1+(Math.random()*(3-1))).toFixed(1);
        // console.log(randomDuration);

        var tween = TweenMax.to(element, randomDuration, {y:0,ease:Power1.easeInOut});
        var projectsTween = new ScrollMagic.Scene({
            triggerElement: value,
            triggerHook: randomTrigger
        }).addTo(controller)
        .setTween(tween);
    }
};