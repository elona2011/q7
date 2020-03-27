function (e, t, i) {
  "use strict";

  var r = Object.prototype.hasOwnProperty,
      n = Object.prototype.toString,
      o = Object.defineProperty,
      a = Object.getOwnPropertyDescriptor,
      s = function (e) {
    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e);
  },
      c = function (e) {
    if (!e || "[object Object]" !== n.call(e)) return !1;
    var t,
        i = r.call(e, "constructor"),
        o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
    if (e.constructor && !i && !o) return !1;

    for (t in e);

    return void 0 === t || r.call(e, t);
  },
      p = function (e, t) {
    o && "__proto__" === t.name ? o(e, t.name, {
      enumerable: !0,
      configurable: !0,
      value: t.newValue,
      writable: !0
    }) : e[t.name] = t.newValue;
  },
      d = function (e, t) {
    if ("__proto__" === t) {
      if (!r.call(e, t)) return;
      if (a) return a(e, t).value;
    }

    return e[t];
  };

  e.exports = function u() {
    var e,
        t,
        i,
        r,
        n,
        o,
        a = arguments[0],
        f = 1,
        l = arguments.length,
        h = !1;

    for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, f = 2), (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); f < l; ++f) if (null != (e = arguments[f])) for (t in e) i = d(a, t), a !== (r = d(e, t)) && (h && r && (c(r) || (n = s(r))) ? (n ? (n = !1, o = i && s(i) ? i : []) : o = i && c(i) ? i : {}, p(a, {
      name: t,
      newValue: u(h, o, r)
    })) : void 0 !== r && p(a, {
      name: t,
      newValue: r
    }));

    return a;
  };
}