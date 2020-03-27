function (e, t, n) {
  "use strict";

  function i(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }

  function r(e, t, n, r, o, a) {
    return i(function (e, t) {
      return e << t | e >>> 32 - t;
    }(i(i(t, e), i(r, a)), o), n);
  }

  function o(e, t, n, i, o, a, s) {
    return r(t & n | ~t & i, e, t, o, a, s);
  }

  function a(e, t, n, i, o, a, s) {
    return r(t & i | n & ~i, e, t, o, a, s);
  }

  function s(e, t, n, i, o, a, s) {
    return r(t ^ n ^ i, e, t, o, a, s);
  }

  function c(e, t, n, i, o, a, s) {
    return r(n ^ (t | ~i), e, t, o, a, s);
  }

  function u(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
    var n,
        r,
        u,
        l,
        f,
        d = 1732584193,
        p = -271733879,
        h = -1732584194,
        m = 271733878;

    for (n = 0; n < e.length; n += 16) r = d, u = p, l = h, f = m, p = c(p = c(p = c(p = c(p = s(p = s(p = s(p = s(p = a(p = a(p = a(p = a(p = o(p = o(p = o(p = o(p, h = o(h, m = o(m, d = o(d, p, h, m, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), m, d, e[n + 3], 22, -1044525330), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), m, d, e[n + 7], 22, -45705983), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), m, d, e[n + 11], 22, -1990404162), h = o(h, m = o(m, d = o(d, p, h, m, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), m, d, e[n + 15], 22, 1236535329), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), m, d, e[n], 20, -373897302), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), m, d, e[n + 4], 20, -405537848), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), m, d, e[n + 8], 20, 1163531501), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), m, d, e[n + 12], 20, -1926607734), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), m, d, e[n + 14], 23, -35309556), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), m, d, e[n + 10], 23, -1094730640), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), m, d, e[n + 6], 23, 76029189), h = s(h, m = s(m, d = s(d, p, h, m, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), m, d, e[n + 2], 23, -995338651), h = c(h, m = c(m, d = c(d, p, h, m, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), m, d, e[n + 5], 21, -57434055), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), m, d, e[n + 1], 21, -2054922799), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), m, d, e[n + 13], 21, 1309151649), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), m, d, e[n + 9], 21, -343485551), d = i(d, r), p = i(p, u), h = i(h, l), m = i(m, f);

    return [d, p, h, m];
  }

  function l(e) {
    var t,
        n = "";

    for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);

    return n;
  }

  function f(e) {
    var t,
        n = [];

    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;

    for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;

    return n;
  }

  function d(e) {
    var t,
        n,
        i = "0123456789abcdef",
        r = "";

    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);

    return r;
  }

  function p(e) {
    return unescape(encodeURIComponent(e));
  }

  function h(e) {
    return function (e) {
      return l(u(f(e), 8 * e.length));
    }(p(e));
  }

  function m(e, t) {
    return function (e, t) {
      var n,
          i,
          r = f(e),
          o = [],
          a = [];

      for (o[15] = a[15] = void 0, r.length > 16 && (r = u(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], a[n] = 1549556828 ^ r[n];

      return i = u(o.concat(f(t)), 512 + 8 * t.length), l(u(a.concat(i), 640));
    }(p(e), p(t));
  }

  e.exports = function (e, t, n) {
    return t ? n ? m(t, e) : function (e, t) {
      return d(m(e, t));
    }(t, e) : n ? h(e) : function (e) {
      return d(h(e));
    }(e);
  };
}