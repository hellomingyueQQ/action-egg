from DrissionPage import ChromiumPage
driver = ChromiumPage()
driver.listen.start("api.bilibili.com/x/space/wbi/arc/search")
driver.get('https://space.bilibili.com/518002417/upload/video')

result = []
for page in range(12):
    resp = driver.listen.wait()

    JsonData = resp.response.body

    for index  in JsonData['data']['list']['vlist']:
        bv = index['bvid']
        result.append(bv)
    driver.ele('css:be-pager-next').click()

    if page == 11:
        resp = driver.listen.wait()
        JsonData = resp.response.body
        for index  in JsonData['data']['list']['vlist']:
            bv = index['bvid']
            result.append(bv)
result.reverse()
print(len(result))
for bv in result:
    print(f'"{bv}",')
driver.close()