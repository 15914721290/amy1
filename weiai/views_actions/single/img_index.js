// 轮播图
	    $('.hiSlider3').hiSlider({
	        isFlexible: true,
	        isSupportTouch: true,
	        titleAttr: function(curIdx){
	            return $('img', this).attr('alt');
	        }
	    });
        $('.hiSlider-pages').css({
            'margin-left':-$('.hiSlider-pages').width()/2
        })
	   

// 分页代码---------------------------------------------------------

    $("#pagination2").pagination({
        currentPage: 1,
        totalPage: 12,
        isShow: false,
        count: 6,
        prevPageText: "< 上一页",
        nextPageText: "下一页 >",
        callback: function(current) {
            $("#current2").text(current)
        }
    });

// 分页代码---------------------------------------------------------



