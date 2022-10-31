// 0 = game pause
// 1 = game playing
// 2 = game over
let state = 0;

// timekeeping
let timer;

// scoring
let points = 0;

// player position
let playerX;

// container for ball objects
let balls = [];

function setup() {
  createCanvas(800,600);
  background(0);

  // create initial particle system of ball objects
  for (let i = 0; i < 100; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0);

  // game pause
  if (state == 0) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Click here and hit any key to play", width/2, height/2);
  }
  // game playing
  else if (state == 1) {

    // move balls
    for (let i = 0; i < balls.length; i++) {
      balls[i].moveAndDisplay();
    }

    // scoring
    textSize(20);
    textAlign(LEFT);
    fill(255);
    text("Points: " + points, 10, 20);

    // timer
    let timeRemaining = 20 - int((millis() - timer) / 1000);
    text("Time Remaining: " + timeRemaining, 10, 40);

    // move player
    if (keyIsDown(LEFT_ARROW)) {
      playerX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      playerX += 5;
    }
    playerX = constrain(playerX, 50, width-50);

    // draw player
    fill(200);
    rectMode(CENTER);
    rect(playerX, 580, 100, 40);

    // time to end?
    if (timeRemaining <= 0) {
      state = 2;
    }
  }
  // game over
  else if (state == 2) {
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Game over! Click to play again. Points: " + points, width/2, height/2);
  }
}

function keyPressed() {
  // transition between game states
  if (state == 0 || state == 2) {
    state = 1;
    timer = millis();
    playerX = width/2;
    points = 0;
    for (let i = 0; i < balls.length; i++) {
      balls[i].reset();
    }
  }
}

// ball class
class Ball {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = random(width);
    this.y = random(-500, 0);
    this.color = color(random(255), random(255), random(255));
    this.speed = random(1,5);
  }
  moveAndDisplay() {
    this.y += this.speed;
    if (this.x >= playerX && this.x <= playerX+100 && this.y >= 550) {
      points++;
      this.reset();
    }
    if (this.y > height) {
      this.reset();
    }
    fill(this.color);
    ellipse(this.x, this.y, 25, 25);
  }
}
