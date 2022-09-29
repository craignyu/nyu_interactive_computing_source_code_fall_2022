// artwork
let artwork;

// our bee objects
let bee1, bee2;

// preload artwork
function preload() {
  artwork = loadImage("beeber.png");
}

function setup() {
  createCanvas(500, 500);

  // images should be drawn from their center points
  imageMode(CENTER);

  // create our bee objects
  bee1 = new Beeber(150, 150, "The Beebs");
  bee2 = new Beeber(350, 350, "Bieberdocious");
}

function draw() {
  background(255);

  // ask each bee to display itself
  bee1.display();
  bee2.display();

  // ask each bee to "jitter" a little bit
  bee1.jitter();
  bee2.jitter();
}

class Beeber {

  constructor (x, y, name) {
    // store our position
    this.xPos = x;
    this.yPos = y;

    // store our name
    this.name = name;
  }

  // display function
  display() {
    image(artwork, this.xPos, this.yPos);
    text(this.name, this.xPos, this.yPos + 100);
  }

  // jitter function
  jitter() {
    this.xPos += random(-1,1);
    this.yPos += random(-1,1);
  }
}
