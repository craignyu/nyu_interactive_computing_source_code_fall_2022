// variable to hold a reference to our A-Frame world
let world;

// variable to hold our 'sensor' - this will find objects in front or below the user
let sensor;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// disable WASD navigation
	world.camera.cameraEl.removeAttribute('wasd-controls');

	// create a bunch of obstacles
	for (let i = 0; i < 50; i++) {
		let grey = random(75,225);
		let box = new Box({
			x: int(random(-49,49)),
			y: 2,
			z: int(random(-45,49)),
			height: 4,
			red: grey, green: grey, blue: grey
		});

		// IMPORTANT -- set a property on the box to tell the system that this is
		// an entity that we can collide with!
		box.tag.object3D.userData.solid = true;

		// add the box to the world
		world.add(box);
	}


	// create 4 walls around the edge of the world
	let wall1 = new Box({
		x:-49,
		y:2,
		z:0,
		width: 1,
		height: 4,
		depth: 100,
		red: 128, green: 128, blue: 128
	});
	let wall2 = new Box({
		x:49,
		y:2,
		z:0,
		width: 1,
		height: 4,
		depth: 100,
		red: 128, green: 128, blue: 128
	});
	let wall3 = new Box({
		x:0,
		y:2,
		z:-49,
		width: 100,
		height: 4,
		depth: 1,
		red: 128, green: 128, blue: 128
	});
	let wall4 = new Box({
		x:0,
		y:2,
		z:49,
		width: 100,
		height: 4,
		depth: 1,
		red: 128, green: 128, blue: 128
	});

	// IMPORTANT -- set a property the walls to tell the system that this is
	// an entity that we can collide with!
	wall1.tag.object3D.userData.solid = true;
	wall2.tag.object3D.userData.solid = true;
	wall3.tag.object3D.userData.solid = true;
	wall4.tag.object3D.userData.solid = true;

	// add the walls to the system
	world.add( wall1 );
	world.add( wall2 );
	world.add( wall3 );
	world.add( wall4 );


	// create a plane to serve as our "ground"
	let g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25});

	// IMPORTANT - set the ground so that it is considered 'solid'
	g.tag.object3D.userData.solid = true;

	// add the plane to our world
	world.add(g);


	// create some stairs
	let stair1 = new Box({
		width:2,height:0.5,depth:2,
		x:0,y:0.25,z:-5,
		red:128,green:128,blue:0
	});
	stair1.tag.object3D.userData.stairs = true;
	world.add(stair1);

	let stair2 = new Box({
		width:2,height:0.5,depth:2,
		x:0,y:0.5,z:-7,
		red:128,green:170,blue:0
	});
	stair2.tag.object3D.userData.stairs = true;
	world.add(stair2);

	let stair3 = new Box({
		width:2,height:0.5,depth:2,
		x:0,y:0.75,z:-9,
		red:128,green:190,blue:0
	});
	stair3.tag.object3D.userData.stairs = true;
	world.add(stair3);

	let stair4 = new Box({
		width:2,height:0.5,depth:2,
		x:0,y:1.25,z:-11,
		red:128,green:220,blue:0
	});
	stair4.tag.object3D.userData.stairs = true;
	world.add(stair4);


	// create our gravity sensor (see class below)
	// this object detects what is below the user
	sensor = new Sensor();
}


function draw() {

	// see what's below / in front of the user
	let whatsBelow = sensor.getEntityBelowUser();
	let objectAhead = sensor.getEntityInFrontOfUser();

	// if the W key is pressed
	if (  keyIsDown(87)) {
		// assume we can move forward
		let okToMove = true;

		//console.log(objectAhead);

		// if there is an object, it is close and it is solid, prevent motion
		if (objectAhead && objectAhead.distance < 0.25 && objectAhead.object.el.object3D.userData.solid) {
			okToMove = false;
		}

		if (okToMove) {
			world.moveUserForward(0.05);
		}
	}

	// if what's below us is a set of stairs we should adjust our y value so we are on top of it
	if (whatsBelow) {
		let cp = world.getUserPosition();

		// falling
		if (whatsBelow.distance > 1.1) {
			world.setUserPosition( cp.x, cp.y-0.05, cp.z);
		}
		else if (whatsBelow.object.el.object3D.userData.stairs && whatsBelow.distance < 1) {
			world.setUserPosition( cp.x, cp.y + (1-whatsBelow.distance), cp.z);
		}
	}


	// if the S key is pressed
	if (  keyIsDown(83) ) {
		// move backwards (no collision detection)
		world.moveUserForward(-0.05);
	}

}




class Sensor {

	constructor() {
		// raycaster - think of this like a "beam" that will fire out of the
		// bottom of the user's position to figure out what is below their avatar
		this.rayCaster = new THREE.Raycaster();
		this.userPosition = new THREE.Vector3(0,0,0);
		this.downVector = new THREE.Vector3(0,-1,0);
		this.intersects = [];

		this.rayCasterFront = new THREE.Raycaster();
		this.cursorPosition = new THREE.Vector2(0,0);
		this.intersectsFront = [];
	}

	getEntityInFrontOfUser() {
		// update the user's current position
		let cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		// make sure the camera is ready to go
		if (world.camera.cameraEl && world.camera.cameraEl.object3D && world.camera.cameraEl.object3D.children.length >= 2) {

			// cast a ray in front of the user and see what's there
			this.rayCasterFront.setFromCamera( this.cursorPosition, world.camera.cameraEl.object3D.children[1]);
			this.intersectsFront = this.rayCasterFront.intersectObjects( world.threeSceneReference.children, true );

			// determine which "solid" items are in front of the user
			for (let i = 0; i < this.intersectsFront.length; i++) {
				try {
					if (!this.intersectsFront[i].object.el.object3D.userData.solid) {
						this.intersectsFront.splice(i,1);
						i--;
					}
				}
				catch (e) {

				}
			}

			if (this.intersectsFront.length > 0) {
				return this.intersectsFront[0];
			}
			return false;
		}
	}

	getEntityBelowUser() {
		// update the user's current position
		let cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		this.rayCaster.set(this.userPosition, this.downVector);
		this.intersects = this.rayCaster.intersectObjects( world.threeSceneReference.children, true );

		// determine which "solid" or "stairs" items are below
		for (let i = 0; i < this.intersects.length; i++) {
			if (!(this.intersects[i].object.el.object3D.userData.solid || this.intersects[i].object.el.object3D.userData.stairs)) {
				this.intersects.splice(i,1);
				i--;
			}
		}

		if (this.intersects.length > 0) {
			return this.intersects[0];
		}
		return false;
	}
}
