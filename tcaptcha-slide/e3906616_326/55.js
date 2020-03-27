function (e, t, n) {
  "use strict";

  var i = n(11),
      r = window.navigator.userAgent,
      o = window.captchaConfig,
      a = function () {
    var e = {
      info: "unknown",
      version: 0
    };

    try {
      /micromessenger/i.test(r) ? (e.info = "micromessenger", e.version = r.match(/micromessenger\/([\d.]+)/i)[1]) : /mqqbrowser/i.test(r) ? (e.info = "qqbroswer", e.version = r.match(/mqqbrowser\/([\d.]+)/i)[1]) : /ucbrowser/i.test(r) ? (e.info = "UCbrowser", e.version = r.match(/ucbrowser\/([\d.]+)/i)[1]) : /ucweb/i.test(r) ? (e.info = "UCWeb", e.version = r.match(/ucweb\/([\d.]+)/i)[1]) : /MiuiBrowser/i.test(r) ? (e.info = "MiuiBrowser", e.version = r.match(/miuibrowser\/([\d.]+)/i)[1]) : /hs-t929_td/i.test(r) ? (e.info = "HS-T929_TD", e.version = r.match(/hs-t929_td\/([\d.]+)/i)[1]) : /k-touch_tou_ch_2/i.test(r) ? (e.info = "k-touch_tou_ch_2", e.version = r.match(/k-touch_tou_ch_2\/([\s]+)/i)[1]) : /chrome/i.test(r) ? (e.info = "chrome", e.version = r.match(/chrome\/([\d.]+)/i)[1]) : /safari/i.test(r) && /iphone/i.test(r) ? (e.info = "safari", e.version = r.match(/safari\/([\d.]+)/i)[1]) : (e.info = "unknown", e.version = 0);
    } catch (t) {}

    return e;
  },
      s = {
    clientInfo: a().info,
    clientVersion: a().version,
    os: function () {
      var e = "";

      try {
        /android/i.test(r) ? e = "Android " + r.match(/android\s+([^\s]*)/i)[1] : /iphone/i.test(r) && (e = "IOS " + r.match(/iphone\s+os\s+([^\s]*)/i)[1].replace("_", "."));
      } catch (t) {}

      return e;
    }(),
    osVersion: function () {
      try {
        if (/android/i.test(r)) return r.match(/([^;]+)\s+Build/i)[1];
        if (/iphone/i.test(r)) return r.match(/([^\(]*);/)[1];
      } catch (e) {}

      return "";
    }(),
    netType: o.aid,
    customInfo: "custominfo:clientIP:" + o.uip,
    "d-wx-push": 1
  };

  e.exports = function () {
    s.imei = i.getToken();
    var e = [];

    for (var t in s) e.push(t + "=" + s[t]);

    return e.join("&");
  };
}