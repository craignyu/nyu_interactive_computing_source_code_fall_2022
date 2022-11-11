// variable to hold a reference to our A-Frame world
let world;

// variables to hold our models
let robot, dog;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set up a background color
	world.setBackground(0, 0, 0);

	// create a base plane
	var basePlane = new Plane({
		x: 0, y:0, z:0, width:100, height:100, asset:'stone', rotationX:-90, repeatX:100, repeatY:100
	});
	world.add(basePlane);

	// add a Wavefront (OBJ) model
	// you need to make sure to reference both the OBJ and MTL file here (geometry & material are stored separately)
	// refer to the 'index.html' file to see how these were pre-loaded into the scene
	robot = new OBJ({
		asset: 'robot_obj',
		mtl: 'robot_mtl',
		x: -2,
		y: 1.3,
		z: -5,
		rotationX:0,
		rotationY:180,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
	});
	world.add(robot);

	// add a GL Tranmission Format (GLTF) model
	// this was also pre-loaded in the 'index.html' file
	dog = new GLTF({
		asset: 'dog',
		x: 2,
		y: 1,
		z: -5
	});
	world.add(dog);
}

function draw() {
	robot.spinY(1);
	dog.spinY(-1);
}
