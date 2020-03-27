function (e, t, n) {
  "use strict";

  var i = n(10),
      r = {},
      o = function (e) {
    var t = "";
    e && e.stack && (t = e.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));

    try {
      var n = e.toString();
      t.indexOf(n) < 0 && (t = n + "@" + t);
    } catch (i) {}

    return t;
  },
      a = function (e) {
    var t = o(e);
    r[t] || (r[t] = !0, i.send(1, t));
  };

  window.addEventListener ? addEventListener("error", function (e) {
    a(e.error);
  }) : window.onerror = function (e, t, n, a, s) {
    var c = "";
    c = s && s.stack ? o(s) : e, r[c] || (r[c] = !0, i.send(1, c, 20));
  }, e.exports = a;
}