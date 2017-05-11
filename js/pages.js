 
var grows= function grows(){
	};

var shrink= function shrink(argument) {
	$(argument).stop().addClass("shrink");
};

/*count=1;
function counter() {
		count=(count+1)%3;
		return count;
	};
	function counterrev(argument) {
		count=(count+2)%3;
	};
$(window).load(function(){
	
	
		$(".subs> div:gt(0)").hide();
		$('.righty').click(function(){
			alert(count);
		
			$('.persons:nth-of-type('+count+')').fadeOut(1000).next(".persons").fadeIn(1000);
			count=counter();
			
		});

		$('.lefty').click(function(){
			alert(count);
			$('.persons:nth-of-type(3)').fadeOut(1000).prev(".persons").fadeIn(1000);
		});
});

*/
   
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
    });
  



