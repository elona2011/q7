function (e, t, n) {
  "use strict";

  var i = n(30),
      r = n(28),
      o = function () {
    var e = document.createElement("fake"),
        t = {
      animation: "animationend",
      mozAnimation: "mozAnimationEnd",
      webkitAnimation: "webkitAnimationEnd"
    };

    for (var n in t) if (e.style[n] !== undefined) return t[n];

    return !1;
  }(),
      a = void 0,
      s = function () {
    i.status.removeClass("show-error-tip");
  };

  e.exports = {
    showErrorNote: function (e, t, n) {
      clearTimeout(a), n && "embed" == n ? (i.guideText.html(r[e]).css({
        color: "#ec1313"
      }), a = setTimeout(function () {
        i.guideText.html(r.puzzle6).css({
          color: "#000000"
        });
      }, t)) : (i.txtErrorNote.html(r[e]), i.status.addClass("show-error-tip"), a = setTimeout(function () {
        s();
      }, t));
    },
    clearErrorNote: s,
    showCoverError: function (e, t, n, o) {
      e = r[e], "[object Array]" === Object.prototype.toString.call(e) && (e = e[Math.floor(Math.random() * e.length)]), t && (e = e.replace(/\+/g, t)), o && (e += '<div class="tc-token">' + $("<div>").text(o).html() + "</div>"), i.txtError.html(e), i.operation.addClass("show-error"), setTimeout(function () {
        i.operation.removeClass("show-error"), n();
      }, 1e3);
    },
    loadImgFailed: function () {
      i.operation.removeClass("show-loading"), i.operation.addClass("show-fail");
    },
    showLoading: function () {
      i.operation.addClass("show-loading"), i.operation.removeClass("show-fail show-success show-error");
    },
    hideLoading: function () {
      i.operation.removeClass("show-loading");
    },
    showSuccess: function (e, t) {
      i.operation.addClass("show-success"), r.c16 = r.c16.join("%^").replace(/\+/g, (e / 1e3).toFixed(1)).split("%^"), e <= 4e3 ? i.txtSuccess.html(r.c16[Math.floor(2 * Math.random())]) : i.txtSuccess.html(r.c16[2]), setTimeout(function () {
        t();
      }, 800);
    },
    shake: function (e) {
      i.imgSlide.addClass("shake"), i.btnSlide.addClass("shake"), o ? i.imgSlide.one(o, function () {
        i.imgSlide.removeClass("shake"), i.btnSlide.removeClass("shake"), e();
      }) : setTimeout(function () {
        i.imgSlide.removeClass("shake"), i.btnSlide.removeClass("shake"), e();
      }, 400);
    }
  };
}