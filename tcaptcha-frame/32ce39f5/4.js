function (e, t, i) {
  "use strict";

  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      n = Object.assign || i(2),
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
      p = function () {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  },
      d = function (e, t, i) {
    if (-1 != e.indexOf("?")) {
      var r = new RegExp("(\\?|&" + t + ")=[^&]*");
      e = r.test(e) ? e.replace(r, "$1=" + i) : e + "&" + t + "=" + i;
    } else e = e + "?" + t + "=" + i;

    return e;
  },
      u = function (e, t) {
    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t];
  },
      f = function (e, t) {
    if (e && t) {
      if (a(t)) {
        for (var i in t) e.style[i] = t[i];

        return t;
      }

      return u(e, t);
    }
  },
      l = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent),
      h = /chrome\/7[567]/i.test(navigator.userAgent),
      m = function () {
    var e = 1,
        t = void 0;
    if (document.querySelector) t = document.querySelector('meta[name="viewport"]');else for (var i = document.getElementsByTagName("meta"), r = 0, n = i.length; r < n; r++) {
      "viewport" == i[r].getAttribute("name") && (t = i[r]);
    }

    if (t) {
      var o = t.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
      o && (e = parseFloat(o[1]));
    }

    return e;
  },
      g = ["absolute", "fixed", "static", "relative"],
      y = !!window.ActiveXObject && 8 == document.documentMode;

  e.exports = {
    extend: n,
    isObject: a,
    isFunction: s,
    isHorizontal: function (e, t) {
      if ("number" == typeof window.orientation && "object" === r(window.onorientationchange) && (-90 == window.orientation || 90 == window.orientation)) return !0;

      if (e) {
        if (t.windowHeight < t.windowWidth) return !0;
      } else if (window.innerHeight < window.innerWidth) return !0;

      return !1;
    },
    callbackExecutor: function (e, t) {
      e.closeSecurityCode(), setTimeout(function () {
        for (var i = 0, r = e.listenFunc.length; i < r; i++) try {
          e.listenFunc[i](t);
        } catch (n) {}
      }, 0);
    },
    addUrlParam: function (e, t) {
      for (var i in t) e = d(e, encodeURIComponent(i), encodeURIComponent(t[i]));

      return e;
    },
    removeIfExist: function (e) {
      for (var t = window.document.getElementById(e); t;) t.parentNode.removeChild(t), t = window.document.getElementById(e);
    },
    createElement: function (e) {
      return document.createElement(e);
    },
    CSS: f,
    computeBaseFontSize: function () {
      var e = c(),
          t = p(),
          i = 0;
      "orientation" in window ? i = window.orientation : screen && screen.orientation && (i = screen.orientation.angle);
      var r = (90 === Math.abs(i) ? t : e) / 375,
          n = void 0,
          o = m();
      return r = (r = 0 == o || 1 == o ? r > 1.3 ? 1.3 : r : o >= .5 ? r > 2 ? 2 : r : r > 3 ? 3 : r) < .85 ? .85 : r, n = parseInt(1e4 * r) / 1e4 * 16, n = l ? n : 16;
    },
    isMobileUa: l,
    getWindowWidth: c,
    getWindowHeight: p,
    getParentScale: m,
    getPosStyle: function (e) {
      var t = "embed" == e.type ? "relative" : "absolute";
      if ("popup" == e.type && e.pos && e.pos.length > 0) for (var i = 0; i < g.length; i++) if (e.pos === g[i]) {
        t = e.pos;
        break;
      }
      return t;
    },
    initColor: function (e) {
      var t = "#4886ff";

      if (e) {
        var i = decodeURIComponent(e);
        i && -1 == i.indexOf("#") && 6 == i.length && /^[0-9a-fA-F]{6}$/g.test(i) && (t = "#" + i);
      }

      return t;
    },
    getCSS: u,
    isIEVer: function (e) {
      var t = document.createElement("b");
      return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e", t.getElementsByTagName("i") && 1 === t.getElementsByTagName("i").length;
    },
    getPos: function (e) {
      if ("undefined" != typeof e.offsetParent) {
        for (var t = 0, i = 0; e; e = e.offsetParent) {
          var r = u(e, "borderLeftWidth");
          r = r && r.indexOf("px") > -1 ? parseInt(r, 10) : 0;
          var n = u(e, "borderTopWidth");
          n = n && n.indexOf("px") > -1 ? parseInt(n, 10) : 0, y && (r = n = 0), t += e.offsetLeft + r, i += e.offsetTop + n;
        }

        return [t, i];
      }

      return [e.x, e.y];
    },
    getSize: function (e) {
      var t = f(e, "width"),
          i = f(e, "height");
      return [parseInt(t, 10), parseInt(i, 10)];
    },
    getScrollTop: function () {
      return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
    isLowIE: function () {
      var e,
          t,
          i = navigator.userAgent.toLowerCase(),
          r = i.indexOf("msie") > -1;

      if (r) {
        if (e = i.match(/msie ([\d.]+)/)[1], t = r && document.documentMode, e && e <= 8) return !0;
        if (t && t < 9) return !0;
      }

      return !1;
    },
    getCapType: function (e, t) {
      e = parseInt(e, 10), t = parseInt(t, 10);
      var i = "defaultSize";

      if (0 != e && 1 != e || 0 != t) {
        if (1 == e || 2 == e) switch (t) {
          case 1:
            i = "click";
            break;

          case 4:
            i = "piece";
            break;

          case 7:
            i = "coordinate";
            break;

          case 8:
            i = "slide";
            break;

          case 9:
            i = "slidepuzzle";
            break;

          case 11:
            i = "vtt";
            break;

          case 12:
            i = "f_limit";
            break;

          case 10:
          case 13:
          case 14:
            i = "slidepuzzle_new";
            break;

          case 15:
            i = "slidepuzzle_opt";
            break;

          default:
            i = "defaultSize";
        }
      } else i = "char";

      return i;
    },
    setPopPosition: function (e, t, i, r) {
      var n = 0,
          o = 0,
          a = c(),
          s = p();
      return r && r.width || (n = Math.floor((s - i - 2) / 2), o = Math.floor((a - t - 2) / 2)), f(e, {
        top: n + "px",
        left: o + "px",
        width: t + "px",
        height: i + "px"
      });
    },
    addClass: function (e, t) {
      var i = e.className,
          r = i + ("" != i ? " " : "") + t;
      e.className = r;
    },
    removeClass: function (e, t) {
      var i = " " + e.className + " ",
          r = (i = i.replace(/(\s+)/gi, " ")).replace(" " + t + " ", " ");
      r = r.replace(/(^\s+)|(\s+$)/g, ""), e.className = r;
    },
    isChrome75: h,
    isDarkMode: function () {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };
}