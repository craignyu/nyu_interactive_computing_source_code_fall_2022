// HTML interface output
let output;

function setup() {
  createCanvas(500,500);
  background(255);

  // get a reference to our HTML output div
  output = document.getElementById('color_panel')

  // fill the canvas with a bunch of randomly colored ellipses
  for (let i = 0; i < 50; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(10,width-10), random(10,height-10), 20, 20);
  }
}

function draw() {
  // get the color under the mouse
  let c = get(mouseX, mouseY);
  output.innerHTML = 'RGBA: [' + c + ']';

  // you can extract individual color values from the color using the red, green and blue functions
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  output.innerHTML += `<br>Red: ${r}<br>Green: ${g}<br> Blue: ${b}`;

}
