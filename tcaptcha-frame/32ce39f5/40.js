function (e, t, i) {
  "use strict";

  var r = i(4),
      n = i(32),
      o = i(31),
      a = i(33),
      s = i(3),
      c = !!window.ActiveXObject && 8 == document.documentMode;

  function p(e) {
    return "slidepuzzle_new" === e || "slidepuzzle_opt" === e || "vtt" === e;
  }

  function d(e, t, i, c) {
    try {
      var d = n[e].size[0],
          u = n[e].size[1],
          f = 0,
          l = 0;
      i ? (f = t.windowWidth, l = t.windowHeight) : (f = r.getWindowWidth(), l = r.getWindowHeight(), t.windowWidth = f, t.windowHeight = l);
      var h = "popup" == t.opts.type && t.opts.fwidth ? parseFloat(t.opts.fwidth) : 0;

      if (h > 0 && h <= 2 * d * 16) {
        var m = parseInt(1e4 * (h / (16 * d))) / 1e4;
        d = d * m * 16 + 3, u = u * m * 16 + 3, 1 == c && t.readyFunc && t.readyFunc({
          state: 2,
          info: "",
          fwidth: d - 3,
          fheight: u - 3
        }), t.sizeSC.width = parseInt(d), t.sizeSC.height = parseInt(u), t.posSC.top = "0px", t.posSC.left = "0px";
      } else {
        var g = Math.min(f / a.baseWidth),
            y = Math.min(l / a.baseWidth),
            v = r.isHorizontal(i, t) ? .85 * y : g,
            S = r.getParentScale();
        v = (v = 0 == S || 1 == S ? v > 1.3 ? 1.3 : v : S >= .5 ? v > 2 ? 2 : v : v > 3 ? 3 : v) < .85 ? .85 : v;
        var b = parseInt(1e4 * v) / 1e4;
        d = d * b * 16 + 3, u = u * b * 16 + 3, r.isMobileUa || (d = n[e + "_pc"].width, u = n[e + "_pc"].height, p(e) || "popup" != t.opts.type || (u += 40)), t.sizeSC.width = parseInt(d), t.sizeSC.height = parseInt(u);
        var w = l - u;
        t.posSC.top = w < 0 ? "0px" : Math.floor(w / 2) + "px";
        var C = f - d;

        if (t.posSC.left = n[e].hasBorder ? Math.floor((C - 2) / 2) + "px" : Math.floor(C / 2) + "px", i) {
          var _ = {
            width: t.sizeSC.width + "px",
            height: t.sizeSC.height + "px"
          };
          if ("embed" === t.opts.type) return void r.CSS(o.tIframe(), _);
          var x = o.border();
          x && r.setPopPosition(x, t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts), r.setPopPosition(o.tIframe(), t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts);
          var E = o.container();
          E && (r.CSS(E, _), t.TCaptchaFrame.setDivPosition(E));
        }
      }
    } catch (k) {
      var T = s.perfectStack(k);
      s.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", t.opts.appid, T || "setCaptchaIframeSizeAndPos code error");
    }
  }

  function u(e) {
    e.src = "about:blank", e.parentNode && e.parentNode.removeChild(e), e.onload = null;
  }

  function f(e) {
    var t,
        i,
        n,
        o,
        a = 0,
        s = 0,
        c = (n = e, r.getPos(n.preTrigerPoint)),
        p = function (e) {
      return r.getSize(e.preTrigerPoint);
    }(e),
        d = r.getWindowHeight(),
        u = r.getScrollTop();

    return (o = c[1] - u) >= e.sizeSC.height / 2 && d - o - p[1] / 2 >= e.sizeSC.height / 2 ? (a = c[1] + p[1] / 2 - e.sizeSC.height / 2, s = c[0] + 45, t = "top: 50%;", i = "top: 50%;") : o <= e.sizeSC.height / 2 ? (a = c[1] - o, s = c[0] + 45, i = t = "top: " + (o + p[1] / 2) / e.sizeSC.height * 100 + "%;") : d - o >= p[1] && d - o - p[1] / 2 <= e.sizeSC.height / 2 ? (a = d - e.sizeSC.height + u, s = c[0] + 45, i = t = "top: " + (e.sizeSC.height - (d - o - p[1] / 2)) / e.sizeSC.height * 100 + "%;") : d - o <= p[1] ? (a = c[1] + p[1] - e.sizeSC.height, s = c[0] + 45, i = t = "top: " + (e.sizeSC.height - p[1] / 2) / e.sizeSC.height * 100 + "%;") : (a = c[1] + p[1] / 2 - e.sizeSC.height / 2, s = c[0] + 45, t = "top: 50%;", i = "top: 50%;"), [a, s, t, i];
  }

  e.exports = {
    setCaptchaIframeSizeAndPos: d,
    isNewCapType: p,
    addPopupStyle: function (e) {
      try {
        var t = r.computeBaseFontSize(),
            i = ".tcaptcha-transform{font-family:\"Helvtical,microsoft yahei,sans-serif\";-webkit-background-size:20% 20%;background-size:20%;background-position:50% 32%;background-color:#fff;-webkit-border-radius:.08rem;border-radius:.08rem;visibility:visible;z-index:2000000002;overflow:hidden}.tcaptcha-transform.chrome-75{overflow:auto!important;-webkit-border-radius:0!important;border-radius:0!important}.tcaptcha-transform.dark-mode{background-color:#232323}.tcaptcha-transform.dark-mode .ticons.show-icon{color:#fff}.tcaptcha-transform .ticons{position:absolute;visibility:hidden;z-index:-1}.tcaptcha-transform .ticons.show-icon{visibility:visible}.tcaptcha-transform .ticon-refresh{height:rem2px(4);width:rem2px(4);left:0;right:0;margin:rem2px(6) auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB4CAMAAAANIQqNAAABm1BMVEUAAAA9pf8Zif8chf8chf8dhv8chf8chf8chv8chf8chf8chf8chf8chf8fiP8chf8bhP8ehf8chf8Vif8chv8bhf8bhf8chf8bhf8chv8bhf8ah/8bhP8chf8chf8chf8dhf8chf8chf8bhf8dhv8chf8chf////8chf8chf8chv8dg/////8chf8chf8chv////8dhP8lhv8chv8chf////////8ahv9Xpf8bhf8bhf8bhv8bhf////////8bhP8giv////////8chP8bhf8chf////8bhv8chf////8chf////////8chP////////////////////////8chv/////////////7/f/J4v////////////////8fhf8chf/////6/P8miv9Amf+Gvv/x+P/j8P+o0f91tf9Knv8gh//q9P+z1//E3/++3f+Mwf9ssP9HnP85lf8zkv/2+v9jq/9apv9Qof8tj//9/v/O5f/I4v+72/+32P+w1f+Wx/99uv9xsv/d7f/X6f/S5/+q0v+gzP+ayf+jzv+pdUB1AAAAX3RSTlMAAgn9ZRHxxUi9+fLjrw6qNyDfBFI7hEXq0oocnm3003NqPk005tCMzcqkK8l3m2IgFgaTWVNBMf3XoF1UTGJBGNDFuZV+WyXtiVzbvLQnDgru4aWRbi8W9OzptJNnGRL7ICoAAAiSSURBVGjevJj5W5JBEMeHK0QOQUQLtZDK0kqz1LRS08zyqKye7nrmVbzAvNIsNbPL6s/O/b6yK8iZS59f2H2fgdl39jszu1DROKKt1c2uRs89N7P7nqfR1VzdGnXQf+FKKOL1cEY83kjoCpWUNnuFm3Pi9trbqET47C4bF4DNZfeRfvzXT3LBnLzuJ61YqpypL1l5+2pD2ZmAw0fkcwTOlDVcvV2ZGh5nlUWj+xOsOOaN+K2UAas/4j3GihO6ltB3niWV4WiQchCMhitZcr6Pjk5ts3r3QX9BahlUcaioPWr062XaddutVCBWe7dMy/q0fRjv7Bmnggk45Ya2B6kIgu1SNs4AKc5dNPboP0eFMZKMZSP0VKRyG5M7N0L7PBDuwcUHhRTdFjY5bv8nOVvsx9mkxSzQz/sNSf/z/OprYmCr++cu46izMWiCFvH+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) no-repeat;-webkit-background-size:contain;background-size:contain}.tcaptcha-transform .transform-eicon{top:rem2px(1.375);left:rem2px(.5);width:rem2px(.625);height:rem2px(.625);border-style:solid;border-width:rem2px(.125) rem2px(.125) 0 0;border-color:#1a79ff;-webkit-transform-origin:75% 25% 0;-ms-transform-origin:75% 25% 0;transform-origin:75% 25% 0;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);-webkit-transition:.1s ease-in .1s;-o-transition:.1s ease-in .1s;transition:.1s ease-in .1s}.tcaptcha-transform .transform-eb{width:rem2px(3.2);height:rem2px(3.2);line-height:rem2px(3.2);font-size:rem2px(1);text-align:left;left:rem2px(1.9);color:#1a79ff}.tcaptcha-transform .transform-eb.middle-fontsize{font-size:rem2px(1.6)}.tcaptcha-transform .transform-eb.small-fontsize{font-size:rem2px(1.2)}.tcaptcha-transform .transform-eh{width:100%;height:rem2px(3.2);line-height:rem2px(3.2);margin:0;font-size:rem2px(1.3);text-align:center;font-weight:700;color:#333;border-bottom:.026667rem solid #e6e6e6;z-index:-2}.tcaptcha-transform .transform-eh.middle-fontsize{font-size:rem2px(1.1)}.tcaptcha-transform .transform-eh.small-fontsize{font-size:rem2px(1)}.tcaptcha-transform .transform-header{width:100%;font-size:rem2px(1.2);text-align:center;margin-top:rem2px(11)}.tcaptcha-transform .transform-text{width:100%;font-size:rem2px(1);text-align:center;padding-left:5%;padding-right:5%;margin-top:rem2px(13);word-break:break-all;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tcaptcha-transform .transform-close{height:rem2px(1.5);width:rem2px(1.5);bottom:rem2px(1);right:rem2px(1);background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAZlBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Nj9GtKAAAAIXRSTlMAnAYRmO3pq6A2h+Pf07OVXlgcT00zw4R5eGBM8afFxIgs0CidAAABfUlEQVQ4y5WV25aCMAxFQwNCEQS5eEMd+/8/OekEJm2hSz1PNt0QcppG8KWveZ0Zk9X5VUNUXbk3jvZlt4lhY1ZqcM0dd4a0K24alUJ9K3h9DDCV2vCzV06of9pYqjzuQKFqgEBDReGDCrgcYSXMfdLmPcOmzjb7fx20KCGikjbninBHeSGqB/mPS+IK4yBWc/KO3s31tlnjEk3Wcu0EdPwRP7xz50dnJZSSf524BDrfftliMlz0dO4Ams5JzXYWdlO4BFiKqtVwMaYA8EnhWBS+Anl/A49MQg5a619tXyvkHxJwMBpTA/UzQkAGHKA1gIIKXCUrDhRFPgbD1BBNTcWMIJJilF+M2OP6LKTYI4YLx61cKM9wOULhhJQjdJuiYU7IRJrCa7NMOCbv0mZz4078zffNxp24cSnw4VUApJSPN5fru+v6fgB8N1KErKaQmyrhvLF3GtyHhxOPvcggbUc7SMdWBmkoTM1K6ba/3csf9q8OotKX5e/josHTL8HeNiRMGCf8AAAAAElFTkSuQmCC) no-repeat;-webkit-background-size:contain;background-size:contain}.tcaptcha-iframe{z-index:2000000002;margin:auto}.tcaptcha-iframe.hide-iframe{visibility:hidden}.t-verify{z-index:2000000002;width:rem2px(8);height:rem2px(8);background:#fff;-webkit-border-radius:.08rem;border-radius:.08rem;left:0;top:0}.verify-icon{position:absolute;margin-top:rem2px(3.5)}.verify-icon.success-icon{width:rem2px(2.5);height:rem2px(2.5);left:0;right:0;margin:rem2px(2) auto;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAzFBMVEUAAAAs0AAu1AAs0AAr0AAq1QAs0AAt0AAs0AAs0AAr0AAq0wAs0AAq0QAs0AAs0AAs0AAs0AAr0AAs0AAr0AAs0AAr0QAs0QAs0AApygAs0AAs0AAs0AAs0AAs0QAr0QAt0gAs0AAt0QAtzwAq0QArzwAs0AAqzQAs0QAs0AAs0AAs0AD////l+d/8/vty4FVG1iCI5W/X989G1h881BNy31My0gd34Vr5/vjt++qk65Gd6omO5naB42Za2jdL1ybR9cjA8bNp3kpZ2jY9PuX7AAAAK3RSTlMA/APuFwfUZln0OxLIVEbr49vZzsKxmW1MDvmsqIxpXiGejlA3NGgk1pyDVbbBQAAAArxJREFUaN7Nmody2kAURZ9QQRIyTTTRDDauV3GsFNzjlP//p8CQjAZLwLY3w/mAc9EWZvftIzGS8HIyitp2AAR2OxpNLsOETFHzex5K8Hp+Td/u9DsWdmJ1+o6OvTLoWjiA1R1UFPVutQ0h2lVX5ddXmxCmWZX+ijCGFHEot3BuIM1cYkmd21DAPhcd/TMociY0E7MIysQzgdltQIPGxSH/yRBaBPX9/lMLmgz9vX4Y4HTP+FgwgHWyy78IYIThYsf6bMAQjasyvxvDGLFLRW5gkHnJBMMohYl2bBjFdmibMQwz3vbXYZz61j+0B+N4FcqpgoFq7nebYKDpFj6A6xMqLbDQ+j8LAzAxoA1dMNH9t4kt6PL+/Ov5DwpYm+3chy7fH9M0vctQoE9rOtr+u3TN3Ts+0ln7a5a+f8NrcYzWx0nflD99QQF/FdAz5U8fUKC3CvCgw+fc/2WJAh5RYsr/6R4lJHTB6kdIPqsfU7pl9WNCY1Y/RhSx+hFRCzv4/fPx6Xmp6UeLbJTzsFnb3/T8sClAKcunNE9Q9yMglPMjTfMEdT+wOyBP0PFjzxDlCRr+YN8k5wnKfti7l2lWSFDwo0URhBIU/YhoDLEENT9GdAvBhIL/KwSYkA/RBBU/pnQB4QQFP0JKIJzwJu9HQuQJJ6Tyfk/g2JJp+NETOXhl6n74QkfHTNlv1cQOv5miHx3R43um5kdf+AKSKfktR/wKlSn40ZW5BL49rvealB8DqWvs/evLwxIytCrMF/FL9lICdzGEvZzDXZBiLqmN2IuC7GXNAnMYZM5cWvZcKuGKqTiesxjCCMGC94FiWGd+YvG5H4m4n7nYH+oOMouhTDwjAVz1x1L3OJ57VzhjSDN2SIa6Bym8+rE1Daxwp6JtD1P3OBs3+FtP8uaZa5RwnTfP6JOE0+32n6lo+89fOWa8/GcTqREAAAAASUVORK5CYII=);-webkit-background-size:contain;background-size:contain}.dots_item{width:rem2px(.75);height:rem2px(.75);margin-right:rem2px(.375)}.dots_item.show-none{display:none!important}.verify-text{position:absolute;width:100%;font-size:rem2px(1);text-align:center;line-height:rem2px(1.375);margin-top:rem2px(5.25);z-index:-1}.verify-text.little-fontsize{font-size:rem2px(.8)}".replace(/rem2px\((.*?)\)/g, function (e, i) {
          return t * parseFloat(i) + "px";
        });
        window.addEventListener && document.querySelector || (i += ".tcaptcha-transform .ticon-refresh{background: url(https://captcha.gtimg.com/public/res/tcaptcha-icons-merge.34d219bf.png) no-repeat;background-position: 0px 0px;*left:148px;}.tcaptcha-transform .transform-close{background: url(https://captcha.gtimg.com/public/res/tcaptcha-icons-merge.34d219bf.png) no-repeat;background-position: -51px -75px;}");
        var n = "style-" + Math.floor(1e7 * Math.random()),
            o = document.createElement("style");
        o.id = n, o.type = "text/css", document.getElementsByTagName("head").item(0).appendChild(o), o.styleSheet ? o.styleSheet.cssText = i : o.innerHTML = i;
      } catch (c) {
        var a = s.perfectStack(c);
        s.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", e.opts.appid, a || "addPopupStyle code error");
      }
    },
    createPreTrigerPoint: function (e) {
      var t = e;
      t.wrap = "", t.preTrigerPoint && function (e, t) {
        if (t) return u(e.preTrigerPoint), void (e.preTrigerPoint = null);
        u(e.securityIframe), e.securityIframe = null;
      }(e, !0);
      var i = document.createElement("div");
      i.id = "loading_animation";
      var n = t.opts.htdoc_path + "/loading_grey.gif",
          o = document.createElement("iframe");
      o.setAttribute("frameborder", "0", 0), o.setAttribute("border", "0"), o.marginheight = 0, o.marginwidth = 0, o.setAttribute("marginheight", "0", 0), o.setAttribute("marginwidth", "0", 0), o.scrolling = "no";
      var s = r.getCSS(t.ele, "width"),
          p = r.getCSS(t.ele, "height"),
          d = 0;
      s && "auto" != s ? parseInt(s, 10) < a.CONST_PTR.minWidth ? (t.clientW = a.CONST_PTR.minWidth + "px", d = a.CONST_PTR.minWidth - 2 + "px") : (t.clientW = s, d = parseInt(s, 10) - 2 + "px") : (t.clientW = "100%", d = c ? "99%" : "100%"), !p || "auto" == p || parseInt(p, 10) < a.CONST_PTR.minHeight ? t.clientH = a.CONST_PTR.minHeight + "px" : t.clientH = p;
      var f = {
        width: t.clientW,
        height: t.clientH,
        border: "1px solid #e7e7e7",
        position: "relative",
        borderRadius: "2px",
        lineHeight: t.clientH,
        boxSizing: "border-box",
        background: "url(" + n + ") center no-repeat"
      };
      r.CSS(i, f);
      var l = {
        width: d,
        height: parseInt(t.clientH, 10) - 2 + "px",
        border: "none",
        position: "relative",
        minHeight: a.CONST_PTR.minHeight - 2 + "px",
        minWidth: a.CONST_PTR.minWidth - 2 + "px",
        zIndex: 10
      };

      if (t.opts.firstvrytype && 2 == t.opts.firstvrytype && (t.clientW = a.CONST_SLIDE_PTR.width + "px", t.clientH = a.CONST_SLIDE_PTR.height + "px", l = {
        width: t.clientW,
        height: t.clientH,
        border: "none",
        position: "relative",
        minHeight: t.clientH,
        minWidth: t.clientW,
        zIndex: 10
      }), r.CSS(o, l), t.src) {
        t.opts.themeColor && (t.src = r.addUrlParam(t.src, {
          color: t.opts.themeColor
        }));
        var h = 0;
        t.clientH.length > 2 && (h = t.clientH.substr(0, t.clientH.length - 2)), t.src = r.addUrlParam(t.src, {
          uid: t.opts.uin,
          cap_cd: t.opts.capcd,
          height: h,
          lang: t.opts.lang,
          fb: t.opts.fb,
          theme: t.opts.theme,
          rnd: Math.floor(1e6 * Math.random()),
          forcestyle: t.opts.forcestyle
        }), o.src = t.src;
      }

      t.preTrigerPoint = o, t.wrap = i, t.wrap.appendChild(t.preTrigerPoint), t.ele.appendChild(t.wrap), function (e) {
        e.msg.addTarget(e.preTrigerPoint.contentWindow, "preTrigerPoint");
      }(e);
    },
    setPosition: function (e, t) {
      if ("embed" != e.opts.type) {
        var i = 0,
            n = 0;

        if ("popup" == e.opts.type) {
          var o = function (e) {
            return [e.sizeSC.width, e.sizeSC.height];
          }(e),
              a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          i = ((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - o[1]) / 2, n = (a - o[0]) / 2;
        }

        if ("point" == e.opts.type) {
          var s = f(e);
          i = s[0], n = s[1];
        }

        return r.CSS(t, {
          top: i + "px",
          left: n + "px"
        });
      }
    },
    changePos: f,
    smartverification: function (e, t) {
      var i = e;
      i.opts.tcaptchaFlag ? (setTimeout(function () {
        i.TCaptchaFrame.changeVerifyType(), i.opts.sdkOpts && i.opts.sdkOpts.width && i.readyFunc && i.readyFunc({
          sdkView: {
            width: i.opts.sdkOpts.width,
            height: i.opts.sdkOpts.height
          }
        });
      }, 350), setTimeout(function () {
        r.removeIfExist("t_verify"), r.removeIfExist("t_mask"), r.callbackExecutor(i, {
          ret: 0,
          ticket: t.ticket,
          randstr: t.randstr
        });
      }, 1350)) : r.callbackExecutor(i, {
        ret: 0,
        ticket: t.ticket,
        randstr: t.randstr
      });
    },
    popupResize: function (e, t) {
      var i = e,
          n = 0;
      n = window.innerWidth;
      var s = void 0;

      window.onresize = function () {
        clearTimeout(s), s = setTimeout(function () {
          if (!(i.opts.tcaptchaFlag && i.opts.sdkOpts && i.opts.sdkOpts.width || Math.abs(window.innerWidth - n) < a.threshold)) {
            n = window.innerWidth, d(t, i, !1, !0);
            var e = {
              height: i.sizeSC.height + "px",
              width: i.sizeSC.width + "px",
              top: i.posSC.top,
              left: i.posSC.left
            },
                s = o.border();
            s && r.CSS(s, e), r.CSS(i.securityIframe, e), r.isMobileUa && i.send2securityCode(JSON.stringify({
              message: {
                type: 1,
                width: i.sizeSC.width,
                height: i.sizeSC.height
              }
            }));
          }
        }, 50);
      };
    },
    fullScreen: function (e, t) {
      var i = e;
      setTimeout(function () {
        var e = r.getWindowHeight(),
            n = r.getWindowWidth();
        i.sizeSC.height = e, i.sizeSC.width = n, i.windowHeight = e, i.windowWidth = n, i.TCaptchaFrame.createSecurityCode(t), window.onresize = function () {
          setTimeout(function () {
            var e = r.getWindowHeight(),
                t = r.getWindowWidth();

            if (!(Math.abs(i.windowWidth - t) < 30)) {
              i.sizeSC.height = e, i.sizeSC.width = t, i.windowHeight = e, i.windowWidth = t;
              var n = {
                height: i.sizeSC.height + "px",
                width: i.sizeSC.width + "px"
              },
                  a = o.border();
              a && r.CSS(a, n), r.CSS(i.securityIframe, n), r.isMobileUa && i.send2securityCode(JSON.stringify({
                message: {
                  type: 1,
                  width: i.sizeSC.width,
                  height: i.sizeSC.height
                }
              }));
            }
          }, 200);
        };
      }, 350);
    }
  };
}