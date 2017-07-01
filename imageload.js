$(window).load(function() {
    $('.logo>img').each(function () {
        $(this).attr('src', $(this).attr('lsrc')).fadeIn(1000, function () {// will first fade in the logos
            $('img').each(function () {
                $(this).attr('src', $(this).attr('lsrc'));// will fade in other images
            });
        });
    });
});