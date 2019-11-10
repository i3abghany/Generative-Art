let max_level = 1;

function setup() {
    createCanvas(1200, 1200);
    background(51);
    rectMode(CENTER);
    noStroke();
    fill(255);
    frameRate(5)
}
let enable = false;
function keyPressed() {
    enable = true;
}

function draw() {
    if(enable) {
        background(51);
        max_level++;
        max_level %= 7;
        if(max_level == 0) max_level++;
        recur(0, width / 2, height / 2, width / 3, height / 3);        
        enable = false;
    }
    
}

function recur(level, x, y, wid, hig) {
    if(level == max_level) {
        return;
    }
    
    rect(x, y, wid, hig);
    const curr_width = width / pow(3, level);
    const curr_height = height / pow(3, level);

    let left_x = x - curr_width / 2;
    let right_x = x + curr_width / 2;
    let up_y = y - curr_height / 2;
    let down_y = y + curr_height / 2; 

    let LX = (x - wid / 2 + left_x) / 2;
    let RX = (x + wid / 2 + right_x) / 2;
    let UY = (y - wid / 2 + up_y) / 2;
    let DY = (y + wid / 2 + down_y) / 2; 

    let nx = [LX, LX, LX, RX, RX, RX, x, x];
    let ny = [UY, y, DY, UY, y, DY, UY, DY];

    const len = nx.length;
    for(let i = 0; i < len; i++) {
        recur(level + 1, nx[i], ny[i], wid / 3, hig / 3);
    }

}
