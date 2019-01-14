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
	slide(key) {
		if (key == 'ArrowLeft') this.moveLeft();
		if (key == 'ArrowRight') this.moveRight();
		if (key == 'ArrowUp') this.moveUp();
		if (key == 'ArrowDown') this.moveDown();
	}
}