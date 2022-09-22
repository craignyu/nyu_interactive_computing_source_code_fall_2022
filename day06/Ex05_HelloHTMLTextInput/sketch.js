function setup() {
  // create a canvas and grab a reference to it
  let cnv = createCanvas(500,500);

  // reparent the canvas to the 'canvas_container' div
  cnv.parent('#canvas_container');

  // set a background
  background(128);
}

function draw() {
}

// this function is being called 'oninput' - every time the user
// makes a change to #word1 this function will be called with a
// reference back to the text box itself
function word1Function(el) {
  // grab the string from the text box
  let word = el.value;

  // draw it to the screen
  background(128);
  fill(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(word, width/2, height/2);
}
