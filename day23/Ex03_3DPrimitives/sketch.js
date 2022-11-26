// create a variable to hold our world object
let world;

// create a variable to hold our marker
let markerHiro;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left to right, z-xaxis runs top to bottom, y-axis runs up/down (through the marker)

  // add in a demo of a few different 3D geometry type
  let box = new Box({
    x: -0.5,
    y: 0.1,
    z: -0.5,
    width: 0.2,
    height: 0.2,
    depth: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(box);

  let plane = new Plane({
    x: -0.5,
    y: 0.1,
    z: 0,
    width: 0.2,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(plane);

  let sphere = new Sphere({
    x: -0.5,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(sphere);

  let circle = new Circle({
    x: 0,
    y: 0.1,
    z: -0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(circle);

  let cone = new Cone({
    x: 0,
    y: 0.1,
    z: 0,
    radiusBottom: 0.1,
    radiusTop: 0.0,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(cone);

  let cylinder = new Cylinder({
    x: 0,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    height: 0.2,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(cylinder);

  let ring = new Ring({
    x: 0,
    y: 0.5,
    z: -0.5,
    radiusOuter: 0.1,
    radiusInner: 0.05,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(ring);

  let dodecahedron = new Dodecahedron({
    x: 0.5,
    y: 0.1,
    z: -0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(dodecahedron);

  let octahedron = new Octahedron({
    x: 0.5,
    y: 0.1,
    z: 0,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(octahedron);

  let tetrahedron = new Tetrahedron({
    x: 0.5,
    y: 0.1,
    z: 0.5,
    radius: 0.1,
    red: random(255),
    green: random(255),
    blue: random(255)
  });
  markerHiro.addChild(tetrahedron);


  // add a Wavefront (OBJ) model
  // you need to make sure to reference both the OBJ and MTL file here (geometry & material are stored separately)
  // refer to the 'index.html' file to see how these were pre-loaded into the scene
  robot = new OBJ({
	asset: 'robot_obj',
	mtl: 'robot_mtl',
	x: -1,
	y: 0.35,
	z: 0,
	rotationX:0,
	rotationY:180,
	scaleX: 0.25,
	scaleY: 0.25,
	scaleZ: 0.25,
  });
  markerHiro.add(robot);

  // add a GL Tranmission Format (GLTF) model
  // this was also pre-loaded in the 'index.html' file
  dog = new GLTF({
	asset: 'dog',
	x: 1,
	y: 0.25,
	z: 0,
	scaleX: 0.25,
	scaleY: 0.25,
	scaleZ: 0.25
  });
  markerHiro.add(dog);
}


function draw() {



}
