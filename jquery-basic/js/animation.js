$(function(){
    $('#fadeOut').on('click',function(){
        $('.box').fadeOut();
    });

    $('#fadeIn').on('click',function(){
        $('.box').fadeIn();
    });

    $('#fadeToggle').on('click',function(){
        $('.box').fadeToggle();
    })
});