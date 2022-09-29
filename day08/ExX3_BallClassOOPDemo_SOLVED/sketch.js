// create three variables to hold our "Ball" objects
let myBall;
let fred;
let george;

function setup() {
  createCanvas(500,500);

  // call the Ball constructor function along with the "new" keyword
  // this causes JavaScript to call the constructor function and return
  // a copy of the function that can be stored in the variable myBall
  myBall = new Ball(250, 250);
  fred = new Ball(100, 100);
  george = new Ball(300, 300);
}

function draw() {
  background(255);

  // ask each ball to move and display itself
  myBall.move();
  myBall.display();

  fred.move();
  fred.display();

  george.move();
  george.display();

}

// Our Ball 'class' - this is a 'blueprint' of how we should organize a new
// JavaScript object to model a bouncing Ball. This is not an object!  It's a series
// of descriptive directons that tells JavaScript how to build an object.
class Ball {

  // our 'constructor' function - this function runs one time when
  // we build a new 'Ball' object
  constructor(x, y) {

    // store the position for this Ball
    this.xPos = x;
    this.yPos = y;

    // define a speed for this ball (randomly)
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);

    // each ball should randomize its colors
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  // this function can be used to draw this ball at the correct spot
  display() {
    // draw the ball using its own colors, at its own position
    fill(this.r, this.g, this.b);
    ellipse(this.xPos, this.yPos, 50, 50);
  }


  // this function can be used to move the ball
  move() {
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
    if (this.xPos > width || this.xPos < 0) {
      // increase speed a little bit
      this.xSpeed *= -1.08;
    }
    if (this.yPos > height || this.yPos < 0) {
      // increase speed a little bit
      this.ySpeed *= -1.08;
    }
  }
}
