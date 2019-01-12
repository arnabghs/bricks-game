const handleCollisionOfBall = function (ball, paddle, wall) {
	handleCollisionWithPaddle(ball, paddle);
	handleCollisionWithWall(ball, wall);
}

const handleCollisionWithPaddle = function (ball, paddle) {
	if (ball.positionY < paddle.positionY + paddle.height &&
		paddle.positionX <= ball.positionX + ball.diameter &&
		ball.positionX <= paddle.positionX + paddle.width) {
		ball.velocity.y = (-1) * ball.velocity.y;
	}
}

const handleCollisionWithWall = function (ball, wall) {
	if (ball.positionX < wall.leftPosition) ball.velocity.x = (-1) * ball.velocity.x;
	if (ball.positionX + ball.diameter > wall.rightPosition) ball.velocity.x = (-1) * ball.velocity.x;
	if (ball.positionY + ball.diameter > wall.topPosition) ball.velocity.y = (-1) * ball.velocity.y;
}
