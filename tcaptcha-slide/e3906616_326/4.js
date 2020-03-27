function (e, t, n) {
  "use strict";

  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      r = Object.assign || n(2),
      o = function (e) {
    return function (t) {
      return Object.prototype.toString.call(t) == "[object " + e + "]";
    };
  },
      a = o("Object"),
      s = o("Function"),
      c = function () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  },
      u = function () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  },
      l = function (e, t, n) {
    if (-1 != e.indexOf("?")) {
      var i = new RegExp("(\\?|&" + t + ")=[^&]*");
      e = i.test(e) ? e.replace(i, "$1=" + n) : e + "&" + t + "=" + n;
    } else e = e + "?" + t + "=" + n;

    return e;
  },
      f = function (e, t) {
    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t];
  },
      d = function (e, t) {
    if (e && t) {
      if (a(t)) {
        for (var n in t) e.style[n] = t[n];

        return t;
      }

      return f(e, t);
    }
  },
      p = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent),
      h = /chrome\/7[567]/i.test(navigator.userAgent),
      m = function () {
    var e = 1,
        t = void 0;
    if (document.querySelector) t = document.querySelector('meta[name="viewport"]');else for (var n = document.getElementsByTagName("meta"), i = 0, r = n.length; i < r; i++) {
      "viewport" == n[i].getAttribute("name") && (t = n[i]);
    }

    if (t) {
      var o = t.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
      o && (e = parseFloat(o[1]));
    }

    return e;
  },
      g = ["absolute", "fixed", "static", "relative"],
      v = !!window.ActiveXObject && 8 == document.documentMode;

  e.exports = {
    extend: r,
    isObject: a,
    isFunction: s,
    isHorizontal: function (e, t) {
      if ("number" == typeof window.orientation && "object" === i(window.onorientationchange) && (-90 == window.orientation || 90 == window.orientation)) return !0;

      if (e) {
        if (t.windowHeight < t.windowWidth) return !0;
      } else if (window.innerHeight < window.innerWidth) return !0;

      return !1;
    },
    callbackExecutor: function (e, t) {
      e.closeSecurityCode(), setTimeout(function () {
        for (var n = 0, i = e.listenFunc.length; n < i; n++) try {
          e.listenFunc[n](t);
        } catch (r) {}
      }, 0);
    },
    addUrlParam: function (e, t) {
      for (var n in t) e = l(e, encodeURIComponent(n), encodeURIComponent(t[n]));

      return e;
    },
    removeIfExist: function (e) {
      for (var t = window.document.getElementById(e); t;) t.parentNode.removeChild(t), t = window.document.getElementById(e);
    },
    createElement: function (e) {
      return document.createElement(e);
    },
    CSS: d,
    computeBaseFontSize: function () {
      var e = c(),
          t = u(),
          n = 0;
      "orientation" in window ? n = window.orientation : screen && screen.orientation && (n = screen.orientation.angle);
      var i = (90 === Math.abs(n) ? t : e) / 375,
          r = void 0,
          o = m();
      return i = (i = 0 == o || 1 == o ? i > 1.3 ? 1.3 : i : o >= .5 ? i > 2 ? 2 : i : i > 3 ? 3 : i) < .85 ? .85 : i, r = parseInt(1e4 * i) / 1e4 * 16, r = p ? r : 16;
    },
    isMobileUa: p,
    getWindowWidth: c,
    getWindowHeight: u,
    getParentScale: m,
    getPosStyle: function (e) {
      var t = "embed" == e.type ? "relative" : "absolute";
      if ("popup" == e.type && e.pos && e.pos.length > 0) for (var n = 0; n < g.length; n++) if (e.pos === g[n]) {
        t = e.pos;
        break;
      }
      return t;
    },
    initColor: function (e) {
      var t = "#4886ff";

      if (e) {
        var n = decodeURIComponent(e);
        n && -1 == n.indexOf("#") && 6 == n.length && /^[0-9a-fA-F]{6}$/g.test(n) && (t = "#" + n);
      }

      return t;
    },
    getCSS: f,
    isIEVer: function (e) {
      var t = document.createElement("b");
      return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e", t.getElementsByTagName("i") && 1 === t.getElementsByTagName("i").length;
    },
    getPos: function (e) {
      if ("undefined" != typeof e.offsetParent) {
        for (var t = 0, n = 0; e; e = e.offsetParent) {
          var i = f(e, "borderLeftWidth");
          i = i && i.indexOf("px") > -1 ? parseInt(i, 10) : 0;
          var r = f(e, "borderTopWidth");
          r = r && r.indexOf("px") > -1 ? parseInt(r, 10) : 0, v && (i = r = 0), t += e.offsetLeft + i, n += e.offsetTop + r;
        }

        return [t, n];
      }

      return [e.x, e.y];
    },
    getSize: function (e) {
      var t = d(e, "width"),
          n = d(e, "height");
      return [parseInt(t, 10), parseInt(n, 10)];
    },
    getScrollTop: function () {
      return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
    isLowIE: function () {
      var e,
          t,
          n = navigator.userAgent.toLowerCase(),
          i = n.indexOf("msie") > -1;

      if (i) {
        if (e = n.match(/msie ([\d.]+)/)[1], t = i && document.documentMode, e && e <= 8) return !0;
        if (t && t < 9) return !0;
      }

      return !1;
    },
    getCapType: function (e, t) {
      e = parseInt(e, 10), t = parseInt(t, 10);
      var n = "defaultSize";

      if (0 != e && 1 != e || 0 != t) {
        if (1 == e || 2 == e) switch (t) {
          case 1:
            n = "click";
            break;

          case 4:
            n = "piece";
            break;

          case 7:
            n = "coordinate";
            break;

          case 8:
            n = "slide";
            break;

          case 9:
            n = "slidepuzzle";
            break;

          case 11:
            n = "vtt";
            break;

          case 12:
            n = "f_limit";
            break;

          case 10:
          case 13:
          case 14:
            n = "slidepuzzle_new";
            break;

          case 15:
            n = "slidepuzzle_opt";
            break;

          default:
            n = "defaultSize";
        }
      } else n = "char";

      return n;
    },
    setPopPosition: function (e, t, n, i) {
      var r = 0,
          o = 0,
          a = c(),
          s = u();
      return i && i.width || (r = Math.floor((s - n - 2) / 2), o = Math.floor((a - t - 2) / 2)), d(e, {
        top: r + "px",
        left: o + "px",
        width: t + "px",
        height: n + "px"
      });
    },
    addClass: function (e, t) {
      var n = e.className,
          i = n + ("" != n ? " " : "") + t;
      e.className = i;
    },
    removeClass: function (e, t) {
      var n = " " + e.className + " ",
          i = (n = n.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " ");
      i = i.replace(/(^\s+)|(\s+$)/g, ""), e.className = i;
    },
    isChrome75: h,
    isDarkMode: function () {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };
}