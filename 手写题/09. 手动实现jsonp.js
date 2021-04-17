/**
 * jsonp
 * 不会
 */

function jsonp(options) {
  if (!options.url) {
    console.log('参数不全，缺少url')
    return
  }
  let url = options.url + '?callback=' + options.callback
  let script = document.createElement('script')
  script.src = options.url
  document.body.appendChild(script)
  return new Promise((resolve, reject) => {
    resolve(callback)
  })
}

jsonp({
  url: 'http://a.com/b',
  callback: 'callback',
}).then((res) => {
  console.log(res)
})
