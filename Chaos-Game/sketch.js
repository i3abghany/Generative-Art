let ax, ay;
let bx, by;
let cx, cy;

let x, y;

let iterationsPerFrame = 50;

let lerpF = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // base points at the corners of the screen.
  ax = width / 2;
  ay = 0;

  bx = 0;
  by = height;

  cx = width;
  cy = height;

  background(51);
  stroke(255);
  strokeWeight(8);

  point(ax, ay);
  point(bx, by);
  point(cx, cy);

  x = width / 2;
  y = height / 2;

}


function draw() {

  for(let i = 0; i < iterationsPerFrame; i++) {
    let r = floor(random(3));
    if(r == 0) {
      stroke(255, 0, 0, 100);
      x = lerp(x, ax, lerpF);
      y = lerp(y, ay, lerpF);
    } else if(r == 1) {
      stroke(0, 255, 0, 100);
      x = lerp(x, bx, lerpF);
      y = lerp(y, by, lerpF);
    } else if(r == 2) {
      stroke(0, 0, 255, 100);
      x = lerp(x, cx, lerpF);
      y = lerp(y, cy, lerpF);
    }
    point(x, y);
  }
}
