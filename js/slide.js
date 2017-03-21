$(function(){
    !function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function (e) {
        function t(t) {
            var s = t || window.event, a = h.call(arguments, 1), r = 0, f = 0, d = 0, c = 0, m = 0, g = 0;
            if (t = e.event.fix(s), t.type = "mousewheel", "detail"in s && (d = -1 * s.detail), "wheelDelta"in s && (d = s.wheelDelta), "wheelDeltaY"in s && (d = s.wheelDeltaY), "wheelDeltaX"in s && (f = -1 * s.wheelDeltaX), "axis"in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * d, d = 0), r = 0 === d ? f : d, "deltaY"in s && (d = -1 * s.deltaY, r = d), "deltaX"in s && (f = s.deltaX, 0 === d && (r = -1 * f)), 0 !== d || 0 !== f) {
                if (1 === s.deltaMode) {
                    var w = e.data(this, "mousewheel-line-height");
                    r *= w, d *= w, f *= w
                } else if (2 === s.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    r *= v, d *= v, f *= v
                }
                if (c = Math.max(Math.abs(d), Math.abs(f)), (!l || l > c) && (l = c, i(s, c) && (l /= 40)), i(s, c) && (r /= 40, f /= 40, d /= 40), r = Math[r >= 1 ? "floor" : "ceil"](r / l), f = Math[f >= 1 ? "floor" : "ceil"](f / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var p = this.getBoundingClientRect();
                    m = t.clientX - p.left, g = t.clientY - p.top
                }
                return t.deltaX = f, t.deltaY = d, t.deltaFactor = l, t.offsetX = m, t.offsetY = g, t.deltaMode = 0, a.unshift(t, r, f, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
            }
        }

        function n() {
            l = null
        }

        function i(e, t) {
            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }

        var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice;
        if (e.event.fixHooks)for (var r = s.length; r;)e.event.fixHooks[s[--r]] = e.event.mouseHooks;
        var u = e.event.special.mousewheel = {
            version: "3.1.12", setup: function () {
                if (this.addEventListener)for (var n = a.length; n;)this.addEventListener(a[--n], t, !1); else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
            }, teardown: function () {
                if (this.removeEventListener)for (var n = a.length; n;)this.removeEventListener(a[--n], t, !1); else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            }, getLineHeight: function (t) {
                var n = e(t), i = n["offsetParent"in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            }, getPageHeight: function (t) {
                return e(t).height()
            }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
        };
        e.fn.extend({
            mousewheel: function (e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            }, unmousewheel: function (e) {
                return this.unbind("mousewheel", e)
            }
        })
    });
    ;
    var PAGE = function () {
        var e = {
            pageIndex: 0,
            pageSize: $(".page").size(),
            fullPlaying: !1,
            isLowIE: document.all && !document.addEventListener
        }, i = {
            setLayout: function () {
                var i = $(".swipe-wrapper"), a = $(".frame"), t = function (t) {
                    e.isLowIE || setTimeout(function () {
                        0 === t && e.fullPlaying ? ($("#fullVideo")[0].play(), $(".page-1 .cover, .frame .border, .frame .scrolltips, #menu").fadeOut()) : ($("#fullVideo")[0].pause(), $(".page-1 .cover, .frame .border, .frame .scrolltips, #menu").fadeIn())
                    }, 100), t == e.pageSize - 1 ? $(".sharebox").fadeIn() : $(".sharebox").fadeOut(), i.animate({top: 100 * -t + "%"}, 500), $(".pagination a").eq(t).addClass("active").siblings().removeClass("active"), $(".page").eq(t).addClass("animated").siblings().removeClass("animated"), t == e.pageSize - 1 ? a.addClass("last-page") : a.removeClass("last-page")
                };
                t(e.pageIndex), $("body").bind("mousewheel", function (a) {
                    if (!i.is(":animated")) {
                        if (a.deltaY > 0) {
                            if (!(e.pageIndex > 0))return !1;
                            e.pageIndex--
                        } else {
                            if (!(e.pageIndex < e.pageSize - 1))return !1;
                            e.pageIndex++
                        }
                        t(e.pageIndex)
                    }
                }), $(".pagination a").bind("click", function () {
                    var i = $(this).index();
                    e.pageIndex = i, t(i)
                });
                var n = $(".scrolltips");
                n.bind("click", function () {
                    i.is(":animated") || (n.parents(".last-page").size() > 0 ? (e.pageIndex = 0, t(0)) : e.pageIndex < e.pageSize - 1 && (e.pageIndex++, t(e.pageIndex)))
                }), document.all && !document.querySelector && $(window).resize(function () {
                    $(".frame").css({width: $(window).width() - 140 + "px", height: $(window).height() - 140 + "px"})
                }).trigger("resize")
            }, setPageOne: function () {
                if ($(".page-1 .words").addClass("show"), e.isLowIE)return $(".frame .inner,.btn-play").click(function () {
                    0 == e.pageIndex && i.popVideo({
                        flv: $("#videoBox").attr("data-f4v"),
                        mp4: $("#videoBox").attr("data-mp4"),
                        width: $("#videoBox").width(),
                        height: $("#videoBox").height(),
                        img: "about:blank"
                    })
                }), $("#dialogVideo .btn-close").bind("click", function () {
                    i.popClose(), $("#videoBox").html("")
                }), !1;
                var a = $("#fullVideo")[0], t = $("#minVideo")[0];
                $(".video-play").click(function () {
                    $(".page-1 .words").removeClass("show"), $(".page-1 .full-video").fadeIn(), $(".page-1 .cover, .frame .border, .frame .scrolltips, #menu").fadeOut(), t.pause(), e.fullPlaying = !0
                }), $("body").click(function () {
                    0 == e.pageIndex && e.fullPlaying && (a.paused ? a.play() : a.pause())
                }), $("#closeFullVideo").click(function () {
                    $(".page-1 .words").addClass("show"), $(".page-1 .full-video").fadeOut(), $(".page-1 .cover, .frame .border, .frame .scrolltips, #menu").fadeIn(), t.play(), e.fullPlaying = !1, setTimeout(function () {
                        a.pause(), a.currentTime = 0
                    }, 100)
                });
                var n = 1920 / 1080;
                $(window).resize(function () {
                    var e = $(window).width(), i = $(window).height();
                    $("video").css($(window).width() / $(window).height() > n ? {width: e, height: "auto"} : {
                        height: i,
                        width: "auto"
                    })
                }).trigger("resize"), $("#fullVideo")[0].addEventListener("ended", function () {
                    $("#closeFullVideo").trigger("click")
                })
            }, setShare: function () {
                nie.use(["nie.util.shareV3"], function () {
                    nie.util.share({
                        fat: "#share",
                        type: 1,
                        defShow: [22, 23, 2, 1, 3],
                        title: ShareTxt.title,
                        url: ShareTxt.url,
                        img: ShareTxt.img,
                        content: null,
                        product: "²úÆ·ºÅ"
                    })
                })
            }, setMenu: function () {
                $(".menu_toggle").click(function () {
                    $("#menu").toggleClass("active")
                })
            }, setCopyRightStyle: function () {
                nie.config.copyRight.setGray()
            }, popWindow: function (e) {
                var i = $("#" + e), a = (i.width(), i.height(), i.height() / 2), t = i.width() / 2;
                i.css({
                    "margin-top": -a,
                    "margin-left": -t
                }).fadeIn(), $("#fade").length < 1 && $("body").append('<div id="fade"></div>'), $("#fade").css({filter: "alpha(opacity=80)"}).fadeIn()
            }, popClose: function (e) {
                $("#fade ,.dialog ,#" + e).fadeOut()
            }, popVideo: function (e) {
                nie.use(["nie.util.video", "util.swfobject"], function () {
                    nie.util.video($("#videoBox"), {
                        movieUrl: e.flv,
                        mp4_movieUrl: e.mp4,
                        width: e.width,
                        height: e.height,
                        bufferTime: 5,
                        loopTimes: 0,
                        wmode: "opaque",
                        volume: .3,
                        startImg: e.img,
                        autoPlay: !0,
                        playComplete_callBack: function () {
                            $("#dialogVideo .btn-close").trigger("click")
                        }
                    })
                }), i.popWindow("dialogVideo")
            }
        }, a = function () {
            i.setLayout(), i.setPageOne(), i.setMenu(), i.setShare()
        };
        return {fn: i, init: a}
    }();
    $(function () {
        PAGE.init()
    });
});