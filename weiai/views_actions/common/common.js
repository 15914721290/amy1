//懒加载
$('img.lazy').lazyload({
  placeholder:99,
  effect: 'fadeIn'
});

var win_w = function(){
  var t=this;
  t.resetW = function(){
    t.w=$(window).width();
    t.h=$(window).height();
    var m1=$('.cm_main');
    var m2=$('.cm_main2');
    if(t.w<768){
      m1.css({width:'100%'});
    }else{
      m1.css({width:'1200px'});
    }
  }
  t.resetW();
  $(window).bind('resize',function(){
    t.resetW();  
  });
}
// win_w();
var cm = new cmapp({});
cm.ck('#test',function(t){
  cm.cl('webpack222 acitons=========='+123456789);
});
cm.ck('.ck_map',function(){
  cm.cl(1111);
},4);
