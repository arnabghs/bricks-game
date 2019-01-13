class Paddle {
	constructor(height, width, positionY, positionX, speed) {
		this.height = height;
		this.width = width;
		this.positionY = positionY;
		this.positionX = positionX;
		this.speed = speed;
	}

	moveRight() {
		this.positionX = (this.positionX + this.speed) % 900;
	}
	moveLeft() {
		this.positionX = this.positionX - this.speed;
		if (this.positionX < 0) this.positionX = 900;
	}
	moveUp() {
		this.positionY += this.speed;
	}
	moveDown() {
		this.positionY -= this.speed;
		if (this.positionY < 0) this.positionY = 0;
	}
}

const movePaddle = function (document, paddle) {
	let key = event.key;
	let paddleDiv = document.getElementById('paddle_1');
	if (key == 'ArrowLeft') paddle.moveLeft();
	if (key == 'ArrowRight') paddle.moveRight();
	if (key == 'ArrowUp') paddle.moveUp();
	if (key == 'ArrowDown') paddle.moveDown();
	drawPaddle(paddleDiv, paddle);
}