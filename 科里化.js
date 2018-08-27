function currying(fn,n){
    return function(m){
        return fn.call(this,m,n);
    }
}

// 通用实现
function currying(fn) {
    var slice = Array.prototype.slice,
    __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __args.concat(__inargs));
    };
}

//例子
function square(i) {
    return i * i;
}

function dubble(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

var mapSQ = currying(map, square);
mapSQ([1, 2, 3, 4, 5]);
mapSQ([6, 7, 8, 9, 10]);
mapSQ([10, 20, 30, 40, 50]);
// ......

var mapDB = currying(map, dubble);
mapDB([1, 2, 3, 4, 5]);
mapDB([6, 7, 8, 9, 10]);
mapDB([10, 20, 30, 40, 50]);

var sub_curry = function(fn){
    var args = [].slice.call(arguments,1);
    return function(){
        return fn.apply(this,args.concat([].slice.call(arguments)));
    }
}
// 第二版实现 此版本无问题
function curry2(fn,args){
    var length = fn.length;
    args = args || [];
    return function(){
        var _args = args.slice(0),arg,i;
        for(i=0;i<arguments.length;i++){
            arg = arguments[i];
            _args.push(arg);
        }
        if(_args.length< length){
            return curry2.call(this, fn, _args);
        }else{
            return fn.apply(this, _args);
        }
    }
}
// 第二版实现 有点小问题
function curry2(fn,args){
    var length = fn.length;
    var args = args || []; // 此处有问题，如果传值，不是数组，下面调用slice方法会报错
    return function(){
       newArgs = args.concat(Array.propotype.slice.call(arguments));
        if(newArgs.length < length){
            return curry2.call(this,fn,newArgs)
        }else{
            return fn.apply(this,newArgs)
        }
    }
}
// 调用
var fn = curry2(function(a,b,c){
    console.log([a,b,c]);
})
fn('a','b','c') // ['a','b','c']
fn('a','b')('c') // ['a','b','c']
fn('a')('b','c') // ['a','b','c']






