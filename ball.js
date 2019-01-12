class Ball {
	constructor(height, width, positionY, positionX, velocity) {
		this.height = height;
		this.width = width;
		this.positionY = positionY;
		this.positionX = positionX;
		this.velocity = velocity;
	}

	move() {
		this.positionY = this.positionY - this.velocity.y;
		this.positionX = this.positionX - this.velocity.x;
	}
}

const stopBall = function (ball, intervalId) {
	if (ball.positionY < 10) clearInterval(intervalId);
}