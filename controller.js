const createPaddle = function (document) {
	let paddle = new Paddle(20, 100, 5, 450);
	let screen = document.getElementById('screen');
	let paddleDiv = document.createElement('div');
	paddleDiv.className = 'paddle';
	paddleDiv.id = 'paddle_1';
	screen.appendChild(paddleDiv);
	screen.tabIndex = "0";
	drawPaddle(paddleDiv, paddle);
	screen.onkeydown = movePaddle.bind(null, document, paddle);
}

const addPxUnit = (value) => value + "px";

const drawPaddle = function (paddleDiv, paddle1) {
	paddleDiv.style.height = addPxUnit(paddle1.height);
	paddleDiv.style.width = addPxUnit(paddle1.width);
	paddleDiv.style.bottom = addPxUnit(paddle1.positionY);
	paddleDiv.style.left = addPxUnit(paddle1.positionX);
}

const initialise = function () {
	createPaddle(document);
}

window.onload = initialise;