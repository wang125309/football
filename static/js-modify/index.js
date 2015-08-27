require("../../bower_components/zepto/zepto.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");
window.onload = function(){
    $("#loading").velocity("fadeOut");
    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    on = false;
    var clearAnimation = function(fun) {
        $(".title").hide();
        $(".sound").hide();
        $(".sub-title").hide();
        $(".main").hide();
        fun();
    };
    var firstShow = function() {
        $(".page-first .title").show();
        $(".page-first .sound").show();
    };
    var page1Show = function() {
        $(".page1 .title").show();
    };
    var page2Show = function() {
        $(".page2 .title").show();
        $(".page2 .sub-title").show();
    };
    var page3Show = function() {
        $(".page3 .title").show();
        $(".page3 .sub-title").show();
    };
    var page3Show = function() {
        $(".page3 .title").show();
        $(".page3 .sub-title").show();
    };
    var page4Show = function() {
        $(".page4 .title").show();
        $(".page4 .sub-title").show();
    };
    var page5Show = function() {
        $(".page5 .title").show();
        $(".page5 .sub-title").show();
    };
    var page6Show = function() {
        $(".page6 .title").show();
        $(".page6 .sub-title").show();
    };
    var page7Show = function() {
        $(".page7 .title").show();
        $(".page7 .sub-title").show();
        $(".page7 .main").show();
    };
    var page8Show = function() {
        $(".page8 .title").show();
        $(".page8 .sub-title").show();
        $(".page8 .main").show();
    };
    var page9Show = function() {
        $(".page9 .title").show();
        $(".page9 .sub-title").show();
        $(".page9 .main").show();
    };
    var formShow = function() {
        $(".page9 .form").show(); 
    };
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        lazyLoading:true,
        speed:500,
        onInit: function() {
            clearAnimation(firstShow);
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 0) {
                clearAnimation(firstShow);
            }
            else if(swiper.activeIndex == 1) {
                clearAnimation(page1Show);
            }
            else if(swiper.activeIndex == 2) {
                clearAnimation(page2Show);
            }
            else if(swiper.activeIndex == 3) {
                clearAnimation(page3Show);
            }
            else if(swiper.activeIndex == 4) {
                clearAnimation(page4Show);
            }
            else if(swiper.activeIndex == 5) {
                clearAnimation(page5Show);
            }
            else if(swiper.activeIndex == 6) {
                clearAnimation(page6Show);
            }
            else if(swiper.activeIndex == 7) {
                clearAnimation(page7Show);
            }
            else if(swiper.activeIndex == 8) {
                clearAnimation(page8Show);
            }
            else if(swiper.activeIndex == 9) {
                clearAnimation(page9Show);
                $(".page9 .main").on("touchstart",function(e){
                    e.preventDefault();
                    time = (new Date()).valueOf();
                });
                $(".page9 .main").on("touchend",function(e){
                    e.preventDefault();
                    interval = (new Date()).valueOf() - time;
                    if ( interval > 3000 ) {
                        clearAnimation(formShow);
                    }
                });
            }
        }
    });
}
