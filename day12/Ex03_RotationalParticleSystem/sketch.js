// create an array to hold our particles
let theParticles = [];

// global angle variable - we will send this to our particles
// to let them know how much to 'spin' by
let angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  fill(0);
  text("Particles in array: " + theParticles.length, 25, 25);
  text("Frame rate: " + frameRate(), 25, 50);

  // increase angle every time by a small amount
  angle += 0.1;

  // if the mouse is pressed we should create a particle
  if (mouseIsPressed) {
    theParticles.push( new Particle(mouseX, mouseY, angle) );
  }

  // every frame we have to draw all particles
  for (let i = 0; i < theParticles.length; i++) {
    // display the particle and ask it if it is small enough to be removed
    let result = theParticles[i].moveAndDisplay();

    // if it is super small we have to remove it from the array
    if (result == true) {
      // remove it from the array using the 'splice' function
      // this takes two arguments - the element to begin removing from the list
      // and how many elements to remove (generally we only remove 1 at a time)
      theParticles.splice(i, 1);

      // very important!  The list is now 1 element smaller!
      // so if we were on position #10 and we removed it, the Particle in position #11
      // would now be in position #10.
      // however, our 'for' loop wants to move on to position #11 since the variable i
      // is being increased by 1 each time.  We are going to nudge i down by 1 in order
      // to not miss the element in the slot that just shifted downward
      i = i - 1;
    }

  }
}

class Particle {

  constructor(startX, startY, startAngle) {
    // all particles should store their initial starting position
    this.x = startX;
    this.y = startY;

    // store our own angle
    this.angle = startAngle;

    // store our movement amount
    this.movementAmount = 0;

    // all particles should pick a random color for themselves
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);

    // all particles need a size
    this.size = 25;
  }

  // all particles need to be able to move and display themselves
  moveAndDisplay() {

    // rotate the canvas
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // move
    this.movementAmount += 2;

    // adjust size down a little bit
    this.size -= 0.2;
    this.size = constrain(this.size, 0, 25);

    // draw our particles
    fill(this.red, this.green, this.blue);
    noStroke();
    ellipse(this.movementAmount, 0, this.size, this.size);

    // restore the canvas
    pop();

    // have the function return true if the particle is so small that it can be safely removed
    if (this.size <= 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
