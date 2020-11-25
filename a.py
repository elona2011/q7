from mitmproxy import http
from mitmproxy import ctx

collectdata = ''
subcapclass = ''
vsig = ''
aid = '2100049389'
sess = ''


def request(flow):
    if 'css' in flow.request.url:
        file = open("css/css.css", "r")
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            file.read(),  # (optional) content
            {"Content-Type": "text/css"}  # (optional) headers
        )

    # if 'd41060624d.js' in flow.request.url:
    #     file = open("d/d.js", "r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "application/x-javascript"}  # (optional) headers
    #     )

    # if 'tcaptcha-frame.32ce39f5.js' in flow.request.url:
    #     file = open("tcaptcha-frame/32ce39f5.js", "r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "application/x-javascript"}  # (optional) headers
    #     )
    # if 'tcaptcha-slide.e3906616' in flow.request.url:
    #     file = open("tcaptcha-slide/e3906616_406.js", "r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "application/x-javascript"}  # (optional) headers
    #     )
    # if 'tdc_iframe.html' in flow.request.url:
    #     file = open("tdc_iframe/327.html", "r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "text/html"}  # (optional) headers
    #     )

    # if 'caplog' in flow.request.url:
    #     file = open("tdc_iframe/327.html", "r")
    #     flow.response = http.HTTPResponse.make(
    #         404,  # (optional) status code
    #         # file.read(),  # (optional) content
    #         # {"Content-Type": "text/html"}  # (optional) headers
    #     )
    # if 'dfpReg' in flow.request.url:
    #     file = open("tdc_iframe/327.html", "r")
    #     flow.response = http.HTTPResponse.make(
    #         404,  # (optional) status code
    #         # file.read(),  # (optional) content
    #         # {"Content-Type": "text/html"}  # (optional) headers
    #     )
    # if 'https://ssl.captcha.qq.com/tdc.js' in flow.request.url:
    #     file = open("re.js","r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "text/html"}  # (optional) headers
    #     )
    if 'cap_union_prehandle' in flow.request.url:
        ctx.log.info(flow.request.query["aid"])
        # flow.request.query["aid"] = aid
        # del flow.request.query["accver"]
        # del flow.request.query["ua"]
        # flow.request.co

    # if 'ssl.captcha.qq.com/cap_union_new_show' in flow.request.url:
    #     del flow.request.query["sid"]
    #     del flow.request.query["rnd"]

    if flow.request.url == 'https://ssl.captcha.qq.com/cap_union_new_verify':
        # If there's already a form, one can just add items to the dict:
        ctx.log.info('11')
        # flow.request.urlencoded_form["aid"] = aid
        # flow.request.urlencoded_form["protocol"] = ''
        # flow.request.urlencoded_form["accver"] = ''
        # flow.request.urlencoded_form["showtype"] = ''
        # flow.request.urlencoded_form["ua"] = ''
        # flow.request.urlencoded_form["noheader"] = ''
        # flow.request.urlencoded_form["fb"] = ''
        # flow.request.urlencoded_form["enableDarkMode"] = ''
        # flow.request.urlencoded_form["ptcz"] = ''
        # # flow.request.urlencoded_form["fpinfo"] = ''
        # flow.request.urlencoded_form["tkid"] = ''
        # flow.request.urlencoded_form["grayscale"] = ''
        # flow.request.urlencoded_form["clientype"] = ''
        # flow.request.urlencoded_form["subsid"] = ''
        # flow.request.urlencoded_form["sess"] = sess
        # flow.request.urlencoded_form["fwidth"] = ''
        # flow.request.urlencoded_form["sid"] = ''
        # flow.request.urlencoded_form["forcestyle"] = ''
        # flow.request.urlencoded_form["tcScale"] = ''
        # flow.request.urlencoded_form["rnd"] = ''
        # flow.request.urlencoded_form["TCapIframeLoadTime"] = ''
        # flow.request.urlencoded_form["prehandleLoadTime"] = ''
        # flow.request.urlencoded_form["createIframeStart"] = ''
        # flow.request.urlencoded_form["ans"]=''
        # flow.request.urlencoded_form["vsig"] = vsig
        # flow.request.urlencoded_form["cdata"] = ''
        # # flow.request.urlencoded_form["websig"] = ''
        # flow.request.urlencoded_form["subcapclass"] = subcapclass
        # # flow.request.urlencoded_form[collectdata] = ''
        # flow.request.urlencoded_form["eks"] = ''
        # flow.request.urlencoded_form["tlg"] = ''
        # flow.request.urlencoded_form["vlg"] = ''
    # else:
    #     # One can also just pass new form data.
    #     # This sets the proper content type and overrides the body.
    #     flow.request.urlencoded_form = [
    #         ("foo", "bar")
    #     ]


def response(flow):
    global collectdata, subcapclass, vsig, sess, aid
    if 'ssl.captcha.qq.com/cap_union_new_show' in flow.request.url:
        collectdata = getDataFix(flow, 'collectdata', 6)
        subcapclass = getDataFix(flow, 'subcapclass', 2)
        vsig = getDataByQuotation(flow, 'vsig:"')
        ctx.log.info('subcapclass:'+ subcapclass)
        ctx.log.info('vsig:'+ vsig)
        # aid=getDataByQuotation(flow,'aid:"')
    if 'cap_union_prehandle' in flow.request.url:
        sess = getDataByQuotation(flow, 'sess":"')


def getDataFix(flow, name, dlen):
    i = flow.response.text.find(name)
    start = i+len(name+':"')
    return flow.response.text[start:start+dlen]


def getDataByQuotation(flow, name):
    i = flow.response.text.find(name)
    start = i+len(name)
    end = flow.response.text.find('"', start)
    return flow.response.text[start:end]
