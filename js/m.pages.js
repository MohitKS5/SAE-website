$('.waves-effect').on('click',function (event) {
	var b=$(this).attr('name');
	event.preventDefault();
	$('li.indicator-item:nth-child('+b+')').trigger('click');
})
