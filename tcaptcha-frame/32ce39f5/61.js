function (e, t, i) {
  "use strict";

  var r = function (e, t, i) {
    if (-1 != e.indexOf("?")) {
      var r = new RegExp("(\\?|&" + t + ")=[^&]*");
      e = r.test(e) ? e.replace(r, "$1=" + i) : e + "&" + t + "=" + i;
    } else e = e + "?" + t + "=" + i;

    return e;
  };

  e.exports = {
    add: function (e, t) {
      for (var i in t) e = r(e, encodeURIComponent(i), encodeURIComponent(t[i]));

      return e;
    }
  };
}