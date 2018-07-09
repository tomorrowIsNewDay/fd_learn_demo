// 防抖函数 debounce
// 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，
// 那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行
// 第一版
function debounce(fn, wait){
  var timeout;
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      fn.apply(context,args);
    }, wait);
  }
}

// 第二版 立即执行，等到停止触发再执行
// 加入 immediate参数判断是否立刻执行
function debounce(func, wait, immediate){
  var timeout;
  var result;
  return function(){
    var context = this;
    var args = arguments;
    
    if(timeout){
      clearTimeout(timeout);
    }
    if(immediate){
      var callNow = !timeout;
      timeout = setTimeout(function(){
        timeout = null;
      },wait)
      if(callNow){
        func.apply(context,args)
      }
    }else{
      timeout = setTimeout(function(){
        func.apply(context,args)
      },wait);
    }
    return result;
  }
}

