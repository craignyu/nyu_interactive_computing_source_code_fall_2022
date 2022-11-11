// variable to hold a reference to our A-Frame world
let world;

// global variable to hold our "container" object
let container;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set a background color for the world using RGB values
	world.setBackground(173, 216, 230);

	// create a "container" object
	// this is an object that has no geometry (i.e. it is totally invisible)
	// it can be used to hold other objects and move them around as a group
	container = new Container3D({x:0, y:1, z:-5});

	// add the container to the world
	world.add(container);

	// now we can add objects into the container - note that when we do so we are using
	// a different coordinate system.  0,0,0 is not the origin of our world now - it is the
	// center of the container object
	var b1 = new Box({
						x:-5, y:0, z:0,
						asset: 'gold',
						red: random(255), green:random(255), blue:random(255)
	});

	// add the box to the container
	container.addChild(b1);

	// create a second box
	var b2 = new Box({
						x:5, y:0, z:0,
						asset: 'stone',
						red: random(255), green:random(255), blue:random(255)
	});

	// add the box to the container
	container.addChild(b2);



	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });

	// add the plane to our world
	world.add(g);
}

function draw() {
	// now move the container around a bit
	container.spinY(1);
}
