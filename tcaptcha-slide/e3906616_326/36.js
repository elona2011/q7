function (e, t, n) {
  "use strict";

  var i = n(11),
      r = n(1),
      o = n(0),
      a = n(12),
      s = window.captchaConfig,
      c = !0,
      u = {},
      l = (window.performance || {}).timing || {},
      f = ["unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", ["loadEventEnd", "fetchStart"], ["domComplete", "responseEnd"], ["domainLookupEnd", "domainLookupStart"], ["responseStart", "fetchStart"], ["connectEnd", "connectStart"]],
      d = {
    1: {
      inner: {
        http: 21406,
        https: 21408
      },
      open: {
        http: 21407,
        https: 21412
      }
    },
    2: 3,
    3: {
      cdn: 14,
      cgi: 13
    }
  };

  function p() {
    if (c) {
      for (var e = new Date(), t = 0; t < f.length; t++) {
        var n = f[t];
        u[t + 1] = "string" == typeof n ? l[f[t]] || 0 : (l[f[t][0]] || e) - l[f[t][1]] || 0;
      }

      !function () {
        if (u[42] = parseInt(o.queryParam("TCapIframeLoadTime")) || "0", u[43] = parseInt(o.queryParam("prehandleLoadTime")) || "0", u[44] = l.fetchStart - parseInt(o.queryParam("createIframeStart")) || "0", u[46] = u[46] - l.fetchStart || 0, u[47] = timing.point("domLoaded") - l.fetchStart || 0, u[49] = timing.logEnd("jsInit") || 0, window.performance && "function" == typeof window.performance.getEntries) {
          var e = window.performance.getEntries();

          if (e.length > 0) {
            for (var t = 1 << 30, n = -1, i = 0, r = e.length; i < r; i++) {
              var a = e[i],
                  s = a.initiatorType;

              if (s && ("link" === s || "script" === s)) {
                var c = a.fetchStart,
                    f = a.responseEnd;
                c && f && (t = Math.min(t, c), n = Math.max(n, f));
              }
            }

            u[45] = Math.ceil(n) - Math.ceil(t);
          }
        }
      }(), c = !1;
    } else u[46] = 0;
  }

  e.exports = {
    push: function (e, t) {
      u[e] = t || 0;
    },
    send: function () {
      p(), u[29] = s.aid, u[31] = i.getToken(), u[33] = s.uid, u[34] = o.queryParam("sid"), u.platform = a.platform, u.flag1 = d[1][s.curenv][a.protocol], u.flag2 = d[2], u.flag3 = d[3]["1" === s.iscdn ? "cdn" : "cgi"], u[32] = u[32] - l.fetchStart || 0, u[37] = u[37] - l.fetchStart || 0;
      var e = [];

      for (var t in u) e.push(t + "=" + u[t]);

      u = {};
      var n = s.tdcHtdocsPath + "/caplog?appid=20128&" + e.join("&");
      new Image().src = r(n);
    }
  };
}