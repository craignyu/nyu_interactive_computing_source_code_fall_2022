class Player {
  constructor(x, y, world) {
    // store the player position
    this.x = x;
    this.y = y;

    // store a reference to our "world" object - we will ask the world to tell us about
    // tiles that are in our path
    this.world = world;

    // load & store our artwork
    this.artworkLeft = loadImage('tiles/link_left.png');
    this.artworkRight = loadImage('tiles/link_right.png');
    this.artworkUp = loadImage('tiles/link_up.png');
    this.artworkDown = loadImage('tiles/link_down.png');

    // assume we are pointing to the right
    this.currentImage = this.artworkRight;

    // define our speed
    this.speed = 3;
  }

  // display our player
  display() {
    imageMode(CORNER);

    // always draw the player in the center of the screen
    image(this.currentImage, width/2, height/2);
  }

  // display "sensor" positions
  displaySensor(direction) {
    fill(255);
    if (direction == "up") {
      ellipse(this.top[0], this.top[1], 20, 20);
    } else if (direction == "down") {
      ellipse(this.bottom[0], this.bottom[1], 20, 20);
    } else if (direction == "right") {
      ellipse(this.right[0], this.right[1], 20, 20);
    } else if (direction == "left") {
      ellipse(this.left[0], this.left[1], 20, 20);
    }
  }

  // set our sensor positions (computed based on the position of the character and the
  // size of our graphic)
  refreshSensors() {
    this.left = [this.x, this.y + this.currentImage.height / 2];
    this.right = [this.x + this.currentImage.width, this.y + this.currentImage.height / 2];
    this.top = [this.x + this.currentImage.width / 2, this.y];
    this.bottom = [this.x + this.currentImage.width / 2, this.y + this.currentImage.height];
  }

  // move our character
  move() {
    // refresh our "sensors" - these will be used for movement & collision detection
    this.refreshSensors();

    // see if one of our movement keys is down -- if so, we should try and move
    // note that this character responds to the following key combinations:
    // WASD
    // wasd
    // The four directional arrows
    if (keyIsDown(LEFT_ARROW) || keyIsDown(97) || keyIsDown(65)) {

      // see which tile is to our left
      var tile = this.world.getTile(this.left[0], this.left[1]);

      // is this tile solid?
      if (!this.world.isTileSolid(tile)) {
        // request that the WORLD move to the right
        this.world.moveRight(this.speed);
      }

      // change artwork
      this.currentImage = this.artworkLeft;
      this.displaySensor("left");
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(100) || keyIsDown(68)) {
      // see which tile is to our right
      var tile = this.world.getTile(this.right[0], this.right[1]);

      // is this tile solid?
      if (!this.world.isTileSolid(tile)) {
        // request that the WORLD move to the left
        this.world.moveLeft(this.speed);
      }

      // change artwork
      this.currentImage = this.artworkRight;
      this.displaySensor("right");
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(115) || keyIsDown(83)) {
      // see which tile is below us
      var tile = this.world.getTile(this.bottom[0], this.bottom[1]);

      // is this tile solid?
      if (!this.world.isTileSolid(tile)) {
        // request that the WORLD move up
        this.world.moveUp(this.speed);
      }

      // change artwork
      this.currentImage = this.artworkDown;
      this.displaySensor("down");
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(119) || keyIsDown(87)) {
      // see which tile is below us
      var tile = this.world.getTile(this.top[0], this.top[1]);

      // is this tile solid?
      if (!this.world.isTileSolid(tile)) {
        // request that the WORLD move down
        this.world.moveDown(this.speed);
      }

      // change artwork
      this.currentImage = this.artworkUp;
      this.displaySensor("up");
    }
  }
}
