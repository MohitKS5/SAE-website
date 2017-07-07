$(window).load(function(){
    $('img').not('.logo>img,img.nope').each(function(){
            $(this).attr('src', "https://res.cloudinary.com/imagelibraryfsae/image/upload/v1498843998" + $(this).attr('lsrc'));
    });
});