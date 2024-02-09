'use strict';

const preloader = document.querySelector('[data-preaload]');
window.addEventListener('load', () => {
	preloader.classList.add('loaded');
	preloader.body.classList.add('loaded');
});