// variable to hold a reference to our A-Frame world
var world;

let output;

function setup() {
	// no canvas needed
	let c = createCanvas(512, 512);

	// construct the A-Frame world
	world = new World('VRScene', 'mouse');

	// text output to show the current state of the controllers
	output = new Text({
		x:0, y:5, z: -5,
		text: "Hello, world",
		red:0, blue:0, green:0,
		scaleX:15,scaleZ:15,scaleY:15
	});
	world.add(output);

	// floor so we don't feel like we're floating in space
	world.add(new Plane({
		width: 100, height: 100,
		red:255, green:128, blue:0,
		rotationX: -90
	}));

	// some boxes to provide depth
	for (let i = 0; i < 100; i++) {
		world.add(new Box({
			x: random(-50,50), y:0.5, z: random(-50,50),
			red:random(255), green: random(255), blue: random(255)
		}));
	}
}

let t = "";

function draw() {

	// when in immersive VR mode in a VR headset these methoes will return true or false based on
	// the current state of the controller - we are just dropping their return values into the text
	// unit for debugging purposes here. All of these methods return a boolean value.
	t = "RightTrigger: " + world.isControllerRightTriggerDown() + "\n";
	t += "RightGripDown: " + world.isControllerRightGripDown()+ "\n";
	t += "aButton: " + world.isControllerAButtonDown() + "\n";
	t += "bButton: " + world.isControllerBButtonDown() + "\n";
	t += "LeftTrigger: " + world.isControllerLeftTriggerDown() + "\n";
	t += "LeftGripDown: " + world.isControllerLeftGripDown() + "\n";
	t += "xButton: " + world.isControllerXButtonDown() + "\n";
	t += "yButton: " + world.isControllerYButtonDown() + "\n";

	// these two methods will return the direction of the thumbsticks ('LEFT', 'RIGHT', 'UP', 'DOWN") or
	// the boolean value false if the thumbstick is not being touched
	t += "RightThumb: " + world.getControllerRightThumbstickDirection() + "\n";
	t += "LeftThumb: " + world.getControllerLeftThumbstickDirection() + "\n";

	// VR turning (use the left thumbstick to turn left and right)
	if (world.getControllerLeftThumbstickDirection() == 'LEFT') {
		world.rotateCameraY(3);
	}
	if (world.getControllerLeftThumbstickDirection() == 'RIGHT') {
		world.rotateCameraY(-3);
	}

	// VR movement forward
	if (world.getControllerRightThumbstickDirection() == 'UP') {
		world.moveUserForward(0.1);
	}
	
	// you can get raw data on the thumbsticks as well (provides actual pressure value being applied in each direction)
	let leftThumbstickRawData = world.getControllerLeftThumbstickRawData();
	t += 'Left thumb raw data: ' + leftThumbstickRawData.x + ', ' + leftThumbstickRawData.y;

	// update text box
	output.setText(t);
}
