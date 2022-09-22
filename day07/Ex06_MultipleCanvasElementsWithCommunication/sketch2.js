// NOTE: this demo showcases how a p5 sketch can be used in conjunction with an
// HTML document.  Please open up the 'index.html' file and refer to it as necessary

function setup() {
  // create our canvas
  createCanvas(250, 250);

  // erase the background
  background(0);
  noStroke();
}

function draw() {
  // let the user draw a random rect
  if (mouseIsPressed) {
    fill(random(255));
    rectMode(CENTER);
    rect(mouseX, mouseY, 25, 25);

    // inform the parent 'index.html' of our mouse position
    window.parent.x = mouseX;
    window.parent.y = mouseY;
    window.parent.drawing2 = true;
  }
  else {
    // otherwise tell parent we aren't drawing
    window.parent.drawing2 = false;
  }

  // is the other canvas drawing?  If so, we should draw
  // something here too
  if (window.parent.drawing1 == true) {
    fill(0, 255, 0);
    ellipse(window.parent.x, window.parent.y, 10, 10);
  }

}
