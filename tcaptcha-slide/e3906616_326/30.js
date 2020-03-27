function (e, t, n) {
  "use strict";

  e.exports = {
    doc: $(document.body),
    captcha: $("#tcWrap"),
    body: $("#bodyWrap"),
    fullScreenHead: $("#tcWrapHeader"),
    operation: $("#tcOperation"),
    status: $("#tcStatus"),
    imgBg: $("#slideBg"),
    imgSlide: $("#slideBlock"),
    close: $("#captcha_close"),
    btnBack: $("#btnBack"),
    guideWrap: $("#guideWrap"),
    guideText: $("#guideText"),
    title: $("#pHeaderTitle,#fsHeaderTitle"),
    statusFail: $("#statusFail"),
    txtSuccess: $("#statusSuccess"),
    txtError: $("#statusError"),
    txtErrorNote: $("#tcaptcha_note"),
    txtBack: $("#txtBack"),
    feedback: $(".show-FB"),
    site007: $("#tcaptcha_site_click"),
    btnReload: $(".show-reload"),
    btnCoverReload: $("#coverReload"),
    btnSlide: $("#tcaptcha_drag_button"),
    btnThumb: $("#tcaptcha_drag_thumb"),
    btnIconfont: $("#t_iconfont"),
    iconError: $("#errorIcon"),
    iconGoback: $("#iconGoback")
  };
}