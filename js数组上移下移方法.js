

var swapItems = function(arr, index1, index2){
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

var arr = [1,2,3];
var newArr = [];
// 上移一位 index——当前要移动元素的下标
newArr = swapItems(arr, index, index-1);

// 下移一位 index——当前要移动元素的下标
newArr = swapItems(arr, index, index+1);
