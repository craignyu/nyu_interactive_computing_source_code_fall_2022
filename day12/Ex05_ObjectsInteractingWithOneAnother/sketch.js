let creatures = [];
let projectiles = [];

function setup() {
  createCanvas(500,500);
  background(0);
  noCursor();
  noiseDetail(24);

  for (let i = 0; i < 100; i++) {
    creatures.push( new NoiseWalker(random(width), random(0, height-100)));
  }
}


function draw() {
  background(0, 30);

  for (let i = 0; i < creatures.length; i++) {
    creatures[i].move();
    creatures[i].display();
  }

  // draw the player
  fill(128);
  rectMode(CENTER);
  rect(mouseX, height-25, 20, 50);

  // display all projectiles
  for (let i = 0; i < projectiles.length; i++) {
    let offScreen = projectiles[i].move();
    let hitSomething = projectiles[i].checkCollision();
    if (offScreen || hitSomething) {
      // remove this projectile
      projectiles.splice(i, 1);
      i--;
      continue;
    }
    projectiles[i].display();
  }
}

// do we need to add a new projectile?
function mousePressed() {
  projectiles.push( new Projectile(mouseX, height-25) );
}


class Projectile {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.speed = -4; // projectiles always move in the y direction only
  }

  move() {
    this.y += this.speed;

    // did we go off screen?
    if (this.y < 0) {
      return true;
    }
    return false;
  }

  display() {
    fill(0,255,0);
    ellipse(this.x, this.y, 10, 10);
  }

  checkCollision() {
    // iterate over all creatures
    for (let i = 0; i < creatures.length; i++) {
      // how far are we from a creature?
      let d = dist(this.x, this.y, creatures[i].x, creatures[i].y);

      if (d < 20) {
        // collision!  remove the creature and communicate back
        // that this projectile has hit something
        creatures.splice(i, 1);
        return true;
      }
    }

    // otherwise we hit nothing - return false
    return false;
  }

}


class NoiseWalker {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.noiseOffsetX = random(1000);
    this.noiseOffsetY = random(1000,2000);
    this.size = 30;
  }

  move() {
    let xMove = map( noise(this.noiseOffsetX), 0, 1, -3, 3 );
    let yMove = map( noise(this.noiseOffsetY), 0, 1, -3, 3 );
    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.02;

    this.x += xMove;
    this.y += yMove;

    // constrain the NoiseWalker to the top of the screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height-100);
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);

  }




}
