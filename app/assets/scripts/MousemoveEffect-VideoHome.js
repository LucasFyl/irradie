
  var SplashHome = {
    init: function() {
        'use strict';
        SplashHome.config = {
            img: $('#video-wrap video'),
            effect: true
        };

        SplashHome.initEvents();
        $(window).trigger('resize');
        SplashHome.initImg();

    },

    initImg: function() {
        'use strict';
        var img = SplashHome.config.img;
        // console.log('init SplashHome with:', img);

        $.data(img, 'positions', {
            topPosition: -($(img).height() / 2),
            leftPosition: -($(img).width() / 2)
        });

        $(img).css('margin-top', $.data( img, 'positions' ).topPosition);
        $(img).css('margin-left', $.data( img, 'positions' ).leftPosition);

        $.data(img, 'offset', {
            top: Math.abs($(img).offset().top),
            left: Math.abs($(img).offset().left)
        });

    },

    initEvents: function() {
        'use strict';
        var img = SplashHome.config.img;
        var effect = SplashHome.config.effect;
        // console.log('init SplashHome events. effects ->', effect);

        $(window).resize(function(){
            if ($(window).width() < 1024 && $(img).offset().top > 0) {
                $(img).css('width', 'auto');
                $(img).css('height', '150%');
                effect = false;
            } else {
                if ($(window).width() >= 1024) {
                    $(img).css('width', '200%');
                    $(img).css('height', 'auto');
                    effect = true;
                    SplashHome.initImg();
                }
            }
        });

        $('.landing').mousemove(function(e){
            
            if (!effect){ return; }

            var amountMovedX = ((e.pageX-$(window).width()/2) * -1 / 1.5) / 5;
            var amountMovedY = ((e.pageY-$(window).height()/2) * -1 / 1.5) / 5;

            // if (!SplashHome.between(amountMovedY, -$.data( img, 'offset').top, $.data( img, 'offset').top) || !SplashHome.between(amountMovedX, -$.data( img, 'offset').left, $.data( img, 'offset').left))
                // {return;}

            var marginTop = $.data( img, 'positions' ).topPosition - amountMovedY;
            var marginLeft = $.data( img, 'positions' ).leftPosition - amountMovedX;

            // console.log(marginTop);
            // console.log(marginLeft);
            $(img).css('margin-top', marginTop + 'px');
            $(img).css('margin-left', marginLeft + 'px');
        });
    },

    between: function(x, min, max) {
        'use strict';
        return x >= min && x <= max;
    }
};
