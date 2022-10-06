let particles = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(0, 10);
  rect(0,0,width,height);

  // if the mouse is pressed we should create a particle
  if (mouseIsPressed == true) {
    let tempParticle = new Particle(mouseX, mouseY);

    // put the particle into our array
    particles.push( tempParticle );
  }

  // draw all particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].moveAndDisplay();

    // is this particle off screen?  If so, remove it!
    if (particles[i].isOffScreen() == true) {
      particles.splice(i, 1);
      console.log("bye bye " + i);
    }
  }
}

class Particle {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;

    // compute our "type" - this will dictate how to draw this particle
    // 50% chance to be type 0, 50% chance to be type 1
    if (random(0,100) > 50) {
      this.type = 0;
    }
    else {
      this.type = 1;
    }

    // randomize speed
    this.speedX = random(-2, 2);
    while (abs(this.speedX) < 0.5) {
      this.speedX = random(-2, 2);
    }
    this.speedY = random(-2, 2);
    while (abs(this.speedY) < 0.5) {
      this.speedY = random(-2, 2);
    }

    // randomize our color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    // randomize our rotation
    this.rotation = random(0, 360);
  }

  // move and display function
  moveAndDisplay() {
    this.x += this.speedX;
    this.y += this.speedY;

    // draw this particle
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));

    fill(this.r, this.g, this.b);
    noStroke();

    if (this.type == 0) {
      ellipse(-25, 0, 10, 10);
      ellipse(25, 0, 10, 10);
    }
    else {
      rect(-25, 0, 3, 10);
      rect(25, 0, 3, 10);
    }

    pop();

    this.rotation += 1;
  }

  // see if we are off screen
  isOffScreen() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      return true;
    }
    return false;
  }
}
