const handleCollisionOfBall = function (ball, paddle, wall, bricks, brickDivs) {
	handleCollisionWithPaddle(ball, paddle);
	handleCollisionWithWall(ball, wall);
	handleCollisionWithBricks(ball, bricks, brickDivs);
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

const handleCollisionWithBricks = function (ball, bricks, brickDivs) {
	for (index in bricks) {
		if (ball.positionY + (ball.diameter / 2) > bricks[index].positionY - 5 &&
			ball.positionY + (ball.diameter / 2) < bricks[index].positionY + bricks[index].height + 5 &&
			ball.positionX + (ball.diameter / 2) > bricks[index].positionX - 5 &&
			ball.positionX + (ball.diameter / 2) < bricks[index].positionX + bricks[index].width + 5) {
			let brick = document.getElementById(brickDivs[index].id);
			brick.parentNode.removeChild(brick);
			ball.velocity.y = (-1) * ball.velocity.y;
		}
	}
}