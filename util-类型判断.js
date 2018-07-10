// typeof 针对基本类型

// Object.prototype.toString() 针对引用类型
Object.prototype.toString.call(null) // '[object Null]'
Object.prototype.toString.call(undefined).slice(8, -1) //'Undefined'

function checkType(obj){
  return typeof obj === 'object' || typeof obj === 'function' ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() : typeof obj;
}

// isFunction
function isFunction(obj){
  return type(obj) === 'function';
}
// 数组
Array.isArray()
