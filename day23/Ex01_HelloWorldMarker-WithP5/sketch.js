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
  let cube = new Box({
    x:0,
    y:0.5,
    z:0,
    red:0,
    green:255,
    blue:0,
    width:1,
    height:1,
    depth:1,
    opacity: 0.5
  });

  // add the cube to our marker
  marker.add( cube );
}


function draw() {

}
