/* note: this demo requires the following:

   (1) the p5.sound.js library included in your index.html file
   (2) use of Chrome of another modern browser that supports getUserMediaStream
   (3) connection over localhost OR over https - on the i6 server you will need
       to modify your URL to load your files over https instead of https
       (i.e. http://i6.cims.nyu.edu/~foo123 -> https://i6.cims.nyu´du/~foo123)
*/

// set up a variable that connects to the user's microphone
let microphone;

// creatures array
let creatures = [];

function setup() {
  createCanvas(500,500);

  // connect to the microphone by createing a new AudioIn object
  microphone = new p5.AudioIn();

  // start the microphone (will request access to the mic from the user)
  microphone.start();

  // normalize the perlin noise curve
  noiseDetail(24);

  // create 100 creatures
  for (let i = 0; i < 100; i++) {
    creatures.push( new Creature() );
  }
}

function draw() {
  background(255);

  // ask the microphone how loud the volume is
  // this should be a number between 0.0 and 1.0
  let volume = microphone.getLevel();

  // move the creatures
  for (let i = 0; i < 100; i++) {
    creatures[i].moveAndDisplay(volume);
  }

  // map the volume to a desired range and draw a rectangle
  let size = map(volume, 0, 1, 25, 100);
  rectMode(CENTER);
  fill(random(255));
  rect(mouseX,mouseY,size,size);

  // draw our volume
  fill(0);
  text("Volume: " + volume, 25, 25);
}


// creature class (noise walker)
class Creature {

  constructor() {
    // pick a random spot
    this.x = random(0,width);
    this.y = random(0,height);

    // pick two noise offsets
    this.noiseX = random(0,1000);
    this.noiseY = random(5000,6000);

    // pick a color
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  // move and display function
  moveAndDisplay(volume) {
    // is the mouse close to me and is the volume high?
    if (dist(mouseX, mouseY, this.x, this.y) < 100 && volume > 0.1) {
      // run away!
      if (mouseX > this.x) {
        this.x -= 3;
      }
      else {
        this.x += 3;
      }
      if (mouseY > this.y) {
        this.y -= 3;
      }
      else {
        this.y += 3;
      }
    }

    // otherwise we are safe - just moe using perlin noise
    else {
      this.x += map( noise(this.noiseX), 0, 1, -3, 3);
      this.y += map( noise(this.noiseY), 0, 1, -3, 3);
    }

    // update perlin noise offsets
    this.noiseX += 0.01;
    this.noiseY += 0.01;

    // draw the creatures
    noStroke();
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, 25, 25);

    // make sure the creater stays on the screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}
