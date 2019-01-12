class Ball {
	constructor(height, width, positionY, positionX) {
		this.height = height;
		this.width = width;
		this.positionY = positionY;
		this.positionX = positionX;
	}

	move() {
		this.positionX = this.positionX + 3;
		this.positionY = this.positionY - 5;
	}
}

const stopBall = function (ball, intervalId) {
	if (ball.positionY < 10) clearInterval(intervalId);
}