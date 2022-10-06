// variable to hold our GIF
let pokemon;

// variables to hold some objects that will control our GIF playback
let gif1, gif2, gif3, gif4;

function preload() {
  // load in our GIF
  // https://www.pinterest.com/pin/409546159847195574/ (CC license)
  pokemon = loadImage('../_images/pokeball.gif');
}

function setup() {
  createCanvas(300, 200);

  // create our objects
  gif1 = new AnimatedGIFObject(0,0,150,100,pokemon);
  gif2 = new AnimatedGIFObject(150,0,150,100,pokemon);
  gif3 = new AnimatedGIFObject(0,100,150,100,pokemon);
  gif4 = new AnimatedGIFObject(150,100,150,100,pokemon);
}

function draw() {
  background(128);

  // ask our objects to display themselves
  gif1.display();
  gif2.display();
  gif3.display();
  gif4.display();
}

class AnimatedGIFObject {
  constructor(x, y, w, h, img) {

    // each AnimatedGIFObject knows its position, size and image
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;

    // they also know what frame to display
    this.currentFrame = 0;

    // .. and whether they are paused or not
    this.paused = false;
  }

  display() {
    console.log( this.img.width, this.img.height );

    // set our frame and draw the image
    this.img.setFrame(this.currentFrame);
    image(this.img, this.x, this.y, this.w, this.h);

    // if the mouse is touching this object we can go into 'pause' mode
    if (mouseX >= this.x && mouseX <= this.x+this.w && mouseY >= this.y && mouseY <= this.y+this.h) {
      this.paused = true;
      textAlign(CENTER);
      text("PAUSED", this.x+this.w/2, this.y+this.h/4);
    }
    else {
      this.paused = false;
    }

    // as long as we aren't in 'pause' mode we should advance to the next frame of animation
    if (this.paused == false) {
      this.currentFrame += 1;
      if (this.currentFrame > this.img.numFrames() - 1) {
        this.currentFrame = 0;
      }
    }
  }

}
