import http from './http.js'



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

getBuyInfo('__jdu=160620400442072186658; shshshfpb=eEprGopfTJz6g9j5sluOZmQ%3D%3D; shshshfpa=21875b03-fb25-d6b5-ff3b-cbb4c8e1e0a6-1585654788; pinId=x3rDNY_fwqpUlQFxpTW7_bV9-x-f3wj7; __jdv=76161171|direct|-|none|-|1646569049003; pin=jd_5e1b3548e8000; unick=jd_hbnu00; ceshi3.com=201; _tp=JQ%2B9cbSTpzifQgbI75UL8ci686Jnp71E7p4ZOOYTxOw%3D; _pst=jd_5e1b3548e8000; PCSYCityID=CN_420000_420100_0; __jda=122270672.160620400442072186658.1606204004.1646569049.1647785615.52; __jdc=122270672; wlfstk_smdl=lesgfmxu30wrlftgbbs0nu8es5u2ikv3; TrackID=1qFRkNpld6FvtfF6lnMkAfL_7jffDBiY4rP-fSBtM5-e3yg9kFV9TVveNo3EDxly3yYVzJCp9Bla-rzO2zlAoJu_FM_Xv3-kA7qsa6p_Oqf6m4Se8xnRBIQJdcm53aNi1; areaId=17; shshshfp=91931384228c9b598e415974847203b1; ip_cityCode=1381; token=e8de7580b5bd8074257196a5cbc08f8a,3,915437; __tk=lsewIsazkpTpjUt0jpnxksPokiJpjDJqkiIwlshhJcaykpS0ksGEjn,3,915437; thor=E2A95A155047C850E4B7FA6862E768E08F86073A1FFC117C8CBFDC4B44C6FE228EB109408551A019356A07EE2FDBBBFD7F58BA51E98176F7360243962C3F4F45E5111AA2D62FED0221898F610128201FCD9640A3F7E272B92D2B5CC07CD39F7A674D02838F4E536B716D89F44F1324F2E455067D1D2116C335B99638D39386A108A9C3E5CB5474E4FDBB6D7CA4A516AE18087BAB7C47C78E98EAFDED3ED10142; user-key=88e16b28-0fbe-42de-a833-09f983528272; shshshsID=881667d0b76b4b8006855ae16f5bd9ac_6_1647787217980; cn=11; ipLoc-djd=17-1381-53955-0.3069403359; ipLocation=%u6e56%u5317; __jdb=122270672.20.160620400442072186658|52.1647785615; 3AB9D23F7A4B3C9B=YMOZAHJTKFVYVMFDPITGFT24GVZ2ILVADCVJKG6KLUWQJEIUJYGF4OLBSR3G7ASNVTPKBKSG3B5NLHY726VOJ6Z4QM; JSESSIONID=E17C37DA206A7000692A098818A1F0DE.s1','1584107644620',1)