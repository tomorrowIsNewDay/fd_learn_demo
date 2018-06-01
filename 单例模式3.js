// 创建div
var createWindow = function(){
    var div = document.createElement('div');
    div.innerHTML = '我是div';
    div.style.display = 'none';
    document.body.appendChild(div);
    
    return div;
}

// 创建iframe
var createIframe = function(){
    var iframe = doucment.createElement('iframe');
    document.body.appendChild(iframe);
    
    rentrun iframe;
}

// 通用的代码分离出来，封装成抽象类
var getInstance = function(fn){
    var result;
    return function(){
        if(!result){
            result = fn.call(this,arguments)
        };
        return result;
    }
}

// 调用
var a = document.getElmentById('btn');
var createSingDiv = getInstance(createWindow);
a.onclick = function(){
  var el = createSingDiv()；
  el.style.display = 'block';
}

var createSingIframe = getInstance(createIframe);
a.onclick = function(){
   var el = createSingIframe();
   el.src = 'http://baidu.com'
}
