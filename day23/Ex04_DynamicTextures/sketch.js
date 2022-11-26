// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker;

// create some off screen graphics buffers to serve as dynamic textures
let buffer1, buffer2;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker = world.getMarker('hiro');
  
  // create a dynamic texture for our base plane (A-Frame likes these texture to be sized using powers of 2)
  buffer1 = createGraphics(256, 256);
  buffer1.background(128,128,128);
  
  // register this texture as a dynamic (updatable) texture
  let texture1 = world.createDynamicTextureFromCreateGraphics(buffer1);

  // create some geometry to add to our marker
  // the marker is 1 meter x 1 meter, with the origin at the center
  // the x-axis runs left and right
  // -0.5, 0, -0.5 is the top left corner
  let basePlane = new Plane({
	  width: 1, height: 1,
	  x: 0, y: 0, z: 0,
	  rotationX: -90,
	  asset: texture1,
	  dynamicTexture: true,
	  dynamicTextureWidth: 256,
	  dynamicTextureHeight: 256
  });
  marker.add(basePlane);
  
  // create another texture to be used on different entities
  buffer2 = createGraphics(256,256);
  buffer1.background(0);

  // register this texture as a dynamic (updatable) texture
  let texture2 = world.createDynamicTextureFromCreateGraphics(buffer2);
  
  // create a cube above the marker to use this texture
  let floatingCube = new Box({
	  width: 1, height: 1, depth: 1,
	  x: 0, y: 1, z: 0,
	  asset: texture2,
	  dynamicTexture: true,
	  dynamicTextureWidth: 256,
	  dynamicTextureHeight: 256
  });
  marker.add(floatingCube);
}


function draw() {
	
  // update the texture on buffer1 over time
  buffer1.fill(random(255),random(255),random(255));
  buffer1.ellipse(random(255),random(255),20,20);
  
  // update the texture on buffer2 over time
  buffer2.fill(random(255),random(255),random(255));
  buffer2.rect(random(255),random(255),random(50), random(50));
}
