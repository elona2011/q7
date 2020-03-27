function (e, t, n) {
  "use strict";

  var i = n(30),
      r = n(29),
      o = n(0),
      a = n(36),
      s = n(10),
      c = n(49),
      u = n(37),
      l = n(12),
      f = n(50),
      d = n(27),
      p = n(28),
      h = window.captchaConfig,
      m = window.timing,
      g = 0,
      v = [],
      y = {
    1: i.imgBg,
    2: i.imgSlide
  },
      w = {
    cgi: {
      img: [],
      onErrorCode: 12,
      timing: [null, 25, 28]
    },
    cdn: {
      retry: 2,
      img: [],
      timeout: l.loadImgTimeout,
      timing: [null, 35, 36],
      onErrorCode: 11,
      fallback: "cgi-retry"
    },
    "cgi-retry": {
      img: [],
      extParams: "&retry=1",
      onErrorCode: 13,
      timing: [null, 25, 28]
    }
  },
      b = !0;

  function k(e, t, n) {
    var r = (e.img[t] || l.cgiImg) + e.params + "&img_index=" + t + (e.extParams || ""),
        o = {
      success: function (n, r) {
        a.push(e.timing[t], m.logEnd("imgLoad-" + e.loadIndex + "-" + t)), v[t] = n, function (e) {
          if (v[1] && v[2] && g === e.loadIndex) {
            h.rate = i.operation.width() / 680;
            var t = parseInt(v[2].height * h.rate) + "px",
                n = parseInt(e.posY * h.rate) + "px";
            i.imgSlide.css({
              height: t,
              width: t,
              top: n
            }), b && (b = !1, f.send(i.body, i.captcha), setTimeout(function () {
              $("#bodyWrap").addClass("body-wrap-show");
            }, 16)), e.callback && e.callback(), u.hideLoading(), m.log("verifyDuration");
          }
        }(e);
      },
      error: function () {
        s.send(e.onErrorCode, t, null, m.logEnd("imgLoad-" + e.loadIndex + "-" + t)), n = n || 1, !e.retry || n >= e.retry ? function (e, t) {
          e.fallback ? k(e = $.extend({
            posY: e.posY,
            params: e.params,
            callback: e.callback,
            loadIndex: e.loadIndex
          }, w[e.fallback]), t) : (u.loadImgFailed(), d.loadFailure(p.c14));
        }(e, t) : k(e, t, n + 1);
      }
    };
    m.log("imgLoad-" + e.loadIndex + "-" + t), c(y[t], r, o);
  }

  r.listen(0, function () {
    h.rate = i.operation.width() / 680;
    var e = r.px2remU(v[2].height * h.rate),
        t = r.px2remU(h.spt * h.rate);
    i.imgSlide.css({
      height: e,
      width: e,
      top: t
    });
  }), e.exports = function (e) {
    g++, v[1] = v[2] = null;
    var t = $.extend({
      posY: parseInt(h.spt, 10)
    }, w[h.iscdn ? "cdn" : "cgi"]);
    t.img[1] = h.cdnPic1, t.img[2] = h.cdnPic2, t.callback = e, t.params = o.getQuery() + "&websig=" + h.websig + "&vsig=" + h.vsig, t.loadIndex = g, m.logEnd("jsInit"), k(t, 1), k(t, 2);
  };
}