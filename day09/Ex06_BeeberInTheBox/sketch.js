// our artwork
let up, down;

// a bieber in the box object
let beebs;

// preload artwork
function preload() {
  up = loadImage("images/up.png");
  down = loadImage("images/down.png");
}

function setup() {
  createCanvas(500, 500);

  // construct our object
  beebs = new BieberInTheBox(250, 250);
}

function draw() {
  background(0);

  // ask our object to display itself
  beebs.display();
}

class BieberInTheBox {

  constructor (x, y) {
  // store position
    this.xPos = x;
    this.yPos = y;

    // store state
    // 0 = in the box
    // 1 = out of the box
    this.state = 0;

    // how many frames should our object stay in this state?
    this.framesToStayInState = int(random(100, 200));

    // how may frames have we been in this state?
    this.framesInState = 0;
  }

  // our display function (does everything including handle state changes)
  display() {
    // draw the correct graphic to the screen
    imageMode(CENTER);
    if (this.state == 0) {
      image(down, this.xPos, this.yPos);
    }
    else {
      image(up, this.xPos, this.yPos);
    }

    // draw our state information (for debugging)
    fill(255);
    text("State: " + this.state, this.xPos, this.yPos + 200);
    text("Frames In State: " + this.framesInState, this.xPos, this.yPos + 220);
    text("Frames to Stay in State: " + this.framesToStayInState, this.xPos, this.yPos + 240);

    // handle state changes
    this.framesInState += 1;

    // should we move into the next state?
    if (this.framesInState >= this.framesToStayInState) {
      // time to switch!
      if (this.state == 0) {
        this.state = 1;
      }
      else {
        this.state = 0;
      }

      // reset time in state
      this.framesInState = 0;

      // pick a new amount of time to stay in this new state
      this.framesToStayInState = int(random(100,200));
    }
  }
}
