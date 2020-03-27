const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

let name = `d41060624d`
let folder = `d`
let slideJs = fs.readFileSync(`./${folder}/${name}.js`, 'utf8')
let ast = parser.parse(slideJs)
traverse(ast, {
  StringLiteral(path) {
    let extra = path.node.extra
    if (extra.raw.slice(1, 3) == '\\x') {
      if (extra.raw.includes('08')
        || extra.raw.includes('09')
        || extra.raw.includes('0a')
        || extra.raw.includes('0c')
        || extra.raw.includes('22')
        || extra.raw.includes('5c')
        || extra.raw.includes('0d')) {
        return
      }

      if (extra.rawValue.includes(`'`)) {
        extra.raw = `"${extra.rawValue}"`
      } else {
        extra.raw = `'${extra.rawValue}'`
      }
    }
  }
})

var _0x7a8c = ['processBlock', 'padding', 'pad', 'unpad', 'formatter', 'stringify', 'format', 'ciphertext', 'salt', 'SerializableCipher', 'createEncryptor', '_parse', 'kdf', 'OpenSSL', 'random', 'PasswordBasedCipher', 'ivSize', 'encrypt', 'execute', 'key', '_nRounds', '_keySchedule', '_doCryptBlock', '_invKeySchedule', 'AES', 'object', 'use strict', 'valueOf', 'toJSON', 'getUTCFullYear', 'getUTCMonth', 'getUTCDate', 'getUTCHours', 'getUTCMinutes', 'lastIndex', 'test', 'replace', '0000', 'number', 'null', 'boolean', '[object Array]', 'function', 'JSON.parse', 'mozRTCPeerConnection', 'webkitRTCPeerConnection', 'stun:stun.services.mozilla.com', 'exec', 'onicecandidate', 'candidate', 'localDescription', 'sdp', 'split', 'a=candidate:', 'get', 'match', 'out', 'stack', 'phantomjs', 'callPhantom', '_phantom', 'appVersion', 'fxdriver_id', '__fxdriver_unwrapped', 'domAutomation', 'ubot', 'awesomium', 'rhinoException', 'undefined', 'substring', '[CODE_VERIFY]', 'target error - target and name are both required', 'target error - target itself must be window object', 'target error - target name must be string type', 'target', 'name', 'send', 'postMessage', 'navigator', 'target callback function is not defined', 'listenFunc', 'initListen', 'addTarget', 'targets', 'data', 'message', 'onmessage', 'listen', 'clear', 'timer', 'count', 'interval', 'start', 'stop', 'innerHeight', 'clientHeight', 'body', 'isIE', 'monospace', 'getElementsByTagName', 'createElement', 'span', 'fontSize', '72px', 'innerHTML', 'fontFamily', 'appendChild', 'offsetWidth', 'offsetHeight', 'removeChild', 'detect', 'Symbol;Arial;Courier New;Times New Roman;Georgia;Trebuchet MS;Verdana;Impact;Comic Sans MS;Webdings;Tahoma;Microsoft Sans Serif;Wingdings;Arial Black;Lucida Console;Marlett;Lucida Sans Unicode;Courier;Franklin Gothic Medium;Palatino Linotype', 'getRegularPluginsString', 'getIEPluginsString', 'ShockwaveFlash.ShockwaveFlash', 'AcroPDF.PDF', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'RealPlayer', 'SWCtl.SWCtl', 'AgControl.AgControl', 'width', 'availHeight', 'colorDepth', 'deviceXDPI', 'logicalXDPI', 'fontSmoothingEnabled', 'plugins', 'description', '$version', 'characterSet', 'languages', 'localStorage', 'indexedDB', 'getFullYear', 'toGMTString', 'collectFonts', 'getCharSet', 'collectScreen', 'reportError', 'getErrors', 'querySelectorAll', 'input', 'blur', 'cIPT', '; expires=', '; path=', '; domain=', '; secure', 'cookie', 'set', 'unset', 'getTime', 'atob', 'btoa', "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.", 'currentScript', 'script', 'src', 'https://bsp.qcloud.qq.com/v2/index.php', 'height', 'winSize', 'index', 'tokenid', 'btokenid', 'tokents', 'ips', 'cookieEnabled', 'timezone', 'mousemove', 'keyUpCnt', 'keyUpValue', 'mouseUpCnt', 'mouseDownValue', 'mouseDownCnt', 'bSimutor', 'focusBlur', 'getFlashVersion', 'charSet', 'resizeCnt', 'errors', 'screenInfo', 'elapsed', '0123456789abcdef', '?Action=WebInfo&siteKey=', '&content=', 'offsetLeft', 'offsetParent', 'toLowerCase', 'offsetTop', 'tagName', 'isObject', 'isString', 'wheelDelta', 'detail', 'load', 'event', 'className', 'getData', 'touchend', 'changedTouches', 'clientX', 'clientY', 'touchstart', 'touchmove', 'round', 'toFixed', 'pageX', 'pageY', 'scrollLeft', 'clientLeft', 'scrollTop', 'clientTop', 'touches', 'alpha', 'beta', 'gamma', 'Win32', 'Mac68K', 'MacPPC', 'MacIntel', 'X11', 'Unix', 'Linux', 'android', 'Android', 'like mac os x', 'IOS', 'Windows NT 5.0', 'Windows NT 5.1', 'Windows XP', 'WinXP', 'Windows NT 5.2', 'Windows 2003', 'Win2003', 'Windows NT 6.0', 'Windows Vista', 'WinVista', 'Windows NT 6.1', 'Windows 7', 'other', 'msie', 'chrome', 'div', 'ontuchstart', 'GetVariable', 'Shockwave Flash', 'iframes', 'parent_dc', 'parent', 'child', '0px', 'hidden', 'iframe', 'TDC_bfp', 'ontouchstart', 'mouseup', 'mousedown', 'keyup', 'click', 'mousewheel', 'DOMMouseScroll', 'setConfig', 'HandShake', 'contentWindow', 'TDC', 'Messenger', 'parse', 'mouseclick', 'keyvalue', 'user_Agent', 'resolutionx', 'resolutiony', 'url', 'refer', 'begintime', 'endtime', 'platform', 'flash', 'pluginNum', 'ptcz', 'prototype', 'call', '[object ', 'Object', 'Array', 'isArray', 'Function', 'length', 'forEach', 'hasOwnProperty', 'map', 'currentStyle', 'defaultView', 'style', 'userAgent', 'documentElement', 'doScroll', 'add', 'DOMContentLoaded', 'type', 'CSS', 'each', 'mapArray', 'DOMReady', 'cutUrl', 'referrer', 'addEventListener', 'attachEvent', 'removeEventListener', 'detachEvent', 'remove', 'lib', 'mixIn', 'init', 'apply', 'extend', 'toString', 'words', 'sigBytes', 'clamp', 'push', 'ceil', 'slice', 'Hex', 'substr', 'fromCharCode', 'join', 'charCodeAt', 'Utf8', 'BufferedBlockAlgorithm', '_data', '_nDataBytes', 'string', 'blockSize', 'max', '_minBufferSize', 'min', '_doProcessBlock', 'clone', 'cfg', 'reset', '_doReset', '_append', '_doFinalize', 'HMAC', 'finalize', 'WordArray', 'enc', 'Base64', '_map', 'charAt', 'indexOf', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', 'Hasher', 'algo', 'abs', 'sin', 'MD5', '_hash', 'floor', '_process', 'HmacMD5', '_createHmacHelper', 'Base', 'EvpKDF', 'hasher', 'create', 'keySize', 'iterations', 'update', 'concat', 'compute', 'Cipher', '_ENC_XFORM_MODE', '_key', 'decrypt', 'mode', '_iv', '_prevBlock', 'BlockCipherMode', 'Encryptor', '_cipher', 'encryptBlock', 'decryptBlock', 'CBC', 'Pkcs7', 'BlockCipher', '_xformMode', 'createDecryptor', '_mode'];

(function (_0x40f189, _0x416956) {
  var _0xa99fc8 = function (_0x212e07) {
    while (--_0x212e07) {
      _0x40f189['push'](_0x40f189['shift']());
    }
  };

  _0xa99fc8(++_0x416956);
})(_0x7a8c, 0x10f);

var _0xc7a8 = function (_0x2debe6, _0xf4fc1e) {
  _0x2debe6 = _0x2debe6 - 0x0;
  var _0x304ef4 = _0x7a8c[_0x2debe6];
  return _0x304ef4;
};

traverse(ast, {
  CallExpression(path) {
    if(path.node.callee.type=='Identifier'&&path.node.callee.name=='_0xc7a8'){
      let a = generate(path.node)
      let b = eval(a.code)
      path.replaceWith(t.StringLiteral(b))
    }
  }
})

let a = generate(ast)
fs.writeFileSync(`./${folder}/d.js`, a.code)