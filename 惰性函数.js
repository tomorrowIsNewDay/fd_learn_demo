// 普通写法
var t;
var foo = function(){
    if(t){return t}
    t = new Date();
    return t;
}

//惰性函数 解决了每次判断的问题,解决原理——重写函数
var foo = function(){
  var t = new Date();
  foo = function(){
      return t;
  }
  return foo()
}

// 更多应用
// 简化写法
function addEvent(type, el, fn){
  if(window.addEventListener){
    el.addEventListener(type, fn, false)
  }else if(window.attachEvent){
    el.attachEvent('on'_type, fn)
  }
}

// 惰性函数写法
function addEvent(type, el, fn){
  if(window.addEventListener){
    addEvent = function(type,el,fn){
      el.addEventListener(type, fn, false);
    }
  }else if(window.attachEvent){
    addEvent = function(type,el,fn){
      el.attachEvent('on'+type,fn);
    }
  }
}
