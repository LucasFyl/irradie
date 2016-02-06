var ParallaxScroll = {
    showLogs: !1,
    round: 1e3,
    init: function() {
        return this._log("init"), this._inited ? (this._log("Already Inited"), void(this._inited = !0)) : (this._requestAnimationFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(), void this._onScroll(!0))
        console.log('init');
    },
    _inited: !1,
    _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
    _requestAnimationFrame: null,
    _log: function(e) {
        this.showLogs && console.log("Parallax Scroll / " + e)
    },
    _onScroll: function(e) {
        var t = $(document).scrollTop(),
            a = $(window).height();
        this._log("onScroll " + t), $("[data-parallax]").each($.proxy(function(i, n) {
            var s = $(n),
                o = [],
                r = !1,
                l = s.data("style");
            void 0 == l && (l = s.attr("style") || "", s.data("style", l));
            var d, c = [s.data("parallax")];
            for (d = 2; s.data("parallax" + d); d++) c.push(s.data("parallax-" + d));
            var u = c.length;
            for (d = 0; u > d; d++) {
                var m = c[d],
                    f = m["from-scroll"];
                void 0 == f && (f = Math.max(0, $(n).offset().top - a)), f = 0 | f;
                var g = m.distance,
                    v = m["to-scroll"];
                void 0 == g && void 0 == v && (g = a), g = Math.max(0 | g, 1);
                var h = m.easing,
                    p = m["easing-return"];
                if (void 0 != h && $.easing && $.easing[h] || (h = null), void 0 != p && $.easing && $.easing[p] || (p = h), h) {
                    var y = m.duration;
                    void 0 == y && (y = g), y = Math.max(0 | y, 1);
                    var z = m["duration-return"];
                    void 0 == z && (z = y), g = 1;
                    var w = s.data("current-time");
                    void 0 == w && (w = 0)
                }
                void 0 == v && (v = f + g), v = 0 | v;
                var A = m.smoothness;
                void 0 == A && (A = 30), A = 0 | A, (e || 0 == A) && (A = 1), A = 0 | A;
                var C = t;
                C = Math.max(C, f), C = Math.min(C, v), h && (void 0 == s.data("sens") && s.data("sens", "back"), C > f && ("back" == s.data("sens") ? (w = 1, s.data("sens", "go")) : w++), v > C && ("go" == s.data("sens") ? (w = 1, s.data("sens", "back")) : w++), e && (w = y), s.data("current-time", w)), this._properties.map($.proxy(function(e) {
                    var t = 0,
                        a = m[e];
                    if (void 0 != a) {
                        "scale" == e || "scaleX" == e || "scaleY" == e || "scaleZ" == e ? t = 1 : a = 0 | a;
                        var i = s.data("_" + e);
                        void 0 == i && (i = t);
                        var n = (a - t) * ((C - f) / (v - f)) + t,
                            l = i + (n - i) / A;
                        if (h && w > 0 && y >= w) {
                            var d = t;
                            "back" == s.data("sens") && (d = a, a = -a, h = p, y = z), l = $.easing[h](null, w, d, a, y)
                        }
                        l = Math.ceil(l * this.round) / this.round, l == i && n == a && (l = a), o[e] || (o[e] = 0), o[e] += l, i != o[e] && (s.data("_" + e, o[e]), r = !0)
                    }
                }, this))
            }
            if (r) {
                if (void 0 != o.z) {
                    var b = m.perspective;
                    void 0 == b && (b = 800);
                    var E = s.parent();
                    E.data("style") || E.data("style", E.attr("style") || ""), E.attr("style", "perspective:" + b + "px; -webkit-perspective:" + b + "px; " + E.data("style"))
                }
                void 0 == o.scaleX && (o.scaleX = 1), void 0 == o.scaleY && (o.scaleY = 1), void 0 == o.scaleZ && (o.scaleZ = 1), void 0 != o.scale && (o.scaleX *= o.scale, o.scaleY *= o.scale, o.scaleZ *= o.scale);
                var x = "translate3d(" + (o.x ? o.x : 0) + "px, " + (o.y ? o.y : 0) + "px, " + (o.z ? o.z : 0) + "px)",
                    _ = "rotateX(" + (o.rotateX ? o.rotateX : 0) + "deg) rotateY(" + (o.rotateY ? o.rotateY : 0) + "deg) rotateZ(" + (o.rotateZ ? o.rotateZ : 0) + "deg)",
                    M = "scaleX(" + o.scaleX + ") scaleY(" + o.scaleY + ") scaleZ(" + o.scaleZ + ")",
                    N = x + " " + _ + " " + M + ";";
                this._log(N), s.attr("style", "transform:" + N + " -webkit-transform:" + N + " " + l)
            }
        }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1))
    }
};