const createPaddle = function (document, screen) {
	let paddle = new Paddle(20, 100, 5, 450);
	let paddleDiv = document.createElement('div');
	paddleDiv.className = 'paddle';
	paddleDiv.id = 'paddle_1';
	screen.appendChild(paddleDiv);
	return { paddle, paddleDiv };
}

const createWall = function () {
	let wall = new Wall(0, 1000, 650);
	return wall;
}

const createBall = function (document, screen) {
	let ball = new Ball(20, 20, 600, 370, { x: 5, y: 5 });
	let ballDiv = document.createElement('div');
	ballDiv.className = 'ball';
	ballDiv.id = 'ball_1';
	screen.appendChild(ballDiv);
	return { ball, ballDiv };
}

const controlPaddle = function (document, screen, paddleDiv, paddle) {
	drawPaddle(paddleDiv, paddle);
	screen.onkeydown = movePaddle.bind(null, document, paddle);
}

const controlMovementOfBall = function (ball, ballDiv, paddle, wall) {
	const keepBallMoving = function () {
		stopBall(ball, ballIntervalId);
		ball.move();
		drawBall(ballDiv, ball);
		checkCollisionWithPaddle(ball, paddle);
		checkCollisionWithWall(ball, wall);
	}
	let ballIntervalId = setInterval(keepBallMoving, 50);
}

const startGame = function (document) {
	let screen = document.getElementById('screen');
	screen.tabIndex = "0";
	screen.focus();
	let { paddle, paddleDiv } = createPaddle(document, screen);
	let { ball, ballDiv } = createBall(document, screen);
	let wall = createWall();
	controlPaddle(document, screen, paddleDiv, paddle);
	controlMovementOfBall(ball, ballDiv, paddle, wall);
}

const checkCollisionWithPaddle = function (ball, paddle) {
	if (ball.positionY < paddle.positionY + paddle.height &&
		paddle.positionX <= ball.positionX + 15 &&
		ball.positionX <= paddle.positionX + paddle.width) {
		ball.velocity.y = (-1) * ball.velocity.y;
	}
}

const checkCollisionWithWall = function (ball, wall) {
	if (ball.positionX < wall.leftPosition) ball.velocity.x = (-1) * ball.velocity.x;
	if (ball.positionX + ball.width > wall.rightPosition) ball.velocity.x = (-1) * ball.velocity.x;
	if (ball.positionY + ball.height > wall.topPosition) ball.velocity.y = (-1) * ball.velocity.y;
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
	startGame(document);
}

window.onload = initialise;
