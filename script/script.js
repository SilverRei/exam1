$(document).ready(function(){
    // 서브
    $(".menu").mouseenter(function(){
        $(".sub_bg").css({"height":"200px","border":"none"})
        $(".sub").stop().slideDown(150)
    })
    $(".menu").mouseleave(function(){
        $(".sub_bg").css({"height":"0px"})
        $(".sub").stop().slideUp(150)
    })

    //슬라이드
    sl = 0;
    setInterval(function(){
        if(sl <= -300 ){ 
            sl = 0;
            $("#slide_wrap>.inner").css({left:sl+"%"})
        }
        sl = sl-100
        $("#slide_wrap>.inner").animate({left:sl+"%"})
    },1500)

    // 팝업
    $(".click").click(function(){
        $("#popup_bg").fadeIn()
    })
    $(".close").click(function(){
        $("#popup_bg").fadeOut()
    })
})