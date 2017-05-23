 
var grow_img= function grow_img(argument){
  /* $(argument).css({
  "background-image" : "url('../../images/gallery/1.jpg')",
  "background-size" : "cover"
});*/
 
};
var shrink_img= function shrink_img(argument) {
   /* var $slider=$(argument).parent().parent().parent().parent();
    $(argument).parent().height(200);
    $slider.removeClass('sliderhover').addClass('slider');
    $(argument).children().addClass("shrunk");*/
};
var enablescroll=function enablescroll(arg){
  $(arg).css({
    "pointer-events" : "auto"
  }); 
}
var chng_color=function chng_color(arg) {
  $(arg).addClass('red_clr');
};
var funL=function funL($this){$($this).parent().find('a.flex-prev').trigger('click');};
var funR=function funR($this){$($this).parent().find('a.flex-next').trigger('click');};


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
  
  $('a.flex-pause').hide();
  
  var navelement2="<span onclick='funL(this)' class='navarrow L'></span>",
  navelement="<span onclick='funR(this)' class='navarrow R'></span>";
  $('.slider').prepend(navelement).prepend(navelement2);
  

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
  





