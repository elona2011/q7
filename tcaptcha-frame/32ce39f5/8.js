function (module, exports, __webpack_require__) {
  "use strict";

  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };

  "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta,
        rep;

    function f(e) {
      return e < 10 ? "0" + e : e;
    }

    function this_value() {
      return this.valueOf();
    }

    function quote(e) {
      return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
        var t = meta[e];
        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + e + '"';
    }

    function str(e, t) {
      var i,
          r,
          n,
          o,
          a,
          s = gap,
          c = t[e];

      switch (c && "object" === (void 0 === c ? "undefined" : _typeof(c)) && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), void 0 === c ? "undefined" : _typeof(c)) {
        case "string":
          return quote(c);

        case "number":
          return isFinite(c) ? String(c) : "null";

        case "boolean":
        case "null":
          return String(c);

        case "object":
          if (!c) return "null";

          if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
            for (o = c.length, i = 0; i < o; i += 1) a[i] = str(i, c) || "null";

            return n = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, n;
          }

          if (rep && "object" === (void 0 === rep ? "undefined" : _typeof(rep))) for (o = rep.length, i = 0; i < o; i += 1) "string" == typeof rep[i] && (n = str(r = rep[i], c)) && a.push(quote(r) + (gap ? ": " : ":") + n);else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (n = str(r, c)) && a.push(quote(r) + (gap ? ": " : ":") + n);
          return n = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, n;
      }
    }

    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    }, JSON.stringify = function (e, t, i) {
      var r;
      if (gap = "", indent = "", "number" == typeof i) for (r = 0; r < i; r += 1) indent += " ";else "string" == typeof i && (indent = i);
      if (rep = t, t && "function" != typeof t && ("object" !== (void 0 === t ? "undefined" : _typeof(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");
      return str("", {
        "": e
      });
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
      var j;

      function walk(e, t) {
        var i,
            r,
            n = e[t];
        if (n && "object" === (void 0 === n ? "undefined" : _typeof(n))) for (i in n) Object.prototype.hasOwnProperty.call(n, i) && ((r = walk(n, i)) !== undefined ? n[i] = r : delete n[i]);
        return reviver.call(e, t, n);
      }

      if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
        "": j
      }, "") : j;
      throw new SyntaxError("JSON.parse");
    });
  }();
}