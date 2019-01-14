const handleCollisionOfBall = function (ball, paddle, wall) {
	handleCollisionWithPaddle(ball, paddle);
	handleCollisionWithWall(ball, wall);
}

const handleCollisionWithPaddle = function (ball, paddle) {
	if (paddle.hasCollided(ball)) ball.toggleVerticalDirection();
}

const handleCollisionWithWall = function (ball, wall) {
	wall.handleCollision(ball);
}

const handleCollisionWithBricks = function (ball, bricks) {
	for (index in bricks) {
		if (bricks[index].handleCollision(ball)) {
			return index;
		}
	}
}