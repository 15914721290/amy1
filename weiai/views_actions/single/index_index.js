//调用components/index_head.js组件
index_head();
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
cm.ck('#foot_friend>div',function(t){
    t.addClass('cm_b1c1 cm_c1c').removeClass('cm_b1cf cm_c1f').siblings().addClass('cm_b1cf cm_c1f').removeClass('cm_b1c1 cm_c1c');
    $('#foot_friend_list>div').eq(t.index()).removeClass('cm_dn').siblings().addClass('cm_dn');
},4);