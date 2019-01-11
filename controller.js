const createPaddle = function () {
	let screen = document.getElementById('screen');

	let paddleDiv = document.createElement('div');
	paddleDiv.className = 'paddle';
	paddleDiv.id = 'paddle_1';
	screen.appendChild(paddleDiv);
}

const initialise = function () {
	createPaddle();
}

window.onload = initialise;