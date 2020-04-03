// 创建连接
var xhr = new XMLHttpRequest()
// 连接服务器
xhr.open('get', url, true)
xhr.send()
// 接收请求
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    // 300重定向，200成功，304内容为被修改，读取内容为缓存
    if (xhr.status == 200 && xhr.status < 300 || xhr.status == 304) {
      success(xhr.responseText)
    } else {
      fail && fail(xhr.status)
    }
  }
}