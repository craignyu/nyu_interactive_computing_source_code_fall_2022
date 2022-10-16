let level, levelHitMap;
let currentImage;
let player;

function preload() {
  level = loadImage('level.png');
  levelHitMap = loadImage('level_hitmap.png');
}

function setup() {
  createCanvas(500,500);
  currentImage = level;
  player = new Player(100, 200);
}

function draw() {
  image(currentImage, 0, 0);
  player.move();
  player.display();
}

// toggle visiblity of the hitmap
function keyPressed() {
  if (key == 'X' || key == 'x') {
    if (currentImage == level) {
      currentImage = levelHitMap;
    }
    else {
      currentImage = level;
    }
  }
}


// player class with movement logic
class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.speed = 2;
    this.color = color(0,255,0);
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }
  computeSensors() {
    this.middleX = this.x + this.size/2;
    this.middleY = this.y + this.size/2;
    this.left = this.x - 2;
    this.right = this.x + this.size + 2;
    this.up = this.y - 2;
    this.down = this.y + this.size + 2;
  }
  move() {
    this.computeSensors();
    this.color = color(0,255,0);

    // movement logic
    if (keyIsDown(RIGHT_ARROW)) {
      // get the pixel to the right of the player
      let p = red( levelHitMap.get(this.right, this.middleY) );
      if (p == 255) {
        this.x += this.speed;
      }
      else {
        this.color = color(255,0,0);
      }
    }

    if (keyIsDown(LEFT_ARROW)) {
      // get the pixel to the left of the player
      let p = red( levelHitMap.get(this.left, this.middleY) );
      if (p == 255) {
        this.x -= this.speed;
      }
      else {
        this.color = color(255,0,0);
      }
    }

    if (keyIsDown(UP_ARROW)) {
      // get the pixel above the player
      let p = red( levelHitMap.get(this.middleX, this.up) );
      if (p == 255) {
        this.y -= this.speed;
      }
      else {
        this.color = color(255,0,0);
      }
    }

    if (keyIsDown(DOWN_ARROW)) {
      // get the pixel below the player
      let p = red( levelHitMap.get(this.middleX, this.down) );
      if (p == 255) {
        this.y += this.speed;
      }
      else {
        this.color = color(255,0,0);
      }
    }


  }
}
