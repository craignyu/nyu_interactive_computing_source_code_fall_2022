// artwork
let coinArtwork;
let kittyArtwork;

// our coin array
let coins = [];

// our kitty array
let kitties = [];

// points
let points = 0;

function preload() {
  coinArtwork = loadImage('../_images/coin.png');
  kittyArtwork = loadImage('../_images/evilHelloKitty.png');
}

function setup() {
  createCanvas(500, 500);
  noiseDetail(24);

  // create lots of coins
  for (let i = 0; i < 25; i++) {
    coins.push( new Coin(random(width), random(-500,0)) );
  }

  // create a few kitties
  for (let i = 0; i < 10; i++) {
    kitties.push( new Kitty(random(width), random(-500,0)) );
  }
}

function draw() {
  fill(0);
  rect(0,0,width,height);

  // draw all of our coins
  for (let i = 0; i < coins.length; i++) {
    coins[i].move();
    coins[i].display();
  }

  // draw all of our kitties
  for (let i = 0; i < kitties.length; i++) {
    kitties[i].move();
    kitties[i].display();
  }

  // display points
  fill(255);
  textSize(25);
  text("Points: " + points, 20, 40);
}

class Coin {

  constructor(x, y) {
    // store position
    this.x = x;
    this.y = y;

    // compute a perlin noise offiset
    this.noiseOffsetX = random(0,1000);

    // display this coin
    this.display = function() {
      imageMode(CENTER);
      image(coinArtwork, this.x, this.y);
    }
  }

  // move this coin
  move() {
    // coin should always move down
    this.y += 1;

    // coin should "sway" left and right using Perlin noise
    let xMovement = map(noise(this.noiseOffsetX), 0, 1, -2, 2);
    this.x += xMovement;

    // coin should wrap around if necessary
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }

    // did the user touch the coin?
    if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      points += 1;
      this.y = random(-500, 0);
    }

    // coin should cycle around to the top of the screen, if necessary
    if (this.y > height) {
      // random position on top of the screen
      this.y = random(-500, 0);
    }

    // advance our noise offset a little bit
    this.noiseOffsetX += 0.01;
  }
}

class Kitty {

  constructor(x, y) {
    // store position
    this.x = x;
    this.y = y;

    // store our rotation
    this.rotation = random(0, 360);

    // compute a perlin noise offiset
    this.noiseOffsetX = random(0,1000);
  }

  // display this kitty
  display() {
    imageMode(CENTER);
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));
    image(kittyArtwork, 0, 0);
    pop();
    this.rotation += 1;
  }

  // move this kitty
  move() {
    // coin should always move down
    this.y += 2;

    // kitty should "sway" left and right using Perlin noise
    let xMovement = map(noise(this.noiseOffsetX), 0, 1, -2, 2);
    this.x += xMovement;

    // kitty should wrap around if necessary
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }

    // did the user touch the kitty?
    if (dist(mouseX, mouseY, this.x, this.y) < 25) {
      points -= 1;
    }

    // kitty should cycle around to the top of the screen, if necessary
    if (this.y > height) {
      // random position on top of the screen
      this.y = random(-500, 0);
    }

    // advance our noise offset a little bit
    this.noiseOffsetX += 0.01;
  }
}
