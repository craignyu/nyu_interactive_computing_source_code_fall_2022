// example adapted from:  https://learn.ml5js.org/#/

// our video capture object
let capture;

// our ml5 detector
let poseNet;

// an array of poses that get detected (human body features & their locations)
let poses = [];

// flag indicating that the model is ready to go
let readyToGo = false;

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
    drawKeypoints();
    drawSkeleton();
  }
  else {
    textSize(50);
    textAlign(CENTER);
    fill(255);
    text("Model Loading", width/2, height/2);
  }
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        textSize(12);
        noStroke();
        fill(255,0,0);
        ellipse(keypoint.position.x, keypoint.position.y, 5, 5);
        fill(0,255,0);
        text(keypoint.part, keypoint.position.x, keypoint.position.y+20)
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
