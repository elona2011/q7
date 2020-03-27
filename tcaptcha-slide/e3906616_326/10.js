function (e, t, n) {
  "use strict";

  var i,
      r,
      o = n(11),
      a = n(0),
      s = n(1),
      c = window.captchaConfig,
      u = (i = document.referrer, r = a.href(), i = i.length > 512 ? i.substr(0, 512) : i, r = r.length > 1024 ? r.substr(0, 1024) : r, ["appid=" + c.aid, "uid=" + c.uid, "sid=" + a.queryParam("sid"), "referer=" + encodeURIComponent(i), "href=" + encodeURIComponent(r)].join("&"));
  e.exports = {
    type: {
      ERROR_TYPE_TDC_DOWNLOAD_FAIL: 20,
      ERROR_TYPE_TDC_RUN_FAIL: 21,
      ERROR_TYPE_TDC_DOWNLOAD_RETRY_SUCCESS: 22,
      ERROR_TYPE_TDC_RUN_RETRY_SUCCESS: 23,
      ERROR_TYPE_TOUCH_CANCEL: 14,
      ERROR_TYPE_TWICE_IMAGE_ONERROR: 13,
      ERROR_TYPE_CGI_IMAGE_ONERROR: 12,
      ERROR_TYPE_IMAGE_ONERROR: 11,
      ERROR_TYPE_AJAX_GETSIG: 9,
      ERROR_TYPE_AJAX_VERIFY: 8,
      ERROR_TYPE_IMAGE_BEYONDSIZE: 7,
      ERROR_TYPE_MB_FP_REGISTER_TIMEOUT: 6,
      ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL: 5,
      ERROR_TYPE_PC_FP_REGISTER_TIMEOUT: 4,
      ERROR_TYPE_PC_FPJS_DOWNLOAD_FAIL: 3,
      ERROR_TYPE_BADJS_DOWNLOAD_FAIL: 2,
      ERROR_TYPE_BADJS_REPORT: 1
    },
    send: function (e, t, n, i) {
      try {
        t = (t = t && t.length > 1024 ? t.substr(0, 1024) : t) || "";
        var r = ["type=" + e, "errType=" + (n = n || c.subcapclass), "tokenid=" + o.getToken(), "timing=" + (i || ""), "reason=" + encodeURIComponent(t)],
            a = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?" + u + "&" + r.join("&");
        new Image().src = s(a);
      } catch (l) {}
    }
  };
}