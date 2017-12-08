// 轮播图
// slideShowFn({})
$(document).ready(function(){                          
    var index=0;
    var length=$("#img img").length;
    var i=1;
    $('#next,#next a,#front,#front a').css({
        'cursor':'default'
    })
    // 键盘左右按键控制图片
    $(this).keydown(function(event){
        if(event.keyCode == 37){ 
        slideFront()
        }else if (event.keyCode == 39){ 
        slideNext() 
        } 
    })
    
    //关键函数：通过控制i ，来显示图片
    function showImg(i){
        $("#img img")
            .eq(i).stop(true,true).fadeIn(800)
            .siblings("img").hide();
            $('#content>p>span>i').html(i);
         $("#cbtn li")
            .eq(i).addClass("hov")
            .siblings().removeClass("hov");
    }
    
    function slideNext(){
        if(index >= 0 && index < length-1) {
            $('#next,#next a').css({
                'cursor':'default'
            })
             ++index;
             showImg(index);
        }else{
            $('#next,#next a').css({
                'cursor':'not-allowed'
            })
			// if(confirm("已经是最后一张,点击确定重新浏览！")){
			// 	showImg(0);
			// 	index=0;
			// 	aniPx=(length-5)*142+'px'; //所有图片数 - 可见图片数 * 每张的距离 = 最后一张滚动到第一张的距离
			// 	$("#cSlideUl ul").animate({ "left": "+="+aniPx },200);
			// 	i=1;
			// }
            // return false;
        }
        if(i<0 || i>length-5) {return false;}						  
               $("#cSlideUl ul").animate({ "left": "-=142px" },200)
               i++;
    }
     
    function slideFront(){
       if(index >= 1 ) {
            $('#front,#front a').css({
                'cursor':'default'
            })
             --index;
             showImg(index);
        }else{
            $('#front,#front a').css({
                'cursor':'not-allowed'
            })
        }
        if(i<2 || i>length+5) {return false;}
               $("#cSlideUl ul").animate({ "left": "+=142px" },200)
               i--;
    }	
        $("#img img").eq(0).show();
        $("#cbtn li").eq(0).addClass("hov");
        $("#cbtn tt").each(function(e){
            var str=(e+1)+""+length;
            $(this).html(str)
        })
    
        $(".picSildeRight,#next").click(function(){
               slideNext();
           })
        $(".picSildeLeft,#front").click(function(){
               slideFront();
           })
        $("#cbtn li").click(function(){
            index  =  $("#cbtn li").index(this);
            showImg(index);
        });	
		$("#next,#front").hover(function(){
			$(this).children("a").fadeIn();
		},function(){
			$(this).children("a").fadeOut();
		})
    })	

// 评论区域代码------------------------------------------------------------
// discussFn({})
// textarea高度自适应
    $(function () {
        $('.content').flexText();
    });
// textarea限制字数
    function keyUP(t){
        var len = $(t).val().length;
        if(len > 139){
            $(t).val($(t).val().substring(0,140));
        }
    }
// 点击评论创建评论
    $('.commentAll').on('click','.plBtn',function(){
        var myDate = new Date();
        //获取当前年
        var year=myDate.getFullYear();
        //获取当前月
        var month=myDate.getMonth()+1;
        //获取当前日
        var date=myDate.getDate();
        var h=myDate.getHours();       //获取当前小时数(0-23)
        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        if(m<10) m = '0' + m;
        var s=myDate.getSeconds();
        if(s<10) s = '0' + s;
        var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
        //获取输入内容
        var oSize = $(this).siblings('.flex-text-wrap').find('.comment-input').val();
        console.log(oSize);
        //动态创建评论模块
        oHtml = '<div class="comment-show-con clearfix"><div class="comment-show-con-img pull-left"><img src="/images/commons/03.png" alt=""></div> <div class="comment-show-con-list pull-left clearfix"><div class="pl-text clearfix"> <a href="#" class="comment-size-name">David Beckham : </a> <span class="my-pl-con">&nbsp;'+ oSize +'</span> </div> <div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"><a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">666</i>)</a> </div> </div><div class="hf-list-con"></div></div> </div>';
        if(oSize.replace(/(^\s*)|(\s*$)/g, "") != ''){
            $(this).parents('.reviewArea ').siblings('.comment-show').prepend(oHtml);
            $(this).siblings('.flex-text-wrap').find('.comment-input').prop('value','').siblings('pre').find('span').text('');
        }
    });
