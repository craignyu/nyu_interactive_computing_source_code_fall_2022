// example adapted from:  https://learn.ml5js.org/#/

// our video capture object
let capture;

// our ml5 detector
let poseNet;

// an array of poses that get detected (human body features & their locations)
let poses = [];

// flag indicating that the model is ready to go
let readyToGo = false;

// objective
let coinX, coinY;

function setup() {
  createCanvas(640, 480);

  // create our capture object
  capture = createCapture(VIDEO);
  capture.size(width, height);

  // set up ml5 to look for human body features in the capture object
  // call the 'modelReady' function when the model has been loaded and is ready to go
  poseNet = ml5.poseNet(capture, modelReady);

  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });

  // Hide the video element, and just show the canvas (we will draw the video to the canvas ourselves)
  capture.hide();

  // pick a random spot for our coin
  pickRandomCoinLocation();
}

function modelReady() {
  console.log("Poses ready!");
  readyToGo = true;
}

function draw() {
  background(0);

  // We can call both functions to draw all keypoints and the skeletons
  if (readyToGo) {
    image(capture, 0, 0, width, height);

    fill(255,255,0);
    ellipse(coinX, coinY, 50, 50);

    // figure out where the user's nose is
    if (poses.length > 0 && poses[0].pose.nose) {
      let noseX = poses[0].pose.nose.x;
      let noseY = poses[0].pose.nose.y;

      fill(255,0,0)
      ellipse(noseX, noseY, 50, 50);

      if (dist(noseX, noseY, coinX, coinY) < 25) {
        pickRandomCoinLocation();
      }
    }
  }
  else {
    textSize(50);
    textAlign(CENTER);
    fill(255);
    text("Model Loading", width/2, height/2);
  }
}

// debug: click the mouse to see all poseNet properties
function mousePressed() {
  // iterate over all pose properties and give us a readout of where these features can be found
  if (poses.length > 0) {
    for (let property in poses[0].pose) {
      if (poses[0].pose[property].x) {
        console.log(`${property} ${poses[0].pose[property].x} ${poses[0].pose[property].y}`)
      }
    }
  }
}

function pickRandomCoinLocation() {
  coinX = random(30, width-30);
  coinY = random(30, height-30);
}
