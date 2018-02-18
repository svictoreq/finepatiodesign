'use strict';

window.onload = function () {
	var showMenu = $('#show-menu');
	var navbar = $('nav')[0];
	var mobileNav = $('div.closed')[0];

	$(showMenu).on('click', function () {
		if ($(mobileNav).hasClass('closed')) {
			$(navbar).css('display', 'block');
			$(mobileNav).toggleClass('closed');
		} else {
			$(navbar).css('display', 'none');
			$(mobileNav).toggleClass('closed');
		}
	});

	if (screen.width > 736 && screen.width < 1025) {
		var navGallery = $('.nav-item > a')[1];
		$(navGallery).attr('href', 'javascript:void(0)');
		var visible = false;
		$(navGallery).on('click', function () {
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
//# sourceMappingURL=app.js.map
