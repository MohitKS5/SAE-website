/*$('.waves-effect').on('click',function (event) {
	var b=$(this).attr('name');
	event.preventDefault();
	$('li.indicator-item:nth-child('+b+')').trigger('click');
});*/

$('body').on('click',function () {
		$('#_homepre').fadeOut(1000);
});


$(document).ready(function () {
	$('.carouseld-item').not(':nth-child(1)').hide();
	// body...
})
//carousel bottom navbar navigatio controls
    $("a.waves-effect").click(function (event) {

        $(".carouseld-item").hide();
        var activeTab = $(this).text();
        console.log(activeTab);
        $("#_" + activeTab).fadeIn(700);
        var SNT =$('body').offset().top;
  
        //changing absolute body backgrounds
        //$('body').attr('class', '_b'+a);
            $('html, body').stop().animate({
              'scrollTop' : SNT
            },800);
        });