function (e, t, n) {
  "use strict";

  e.exports = function () {
    var e = document.body || document.getElementsByTagName("body")[0],
        t = document.createElement("div");

    try {
      t.style.fontSize = "1rem", t.innerText = "REM TEST", e.appendChild(t);
      var n = t.clientHeight > 0;
      return e.removeChild(t), n;
    } catch (i) {}

    return !1;
  };
}