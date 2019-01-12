class Ball {
	constructor(height, width, positionY, positionX) {
		this.height = height;
		this.width = width;
		this.positionY = positionY;
		this.positionX = positionX;
	}

	move(speed, direction) {
		if (direction[0] == 'up') this.positionY = this.positionY + speed[0];
		if (direction[0] == 'down') this.positionY = this.positionY - speed[0];
		if (direction[1] == 'right') this.positionX = this.positionX + speed[1];
		if (direction[1] == 'left') this.positionX = this.positionX - speed[1];
	}
}

const stopBall = function (ball, intervalId) {
	if (ball.positionY < 10) clearInterval(intervalId);
}