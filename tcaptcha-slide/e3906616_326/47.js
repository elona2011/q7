function (e, t, n) {
  "use strict";

  var i = n(29),
      r = 300,
      o = /^touch/,
      a = /^(relative|absolute)$/,
      s = !1,
      c = {
    x: "left",
    y: "top",
    "-x": "right",
    "-y": "bottom"
  },
      u = {
    x: "width",
    y: "height"
  },
      l = navigator.userAgent,
      f = /TCSDK\//.test(l) && /iphone|ipad|ipod/i.test(l),
      d = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent),
      p = document.body,
      h = {
    width: Math.max(p.clientWidth, p.offsetWidth),
    height: Math.max(p.clientHeight, p.offsetHeight, p.scrollHeight) - 10
  };

  e.exports = function (e, t, n, l) {
    var p = void 0,
        m = void 0,
        g = void 0,
        v = void 0,
        y = !1,
        w = -1,
        b = {},
        k = -1,
        E = 1 << 30,
        x = [],
        T = [],
        S = "x",
        C = c[S];

    function z() {
      x = [], k = -1, E = 1 << 30;

      for (var e = function (e) {
        var t = T[e],
            n = t.offset();
        n.width || (n.width = t.width());
        var i = u[S];
        t.parents().each(function (r, o) {
          var s = $(o);

          if (a.test(s.css("position"))) {
            var c = s.offset();
            return c.width || (c.width = s.width()), 0 === e ? (x[e] = b.left, b.middle = b.left + n.width / 2, b.min = c[C], b.max = c[i] + c[C] - n[i], t.css(C, b.left + "px")) : (x[e] = b.middle - n[i] / 2, t.css(C, b.middle - n[i] / 2 + "px")), !1;
          }
        });
      }, t = 0; t < T.length; t++) e(t);
    }

    function R(e) {
      if (o.test(e.type)) {
        var t = e;
        e.originalEvent && o.test(e.originalEvent.type) && (t = e.originalEvent);
        var n = t.touches[0];
        return n ? {
          x: n.clientX,
          y: n.clientY,
          t: +new Date() - g
        } : null;
      }

      return {
        x: e.pageX,
        y: e.pageY,
        t: +new Date() - g
      };
    }

    function _() {
      for (var e = 0; e < T.length; e++) {
        var t = T[e],
            n = x[e] + m[S] - p[S];
        t.css(C, n + "px");
      }
    }

    function P(e) {
      if (d || e && e.preventDefault && e.preventDefault(), y) {
        g = !1, w = -1;

        for (var t = 0; t < T.length; t++) {
          var i = T[t];

          if (i[0] === e.target || $(e.target).parents().index(i) >= 0) {
            v = [], g = +new Date(), w = t, m = p = R(e);
            var r = p[S] - i.offset()[c[S]],
                o = x[t] - x[0];
            k = b.min + r + o, E = b.max + r + o;
          }
        }

        g && s && s(D), setTimeout(function () {
          n && n();
        }, 0);
      }
    }

    var j,
        O = void 0;

    function A(e) {
      var t, n;
      d || e && e.preventDefault && e.preventDefault(), g && (clearTimeout(O), f && (t = e.pageX, n = e.pageY, t < 0 || n < 0 || t > h.width || n > h.height) && (O = setTimeout(function () {
        I();
      }, 350)), m = R(e) || p, v.length < r && v.push(m), k > m[S] ? m[S] = k : E < m[S] && (m[S] = E), s || _());
    }

    function I() {
      if (g) {
        0 === v.length && v.push(p), M.dragDuration = +new Date() - g, g = !1;

        for (var e = [], t = v.length - 1; t >= 0; t--) t > 0 ? (v[t].x = Math.ceil(v[t].x - v[t - 1].x), v[t].y = Math.ceil(v[t].y - v[t - 1].y), v[t].t = v[t].t - v[t - 1].t) : (v[t].x = Math.ceil(v[t].x), v[t].y = Math.ceil(v[t].y)), 0 == v[t].x && 0 == v[t].y || e.push([v[t].x, v[t].y, v[t].t]);

        setTimeout(function () {
          "function" == typeof l && l(m, w, e.reverse());
        }, 0);
      }
    }

    function D() {
      g && (_(), s(D));
    }

    (j = $(e)).on("mousedown touchstart", P), j.on("mousemove touchmove", A), j.on("mouseup touchend touchcancel", I), $(document).on("mousemove", A), $(document).on("mouseup mouseleave", I), j.on("touchstart", function (e) {
      if ($(e.target).parents().index(j) >= 0 && "coverReload" != e.target.id) return !1;
    }), i.listen(1, z), function () {
      var e = $(t[0]);
      b.left = parseInt(e.css("left")), T = [];

      for (var n = 0; n < t.length; n++) T.push($(t[n]));
    }();
    var M = {
      moveBack: function (e) {
        for (var t = 0; t < T.length; t++) T[t].animate({
          left: x[t] + "px"
        }, 300, "linear", function () {});

        e !== undefined && (y = !!e);
      },
      boundaryCalc: z,
      movable: function (e) {
        y = e;
      }
    };
    return M;
  };
}