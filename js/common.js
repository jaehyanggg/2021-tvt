$(function(){


$('.bars-wrapper').find('.fa-bars').click(onClickBars);
$('.bars-wrapper').find('.bi-x').click(onClickClose);

function onClickBars() {
	$('.bars-wrapper .fa-bars').hide()
	$('.bars-wrapper .bi-x').show()
	$('.bars-wrapper').css('background-color', 'lavender');
	$('.bars-wrapper .bars-wrap').show()
}

function onClickClose() {
	$('.bars-wrapper .fa-bars').show()
	$('.bars-wrapper .bi-x').hide()
	$('.bars-wrapper').css('background-color', 'transparent');
	$('.bars-wrapper .bars-wrap').hide()
}



})


