/**
 * 过滤日期格式，传入时间戳，根据参数返回不同格式
 * @param {Date} val 日期参数
 * @param {Boolean} all 为ture返回年月日时分秒 不传返回年月日
 */
const formatTimer = function (val, all) {
  if (val) {
    var dateTimer = new Date(val * 1000)
    var y = dateTimer.getFullYear()
    var M = dateTimer.getMonth() + 1
    var d = dateTimer.getDate()
    var h = dateTimer.getHours()
    var m = dateTimer.getMinutes()
    var s = dateTimer.getSeconds()
    M = M >= 10 ? M : '0' + M
    d = d >= 10 ? d : '0' + d
    h = h >= 10 ? h : '0' + h
    m = m >= 10 ? m : '0' + m
    s = s >= 10 ? s : '0' + s
    if (all) {
      return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
    } else {
      return y + '-' + M + '-' + d
    }
  }
}
export default {
  formatTimer
}
