function (e, t, i) {
  "use strict";

  i(8);
  var r = i(9),
      n = i(4),
      o = i(58),
      a = i(31),
      s = i(32),
      c = i(33),
      p = i(60),
      d = i(38),
      u = d.langPack,
      f = i(39),
      l = d.detectWxLang(),
      h = i(40),
      m = i(62),
      g = i(3),
      y = "securityCode",
      v = "preTrigerPoint",
      S = void 0,
      b = !1,
      w = new r("parent"),
      C = !1;

  function _() {
    return S || (S = this.init.apply(this, arguments));
  }

  _.prototype = {
    init: function (e) {
      var t = {
        ele: document.body,
        src: "",
        uid: "",
        capcd: "",
        startFn: function () {},
        endFn: function () {}
      };
      return this.wxLang = l, this.opts = n.extend({}, t, e), this.isPop = "popup" == this.opts.type, this.initOptions(), this.initLang(), this.listenFunc = [], this.readyFunc = function () {}, this.msg = w, this.initListener(), this.windowHeight = 0, this.windowWidth = 0, this.sess = "", this.TCaptchaFrame = m.getInstance(this), this;
    },
    initOptions: function () {
      this.ele = this.opts.ele ? this.opts.ele == document ? document.body : this.opts.ele : document.body, this.ele = this.opts.type && this.isPop ? document.body : this.ele, this.src = this.opts.src, this.ticket = "", this.randstr = "", null == this.sizeSC && (this.sizeSC = n.extend({}, c.CONST_DEFAULT_SIZE)), null == this.posSC && (this.posSC = n.extend({}, c.CONST_SC_PS));
    },
    initLang: function () {
      if (this.wxLang) u.init(this.wxLang);else {
        var e = /lang=([\d]{4})/.exec(this.opts.params);
        e && u.init(e[1]);
      }
      this.langPack = u;
    },
    pointSuccess: function () {
      n.CSS(window.document.getElementById("loading_animation"), {
        border: "1px solid #42dd18"
      }), this.send2preTriggerPoint(JSON.stringify({
        message: {
          type: "success"
        }
      }));
    },
    initListener: function () {
      var e = this;
      this.msg.clear(), this.msg.listen(function (t) {
        try {
          t = JSON.parse(t);
        } catch (y) {
          return;
        }

        if (t && t.message && t.message.type) {
          var i = (t = t.message).type;

          switch (i) {
            case 3:
              if (e.opts.startFn(), t && t.ticket) e.ticket = t.ticket, e.randstr = t.randstr, n.removeIfExist("tcaptcha_container"), n.removeIfExist("tcaptcha_transform"), n.removeIfExist("t_mask"), n.callbackExecutor(e, {
                ret: 0,
                ticket: t.ticket,
                randstr: t.randstr
              }), "point" == e.opts.type && (t.noVerify ? setTimeout(e.pointSuccess, 1e3) : e.pointSuccess());else {
                if (t && t.src) {
                  var r = n.getCapType(t.captype, t.subcaptype);
                  h.setCaptchaIframeSizeAndPos(r, e, !1, !0);
                  var c = t.src;
                  t.src.indexOf("http:") > -1 && e.opts.domain && e.opts.domain.indexOf("https:") > -1 && (c = (c = c.replace("http://captcha.qq.com", "https://ssl.captcha.qq.com")).replace("http://ssl.captcha.qq.com", "https://ssl.captcha.qq.com")), e.TCaptchaFrame.createSecurityCode(r, f(c));
                }

                e.securityIframe && h.setPosition(e, e.securityIframe);
              }
              return;

            case 4:
              return n.removeIfExist("tcaptcha_transform"), void n.callbackExecutor(e, {
                ret: 1,
                ticket: "",
                randstr: ""
              });

            case 13:
            case 6:
              return n.removeIfExist("tcaptcha_transform"), n.removeIfExist("t_mask"), n.callbackExecutor(e, {
                ret: 2,
                ticket: "",
                randstr: ""
              }), void ("point" == e.opts.type && (n.removeIfExist("tcaptcha_container"), e.send2preTriggerPoint(JSON.stringify({
                message: {
                  type: "closePopup"
                }
              }))));

            case 7:
              n.removeIfExist("t_verify"), n.setPopPosition(e.securityIframe, e.sizeSC.width, e.sizeSC.height, e.opts.sdkOpts);
              var p = {
                background: "#ffffff",
                opacity: "1"
              };
              return n.isChrome75 || (p["border-radius"] = "3px"), void n.CSS(e.securityIframe, p);

            case 8:
              f.set(t.subsid);
              var d = {
                gettype: o.getType(e.opts),
                data: {
                  sess: t.sess
                },
                success: function (t) {
                  e.src = o.getIframeSrc(e.opts, t, e);
                  var i = {
                    uid: e.opts.uid,
                    cap_cd: e.opts.capcd,
                    rnd: Math.floor(1e6 * Math.random())
                  };
                  e.src = n.addUrlParam(e.src, i), e.sess = t.sess;
                  var r = n.getCapType(t.capclass, t.subcapclass);
                  h.setCaptchaIframeSizeAndPos(r, e, !0, !0), "embed" === e.opts.type && (e.src = n.addUrlParam(e.src, {
                    noBorder: "noborder",
                    fb: e.opts.fb,
                    forcestyle: e.opts.forcestyle
                  })), e.securityIframe && (e.securityIframe.src = e.src), e.opts.capType = r;
                },
                error: function () {}
              };
              return void e.getPrehandle(d);

            case 9:
              var u = window.document.getElementById("loading_animation");
              return u && setTimeout(function () {
                u.style.background = "none";
              }, 100), void ("point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                message: {
                  type: "triggerSuccess"
                }
              })));

            case 10:
              return e.readyFunc && e.readyFunc({
                sdkView: {
                  width: e.sizeSC.width,
                  height: e.sizeSC.height
                },
                state: t.loadstate,
                info: t.info,
                fwidth: t.fwidth ? t.fwidth : 0,
                fheight: t.fheight ? t.fheight : 0
              }), void ("point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                message: {
                  type: "loadDone"
                }
              })));

            case 15:
            case 11:
              if (11 == i && "vtt" == e.opts.capType && 2 == e.opts.clientype) return;
              if ("point" == e.opts.type) n.removeIfExist("tcaptcha_container"), e.send2preTriggerPoint(JSON.stringify({
                message: {
                  type: "fLimit"
                }
              })), n.callbackExecutor(e, {
                ret: 2,
                ticket: "",
                randstr: ""
              });else if ("popup" == e.opts.type || "" == e.opts.type) {
                var l = {
                  gettype: o.getType(e.opts),
                  data: {
                    sess: ""
                  },
                  success: function (t) {
                    e.src = o.getIframeSrc(e.opts, t, e);
                    var i = n.getCapType(t.capclass, t.subcapclass),
                        r = a.tIframe();
                    e.isPop && h.setCaptchaIframeSizeAndPos(i, e, !0, !0), a.border() && s[i].unionSizeType ? e.TCaptchaFrame.showRefreshDom() : r.src = e.src;
                  },
                  error: function () {}
                };
                e.getPrehandle(l);
              } else e.refresh();
              return;

            case 16:
            case 12:
              var m = {
                gettype: o.getType(e.opts),
                data: {
                  sess: ""
                },
                success: function (t) {
                  e.src = o.getIframeSrc(e.opts, t, e), a.tIframe().src = e.src;
                },
                error: function () {}
              };
              return void e.getPrehandle(m);

            case 14:
              "point" == e.opts.type && e.send2preTriggerPoint(JSON.stringify({
                message: {
                  type: "loadDone"
                }
              }));
              var g = a.container();
              return g && setTimeout(function () {
                n.CSS(g, {
                  display: "block",
                  zoom: 1
                }), n.CSS(e.securityIframe, {
                  zoom: 1
                });
              }, 16), void n.removeIfExist("t_verify");
          }
        }
      });
    },
    initPos: function (e) {
      e && e.top && (this.posSC.top = e.top), e && e.left && (this.posSC.left = e.left);
    },
    create: function () {
      switch (this.opts.type) {
        case "point":
          h.createPreTrigerPoint(this);
          break;

        case "embed":
          var e = window.document.getElementById("tcaptcha_load");
          e && (e.style.display = "none"), this.createPrehandle();
          break;

        case "popup":
        default:
          b || (h.addPopupStyle(this), b = !0), this.opts.tcaptchaFlag && this.isPop && this.TCaptchaFrame.createSmartVerify(), this.createPrehandle();
      }
    },
    createPrehandle: function () {
      if (!C) {
        C = !0;
        var e = this;
        e.loadStart = new Date().getTime();
        var t = 0,
            i = {
          gettype: o.getType(e.opts),
          data: {
            sess: ""
          },
          success: function (t) {
            C = !1, e.prehandleSuccess(t);
          },
          error: function () {
            C = !1, g.send("ERROR_TYPE_JSONP_PREHANDLE", e.opts.appid), ++t < 2 ? e.getPrehandle(i) : e.prehandleError();
          }
        };
        e.getPrehandle(i);
      }
    },
    getPrehandle: function (e) {
      f.reset(), p({
        url: f(e.gettype),
        data: e.data,
        success: e.success,
        error: e.error
      });
    },
    prehandleSuccess: function (e) {
      var t = this;

      try {
        t.src = o.getIframeSrc(t.opts, e, t), t.sess = e.sess;
        var i = n.getCapType(e.capclass, e.subcapclass),
            r = new Date().getTime();
        if (t.prehandleLoadTime = r - t.loadStart, t.createIframeStart = r, "embed" == t.opts.type) return h.setCaptchaIframeSizeAndPos(i, t, !1, !0), t.src = n.addUrlParam(t.src, {
          noBorder: "noborder",
          fb: t.opts.fb,
          forcestyle: t.opts.forcestyle
        }), void t.TCaptchaFrame.createSecurityCode(i);
        t.isPop ? (window.onresize = function () {
          a.tVerify() && n.setPopPosition(a.tVerify(), t.sizeSC.width, t.sizeSC.height);
        }, e.ticket ? h.smartverification(t, e) : setTimeout(function () {
          h.setCaptchaIframeSizeAndPos(i, t, !1, !0), t.opts.tcaptchaFlag && t.TCaptchaFrame.enlargeVerifyType(a.tVerify(), t.sizeSC.width, t.sizeSC.height, t.opts.sdkOpts), t.TCaptchaFrame.createSecurityCode(i), h.popupResize(t, i);
        }, 350)) : e.ticket ? n.callbackExecutor(t, {
          ret: 0,
          ticket: e.ticket,
          randstr: e.randstr
        }) : h.fullScreen(t, i), t.opts.capType = i;
      } catch (c) {
        var s = g.perfectStack(c);
        g.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", t.opts.appid, s || "prehandleSuccess code error");
      }
    },
    prehandleError: function () {
      n.removeIfExist("t_verify"), n.removeIfExist("t_mask"), n.callbackExecutor(this, {
        ret: 0,
        ticket: Math.random().toString(36).substr(2),
        randstr: "@" + Math.random().toString(36).substr(2)
      });
    },
    destroy: function () {
      n.removeIfExist("t_mask"), n.removeIfExist("tcaptcha_transform"), n.removeIfExist("tcaptcha_container"), n.removeIfExist("t_verify"), S && (this.closeSecurityCode(), this.listenFunc = [], this.listenFunc.length = 0, this.readyFunc = function () {}, S = null);
    },
    refresh: function (e) {
      n.removeIfExist("tcaptcha_container"), n.removeIfExist("t_verify"), S && (this.closeSecurityCode(), this.clearContainer(), this.initOptions(), e && n.isObject(e) && ("undefined" != typeof e.uin && (this.opts.uid = e.uin), "undefined" != typeof e.uid && (this.opts.uid = e.uid), "undefined" != typeof e.capcd && (this.opts.capcd = e.capcd)), this.create());
    },
    clearContainer: function () {
      "popup" != this.opts.type && "" != this.opts.type && this.ele && (this.ele.innerHTML = "");
    },
    listen: function (e, t) {
      this.listenFunc = [], this.listenFunc.push(e), this.readyFunc = function () {}, t && (this.readyFunc = t);
    },
    send2securityCode: function (e) {
      var t = y;
      this.msg.targets[t].send(e);
    },
    send2preTriggerPoint: function (e) {
      if ("point" == this.opts.type) {
        var t = v;
        this.msg.targets[t].send(e);
      }
    },
    closeSecurityCode: function (e) {
      try {
        this.opts.endFn();
      } catch (t) {}

      this.securityIframe && (this.securityIframe.parentNode && this.securityIframe.parentNode.removeChild(this.securityIframe), this.securityIframe = null), n.isFunction(e) && e(), window.CollectGarbage && window.CollectGarbage();
    },
    getTicket: function () {
      return {
        ticket: this.ticket,
        randstr: this.randstr
      };
    },
    start: function (e) {
      this.opts.startFn = e;
    },
    end: function (e) {
      this.opts.endFn = e;
    }
  }, window.AqSCode = _;
}