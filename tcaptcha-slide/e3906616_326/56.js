function (e, t, n) {
  "use strict";

  e.exports = {
    sdk: function () {
      window.open = function (e) {
        var t = $('<a target="_blank">');
        t.attr("href", e), t.click();
      };
    }
  };
}