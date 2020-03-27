function (e, t) {
  function n(e, t) {
    e.onload = function () {
      this.onerror = this.onload = null, t(null, e);
    }, e.onerror = function () {
      this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e);
    };
  }

  function i(e, t) {
    e.onreadystatechange = function () {
      "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e));
    };
  }

  e.exports = function (e, t, r) {
    var o = document.head || document.getElementsByTagName("head")[0],
        a = document.createElement("script");
    "function" == typeof t && (r = t, t = {}), t = t || {}, r = r || function () {}, a.type = t.type || "text/javascript", a.charset = t.charset || "utf8", a.async = !("async" in t) || !!t.async, a.src = e, t.attrs && function (e, t) {
      for (var n in t) e.setAttribute(n, t[n]);
    }(a, t.attrs), t.text && (a.text = "" + t.text), ("onload" in a ? n : i)(a, r), a.onload || n(a, r), o.appendChild(a);
  };
}