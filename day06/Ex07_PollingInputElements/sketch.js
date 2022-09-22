// DOM references to the text boxes
let text1, text2;

function setup() {
  // create a canvas and grab a reference to it
  let cnv = createCanvas(500,500);

  // reparent the canvas to the 'canvas_container' div
  cnv.parent('#canvas_container');

  // set a background
  background(200);

  // grab DOM references to both text boxes
  text1 = document.querySelector('#textbox1');
  text2 = document.querySelector('#textbox2');
}

function draw() {
  background(128);

  // grab the current value of what's inside of each textbox
  let v1 = text1.value;
  let v2 = text2.value;

  textAlign(CENTER, CENTER);
  textSize(50);
  text(v1, width/2, 200);
  text(v2, width/2, 300);
}

// no need for additional functions here - we will always grab a fresh
// copy of the textbox value in the 'draw' function above
