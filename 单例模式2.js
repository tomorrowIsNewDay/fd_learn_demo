
// 构造函数
var CreateDiv = function(html){
    this.html = html;
    this.init();
}
CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
}

// 代理实现单例模式
var ProxyMode = (function(){
    var instance = null;
    var init = function(html){
        if(!instance){
            instance = new CreateDiv(html);
        }
        return instance;
    }
    return init;
})()

// 调用单例模式
var a = new ProxyMode("htmlsdlfjosd");
