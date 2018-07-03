
(function($){
  $.fn.plugin = function(type){
    var methods = {
       init: function(opts){
          return this.each(function(){
              
          })
       },
       // 可以写生命周期钩子函数
       update: function(opts){
       
       },
       destroy: function(opts){
       
       }
    }
    
    if(methods[type]){
       return methods[type].apply(this, Array.prototype.slice.call(arguments, 1));
    }else if(typeof type = 'object' || !type){
       return methods.init.apply(this, arguments);
    }else{
        throw new Error('没有这种方法')
    }
    
  }
})(jQuery)
