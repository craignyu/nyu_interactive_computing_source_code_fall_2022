// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set the background color of the world
	world.setBackground(0,0,0);

	// what textures can we choose from?
	var textures = ['iron', 'gold', 'stone'];

	// create lots of boxes
	for (var i = 0; i < 150; i++) {
		// pick a location
		var x = random(-50, 50);
		var z = random(-50, 50);

		// pick a random texture
		var t = textures[ int(random(textures.length)) ];

		// create a box here
		// note the inclusion of a series of functions as properties being assigned to our entityIntersected
		// these functions will be invoked every time the appropriate mouse (or VR touch) event occurs on
		// this entity.  note that all of these functions will send you a single argument --
		// this is a reference to the box that was clicked (essentially the entity itself)
		var b = new Box({
							x:x,
							y:0.5,
							z:z,
							asset:t,
							clickFunction: function(theBox) {
								// runs 1 time whenever the cube is clicked

								// update this cube's color to something random!
								theBox.setColor( random(255), random(255), random(255) );
							},
							enterFunction: function(theBox) {
								// runs 1 time whenever the cursor has intersected with the cube

								// make the cube slighly bigger
								theBox.setScale(1.2, 1.2, 1.2);
							},
							leaveFunction: function(theBox) {
								// runs 1 time whenever the cursor has left the vicinity of the cube

								// make the cube normal size
								theBox.setScale(1, 1, 1);
							},
							upFunction: function(theBox) {
								// runs 1 time whenever the cube was clicked and then the mouse was released

								// move the cube up by a small amount
								theBox.nudge(0, 0.1, 0);
							}

		});

		// add the box to the world
		world.add(b);
	}

	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90
					   });

	// add the plane to our world
	world.add(g);
}

function draw() {
}
