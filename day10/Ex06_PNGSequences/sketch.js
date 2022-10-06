// array to hold our pokeball graphics
let pokemon = [];

// some animation sequence objects to display the sequence
let seq1, seq2, seq3, seq4;

function preload() {
  // https://www.pinterest.com/pin/409546159847195574/ (CC license)
  // split into PNGs using https://ezgif.com/split
  for (let i = 0; i <= 75; i++) {
    let filename = '../_images/pokeball_png_sequence/frame_' + nf(i, 2) + '_delay-0.03s.png';
    pokemon.push(  loadImage(filename)  );
  }
}

function setup() {
  createCanvas(800, 600);

  seq1 = new Sequence(0,0);
  seq2 = new Sequence(150, 0);
  seq3 = new Sequence(0,100);
  seq4 = new Sequence(150, 100);
}

function mousePressed() {
  seq1.checkPause();
  seq2.checkPause();
  seq3.checkPause();
  seq4.checkPause();
}


function draw() {
  background(255);

  seq1.display();
  seq2.display();
  seq3.display();
  seq4.display();
}

class Sequence {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.index = 0;
    this.paused = false;
  }
  display() {
    // display the current image in the sequence
    image(pokemon[this.index], this.x, this.y, 150, 100);

    // cycle to the next image in the sequence if we are not paused
    if (this.paused == false) {
      this.index++;
      if (this.index > pokemon.length-1) {
        this.index = 0;
      }
    }
  }
  checkPause() {
    // are we being hovered over?  if so, flip pause mode!
    if (mouseX >= this.x && mouseX <= this.x+150 && mouseY >= this.y && mouseY <= this.y+100) {
      this.paused = !this.paused;
    }
  }
}
