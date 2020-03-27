from mitmproxy import http

collectdata=''
def request(flow):
    if 'd41060624d.js' in flow.request.url:
        file = open("d/d.js","r")
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            file.read(),  # (optional) content
            {"Content-Type": "application/x-javascript"}  # (optional) headers
        )
    if 'tdc_iframe.html' in flow.request.url:
        file = open("tdc_iframe/327.html","r")
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            file.read(),  # (optional) content
            {"Content-Type": "text/html"}  # (optional) headers
        )
    # if 'https://ssl.captcha.qq.com/tdc.js' in flow.request.url:
    #     file = open("re.js","r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "text/html"}  # (optional) headers
    #     )

    if flow.request.url == 'https://ssl.captcha.qq.com/cap_union_new_verify':
        # If there's already a form, one can just add items to the dict:

        # flow.request.urlencoded_form["aid"]=''
        flow.request.urlencoded_form["protocol"]=''
        flow.request.urlencoded_form["accver"]=''
        flow.request.urlencoded_form["showtype"]=''
        flow.request.urlencoded_form["ua"]=''
        flow.request.urlencoded_form["noheader"]=''
        flow.request.urlencoded_form["fb"]=''
        flow.request.urlencoded_form["enableDarkMode"]=''
        flow.request.urlencoded_form["ptcz"]=''
        flow.request.urlencoded_form["fpinfo"]=''
        flow.request.urlencoded_form["tkid"]=''
        flow.request.urlencoded_form["grayscale"]=''
        flow.request.urlencoded_form["clientype"]=''
        flow.request.urlencoded_form["subsid"]=''
        # flow.request.urlencoded_form["sess"]=''
        flow.request.urlencoded_form["fwidth"]=''
        flow.request.urlencoded_form["sid"]=''
        flow.request.urlencoded_form["tcScale"]=''
        flow.request.urlencoded_form["rnd"]=''
        flow.request.urlencoded_form["TCapIframeLoadTime"]=''
        flow.request.urlencoded_form["prehandleLoadTime"]=''
        flow.request.urlencoded_form["createIframeStart"]=''
        # flow.request.urlencoded_form["ans"]=''
        # flow.request.urlencoded_form["vsig"]=''
        flow.request.urlencoded_form["cdata"]=''
        flow.request.urlencoded_form["websig"]=''
        # flow.request.urlencoded_form["subcapclass"]=''
        flow.request.urlencoded_form[collectdata]=''
        flow.request.urlencoded_form["eks"]=''
        flow.request.urlencoded_form["tlg"]=''
        flow.request.urlencoded_form["vlg"]=''
    # else:
    #     # One can also just pass new form data.
    #     # This sets the proper content type and overrides the body.
    #     flow.request.urlencoded_form = [
    #         ("foo", "bar")
    #     ]

def response(flow):
    global collectdata
    if 'ssl.captcha.qq.com/cap_union_new_show' in flow.request.url:
        i=flow.response.text.find('collectdata')
        start = i+len('collectdata:"')
        collectdata=flow.response.text[start:start+6]

