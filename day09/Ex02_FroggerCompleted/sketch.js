// artwork for the game
let artFrogLeft, artFrogRight, artFrogUp, artFrogDown;
let artBackground;
let artCar1, artCar2, artCar3;

// variable to hold our Frog object
let theFrog;

// variable to hold our three cars
let car1, car2, car3;
let car4, car5, car6;

function preload() {
  // load in all of our graphics
  artBackground = loadImage("images/background.png");
  artFrogUp = loadImage("images/frog_up.png");
  artFrogDown = loadImage("images/frog_down.png");
  artFrogLeft = loadImage("images/frog_left.png");
  artFrogRight = loadImage("images/frog_right.png");
  artCar1 = loadImage("images/car_1.png");
  artCar2 = loadImage("images/car_2.png");
  artCar3 = loadImage("images/car_3.png");
}

function setup() {
  createCanvas(500,500);

  // construct our user controlled frog
  theFrog = new Frog(225, 450);

  // construct three computer controlled cars (bottom half of screen)
  car1 = new Car(-50, 400, artCar1, 3);
  car2 = new Car(-100, 335, artCar2, 5);
  car3 = new Car(-150, 275, artCar3, 7);

  // construct three more cars (top half of screen)
  car4 = new Car(-50, 175, artCar1, 5);
  car5 = new Car(-100, 110, artCar2, 7);
  car6 = new Car(-150, 50, artCar3, 9);
}

function draw() {
  // draw the background of our world
  image(artBackground, 0, 0);

  // ask our frog to run its move function
  theFrog.move();

  // ask our cars to move
  car1.move();
  car2.move();
  car3.move();
  car4.move();
  car5.move();
  car6.move();

  // check collisions between the cars and the frog
  if (
      car1.checkCollision(theFrog.x, theFrog.y) ||
      car2.checkCollision(theFrog.x, theFrog.y) ||
      car3.checkCollision(theFrog.x, theFrog.y) ||
      car4.checkCollision(theFrog.x, theFrog.y) ||
      car5.checkCollision(theFrog.x, theFrog.y) ||
      car6.checkCollision(theFrog.x, theFrog.y)
     ) {

      // a collision has occurred with at least one car!
      // send the frog back to the bottom of the screen
      theFrog.y = 450;
  }

  // ask our frog to run its display function
  theFrog.display();

  // ask our cars to run their display functions
  car1.display();
  car2.display();
  car3.display();
  car4.display();
  car5.display();
  car6.display();
}

// our Car class - models a car that moves left to right on the screen
class Car{

  constructor (startX, startY, startGraphic, startSpeed) {
    // store the starting position of this Car
    this.x = startX;
    this.y = startY;

    // store which car graphic to use
    this.graphic = startGraphic;

    // store our speed
    this.speed = startSpeed;
  }

  // display function to draw the car
  display() {
    image(this.graphic, this.x, this.y);
  }

  // move function for the car
  move() {
    this.x += this.speed;

    // did we hit the edge?  if so, wrap around
    if (this.x > width) {
      this.x = random(-200,-50); // random position off of the left edge of the screen
    }
  }

  // collide function to check if this car has squished the frog!
  checkCollision(frogX, frogY) {
    // every car is 50 x 50
    // the frog is also 50 x 50
    // all images are drawn from their top left corner
    // so we need to check collissions between our center point and the center of the frog
    let d = dist(this.x+25, this.y+25, frogX+25, frogY+25);
    if (d < 25) {
      // collision!
      return true;
    }
    else {
      // no collision
      return false;
    }
  }

}

// our Frog class - models the functionality needed to create a user controlled frog character
class Frog {

  constructor(startX, startY) {
    // store the starting position of the frog
    this.x = startX;
    this.y = startY;

    // store which graphic the frog should be using (will change based on which key is pressed)
    this.graphic = artFrogUp;
  }

  // function to display the frog
  display() {
    // draw the frog at its current position
    image(this.graphic, this.x, this.y);
  }

  // function to handle moving the frog using the keyboard
  move() {
    // see which key is pressed
    if (keyIsDown(65)) {
      // move left
      this.x -= 2;

      // adjust artwork
      this.graphic = artFrogLeft;
    }
    if (keyIsDown(68)) {
      // move right
      this.x += 2;

      // adjust artwork
      this.graphic = artFrogRight;
    }
    if (keyIsDown(87)) {
      // move up
      this.y -= 2;

      // adjust artwork
      this.graphic = artFrogUp;
    }
    if (keyIsDown(83)) {
      // move down
      this.y += 2;

      // adjust artwork
      this.graphic = artFrogDown;
    }
  }

}
