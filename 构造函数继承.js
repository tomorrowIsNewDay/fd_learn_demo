
var extend = function(subClass, superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}

// 第二种写法
var extend = function(subClass, superClass){
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
}

// 父类构造函数
function Parent(name){
    this.name = name;
}
Parent.prototype.say = function(){
    console.log(this.name)
}

// 子类构造函数继承
function Son(name,age){
    Parent.call(this, name);
    this.age = age;
}
// 调用继承方法
extend(Son, Parent);
