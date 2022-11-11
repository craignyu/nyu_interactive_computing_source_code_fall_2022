// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// in this program we actually do want a canvas
	// the goal here is to draw to our canvas using the 'draw' function as we normally would
	// however, we will use the canvas as a dynamic texture to be wrapped around a 3D object
	// note on textures: A-Frame is happiest when you express your canvas dimension using powers of 2!

	// step 1: grab a reference to the canvas ID using the 'id' method
	let canvasName = createCanvas(512,512).id();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set the background color of the world
	world.setBackground(0,0,0);

	// create a new box that will use the ID of the canvas as its asset
	let b1 = new Box({
		x:0, y:1.5, z:-5,
		width:3, height:3, depth:3,
		asset: canvasName,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512
	});

	// add the box to our world
	world.add(b1);

	// you are free to use the same dynamic texture on multiple entities
	let plane = new Plane({
		x: 5, y: 1, z: -5,
		width: 2, height: 2,
		side: 'double',
		asset: canvasName,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512
	});
	world.add(plane);

	// mapping of a dynamic texture will appear strange with non-rectangular faces, so it's suggested
	// that you just use dynamic textures on rectangular entities such as planes and boxes
	let octahedron = new Octahedron({
		x: 5, y: 5, z: -5,
		radius: 1,
		side: 'double',
		asset: canvasName,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512
	});
	world.add(octahedron);


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
	// here we are drawing to our 2D canvas.  Note that if you did not use the canvas as a texture
	// in one of your 3D elements you wouldn't be able to see it at all
	fill(random(255));
	rect(random(width), random(height), random(5,30), random(5,30));
}
