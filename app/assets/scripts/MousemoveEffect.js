
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

        $(window).resize(function(){
            if ($(window).width() < 1024 && $(img).offset().top > 0) {
                $(img).css('width', 'auto');
                $(img).css('height', '150%');
                effect = false;
            } else {
                if ($(window).width() >= 1024) {
                    $(img).css('height', '150%');
                    $(img).css('min-width', '200%');
                    effect = true;
                    Splash.initImg();
                }
            }
        });

        $('#menu .half').mousemove(function(e){
            
            if (!effect){ return; }

            var amountMovedX = ((e.pageX-$(window).width()/2) * -1 / 1.5) / 6;
            var amountMovedY = ((e.pageY-$(window).height()/2) * -1 / 1.5) / 6;

            var marginTop = $.data( img, 'positions' ).topPosition - amountMovedY;
            var marginLeft = $.data( img, 'positions' ).leftPosition - amountMovedX;

            $(img).css('margin-top', marginTop + 'px');
            $(img).css('margin-left', marginLeft + 'px');
        });
    },

    between: function(x, min, max) {
        'use strict';
        return x >= min && x <= max;
    }
};
