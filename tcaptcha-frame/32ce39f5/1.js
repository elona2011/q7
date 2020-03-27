function (e, t, i) {
  "use strict";

  var r = function () {
    var e = 1,
        t = /subsid=(\d+)/.exec(location.href);
    t && (e = parseInt(t[1], 10) + 1);

    var i = function (t, i) {
      var r = i || e;
      return t = /subsid=\d+/.test(t) ? t.replace(/subsid=\d+/g, "subsid=" + r) : t + "&subsid=" + r, i || e++, t;
    };

    return i.get = function () {
      return e;
    }, i.bind = function () {
      var t = e++;
      return function (e) {
        return i(e, t);
      };
    }, i;
  }();

  e.exports = r;
}