// position for our character
let characterX = 250;
let characterY = 250;
let characterSize = 50;

// drag mode (for dragging and dropping)
let dragMode = false;

function setup() {
  createCanvas(500, 500);

  // check localStorage - we may have to move the character to another
  // spot based on where the user put it the last time they visited the page
  let pX = window.localStorage.getItem('characterX');
  let pY = window.localStorage.getItem('characterY');

  // if both values exist (i.e. they aren't null) use this a the character position
  if (pX && pY) {
    characterX = pX;
    characterY = pY;
  }
}

function draw() {
  background(0);

  // are we in drag mode?  if so, move the character to the mouse position
  if (dragMode) {
    characterX = mouseX;
    characterY = mouseY;
  }

  // are we hovering over the character?
  if ( dist(mouseX, mouseY, characterX, characterY) < characterSize/2 ) {
    fill(0,255,0);
  }
  else {
    fill(255);
  }

  ellipse(characterX, characterY, characterSize, characterSize);
}

function mousePressed() {
  // are we touching the mouse?
  if (dist(mouseX, mouseY, characterX, characterY) < characterSize/2 ) {
    // enter drag mode
    dragMode = true;
  }
}

function mouseReleased() {
  // drop out of drag mode
  dragMode = false;

  // store the character's x & y position so we can reposition it here
  // the next time the user visits the page
  window.localStorage.setItem('characterX', characterX);
  window.localStorage.setItem('characterY', characterY);
}
