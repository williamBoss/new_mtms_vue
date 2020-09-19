export function getAge (strAge) {
  var birArr = strAge.split('/')
  var birYear = parseInt(birArr[0])
  var birMonth = parseInt(birArr[1])
  var birDay = parseInt(birArr[2])

  var d = new Date()
  var nowYear = d.getFullYear()
  var nowMonth = d.getMonth() + 1 // 记得加1
  var nowDay = d.getDate()
  var returnAge

  if (birArr === null) {
    return false
  }
  d = new Date(birYear, birMonth - 1, birDay)
  if (d.getFullYear() === birYear && (d.getMonth() + 1) === birMonth && d.getDate() === birDay) {
    if (nowYear === birYear) {
      returnAge = 0
    } else {
      var ageDiff = nowYear - birYear
      if (ageDiff > 0) {
        if (nowMonth === birMonth) {
          var dayDiff = nowDay - birDay
          if (dayDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        } else {
          var monthDiff = nowMonth - birMonth
          if (monthDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        }
      } else {
        return '出生日期晚于今天，数据有误' // 返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge
  } else {
    return ('输入的日期格式错误！')
  }
}
