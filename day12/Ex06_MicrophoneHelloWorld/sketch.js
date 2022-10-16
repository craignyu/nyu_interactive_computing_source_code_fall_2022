/* note: this demo requires the following:

   (1) the p5.sound.js library included in your index.html file
   (2) use of Chrome of another modern browser that supports getUserMediaStream
   (3) connection over localhost OR over https - on the i6 server you will need
       to modify your URL to load your files over https instead of https
       (i.e. http://i6.cims.nyu.edu/~foo123 -> https://i6.cims.nyu´du/~foo123)
*/

// set up a variable that connects to the user's microphone
let microphone;

function setup() {
  createCanvas(500,500);

  // connect to the microphone by createing a new AudioIn object
  microphone = new p5.AudioIn();

  // start the microphone (will request access to the mic from the user)
  microphone.start();
}

function draw() {
  background(255);

  // ask the microphone how loud the volume is
  // this should be a number between 0.0 and 1.0
  let v = microphone.getLevel();
  text("Volume: " + v, 25, 25);

  // map the number to a desired range and draw an ellipse
  let s = map(v, 0, 1, 50, 500);
  ellipse(250,250,s,s);
}
