function (e, t, n) {
  "use strict";

  var i,
      r,
      o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  r = window, (i = function () {
    return e = r, t = function () {
      var t,
          n,
          i,
          r,
          a,
          s,
          c = [],
          u = c.concat,
          l = c.filter,
          f = c.slice,
          d = e.document,
          p = {},
          h = {},
          m = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
      },
          g = /^\s*<(\w+|!)[^>]*>/,
          v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          w = /^(?:body|html)$/i,
          b = /([A-Z])/g,
          k = ["val", "css", "html", "text", "data", "width", "height", "offset"],
          E = d.createElement("table"),
          x = d.createElement("tr"),
          T = {
        tr: d.createElement("tbody"),
        tbody: E,
        thead: E,
        tfoot: E,
        td: x,
        th: x,
        "*": d.createElement("div")
      },
          S = /^[\w-]*$/,
          C = {},
          z = C.toString,
          R = {},
          _ = d.createElement("div"),
          P = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
          j = Array.isArray || function (e) {
        return e instanceof Array;
      };

      function O(e) {
        return null == e ? String(e) : C[z.call(e)] || "object";
      }

      function A(e) {
        return "function" == O(e);
      }

      function I(e) {
        return null != e && e == e.window;
      }

      function D(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE;
      }

      function M(e) {
        return "object" == O(e);
      }

      function L(e) {
        return M(e) && !I(e) && Object.getPrototypeOf(e) == Object.prototype;
      }

      function F(e) {
        var t = !!e && "length" in e && e.length,
            n = i.type(e);
        return "function" != n && !I(e) && ("array" == n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }

      function N(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
      }

      function V(e) {
        return e in h ? h[e] : h[e] = new RegExp("(^|\\s)" + e + "(\\s|$)");
      }

      function $(e, t) {
        return "number" != typeof t || m[N(e)] ? t : t + "px";
      }

      function B(e) {
        return "children" in e ? f.call(e.children) : i.map(e.childNodes, function (e) {
          if (1 == e.nodeType) return e;
        });
      }

      function q(e, t) {
        var n,
            i = e ? e.length : 0;

        for (n = 0; n < i; n++) this[n] = e[n];

        this.length = i, this.selector = t || "";
      }

      function Y(e, t) {
        return null == t ? i(e) : i(e).filter(t);
      }

      function W(e, t, n, i) {
        return A(t) ? t.call(e, n, i) : t;
      }

      function H(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
      }

      function U(e, n) {
        var i = e.className || "",
            r = i && i.baseVal !== t;
        if (n === t) return r ? i.baseVal : i;
        r ? i.baseVal = n : e.className = n;
      }

      function G(e) {
        try {
          return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? i.parseJSON(e) : e) : e;
        } catch (t) {
          return e;
        }
      }

      return R.matches = function (e, t) {
        if (!t || !e || 1 !== e.nodeType) return !1;
        var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (n) return n.call(e, t);
        var i,
            r = e.parentNode,
            o = !r;
        return o && (r = _).appendChild(e), i = ~R.qsa(r, t).indexOf(e), o && _.removeChild(e), i;
      }, a = function (e) {
        return e.replace(/-+(.)?/g, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }, s = function (e) {
        return l.call(e, function (t, n) {
          return e.indexOf(t) == n;
        });
      }, R.fragment = function (e, n, r) {
        var o, a, s;
        return v.test(e) && (o = i(d.createElement(RegExp.$1))), o || (e.replace && (e = e.replace(y, "<$1></$2>")), n === t && (n = g.test(e) && RegExp.$1), n in T || (n = "*"), (s = T[n]).innerHTML = "" + e, o = i.each(f.call(s.childNodes), function () {
          s.removeChild(this);
        })), L(r) && (a = i(o), i.each(r, function (e, t) {
          k.indexOf(e) > -1 ? a[e](t) : a.attr(e, t);
        })), o;
      }, R.Z = function (e, t) {
        return new q(e, t);
      }, R.isZ = function (e) {
        return e instanceof R.Z;
      }, R.init = function (e, n) {
        var r, o;
        if (!e) return R.Z();
        if ("string" == typeof e) {
          if ("<" == (e = e.trim())[0] && g.test(e)) r = R.fragment(e, RegExp.$1, n), e = null;else {
            if (n !== t) return i(n).find(e);
            r = R.qsa(d, e);
          }
        } else {
          if (A(e)) return i(d).ready(e);
          if (R.isZ(e)) return e;
          if (j(e)) o = e, r = l.call(o, function (e) {
            return null != e;
          });else if (M(e)) r = [e], e = null;else if (g.test(e)) r = R.fragment(e.trim(), RegExp.$1, n), e = null;else {
            if (n !== t) return i(n).find(e);
            r = R.qsa(d, e);
          }
        }
        return R.Z(r, e);
      }, (i = function (e, t) {
        return R.init(e, t);
      }).extend = function (e) {
        var i,
            r = f.call(arguments, 1);
        return "boolean" == typeof e && (i = e, e = r.shift()), r.forEach(function (r) {
          !function o(e, i, r) {
            for (n in i) r && (L(i[n]) || j(i[n])) ? (L(i[n]) && !L(e[n]) && (e[n] = {}), j(i[n]) && !j(e[n]) && (e[n] = []), o(e[n], i[n], r)) : i[n] !== t && (e[n] = i[n]);
          }(e, r, i);
        }), e;
      }, R.qsa = function (e, t) {
        var n,
            i = "#" == t[0],
            r = !i && "." == t[0],
            o = i || r ? t.slice(1) : t,
            a = S.test(o);
        return e.getElementById && a && i ? (n = e.getElementById(o)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : f.call(a && !i && e.getElementsByClassName ? r ? e.getElementsByClassName(o) : e.getElementsByTagName(t) : e.querySelectorAll(t));
      }, i.contains = d.documentElement.contains ? function (e, t) {
        return e !== t && e.contains(t);
      } : function (e, t) {
        for (; t && (t = t.parentNode);) if (t === e) return !0;

        return !1;
      }, i.type = O, i.isFunction = A, i.isWindow = I, i.isArray = j, i.isPlainObject = L, i.isEmptyObject = function (e) {
        var t;

        for (t in e) return !1;

        return !0;
      }, i.isNumeric = function (e) {
        var t = Number(e),
            n = void 0 === e ? "undefined" : o(e);
        return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1;
      }, i.inArray = function (e, t, n) {
        return c.indexOf.call(t, e, n);
      }, i.camelCase = a, i.trim = function (e) {
        return null == e ? "" : String.prototype.trim.call(e);
      }, i.uuid = 0, i.support = {}, i.expr = {}, i.noop = function () {}, i.map = function (e, t) {
        var n,
            r,
            o,
            a,
            s = [];
        if (F(e)) for (r = 0; r < e.length; r++) null != (n = t(e[r], r)) && s.push(n);else for (o in e) null != (n = t(e[o], o)) && s.push(n);
        return (a = s).length > 0 ? i.fn.concat.apply([], a) : a;
      }, i.each = function (e, t) {
        var n, i;

        if (F(e)) {
          for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e;
        } else for (i in e) if (!1 === t.call(e[i], i, e[i])) return e;

        return e;
      }, i.grep = function (e, t) {
        return l.call(e, t);
      }, e.JSON && (i.parseJSON = JSON.parse), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        C["[object " + t + "]"] = t.toLowerCase();
      }), i.fn = {
        constructor: R.Z,
        length: 0,
        forEach: c.forEach,
        reduce: c.reduce,
        push: c.push,
        sort: c.sort,
        splice: c.splice,
        indexOf: c.indexOf,
        concat: function () {
          var e,
              t,
              n = [];

          for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = R.isZ(t) ? t.toArray() : t;

          return u.apply(R.isZ(this) ? this.toArray() : this, n);
        },
        map: function (e) {
          return i(i.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function () {
          return i(f.apply(this, arguments));
        },
        ready: function (t) {
          if ("complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) setTimeout(function () {
            t(i);
          }, 0);else {
            var n = function r() {
              d.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), t(i);
            };

            d.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1);
          }
          return this;
        },
        get: function (e) {
          return e === t ? f.call(this) : this[e >= 0 ? e : e + this.length];
        },
        toArray: function () {
          return this.get();
        },
        size: function () {
          return this.length;
        },
        remove: function () {
          return this.each(function () {
            null != this.parentNode && this.parentNode.removeChild(this);
          });
        },
        each: function (e) {
          return c.every.call(this, function (t, n) {
            return !1 !== e.call(t, n, t);
          }), this;
        },
        filter: function (e) {
          return A(e) ? this.not(this.not(e)) : i(l.call(this, function (t) {
            return R.matches(t, e);
          }));
        },
        add: function (e, t) {
          return i(s(this.concat(i(e, t))));
        },
        is: function (e) {
          return "string" == typeof e ? this.length > 0 && R.matches(this[0], e) : e && this.selector == e.selector;
        },
        not: function (e) {
          var n = [];
          if (A(e) && e.call !== t) this.each(function (t) {
            e.call(this, t) || n.push(this);
          });else {
            var r = "string" == typeof e ? this.filter(e) : F(e) && A(e.item) ? f.call(e) : i(e);
            this.forEach(function (e) {
              r.indexOf(e) < 0 && n.push(e);
            });
          }
          return i(n);
        },
        has: function (e) {
          return this.filter(function () {
            return M(e) ? i.contains(this, e) : i(this).find(e).size();
          });
        },
        eq: function (e) {
          return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
        },
        first: function () {
          var e = this[0];
          return e && !M(e) ? e : i(e);
        },
        last: function () {
          var e = this[this.length - 1];
          return e && !M(e) ? e : i(e);
        },
        find: function (e) {
          var t = this;
          return e ? "object" == (void 0 === e ? "undefined" : o(e)) ? i(e).filter(function () {
            var e = this;
            return c.some.call(t, function (t) {
              return i.contains(t, e);
            });
          }) : 1 == this.length ? i(R.qsa(this[0], e)) : this.map(function () {
            return R.qsa(this, e);
          }) : i();
        },
        closest: function (e, t) {
          var n = [],
              r = "object" == (void 0 === e ? "undefined" : o(e)) && i(e);
          return this.each(function (i, o) {
            for (; o && !(r ? r.indexOf(o) >= 0 : R.matches(o, e));) o = o !== t && !D(o) && o.parentNode;

            o && n.indexOf(o) < 0 && n.push(o);
          }), i(n);
        },
        parents: function (e) {
          for (var t = [], n = this; n.length > 0;) n = i.map(n, function (e) {
            if ((e = e.parentNode) && !D(e) && t.indexOf(e) < 0) return t.push(e), e;
          });

          return Y(t, e);
        },
        parent: function (e) {
          return Y(s(this.pluck("parentNode")), e);
        },
        children: function (e) {
          return Y(this.map(function () {
            return B(this);
          }), e);
        },
        contents: function () {
          return this.map(function () {
            return this.contentDocument || f.call(this.childNodes);
          });
        },
        siblings: function (e) {
          return Y(this.map(function (e, t) {
            return l.call(B(t.parentNode), function (e) {
              return e !== t;
            });
          }), e);
        },
        empty: function () {
          return this.each(function () {
            this.innerHTML = "";
          });
        },
        pluck: function (e) {
          return i.map(this, function (t) {
            return t[e];
          });
        },
        show: function () {
          return this.each(function () {
            var e, t, n;
            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName, p[e] || (t = d.createElement(e), d.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), p[e] = n), p[e]));
          });
        },
        replaceWith: function (e) {
          return this.before(e).remove();
        },
        wrap: function (e) {
          var t = A(e);
          if (this[0] && !t) var n = i(e).get(0),
              r = n.parentNode || this.length > 1;
          return this.each(function (o) {
            i(this).wrapAll(t ? e.call(this, o) : r ? n.cloneNode(!0) : n);
          });
        },
        wrapAll: function (e) {
          if (this[0]) {
            var t;

            for (i(this[0]).before(e = i(e)); (t = e.children()).length;) e = t.first();

            i(e).append(this);
          }

          return this;
        },
        wrapInner: function (e) {
          var t = A(e);
          return this.each(function (n) {
            var r = i(this),
                o = r.contents(),
                a = t ? e.call(this, n) : e;
            o.length ? o.wrapAll(a) : r.append(a);
          });
        },
        unwrap: function () {
          return this.parent().each(function () {
            i(this).replaceWith(i(this).children());
          }), this;
        },
        clone: function () {
          return this.map(function () {
            return this.cloneNode(!0);
          });
        },
        hide: function () {
          return this.css("display", "none");
        },
        toggle: function (e) {
          return this.each(function () {
            var n = i(this);
            (e === t ? "none" == n.css("display") : e) ? n.show() : n.hide();
          });
        },
        prev: function (e) {
          return i(this.pluck("previousElementSibling")).filter(e || "*");
        },
        next: function (e) {
          return i(this.pluck("nextElementSibling")).filter(e || "*");
        },
        html: function (e) {
          return 0 in arguments ? this.each(function (t) {
            var n = this.innerHTML;
            i(this).empty().append(W(this, e, t, n));
          }) : 0 in this ? this[0].innerHTML : null;
        },
        text: function (e) {
          return 0 in arguments ? this.each(function (t) {
            var n = W(this, e, t, this.textContent);
            this.textContent = null == n ? "" : "" + n;
          }) : 0 in this ? this.pluck("textContent").join("") : null;
        },
        attr: function (e, i) {
          var r;
          return "string" != typeof e || 1 in arguments ? this.each(function (t) {
            if (1 === this.nodeType) if (M(e)) for (n in e) H(this, n, e[n]);else H(this, e, W(this, i, t, this.getAttribute(e)));
          }) : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(e)) ? r : t;
        },
        removeAttr: function (e) {
          return this.each(function () {
            1 === this.nodeType && e.split(" ").forEach(function (e) {
              H(this, e);
            }, this);
          });
        },
        prop: function (e, t) {
          return "string" != typeof (e = P[e] || e) || 1 in arguments ? this.each(function (i) {
            if (M(e)) for (n in e) this[P[n] || n] = e[n];else this[e] = W(this, t, i, this[e]);
          }) : this[0] && this[0][e];
        },
        removeProp: function (e) {
          return e = P[e] || e, this.each(function () {
            delete this[e];
          });
        },
        data: function (e, n) {
          var i = "data-" + e.replace(b, "-$1").toLowerCase(),
              r = 1 in arguments ? this.attr(i, n) : this.attr(i);
          return null !== r ? G(r) : t;
        },
        val: function (e) {
          return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
            this.value = W(this, e, t, this.value);
          })) : this[0] && (this[0].multiple ? i(this[0]).find("option").filter(function () {
            return this.selected;
          }).pluck("value") : this[0].value);
        },
        offset: function (t) {
          if (t) return this.each(function (e) {
            var n = i(this),
                r = W(this, t, e, n.offset()),
                o = n.offsetParent().offset(),
                a = {
              top: r.top - o.top,
              left: r.left - o.left
            };
            "static" == n.css("position") && (a.position = "relative"), n.css(a);
          });
          if (!this.length) return null;
          if (d.documentElement !== this[0] && !i.contains(d.documentElement, this[0])) return {
            top: 0,
            left: 0
          };
          var n = this[0].getBoundingClientRect();
          return {
            left: n.left + e.pageXOffset,
            top: n.top + e.pageYOffset,
            width: Math.round(n.width),
            height: Math.round(n.height)
          };
        },
        css: function (e, t) {
          if (arguments.length < 2) {
            var r = this[0];

            if ("string" == typeof e) {
              if (!r) return;
              return r.style[a(e)] || getComputedStyle(r, "").getPropertyValue(e);
            }

            if (j(e)) {
              if (!r) return;
              var o = {},
                  s = getComputedStyle(r, "");
              return i.each(e, function (e, t) {
                o[t] = r.style[a(t)] || s.getPropertyValue(t);
              }), o;
            }
          }

          var c = "";
          if ("string" == O(e)) t || 0 === t ? c = N(e) + ":" + $(e, t) : this.each(function () {
            this.style.removeProperty(N(e));
          });else for (n in e) e[n] || 0 === e[n] ? c += N(n) + ":" + $(n, e[n]) + ";" : this.each(function () {
            this.style.removeProperty(N(n));
          });
          return this.each(function () {
            this.style.cssText += ";" + c;
          });
        },
        index: function (e) {
          return e ? this.indexOf(i(e)[0]) : this.parent().children().indexOf(this[0]);
        },
        hasClass: function (e) {
          return !!e && c.some.call(this, function (e) {
            return this.test(U(e));
          }, V(e));
        },
        addClass: function (e) {
          return e ? this.each(function (t) {
            if ("className" in this) {
              r = [];
              var n = U(this),
                  o = W(this, e, t, n);
              o.split(/\s+/g).forEach(function (e) {
                i(this).hasClass(e) || r.push(e);
              }, this), r.length && U(this, n + (n ? " " : "") + r.join(" "));
            }
          }) : this;
        },
        removeClass: function (e) {
          return this.each(function (n) {
            if ("className" in this) {
              if (e === t) return U(this, "");
              r = U(this), W(this, e, n, r).split(/\s+/g).forEach(function (e) {
                r = r.replace(V(e), " ");
              }), U(this, r.trim());
            }
          });
        },
        toggleClass: function (e, n) {
          return e ? this.each(function (r) {
            var o = i(this),
                a = W(this, e, r, U(this));
            a.split(/\s+/g).forEach(function (e) {
              (n === t ? !o.hasClass(e) : n) ? o.addClass(e) : o.removeClass(e);
            });
          }) : this;
        },
        scrollTop: function (e) {
          if (this.length) {
            var n = ("scrollTop" in this[0]);
            return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
              this.scrollTop = e;
            } : function () {
              this.scrollTo(this.scrollX, e);
            });
          }
        },
        scrollLeft: function (e) {
          if (this.length) {
            var n = ("scrollLeft" in this[0]);
            return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
              this.scrollLeft = e;
            } : function () {
              this.scrollTo(e, this.scrollY);
            });
          }
        },
        position: function () {
          if (this.length) {
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = w.test(t[0].nodeName) ? {
              top: 0,
              left: 0
            } : t.offset();
            return n.top -= parseFloat(i(e).css("margin-top")) || 0, n.left -= parseFloat(i(e).css("margin-left")) || 0, r.top += parseFloat(i(t[0]).css("border-top-width")) || 0, r.left += parseFloat(i(t[0]).css("border-left-width")) || 0, {
              top: n.top - r.top,
              left: n.left - r.left
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent || d.body; e && !w.test(e.nodeName) && "static" == i(e).css("position");) e = e.offsetParent;

            return e;
          });
        }
      }, i.fn.detach = i.fn.remove, ["width", "height"].forEach(function (e) {
        var n = e.replace(/./, function (e) {
          return e[0].toUpperCase();
        });

        i.fn[e] = function (r) {
          var o,
              a = this[0];
          return r === t ? I(a) ? a["inner" + n] : D(a) ? a.documentElement["scroll" + n] : (o = this.offset()) && o[e] : this.each(function (t) {
            (a = i(this)).css(e, W(this, r, t, a[e]()));
          });
        };
      }), ["after", "prepend", "before", "append"].forEach(function (n, r) {
        var o = r % 2;
        i.fn[n] = function () {
          var n,
              a,
              s = i.map(arguments, function (e) {
            var r = [];
            return "array" == (n = O(e)) ? (e.forEach(function (e) {
              return e.nodeType !== t ? r.push(e) : i.zepto.isZ(e) ? r = r.concat(e.get()) : void (r = r.concat(R.fragment(e)));
            }), r) : "object" == n || null == e ? e : R.fragment(e);
          }),
              c = this.length > 1;
          return s.length < 1 ? this : this.each(function (t, n) {
            a = o ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
            var u = i.contains(d.documentElement, a);
            s.forEach(function (t) {
              if (c) t = t.cloneNode(!0);else if (!a) return i(t).remove();
              a.insertBefore(t, n), u && function r(e, t) {
                t(e);

                for (var n = 0, i = e.childNodes.length; n < i; n++) r(e.childNodes[n], t);
              }(t, function (t) {
                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                  var n = t.ownerDocument ? t.ownerDocument.defaultView : e;
                  n.eval.call(n, t.innerHTML);
                }
              });
            });
          });
        }, i.fn[o ? n + "To" : "insert" + (r ? "Before" : "After")] = function (e) {
          return i(e)[n](this), this;
        };
      }), R.Z.prototype = q.prototype = i.fn, R.uniq = s, R.deserializeValue = G, i.zepto = R, i;
    }(), e.Zepto = t, e.$ === undefined && (e.$ = t), function (t) {
      var n,
          i = 1,
          r = Array.prototype.slice,
          o = t.isFunction,
          a = function (e) {
        return "string" == typeof e;
      },
          s = {},
          c = {},
          u = ("onfocusin" in e),
          l = {
        focus: "focusin",
        blur: "focusout"
      },
          f = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };

      function d(e) {
        return e._zid || (e._zid = i++);
      }

      function p(e, t, n, i) {
        if ((t = h(t)).ns) var r = (o = t.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
        var o;
        return (s[d(e)] || []).filter(function (e) {
          return e && (!t.e || e.e == t.e) && (!t.ns || r.test(e.ns)) && (!n || d(e.fn) === d(n)) && (!i || e.sel == i);
        });
      }

      function h(e) {
        var t = ("" + e).split(".");
        return {
          e: t[0],
          ns: t.slice(1).sort().join(" ")
        };
      }

      function m(e, t) {
        return e.del && !u && e.e in l || !!t;
      }

      function g(e) {
        return f[e] || u && l[e] || e;
      }

      function v(e, i, r, o, a, c, u) {
        var l = d(e),
            p = s[l] || (s[l] = []);
        i.split(/\s/).forEach(function (i) {
          if ("ready" == i) return t(document).ready(r);
          var s = h(i);
          s.fn = r, s.sel = a, s.e in f && (r = function (e) {
            var n = e.relatedTarget;
            if (!n || n !== this && !t.contains(this, n)) return s.fn.apply(this, arguments);
          }), s.del = c;
          var l = c || r;
          s.proxy = function (t) {
            if (!(t = x(t)).isImmediatePropagationStopped()) {
              t.data = o;
              var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
              return !1 === i && (t.preventDefault(), t.stopPropagation()), i;
            }
          }, s.i = p.length, p.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, u));
        });
      }

      function y(e, t, n, i, r) {
        var o = d(e);
        (t || "").split(/\s/).forEach(function (t) {
          p(e, t, n, i).forEach(function (t) {
            delete s[o][t.i], "removeEventListener" in e && e.removeEventListener(g(t.e), t.proxy, m(t, r));
          });
        });
      }

      c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents", t.event = {
        add: v,
        remove: y
      }, t.proxy = function (e, n) {
        var i = 2 in arguments && r.call(arguments, 2);

        if (o(e)) {
          var s = function () {
            return e.apply(n, i ? i.concat(r.call(arguments)) : arguments);
          };

          return s._zid = d(e), s;
        }

        if (a(n)) return i ? (i.unshift(e[n], e), t.proxy.apply(null, i)) : t.proxy(e[n], e);
        throw new TypeError("expected function");
      }, t.fn.bind = function (e, t, n) {
        return this.on(e, t, n);
      }, t.fn.unbind = function (e, t) {
        return this.off(e, t);
      }, t.fn.one = function (e, t, n, i) {
        return this.on(e, t, n, i, 1);
      };

      var w = function () {
        return !0;
      },
          b = function () {
        return !1;
      },
          k = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
          E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
      };

      function x(e, i) {
        if (i || !e.isDefaultPrevented) {
          i || (i = e), t.each(E, function (t, n) {
            var r = i[t];
            e[t] = function () {
              return this[n] = w, r && r.apply(i, arguments);
            }, e[n] = b;
          });

          try {
            e.timeStamp || (e.timeStamp = Date.now());
          } catch (r) {}

          (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w);
        }

        return e;
      }

      function T(e) {
        var t,
            i = {
          originalEvent: e
        };

        for (t in e) k.test(t) || e[t] === n || (i[t] = e[t]);

        return x(i, e);
      }

      t.fn.delegate = function (e, t, n) {
        return this.on(t, e, n);
      }, t.fn.undelegate = function (e, t, n) {
        return this.off(t, e, n);
      }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this;
      }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this;
      }, t.fn.on = function (e, i, s, c, u) {
        var l,
            f,
            d = this;
        return e && !a(e) ? (t.each(e, function (e, t) {
          d.on(e, i, s, t, u);
        }), d) : (a(i) || o(c) || !1 === c || (c = s, s = i, i = n), c !== n && !1 !== s || (c = s, s = n), !1 === c && (c = b), d.each(function (n, o) {
          u && (l = function (e) {
            return y(o, e.type, c), c.apply(this, arguments);
          }), i && (f = function (e) {
            var n,
                a = t(e.target).closest(i, o).get(0);
            if (a && a !== o) return n = t.extend(T(e), {
              currentTarget: a,
              liveFired: o
            }), (l || c).apply(a, [n].concat(r.call(arguments, 1)));
          }), v(o, e, c, s, i, f || l);
        }));
      }, t.fn.off = function (e, i, r) {
        var s = this;
        return e && !a(e) ? (t.each(e, function (e, t) {
          s.off(e, i, t);
        }), s) : (a(i) || o(r) || !1 === r || (r = i, i = n), !1 === r && (r = b), s.each(function () {
          y(this, e, r, i);
        }));
      }, t.fn.trigger = function (e, n) {
        return (e = a(e) || t.isPlainObject(e) ? t.Event(e) : x(e))._args = n, this.each(function () {
          e.type in l && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
        });
      }, t.fn.triggerHandler = function (e, n) {
        var i, r;
        return this.each(function (o, s) {
          (i = T(a(e) ? t.Event(e) : e))._args = n, i.target = s, t.each(p(s, e.type || e), function (e, t) {
            if (r = t.proxy(i), i.isImmediatePropagationStopped()) return !1;
          });
        }), r;
      }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
          return 0 in arguments ? this.bind(e, t) : this.trigger(e);
        };
      }), t.Event = function (e, t) {
        a(e) || (e = (t = e).type);
        var n = document.createEvent(c[e] || "Events"),
            i = !0;
        if (t) for (var r in t) "bubbles" == r ? i = !!t[r] : n[r] = t[r];
        return n.initEvent(e, i, !0), x(n);
      };
    }(t), function (t) {
      var n,
          i,
          r = +new Date(),
          o = e.document,
          a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          s = /^(?:text|application)\/javascript/i,
          c = /^(?:text|application)\/xml/i,
          u = "application/json",
          l = "text/html",
          f = /^\s*$/,
          d = o.createElement("a");

      function p(e, n, i, r) {
        if (e.global) return function (e, n, i) {
          var r = t.Event(n);
          return t(e).trigger(r, i), !r.isDefaultPrevented();
        }(n || o, i, r);
      }

      function h(e, t) {
        var n = t.context;
        if (!1 === t.beforeSend.call(n, e, t) || !1 === p(t, n, "ajaxBeforeSend", [e, t])) return !1;
        p(t, n, "ajaxSend", [e, t]);
      }

      function m(e, t, n, i) {
        var r = n.context;
        n.success.call(r, e, "success", t), i && i.resolveWith(r, [e, "success", t]), p(n, r, "ajaxSuccess", [t, n, e]), v("success", t, n);
      }

      function g(e, t, n, i, r) {
        var o = i.context;
        i.error.call(o, n, t, e), r && r.rejectWith(o, [n, t, e]), p(i, o, "ajaxError", [n, i, e || t]), v(t, n, i);
      }

      function v(e, n, i) {
        var r = i.context;
        i.complete.call(r, n, e), p(i, r, "ajaxComplete", [n, i]), function (e) {
          e.global && ! --t.active && p(e, null, "ajaxStop");
        }(i);
      }

      function y() {}

      function w(e, t) {
        return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?");
      }

      function b(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = undefined), t.isFunction(i) || (r = i, i = undefined), {
          url: e,
          data: n,
          success: i,
          dataType: r
        };
      }

      d.href = e.location.href, t.active = 0, t.ajaxJSONP = function (n, i) {
        if (!("type" in n)) return t.ajax(n);

        var a,
            s,
            c = n.jsonpCallback,
            u = (t.isFunction(c) ? c() : c) || "Zepto" + r++,
            l = o.createElement("script"),
            f = e[u],
            d = function (e) {
          t(l).triggerHandler("error", e || "abort");
        },
            p = {
          abort: d
        };

        return i && i.promise(p), t(l).on("load error", function (r, o) {
          clearTimeout(s), t(l).off().remove(), "error" != r.type && a ? m(a[0], p, n, i) : g(null, o || "error", p, n, i), e[u] = f, a && t.isFunction(f) && f(a[0]), f = a = undefined;
        }), !1 === h(p, n) ? (d("abort"), p) : (e[u] = function () {
          a = arguments;
        }, l.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u), o.head.appendChild(l), n.timeout > 0 && (s = setTimeout(function () {
          d("timeout");
        }, n.timeout)), p);
      }, t.ajaxSettings = {
        type: "GET",
        beforeSend: y,
        success: y,
        error: y,
        complete: y,
        context: null,
        global: !0,
        xhr: function () {
          return new e.XMLHttpRequest();
        },
        accepts: {
          script: "text/javascript, application/javascript, application/x-javascript",
          json: u,
          xml: "application/xml, text/xml",
          html: l,
          text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0,
        dataFilter: y
      }, t.ajax = function (r) {
        var a,
            v,
            b = t.extend({}, r || {}),
            k = t.Deferred && t.Deferred();

        for (n in t.ajaxSettings) b[n] === undefined && (b[n] = t.ajaxSettings[n]);

        !function (e) {
          e.global && 0 == t.active++ && p(e, null, "ajaxStart");
        }(b), b.crossDomain || ((a = o.createElement("a")).href = b.url, a.href = a.href, b.crossDomain = d.protocol + "//" + d.host != a.protocol + "//" + a.host), b.url || (b.url = e.location.toString()), (v = b.url.indexOf("#")) > -1 && (b.url = b.url.slice(0, v)), function (e) {
          e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = w(e.url, e.data), e.data = undefined);
        }(b);
        var E = b.dataType,
            x = /\?.+=\?/.test(b.url);
        if (x && (E = "jsonp"), !1 !== b.cache && (r && !0 === r.cache || "script" != E && "jsonp" != E) || (b.url = w(b.url, "_=" + Date.now())), "jsonp" == E) return x || (b.url = w(b.url, b.jsonp ? b.jsonp + "=?" : !1 === b.jsonp ? "" : "callback=?")), t.ajaxJSONP(b, k);

        var T,
            S = b.accepts[E],
            C = {},
            z = function (e, t) {
          C[e.toLowerCase()] = [e, t];
        },
            R = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : e.location.protocol,
            _ = b.xhr(),
            P = _.setRequestHeader;

        if (k && k.promise(_), b.crossDomain || z("X-Requested-With", "XMLHttpRequest"), z("Accept", S || "*/*"), (S = b.mimeType || S) && (S.indexOf(",") > -1 && (S = S.split(",", 2)[0]), _.overrideMimeType && _.overrideMimeType(S)), (b.contentType || !1 !== b.contentType && b.data && "GET" != b.type.toUpperCase()) && z("Content-Type", b.contentType || "application/x-www-form-urlencoded"), b.headers) for (i in b.headers) z(i, b.headers[i]);
        if (_.setRequestHeader = z, _.onreadystatechange = function () {
          if (4 == _.readyState) {
            _.onreadystatechange = y, clearTimeout(T);
            var e,
                n = !1;

            if (_.status >= 200 && _.status < 300 || 304 == _.status || 0 == _.status && "file:" == R) {
              if (E = E || ((i = b.mimeType || _.getResponseHeader("content-type")) && (i = i.split(";", 2)[0]), i && (i == l ? "html" : i == u ? "json" : s.test(i) ? "script" : c.test(i) && "xml") || "text"), "arraybuffer" == _.responseType || "blob" == _.responseType) e = _.response;else {
                e = _.responseText;

                try {
                  e = function (e, t, n) {
                    if (n.dataFilter == y) return e;
                    var i = n.context;
                    return n.dataFilter.call(i, e, t);
                  }(e, E, b), "script" == E ? (0, eval)(e) : "xml" == E ? e = _.responseXML : "json" == E && (e = f.test(e) ? null : t.parseJSON(e));
                } catch (r) {
                  n = r;
                }

                if (n) return g(n, "parsererror", _, b, k);
              }
              m(e, _, b, k);
            } else g(_.statusText || null, _.status ? "error" : "abort", _, b, k);
          }

          var i;
        }, !1 === h(_, b)) return _.abort(), g(null, "abort", _, b, k), _;
        var j = !("async" in b) || b.async;
        if (_.open(b.type, b.url, j, b.username, b.password), b.xhrFields) for (i in b.xhrFields) _[i] = b.xhrFields[i];

        for (i in C) P.apply(_, C[i]);

        return b.timeout > 0 && (T = setTimeout(function () {
          _.onreadystatechange = y, _.abort(), g(null, "timeout", _, b, k);
        }, b.timeout)), _.send(b.data ? b.data : null), _;
      }, t.get = function () {
        return t.ajax(b.apply(null, arguments));
      }, t.post = function () {
        var e = b.apply(null, arguments);
        return e.type = "POST", t.ajax(e);
      }, t.getJSON = function () {
        var e = b.apply(null, arguments);
        return e.dataType = "json", t.ajax(e);
      }, t.fn.load = function (e, n, i) {
        if (!this.length) return this;
        var r,
            o = this,
            s = e.split(/\s/),
            c = b(e, n, i),
            u = c.success;
        return s.length > 1 && (c.url = s[0], r = s[1]), c.success = function (e) {
          o.html(r ? t("<div>").html(e.replace(a, "")).find(r) : e), u && u.apply(o, arguments);
        }, t.ajax(c), this;
      };
      var k = encodeURIComponent;

      t.param = function (e, n) {
        var i = [];
        return i.add = function (e, n) {
          t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(k(e) + "=" + k(n));
        }, function r(e, n, i, o) {
          var a,
              s = t.isArray(n),
              c = t.isPlainObject(n);
          t.each(n, function (n, u) {
            a = t.type(u), o && (n = i ? o : o + "[" + (c || "object" == a || "array" == a ? n : "") + "]"), !o && s ? e.add(u.name, u.value) : "array" == a || !i && "object" == a ? r(e, u, i, n) : e.add(n, u);
          });
        }(i, e, n), i.join("&").replace(/%20/g, "+");
      };
    }(t), function (e, t) {
      var n,
          i,
          r,
          a,
          s,
          c,
          u,
          l,
          f,
          d,
          p = "",
          h = document.createElement("div"),
          m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
          g = {};

      function v(e) {
        return n ? n + e : e.toLowerCase();
      }

      void 0 === h.style.transform && e.each({
        Webkit: "webkit",
        Moz: "",
        O: "o"
      }, function (e, t) {
        if (void 0 !== h.style[e + "TransitionProperty"]) return p = "-" + e.toLowerCase() + "-", n = t, !1;
      }), i = p + "transform", g[r = p + "transition-property"] = g[a = p + "transition-duration"] = g[c = p + "transition-delay"] = g[s = p + "transition-timing-function"] = g[u = p + "animation-name"] = g[l = p + "animation-duration"] = g[d = p + "animation-delay"] = g[f = p + "animation-timing-function"] = "", e.fx = {
        off: void 0 === n && void 0 === h.style.transitionProperty,
        speeds: {
          _default: 400,
          fast: 200,
          slow: 600
        },
        cssPrefix: p,
        transitionEnd: v("TransitionEnd"),
        animationEnd: v("AnimationEnd")
      }, e.fn.animate = function (t, n, i, r, o) {
        return e.isFunction(n) && (r = n, i = void 0, n = void 0), e.isFunction(i) && (r = i, i = void 0), e.isPlainObject(n) && (i = n.easing, r = n.complete, o = n.delay, n = n.duration), n && (n = ("number" == typeof n ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3), o && (o = parseFloat(o) / 1e3), this.anim(t, n, i, r, o);
      }, e.fn.anim = function (t, n, p, h, v) {
        var y,
            w,
            b,
            k = {},
            E = "",
            x = this,
            T = e.fx.transitionEnd,
            S = !1;
        if (void 0 === n && (n = e.fx.speeds._default / 1e3), void 0 === v && (v = 0), e.fx.off && (n = 0), "string" == typeof t) k[u] = t, k[l] = n + "s", k[d] = v + "s", k[f] = p || "linear", T = e.fx.animationEnd;else {
          for (y in w = [], t) m.test(y) ? E += y + "(" + t[y] + ") " : (k[y] = t[y], w.push(y.replace(/([A-Z])/g, "-$1").toLowerCase()));

          E && (k[i] = E, w.push(i)), n > 0 && "object" === (void 0 === t ? "undefined" : o(t)) && (k[r] = w.join(", "), k[a] = n + "s", k[c] = v + "s", k[s] = p || "linear");
        }
        return b = function (t) {
          if (void 0 !== t) {
            if (t.target !== t.currentTarget) return;
            e(t.target).unbind(T, b);
          } else e(this).unbind(T, b);

          S = !0, e(this).css(g), h && h.call(this);
        }, n > 0 && (this.bind(T, b), setTimeout(function () {
          S || b.call(x);
        }, 1e3 * (n + v) + 25)), this.size() && this.get(0).clientLeft, this.css(k), n <= 0 && setTimeout(function () {
          x.each(function () {
            b.call(this);
          });
        }, 0), this;
      }, h = null;
    }(t), t;
    var e, t;
  }.call(t, n, t, e)) === undefined || (e.exports = i);
}