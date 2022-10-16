// create an array to hold our particles
let theParticles = [];

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  fill(0);
  text("Particles in array: " + theParticles.length, 25, 25);
  text("Frame rate: " + frameRate(), 25, 50);

  // if the mouse is pressed we should create a particle
  if (mouseIsPressed) {
    theParticles.push( new Particle(mouseX, mouseY) );
  }

  // every frame we have to draw all particles
  for (let i = 0; i < theParticles.length; i++) {
    theParticles[i].moveAndDisplay();
  }
}

class Particle {

  constructor(startX, startY) {
    // all particles should store their initial starting position
    this.x = startX;
    this.y = startY;

    // all particles should pick a random color for themselves
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);

    // all particles need a size
    this.size = 25;

    // all particles should pick a random speed
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-3,3);
  }

  // all particles need to be able to move and display themselves
  moveAndDisplay() {
    // move
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // adjust size down a little bit
    this.size -= 0.2;
    this.size = constrain(this.size, 0, 25);

    // draw our particles
    fill(this.red, this.green, this.blue);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
