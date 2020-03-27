function (e, t, i) {
  "use strict";

  var r = function (e) {
    e = e;
    return function () {
      return window.document.getElementById(e);
    };
  },
      n = function (e) {
    e = e;
    return function () {
      return function (e) {
        if (document.getElementsByClassName) return document.getElementsByClassName(e);

        for (var t = document.getElementsByTagName("*"), i = /(^\s*)|(\s*$)/g, r = [], n = new RegExp("(^" + e + "\\s+|\\s+" + e + "\\s+|\\s+" + e + "$|^" + e + "$)"), o = 0; o < t.length; o++) {
          var a = t[o].className.replace(i, "");
          a && n.test(a) && r.push(t[o]);
        }

        return r;
      }(e);
    };
  },
      o = r("tcaptcha_transform"),
      a = r("tcaptcha_container"),
      s = r("ticon_refresh"),
      c = r("transform_header"),
      p = r("transform_text"),
      d = r("transform_close"),
      u = r("transform_eicon"),
      f = r("transform_eb"),
      l = r("transform_eh"),
      h = n("dots_item"),
      m = r("t_verify"),
      g = r("verify_text"),
      y = r("verify_icon"),
      v = r("tcaptcha_iframe"),
      S = n("ticons");

  e.exports = {
    border: o,
    refIcon: s,
    ref1Text: c,
    ref2Text: p,
    popClose: d,
    fullBackIcon: u,
    fullBackText: f,
    fullHeader: l,
    dots: h,
    tVerify: m,
    verifyText: g,
    verifyIcon: y,
    tIframe: v,
    tIcons: S,
    container: a
  };
}