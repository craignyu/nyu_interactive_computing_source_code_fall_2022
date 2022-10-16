let creatures = [];
let buffer;

function setup() {
  createCanvas(500,500);

  for (let i = 0; i < 200; i++) {
    creatures.push( new FallingObject() );
  }

  buffer = createGraphics(500,500);
  buffer.background(255);
  buffer.strokeWeight(20);
  buffer.stroke(0);
}

function draw() {
  image(buffer, 0, 0);
  if (mouseIsPressed) {
    buffer.line(mouseX, mouseY, pmouseX, pmouseY);
  }

  for (let i = 0; i < creatures.length; i++) {
    creatures[i].move();
    creatures[i].display();
  }
}

class FallingObject {
  constructor(x,y) {
    this.size = int(random(10,30));
    this.y = random(-1000,-this.size);
    this.x = random(this.size, width-this.size);
    this.speed = random(2,5);
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.y += this.speed;

    // what color is on the buffer at our position?
    // (if we are on the screen)
    if (this.y > 0 && this.y < height) {
      let c = red(buffer.get(this.x, this.y));
      if (c == 0) {
        this.speed *= -1;

        // also shrink a bit in case we get "stuck"
        this.size -= 0.5;

        // are we super small?  if so, let's reposition ourselves
        if (this.size < 0.2) {
          this.y = random(-1000,-this.size);
          this.x = random(this.size, width-this.size);
          this.speed = random(2,5);
        }
      }
    }

    // did we go off the bottom?
    // OR
    // did we go off the top with a negative speed?
    if ( (this.y > height + this.size) || (this.y < 0 && this.speed < 0) ) {
      this.y = random(-1000,-this.size);
      this.x = random(this.size, width-this.size);
      this.speed = random(2,5);
    }
  }
}

function drawMode() {
  buffer.stroke(0);
}

function eraseMode() {
  buffer.stroke(255);
}
