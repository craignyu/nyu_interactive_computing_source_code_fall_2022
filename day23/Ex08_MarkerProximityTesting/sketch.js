// create a variable to hold our world object
let world;

// create variables to hold our markers
let markerHiro, markerZb;

// geometry
let cube, sphere;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');
  markerZb = world.getMarker('zb');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner
  cube = new Box({
    x:0, y:0.25, z:0,
    red:255, green:0, blue:0,
    width:0.5, height:0.5, depth:0.5,
    asset:'stonebrick'
  });
  markerHiro.addChild( cube );

  sphere = new Sphere({
    x:0, y:0.5, z:0,
    radius: 0.5,
    red:0, green:255, blue:0
  });
  markerZb.addChild( sphere );
}


function draw() {
  // get the position of both markers
  let hiroPosition = markerHiro.getScreenPosition();
  let zbPosition = markerZb.getScreenPosition();

  // are they close?
  let d = dist(hiroPosition.x, hiroPosition.y, zbPosition.x, zbPosition.y);
  if (markerHiro.isVisible() && markerZb.isVisible() && d < 250) {
    cube.spinX(1);
    sphere.nudge(0,0.01,0);
  }


}
