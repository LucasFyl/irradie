function toRem(e) {
    "use strict";
    return parseInt(e) / rem()
}

function initPage() {
    "use strict";
    detectMobile(), window.onresize = resize, $("#main.home").length ? (SplashHome.init(), landingHomeTl()) : $("#main.about").length ? (TweenMax.fromTo("#main.about", 1, {
        backgroundColor: "white"
    }, {
        backgroundColor: "black",
        ease: Power2.easeOut,
        delay: .75
    }), TweenMax.fromTo("section.second .content-wrap img", 1, {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut,
        delay: .75
    })) : $("#main.project").length && (TweenMax.set(window, {
        scrollTo: 0
    }), landingProjectTl(), initNextPrev()), $(".projects").length && setTimeout(ProjectsParallax.init, 200), $(".newsletter").length && setTimeout(initNewsletter, 100), setTimeout(hideLoader, 250), setTimeout(setFooter, 300), setTimeout(initMenu, 300)
}

function detectMobile() {
    "use strict";
    $(".isMobile").is(":visible") && (isMobile = !0, TweenMax.set("html", {
        overflowX: "hidden",
        position: "relative"
    }))
}

function hideLoader() {
    "use strict";
    TweenMax.to("#loader", 1, {
        opacity: 0,
        visibility: "hidden",
        display: "none",
        ease: Power2.easeOut
    })
}

function resize() {
    "use strict";
    winH = $(window).height(), winW = $(window).width(), setTimeout(function() {
        setFooter()
    }, 250)
}

function initScroll() {
    "use strict";
    var e = $(".projects figure"),
        t = e.parent().height(),
        i = new TweenMax.to(e, .25, {
            paddingTop: "-=50rem",
            ease: Linear.easeNone
        });
    new ScrollMagic.Scene({
        triggerElement: ".projects",
        duration: t
    }).addTo(controller).setTween(i)
}

function initMenu() {
    "use strict";
    var e = !1;
    $(document).on("click", ".menu-trigger", function(t) {
        t.preventDefault(), $("#main.home").length && isMobile === !1 && $(window).scrollTop() < winH && TweenMax.to(window, .25, {
            scrollTo: winH,
            ease: Power2.easeOut
        }), $("body").addClass("locked"), TweenMax.to("#menu", 1, {
            delay: .25,
            opacity: 1,
            visibility: "visible",
            ease: Expo.easeOut
        }), TweenMax.fromTo("#menu .half a", .5, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: .6,
            onComplete: function() {
                $(".half").addClass("ready"), TweenMax.to(".half:first .cover", .5, {
                    opacity: 1,
                    ease: Power2.easeOut
                }), Splash.init(), e = !0
            }
        })
    }), $(document).on("click", "#menu .close", function(t) {
        t.preventDefault(), $(".half").removeClass("ready"), $("body").removeClass("locked"), TweenMax.to("#menu .half a", .35, {
            y: 50,
            opacity: 0,
            ease: Expo.easeIn
        }), TweenMax.to("#menu", .5, {
            opacity: 0,
            visibility: "hidden",
            ease: Expo.easeIn
        }), e && (isSpash = !1), $("#menu .half").off("mousemove")
    }), $(document).on({
        mouseenter: function() {
            var t = $(this).next(".cover");
            TweenMax.to(t, .5, {
                opacity: 1,
                ease: Power2.easeInOut
            }), e || Splash.init()
        },
        mouseleave: function() {
            var t = $(this).next(".cover");
            TweenMax.to(t, .5, {
                opacity: 0,
                ease: Power2.easeInOut
            }), $("#menu .half").off("mousemove"), e = !1
        }
    }, ".half.ready > a")
}


