
// @params  array  数组 
// 缺点： 对象和NaN不去重
function unique(array){
  var res = array.filter(function(item, index, array){
    return array.indexOf(item) === index;
  });
  return res;
}

// 排序去重的方法
// 缺点： 对象和NaN不去重
function unique(array){
  return array.concat().sort().filter(function(item, index, array){
      // ！index 考虑到是第一个元素
      return !index || item !== array[index-1]
  })
}

// Object键值对
// 全部去重
function unique(array){
  var obj = {};
  return array.filter(function(item,index,array){
    console.log(typeof item + JSON.stringify(item))
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);
  })
}

// ES6 写法
// 缺点： 对象不去重， NaN去重
function uique(array){
  return Array.from(new Set(array));
}
// 简化
function uique(array){
  return [...new Set(array)]
}

// 如果使用 Map
function unique(arr){
  const seen = new Map();
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1));
}
