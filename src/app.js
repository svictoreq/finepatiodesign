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
};