function setFooter() {
    'use strict';
    var mq = window.matchMedia( '(min-width: 780px)' );
    if ( mq.matches) {
        var footerH = $('footer').height() + 80;
        if ($('#main.home').length && isMobile === false) {
            var mb = winH + footerH;
            TweenMax.set('body', {marginBottom:mb});
        } else {
            TweenMax.set('body', {marginBottom:footerH});
        }
        TweenMax.set('footer', {position:'fixed', height:footerH});   
    } else {
        TweenMax.set('body', {marginBottom:0});
        TweenMax.set('footer', {position:'static'});
    }
}

function initNextPrev() {
    "use strict";
    var e, t, i, o, n = new TimelineMax,
        a = new TimelineMax;
    $(document).on({
        mouseenter: function() {
            $(this).is(":visible") && (e = this, o = $(e).find(".title-block"), t = $(e).find(".img-wrap"), i = t.find("img"), n.to(e, .5, {
                width: "18rem",
                ease: Power2.easeOut
            }).to(o, .25, {
                opacity: 0,
                ease: Power2.easeInOut
            }, "-=0.5").set(t, {
                visibility: "visible"
            }).staggerFromTo(i, .25, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                ease: Power2.easeOut
            }, .1), $(e).is(".prev") ? TweenMax.to("#main .wrap, header, footer, .next", .5, {
                x: 115,
                ease: Power2.easeOut
            }) : TweenMax.to("#main .wrap, header, footer, .prev", .5, {
                x: -115,
                ease: Power2.easeOut
            }), n.play())
        },
        mouseleave: function() {
            e = this, o = $(e).find(".title-block"), t = $(e).find(".img-wrap"), i = t.find("img"), a.to(i, .25, {
                opacity: 0,
                y: 20,
                ease: Power2.easeIn
            }).to(e, .25, {
                width: "8.8rem",
                ease: Power2.easeIn
            }).to(o, .25, {
                opacity: 1,
                ease: Power2.easeInOut
            }).set(t, {
                visibility: "hidden"
            }), $(e).is(".prev") ? TweenMax.to("#main .wrap, header, footer, .next", .25, {
                x: 0,
                ease: Power2.easeIn
            }) : TweenMax.to("#main .wrap, header, footer, .prev", .25, {
                x: 0,
                ease: Power2.easeIn
            }), a.play()
        }
    }, ".block-prevnext"), $(".block-prevnext").off("mouseenter, mouseleave")
}

