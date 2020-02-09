$(function(){
    ////////////////////// SLIDE SHOW //////////////////////
    var slideNumber = 0;
    slideShow();

    function slideShow(){
        var slides = $(".slide");
        for (var i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        slideNumber++;
        if(slideNumber > slides.length){
            slideNumber = 1;
        }

        slides[slideNumber - 1].style.display = "block";
        setTimeout(slideShow, 4000);
    }

    ////////////////////// SMALL SCREEN MENU //////////////////////

    var isOpen = false;

    $('.sandwich').click(function(){
        if(isOpen){
            $('.sideMenu').fadeOut('fast', function(){
                $('.sideMenu').hide();
            });
            isOpen = false;
        } else if(!isOpen){
            $('.sideMenu').fadeIn('fast', function(){
                $('.sideMenu').show();
            });
            isOpen = true;
        }
    });

    $('.sideMenu li').click(function(){
        if(isOpen){
            $('.sideMenu').fadeOut('fast', function(){
                $('.sideMenu').hide();
            });
        }
    });

    $('.close').click(function(){
        if(isOpen){
            $('.sideMenu').fadeOut('fast', function(){
                $('.sideMenu').hide();
            });
            isOpen = false;
        }
    });

    $("form").submit(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 0);
    });
});































