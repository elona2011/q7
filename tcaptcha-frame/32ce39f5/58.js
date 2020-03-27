function (e, t, i) {
  "use strict";

  var r = i(4),
      n = i(38),
      o = i(39),
      a = i(5),
      s = r.getParentScale(),
      c = n.detectWxLang();
  e.exports = {
    getType: function (e) {
      var t = e.domain + "/" + e.gettype + e.params,
          i = {
        cap_cd: e.capcd,
        uid: e.uid,
        wxLang: c
      };
      return t = r.addUrlParam(t, i);
    },
    getIframeSrc: function (e, t, i) {
      var n = "";
      if (2 == t.state) return function (e) {
        a.add(document, "click", function t(i) {
          var r = i || window.event,
              n = r.srcElement || r.target;
          "t_mask" == n.id && (a.remove(document, "click", t), e.destroy && e.destroy());
        });
      }(i), n = o("https://captcha.gtimg.com/public/1/captcha_error_tips.html");
      n = o(e.domain + "/" + t.src_1 + e.params);
      var p = {
        sess: t.sess,
        fwidth: e.fwidth,
        sid: t.sid,
        forcestyle: e.forcestyle,
        wxLang: c,
        tcScale: s
      };
      return n = r.addUrlParam(n, p);
    }
  };
}