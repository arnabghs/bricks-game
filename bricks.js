class Brick {
	constructor(width, height, positionX, positionY) {
		this.width = width;
		this.height = height;
		this.positionX = positionX;
		this.positionY = positionY;
	}

	isBottomEdgeTouched(object) {
		return (object.positionY + (object.diameter / 2) > this.positionY - 5);
	}

	isTopEdgeTouched(object) {
		return (object.positionY + (object.diameter / 2) < this.positionY + this.height + 5);
	}

	isLeftEdgeTouched(object) {
		return (object.positionX + (object.diameter / 2) > this.positionX - 5);
	}

	isRightEdgeTouched(object) {
		return (object.positionX + (object.diameter / 2) < this.positionX + this.width + 5);
	}

	handleCollision(object) {
		return (this.isBottomEdgeTouched(object) &&
			this.isTopEdgeTouched(object) &&
			this.isLeftEdgeTouched(object) &&
			this.isRightEdgeTouched(object));
	}
}