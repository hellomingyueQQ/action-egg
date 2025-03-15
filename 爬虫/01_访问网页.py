from DrissionPage import Chromium

tab = Chromium().latest_tab

tab.get('https://www.baidu.com')

ele = tab.ele("#kw")

ele.input("JS逆向实战")

tab.ele("@value=百度一下").click()