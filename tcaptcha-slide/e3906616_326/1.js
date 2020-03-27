function (e, t, n) {
  "use strict";

  var i = function () {
    var e = 1,
        t = /subsid=(\d+)/.exec(location.href);
    t && (e = parseInt(t[1], 10) + 1);

    var n = function (t, n) {
      var i = n || e;
      return t = /subsid=\d+/.test(t) ? t.replace(/subsid=\d+/g, "subsid=" + i) : t + "&subsid=" + i, n || e++, t;
    };

    return n.get = function () {
      return e;
    }, n.bind = function () {
      var t = e++;
      return function (e) {
        return n(e, t);
      };
    }, n;
  }();

  e.exports = i;
}