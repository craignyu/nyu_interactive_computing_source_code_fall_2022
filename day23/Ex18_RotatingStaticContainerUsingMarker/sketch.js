// create a variable for A-Frame world
let world;

// references to our markers (which are defined in the HTML document)
let markerHiro;

// a static container that represents some graphics that we always want visible to our users
let staticContainer;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  markerHiro = world.getMarker("hiro");
  markerHiro.addChild(new Sphere({
    x:0, y:0.5, z:0,
    red: 255, green:0 , blue: 0,
    radius: 0.25
  }));


  // create a static container that will always be visible to the user even if not marker is being detected
  staticContainer = new Container3D({
    x:0, y:0, z: -5
  });

  // add some geometry to the static container
  staticContainer.addChild(new Box({
    x:0, y:0, z:0,
    asset: 'stonebrick',
    width: 0.5, height:0.5, depth:0.5
  }));

  // add the static container to the world
  world.scene.appendChild( staticContainer.tag );
}


function draw() {

  if (markerHiro.isVisible()) {

    // get the rotation of the marker
    let r = markerHiro.tag.object3D.rotation;
    let normalizedYRotation = degrees(r.y) + Math.ceil(-1 * degrees(r.y) / 360) * 360;
    console.log(r.y, normalizedYRotation);

    // rotate the static container if the marker has been turned a sufficient amount
    if (normalizedYRotation > 180 && normalizedYRotation < 315) {
      staticContainer.spinY(-1);
    }
    else if (normalizedYRotation > 45 && normalizedYRotation < 180) {
      staticContainer.spinY(1);
    }
  }
}
