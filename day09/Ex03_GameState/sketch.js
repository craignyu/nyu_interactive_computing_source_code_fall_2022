// the "state" variable will keep track of which mode our game is currently operating in
// 0 = game start
// 1 = game playing
// 2 = game end
let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // play a different portion of the game based on which state we are in
  if (state == 0) {
    gameStart();
  }
  else if (state == 1) {
    gamePlaying();
  }
  else {
    gameEnd();
  }
}

function gameStart() {
  background(255);
  fill(0);
  stroke(0);
  text("Game is in 'start' mode - click to switch to 'play' mode", 20, 20);
}

function gamePlaying() {
  background(128);
  fill(0);
  stroke(0);
  text("Game is in 'play' mode - click to switch to 'end' mode", 20, 20);
}

function gameEnd() {
  background(0);
  fill(255);
  stroke(255);
  text("Game is in 'end' mode - click to switch to 'start' mode", 20, 20);
}

function mousePressed() {
  if (state == 0) {
    // switch to state 1
    state = 1;
  }
  else if (state == 1) {
    // switch to state 2
    state = 2;
  }
  else {
    state = 0;
  }
}
