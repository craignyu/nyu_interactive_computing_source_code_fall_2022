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
    x:0, y:0.5, z:0,
    red:0, green:255, blue:0,
    opacity: 0.5
  }));

  // add the static container to the world
  world.scene.appendChild( staticContainer.tag );
}


function draw() {

  if (markerHiro.isVisible()) {

    // get the position of the marker
    let p = new THREE.Vector3();
    p.setFromMatrixPosition( markerHiro.tag.object3D.matrixWorld );

    // get the rotation of the marker
    let r = markerHiro.tag.object3D.rotation;

    // update our static container to have the same position & rotation as the marker
    staticContainer.setPosition(p.x, p.y, p.z);
    staticContainer.rotateX( degrees(r.x) );
    staticContainer.rotateY( degrees(r.y) );
    staticContainer.rotateZ( degrees(r.z) );
  }
}
