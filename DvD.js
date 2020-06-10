let w = windowWidth
let h = windowHeight
let x = 30
let y = 30
let dirX = 1
let dirY = 1
let Yspeed = Math.floor((Math.random() * 5) + 1);
let Xspeed = Math.floor((Math.random() * 5) + 1);
let r = (Math.floor((Math.random() * 255) + 1))
let g = (Math.floor((Math.random() * 255) + 1))
let b = (Math.floor((Math.random() * 255) + 1))

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  fill(r, g, b);
  ellipse(x, y, 60, 60);
  move();
  bounce();
}

function move() {
  x = x + Xspeed * dirX;
  y = y + Yspeed * dirY;
}

function bounce() {
  if (x >= w - 20) {
    x = x - Xspeed;
    dirX = dirX * -1
    r = (Math.floor((Math.random() * 255) + 1))
    g = (Math.floor((Math.random() * 255) + 1))
    b = (Math.floor((Math.random() * 255) + 1))
  }
  if (x <= 20) {
    x = x + Xspeed;
    dirX = dirX * -1
    r = (Math.floor((Math.random() * 255) + 1))
    g = (Math.floor((Math.random() * 255) + 1))
    b = (Math.floor((Math.random() * 255) + 1))
  }
  if (y >= h - 20) {
    y = y - Yspeed;
    dirY = dirY * -1
    r = (Math.floor((Math.random() * 255) + 1))
    g = (Math.floor((Math.random() * 255) + 1))
    b = (Math.floor((Math.random() * 255) + 1))
  }
  if (y <= 20) {
    y = y + Yspeed;
    dirY = dirY * -1
    r = (Math.floor((Math.random() * 255) + 1))
    g = (Math.floor((Math.random() * 255) + 1))
    b = (Math.floor((Math.random() * 255) + 1))
  }
}
