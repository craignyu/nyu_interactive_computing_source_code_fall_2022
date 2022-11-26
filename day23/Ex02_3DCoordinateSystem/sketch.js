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
  let littleCube1 = new Box({
    x:-0.5, y:0.25, z:-0.5,
    red:255, green:0, blue:0,
    width:0.5, height:0.5, depth:0.5
  });
  marker.addChild( littleCube1 );

  let littleCube2 = new Box({
    x:0.5, y:0.25, z:-0.5,
    red:0, green:255, blue:0,
    width:0.5, height:0.5, depth:0.5
  });
  marker.addChild( littleCube2 );

  let littleCube3 = new Box({
    x:-0.5, y:0.25, z:0.5,
    red:0, green:0, blue:255,
    width:0.5, height:0.5, depth:0.5
  });
  marker.addChild( littleCube3 );

  let littleCube4 = new Box({
    x:0.5, y:0.25, z:0.5,
    red:128, green:128, blue:128,
    width:0.5, height:0.5, depth:0.5
  });
  marker.addChild( littleCube4 );

  let littleCube5 = new Box({
    x:0, y:1, z:0,
    red:255, green:128, blue:0,
    width:0.5, height:0.5, depth:0.5
  });
  marker.addChild( littleCube5 );

}


function draw() {



}
