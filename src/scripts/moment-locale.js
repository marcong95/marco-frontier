import moment from 'moment'
import zhCn from 'moment/locale/zh-cn'

moment.defineLocale('zh', {
  parentLocale: 'zh-cn',

  relativeTime: {
    future : '%s内',
    past : '%s前',
    s : '几秒',
    m : '1分钟',
    mm : '%d分钟',
    h : '1小时',
    hh : '%d小时',
    d : '1天',
    dd : '%d天',
    M : '1个月',
    MM : '%d个月',
    y : '1年',
    yy : '%d年'
  }
})

moment.defineLocale('zh-yue', {
  parentLocale: 'zh',

  relativeTime: {
    d: '1日',
    dd: '%d日'
  }
})

moment.locale('en')