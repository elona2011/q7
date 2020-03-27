function (e, t, n) {
  "use strict";

  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      r = n(54),
      o = window.captchaConfig;

  e.exports = function () {
    var e = 0,
        t = o.capChallenge;

    if ("object" === (void 0 === t ? "undefined" : i(t)) && "string" == typeof t.randstr && ("string" == typeof t.M || "number" == typeof t.M) && "string" == typeof t.ans) {
      t.ans = t.ans.toLowerCase(), t.M = parseInt(t.M);

      for (var n = 0; n < t.M && n < 1e3; n++) {
        var a = t.randstr + n,
            s = r(a);

        if (t.ans === s.toLowerCase()) {
          e = n;
          break;
        }
      }
    }

    return e;
  };
}