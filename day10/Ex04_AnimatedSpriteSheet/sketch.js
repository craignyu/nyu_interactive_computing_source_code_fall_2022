// variable to hold our sprite sheet
let spriteSheet;

// create some variables to hold our 'Sprite' objects
let sprite1, sprite2;

function preload() {
  // load in our sprite sheet
  // https://freesvg.org/flying-bird-animation (public domain)
  spriteSheet = loadImage('../_images/bird_spritesheet.png');
}

function setup() {
  createCanvas(500, 500);

  // create our animated spritesheet objects
  // params:  x, y, image, width of cell, height of cell
  sprite1 = new Sprite(width/2, height/2, 150, 100, spriteSheet);
  sprite2 = new Sprite(100, 150, 150, 100, spriteSheet);
}

function draw() {
  background(128);

  // ask our objects to display themselves
  sprite1.display();
  sprite2.display();
}

class Sprite {
  constructor(x, y, w, h, img) {

    // each Sprite knows its position, size of the animation cell
    // and source image
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;

    // compute how many frames we have by computing the overall width
    // of the sprite and dividing by the cell width
    this.totalFrames = int(this.img.width / this.w);

    // keep track of which frame / cell we are going to render
    this.currentFrame = 0;

    // a pause counter to slow down the animation (optional)
    this.pauseCounter = 0;
    this.pauseCounterMax = 3;
  }

  display() {

    // draw the image - note the use of the destination coords
    // and the soure coords
    // params:  image, dest x, dest y, dest width, dest height (normal usage)
    //          source x, source y, source width, source height
    image(this.img, this.x, this.y, this.w, this.h,
                    this.currentFrame * this.w, 0, this.w, this.h);

    // decrease our pause counter
    this.pauseCounter--;

    // if we have counted down enough we can trigger another animation
    // frame cycle
    if (this.pauseCounter <= 0) {
      this.currentFrame += 1;
      if (this.currentFrame >= this.totalFrames) {
        this.currentFrame = 0;
      }
      this.pauseCounter = this.pauseCounterMax;
    }
  }

}
