const shift = 200;
const freq_factor = 5;
const series_order = 150;

function setup() {
    createCanvas(1000, 900);
    background(0);
}

function draw() {
    translate(400, shift);
    background(0);
    stroke(255);

    SquareSignal();
    translate(0, 2 * shift);
    SawToothSignal();
}
