
// 单例模式的 优点
// 可以用来划分命名空间，减少全局变量，可以被实例化，并且只能实例化一次

var Singleton = function(name){
    this.name = name;
}

Singleton.prototype.getName = function(){
    return this.name;
}

//获取实例对象
var getInstance = (function(){
    // 是否实例的标识符
    var instance = null;
    var init = function(name){
        if(!instance){
            instance = new Singleton(name)
        };
        return instance;
    }
    
    return {
        init: init
    }
})()

// 调用
var a = getInstance.init('liming');
var b = getInstance.init('wwww');
console.log(a === b) // true
