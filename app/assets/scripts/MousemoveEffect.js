
  var Splash = {
    init: function() {
        'use strict';
        Splash.config = {
            img: $('#menu .half .cover img'),
            effect: true
        };

        Splash.initEvents();
        $(window).trigger('resize');
        Splash.initImg();

    },

    initImg: function() {
        'use strict';
        var img = Splash.config.img;
        // console.log('init Splash with:', img);

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
        var img = Splash.config.img;
        var effect = Splash.config.effect;
        // console.log('init Splash events. effects ->', effect);

        $(window).resize(function(){
            if ($(window).width() < 1024 && $(img).offset().top > 0) {
                $(img).css('width', 'auto');
                $(img).css('height', '150%');
                effect = false;
            } else {
                if ($(window).width() >= 1024) {
                    $(img).css('height', '160%');
                    $(img).css('width', 'auto');
                    effect = true;
                    Splash.initImg();
                }
            }
        });

        $('#menu .half').mousemove(function(e){
            
            if (!effect){ return; }

            var amountMovedX = ((e.pageX-$(window).width()/2) * -1 / 1.5) / 6;
            var amountMovedY = ((e.pageY-$(window).height()/2) * -1 / 1.5) / 6;

            // if (!Splash.between(amountMovedY, -$.data( img, 'offset').top, $.data( img, 'offset').top) || !Splash.between(amountMovedX, -$.data( img, 'offset').left, $.data( img, 'offset').left))
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
