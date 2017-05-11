 
var grows= function grows(){
	};

var shrink= function shrink(argument) {
	$(argument).stop().addClass("shrink");
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
  



