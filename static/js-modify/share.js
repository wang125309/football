$(function(){
    $.post("/wx/portal/wxconfig/",{
		"url":location.href
	},function(data){
		wx.config(data);
		wx.ready(function(){
			wx.onMenuShareTimeline({
                link:"http://football.qingdianer.com",
                imgUrl:"http://football.qingdianer.com/static/image/share-image.jpg",
                title:"呐喊吧！为中国队加油！",
			});
			wx.onMenuShareAppMessage({
                link:"http://football.qingdianer.com",
                imgUrl:"http://football.qingdianer.com/static/image/share-image.jpg",
                title:"呐喊吧！为中国队加油！",
			});
        });
		wx.error(function(res){
			$.get("/wx/portal/update_access_token/",function(data){
				$.post("/wx/portal/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
                        wx.onMenuShareTimeline({
                            link:"http://football.qingdianer.com",
                            imgUrl:"http://football.qingdianer.com/static/image/share-image.jpg",
                            title:"呐喊吧！为中国队加油！",
                            desc:"呐喊吧！球迷君！喊出你的最强者，为中国队空中加油！更有足球装备等你来赢！不吝铁肺，放胆来试！"
                        });
                        wx.onMenuShareAppMessage({
                            link:"http://football.qingdianer.com",
                            imgUrl:"http://football.qingdianer.com/static/image/share-image.jpg",
                            title:"呐喊吧！为中国队加油！",
                            desc:"呐喊吧！球迷君！喊出你的最强者，为中国队空中加油！更有足球装备等你来赢！不吝铁肺，放胆来试！"
                        });
		            });
		        });
		    });
        });
    });
});
