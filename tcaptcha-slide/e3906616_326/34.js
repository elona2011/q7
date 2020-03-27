function (e, t, n) {
  "use strict";

  function i(e) {
    return document.createElement(e);
  }

  function r() {
    return "history" in window && "pushState" in history;
  }

  !function () {
    var e = 0;
  }();
  var o,
      a,
      s = (o = [], a = [], {
    add: function (e) {
      Array.prototype.push.apply(o, e);
    },
    get: function () {
      for (var e = 0; e < o.length; e++) a[e] = o[e]();

      return a;
    }
  });
  s.add([function () {
    return "matches" in i("div");
  }, function () {
    return "msMatchesSelector" in i("div");
  }, function () {
    return "webkitMatchesSelector" in i("div");
  }, function () {
    return !!(window.matchMedia && window.matchMedia("(min-width: 400px)") && window.matchMedia("(min-width: 400px)").matches);
  }, function () {
    return !!(window.CSS && CSS.supports && CSS.supports("display", "block"));
  }, function () {
    return !!document.createRange;
  }, function () {
    return !!window.CustomEvent;
  }, function () {
    return "scrollIntoView" in i("div");
  }, function () {
    return "getUserMedia" in window.navigator;
  }, function () {
    return !!window.IntersectionObserver;
  }, function () {
    return "ontouchstart" in i("div");
  }, function () {
    return "performance" in window;
  }, function () {
    return !(!window.performance || !performance.timing);
  }, function () {
    return "MediaSource" in window;
  }, function () {
    return "onpageshow" in window;
  }, function () {
    return "onhashchange" in window;
  }, function () {
    return !(!window.crypto || !window.crypto.getRandomValues);
  }, function () {
    return !!window.screen.orientation;
  }, function () {
    return "WebSocket" in window;
  }, function () {
    return !1;
  }, function () {
    return "FileReader" in window;
  }, function () {
    return !!window.atob;
  }, function () {
    return !(!window.JSON || !JSON.parse);
  }, function () {
    return "postMessage" in window;
  }, function () {
    return "EventSource" in window;
  }, function () {
    return "onLine" in navigator;
  }, function () {
    return "Promise" in window;
  }, function () {
    return "setImmediate" in window;
  }, function () {
    return "isInfinite" in Number;
  }, function () {
    return "indexedDB" in window;
  }, function () {
    return "Proxy" in window;
  }, function () {
    return "serviceWorker" in navigator;
  }, function () {
    return "postMessage" in window;
  }, function () {
    return "Crypto" in window;
  }, function () {
    return "openDatabase" in window;
  }, function () {
    return "Notification" in window;
  }, function () {
    return "currentScript" in document;
  }, function () {
    var e = !1;
    return "number" == typeof window.screenX && ["webkit", "moz", "ms", "o", ""].forEach(function (t) {
      0 == e && document[t + (t ? "H" : "h") + "idden"] + "" != "undefined" && (e = !0);
    }), e;
  }, function () {
    var e = !1;

    try {
      e = "localStorage" in g && "setItem" in localStorage;
    } catch (t) {}

    return e;
  }, function () {
    var e = !1;

    try {
      e = "sessionStorage" in g && "setItem" in sessionStorage;
    } catch (t) {}

    return e;
  }, function () {
    return "console" in window;
  }, function () {
    return "requestAnimationFrame" in window;
  }, function () {
    return "geolocation" in window.navigator;
  }, function () {
    return "webkitSpeechRecognition" in window;
  }, r, function () {
    return "TextEncoder" in window;
  }, r, r, function () {
    var e = !1,
        t = "https://aq.qq.com/";

    try {
      new URL("/", t).href == t && (e = !0);
    } catch (n) {}

    return e;
  }, function () {
    try {
      "a".localeCompare("b", "i");
    } catch (e) {
      return "RangeError" === e.name;
    }

    return !1;
  }]);

  for (var c = new function () {
    var e = [];
    this.set = function (t) {
      e[t] = !0;
    }, this.encode = function () {
      for (var t = [], n = 0; n < e.length; n++) e[n] && (t[Math.floor(n / 6)] ^= 1 << n % 6);

      for (n = 0; n < t.length; n++) t[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[n] || 0);

      return t.join("");
    };
  }(), u = s.get(), l = 0; l < u.length; l++) u[l] && c.set(l + 1);

  var f = c.encode();

  e.exports = function () {
    return f;
  };
}