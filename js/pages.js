/*INDEX:search these for navigation
 //preloader
 //carousel home tab
 //flexslider members page
 //bring to home on reload
 //add controllers for nav through slider in members page
 //blinking on home page
 //bring navbar when window crosses the 1st screen
 //navbar navigation controls
 //carousel bottom navbar navigatio controls
 home tab restrinct scrollvar
 */
grow_img = function grow_img(argument) {
    $(argument).parent().find('.navarrow').animate({}, 1);
    console.log($(argument).prev());
};

var shrink_img = function shrink_img(argument) {
    $(argument).parent().find('.navarrow').animate({
        opacity: '0'
    }, 1);
};

var move_to_top = function move_to_top() {
    $('li.indicator-item').first().trigger('click');
};

var enablescroll = function enablescroll() {
    $('#map').removeClass('clicked');
};

var chng_color = function chng_color(arg) {
    $(arg).addClass('red_clr');
};

var funL = function funL($this) {
    $($this).parent().find('a.flex-prev').trigger('click');
};
var funR = function funR($this) {
    $($this).parent().find('a.flex-next').trigger('click');
};

$(document).ready(function () {
    //images load
    

    //preloader
    $(document).scrollTop(0);
    $("#loader").delay(3500).fadeOut(1000, function () {// will first fade out the loading animation
        $("#loader-wrapper").fadeOut(1000);// will fade out the whole DIV that covers the website.
    });

    //carousel home tab
    $("#_homepagecarousel>img:not(:nth-child(1))").hide();//hide all except 1st
    setInterval(function () {
        $('#_homepagecarousel > img:first')
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo('#_homepagecarousel');
    }, 3000);
});
//flexslider members page
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        pausePlay: true,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    $('a.flex-pause').hide();//hide pause button

    //add controllers for nav through slider in members page
    var navelement2 = "<span onclick='funL(this)' class='navarrow L'></span>",
        navelement = "<span onclick='funR(this)' class='navarrow R'></span>";
    $('.slider').prepend(navelement).prepend(navelement2);

    //blinking on home page
    if ($("li.indicator-item").first().hasClass('active')) {
        $('li.indicator-item').addClass('glow_class');
    }
    else {
        $('li.indicator-item').removeClass('glow_class');
    }
//bring navbar when window crosses the 1st screen
    var secondaryNavTopPosition = $('ul.indicators').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > secondaryNavTopPosition) {
            setTimeout(function () {
                $('._navbar').fadeIn();
                $('body').css({
                    // "background-image" : "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))"
                });
                $('#tabs').css({
                    "background-color": "white"
                });
                $('#tabs>a').css({
                    "color": "black",
                    "letter-spacing": "1px",
                    "font-size": "1.2rem"
                });

                $('.soc-links').fadeIn(500);
                $('#home').css({"margin-left": "30%"});
            }, 50);
        }
        else {
            setTimeout(function () {
                $('body').css({
                    // "background-image" : "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))"
                });
                $('._navbar').fadeOut(0);
                $('.soc-links').fadeOut();
                $('#tabs>a').css({"font-size": "2rem"});
            }, 50);

        }
    });


//navbar navigation controls
    $("#tabs>a").click(function (event) {
        var wind_height = $(window).height();
        event.preventDefault();
        var a = $(this).html();
        $('li.indicator-item:contains(' + a + ')').trigger('click');
    });
//carousel bottom navbar navigatio controls
    $("li.indicator-item").click(function (event) {
        var wind_height = $(window).height();
        var a = $(this).html();
        $(".tab-content").hide();
        var activeTab = $(this).html();
        $("#_" + activeTab).fadeIn(700);
        var SNTPosition = $('ul.indicators').offset().top;
        $('#map').addClass('clicked');
        //changing absolute body backgrounds
        $('body').attr('class', '_b' + a);
        if (a === 'home') {
            $('li.indicator-item').addClass('glow_class');
        }
        else {
            $('li.indicator-item').removeClass('glow_class');
            $('body').css({"overflow-y": "scroll"});
            if (($(window).scrollTop() > SNTPosition)) {
                $('html, body').stop().animate({
                    'scrollTop': wind_height
                }, 800);
            } else {

                setTimeout(function () {

                    $('html, body').stop().animate({
                        'scrollTop': wind_height
                    }, 800);
                }, 1000);
            }
        }
    });
//home tab restrinct scroll
    $("#tabs>a").first().click(function (event) {
        event.preventDefault();
        window.scrollTo(0, 0);
        $('body').css({"overflow": "hidden"});
    });

    $("li.indicator-item").first().click(function () {
        window.scrollTo(0, 0);
        $('body').css({"overflow": "hidden"});
    });

});