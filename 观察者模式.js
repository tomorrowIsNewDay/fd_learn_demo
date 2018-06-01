// 发布-订阅模式
function Observer(){
   this.fns = {};
}

Observer.prototype = {
   constructor: Observer,
   /**
   *订阅事件 addEvent
   *@param {string} type 类型
   *@param {function} fn 处理函数
   */
   addEvent: function(type,fn){
      if(typeof this.fns[type] == 'undefined'){
          this.fns[type] = [];
      }
      this.fns[type].push(fn);
   },
   /**
   * 发布事件 fire
   *@param {Object} event
   *@param {String} event.target 目标
   *@param {String} event.type 类型
   */
   fire: function(event){
      if(!event.target){
          event.target = this;
      };
      if(this.fns[event.type] instanceof Array){
          var handlers = this.fns[event.type];
          for(var i = 0,len =handlers.length;i<len;i++){
            handlers[i](event);
          }
      }
   }
   /**
   *删除事件 removeHandler
   *@param {string} type 事件类型
   *@param {string} handler 事件处理程序
   */
   removeHandler: function(type,handler){
      if(this.fns[type] instanceof Array){
          var handlers = this.fns[type];
          for(var i =0,len =handlers.length;i<len;i++){
              if(handler[i] === handler){
                  break;
              }
          }
          handlers.splice(i,1);
      }
   }
   
}
