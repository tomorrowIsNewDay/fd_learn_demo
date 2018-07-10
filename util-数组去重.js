
// @params  array  数组 
function unique(array){
  var res = array.filter(function(item, index, array){
    return array.indexOf(item) === index;
  });
  return res;
}

// 排序去重的方法
function unique(array){
  return array.concat().sort().filter(function(item, index, array){
      // ！index 考虑到是第一个元素
      return !index || item !== array[index-1]
  })
}
