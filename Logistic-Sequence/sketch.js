let ps;
let mx_p;
let K;
let k_slider, terms_slider, p0_slider;
function setup() {
    createCanvas(1200, 800);
    textSize(15);
    k_slider = createSlider(1.0, 3.95, 1.5, 0.05);
    terms_slider = createSlider(20, 300, 20);
    p0_slider = createSlider(0.1, 0.9, 0.5, 0.01);   
    background(51);
    
}

function draw() {
    background(51);
    mx_p = terms_slider.value();
    K = k_slider.value();
    ps = new Array(mx_p);
    ps[0] = p0_slider.value();
    textAlign(CENTER, CENTER);
    noStroke();
    fill(255);
    text("K: ", 30, 10);
    text(K, 50, 10);
    text("P0: ", 100, 10);
    text(ps[0], 130, 10);
    text("Terms: ", 210, 10);
    text(mx_p, 240, 10);
    
    for(let i = 1; i < mx_p; i++) {
        ps[i] = K * ps[i - 1] * (1 - ps[i - 1]);
    }
    translate(0, height);
    let prevx = 0, prevy = ps[0] * height - 30;
    const col_width = width / mx_p;
    for(let i = 0; i < mx_p; i++) {
        let nx = i * col_width;
        let ny = ps[i] * height - 30;
        if(i != 0) {
            stroke(255, 100);
            strokeWeight(2);
            line(prevx, -prevy, nx, -ny);
            prevx = nx;
            prevy = ny;
        }
        stroke(255, 0, 0); strokeWeight(7);
        point(nx, -ny);
    }
}
