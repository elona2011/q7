import requests
import time
import shutil
import cv2
import datetime

proxies = {
    'http': 'http://127.0.0.1:8080',
    'https': 'http://127.0.0.1:8080',
}


def getDataByQuotation(txt, name):
    i = txt.index(name)
    start = i+len(name)
    end = txt.index(b'"', start)
    return txt[start:end].decode('utf-8')


def getDate():
    now = datetime.datetime.now()
    return now.strftime('%m%d%H%M')


ts0 = time.time()
# print(ts0)

# aid = 2080292489
# aid = 2100049389
aid = 2080292489
ua = 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgwLjAuMzk4Ny4xNDkgU2FmYXJpLzUzNy4zNg=='
payload = {'aid': aid,
           'protocol': 'https',
           'showtype': 'popup',
           'ua': ua,
           'noheader': 1,
           'fb': 1,
           'enableDarkMode': 0,
           'fpinfo': 'fpsig=undefined',
           'grayscale': 1,
           'clientype': 2,
           'cap_cd': '',
           'uid': '',
           'wxLang': '',
           'subsid': 1,
           'callback': '_aq_645204',
           'sess': '',
           }

r = requests.get('https://ssl.captcha.qq.com/cap_union_prehandle',
                 params=payload, proxies=proxies, verify='./mitmproxy-ca-cert.pem')
with open('cap_union_prehandle/'+getDate()+'.js', 'w') as f:
    f.write(r.content.decode('utf-8'))
sess = getDataByQuotation(r.content, b'sess":"')
print('sess', sess)

payload = {
    'aid': aid,
    'protocol': 'https',
    'accver': 1,
    'showtype': 'popup',
    'ua': 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgwLjAuMzk4Ny4xNDkgU2FmYXJpLzUzNy4zNg==',
    'noheader': 1,
    'fb': 1,
    'enableDarkMode': 0,
    # 'fpinfo': 'fpsig=undefined',
    'fpinfo': 'fpsig=1100A31AF8D20A73E8815EEAC971C225FF2005CBEAAD3755B062E237F276B89F06F72C2F545742EACF08EA533CD25E21821A',
    'grayscale': 1,
    'clientype': 2,
    'subsid': 2,
    'sess': sess,
    'fwidth': 0,
    'sid': 6812450661928423155,
    'forcestyle': 'undefined',
    'wxLang': '',
    'tcScale': 1,
    'uid': '',
    'cap_cd': '',
    'rnd': 69683,
    'TCapIframeLoadTime': 'undefined',
    'prehandleLoadTime': 279,
    'createIframeStart': 1586147273826,
}
r = requests.get('https://ssl.captcha.qq.com/cap_union_new_show',
                 params=payload, proxies=proxies, verify='./mitmproxy-ca-cert.pem')
with open('cap_union_new_show/'+getDate()+'.html', 'w') as f:
    f.write(r.content.decode('utf-8'))
subcapclass = getDataByQuotation(r.content, b'subcapclass:"')
print('subcapclass', subcapclass)
vsig = getDataByQuotation(r.content, b'vsig:"')
print('vsig', vsig)
cdnPic1 = getDataByQuotation(r.content, b'cdnPic1:"')
print('cdnPic1', cdnPic1)

if 'cap_union_new_getcapbysig' in cdnPic1:
    cdnPic1 = 'https://ssl.captcha.qq.com' + cdnPic1
print(cdnPic1)
r = requests.get(cdnPic1, proxies=proxies, verify='./mitmproxy-ca-cert.pem', stream=True,
                 params={
                     'aid': aid,
                     'protocol': 'https',
                     'accver': 1,
                     'showtype': 'popup',
                     'ua': ua,
                     'noheader': 1,
                     'fb': 1,
                     'enableDarkMode': 0,
                     'fpinfo': '',
                     'grayscale': 1,
                     'clientype': 2,
                     'subsid': 3,
                     'sess': sess,
                     'fwidth': 0,
                     'sid': 6812508861317084381,
                     'forcestyle': 'undefined',
                     'wxLang': '',
                     'tcScale': 1,
                     'uid': '',
                     'cap_cd': '',
                     'rnd': 38564,
                     'TCapIframeLoadTime': 'undefined',
                     'prehandleLoadTime': 41,
                     'createIframeStart': 1586160824915,
                     'rand': 16962597,
                     'websig': '',
                     'vsig': vsig,
                     'img_index': 1
                 })
local_file = open('local_image.jpg', 'wb')
r.raw.decode_content = True
# Copy the response stream raw data to local image file.
shutil.copyfileobj(r.raw, local_file)
image = cv2.imread('local_image.jpg')
# image = cv2.imread('bg/510_245.jpg')

# gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


def isWhite(px):
    if px[0] > 0x80 and px[1] > 0x80 and px[2] > 0x80:
        return True


def isBlack(px):
    if px[0] < 0x70 and px[1] < 0x70 and px[2] < 0x70:
        return True


def vertWhite(image, x, y):
    for i in range(y, y-10, -1):
        if not isWhite(image[i, x]):
            return False
    return True


def horiWhite(image, x, y):
    for i in range(x, x-10, -1):
        if not isWhite(image[y, i]):
            return False
    return True


x, y = 0, 0


def search(image):
    global x, y
    col = image.shape[1]-1
    row = image.shape[0]-1
    for x in range(col, 90, -1):
        for y in range(row, 90, -1):
            if isWhite(image[y, x]) and isBlack(image[y-1, x-1]) and vertWhite(image, x, y) and horiWhite(image, x, y):
                # cv2.rectangle(image, (x-88-1, y-88-1),
                #               (x-1, y-1), (0, 0, 255), 1)
                return (x-44, y-44)


x, y = search(image)
print(x, y)
# cv2.imshow("Over the Clouds - gray", gray_image)
# cv2.imshow("Over the Clouds", image)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

r = requests.post('https://ssl.captcha.qq.com/cap_union_new_verify', proxies=proxies, verify='./mitmproxy-ca-cert.pem',
                  data={
                      'aid': aid,
                      'sess': sess,
                      'ans': str(x-67)+','+str(y-67)+';',
                      'vsig': vsig,
                      'subcapclass': subcapclass
                  })
# print(r.content)
r.encoding = 'utf-8'
print(r.text)
ts1 = time.time()
# print(ts1)
print(ts1-ts0)
