// image assets
let user_left, user_right;
let enemy_left, enemy_right;
let floor_background;
let key_graphic;

// our player
let link;

// our key
let keyObjective;

// points
let points = 0;

// our enemy
let octo;

// preload assets
function preload() {
  user_left = loadImage('images/user_left.png');
  user_right = loadImage('images/user_right.png');
  enemy_left = loadImage('images/enemy_left.png');
  enemy_right = loadImage('images/enemy_right.png');
  floor_background = loadImage('images/floor_background.jpg');
  key_graphic = loadImage('images/key_graphic.png');
}

function setup() {
  createCanvas(500, 500);

  // create our player
  link = new Player();

  // create our key
  keyObjective = new Key(100, 100);

  // create our enemy
  octo = new Enemy();

  // all images should be drawn from their center points
  imageMode(CENTER);
}

function draw() {
  // note - we are drawing all images from their center points in this sketch,
  // not their top left points
  image(floor_background, 250, 250);

  // draw points
  fill(255);
  text("Points: " + points, 20, 20);

  // ask our player to move itself
  link.move();

  // ask our player object to display itself
  link.display();

  // ask our key to display itself
  keyObjective.display();

  // see if the key hit the player
  if (keyObjective.detectHit(link.xPos, link.yPos)) {
    // give the user a point
    points += 1;
  }

  // ask our enemy to move and display itself
  octo.move();
  octo.display();

  // see if the enemy hit the player?  if so, take a point away from the player
  if (octo.detectHit(link.xPos, link.yPos)) {
    // take a point away
    points -= 1;

    // reset all players
    link.reset();
    octo.reset();
    keyObjective.reset();
  }
}

// our Player class - this class contains everything that we need to implement
// our keyboard controlled character
class Player {

  // constructor function (runs when the Player is first created)
  constructor() {
    // declare position variables
    this.xPos = 250;
    this.yPos = 250;

    // which graphic should the player be using right now?
    this.myGraphic = user_left;
  }

  // this will display our player
  display() {
    // draw our player at their current position with the correct graphic
    image(this.myGraphic, this.xPos, this.yPos);
  }

  // this will move our character
  move() {
    // figure out which key was pressed
    if (keyIsDown(LEFT_ARROW)) {
      this.xPos -= 5;
      this.myGraphic = user_left;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.xPos += 5;
      this.myGraphic = user_right;
    }
    if (keyIsDown(UP_ARROW)) {
      this.yPos -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.yPos += 5;
    }
  }

  // reset function
  reset() {
    this.xPos = 250;
    this.xPos = 250;
  }
}


// our Key class - this is our character's objective
class Key {

  constructor(x,y) {
    // store our position on the screen, based on our arguments
    this.xPos = x;
    this.yPos = y;
  }

  // display our key
  display() {
    image(key_graphic, this.xPos, this.yPos);
  }

  // detect a hit with another entity
  detectHit(x, y) {
    // use the distance formula to compute how far the key is
    // from the supplied position
    if (dist(x,y, this.xPos, this.yPos) < 50) {
      // we are close! this is a hit

      // move the key
      this.xPos = random(0,width);
      this.yPos = random(0,height);

      // tell the main program that a hit occurred
      return true;
    }
    // not close - not a hit
    return false;
  }

  // reset function
  reset() {
    this.xPos = 100;
    this.yPos = 100;
  }
}


// our enemy class
class Enemy {

  // constructor
  constructor() {
    // default the enemy to the bottom right side of the screen
    this.xPos = 400;
    this.yPos = 400;

    // which graphic should the enemy be using?
    this.myGraphic = enemy_left;

    // figure out where we want to go on the screen
    this.xDest = random(0,width);
    this.yDest = random(0,height);
  }


  // display function
  display() {
    image(this.myGraphic, this.xPos, this.yPos);
  }

  // collision function
  detectHit(x, y) {
    if (dist(x,y, this.xPos, this.yPos) < 50) {
      return true;
    }
    return false;
  }

  // reset function
  reset() {
    this.xPos = 400;
    this.yPos = 400;

    // pick a new destination too
    this.xDest = random(0,width);
    this.yDest = random(0,height);
  }

  // move function
  move() {

    // how far away from our destination are we?
    let xDistance = this.xDest - this.xPos;
    let yDistance = this.yDest - this.yPos;

    // move 2% of the way there
    this.xPos += 0.02 * xDistance;
    this.yPos += 0.02 * yDistance;

    // update graphic based on direction
    if (xDistance < 0) {
      this.myGraphic = enemy_left;
    }
    else {
      this.myGraphic = enemy_right;
    }

    // have we made it to our destination?
    if (dist(this.xPos, this.yPos, this.xDest, this.yDest) < 25) {
      // pick a new destination
      this.xDest = random(0,width);
      this.yDest = random(0,height);
    }
  }
}
