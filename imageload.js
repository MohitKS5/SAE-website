$(window).load(function(){
    $('.logo>img').each(function(){
        $(this).attr('src', $(this).attr('lsrc')); });
    $('img').each(function(){
        $(this).attr('src', $(this).attr('lsrc')); });
});