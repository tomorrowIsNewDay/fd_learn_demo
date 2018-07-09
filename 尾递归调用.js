// 函数递归非常消耗内存，因为执行栈（call stack）需要同时保存成千上百个调用帧，容易发生‘栈溢出’（stack overflow）
// 尾递归，只保存一个调用帧
// fibonacci数列
function Fibonacci(n){
  return n<2 ? 2 : Fibonacci(n-1) + Fibonacci(n-2);
}
// 尾递归优化
function Fibonacci(n, ac1 = 1, ac2 = 1){
  if(n < 2){return ac2;}
  
  return Fibonacci(n-1, ac2, ac1 + ac2);
}

// 另一个列子
function factorial(n){
  if(n===1)return 1;
  return n * factorial(n-1);
}
// 尾递归优化
function factorial(n, total){
  if(n===1)return total;
  return factorial(n-1, n*total)
}

// 递归函数的优化改写
// es6的尾调用优化只在严格模式下开启
// 不是es6的环境下的实现方式

function sum(x,y){
  if(y>0){
    return sum(x+1, y-1);
  }else{
    return x;
  }
}
sum(1,1000)
// 优化改写
// 蹦床函数
function trampoline(f){
  while(f && f instanceof Function){
    f = f()
  }
  return f;
}

function sum(x,y){
  if(y>0){
    return sum.bind(null, x+1, y-1);
  }else{
    return x;
  }
}
// 调用
trampoline(sum(1,1000))

