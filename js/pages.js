 
var grow_img= function grow_img(argument){
    console.log(argument);
    $(argument).addClass("grows");
    $(argument).parent().height(500);
};
var shrink_img= function shrink_img(argument) {
   $(argument).addClass("grows");
    $(argument).parent().height(200);
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
  



