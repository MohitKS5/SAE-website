 
var grow_img= function grow_img(argument){
    $(argument).parent().height(500).width(5000);
};
var shrink_img= function shrink_img(argument) {
    $(argument).parent().height(200);
    $(argument).children().addClass("shrunk");
};
var chng_color=function chng_color(arg) {
  $(arg).css({"color" : "red"});
  // body...
}
   
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


/*$(".tab-content").hide();
	$(".tab-content").first().show();

	$("div.tabs li").click(function () {
	   $("div.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab-content").hide();
	   var activeTab = $(this).attr("data-id");
	   $("#" + activeTab).fadeIn(700);
	});*/

});
  