// 点击回复动态创建回复块
    $('.comment-show').on('click','.pl-hf',function(){
        //获取回复人的名字
        var fhName = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        //回复@
        var fhN = '回复@'+fhName;
        //var oInput = $(this).parents('.date-dz-right').parents('.date-dz').siblings('.hf-con');
        var fhHtml = '<div class="hf-con pull-left"> <textarea class="content comment-input hf-input" placeholder="" onkeyup="keyUP(this)"></textarea> <a href="javascript:;" class="hf-pl">评论</a></div>';
        //显示回复
        if($(this).is('.hf-con-block')){
            $(this).parents('.date-dz-right').parents('.date-dz').append(fhHtml);
            $(this).removeClass('hf-con-block');
            $('.content').flexText();
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.pre').css('padding','6px 15px');
            //console.log($(this).parents('.date-dz-right').siblings('.hf-con').find('.pre'))
            //input框自动聚焦
            $(this).parents('.date-dz-right').siblings('.hf-con').find('.hf-input').val('').focus().val(fhN);
        }else {
            $(this).addClass('hf-con-block');
            $(this).parents('.date-dz-right').siblings('.hf-con').remove();
        }
    });
// 评论回复块创建
    $('.comment-show').on('click','.hf-pl',function(){
        var oThis = $(this);
        var myDate = new Date();
        //获取当前年
        var year=myDate.getFullYear();
        //获取当前月
        var month=myDate.getMonth()+1;
        //获取当前日
        var date=myDate.getDate();
        var h=myDate.getHours();       //获取当前小时数(0-23)
        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        if(m<10) m = '0' + m;
        var s=myDate.getSeconds();
        if(s<10) s = '0' + s;
        var now=year+'-'+month+"-"+date+" "+h+':'+m+":"+s;
        //获取输入内容
        var oHfVal = $(this).siblings('.flex-text-wrap').find('.hf-input').val();
        console.log(oHfVal)
        var oHfName = $(this).parents('.hf-con').parents('.date-dz').siblings('.pl-text').find('.comment-size-name').html();
        var oAllVal = '回复@'+oHfName;
        if(oHfVal.replace(/^ +| +$/g,'') == '' || oHfVal == oAllVal){

        }else {
            // $.getJSON("json/pl.json",function(data){
            //     var oAt = '';
            //     var oHf = '';
            //     $.each(data,function(n,v){
            //         delete v.hfContent;
            //         delete v.atName;
            //         var arr;
            //         var ohfNameArr;
            //         if(oHfVal.indexOf("@") == -1){
            //             data['atName'] = '';
            //             data['hfContent'] = oHfVal;
            //         }else {
            //             arr = oHfVal.split(':');
            //             ohfNameArr = arr[0].split('@');
            //             data['hfContent'] = arr[1];
            //             data['atName'] = ohfNameArr[1];
            //         }

            //         if(data.atName == ''){
            //             oAt = data.hfContent;
            //         }else {
            //             oAt = '回复<a href="#" class="atName">@'+data.atName+'</a> : '+data.hfContent;
            //         }
            //         oHf = data.hfName;
            //     });

            //     var oHtml = '<div class="all-pl-con"><div class="pl-text hfpl-text clearfix"><a href="#" class="comment-size-name">我的名字 : </a><span class="my-pl-con">'+oAt+'</span></div><div class="date-dz"> <span class="date-dz-left pull-left comment-time">'+now+'</span> <div class="date-dz-right pull-right comment-pl-block"> <a href="javascript:;" class="removeBlock">删除</a> <a href="javascript:;" class="date-dz-pl pl-hf hf-con-block pull-left">回复</a> <span class="pull-left date-dz-line">|</span> <a href="javascript:;" class="date-dz-z pull-left"><i class="date-dz-z-click-red"></i>赞 (<i class="z-num">666</i>)</a> </div> </div></div>';
            //     oThis.parents('.hf-con').parents('.comment-show-con-list').find('.hf-list-con').css('display','block').prepend(oHtml) && oThis.parents('.hf-con').siblings('.date-dz-right').find('.pl-hf').addClass('hf-con-block') && oThis.parents('.hf-con').remove();
            // });
        }
    });
// 删除评论块
    $('.commentAll').on('click','.removeBlock',function(){
        var oT = $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con');
        if(oT.siblings('.all-pl-con').length >= 1){
            oT.remove();
        }else {
            $(this).parents('.date-dz-right').parents('.date-dz').parents('.all-pl-con').parents('.hf-list-con').css('display','none')
            oT.remove();
        }
        $(this).parents('.date-dz-right').parents('.date-dz').parents('.comment-show-con-list').parents('.comment-show-con').remove();

    })
// 点赞
    $('.comment-show').on('click','.date-dz-z',function(){
        var zNum = $(this).find('.z-num').html();
        if($(this).is('.date-dz-z-click')){
            zNum--;
            $(this).removeClass('date-dz-z-click red');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').removeClass('red');
        }else {
            zNum++;
            $(this).addClass('date-dz-z-click');
            $(this).find('.z-num').html(zNum);
            $(this).find('.date-dz-z-click-red').addClass('red');
        }
    })



    // 评论区域代码------------------------------------------------------------














