// variable to hold a reference to our A-Frame world
let world;

// an off screen buffer to hold our dynamic texture
let buffer1;
let texture1;

// our 3D box which will use this texture
let box;

function setup() {
	// no main canvas - we will just use our off screen graphics buffers to hold our dynamic textures
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set the background color of the world
	world.setBackground(0,0,0);

	// create our off screen graphics buffer & texture
	buffer1 = createGraphics(512, 512);
	texture1 = world.createDynamicTextureFromCreateGraphics( buffer1 );

	// create a box that will be use this texture
	// note the use of the 'overFunction' property
	// -- this function will run one time per frame when the user intersects with the entity
	// -- think of it like a mini "draw" function that runs every time the user hovers over the plane
	// -- with their mouse or VR controller
	box = new Box({
		x:0, y:3, z:-5,
		width:3, height:3, depth:3,
		asset: texture1,
		red: 220, green: 225, blue: 220,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512,
		overFunction: function(entity, intersectionInfo) {
			// intersectionInfo is an object that contains info about how the user is
			// interacting with this entity.  it contains the following info:
			// .distance : a float describing how far away the user is
			// .point3d : an object with three properties (x, y & z) describing where the user is touching the entity
			// .point2d : an object with two properites (x & y) describing where the user is touching the entity in 2D space (essentially where on the dynamic canvas the user is touching)
			// .uv : an object with two properies (x & y) describing the raw textural offset (used to compute point2d)

			// draw an ellipse at the 2D intersection point on the dynamic texture
			buffer1.fill(random(255), random(255), random(255));
			buffer1.ellipse( intersectionInfo.point2d.x, intersectionInfo.point2d.y, 20, 20);
		}
	});
	world.add(box);

	// a tiny 'clear' box - click on this box to erase the dynamic texture
	let clearBox = new Box({
		x: 0, y: 0.25, z: -2,
		width: 0.5, height: 0.5, depth: 0.5,
		red: 255, green: 0, blue: 0,
		clickFunction: function(entity) {
			// erase the dynamic texture when you click on the little box
			buffer1.background(255);
		},
		enterFunction: function(entity) {
			// hover state
			entity.setScale(1.1, 1.1, 1.1);
		},
		leaveFunction: function(entity) {
			// deactivate hover state
			entity.setScale(1,1,1);
		}
	});
	world.add(clearBox);

	// create a plane to serve as our "ground"
	let ground = new Plane({
		x:0, y:0, z:0,
		width:100, height:100,
		red: 128, green: 128, blue: 128,
		rotationX:-90
	});

	// add the ground to our world
	world.add(ground);
}

function draw() {
	// just for fun -- spin the box!
	box.spinX(0.5);
	box.spinY(0.5);
	box.spinZ(0.5);
}
