function (e, t, n) {
  "use strict";

  var i = Object.prototype.hasOwnProperty,
      r = Object.prototype.toString,
      o = Object.defineProperty,
      a = Object.getOwnPropertyDescriptor,
      s = function (e) {
    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e);
  },
      c = function (e) {
    if (!e || "[object Object]" !== r.call(e)) return !1;
    var t,
        n = i.call(e, "constructor"),
        o = e.constructor && e.constructor.prototype && i.call(e.constructor.prototype, "isPrototypeOf");
    if (e.constructor && !n && !o) return !1;

    for (t in e);

    return void 0 === t || i.call(e, t);
  },
      u = function (e, t) {
    o && "__proto__" === t.name ? o(e, t.name, {
      enumerable: !0,
      configurable: !0,
      value: t.newValue,
      writable: !0
    }) : e[t.name] = t.newValue;
  },
      l = function (e, t) {
    if ("__proto__" === t) {
      if (!i.call(e, t)) return;
      if (a) return a(e, t).value;
    }

    return e[t];
  };

  e.exports = function f() {
    var e,
        t,
        n,
        i,
        r,
        o,
        a = arguments[0],
        d = 1,
        p = arguments.length,
        h = !1;

    for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, d = 2), (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); d < p; ++d) if (null != (e = arguments[d])) for (t in e) n = l(a, t), a !== (i = l(e, t)) && (h && i && (c(i) || (r = s(i))) ? (r ? (r = !1, o = n && s(n) ? n : []) : o = n && c(n) ? n : {}, u(a, {
      name: t,
      newValue: f(h, o, i)
    })) : void 0 !== i && u(a, {
      name: t,
      newValue: i
    }));

    return a;
  };
}