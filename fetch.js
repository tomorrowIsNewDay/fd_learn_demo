
/**
* 将对象转成 a=1&b=2的形式
*@param obj对象
*/
function obj2String(obj, arr=[],idx=0){
  for(let item in obj){
    arr[idx++] = [item,obj[item]]
  }
  return new URLSearchParams(arr).toString()
}

/**
*@param url 请求地址
*@param options 请求参数
*@param method 请求方式
*/
function commonFetcdh(url, options,method='GET'){
  const searchStr = obj2String(options)
  let initObj = {};
  if(method === 'GET'){ 如果是GET请求，拼接url
    url += '?' + searchStr
    initObj = {
      method:method,
      credentials: 'include'
    }
  }else{
    initObj = {
      method:method,
      credentials:'include',
      headers: new Headers({
        'Accept':'application/json',
        'Content-Type':'application/X-www-form-urlencoded'
      }),
      body: searchStr
    }
  }
  
  fetch(url,initObj).then(res=>{
    return res.json()
  }).then(res=>{
    return res
  }).catch(err=>{
    console.log(err)
  })
}
/**
* GET请求
*/
function GET(url,options){
  return commonFetcdh(url,options,'GET')
}
/**
* POST请求
*/
function POST(url,options){
  return commonFetcdh(url,options,'POST')
}
// 调用
POST('URL',{a:1,b:2})

