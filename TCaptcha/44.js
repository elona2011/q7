!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 16)
}([function(t, e, n) {
    "use strict";
    function r() {
        return Math.floor(1e8 * Math.random())
    }
    var o = function(t) {
        t = t ? 1 : 0;
        try {
            return location.search.substr(t)
        } catch (r) {
            try {
                var e = document.URL
                  , n = e.indexOf("?");
                if (n >= 0)
                    return e.substr(n + t)
            } catch (r) {}
        }
        return ""
    }
      , i = {};
    !function() {
        for (var t = o(!0).split("&"), e = 0; e < t.length; e++) {
            var n = /(.*?)=(.*)/.exec(t[e]);
            n && (i[n[1]] = n[2])
        }
    }();
    t.exports = {
        href: function() {
            try {
                return location.href
            } catch (t) {
                try {
                    return document.URL
                } catch (t) {}
            }
            return ""
        },
        getQuery: function(t) {
            var e = o();
            return e = e ? e.replace(/&rand=[^&]+/, "") + "&rand=" + r() : "?rand=" + r(),
            t = t ? 1 : 0,
            e.substr(t)
        },
        queryParam: function(t) {
            return i[t]
        },
        queryMap: function() {
            return $.extend({}, i)
        },
        parse2rgb: function(t) {
            if (!t || "string" != typeof t)
                return null;
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, r) {
                return e + e + n + n + r + r
            });
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16),
                s: "#" + e[1] + e[2] + e[3]
            } : null
        },
        arrIndexOf: function(t, e) {
            if ("function" == typeof t.indexOf)
                return t.indexOf(e);
            for (var n = 0; n < t.length; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = function() {
        var t = 1
          , e = /subsid=(\d+)/.exec(location.href);
        e && (t = parseInt(e[1], 10) + 1);
        var n = function(e, n) {
            var r = n || t;
            return e = /subsid=\d+/.test(e) ? e.replace(/subsid=\d+/g, "subsid=" + r) : e + "&subsid=" + r,
            n || t++,
            e
        };
        return n.get = function() {
            return t
        }
        ,
        n.bind = function() {
            var e = t++;
            return function(t) {
                return n(t, e)
            }
        }
        ,
        n
    }();
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , o = Object.prototype.toString
      , i = Object.defineProperty
      , a = Object.getOwnPropertyDescriptor
      , c = function(t) {
        return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === o.call(t)
    }
      , s = function(t) {
        if (!t || "[object Object]" !== o.call(t))
            return !1;
        var e, n = r.call(t, "constructor"), i = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !i)
            return !1;
        for (e in t)
            ;
        return void 0 === e || r.call(t, e)
    }
      , u = function(t, e) {
        i && "__proto__" === e.name ? i(t, e.name, {
            enumerable: !0,
            configurable: !0,
            value: e.newValue,
            writable: !0
        }) : t[e.name] = e.newValue
    }
      , p = function(t, e) {
        if ("__proto__" === e) {
            if (!r.call(t, e))
                return;
            if (a)
                return a(t, e).value
        }
        return t[e]
    };
    t.exports = function f() {
        var t, e, n, r, o, i, a = arguments[0], l = 1, d = arguments.length, h = !1;
        for ("boolean" == typeof a && (h = a,
        a = arguments[1] || {},
        l = 2),
        (null == a || "object" != typeof a && "function" != typeof a) && (a = {}); l < d; ++l)
            if (null != (t = arguments[l]))
                for (e in t)
                    n = p(a, e),
                    a !== (r = p(t, e)) && (h && r && (s(r) || (o = c(r))) ? (o ? (o = !1,
                    i = n && c(n) ? n : []) : i = n && s(n) ? n : {},
                    u(a, {
                        name: e,
                        newValue: f(h, i, r)
                    })) : void 0 !== r && u(a, {
                        name: e,
                        newValue: r
                    }));
        return a
    }
}
, function(t, e, n) {
    "use strict";
    var r, o, i = n(1), a = {
        ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
        ERROR_TYPE_JSONP_PREHANDLE: 17,
        ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
        CALLBACK_NAME: 19
    }, c = {
        ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: "ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL",
        ERROR_TYPE_JSONP_PREHANDLE: "ERROR_TYPE_JSONP_PREHANDLE",
        ERROR_TYPE_FRAMEJS_CODE_ERROR: "ERROR_TYPE_FRAMEJS_CODE_ERROR",
        CALLBACK_NAME: "CALLBACK_NAME"
    }, s = (r = document.referrer,
    o = location.href || document.URL,
    r = r.length > 512 ? r.substr(0, 512) : r,
    o = o.length > 1024 ? o.substr(0, 1024) : o,
    ["referer=" + encodeURIComponent(r), "href=" + encodeURIComponent(o)].join("&"));
    t.exports = {
        type: a,
        send: function(t, e, n) {
            try {
                (n = n || c[t]).length > 1024 && n.substr(0, 1024);
                var r = ["type=" + (t = a[t]), "appid=" + e, "reason=" + encodeURIComponent(n)]
                  , o = "https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?" + s + "&" + r.join("&");
                (new Image).src = i(o)
            } catch (u) {}
        },
        perfectStack: function(t) {
            var e = "";
            t && t.stack && (e = t.stack.replace(/\n/gi, "").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi, ""));
            try {
                var n = t.toString();
                e.indexOf(n) < 0 && (e = n + "@" + e)
            } catch (r) {}
            return e
        }
    }
}
, , function(t, e, n) {
    "use strict";
    t.exports = {
        add: function(t, e, n) {
            t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n)
        },
        remove: function(t, e, n) {
            t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null)
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || ""
                      , r = t[3];
                    if (!r)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var o = (a = r,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                          , i = r.sources.map(function(t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(t, e) {
    var n = {}
      , r = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)),
            e
        }
    }
      , o = r(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    })
      , i = r(function() {
        return document.head || document.getElementsByTagName("head")[0]
    })
      , a = null
      , c = 0;
    function s(t, e) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r]
              , i = n[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++)
                    i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++)
                    i.parts.push(l(o.parts[a], e))
            } else {
                var c = [];
                for (a = 0; a < o.parts.length; a++)
                    c.push(l(o.parts[a], e));
                n[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: c
                }
            }
        }
    }
    function u(t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) {
            var o = t[r]
              , i = o[0]
              , a = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            n[i] ? n[i].parts.push(a) : e.push(n[i] = {
                id: i,
                parts: [a]
            })
        }
        return e
    }
    function p(t, e) {
        var n = Array.prototype.slice.call(arguments, 2);
        return function() {
            var r = Array.prototype.slice.call(arguments);
            t.apply(e, n.concat(r))
        }
    }
    function f() {
        var t = document.createElement("style")
          , e = i();
        return t.type = "text/css",
        e.appendChild(t),
        t
    }
    function l(t, e) {
        var n, r, o, s, u;
        if (e.singleton) {
            var l = c++;
            n = a || (a = f()),
            r = p(y, null, n, l, !1),
            o = p(y, null, n, l, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (s = document.createElement("link"),
            u = i(),
            s.rel = "stylesheet",
            u.appendChild(s),
            r = p(m, null, n = s),
            o = function() {
                n.parentNode.removeChild(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = f(),
            r = p(b, null, n),
            o = function() {
                n.parentNode.removeChild(n)
            }
            );
        return r(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                r(t = e)
            } else
                o()
        }
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        "undefined" == typeof (e = e || {}).singleton && (e.singleton = o());
        var r = u(t);
        return s(r, e),
        function(t) {
            for (var o = [], i = 0; i < r.length; i++) {
                var a = r[i];
                (c = n[a.id]).refs--,
                o.push(c)
            }
            t && s(u(t), e);
            for (i = 0; i < o.length; i++) {
                var c;
                if (0 === (c = o[i]).refs) {
                    for (var p = 0; p < c.parts.length; p++)
                        c.parts[p]();
                    delete n[c.id]
                }
            }
        }
    }
    ;
    var d, h = (d = [],
    function(t, e) {
        var n = [];
        d[t] = e;
        for (var r = 0; r < d.length; r++)
            d[r] && n.push(d[r]);
        return n.join("\n")
    }
    );
    function y(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = h(e, o);
        else {
            var i = document.createTextNode(o)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
    function b(t, e) {
        var n = e.css
          , r = e.media;
        e.sourceMap;
        if (r && t.setAttribute("media", r),
        t.styleSheet)
            t.styleSheet.cssText = n;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    function m(t, e) {
        var n = e.css
          , r = (e.media,
        e.sourceMap);
        r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var o = new Blob([n],{
            type: "text/css"
        })
          , i = t.href;
        t.href = URL.createObjectURL(o),
        i && URL.revokeObjectURL(i)
    }
}
, function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}),
    function() {
        var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
        function f(t) {
            return t < 10 ? "0" + t : t
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(t) {
            return rx_escapable.lastIndex = 0,
            rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }
        function str(t, e) {
            var n, r, o, i, a, c = gap, s = e[t];
            switch (s && "object" === (void 0 === s ? "undefined" : _typeof(s)) && "function" == typeof s.toJSON && (s = s.toJSON(t)),
            "function" == typeof rep && (s = rep.call(e, t, s)),
            void 0 === s ? "undefined" : _typeof(s)) {
            case "string":
                return quote(s);
            case "number":
                return isFinite(s) ? String(s) : "null";
            case "boolean":
            case "null":
                return String(s);
            case "object":
                if (!s)
                    return "null";
                if (gap += indent,
                a = [],
                "[object Array]" === Object.prototype.toString.apply(s)) {
                    for (i = s.length,
                    n = 0; n < i; n += 1)
                        a[n] = str(n, s) || "null";
                    return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + c + "]" : "[" + a.join(",") + "]",
                    gap = c,
                    o
                }
                if (rep && "object" === (void 0 === rep ? "undefined" : _typeof(rep)))
                    for (i = rep.length,
                    n = 0; n < i; n += 1)
                        "string" == typeof rep[n] && (o = str(r = rep[n], s)) && a.push(quote(r) + (gap ? ": " : ":") + o);
                else
                    for (r in s)
                        Object.prototype.hasOwnProperty.call(s, r) && (o = str(r, s)) && a.push(quote(r) + (gap ? ": " : ":") + o);
                return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + c + "}" : "{" + a.join(",") + "}",
                gap = c,
                o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }
        ,
        Boolean.prototype.toJSON = this_value,
        Number.prototype.toJSON = this_value,
        String.prototype.toJSON = this_value),
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        JSON.stringify = function(t, e, n) {
            var r;
            if (gap = "",
            indent = "",
            "number" == typeof n)
                for (r = 0; r < n; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = e,
            e && "function" != typeof e && ("object" !== (void 0 === e ? "undefined" : _typeof(e)) || "number" != typeof e.length))
                throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }
        ),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            var j;
            function walk(t, e) {
                var n, r, o = t[e];
                if (o && "object" === (void 0 === o ? "undefined" : _typeof(o)))
                    for (n in o)
                        Object.prototype.hasOwnProperty.call(o, n) && ((r = walk(o, n)) !== undefined ? o[n] = r : delete o[n]);
                return reviver.call(t, e, o)
            }
            if (text = String(text),
            rx_dangerous.lastIndex = 0,
            rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })),
            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
        )
    }()
}
, function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , o = "[CODE_VERIFY]"
      , i = "postMessage"in window;
    function a(t, e, n) {
        var o = "";
        if (arguments.length < 2 ? o = "[Msger] error 1" : "object" != (void 0 === t ? "undefined" : r(t)) ? o = "[Msger] error 2" : "string" != typeof e && (o = "[Msger] error 3"),
        o)
            throw new Error(o);
        this.target = t,
        this.name = e,
        this.domain = n || "*"
    }
    function c(t, e) {
        this.targets = {},
        this.name = t,
        this.listenFunc = [],
        "string" != typeof (o = e || o) && (o = o.toString()),
        this.initListen()
    }
    a.prototype.send = i ? function(t) {
        this.target.postMessage(t, this.domain)
    }
    : function(t) {
        var e = window.navigator[o + this.name];
        if ("function" != typeof e)
            throw new Error("target callback function is not defined");
        e(t, window)
    }
    ,
    c.prototype.addTarget = function(t, e, n) {
        var r = new a(t,e,n);
        this.targets[e] = r
    }
    ,
    c.prototype.initListen = function() {
        var t = this
          , e = function(e) {
            "object" == (void 0 === e ? "undefined" : r(e)) && e.data && (e = e.data);
            for (var n = 0; n < t.listenFunc.length; n++)
                t.listenFunc[n](e)
        };
        i ? "addEventListener"in document ? window.addEventListener("message", e, !1) : "attachEvent"in document && window.attachEvent("onmessage", e) : window.navigator[o + this.name] = e
    }
    ,
    c.prototype.listen = function(t) {
        this.listenFunc.push(t)
    }
    ,
    c.prototype.clear = function() {
        this.listenFunc = []
    }
    ,
    c.prototype.send = function(t) {
        var e, n = this.targets;
        for (e in n)
            n.hasOwnProperty(e) && n[e].send(t)
    }
    ,
    window.TCapMsg = c,
    t.exports = c
}
, , , , , , , function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    if (!0 === window.__TencentCaptchaExists__)
        throw new Error("\u8bf7\u52ff\u591a\u6b21\u5f15\u7528\u817e\u8baf\u9a8c\u8bc1\u7801\u7684\u63a5\u5165js");
    window.__TencentCaptchaExists__ = !0,
    __webpack_require__(17),
    __webpack_require__(8);
    var Messenger = __webpack_require__(9)
      , domReady = __webpack_require__(19)
      , btoa = window.btoa || __webpack_require__(20)
      , extend = Object.assign || __webpack_require__(2)
      , loadScript = __webpack_require__(21)
      , eventListener = __webpack_require__(5)
      , Executor = __webpack_require__(22)
      , isIEVar = __webpack_require__(23)
      , isElement = __webpack_require__(24)
      , invisibleIframe = __webpack_require__(25)
      , getScriptDomain = __webpack_require__(26)
      , scriptDomain = getScriptDomain() || ""
      , isWechatDevtools = navigator.userAgent && /wechatdevtools/.test(navigator.userAgent)
      , isWindows = /windows/i.test(navigator.userAgent)
      , isMobile = !isWindows && ("ontouchstart"in window || "ontouchstart"in document.createElement("div") || isWechatDevtools)
      , capDomain = "https://ssl.captcha.qq.com";
    capDomain || (capDomain = scriptDomain);
    var cdnDomain = "https://captcha.gtimg.com/1"
      , grayscaleFrameJs = "/tcaptcha-frame.32ce39f5.js"
      , needGrayscaleJs = void 0
      , capError = __webpack_require__(3)
      , preVerifyData = {}
      , capObj = void 0
      , initQueue = []
      , defaultOpt = {
        type: "popup",
        pos: isIEVar(6) ? "absolute" : "fixed",
        lang: 2052,
        showHeader: isMobile,
        needFeedBack: true,
        themeColor: "",
        tcaptchaFlag: !0,
        gettype: "cap_union_prehandle",
        domain: capDomain,
        htdoc_path: capDomain
    }
      , noop = function() {}
      , callbackWrap = function(t, e) {
        return function(n) {
            "object" === (void 0 === n ? "undefined" : _typeof(n)) && (n = extend({
                bizState: t.options.bizState,
                appid: t.options.appid
            }, n)),
            e && e(n)
        }
    }
      , executor = new Executor(function() {
        if (initQueue.length > 0) {
            for (var t = 0; t < initQueue.length; t++)
                initQueue[t].show();
            initQueue.length = 0
        }
    }
    ,0)
      , Captcha = function Captcha($btn, appid, _tcallback_, opts) {
        var bizState = void 0;
        if (isElement($btn))
            if (appid && "object" === (void 0 === appid ? "undefined" : _typeof(appid)))
                opts = appid,
                appid = null,
                _tcallback_ = null;
            else {
                if (appid = appid || $btn.getAttribute("data-appid"),
                !_tcallback_) {
                    var callbackName = $btn.getAttribute("data-cbfn");
                    try {
                        _tcallback_ = eval("window." + callbackName)
                    } catch (e) {
                        throw new Error("Lost `callback`")
                    }
                }
                bizState = $btn.getAttribute("data-biz-state")
            }
        else {
            if ("string" != typeof $btn || "function" != typeof appid)
                throw new Error("Arguments error.");
            opts = _tcallback_,
            _tcallback_ = appid,
            appid = $btn,
            $btn = null
        }
        opts = opts || {},
        opts.callback = _tcallback_ || opts.callback,
        opts.start = opts.start || noop,
        opts.end = opts.end || noop;
        var readyCallback = "function" == typeof opts.ready ? opts.ready : noop;
        if (opts.ready = function(t) {
            readyCallback.call(this, t)
        }
        ,
        opts.appid = appid || opts.appid,
        opts.bizState = bizState || opts.bizState,
        opts.fwidth = parseFloat(opts.fwidth) || 0,
        opts.sdkOpts = opts.sdkOpts || null,
        opts.ele = $btn,
        this.options = opts,
        "function" != typeof opts.callback)
            throw new Error("Lost `callback`");
        if (this.initOpts = extend({}, defaultOpt, opts),
        this.langFun(),
        $btn) {
            var that = this;
            eventListener.add($btn, "click", function() {
                that.show()
            })
        }
    };
    Captcha.prototype = {
        show: function() {
            if (executor.isDone)
                this.__show__();
            else {
                for (var t = 0; t < initQueue.length; t++)
                    if (initQueue[t] === this)
                        return;
                initQueue.push(this)
            }
        },
        __show__: function() {
            var t = this.initOpts;
            if ("undefined" == typeof window.AqSCode)
                return capError.send("ERROR_TYPE_FRAMEJS_CODE_ERROR", t.appid),
                alert("\u9875\u9762\u52a0\u8f7d\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5");
            this.destroy();
            var e = [];
            for (var n in e.push("aid=" + t.appid),
            e.push("protocol=https"),
            e.push("accver=1"),
            e.push("showtype=" + t.type),
            e.push("ua=" + encodeURIComponent(btoa((navigator.userAgent || "").replace(/[\u00ff-\uffff]+/g, "")))),
            e.push("noheader=" + ("" + t.showHeader == "false" ? "1" : "0")),
            e.push("fb=" + ("" + t.needFeedBack == "false" ? "0" : "1")),
            e.push("enableDarkMode=" + (t.enableDarkMode ? "1" : "0")),
            t.sid && e.push("sid=" + t.sid),
            preVerifyData)
                preVerifyData[n] && e.push(n + "=" + encodeURIComponent(preVerifyData[n]));
            t.uid = "" + (t.uin || ""),
            needGrayscaleJs && (e.push("grayscale=1"),
            t.grayscale = 1),
            isMobile ? (e.push("clientype=1"),
            t.clientype = 1,
            t.forceLang && e.push("lang=" + t.forceLang),
            t.params = "?" + e.join("&")) : (e.push("clientype=2"),
            t.clientype = 2,
            needGrayscaleJs && t.forceLang && e.push("lang=" + t.forceLang),
            t.params = "?" + e.join("&"),
            t.s_type_suffix = "?" + e.join("&"),
            t.src = capDomain + "/template/new_placeholder.html" + t.s_type_suffix,
            t.s_type = capDomain + "/cap_union_prehandle" + t.s_type_suffix,
            t.slide_src = capDomain + "/template/new_slide_placeholder.html" + t.s_type_suffix,
            t.fb = "" + t.needFeedBack == "false" ? "0" : "1"),
            (capObj = new AqSCode(t)).listen(callbackWrap(this, t.callback), callbackWrap(this, t.ready)),
            capObj.start(callbackWrap(t.start)),
            capObj.end(callbackWrap(t.end)),
            needGrayscaleJs ? ((t.top || t.left) && capObj.initPos({
                top: t.top || undefined,
                left: t.left || undefined
            }),
            capObj.create()) : isMobile && ((t.top || t.left) && capObj.initPos({
                top: t.top || undefined,
                left: t.left || undefined
            }),
            capObj.create())
        },
        langFun: function() {
            if (this.initOpts.forceLang) {
                var t = {
                    "zh-cn": "2052",
                    "zh-hk": "1028",
                    en: "1033"
                }
                  , e = this.initOpts.forceLang;
                t[e] ? (this.initOpts.lang = t[e],
                this.initOpts.forceLang = t[e],
                this.initOpts.forcestyle = 1) : this.initOpts.forceLang = ""
            }
        },
        destroy: function() {
            capObj && capObj.destroy && capObj.destroy()
        },
        refresh: function() {
            capObj && capObj.refresh && capObj.refresh()
        },
        getTicket: function() {
            if (capObj && capObj.getTicket) {
                var t = null;
                return callbackWrap(this, function(e) {
                    t = e
                })(capObj.getTicket()),
                t
            }
            return null
        }
    };
    var autoBindBtn = function() {
        var t = document.getElementById("TencentCaptcha");
        t && new Captcha(t)
    }
      , domReadyCb = function() {
        try {
            autoBindBtn()
        } catch (t) {}
        new Messenger("TCaptchaVerifyDetect").listen(function(t) {
            if (t && "object" === (void 0 === t ? "undefined" : _typeof(t)))
                switch (t.type) {
                case "preVerify":
                    extend(preVerifyData, t.data)
                }
        });
        try {
            invisibleIframe(capDomain + "/template/captcha-pre-verify.html")
        } catch (t) {}
    };
    executor.exec(function(t) {
        var e = !1;
        domReady(function() {
            e || (e = !0,
            domReadyCb(),
            t())
        })
    }),
    executor.exec(function(t) {
        needGrayscaleJs = !0,
        loadScript(grayscaleFrameJs, cdnDomain, capDomain, function() {
            return !!window.AqSCode
        }, function() {
            t()
        }, function() {
            capError.send("ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL"),
            t()
        })
    }),
    window.TencentCaptcha = Captcha
}
, function(t, e, n) {
    var r = n(18);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    n(7)(r, {});
    r.locals && (t.exports = r.locals)
}
, function(t, e, n) {
    (t.exports = n(6)(!1)).push([t.i, "@keyframes animate_dots{0%{opacity:1}to{opacity:0}}@-webkit-keyframes animate_dots{0%{opacity:1}to{opacity:0}}.dot0,.dot1{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite}.dot1{animation-delay:.2s;-webkit-animation-delay:.2s}.dot2{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite;animation-delay:.4s;-webkit-animation-delay:.4s}.dots_item{display:inline-block;margin-right:5px;width:10px;height:10px;border-radius:50%;background:#4886ff}.verify-icon{position:absolute;width:100%;margin-top:70px;text-align:center}.t-mask{width:100%;height:100%;position:fixed;_position:absolute;left:0;top:0;background:#000;opacity:.5;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);z-index:2000000000}", ""])
}
, function(t, e, n) {
    t.exports = function(t) {
        var e, n = [], r = document, o = r.documentElement, i = o.doScroll, a = (i ? /^loaded|^c/ : /^loaded|c/).test(r.readyState);
        function c(t) {
            for (a = 1; t = n.shift(); )
                t()
        }
        return r.addEventListener && r.addEventListener("DOMContentLoaded", e = function() {
            r.removeEventListener("DOMContentLoaded", e, !1),
            c()
        }
        , !1),
        i && r.attachEvent("onreadystatechange", e = function() {
            /^c/.test(r.readyState) && (r.detachEvent("onreadystatechange", e),
            c())
        }
        ),
        t = i ? function(e) {
            self != top ? a ? e() : n.push(e) : function() {
                try {
                    o.doScroll("left")
                } catch (n) {
                    return setTimeout(function() {
                        t(e)
                    }, 50)
                }
                e()
            }()
        }
        : function(t) {
            a ? t() : n.push(t)
        }
    }()
}
, function(t, e, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , o = function(t) {
        var e = [0, 2, 1][t.length % 3]
          , n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
        return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), e >= 2 ? "=" : r.charAt(n >>> 6 & 63), e >= 1 ? "=" : r.charAt(63 & n)].join("")
    };
    t.exports = function(t) {
        return t.replace(/[\s\S]{1,3}/g, o)
    }
}
, function(t, e, n) {
    "use strict";
    var r = 2;
    t.exports = function o(t, e, n, i, a, c, s) {
        s = s || 1;
        var u = !1
          , p = document.createElement("script");
        function f(t) {
            u || (t && "load" === t.type || /^(loaded|complete)$/.test(this.readyState)) && (i() ? (u = !0,
            a && a()) : l())
        }
        p.type = "text/javascript",
        p.async = !0,
        p.src = (s > 1 ? n : e) + t,
        "onload"in p ? p.onload = f : p.onreadystatechange = f;
        var l = function() {
            u || (u = !0,
            s >= r ? c && c() : o(t, e, n, i, a, c, s + 1))
        };
        p.onerror = l,
        document.getElementsByTagName("head").item(0).appendChild(p)
    }
}
, function(t, e, n) {
    "use strict";
    var r = function(t, e) {
        this.i = 0,
        this.doneCallback = t,
        this.isDone = !1,
        this.timeout = e || 0;
        var n = this;
        this.immediateExec = setTimeout(function() {
            n.doneCheck()
        }, 0)
    };
    r.prototype = {
        doneCheck: function(t, e) {
            try {
                t && t(e)
            } catch (n) {}
            if (this.i--,
            this.i <= 0)
                try {
                    this.isDone = !0,
                    this.doneCallback()
                } catch (n) {}
        },
        exec: function(t, e, n) {
            clearTimeout(this.immediateExec);
            var r = !1
              , o = ""
              , i = this;
            this.i++,
            this.i > 0 && (this.isDone = !1);
            try {
                (o = t(function(t) {
                    r || (r = !0,
                    setTimeout(function() {
                        i.doneCheck(e, t)
                    }, 0))
                })) && (r = !0,
                setTimeout(function() {
                    i.doneCheck(e, o)
                }, 0))
            } catch (a) {}
            (n = n || this.timeout || 0) > 0 && setTimeout(function() {
                r || (r = !0,
                i.doneCheck(e, ""))
            }, n)
        }
    },
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = document.createElement("b");
        return e.innerHTML = "\x3c!--[if IE " + t + "]><i></i><![endif]--\x3e",
        e.getElementsByTagName("i") && 1 === e.getElementsByTagName("i").length
    }
}
, function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    t.exports = function(t) {
        try {
            return t instanceof HTMLElement
        } catch (e) {
            return "object" === (void 0 === t ? "undefined" : r(t)) && 1 === t.nodeType && "object" === r(t.style) && "object" === r(t.ownerDocument)
        }
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = document.createElement("iframe");
        return e.src = t,
        e.style.cssText = "width: 0px; height: 0px; display: none;",
        (document.body || document.getElementsByTagName("body").item("0")).appendChild(e),
        e
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0).href
      , o = function(t) {
        var e = t.split("?");
        if (2 !== e.length)
            return {};
        for (var n = e[1] && e[1].split("&"), r = {}, o = 0; o < n.length; o++) {
            var i = n[o].split("=");
            i[1] && (r[i[0]] = decodeURIComponent(i[1]))
        }
        return r
    }
      , i = function() {
        for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.src.match(/captcha\.js/i))
                return n
        }
    };
    t.exports = function() {
        try {
            var t = document.getElementById("CaptchaScript") || i() || "";
            if (!t)
                return "";
            var e = t.src
              , n = o(e).domain;
            if (n)
                return n;
            var a = /(https?\:\/\/[0-9a-zA-Z-:\.]+)\//i
              , c = e.match(a) || r().match(a);
            return c ? c[1] : ""
        } catch (s) {
            return ""
        }
    }
}
]);
