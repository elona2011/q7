function (e, t, n) {
  "use strict";

  var i = window.timing,
      r = window.captchaConfig,
      o = void 0;
  e.exports = {
    init: function () {
      return o = null, "undefined" != typeof window.vm && window.vm.entry && (i.log("vmInit"), o = new window.vm.entry(r.vmByteCode), i.logEnd("vmInit")), o;
    },
    run: function (e) {
      var t = {},
          n = r.vmAvailable,
          a = r.vmByteCode;
      t.vlg = [n ? 1 : 0, a ? 1 : 0, 1].join("_"), n && a ? (i.log("vmRun"), o && o.run ? o.run(function (n) {
        t.vmData = n, t.vmtime = [i.logEnd("vmInit"), i.logEnd("vmRun")].join("_"), e(t);
      }) : e(t)) : e(t);
    }
  };
}