'use strict'

const positionX = document.querySelector(".mouse__position--x");
const positionY = document.querySelector(".mouse__position--y");

window.addEventListener('mousemove', (e) => {
	positionX.textContent = e.clientX;
	console.info('Cursor (X): ', e.clientX);

	positionY.textContent = e.clientY;
	console.info('Cursor (Y): ', e.clientY);
});
