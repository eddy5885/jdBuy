import http from './http.js'

// 索尼相机
// https://item.jd.com/100031847124.html

const url1 = 'https://yushou.jd.com/youshouinfo.action?callback=fetchJSON&sku=100031847124&_=1584107644620'


const url2 = ''
const UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
const ContentType = 'application/x-www-form-urlencoded'

// 参考

// https://blog.csdn.net/torresaaa/article/details/104850356

async function getBuyInfo (Cookie, sku, num) {
    const { data } = await http.post('https://marathon.jd.com/seckillnew/orderService/pc/init.action', {
      sku,
      num,
      isModifyAddress: false
    }, {
      headers: {
        Cookie,
        'User-Agent': UserAgent,
        'Content-Type': ContentType
      }
    })
    console.log(1,data,2)
    return data
  }

getBuyInfo('_D1D2116C335B99638D39386A108A9C3E5CB5474E4FDBB6D7CA4A516AE18087BAB7C47C78E98EAFDED3ED10142; user-key=88e16b28-0fbe-42de-a833-09f983528272; shshshsID=881667d0b76b4b8006855ae16f5bd9ac_6_1647787217980; cn=11; ipLoc-djd=17-1381-53955-0.3069403359; ipLocation=%u6e56%u5317; __jdb=122270672.20.160620400442072186658|52.1647785615; 3AB9D23F7A4B3C9B=YMOZAHJTKFVYVMFDPITGFT24GVZ2ILVADCVJKG6KLUWQJEIUJYGF4OLBSR3G7ASNVTPKBKSG3B5NLHY726VOJ6Z4QM; JSESSIONID=E17C37DA206A7000692A098818A1F0DE.s1','1584107644620',1)