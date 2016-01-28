
(function ($) {

    var splashHome = {
        init: function() {
            splashHome.config = {
                img: $('img.background'),
                effect: true
            };

            splashHome.initEvents();
            $(window).trigger('resize');
            splashHome.initImg();

        },

        initImg: function() {
            var img = splashHome.config.img;

            $.data(img, 'positions', {
                topPosition: -($(img).height()/2),
                leftPosition: -($(img).width()/2)
            });

            $(img).css('margin-top', $.data( img, 'positions' ).topPosition);
            $(img).css('margin-left', $.data( img, 'positions' ).leftPosition);

            $.data(img, 'offset', {
                top: Math.abs($(img).offset().top),
                left: Math.abs($(img).offset().left)
            });

        },

        initEvents: function() {
            var img = splashHome.config.img;
            var effect = splashHome.config.effect;

            $(window).resize(function(){
                if ($(window).width() < 1024 && $(img).offset().top > 0) {
                    $(img).css('width', 'auto');
                    $(img).css('height', '200%');
                    effect = false;
                } else {
                    if ($(window).width() >= 1024) {
                        $(img).css('width', '200%');
                        $(img).css('height', 'auto');
                        effect = true;
                        splashHome.initImg();
                    }
                }
            });

            $('body').mousemove(function(e){

                if (!effect){ return; }

                var amountMovedX = ((e.pageX-$(window).width()/2) * -1 / 1.5) / 3;
                var amountMovedY = ((e.pageY-$(window).height()/2) * -1 / 1.5) / 3;

                if (!splashHome.between(amountMovedY, -$.data( img, 'offset').top, $.data( img, 'offset').top) || !splashHome.between(amountMovedX, -$.data( img, 'offset').left, $.data( img, 'offset').left))
                    {return;}

                var marginTop = $.data( img, 'positions' ).topPosition - amountMovedY;
                var marginLeft = $.data( img, 'positions' ).leftPosition - amountMovedX;
                $(img).css('margin-top', marginTop + 'px');
                $(img).css('margin-left', marginLeft + 'px');
            });
        },

        between: function(x, min, max) {
            return x >= min && x <= max;
        }
    };
    if($(window).width()>950){
      // console.log($(window).width());
      $( document ).ready(function(){
        setTimeout(splashHome.init,400);
      });
    }


})(jQuery);
