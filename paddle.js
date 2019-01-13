class Paddle {
	constructor(height, width, positionY, positionX) {
		this.height = height;
		this.width = width;
		this.positionY = positionY;
		this.positionX = positionX;
	}

	moveRight() {
		this.positionX = (this.positionX + 15) % 910;
	}
	moveLeft() {
		this.positionX = this.positionX - 15;
		if (this.positionX < 0) this.positionX = 900;
	}
	moveUp() {
		this.positionY += 5;
	}
	moveDown() {
		this.positionY -= 5;
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