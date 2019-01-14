const handleCollisionOfBall = function (ball, paddle, wall, bricks, brickDivs) {
	handleCollisionWithPaddle(ball, paddle);
	handleCollisionWithWall(ball, wall);
	handleCollisionWithBricks(ball, bricks, brickDivs);
}

const handleCollisionWithPaddle = function (ball, paddle) {
	if (paddle.hasCollided(ball)) ball.toggleVerticalDirection();
}

const handleCollisionWithWall = function (ball, wall) {
	wall.handleCollision(ball);
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