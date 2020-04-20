
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
          $(".navbar").css("background-color", "#C3D9EB");
        // $(".navbar").css({background:'linear-gradient(45deg,#CBDEED,#CBDEED)'});
          $(".nav-link-4").css("color", "#111");
          $(".nav-link-5").css("color", "#111");
          $(".nav-link-6").css("color", "#111");
          $(".nav-link-7").css("color", "#111");
          $(".nav-link-8").css("color", "#111");     
        }
         
        else{
            $(".navbar").css("background-color" , "white");
            // $(".navbar").css({background:'linear-gradient(45deg,white,#3880bb)'});
            $(".nav-link-4").css("color", "#111");
            $(".nav-link-5").css("color", "#111");
            $(".nav-link-6").css("color", "#111");
            $(".nav-link-7").css("color", "#111");
            $(".nav-link-8").css("color", "#111");

        }
     
    })
  })
