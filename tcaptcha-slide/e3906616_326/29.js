function (e, t, n) {
  "use strict";

  var i = (window.lib || {}).flexible || {},
      r = /rem$/;
  e.exports = {
    dpr: i.dpr || 0,
    rem: i.rem || 0,
    px2rem: function (e) {
      return i.px2rem ? i.px2rem(e) : e;
    },
    rem2px: function (e) {
      return i.rem2px ? i.rem2px(e) : e;
    },
    px2remU: function (e) {
      return i.px2rem ? i.px2rem(e) + "rem" : e + "px";
    },
    rem2pxU: function (e) {
      return r.test(e) ? i.rem2px(parseFloat(e)) || 0 : parseFloat(e) || 0;
    },
    refreshRem: i.refreshRem,
    listen: function (e, t) {
      i.resizeCb && i.resizeCb.splice(e, 0, t);
    }
  };
}