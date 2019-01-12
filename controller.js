const createPaddle = function (document, screen) {
	let paddle = new Paddle(20, 100, 5, 450);
	let paddleDiv = document.createElement('div');
	paddleDiv.className = 'paddle';
	paddleDiv.id = 'paddle_1';
	screen.appendChild(paddleDiv);
	drawPaddle(paddleDiv, paddle);
	screen.onkeydown = movePaddle.bind(null, document, paddle);
}

const createBall = function (document, screen) {
	let ball = new Ball(20, 20, 600, 470);
	let ballDiv = document.createElement('div');
	ballDiv.className = 'ball';
	ballDiv.id = 'ball_1';
	screen.appendChild(ballDiv);
	const keepBallMoving = function () {
		stopBall(ball, ballIntervalId);
		ball.move();
		drawBall(ballDiv, ball);
	}
	let ballIntervalId = setInterval(keepBallMoving, 10);
}

const createGame = function (document) {
	let screen = document.getElementById('screen');
	screen.tabIndex = "0";
	createPaddle(document, screen);
	createBall(document, screen);
}

const addPxUnit = (value) => value + "px";

const drawPaddle = function (paddleDiv, paddle) {
	paddleDiv.style.height = addPxUnit(paddle.height);
	paddleDiv.style.width = addPxUnit(paddle.width);
	paddleDiv.style.bottom = addPxUnit(paddle.positionY);
	paddleDiv.style.left = addPxUnit(paddle.positionX);
}

const drawBall = function (ballDiv, ball) {
	ballDiv.style.height = addPxUnit(ball.height);
	ballDiv.style.width = addPxUnit(ball.width);
	ballDiv.style.bottom = addPxUnit(ball.positionY);
	ballDiv.style.left = addPxUnit(ball.positionX);
}

const initialise = function () {
	createGame(document);
}

window.onload = initialise;