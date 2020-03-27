function (e, t, i) {
  "use strict";

  var r = i(4),
      n = i(40),
      o = i(33),
      a = i(5),
      s = i(31),
      c = i(32),
      p = i(3),
      d = {
    securityCode: "securityCode",
    preTrigerPoint: "preTrigerPoint"
  },
      u = r.isIEVer(6),
      f = !1,
      l = function () {
    function e(e) {
      e = e || {}, this.name = "TCaptchaFrameProxy", this.initSecurityCodeTarget = function () {
        e.msg.addTarget(e.securityIframe.contentWindow, d.securityCode);
      }, this.hasSecurityCode = function () {
        return !!e.securityIframe && e.securityIframe;
      }, this.createSmartVerify = function () {
        var t = r.createElement("div"),
            i = e.opts.enableDarkMode && r.isDarkMode();
        t.className = "t-mask", t.id = "t_mask", window.document.body.appendChild(t);
        var n = r.createElement("div");
        n.id = "t_verify", n.className = "t-verify";
        var a = r.createElement("div");
        a.className = "verify-icon", a.id = "verify_icon", n.appendChild(a);
        var s = r.createElement("span");
        s.className = "dots_item";
        var c = r.createElement("span");
        c.className = "dots_item";
        var p = r.createElement("span");
        p.className = "dots_item";
        var d = {
          background: r.initColor(e.opts.themeColor)
        };
        r.CSS(s, d), r.CSS(c, d), r.CSS(p, d), a.appendChild(s), a.appendChild(c), a.appendChild(p);
        var u = r.createElement("p");
        u.className = "verify-text", u.id = "verify_text", u.style.color = i ? "#ffffff" : "", n.appendChild(u);
        var f = r.getPosStyle(e.opts),
            l = r.computeBaseFontSize();
        e.opts.sdkOpts && e.opts.sdkOpts.width && e.opts.sdkOpts.height && (l *= e.opts.sdkOpts.width / (o.SMART_VERIFY_SZ.width * l));
        var h = {
          border: e.opts.sdkOpts && e.opts.sdkOpts.width ? "0" : i ? "1px solid #999" : "1px solid #e5e5e5",
          position: f,
          background: i ? "#232323" : ""
        };
        r.CSS(n, h), e.ele.appendChild(n), r.setPopPosition(n, o.SMART_VERIFY_SZ.width * l, o.SMART_VERIFY_SZ.height * l, e.opts.sdkOpts);
      }, this.createFlimitDom = function () {
        var t = r.getPosStyle(e.opts),
            i = "";
        e.opts.params.split("lang=")[1] && e.opts.params.split("lang=")[1].split("&")[0] && !e.opts.tcaptchaFlag && (i = e.opts.params.split("lang=")[1].split("&")[0], e.langPack.init(i));
        var n = r.createElement("div");
        n.className = "tcaptcha-transform" + (r.isChrome75 && r.isMobileUa ? " chrome-75" : "");
        var o = e.opts.enableDarkMode && r.isDarkMode();
        o && (n.className = n.className + " dark-mode"), n.id = "tcaptcha_transform";
        var s = {
          position: t,
          width: e.sizeSC.width + "px",
          height: e.sizeSC.height + "px",
          top: e.posSC.top,
          left: e.posSC.left
        };
        !e.isPop || e.opts.sdkOpts && e.opts.sdkOpts.width || (s.border = o ? "1px solid #999" : "1px solid #e5e5e5", s.borderRadius = "3px"), u && (s.position = "absolute"), r.CSS(n, s), e.opts.sdkOpts && e.opts.sdkOpts.width && r.setPopPosition(n, e.sizeSC.width, e.sizeSC.height, e.opts.sdkOpts);
        var c = r.createElement("div");
        c.className = "ticons ticon-refresh", c.id = "ticon_refresh";
        var p = r.createElement("p");
        p.className = "ticons transform-header", p.id = "transform_header", p.innerText = e.langPack.c22;
        var d = r.createElement("p");

        if (d.className = "ticons transform-text", d.id = "transform_text", d.innerText = e.langPack.c23, n.appendChild(c), n.appendChild(p), n.appendChild(d), e.isPop) {
          var f = r.createElement("div");
          f.id = "transform_close", f.className = "ticons transform-close", n.appendChild(f), a.add(f, "click", function () {
            r.removeIfExist("tcaptcha_transform"), r.removeIfExist("t_mask"), r.callbackExecutor(e, {
              ret: 2,
              ticket: "",
              randstr: ""
            });
          });
        } else if (1 == e.opts.showHeader || 0 == e.opts.showheader) {
          var l = r.createElement("span");
          l.className = "ticons tback transform-eicon", l.id = "transform_eicon";
          var h = r.createElement("div");
          h.className = "ticons tback transform-eb", h.id = "transform_eb", h.innerText = e.langPack.c11;
          var m = r.createElement("p");
          m.className = "ticons transform-eh", m.id = "transform_eh", e.langPack.c2.length > 20 ? (r.addClass(m, "middle-fontsize"), r.addClass(h, "middle-fontsize")) : e.langPack.c2.length > 15 && (r.addClass(m, "small-fontsize"), r.addClass(h, "small-fontsize")), m.innerText = e.langPack.c2, n.appendChild(l), n.appendChild(h), n.appendChild(m), a.add(h, "click", function () {
            r.removeIfExist("tcaptcha_transform"), r.callbackExecutor(e, {
              ret: 1,
              ticket: "",
              randstr: ""
            });
          });
        }

        return n;
      }, this.createSecurityCode = function (t, o) {
        try {
          var a = e.opts.enableDarkMode && r.isDarkMode(),
              s = {
            uid: e.opts.uid,
            cap_cd: e.opts.capcd,
            rnd: Math.floor(1e6 * Math.random()),
            TCapIframeLoadTime: e.opts.TCapIframeLoadTime,
            prehandleLoadTime: e.prehandleLoadTime,
            createIframeStart: e.createIframeStart
          },
              d = "point" == e.opts.type,
              u = r.getPosStyle(e.opts);

          if (d) {
            f || (i(63), f = !0);
            var l = (_ = "div", document.createElement(_));
            l.className = "tcaptcha-container", l.id = "tcaptcha_container", e._div = l;
            var h = {
              width: e.sizeSC.width + "px",
              height: e.sizeSC.height + "px"
            };
            r.CSS(l, h);
            var m = document.createElement("iframe");
            m.className = "tcaptcha-container-iframe", m.id = "tcaptcha_iframe", m.setAttribute("frameborder", "0", 0), m.setAttribute("border", "0"), m.marginheight = 0, m.marginwidth = 0, m.setAttribute("marginheight", "0", 0), m.setAttribute("marginwidth", "0", 0), m.scrolling = "no", e.securityIframe = m, l.appendChild(m), document.body.appendChild(l), e.src = r.addUrlParam(e.src, s), m.src = o || e.src, this.setDivPosition(l), this.initSecurityCodeTarget();
          } else if ((e.isPop || "" == e.opts.type) && n.isNewCapType(t)) {
            if (this.hasSecurityCode()) {
              var g = {
                height: e.sizeSC.height + "px",
                width: e.sizeSC.width + "px",
                top: e.posSC.top,
                left: e.posSC.left
              };
              return r.CSS(e.securityIframe, g), void (e.securityIframe.src = r.addUrlParam(e.src, s));
            }

            var y = r.createElement("iframe");
            y.id = "tcaptcha_iframe", y.className = "tcaptcha-iframe", y.setAttribute("frameborder", "0", 0), y.setAttribute("border", "0"), y.setAttribute("marginheight", "0", 0), y.setAttribute("marginwidth", "0", 0), e.isPop ? (y.setAttribute("scrolling", "no"), c[t].isOpt, r.CSS(y, {
              opacity: "1"
            })) : r.CSS(y, {
              border: "0px"
            });
            var v = {
              position: u,
              height: e.sizeSC.height + "px",
              width: e.sizeSC.width + "px",
              background: a ? "#232323" : "#fff"
            };

            if (c[t].unionSizeType ? v.position = "static" : (v.top = e.posSC.top, v.left = e.posSC.left), r.CSS(y, v), e.securityIframe = y, c[t].unionSizeType) {
              var S = e.TCaptchaFrame.createFlimitDom();
              S.appendChild(y), e.ele.appendChild(S);
            } else e.ele.appendChild(y);

            e.src = r.addUrlParam(e.src, s), y.src = e.src, this.initSecurityCodeTarget();
          } else {
            var b = document.createElement("iframe");
            b.setAttribute("frameborder", "0", 0), b.setAttribute("border", "0"), b.marginheight = 0, b.marginwidth = 0, b.setAttribute("marginheight", "0", 0), b.setAttribute("marginwidth", "0", 0), b.scrolling = "no", b.id = "tcaptcha_iframe";
            var w = {
              width: "300px",
              height: "230px",
              border: "0px",
              position: u,
              left: "0px",
              top: "0px",
              zIndex: 2000000002,
              background: a ? "#232323" : "#fff"
            };
            "embed" != e.opts.type || "slidepuzzle_new" !== t && "slidepuzzle_opt" !== t ? (w.width = e.sizeSC.width + "px", w.height = e.sizeSC.height + "px") : (w.width = "300px", w.height = "230px"), r.CSS(b, w), e.securityIframe = b, e.ele.appendChild(b), e.src = r.addUrlParam(e.src, s), b.src = e.src, n.setPosition(e, b), this.initSecurityCodeTarget();
          }

          e.opts.capType = t;
        } catch (x) {
          var C = p.perfectStack(x);
          p.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, C || "createSecurityCode code error");
        }

        var _;
      }, this.setDivPosition = function (t) {
        try {
          if ("embed" == e.opts.type) return;
          var i = 0,
              o = 0;

          if ("point" == e.opts.type) {
            var a = n.changePos(e);
            i = a[0], o = a[1];
            var s = a[2],
                c = a[3],
                d = document.createElement("style");
            d.rel = "stylesheet", d.href = "style.css", d.type = "text/css", document.getElementsByTagName("body")[0].appendChild(d), setTimeout(function () {
              h(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:before", s, 0), h(document.styleSheets[document.styleSheets.length - 1], ".tcaptcha-container:after", c, 0);
            }, 1);
          }

          return r.CSS(t, {
            top: i + "px",
            left: o + "px"
          });
        } catch (f) {
          var u = p.perfectStack(f);
          p.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, u || "setDivPosition code error");
        }
      }, this.enlargeVerifyType = function (e, t, i, n) {
        var o = s.verifyIcon();
        o && r.CSS(o, {
          marginTop: i / 2 + "px"
        }), r.CSS(e, {
          width: t + "px",
          height: i + "px"
        }), r.setPopPosition(e, t, i, n);
      }, this.changeVerifyType = function () {
        var t = s.dots();
        if (t) for (var i = 0; i < t.length; i++) r.addClass(t[i], "show-none");
        var n = s.verifyIcon();
        r.addClass(n, "success-icon");
        var o = s.verifyText();
        e.langPack.c21.length > 19 && r.addClass(o, "little-fontsize"), o.innerText = e.langPack.c21;
      }, this.showRefreshDom = function () {
        for (var t = s.tIframe(), i = s.ref2Text(), n = s.tIcons(), o = n.length, a = 0; a < o; a++) n[a] && r.addClass(n[a], "show-icon");

        t.src = e.src, t.style.visibility = "hidden", setTimeout(function () {
          i.innerHTML = i.innerHTML.replace(/2/, "1");
        }, 1e3), setTimeout(function () {
          t.style.visibility = "visible", i.innerHTML = i.innerHTML.replace(/1/, "2");

          for (var e = 0; e < o; e++) n[e] && r.removeClass(n[e], "show-icon");
        }, 2e3);
      };
    }

    return {
      name: "TCaptchaFrameProxy",
      getInstance: function (t) {
        return new e(t);
      }
    };
  }();

  function h(e, t, i, r) {
    try {
      return e.insertRule ? e.insertRule(t + "{" + i + "}", r) : e.addRule(t, i, r);
    } catch (n) {}
  }

  e.exports = l;
}