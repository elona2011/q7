function (e, t, n) {
  "use strict";

  var i = n(1),
      r = 0,
      o = function (e, t, n) {
    r++, t = i(t);

    var o = !1,
        a = void 0,
        s = function (e) {
      return function () {
        o || (clearTimeout(a), e());
      };
    },
        c = new Image();

    c.onload = s(function () {
      e.attr("src", t), n.success && n.success(c, t);
    }), c.onerror = s(function () {
      n.error && n.error(null, t);
    }), n.timeout && (a = setTimeout(function () {
      o = !0, n.error && n.error(null, t);
    }, n.timeout)), c.src = t;
  };

  o.loading = function () {
    return r;
  }, e.exports = o;
}