// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner


  // create a tower of planes that will respond the user's touch
  for (let yPos = 0; yPos < 5; yPos += 1) {
    var p = new Plane({
      x: 0,
      y: yPos,
      z: 0,
      red: random(255),
      green: random(255),
      blue: random(255),
      opacity: 0.5,
      rotationX: -90,
      clickFunction: function(e) {
		  // when this plane is touched this function will run
		  // note that in AR the precision of the mouse / touch detection isn't the greatest
		  // and the A-Frame P% AR library can only support clickFucntions in AR at the moment
		  // (support for other events may be added in the future)
	      e.setRed( random(255) );
	      e.setGreen( random(255) );
	      e.setBlue( random(255) );
      }
    })
    marker.add( p )
  }

}


function draw() {

}
