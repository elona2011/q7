function (e, t, i) {
  "use strict";

  var r,
      n,
      o = (r = 1, (n = function (e) {
    return e = /subsid=\d+/.test(e) ? e.replace(/subsid=\d+/g, "subsid=" + r) : e.indexOf("?") >= 0 ? e + "&subsid=" + r : e + "?subsid=" + r, r++, e;
  }).reset = function () {
    r = 1;
  }, n.set = function (e) {
    e && (r = e);
  }, n);
  e.exports = o;
}