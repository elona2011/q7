function (e, t, i) {
  "use strict";

  var r,
      n,
      o = i(1),
      a = {
    ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
    ERROR_TYPE_JSONP_PREHANDLE: 17,
    ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
    CALLBACK_NAME: 19
  },
      s = {
    ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: "ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL",
    ERROR_TYPE_JSONP_PREHANDLE: "ERROR_TYPE_JSONP_PREHANDLE",
    ERROR_TYPE_FRAMEJS_CODE_ERROR: "ERROR_TYPE_FRAMEJS_CODE_ERROR",
    CALLBACK_NAME: "CALLBACK_NAME"
  },
      c = (r = document.referrer, n = location.href || document.URL, r = r.length > 512 ? r.substr(0, 512) : r, n = n.length > 1024 ? n.substr(0, 1024) : n, ["referer=" + encodeURIComponent(r), "href=" + encodeURIComponent(n)].join("&"));
  e.exports = {
    type: a,
    send: function (e, t, i) {
      try {
        (i = i || s[e]).length > 1024 && i.substr(0, 1024);
        var r = ["type=" + (e = a[e]), "appid=" + t, "reason=" + encodeURIComponent(i)],
            n = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?" + c + "&" + r.join("&");
        new Image().src = o(n);
      } catch (p) {}
    },
    perfectStack: function (e) {
      var t = "";
      e && e.stack && (t = e.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));

      try {
        var i = e.toString();
        t.indexOf(i) < 0 && (t = i + "@" + t);
      } catch (r) {}

      return t;
    }
  };
}