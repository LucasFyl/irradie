
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
                    $(img).css('height', '150%');
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
        
        $('[data-parallax="quick"]').each(function(index, value){
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

/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
var Spash;
var isMobile = false;
var controller = new ScrollMagic.Controller();
var landingTl = new TimelineMax();
var winH = $(window).height();
var winW = $(window).width();
var footerSet = false;
// Page load function
function initPage(){
    'use strict';
    detectMobile();

    window.onresize = resize;

    if ( $('#main.home').length ) {
        SplashHome.init();
        landingHomeTl();
    } else if ( $('#main.about').length ) {
        TweenMax.fromTo('#main.about', 1, {backgroundColor: 'white'}, {backgroundColor: 'black', ease: Power2.easeOut, delay: 0.75});
        TweenMax.fromTo('section.second .content-wrap img', 1, {opacity: 0}, {opacity:1, ease: Power3.easeInOut, delay: 1.5});
    } else if ( $('#main.project').length ) {
        TweenMax.set(window, {scrollTo:0});
        landingProjectTl();
        initNextPrev();
    }

    if( $('.projects').length ) {
        setTimeout(ProjectsParallax.init, 200);
    }


    if( $('.newsletter').length ) {
        setTimeout(initNewsletter, 100);
    }

    setTimeout(hideLoader, 250);
    setTimeout(setFooter, 300);
    setTimeout(initMenu, 300);
}
function detectMobile(){
    'use strict';
    // Simple media-query to detect screen size, no user-agent sniffing
    if( $('.isMobile').is(':visible') ) {
        isMobile = true;
        TweenMax.set('html',{overflowX:'hidden',position:'relative'});
    }
}
function hideLoader(){
    'use strict';
    TweenMax.to('#loader', 1, {opacity:0,visibility:'hidden',display:'none',ease:Power2.easeOut});
}
function resize() {
    'use strict';
    // Manage resize exception
    footerSet = false;
    winH = $(window).height();
    winW = $(window).width();
    setTimeout(function(){
        setFooter();
    }, 250);
}
function initScroll() {
        'use strict';
        var el = $('.projects figure');
        var parentH = el.parent().height();
        var tween = new TweenMax.to(el, 0.25, {paddingTop:'-=50rem',ease:Linear.easeNone});
        var UJscene1 = new ScrollMagic.Scene({
                triggerElement: '.projects',
                duration: parentH
            }).addTo(controller)
            .setTween(tween);
}
function initMenu() {
    'use strict';
    var isSplash = false;
    // openMenu
    $(document).on('click', '.menu-trigger', function(e){
        e.preventDefault();
        //  Temp fix for overlaping landing on home page
        if($('#main.home').length && isMobile === false) {
            if ( $(window).scrollTop() < winH ) {
                TweenMax.to(window, 0.25, {scrollTo: winH,ease:Power2.easeOut});
            }
        }
        $('body').addClass('locked');
        TweenMax.to('#menu', 1, {delay:0.25,opacity:1,visibility:'visible',ease:Expo.easeOut});
        TweenMax.fromTo('#menu .half a', 0.5, {y:50,opacity:0}, {y:0,opacity:1,ease:Expo.easeOut,delay:0.6,onComplete:function(){
            $('.half').addClass('ready');
            TweenMax.to('.half:first .cover', 0.5, {opacity:1,ease:Power2.easeOut});
            Splash.init();
            isSplash = true;
        }});
    });
    // closeMenu
    $(document).on('click', '#menu .close', function(e){
        e.preventDefault();
        $('.half').removeClass('ready');
        $('body').removeClass('locked');
        TweenMax.to('#menu .half a', 0.35, {y:50,opacity:0,ease:Expo.easeIn});
        TweenMax.to('#menu', 0.5, {opacity:0,visibility:'hidden',ease:Expo.easeIn});
        if(isSplash) {isSpash = false;}
        $('#menu .half').off('mousemove');
    });
    // Menu hover effect :
    $(document).on({
    mouseenter: function () {
        var target = $(this).next('.cover');
        TweenMax.to(target,0.5,{opacity:1,ease:Power2.easeInOut});
        if(!isSplash){ Splash.init();}
    },

    mouseleave: function () {
        var target = $(this).next('.cover');
        TweenMax.to(target,0.5,{opacity:0,ease:Power2.easeInOut});
        $('#menu .half').off('mousemove');
        isSplash = false;
    }
    }, '.half.ready > a');
}
function setFooter() {
    'use strict';
    var footerH = $('footer').outerHeight();
    var mq1 = window.matchMedia( '(min-width: 768px)' );
    var mq2 = window.matchMedia( '(min-width: 1000px)' );

    var FF = (document.getBoxObjectFor != null || window.mozInnerScreenX != null);

    if (FF) {
        
        if ( footerSet === false ) {
            footerSet = true;
            if ( mq1.matches ) {
                TweenMax.set('footer', {position:'fixed',bottom:0});
                TweenMax.set('body', {marginBottom:footerH});

                if ( $('#main.home').length ) {
                    var mb = winH + footerH;
                    TweenMax.set('body', {marginBottom:mb});
                }
            } 
        }
    } else {

        if ( footerSet === false ) {
            footerSet = true;
            if ( mq1.matches ) {
                TweenMax.set('footer', {position:'fixed',bottom:0});
                TweenMax.set('#main', {marginBottom:footerH});
            } 
        }
    }

}
function initNextPrev() {
    'use strict';
    // var isVisible = false;
    var onEnter   = new TimelineMax();
    var onLeave   = new TimelineMax();
    var _this, imgWrap, img, text;

    $(document).on({
        mouseenter: function () {
            if( $(this).is(':visible')) {
                _this   = this,
                text    = $(_this).find('.title-block'),
                imgWrap = $(_this).find('.img-wrap'),
                img     = imgWrap.find('img');

                onEnter
                    .to(_this, 0.5, {width:'18rem',ease:Power2.easeOut})
                    .to(text, 0.25, {opacity:0,ease:Power2.easeInOut}, '-=0.5')
                    .set(imgWrap, {visibility:'visible'})
                    .staggerFromTo(img, 0.25, {opacity:0,y:30}, {opacity:1,y:0,ease:Power2.easeOut}, 0.1);
                
                if ( $(_this).is('.prev') ) {
                    TweenMax.to('#main .wrap, header, footer, .next', 0.5, {x:115,ease:Power2.easeOut});
                } else {
                    TweenMax.to('#main .wrap, header, footer, .prev', 0.5, {x:-115,ease:Power2.easeOut});
                }
                onEnter.play();
            }
                
        },
        mouseleave: function () {
            _this   = this,
            text    = $(_this).find('.title-block'),
            imgWrap = $(_this).find('.img-wrap'),
            img     = imgWrap.find('img');

            onLeave
                .to(img, 0.25, {opacity:0,y:20,ease:Power2.easeIn})
                .to(_this, 0.25, {width:'8.8rem',ease:Power2.easeIn})
                .to(text, 0.25, {opacity:1,ease:Power2.easeInOut})
                .set(imgWrap, {visibility:'hidden'});
            
            if ( $(_this).is('.prev') ) {
                TweenMax.to('#main .wrap, header, footer, .next', 0.25, {x:0,ease:Power2.easeIn});
            } else {
                TweenMax.to('#main .wrap, header, footer, .prev', 0.25, {x:0,ease:Power2.easeIn});
            }
            onLeave.play();
        }
    }, '.block-prevnext');

    // TODO: test this,  might be useless
    $('.block-prevnext').off('mouseenter, mouseleave');
}
function landingProjectTl() {
    'use strict';
    landingTl
        .set('.share li', {y:20,opacity:0,delay:0.25})
        .set('header, .block-prevnext', {opacity:0})
        .set('.wrap img', {opacity:0})
        .staggerFromTo('.infos h1, .infos .client', 0.5, {y:50,opacity:0}, {y:0,opacity:1,ease:Power2.easeOut}, 0.1)
        .staggerTo('.share li', 0.25, {y:0,opacity:1,ease:Power2.easeOut}, 0.1)
        .to('.wrap img', 0.5, {opacity:1})
        .fromTo('header', 0.5, {y:-50,opacity:0}, {y:0,opacity:1,ease:Power2.easeOut}, '-=1')
        .play();
}
function landingHomeTl() {
    'use strict';
    landingTl
        .set('.top, .bottom', {y:20,opacity:0})
        .set('.landing .logo-wrap', {y:'-60%',opacity:0})
        .set('.fixed-wrap', {opacity:0})
        .staggerTo('.top, .bottom', 0.25, {delay:0.5,y:0,opacity:1,ease:Power2.easeOut}, 0.1)
        .to('.landing .logo-wrap', 0.5, {y:'-50%',opacity:1,ease:Power3.easeOut})
        .to('.fixed-wrap', 1.5, {opacity:1,ease:Power1.easeOut})
        .play();
}
function initNewsletter() {
    'use strict';
    
    $('.newsletter').each(function(index, value) {
        var _this = $(value),
            form = _this.find('form'),
            link = _this.find('a');
        link.on('click', function(e){
            e.preventDefault();
            if (form.is(':visible')) {
                TweenMax.set(link, {display:'block'});
                TweenMax.set(form, {display:'none'});
            } else {
                TweenMax.set(link, {display:'none'});
                TweenMax.set(form, {display:'flex'});
            }
                
        });
        form.on('submit',function(){
            form.css('height', 'auto');
            form.find('input').remove();
            form.find('button').remove();
        });

    });
}
$(document).ready(function(){
    'use strict';
    initPage();
});


/*jshint -W117 */
/* jshint unused:false */
(function(){
  'use strict';

    var MagicStuff = {
        init: function(){
            if ( $('#main.home').length ) {
                this.home(controller);
            } else if ( $('#main.about').length ) {
        this.about(controller);
      } else if ( $('#main.project').length ) {
        this.project(controller);
      }

      if ( $('.projects').length ) {
        this.projects(controller);
      }
        },
        about: function(controller){
      if(isMobile === false && winW >= 1024) {
        var fixIt; var unFixIt;
        $('#main section.fixable').each(function(index, value) {

          var thisText      = $(value).find('.big-text-block p, .big-text-block h3'),
              thisContent   = $(value).find('.content-wrap'),
              fixTrigger    = 1 - (0.5 + ((thisText.height()/2)/winH)),
              unFixTrigger  = thisContent.find('.title'),
              unFixOffset   = thisContent.find('.image').height() - 60;

          fixIt   = new TweenMax.to(thisText, 0.0001, {className: '+=fixed'});

          if ( $(value).hasClass('second') ) {
            unFixIt = new TweenMax.to(thisText, 0.0001, {position: 'absolute', bottom:'20rem', top: 'auto', y:0});
          } else if ( $(value).hasClass('third') ) {
            unFixIt = new TweenMax.to(thisText, 0.0001, {position: 'absolute', bottom:'15rem', top: 'auto', y:0});
          }

          var fixScene = new ScrollMagic.Scene({
            triggerElement: value,
            triggerHook: fixTrigger,
            duration: 0
          }).setTween(fixIt)
          .addTo(controller);
          
          var unFixScene = new ScrollMagic.Scene({
            triggerElement: unFixTrigger[0],
            triggerHook: fixTrigger,
            duration: 0
          }).setTween(unFixIt)
          .addTo(controller);
        });
      }
        },
    home: function(controller){
      //  Scene for 4 small texts : graphic design art direction
      var topEl = $('.landing .top'),
          bottomEl = $('.landing .bottom'),
          duration = $('.landing').height() / 2,
          textTween = TweenMax.to([topEl, bottomEl], 0.25, {y:-50,opacity:0,ease:Linear.easeNone});
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

      $(window).on('scroll', function(){
        var winST = $(window).scrollTop();
        if( winST === 0) {
          TweenMax.fromTo('.landing .top, .bottom, .landing .logo-wrap, .fixed-wrap', 0.1, {opacity:0},{opacity:1,ease:Power3.easeOut});
        }
      });

        },
        projects: function(controller){

      // See  ../scripts/ProjectsParallax.js

        },
    project: function(controller) {
      // Project image anim
      var el = $('#main .wrap > img'),
          duration = (winH / 3) * 2;
      if (isMobile === true) {duration = winH / 2;}
      TweenMax.set(el, {y:50});
      el.each(function(index, value){
        var projectTween = TweenMax.to(value, 0.75, {y:0,ease:Power2.easeOut});
        var projectScene = new ScrollMagic.Scene({
          triggerElement: value,
          triggerHook: 'onEnter',
          duration: duration
        }).addTo(controller)
        .setTween(projectTween);
      });

      if (isMobile === false ) {
        // Project next/prev anim : 
        TweenMax.set('.block-prevnext', {opacity:0, display:'none', visibility:'hidden'});
        var prevnextTween = new TweenMax.fromTo('.block-prevnext', 0.5, {opacity:0, display:'none', visibility:'hidden'}, {opacity:1, display:'block', visibility:'visible'});
        var prevnextScene = new ScrollMagic.Scene({
          triggerElement: 'header',
          triggerHook:    'onLeave',
          duration:        250,
          offset:          50
        }).addTo(controller)
        .setTween(prevnextTween);
      }
    }
    };
    MagicStuff.init();
})();
