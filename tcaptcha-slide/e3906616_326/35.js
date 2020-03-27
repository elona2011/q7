function (e, t, n) {
  "use strict";

  var i = window.timing;
  i.log("jsInit"), n(65);

  var r = n(28),
      o = n(47),
      a = n(27),
      s = n(48),
      c = n(12),
      u = n(51),
      l = n(55),
      f = n(29),
      d = n(0),
      p = n(1),
      h = n(37),
      m = n(36),
      g = n(10),
      v = n(30),
      y = window.captchaConfig,
      w = void 0,
      b = 0,
      k = 0,
      E = function () {
    var e = y.color || "";

    if (!(e.indexOf("007aff") >= 0)) {
      var t = d.parse2rgb(e);
      t && (v.txtBack.css("color", t.s), v.btnThumb.css({
        "background-color": t.s,
        "box-shadow": "0 0 10px  1px rgba(" + parseInt(t.r) + "," + parseInt(t.g) + "," + parseInt(t.b) + ", .52)"
      }), v.btnIconfont.css({
        color: t.s
      }), v.txtError.css("color", t.s), $("line", v.iconError).css("stroke", t.s), $("line", v.iconGoback).css("stroke", t.s));
    }
  };

  function x() {
    v.captcha.removeClass("loading"), v.guideText.text("ABCopq");
    var e = v.guideWrap.height();
    "popup" !== y.showtype ? (e -= 5, v.txtBack.html(r.c11), $("#e_showFB").html(r.c19), $("#e_reload").html(r.c17)) : a.adjustStyle(), "0" === d.queryParam("fb") && v.status.addClass("hide-feedback"), v.title.html(r.c2), v.guideText.html(r.puzzle6), v.statusFail.html(r.puzzle10), r.rightToLeft && v.guideText.addClass("right-to-left"), c.companyInfo && v.status.addClass("show-company-note"), v.guideText.height() > e && (v.guideText.addClass("middle-fontsize"), v.guideText.height() > e && v.guideText.addClass("small-fontsize"), v.guideText.height() > e && v.guideText.addClass("multi-line")), v.iconError.attr({
      width: 37 * f.dpr,
      height: 25 * f.dpr
    }), v.iconGoback.attr({
      width: 10 * f.dpr,
      height: 20 * f.dpr
    }), u.tdc.setData({
      clientType: y.clientype
    }), w = o(v.operation, [v.imgSlide, v.btnSlide], function () {
      h.clearErrorNote();
    }, function (e, t, n) {
      w.movable(!1);
      var r = v.imgSlide.offset(),
          o = v.imgBg.offset(),
          s = [{
        left: Math.floor((r.left - v.operation.offset().left) / y.rate),
        top: Math.floor(parseInt(y.spt, 10))
      }];
      u.tdc.setData({
        coordinate: [Math.ceil(o.left), Math.ceil(o.top), Number(y.rate.toFixed(4))]
      }), function (e, t, n) {
        var r = void 0,
            o = void 0,
            s = 0;

        function l() {
          3 === s && function (e, t, n, r, o) {
            for (var s = "", c = 0; c < e.length; c++) s += Math.floor(e[c].left) + "," + Math.floor(e[c].top) + ";";

            var l = d.queryMap();
            i.log("verify");
            var f = u.challenge();
            n.push([0, 0, f]), u.tdc.setData({
              trycnt: ++k,
              refreshcnt: b,
              slideValue: n,
              dragobj: t
            }), l.ans = s, l.vsig = y.vsig, l.cdata = f, l.websig = y.websig, l.subcapclass = y.subcapclass, l[y.collectdata] = decodeURIComponent(u.tdc.getData()), "inner" !== y.curenv && (l.asig = y.asig, l.buid = y.buid);
            l.fpinfo = r, l.eks = u.tdc.getEks(), l.tlg = l[y.collectdata].length, $.extend(l, o), u.tdc.checkTdcSuccess() || u.tdc.retryLoad(g);
            var v = $.ajax({
              type: "POST",
              url: "/cap_union_new_verify",
              data: l,
              timeout: 15e3,
              dataType: "json",
              success: function (e) {
                if (e) {
                  var t = parseInt(e.errorCode, 10);

                  switch (t) {
                    case 0:
                      m.push(48, i.logEnd("verifyDuration")), h.showSuccess(w.dragDuration, function () {
                        a.verifySuccess(e.ticket, e.randstr);
                      });
                      break;

                    case 9:
                      h.showErrorNote("puzzle8", 3e3, y.showtype), h.shake(S);
                      break;

                    case 12:
                      h.showCoverError("puzzle9", null, S, u.tdc.getToken());
                      break;

                    case 16:
                    case 20:
                    case 21:
                      a.sessionTimeout();
                      break;

                    case 50:
                      h.showErrorNote("puzzle7", 3e3, y.showtype), h.shake(function () {
                        w.moveBack(!0);
                      });
                      break;

                    case 51:
                      a.hybridVerify(e.sess, p.get());
                      break;

                    default:
                      h.showCoverError("c23", e.errorCode, S, u.tdc.getToken());
                  }

                  m.push(27, i.logEnd("verify")), m.send();
                }
              },
              error: function (e, t, n) {
                T = !1;
                var r = "";
                r += e && e.status ? e.status + ";" : "", r += t ? t + ":" : "", r += n || "", g.send(g.type.ERROR_TYPE_AJAX_VERIFY, r), v.abort(), h.showErrorNote("c8", 3e3, y.showtype), "timeout" === t || "abort" === t || "error" === t && (m.push(27, i.logEnd("verify")), m.send()), S();
              }
            });
          }(e, t, n, r, o);
        }

        (function f(e, t) {
          if (!c.needFp) return e("");
          if (!window.getFPVryData) return g.send(g.type.ERROR_TYPE_MB_FPJS_DOWNLOAD_FAIL, ""), e("");
          if (t >= 5) return g.send(g.type.ERROR_TYPE_MB_FP_REGISTER_TIMEOUT, ""), e("");
          var n = window.getFPVryData();
          n ? e(n) : setTimeout(function () {
            f(e, (t || 1) + 1);
          }, 100);
        })(function (e) {
          r = e, s |= 1, l();
        }), u.vm.run(function (e) {
          o = e, s |= 2, l();
        });
      }(s, t, n);
    }), s(C), E(), /TCSDK\//.test(c.ua) && n(56).sdk();
    var t = Math.round(v.txtBack.css("font-size"));
    t % 2 == 1 && (t += 1), v.txtBack.css("font-size", f.px2remU(t)), v.operation.addClass("show-loading");
  }

  var T = !1;

  function S() {
    T || (T = !0, b++, i.log("refresh"), h.showLoading(), w.moveBack(!1), u.tdc.clearData(), u.vm.init(), u.tdc.checkTdcSuccess() || u.tdc.retryLoad(g), $.ajax({
      type: "POST",
      url: "/cap_union_new_getsig",
      data: d.getQuery(!0),
      dataType: "json",
      error: function (e, t, n) {
        T = !1, h.loadImgFailed();
        var i = "";
        i += e && e.status ? e.status + ";" : "", i += t ? t + ":" : "", i += n || "", g.send(g.type.ERROR_TYPE_AJAX_GETSIG, i);
      },
      success: function (e) {
        return e ? (m.push(26, i.logEnd("refresh")), e.ret = parseInt(e.ret, 10), 52 === e.ret ? a.frequencyLimit() : (y.capChallenge = e.chlg || {}, void (e.vsig ? (y.vsig = e.vsig, e.cdnPic1 && e.cdnPic2 && e.iscdn ? (y.iscdn = e.iscdn, y.cdnPic1 = e.cdnPic1, y.cdnPic2 = e.cdnPic2) : (y.iscdn = !1, y.cdnPic1 = null, y.cdnPic2 = null), y.spt = e.inity, T = !1, s(C)) : T = !1))) : (h.loadImgFailed(), g.send(g.type.ERROR_TYPE_AJAX_GETSIG, "response error."));
      }
    }));
  }

  function C() {
    w.boundaryCalc(), w.movable(!0), v.operation.removeClass("show-loading"), T = !1, m.push(46, i.point("now")), m.send();
  }

  e.exports = function () {
    u.tdc.link(g), u.vm.init(), v.close.on("click", function () {
      a.capClose();
    }), v.btnBack.on("click", function () {
      var e = y.dst;
      e ? window.location = e : "capFrame" === y.capSrc ? a.goBack() : a.otherBack();
    }), v.feedback.on("click", function () {
      /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent) ? window.open(y.TuCao + "&" + l()) : window.open(y.TuCao + "?" + l());
    }), v.site007.on("click", function () {
      1 === parseInt(y.iscdn) ? window.open("https://007.qq.com/?ADTAG=self.link&Tucao=cdn_h5&" + l()) : window.open("https://007.qq.com/?ADTAG=self.link&Tucao=slide_h5&" + l());
    }), v.site007.on("touchstart", function () {
      $(this).addClass("show-site-underline");
    }), v.site007.on("touchend", function () {
      $(this).removeClass("show-site-underline");
    }), v.btnReload.on("click", S), v.btnCoverReload.on("click", S), x();
  };
}