function (e, t, n) {
  "use strict";

  var i = n(34),
      r = n(0).arrIndexOf,
      o = n(43),
      a = {},
      s = !1;

  function c(e) {
    (a = window.TDC || {}).initReport || (setTimeout(function () {
      !function (e) {
        if (!e) return;
        var t = window.scriptSuccess.tdc,
            n = "number" == typeof t && t > 1;
        1 !== t || f() || (m(e), window.scriptRunFailure = {
          tdc: 1
        });
        n && (f() || m(e), h(e), p(e, t));
        d() && h(e);
      }(e);
    }, 1200), a.initReport = !0);
  }

  function u(e) {
    a.setData && a.setData(e);
  }

  function l() {
    return "function" == typeof a.getInfo && a.getInfo() || {};
  }

  function f() {
    return "undefined" != typeof window.TDC && "function" == typeof a.getData;
  }

  function d() {
    return r(window.scriptErrors, "tdc") > -1;
  }

  function p(e, t) {
    e && e.send(e.type.ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS, t);
  }

  function h(e) {
    e && e.send(e.type.ERROR_TYPE_TDC_DOWNLOAD_FAIL);
  }

  function m(e) {
    e && e.send(e.type.ERROR_TYPE_TDC_RUN_FAIL);
  }

  e.exports = {
    link: c,
    setData: u,
    getData: function () {
      u({
        ft: i()
      });
      var e = window.scriptErrors || [],
          t = r(e, "tdc") > -1;
      return "function" == typeof a.getData ? a.getData(!0) || "---" : t ? "------" : "---";
    },
    clearData: function () {
      a.clearTc && a.clearTc();
    },
    getInfo: l,
    getToken: function () {
      return (l() || {}).tokenid || "";
    },
    getEks: function () {
      return (l() || {}).info || "";
    },
    getTlg: function () {
      return "undefined" == typeof window.TDC ? 0 : 1;
    },
    checkTdcSuccess: f,
    retryLoad: function (e) {
      try {
        if (window.TDC || s || !e) return;
        var t = window.captchaConfig.tdcHtdocsPath + "/" + window.captchaConfig.dcFileName;
        s = !0, o(t, function (t) {
          s = !1, t || setTimeout(function () {
            c(), d() && (function () {
              for (var e = void 0, t = 0; t < window.scriptErrors.length; t++) if ("tdc" === window.scriptErrors[t]) {
                e = t;
                break;
              }

              "number" == typeof e && window.scriptErrors.splice(e, 1);
            }(), p(e, 4)), f() ? window.scriptRunFailure && 1 === window.scriptRunFailure.tdc && function (e) {
              e && e.send(e.type.ERROR_TYPE_TDC_RUN_RETRY_SUCCESS);
            }(e) : window.scriptRunFailure = {
              tdc: 1
            };
          }, 500);
        });
      } catch (n) {}
    }
  };
}