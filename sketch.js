let angle, len, eps, r, x, y;

function setup() {
    //creating a canvas with the size 600*600
    createCanvas(600, 600);
    //initializing angle with 10deg to rads.
    angle = radians(10);
    background(255);
    // setting the origin in the center of the canvas
    translate(width / 2, height);
    //setting the frame rate of the animation, 60 to see the latest result.
    frameRate(60);
    eps = 1;
    len = sqrt(eps);
    //red value
    r = 10;
}

function draw() {
  x and y are the cartesian coordinates using the polar transformation.
  x = len * cos(angle)
  y =  len * sin(angle)
  translate(width / 2, height / 2);
  stroke(r, 0, 0);
  line(0, 0, x, y);
  angle += 0.1
  eps += 1;
  (r < 240) ? r += 15 : r = 0
  len = 6 * sqrt(eps)
}
