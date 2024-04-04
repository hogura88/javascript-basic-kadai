$(function(){
    $('#fadeOut').on('click',function(){
        $('.box').css('opacity',0);
    });

    $('#fadeIn').on('click',function(){
        $('.box').fadeIn();
    });

    $('#fadeToggle').on('click',function(){
        $('.box').fadeToggle();
    });

    $('#slideUp').on('click',function(){
        $('.box').slideUp();
    });

    $('#slideDown').on('click',function(){
        $('.box').slideDown();
    });

    $('#slideToggle').on('click',function(){
        $('.box').slideToggle();
    })
});