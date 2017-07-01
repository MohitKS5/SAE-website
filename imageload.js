$(window).load(function(){
    $('img').not('.logo>img').each(function(){
        $(this).attr('src', $(this).attr('lsrc')); });
});