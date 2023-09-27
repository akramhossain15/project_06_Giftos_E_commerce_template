

$(document).ready(function(){


    // menu bg changer js
    $(window).scroll(function(){
        if($(this).scrollTop()>150){
            $(".nav-bg-change").addClass("menu-bg")
        }else {
            $(".nav-bg-change").removeClass("menu-bg")
        }
    })

    //  scrollTop hide & show js script 
   $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $(".scrollTop").fadeIn(1000)
    } else {
        $(".scrollTop").fadeOut(1000)
    }
   })
})



