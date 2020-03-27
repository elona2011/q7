function (e, t, n) {
  "use strict";

  var i = n(4),
      r = navigator.userAgent,
      o = /nettype\/(4g|wifi)/i.test(r),
      a = /iphone|ipad|ipod/gi.test(r) ? "ios" : "android",
      s = "https:" === location.protocol ? "https" : "http",
      c = window.captchaConfig;
  i.isMobileUa || (a = "pc"), e.exports = {
    ua: r,
    loadState: {
      ready: 0,
      fail: 1,
      mixing: 2
    },
    cgiImg: "/cap_union_new_getcapbysig",
    isFastNet: o,
    loadImgTimeout: o ? 8e3 : 15e3,
    platform: a,
    protocol: s,
    config: c,
    popup: "popup" === c.showtype,
    corsAttr: {
      attrs: {
        crossorigin: "anonymous"
      }
    },
    companyInfo: "1" === c.slink && "2052" === c.lang,
    needFp: "tokenidiframe_d.js" !== c.fpFileName,
    needVm: "dc_vx.js" !== c.vmFileName
  };
}