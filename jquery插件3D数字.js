;(function($){
    $.fn.number = function(opts){
        var _this = this; // 保存this,值调用此插件方法的jquery对象
        return this.each(function(){
            init(opts)
        })
        
        function init(opts){
          var DEFAULT = {
              target: 0, //目标值
              style: {
                  translateZ: 180,
                  fontSize: 80
              },
              time: 1000 //过渡时间
          }；
          opts = $.extend(true, DEFAULT, opts);
          var initnumStr = opts.target+''；
          for(var i = 0,len=initnumStr.length; i<len; i++){
              var dom = '<div class="numBox index'+i+ '"></div>';
              if(_this.find('.index'+i).length === 0){
                  _this.append(dom);
              }
              
              initDom(_this.find('.index'+i), Number(initnumStr[i]), opts);
          }  
        }
        
        function initDom(obj, target, opts){
            // 缓存变量
            var $items = obj.find('.items');
            // 获取标志符号属性
            var currentNum = $items.attr('data-now') || 0; //当前数字
            var currentDeg = $items.attr('data-rotate') || 0; //当前旋转角度
            
            var dom = '<div class="items" data-now="0" data-rotate="0">'+
                      '<div class="item item0">0</div>'+
                      '<div class="item item9">9</div>'+
                      '<div class="item item8">8</div>'+
                      '<div class="item item7">7</div>'+
                      '<div class="item item6">6</div>'+
                      '<div class="item item5">5</div>'+
                      '<div class="item item4">4</div>'+
                      '<div class="item item3">3</div>'+
                      '<div class="item item2">2</div>'+
                      '<div class="item item1">1</div></div>';
             // 添加dom元素
             obj.each(function(i, n)){
                if($(n).children().length === 0){
                    $(n).append(dom)
                }
             }
            
            // 配置.item的旋转角度等样式
            $('.item').each(function(index, ele){
                $(ele).css({
                    transform: 'rotateX(' + 36*index+'deg) translateZ('+opts.style.translateZ+'px)',
                    fontSize: opts.style.fontSize+'px'
                })
            })
            // 计算旋转角度
            var diff = target - currentNum;
            var deg = diff*36 + Number(currentDeg);
            
            // 为解决动态加入dom会造成样式合并，没有transition效果，所有将其加入异步操作
            setTimeout(function(){
                obj.find('.items').css({
                    'transform': 'rotateX(' + deg +'deg)',
                    'transition': transform '+ opts.time+'ms'
                })
            },0);
            
            // 重新生成标志符号
            $items.attr('data-now', target);
            $items.attr('data-rotate', deg);
            
        }
    }

}( jQuery ));
