function (e, t, n) {
  "use strict";

  var i = n(44),
      r = n(12),
      o = new i("securityCode"),
      a = 1;
  o.addTarget(window.parent, "parent"), o.listen(function (e) {});

  var s = function (e, t) {
    try {
      t && (e = {
        message: e
      }), o.targets.parent.send(JSON.stringify(e));
    } catch (n) {}
  },
      c = {
    adjustStyle: function () {
      s({
        type: 7
      }, !0);
    },
    capClose: function () {
      s({
        type: 6
      }, !0);
    },
    loadMsg: function (e, t, n, i) {
      s({
        type: 10,
        loadstate: e,
        info: t || "",
        fwidth: n,
        fheight: i
      }, !0);
    },
    loadReady: function () {
      try {
        c.loadMsg(r.loadState.ready);
      } catch (e) {}
    },
    loadFailure: function (e) {
      c.loadMsg(r.loadState.fail, e);
    },
    loadChange: function (e, t) {
      c.loadMsg(r.loadState.mixing, null, e, t);
    },
    hybridVerify: function (e, t) {
      s({
        type: 8,
        sess: e,
        subsid: t
      }, !0);
    },
    sessionTimeout: function () {
      s({
        type: 12
      }, !0);
    },
    verifySuccess: function (e, t) {
      s({
        type: 3,
        ticket: e,
        randstr: t
      }, !0);
    },
    frequencyLimit: function () {
      s({
        type: 11
      }, !0);
    },
    goBack: function () {
      s({
        type: 4
      }, !0);
    },
    otherBack: function () {
      s({
        type: 2,
        seq: a++
      });
    }
  };

  e.exports = c;
}