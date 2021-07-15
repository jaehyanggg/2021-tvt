$(function(){

	setCookie();

	function scrollHeader(scTop) {
		var $header = $('.header-wrapper');
		var $top = $('.bt-moving-top');
		if(scTop > 300) {
			$header.hide();
			$top.show();
		} else {
			$header.show();
			$top.hide();
		}
	}	

	$(window).scroll(onScroll).trigger('scroll');

	function onScroll(e) {
		var scTop = $(this).scrollTop();
		scrollHeader(scTop);
	}


	$('.bt-moving-top').click(onMovingTop);

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


	function setCookie() {
		var $cookieWrapper = $('.cookie-wrapper');
		var $cookieConfirm = $cookieWrapper.find('.bt-confirm');

		if($.cookie('hideCookie') === 'Y') onCloseCookie();

		function onCloseCookie() {
			$('.cookie-wrapper').hide();
		}

		function onCloseTodayCookie() {
			$.cookie('hideCookie', 'Y', { 
				expires: 1, 
				path: '/' 
			});
			onCloseCookie();
		}

		$cookieConfirm.click(onCloseTodayCookie);
	}


})


