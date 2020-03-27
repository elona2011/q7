function (e, t, n) {
  "use strict";

  var i,
      r,
      o = n(10),
      a = window.document.documentElement,
      s = window.document.documentElement.style.fontSize,
      c = (r = "fontSize", (i = a).currentStyle ? i.currentStyle[r] : document.defaultView.getComputedStyle(i, !1)[r]),
      u = parseFloat(s),
      l = parseFloat(c),
      f = !0;

  var d = function (e, t) {
    o.send(capMonitor.type.ERROR_TYPE_IMAGE_BEYONDSIZE, beyondSizeReason), f && (f = !1, a.style.fontSize = u * u / l + "px", h(e, t));
  },
      p = function (e) {
    return parseFloat(e.replace(/px/, ""));
  },
      h = function (e, t) {
    try {
      var n = s + "," + c + ";" + t + "," + e + ";" + (screen && screen.availWidth || window.innerWidth) + ";" + (window.devicePixelRatio || "0");
      n = f ? "before;" + n : "after;" + n, e - t > 10 ? d(e, t) : s && c && p(c) - p(s) > 1 && d(e, t);
    } catch (i) {}
  };

  e.exports = {
    send: h
  };
}