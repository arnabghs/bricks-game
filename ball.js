class Ball {
	constructor(diameter, positionY, positionX, velocity) {
		this.diameter = diameter;
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