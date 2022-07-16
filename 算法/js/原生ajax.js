// 创建主函数ajax，采用option对象，避免避免填入数据顺序混乱造成bug
function ajax(options) {
  let method = options.method || 'GET', // 不传则默认为GET请求
    params = options.params, // GET请求携带的参数
    data = options.data, // POST请求传递的参数
    url = options.url + (params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''),
    async = options.async === false ? false : true,
      success = options.success,
      headers = options.headers;

  let xhr;
  // 创建xhr对象
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  // 监听状态变化
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success && success(xhr.responseText);
    }
  }

  xhr.open(method, url, async);

  if (headers) {
    Object.keys(Headers).forEach(key => xhr.setRequestHeader(key, headers[key]))
  }

  method === 'GET' ? xhr.send() : xhr.send(data)
}

