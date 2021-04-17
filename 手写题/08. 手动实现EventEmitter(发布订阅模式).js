/**

//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
 */

class EventEmitter {
  constructor() {
    this.hooks = {}
  }
  on(name, fn) {
    this.hooks[name] ? this.hooks[name].push(fn) : (this.hooks[name] = [fn])
  }
  emit(name) {
    if (this.hooks[name]) {
      this.hooks[name].forEach((fn) => fn())
    }
  }
}
let event = new EventEmitter()
event.on('some_event', function () {
  console.log('some_event 事件触发')
})
console.time('start')
setTimeout(function () {
  console.timeEnd('start')
  event.emit('some_event')
}, 1000)
