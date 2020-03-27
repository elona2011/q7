function (e, t, n) {
  "use strict";

  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      r = "[CODE_VERIFY]",
      o = ("postMessage" in window);

  function a(e, t, n) {
    var r = "";
    if (arguments.length < 2 ? r = "[Msger] error 1" : "object" != (void 0 === e ? "undefined" : i(e)) ? r = "[Msger] error 2" : "string" != typeof t && (r = "[Msger] error 3"), r) throw new Error(r);
    this.target = e, this.name = t, this.domain = n || "*";
  }

  function s(e, t) {
    this.targets = {}, this.name = e, this.listenFunc = [], "string" != typeof (r = t || r) && (r = r.toString()), this.initListen();
  }

  a.prototype.send = o ? function (e) {
    this.target.postMessage(e, this.domain);
  } : function (e) {
    var t = window.navigator[r + this.name];
    if ("function" != typeof t) throw new Error("target callback function is not defined");
    t(e, window);
  }, s.prototype.addTarget = function (e, t, n) {
    var i = new a(e, t, n);
    this.targets[t] = i;
  }, s.prototype.initListen = function () {
    var e = this,
        t = function (t) {
      "object" == (void 0 === t ? "undefined" : i(t)) && t.data && (t = t.data);

      for (var n = 0; n < e.listenFunc.length; n++) e.listenFunc[n](t);
    };

    o ? "addEventListener" in document ? window.addEventListener("message", t, !1) : "attachEvent" in document && window.attachEvent("onmessage", t) : window.navigator[r + this.name] = t;
  }, s.prototype.listen = function (e) {
    this.listenFunc.push(e);
  }, s.prototype.clear = function () {
    this.listenFunc = [];
  }, s.prototype.send = function (e) {
    var t,
        n = this.targets;

    for (t in n) n.hasOwnProperty(t) && n[t].send(e);
  }, e.exports = s;
}