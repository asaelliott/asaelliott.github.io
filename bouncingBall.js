var balls = [];
var gravity = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 200, 250);
}

class Ball {
  constructor(ballX1, ballY1) {
    this.ballX1 = ballX1;
    this.ballY1 = ballY1;
    this.ballSpeedY1 = 0.0
  }
}

function draw() {
  background(150, 200, 250);
  fill(255, 0, 0);
  for (var i = 0; i < balls.length; i++) {

    ellipse(balls[i].ballX1, balls[i].ballY1, 20.0, 20.0);

    if (balls[i].ballY1 < windowHeight) {
      balls[i].ballSpeedY1 = balls[i].ballSpeedY1 + gravity;
      balls[i].ballY1 = balls[i].ballY1 + balls[i].ballSpeedY1
    }

    if (balls[i].ballY1 >= windowHeight) {
      balls[i].ballSpeedY1 = balls[i].ballSpeedY1 * -1 + gravity;
      balls[i].ballY1 = balls[i].ballY1 + balls[i].ballSpeedY1
    }
  }
}

function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY))
}