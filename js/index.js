$(function(){


	var options = {
		autoPlay: false, 
		mute: true, 
		startAt: 0,
		opacity: 1,
		showControls: true,
		showYTLogo: true,
		ratio: '16/9',
		onError: function() {
			alert('동영상을 가져오는데 에러가 발생하였습니다.')
		}
	}

	options.videoURL = '8Y5dL2XdIMo';
	options.containment = '.videos-wrap';
	$('#youtube1').YTPlayer(options);

	options.videoURL = '1oRFlwlVXvg';
	options.containment = '.videos-wrap2';
	$('#youtube2').YTPlayer(options);

	
	
	
})