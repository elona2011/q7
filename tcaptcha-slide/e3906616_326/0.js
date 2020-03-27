function (e, t, n) {
  "use strict";

  function i() {
    return Math.floor(1e8 * Math.random());
  }

  var r = function (e) {
    e = e ? 1 : 0;

    try {
      return location.search.substr(e);
    } catch (i) {
      try {
        var t = document.URL,
            n = t.indexOf("?");
        if (n >= 0) return t.substr(n + e);
      } catch (i) {}
    }

    return "";
  },
      o = {};

  !function () {
    for (var e = r(!0).split("&"), t = 0; t < e.length; t++) {
      var n = /(.*?)=(.*)/.exec(e[t]);
      n && (o[n[1]] = n[2]);
    }
  }();
  e.exports = {
    href: function () {
      try {
        return location.href;
      } catch (e) {
        try {
          return document.URL;
        } catch (e) {}
      }

      return "";
    },
    getQuery: function (e) {
      var t = r();
      return t = t ? t.replace(/&rand=[^&]+/, "") + "&rand=" + i() : "?rand=" + i(), e = e ? 1 : 0, t.substr(e);
    },
    queryParam: function (e) {
      return o[e];
    },
    queryMap: function () {
      return $.extend({}, o);
    },
    parse2rgb: function (e) {
      if (!e || "string" != typeof e) return null;
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
        return t + t + n + n + i + i;
      });
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16),
        s: "#" + t[1] + t[2] + t[3]
      } : null;
    },
    arrIndexOf: function (e, t) {
      if ("function" == typeof e.indexOf) return e.indexOf(t);

      for (var n = 0; n < e.length; n++) if (e[n] === t) return n;

      return -1;
    }
  };
}