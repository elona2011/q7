function (e, t) {
  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var i = function (e, t) {
          var i = e[1] || "",
              r = e[3];
          if (!r) return i;

          if (t && "function" == typeof btoa) {
            var n = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                o = r.sources.map(function (e) {
              return "/*# sourceURL=" + r.sourceRoot + e + " */";
            });
            return [i].concat(o).concat([n]).join("\n");
          }

          var a;
          return [i].join("\n");
        }(t, e);

        return t[2] ? "@media " + t[2] + "{" + i + "}" : i;
      }).join("");
    }, t.i = function (e, i) {
      "string" == typeof e && (e = [[null, e, ""]]);

      for (var r = {}, n = 0; n < this.length; n++) {
        var o = this[n][0];
        "number" == typeof o && (r[o] = !0);
      }

      for (n = 0; n < e.length; n++) {
        var a = e[n];
        "number" == typeof a[0] && r[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), t.push(a));
      }
    }, t;
  };
}