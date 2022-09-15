// position for our button
let buttonX, buttonY;

// keep track of # of presses
let presses = 0;

function setup() {
  createCanvas(500, 500);

  // set the location for our button
  buttonX = 200;
  buttonY = 200;
}

function draw() {
  background(128);

  // report out button presses
  fill(255);
  text("Presses: " + presses, 20, 20);

  // draw our button
  drawButton(mouseX, mouseY);
}

function mousePressed() {
  // see if the user is clicking on the button
  let clicked = isButtonPressed(mouseX, mouseY);

  if (clicked == true) {
    presses++;
  }
}

// function to draw our button
function drawButton(testX, testY) {

  // if the supplied x & y position are over the button we should change our fill
  // color to indicate that the user is "hovering" over the button
  if (testX > buttonX && testX < buttonX+100 && testY > buttonY && testY < buttonY + 100) {
    fill(0,255,0);
  }
  else {
    fill(255);
  }

  rect(buttonX, buttonY, 100, 100);
}

// function to check for button presses
function isButtonPressed(testX, testY) {

  // now test to see if the user is over the button - if so, they are clicking on it!
  if (testX > buttonX && testX < buttonX+100 && testY > buttonY && testY < buttonY + 100) {
    return true;
  }

  // not over the button - return false
  else {
    return false;
  }
}
