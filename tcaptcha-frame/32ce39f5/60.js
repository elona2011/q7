function (e, t, i) {
  "use strict";

  var r = Object.assign || i(2),
      n = i(61).add;

  e.exports = function (e) {
    var t = window.document.getElementsByTagName("script")[0],
        i = window.document.createElement("script"),
        o = e.callback || "callback",
        a = "_aq_" + Math.floor(1e6 * Math.random());

    window[a] = function () {
      try {
        delete window[a];
      } catch (t) {}

      e.success && e.success.apply(null, Array.prototype.slice.call(arguments));
    }; //   debugger


    var s = e.url,
        c = {};
    c[o] = a, e.data && (c = r(c, e.data)), s = n(s, c), i.async = !!e.async, i.src = s, i.onload = function () {
      i && t.parentNode && t.parentNode.removeChild(i);
    }, i.onerror = e.error || function () {}, t.parentNode.insertBefore(i, t);
  };
}