function landingProjectTl() {
    "use strict";
    landingTl.set(".share li", {
        y: 20,
        opacity: 0,
        delay: .25
    }).set("header, .block-prevnext", {
        opacity: 0
    }).set(".wrap img", {
        opacity: 0
    }).staggerFromTo(".infos h1, .infos .client", .5, {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, .1).staggerTo(".share li", .25, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, .1).to(".wrap img", .5, {
        opacity: 1
    }).fromTo("header", .5, {
        y: -50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, "-=1").play()
}

function landingHomeTl() {
    "use strict";
    landingTl.set(".top, .bottom", {
        y: 20,
        opacity: 0
    }).set(".landing .logo-wrap", {
        y: "-60%",
        opacity: 0
    }).set(".fixed-wrap", {
        opacity: 0
    }).staggerTo(".top, .bottom", .25, {
        delay: .5,
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, .1).to(".landing .logo-wrap", .5, {
        y: "-50%",
        opacity: 1,
        ease: Power3.easeOut
    }).to(".fixed-wrap", 1.5, {
        opacity: 1,
        ease: Power1.easeOut
    }).play()
}

function initNewsletter() {
    "use strict";
    $(".newsletter").each(function(e, t) {
        var i = $(t),
            o = i.find("form"),
            n = i.find("a");
        n.on("click", function(e) {
            e.preventDefault(), o.is(":visible") ? (TweenMax.set(n, {
                display: "block"
            }), TweenMax.set(o, {
                display: "none"
            })) : (TweenMax.set(n, {
                display: "none"
            }), TweenMax.set(o, {
                display: "flex"
            }))
        }), o.on("submit", function() {
            o.css("height", "auto"), o.find("input").remove(), o.find("button").remove()
        })
    })
}
var Splash = {
        init: function() {
            "use strict";
            Splash.config = {
                img: $("#menu .half .cover img"),
                effect: !0
            }, Splash.initEvents(), $(window).trigger("resize"), Splash.initImg()
        },
        initImg: function() {
            "use strict";
            var e = Splash.config.img;
            $.data(e, "positions", {
                topPosition: -($(e).height() / 2),
                leftPosition: -($(e).width() / 2)
            }), $(e).css("margin-top", $.data(e, "positions").topPosition), $(e).css("margin-left", $.data(e, "positions").leftPosition), $.data(e, "offset", {
                top: Math.abs($(e).offset().top),
                left: Math.abs($(e).offset().left)
            })
        },
        initEvents: function() {
            "use strict";
            var e = Splash.config.img,
                t = Splash.config.effect;
            $(window).resize(function() {
                $(window).width() < 1024 && $(e).offset().top > 0 ? ($(e).css("width", "auto"), $(e).css("height", "150%"), t = !1) : $(window).width() >= 1024 && ($(e).css("height", "150%"), $(e).css("min-width", "200%"), t = !0, Splash.initImg())
            }), $("#menu .half").mousemove(function(i) {
                if (t) {
                    var o = -1 * (i.pageX - $(window).width() / 2) / 1.5 / 6,
                        n = -1 * (i.pageY - $(window).height() / 2) / 1.5 / 6,
                        a = $.data(e, "positions").topPosition - n,
                        s = $.data(e, "positions").leftPosition - o;
                    $(e).css("margin-top", a + "px"), $(e).css("margin-left", s + "px")
                }
            })
        },
        between: function(e, t, i) {
            "use strict";
            return e >= t && i >= e
        }
    },
    SplashHome = {
        init: function() {
            "use strict";
            SplashHome.config = {
                img: $("#video-wrap video"),
                effect: !0
            }, SplashHome.initEvents(), $(window).trigger("resize"), SplashHome.initImg()
        },
        initImg: function() {
            "use strict";
            var e = SplashHome.config.img;
            $.data(e, "positions", {
                topPosition: -($(e).height() / 2),
                leftPosition: -($(e).width() / 2)
            }), $(e).css("margin-top", $.data(e, "positions").topPosition), $(e).css("margin-left", $.data(e, "positions").leftPosition), $.data(e, "offset", {
                top: Math.abs($(e).offset().top),
                left: Math.abs($(e).offset().left)
            })
        },
        initEvents: function() {
            "use strict";
            var e = SplashHome.config.img,
                t = SplashHome.config.effect;
            $(window).resize(function() {
                $(window).width() < 1024 && $(e).offset().top > 0 ? ($(e).css("width", "auto"), $(e).css("height", "150%"), t = !1) : $(window).width() >= 1024 && ($(e).css("width", "200%"), $(e).css("height", "150%"), t = !0, SplashHome.initImg())
            }), $(".landing").mousemove(function(i) {
                if (t) {
                    var o = -1 * (i.pageX - $(window).width() / 2) / 1.5 / 5,
                        n = -1 * (i.pageY - $(window).height() / 2) / 1.5 / 5,
                        a = $.data(e, "positions").topPosition - n,
                        s = $.data(e, "positions").leftPosition - o;
                    $(e).css("margin-top", a + "px"), $(e).css("margin-left", s + "px")
                }
            })
        },
        between: function(e, t, i) {
            "use strict";
            return e >= t && i >= e
        }
    },
    rem = function() {
        "use strict";
        var e = document.getElementsByTagName("html")[0];
        return function() {
            return parseInt(window.getComputedStyle(e).fontSize)
        }
    }(),
    ProjectsParallax = {
        init: function() {
            "use strict";
            ProjectsParallax.config = {
                el: $(".projects figure"),
                effect: !0
            }, $(window).resize(function() {
                $(window).width() < 480 || ProjectsParallax.assignValues()
            }), $(window).trigger("resize")
        },
        assignValues: function() {
            "use strict";
            var e = ProjectsParallax.config.el;
            e.each(function(e, t) {
                var i = $(this).width(),
                    o = toRem(i);
                33 > o ? $(this).attr("data-parallax", "quick") : o > 33 && 55 > o ? $(this).attr("data-parallax", "medium") : o > 55 && $(this).attr("data-parallax", "slow")
            }), setTimeout(ProjectsParallax.run, 250)
        },
        run: function() {
            "use strict";
            $('[data-parallax="quick"]').each(function(e, t) {
                var i = $(t);
                TweenMax.set(i, {
                    y: 150
                }), ProjectsParallax.bindAnimation(i, t)
            }), $('[data-parallax="medium"]').each(function(e, t) {
                var i = $(t);
                TweenMax.set(i, {
                    y: 100
                }), ProjectsParallax.bindAnimation(i, t)
            }), $('[data-parallax="slow"]').each(function(e, t) {
                var i = $(t);
                TweenMax.set(i, {
                    y: 50
                }), ProjectsParallax.bindAnimation(i, t)
            })
        },
        bindAnimation: function(e, t) {
            "use strict";
            var i = (.7 + Math.random() * (1 - .7)).toFixed(2),
                o = (1 + 2 * Math.random()).toFixed(1),
                n = TweenMax.to(e, o, {
                    y: 0,
                    ease: Power1.easeInOut
                });
            new ScrollMagic.Scene({
                triggerElement: t,
                triggerHook: i
            }).addTo(controller).setTween(n)
        }
    }; - 1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") || ! function() {
    "use strict";

    function e(e) {
        var t = $(window).scrollTop();
        TweenMax.fromTo(window, 1, {
            scrollTo: t
        }, {
            scrollTo: 0,
            ease: Power2.easeOut
        }), 0 === t && TweenMax.to("#main .wrap, header, footer", .5, {
            y: 50,
            opacity: 0,
            ease: Expo.easeIn
        }), TweenMax.to("#loader", .5, {
            delay: .5,
            opacity: 1,
            visibility: "visible",
            onComplete: function() {
                window.location.href = e
            }
        })
    }

    function t(e) {
        TweenMax.set("footer", {
            display: "none"
        }), TweenMax.to("#main .wrap, header, .prev", .75, {
            x: -250,
            opacity: 0,
            ease: Power2.easeInOut
        }), TweenMax.to(".next", .5, {
            x: "100%",
            ease: Power2.easeIn,
            delay: .2
        }), TweenMax.to("#loader", .5, {
            delay: .5,
            opacity: 1,
            visibility: "visible",
            onComplete: function() {
                window.location.href = e
            }
        })
    }

    function i(e) {
        TweenMax.set("footer", {
            display: "none"
        }), TweenMax.to("#main .wrap, header, .next", .75, {
            x: 250,
            opacity: 0,
            ease: Power2.easeInOut
        }), TweenMax.to(".prev", .5, {
            x: "-100%",
            ease: Power2.easeIn,
            delay: .2
        }), TweenMax.to("#loader", .5, {
            delay: .5,
            opacity: 1,
            visibility: "visible",
            onComplete: function() {
                window.location.href = e
            }
        })
    }
    if (Modernizr.history) {
        var o = !1;
        $("body").on("click", "a.ajaxy", function(n) {
            n.preventDefault();
            var a = $(this),
                s = a.attr("href");
            history.pushState(null, null, s), o = !0, a.hasClass("prev-project") ? i(s) : a.hasClass("next-project") ? t(s) : e(s)
        })
    }
    $(window).bind("popstate", function() {
        if (!o) {
            var t = location.pathname.replace(/^.*[\\/]/, "");
            e(t)
        }
        o = !0
    })
}();
var Spash, isMobile = !1,
    controller = new ScrollMagic.Controller,
    landingTl = new TimelineMax,
    winH = $(window).height(),
    winW = $(window).width();
$(document).ready(function() {
        "use strict";
        initPage()
    }),
    function() {
        "use strict";
        var e = {
            init: function() {
                $("#main.home").length ? this.home(controller) : $("#main.about").length ? this.about(controller) : $("#main.project").length && this.project(controller), $(".projects").length && this.projects(controller)
            },
            about: function(e) {
                if (isMobile === !1 && winW >= 1024) {
                    var t, i;
                    $("#main section.fixable").each(function(o, n) {
                        var a = $(n).find(".big-text-block p, .big-text-block h3"),
                            s = $(n).find(".content-wrap"),
                            r = 1 - (.5 + a.height() / 2 / winH),
                            l = s.find(".title");
                        s.find(".image").height() - 60;
                        t = new TweenMax.to(a, 1e-4, {
                            className: "+=fixed"
                        }), $(n).hasClass("second") ? i = new TweenMax.to(a, 1e-4, {
                            position: "absolute",
                            bottom: "20rem",
                            top: "auto",
                            y: 0
                        }) : $(n).hasClass("third") && (i = new TweenMax.to(a, 1e-4, {
                            position: "absolute",
                            bottom: "15rem",
                            top: "auto",
                            y: 0
                        }));
                        new ScrollMagic.Scene({
                            triggerElement: n,
                            triggerHook: r,
                            duration: 0
                        }).setTween(t).addTo(e), new ScrollMagic.Scene({
                            triggerElement: l[0],
                            triggerHook: r,
                            duration: 0
                        }).setTween(i).addTo(e)
                    })
                }
            },
            home: function(e) {
                var t = $(".landing .top"),
                    i = $(".landing .bottom"),
                    o = $(".landing").height() / 2,
                    n = TweenMax.to([t, i], .25, {
                        y: -50,
                        opacity: 0,
                        ease: Linear.easeNone
                    }),
                    a = (new ScrollMagic.Scene({
                        triggerElement: "#main",
                        triggerHook: "onEnter",
                        duration: o,
                        offset: 0
                    }).addTo(e).setTween(n), $(".landing .logo-wrap")),
                    s = ($(".landing .cover"), $(".landing").height()),
                    r = TweenMax.to(a, .25, {
                        top: "-=40rem",
                        ease: Linear.easeNone
                    }),
                    l = (new ScrollMagic.Scene({
                        triggerElement: "#main",
                        triggerHook: "onEnter",
                        duration: s,
                        offset: 50
                    }).addTo(e).setTween(r), $(".landing .fixed-wrap")),
                    c = $(".landing").height() / 1.6,
                    d = TweenMax.to(l, .25, {
                        top: "-=8rem",
                        opacity: 0,
                        ease: Linear.easeNone
                    });
                new ScrollMagic.Scene({
                    triggerElement: "#main",
                    triggerHook: "onEnter",
                    duration: c,
                    offset: 50
                }).addTo(e).setTween(d)
            },
            projects: function(e) {},
            project: function(e) {
                var t = $("#main .wrap > img"),
                    i = winH / 3 * 2;
                if (isMobile === !0 && (i = winH / 2), TweenMax.set(t, {
                        y: 50
                    }), t.each(function(t, o) {
                        var n = TweenMax.to(o, .75, {
                            y: 0,
                            ease: Power2.easeOut
                        });
                        new ScrollMagic.Scene({
                            triggerElement: o,
                            triggerHook: "onEnter",
                            duration: i
                        }).addTo(e).setTween(n)
                    }), isMobile === !1) {
                    TweenMax.set(".block-prevnext", {
                        opacity: 0,
                        display: "none",
                        visibility: "hidden"
                    });
                    var o = new TweenMax.fromTo(".block-prevnext", .5, {
                        opacity: 0,
                        display: "none",
                        visibility: "hidden"
                    }, {
                        opacity: 1,
                        display: "block",
                        visibility: "visible"
                    });
                    new ScrollMagic.Scene({
                        triggerElement: "header",
                        triggerHook: "onLeave",
                        duration: 250,
                        offset: 50
                    }).addTo(e).setTween(o)
                }
            }
        };
        e.init()
    }();