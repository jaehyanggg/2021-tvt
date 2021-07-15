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

	
	function onModal() {
		$('.modal-wrapper').show();
	}

	function onModalClose() {
		$('.modal-wrapper').hide();
	}

	$('.music-wrapper img').click(onModal);
	$('.music-wrapper .albumtitle').click(onModal);
	$('.music-wrapper .preorder').click(onModal);
	$('.modal-wrapper').click(onModalClose);
	$('.modal-wrapper').find('.bt-close').click(onModalClose);


	function Gallery(parent, imgs) {
		this.$parent = $(parent);
		this.imgs = imgs;
		var obj = this;
		var html = '';
		html += '<div class="gallery-wrapper">';
		html += '<div class="img-wrap">';
		html += '<img src="" alt="big" class="w-100">';
		html += '</div>';
		html += '<div class="thumb-wrap">';
		for(var i=0; i<this.imgs.length; i++) {
			html += '<div class="thumb">';
			html += '<img src="'+imgs[i].src+'" alt="thumb" class="w-100">';
			html += '</div>';
		}
		html += '</div>';
		html += '</div>';
		this.$photosWrapper = $(html).appendTo(this.$parent);
		
		this.$photosWrapper.find('.thumb').click(function() {
			var idx = $(this).index();
			$('.introduce-wrapper').find('h1').text(obj.imgs[idx].name);
			$('.introduce-wrapper').find('h2').text(obj.imgs[idx].role);
			$('.introduce-wrapper').find('h3 span').text(obj.imgs[idx].insta);

			var src = $(this).find('img').attr('src');
			$(this).parent().prev().find('img').attr('src', src);
		});
		
		// 시작하자마자 0번째 그림 클릭되어있게
		this.$photosWrapper.find('.thumb').eq(0).trigger('click');
		return this;
	}
	

	var gallery = new Gallery('.photos-wrapper', [ 
		{ src:'../img/3.png', name: 'Yerin Baek', role: 'Vocals and Guitar' ,insta: '@yerin_the_genuine'},
		{ src:'../img/4.png', name: 'Cloud', role: 'Bass Guitar', insta: '@cloudkoh_'},
		{ src:'../img/2.png', name: 'Jonny', role: 'Guitar', insta: '@kwakjonny'},
		{ src:'../img/1.png', name: 'Chiheon Kim', role: 'Drum', insta: '@choooney'}
 	]);

	
	
})