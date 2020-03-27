def request(flow):
    # if 'https://ssl.captcha.qq.com/tdc.js' in flow.request.url:
    #     file = open("re.js","r")
    #     flow.response = http.HTTPResponse.make(
    #         200,  # (optional) status code
    #         file.read(),  # (optional) content
    #         {"Content-Type": "text/html"}  # (optional) headers
    #     )
    if flow.request.url == 'https://ssl.captcha.qq.com/cap_union_new_verify':
        # If there's already a form, one can just add items to the dict:
        # flow.request.urlencoded_form["bbbdbc"] = flow.request.urlencoded_form["bbbdba"]
        del flow.request.urlencoded_form["bcbafd"]
        del flow.request.urlencoded_form["eks"]
        del flow.request.urlencoded_form["tlg"]
        del flow.request.urlencoded_form["subcapclass"]
        del flow.request.urlencoded_form["vlg"]
        # del flow.request.urlencoded_form["websig"]
        # del flow.request.urlencoded_form["cdata"]
        # del flow.request.urlencoded_form["vsig"]
        del flow.request.urlencoded_form["vlg"]
        del flow.request.urlencoded_form["vlg"]
        del flow.request.urlencoded_form["vlg"]
        del flow.request.urlencoded_form["vlg"]
        del flow.request.urlencoded_form["vlg"]
    # else:
    #     # One can also just pass new form data.
    #     # This sets the proper content type and overrides the body.
    #     flow.request.urlencoded_form = [
    #         ("foo", "bar")
    #     ]