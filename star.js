
var star = (function(){
    
    var extend = function(subClass,superClass){
         var F = function(){};
         F.prototype = superClass.prototype;
         subClass.prototype = new F();
         subClass.prototype.contructor = subClass;
    }
    // 另一种写法
    var extend = function(subClass,superClass){
        var prototype = Object.create(superClass.prototype);
        prototype.constructor = subClass;
        subClass.prototype = prototype;
    }
    
    var DEFAULT = {
        mode: 'lightStar',
        mun: 0,
        readyOnly: false,
        select: function(){},
        choose: function(){},
    }
   
    var init = function(el, options){
        options = $.extend(true, DEFAULT, options);
        if(options.mode === 'lightStar'){
            new LightStar(el,options).init();
        }else if(options.mode === 'lightStarHalf'){
            new LightStarHalf(el,options).init();
        }else{
            console.log('输入的模式名称有误，使用默认的模式');
            new LightStar(el,options).init();
        }
    }
    
    // 父类的构造函数Light
    var Light = function(el,options){
        this.ul = $(el);
        this.li = this.ul.find('.star-item');
        this.opts = this.options;
        // 定义
        this.add = 1;
        this.selectEvent = '';
    }
    Light.prototype.init = function(){
        this.lightOn(this.opts.num);
        !this.opts.readyOnly && this.bindEvent();
    }
    Light.prototype.lightOn = function(num){
        this.li.each(function(i){
            if(i<num){
                $(this).css('background-position','0 -40px');
            }else{
                $(this).css('background-position','0 0');
            }
        })
    }
    Light.prototype.bindEvent = function(){
        var me = this;
        var len = me.li.length;
        me.ul.on(me.selectEvent,'.star-item',function(e){
            var $num = 0;
            me.selectStar(e,$(this));
            $num = $(this).index() + me.add;
            me.lightOn($num);
            
            (typeof me.opts.select === 'function') && me.opts.select.call(this,$num,len);
        }).on('click','.star-item',function(){
            var $num = $(this).index() + me.add;
            me.opts.num = $num;
            (typeof me.opts.choose === 'function') && me.opts.choose.call(this,$num,len);
        }).on('mouseout',function(){
            me.lightOn(me.opts.num);
        })
    }
    Light.prototype.selectStar = function(){
        throw new Error('子类必须重写此方法');
    }
    
    // 子类 --整颗星星
    var LightStar = function(el,options){
        light.call(this,el,options);
        this.selectEvent = 'mouseover';
    }
    // 继承父类原型方法
    extend(LightStar, Light);
    
    LightStar.prototype.lightOn = function(num){
        num = parseInt(num);
        //调用父类的lightOn方法，绑定到lightStar的this上
        Light.prototype.lightOn.call(this,num);
    }
    LightStar.prototype.selectStar = function(){
        this.add = 1;
    }
    
    // 子类 -- 半颗星星
    var LightStarHalf = function(el,options){
        Light.call(this,el,options);
        this.selectEvent = 'mousemove';
    }
    // 继承父类原型方法
    extend(LightStarHalf,Light);
    LightStarHalf.prototype.lightOn = function(num){
        var cur = parseInt(num);
        var isHalf = cur!==num;
        Light.prototype.lightOn.call(this,cur);
        if(ifHalf){
            this.li.eq(cur).css('background-position','0 -80px');
        }
    }
    LightStarHalf.prototype.selectStar = function(e, $this){
      // 根据鼠标的位置与元素位置进行对比，判断鼠标是否位于元素的左半边
      if(e.pageX - $this.offset().left < $this.width()/2){
          this.add = 0.5;
      }else{
          this.add = 1;
      }
    }
    
    // 封装成Jquery插件
    $.fn.extend({
      star: function(options){
        return this.each(function(){
          init(this,options);
        })
      }
    }
    
    return {
        init: init
    }
})();
  
  
  // 调用
  $('#star').star({
        mode: 'lightStarHalf',
        num: 3.6,
        select: function(){},
        choose: function(){
            $(this).parent().off();
        }
    })
