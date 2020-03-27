function (e, t, i) {
  "use strict";

  e.exports = {
    add: function (e, t, i) {
      e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i);
    },
    remove: function (e, t, i) {
      e && (e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = null);
    }
  };
}