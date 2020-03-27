function (e, t, n) {
  "use strict";

  n(42), n(27).loadReady();
  n(45), n(4).isLowIE;
  var i = /(iPhone|iPad|iPod|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent);

  if (!window.addEventListener || !document.querySelector) {
    var r = document.getElementById("inlineCaptchaStyle");
    r.parentNode.removeChild(r);
  }

  if (i) window.$ = n(46), n(35)();else {
    var o = function (e) {
      (e && "load" === e.type || /^(loaded|complete)$/.test(this.readyState)) && function t() {
        window.$ ? n(35)() : setTimeout(t, 20);
      }();
    },
        a = window.document.createElement("script");

    a.type = "text/javascript", a.async = !0, "onload" in a ? a.onload = o : a.onreadystatechange = o, a.src = window.captchaConfig.htdocsPath + "/jquery-1.11.3.min.js", window.document.getElementsByTagName("body").item(0).appendChild(a);
  }
  window.TCaptchaLoaded = !0;
}