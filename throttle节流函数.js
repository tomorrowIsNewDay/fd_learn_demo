
// 节流的原理--如果你持续触发事件，每隔一段时间，只执行一次事件。
// 节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。

// 使用时间戳
// 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
// 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

function throttle(func, wait){
  var context, args;
  var previous = 0;
  
  return function(){
    var now = +new Date();
    context = this;
    args = arguments;
    if(now - previous > wait){
      func.apply(context, args);
      prvious = now;
    }
  }
}

// 使用定时器
function throttle(func, wait){
  var context, args;
  var timeout;
  return function(){
    context = this;
    args = arguments;
    if(!timeout){
      timeout = setTimeout(function(){
        timeout = null;
        func.apply(context,args)
      },wait)
    }
  }
}

// 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
// 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件


