'use strict';

window.onload = function () {
	const showMenu = $('#show-menu');
	const navbar = $('nav')[0];
	const mobileNav = $('div.closed')[0];

	$(showMenu).on('click', () => {
		if ($(mobileNav).hasClass('closed')) {
			$(navbar).css('display', 'block');
			$(mobileNav).toggleClass('closed');
		} else {
			$(navbar).css('display', 'none');
			$(mobileNav).toggleClass('closed');
		}
	});

	if (screen.width > 736 && screen.width < 1025) {
		const navGallery = $('.nav-item > a')[1];
		$(navGallery).attr('href', 'javascript:void(0)');
		let visible = false;
		$(navGallery).on('click', () => {
			if (!visible) {
				$('.dropdown').css('visibility', 'visible');
				visible = true;
			} else {
				$('.dropdown').css('visibility', 'hidden');
				visible = false;
			}
		});
	}
};
