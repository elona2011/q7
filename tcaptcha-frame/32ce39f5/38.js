function (e, t, i) {
  "use strict";

  var r = i(59);
  e.exports = {
    langPack: r,
    detectWxLang: function () {
      var e = location.search,
          t = /(wehcat_real_lang|wechat_real_lang)=([a-zA-Z_\-]+)/.exec(e);
      if (t) return t[2];

      for (var i = document.getElementsByTagName("script"), r = 0; r < i.length; r++) {
        var n = i[r].src;

        if (n && /TCapIframeApi/i.test(n)) {
          var o = /lang=([a-zA-Z_\-]+)/.exec(n);
          if (o) return o[1].toLowerCase();
        }
      }

      return "";
    }
  };
}