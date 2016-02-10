
// This Function will always return the initial font-size of the html element 
   var rem = function rem() {
        var html = document.getElementsByTagName('html')[0];

        return function () {
            return parseInt(window.getComputedStyle(html)['fontSize']);
        }
    }();

// This function will convert pixel to rem
    function toRem(length) {
        return (parseInt(length) / rem());
    }

// first assign a data-parallax to each figure in .projects
// Then tween this element with different y value according to data-parallax
  var ProjectsParallax = {
    init: function() {
        'use strict';

        ProjectsParallax.config = {
            el: $('.projects figure'),
            effect: true
        };

        $(window).resize(function(){
            if ($(window).width() < 480) {
                return;
            } else {
                ProjectsParallax.assignValues();
            }
        });

        $(window).trigger('resize');

    },

    assignValues: function() {
        'use strict';
        var img = ProjectsParallax.config.el;

        img.each(function(index, value) {
            var w = $(this).width(),
                wrem = toRem(w);
            if (wrem < 33) {
                $(this).attr('data-parallax', 'quick');
            } else if ( wrem > 33 && wrem < 55 ) {
                $(this).attr('data-parallax', 'medium');
            } else if ( wrem > 55 ) {
                $(this).attr('data-parallax', 'slow');
            }
        });

        setTimeout(ProjectsParallax.run, 250);
    },

    run: function() {
        'use strict';
        var duration = $(window).height();
        
        $('[data-parallax="quick"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:200})
            var tween = TweenMax.to(element, 0.75, {y:0,ease:Linear.easeNone});
            var projectsTween = new ScrollMagic.Scene({
                triggerElement: value,
                triggerHook: 'onEnter'
            }).addTo(controller)
            .setTween(tween);
        });
        $('[data-parallax="medium"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:150})
            var tween = TweenMax.to(element, 0.75, {y:0,ease:Linear.easeNone});
            var projectsTween = new ScrollMagic.Scene({
                triggerElement: value,
                triggerHook: 'onEnter'
            }).addTo(controller)
            .setTween(tween);
        });
        $('[data-parallax="slow"]').each(function(index, value){
            var element = $(value);
            TweenMax.set(element, {y:100})
            var tween = TweenMax.to(element, 0.75, {y:0,ease:Linear.easeNone});
            var projectsTween = new ScrollMagic.Scene({
                triggerElement: value,
                triggerHook: 'onEnter'
            }).addTo(controller)
            .setTween(tween);
        });
    }
};