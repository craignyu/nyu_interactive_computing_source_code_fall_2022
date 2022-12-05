// our video object
let capture;

// an image object to "memorize" the previous frame of video
let compareFrame;

// threshold to see how tolerant we should be
let threshold = 20;

// artwork
let bee;

// lots of bees!
let theBees = [];

function preload() {
  bee = loadImage('images/bee.png');
}

function setup() {
  // note that this sketch has been scaled up to 2x its normal size --
  // the code below uses a scaling factor of 2 to compare video resolution (320x240) with
  // screen resolution (640x480)
  pixelDensity(1);
  createCanvas(640, 480);

  // start up our web cam
  capture = createCapture({
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240,
        maxWidth: 320,
        maxHeight: 240
      }
    }
  });
  capture.hide();

  // create an empty image that will hold a previous frame of video
  compareFrame = createGraphics(320, 240);
  compareFrame.pixelDensity(1);

  // create our motion object
  motionObject = new MovingRegion(width / 2, height / 2, 100, 100);
}

function draw() {
  // adjust threshold based on the mouse position
  threshold = map(mouseX, 0, width, 0, 100);

  // expose the pixels on our video stream
  capture.loadPixels();
  compareFrame.loadPixels();

  // if we have some pixels to work with then we can start playing our game
  if (capture.pixels.length > 0) {

    // do we need to add a new bee?
    if (theBees.length < 10 && random(100) > 95) {
      let temp = new MovingRegion(random(width), random(height), bee.width, bee.height);
      theBees.push(temp);
    }

    // draw our video
    image(capture, 0, 0, 640, 480);

    // move all the bees
    for (let i = 0; i < theBees.length; i++) {
      theBees[i].move();
      theBees[i].checkHit();
      theBees[i].display();

      // remove old bees
      if (theBees[i].scale <= 0) {
        theBees.splice(i, 1);
        i--;
      }
    }

    // important - this frame of video becomes our comparision frame for the next iteration of 'draw'
    compareFrame.image(capture, 0, 0, 320, 240);
  }

  // display threshold
  noStroke();
  fill(255);
  rect(0,0,100,30);
  fill(0);
  text("Threshold:" + int(threshold), 10, 20);
}


class MovingRegion {
  constructor(x, y, w, h) {
    // store our working values
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // speed values
    this.xSpeed = 1;
    this.ySpeed = 2;

    // keep track of the size of our bee
    this.scale = 1;
  }

  // move this object
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // bouncing logic
    if (this.x < 0) {
      this.x = 0;
      this.xSpeed *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpeed *= -1;
    }
    if (this.x + this.w > width) {
      this.x = width - this.w;
      this.xSpeed *= -1;
    }
    if (this.y + this.h > height) {
      this.y = height - this.h;
      this.ySpeed *= -1;
    }
  }

  // display this object
  display() {
    image(bee, this.x, this.y, bee.width * this.scale, bee.height * this.scale);
  }

  // determine if this object has been hit
  checkHit() {
    // assume no motion
    let movedPixels = 0;

    // note - we have to account for the fact that the video is being scaled 2x which
    // is why we divide the position & size of the region we are looking for by 2
    for (let x = int(this.x / 2); x < int((this.x + this.w) / 2); x++) {
      for (let y = int(this.y / 2); y < int((this.y + this.h) / 2); y++) {
        // compute 1D location
        let loc = (x + y * capture.width) * 4;

        // determine if there is motion here
        if (dist(capture.pixels[loc], capture.pixels[loc + 1], capture.pixels[loc + 2], compareFrame.pixels[loc], compareFrame.pixels[loc + 1], compareFrame.pixels[loc + 2]) > threshold) {
          movedPixels += 1;
        }
      }
    }

    // if we have 20% motion then we can qualify this as a hit
    if (movedPixels / (this.w * this.h / 2) > 0.2) {
      this.scale -= 0.1;
    }
  }
}
