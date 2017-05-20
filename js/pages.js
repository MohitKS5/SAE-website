 
var grow_img= function grow_img(argument){
    $(argument).parent().height(500);
};
var shrink_img= function shrink_img(argument) {
    $(argument).parent().height(200);
    $(argument).children().addClass("shrunk");
};

var chng_color=function chng_color(arg) {
  $(arg).addClass('red_clr');
};
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        pausePlay: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

if($("li.indicator-item").first().hasClass('active')){
  $('li.indicator-item').addClass('glow_class');
}
else{
  $('li.indicator-item').removeClass('glow_class');
}

var secondaryNavTopPosition =$('ul.indicators').offset().top;

$(window).on('scroll', function(){
    if($(window).scrollTop() > secondaryNavTopPosition ) {
      //push the .cd-main-content giving it a top-margin
       setTimeout(function() {
        $('._navbar').fadeIn();
         $('#tabs').css(
        {
          "background-color" : "white"
        });
        $('#tabs>a').css({"color" : "black",
          "letter-spacing" : "1px",
          "font-size" : "1.2rem"
         });

        $('.soc-links').fadeIn(500);
        $('#home').css({"margin-left" : "30%"});
          }, 50);
    } else {
       setTimeout(function() {
        $('._navbar').fadeOut(0);
        $('.soc-links').fadeOut();
        $('#tabs>a').css({"font-size" : "2rem"});
          }, 50);
       
    }
  });
});
  





