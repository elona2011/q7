function (e, t) {
  var i = {},
      r = function (e) {
    var t;
    return function () {
      return void 0 === t && (t = e.apply(this, arguments)), t;
    };
  },
      n = r(function () {
    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
  }),
      o = r(function () {
    return document.head || document.getElementsByTagName("head")[0];
  }),
      a = null,
      s = 0;

  function c(e, t) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
          o = i[n.id];

      if (o) {
        o.refs++;

        for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a]);

        for (; a < n.parts.length; a++) o.parts.push(f(n.parts[a], t));
      } else {
        var s = [];

        for (a = 0; a < n.parts.length; a++) s.push(f(n.parts[a], t));

        i[n.id] = {
          id: n.id,
          refs: 1,
          parts: s
        };
      }
    }
  }

  function p(e) {
    for (var t = [], i = {}, r = 0; r < e.length; r++) {
      var n = e[r],
          o = n[0],
          a = {
        css: n[1],
        media: n[2],
        sourceMap: n[3]
      };
      i[o] ? i[o].parts.push(a) : t.push(i[o] = {
        id: o,
        parts: [a]
      });
    }

    return t;
  }

  function d(e, t) {
    var i = Array.prototype.slice.call(arguments, 2);
    return function () {
      var r = Array.prototype.slice.call(arguments);
      e.apply(t, i.concat(r));
    };
  }

  function u() {
    var e = document.createElement("style"),
        t = o();
    return e.type = "text/css", t.appendChild(e), e;
  }

  function f(e, t) {
    var i, r, n, c, p;

    if (t.singleton) {
      var f = s++;
      i = a || (a = u()), r = d(m, null, i, f, !1), n = d(m, null, i, f, !0);
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (c = document.createElement("link"), p = o(), c.rel = "stylesheet", p.appendChild(c), r = d(y, null, i = c), n = function () {
      i.parentNode.removeChild(i), i.href && URL.revokeObjectURL(i.href);
    }) : (i = u(), r = d(g, null, i), n = function () {
      i.parentNode.removeChild(i);
    });

    return r(e), function (t) {
      if (t) {
        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
        r(e = t);
      } else n();
    };
  }

  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    "undefined" == typeof (t = t || {}).singleton && (t.singleton = n());
    var r = p(e);
    return c(r, t), function (e) {
      for (var n = [], o = 0; o < r.length; o++) {
        var a = r[o];
        (s = i[a.id]).refs--, n.push(s);
      }

      e && c(p(e), t);

      for (o = 0; o < n.length; o++) {
        var s;

        if (0 === (s = n[o]).refs) {
          for (var d = 0; d < s.parts.length; d++) s.parts[d]();

          delete i[s.id];
        }
      }
    };
  };

  var l,
      h = (l = [], function (e, t) {
    var i = [];
    l[e] = t;

    for (var r = 0; r < l.length; r++) l[r] && i.push(l[r]);

    return i.join("\n");
  });

  function m(e, t, i, r) {
    var n = i ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = h(t, n);else {
      var o = document.createTextNode(n),
          a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
    }
  }

  function g(e, t) {
    var i = t.css,
        r = t.media;
    t.sourceMap;
    if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = i;else {
      for (; e.firstChild;) e.removeChild(e.firstChild);

      e.appendChild(document.createTextNode(i));
    }
  }

  function y(e, t) {
    var i = t.css,
        r = (t.media, t.sourceMap);
    r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
    var n = new Blob([i], {
      type: "text/css"
    }),
        o = e.href;
    e.href = URL.createObjectURL(n), o && URL.revokeObjectURL(o);
  }
}