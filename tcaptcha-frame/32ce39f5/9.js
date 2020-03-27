function (e, t, i) {
  "use strict";

  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      n = "[CODE_VERIFY]",
      o = ("postMessage" in window);

  function a(e, t, i) {
    var n = "";
    if (arguments.length < 2 ? n = "[Msger] error 1" : "object" != (void 0 === e ? "undefined" : r(e)) ? n = "[Msger] error 2" : "string" != typeof t && (n = "[Msger] error 3"), n) throw new Error(n);
    this.target = e, this.name = t, this.domain = i || "*";
  }

  function s(e, t) {
    this.targets = {}, this.name = e, this.listenFunc = [], "string" != typeof (n = t || n) && (n = n.toString()), this.initListen();
  }

  a.prototype.send = o ? function (e) {
    this.target.postMessage(e, this.domain);
  } : function (e) {
    var t = window.navigator[n + this.name];
    if ("function" != typeof t) throw new Error("target callback function is not defined");
    t(e, window);
  }, s.prototype.addTarget = function (e, t, i) {
    var r = new a(e, t, i);
    this.targets[t] = r;
  }, s.prototype.initListen = function () {
    var e = this,
        t = function (t) {
      "object" == (void 0 === t ? "undefined" : r(t)) && t.data && (t = t.data);

      for (var i = 0; i < e.listenFunc.length; i++) e.listenFunc[i](t);
    };

    o ? "addEventListener" in document ? window.addEventListener("message", t, !1) : "attachEvent" in document && window.attachEvent("onmessage", t) : window.navigator[n + this.name] = t;
  }, s.prototype.listen = function (e) {
    this.listenFunc.push(e);
  }, s.prototype.clear = function () {
    this.listenFunc = [];
  }, s.prototype.send = function (e) {
    var t,
        i = this.targets;

    for (t in i) i.hasOwnProperty(t) && i[t].send(e);
  }, window.TCapMsg = s, e.exports = s;
}