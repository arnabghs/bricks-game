class Wall {
	constructor(left, right, top) {
		this.leftPosition = left;
		this.rightPosition = right;
		this.topPosition = top;
	}

	isCollidingWithLeftWall(collidingObject) {
		return collidingObject.positionX < this.leftPosition;
	}

	isCollidingWithRightWall(collidingObject) {
		return collidingObject.positionX + collidingObject.diameter > this.rightPosition;
	}

	isCollidingWithTopWall(collidingObject) {
		return collidingObject.positionY + collidingObject.diameter > this.topPosition;
	}

	bounceFromLeftWall(collidingObject) {
		if (this.isCollidingWithLeftWall(collidingObject)) collidingObject.toggleHorizontalDirection();
	}

	bounceFromRightWall(collidingObject) {
		if (this.isCollidingWithRightWall(collidingObject)) collidingObject.toggleHorizontalDirection();
	}

	bounceFromTopWall(collidingObject) {
		if (this.isCollidingWithTopWall(collidingObject)) collidingObject.toggleVerticalDirection();
	}

	handleCollision(collidingObject) {
		this.bounceFromLeftWall(collidingObject);
		this.bounceFromRightWall(collidingObject);
		this.bounceFromTopWall(collidingObject);
	}
}