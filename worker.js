//ps 子线程中不能调用 new Worker()创建新的子线程
// 接收数据
self.onmessage = function(event){
  var data = event.data;
  var ans = func(data);
  // 发送数据到主线程
  postMessage(ans);
}

// 斐波那契数列 函数
function func(n){
  return n<2? n : arguments.callee(n-1) + arguments.callee(n-2)
}

// 终止worker的执行
sefl.close()
