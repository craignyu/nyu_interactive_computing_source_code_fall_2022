// variables to hold a buffer
let currentLayer;
let layer1, layer2;

let currentColor;

function setup() {
  createCanvas(500,500);
  background(128);

  layer1 = createGraphics(500,500);
  layer2 = createGraphics(500,500);
  currentLayer = layer2;

  currentColor = color(255,255,255);
}

function draw() {
  // clear the main canvas
  background(128);

  // if the mouse is pressed we should draw on that layer
  if (mouseIsPressed && mouseY > 0) {
    currentLayer.fill(currentColor);
    currentLayer.noStroke();
    currentLayer.ellipse(mouseX, mouseY, 50, 50);
  }

  image(layer1, 0, 0);
  image(layer2, 0, 0);
}


function selectTopLayer(el) {
  currentLayer = layer2;
  document.querySelector('.selected').classList.remove('selected');
  el.classList.add('selected');
}

function selectBottomLayer(el) {
  currentLayer = layer1;
  document.querySelector('.selected').classList.remove('selected');
  el.classList.add('selected');
}

function changeColor(el) {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  currentColor = color(r,g,b);
  el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
}

function swapLayers() {
  let temp = layer1;
  layer1 = layer2;
  layer2 = temp;

  let allButtons = document.querySelectorAll('.layer_button');
  allButtons.forEach((el) => {
    if (el.classList.contains('selected')) {
      el.classList.remove('selected');
    }
    else {
      el.classList.add('selected');
    }
  })
}
