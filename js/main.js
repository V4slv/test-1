document.addEventListener('DOMContentLoaded', function () {

	// menu
	const menuBtn = document.querySelector('.js-menu-btn');
	const menu = document.querySelector('.js-menu');
	const header = document.querySelector('.js-header');

	function menuToggle(e) {
		e.preventDefault();
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');
		document.body.classList.toggle('overlay');
		header.classList.toggle('active');
	}

	if (menu) {
		menuBtn.addEventListener('click', menuToggle);

		document.body.addEventListener('click', function (e) {
			if (e.target.classList.contains('overlay')) {
				menuToggle(e);
			}
		})
	}

	// sticky-header
	function stickyHeader() {
		if (document.documentElement.scrollTop > 1) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}
	if (header) {
		stickyHeader();
		window.addEventListener('scroll', function () {
			stickyHeader();
		});
	}

});