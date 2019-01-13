const createPaddle = function (document, screen) {
	let paddle = new Paddle(20, 100, 5, 450, 10);
	let paddleDiv = document.createElement('div');
	paddleDiv.className = 'paddle';
	paddleDiv.id = 'paddle_1';
	screen.appendChild(paddleDiv);
	return { paddle, paddleDiv };
}

const createWall = function () {
	let wall = new Wall(0, 1002, 654);
	return wall;
}

const createBrickUnit = function (document, screen, positionX, positionY, id) {
	let brick = new Brick(50, 20, positionX, positionY);
	let brickDiv = document.createElement('div');
	brickDiv.className = 'brick';
	brickDiv.id = `brick_${id}`;
	screen.appendChild(brickDiv);
	return { brick, brickDiv };
}

const createBricks = function (document, screen) {
	let allBricks = [];
	let allBrickDivs = [];
	let positionX = 0;
	let positionY = 632;
	let id = 1;
	for (let row = 0; row < 15; row++) {
		for (let column = 0; column < 20; column++) {
			let { brick, brickDiv } = createBrickUnit(document, screen, positionX, positionY, id);
			allBricks.push(brick);
			allBrickDivs.push(brickDiv);
			drawBrick(brickDiv, brick);
			positionX += 50;
			id++;
		}
		positionY -= 20;
		positionX = 0;
	}
	return { allBricks, allBrickDivs };
}

const createBall = function (document, screen) {
	let ball = new Ball(20, 50, 460, { x: 5, y: -5 });
	let ballDiv = document.createElement('div');
	ballDiv.className = 'ball';
	ballDiv.id = 'ball_1';
	screen.appendChild(ballDiv);
	return { ball, ballDiv };
}

const addPxUnit = (value) => value + "px";

const drawPaddle = function (paddleDiv, paddle) {
	paddleDiv.style.height = addPxUnit(paddle.height);
	paddleDiv.style.width = addPxUnit(paddle.width);
	paddleDiv.style.bottom = addPxUnit(paddle.positionY);
	paddleDiv.style.left = addPxUnit(paddle.positionX);
}

const drawBall = function (ballDiv, ball) {
	ballDiv.style.height = addPxUnit(ball.diameter);
	ballDiv.style.width = addPxUnit(ball.diameter);
	ballDiv.style.bottom = addPxUnit(ball.positionY);
	ballDiv.style.left = addPxUnit(ball.positionX);
}

const drawBrick = function (brickDiv, brick) {
	brickDiv.style.height = addPxUnit(brick.height);
	brickDiv.style.width = addPxUnit(brick.width);
	brickDiv.style.bottom = addPxUnit(brick.positionY);
	brickDiv.style.left = addPxUnit(brick.positionX);
}

const controlPaddle = function (document, screen, paddleDiv, paddle) {
	drawPaddle(paddleDiv, paddle);
	screen.onkeydown = movePaddle.bind(null, document, paddle);
}

const controlMovementOfBall = function (ball, ballDiv, paddle, wall, bricks, brickDivs) {
	const keepBallMoving = function () {
		stopBall(ball, ballIntervalId);
		ball.move();
		drawBall(ballDiv, ball);
		handleCollisionOfBall(ball, paddle, wall, bricks, brickDivs);
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
	let { allBricks, allBrickDivs } = createBricks(document, screen);
	controlPaddle(document, screen, paddleDiv, paddle);
	controlMovementOfBall(ball, ballDiv, paddle, wall, allBricks, allBrickDivs);
}

const initialise = function () {
	startGame(document);
}

window.onload = initialise;