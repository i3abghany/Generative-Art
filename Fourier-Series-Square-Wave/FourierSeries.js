let SquarePath    = [];
let SawToothPath  = [];

let SquareAngle   = 0.0;
let SawToothAngle = 0.0;

const SquareSignal = () => {
    let x = 0, y = 0;
    for(let i = 0; i < series_order; i++) {
        let prev_x = x, prev_y = y;
        let n = i * 2 + 1;
        r = 80 * (4 / (n * PI)); 
        x += r * cos(n * freq_factor * SquareAngle);
        y += r * sin(n * freq_factor * SquareAngle);
        noFill();        
        ellipse(prev_x, prev_y, r * 2)
        fill(255);
        line(prev_x, prev_y, x, y);
        ellipse(x, y, 2);
    }
    SquarePath.unshift(y);
    SquareAngle += 0.01;
    line(x, y, shift, SquarePath[0]);
    beginShape();
    noFill();
    for(let i = 0; i < SquarePath.length; i++) {
        vertex(i + shift, SquarePath[i]);
    }
    if(SquarePath.length >= 500) {
        SquarePath.pop();
    }
    endShape();
}

 const SawToothSignal = () => {
    let x = 0, y = 0;
    for(let i = 0; i < series_order; i++) {
        let prev_x = x, prev_y = y;
        let n = i + 1;
        if(i == 0 || i % 2 == 1) {
            n = -1 * n;
        }
        r = 80 * (2 / (n * PI)); 
        x += r * cos(n * freq_factor * SawToothAngle);
        y += r * sin(n * freq_factor * SawToothAngle);
        noFill();        
        ellipse(prev_x, prev_y, r * 2)
        fill(255);
        line(prev_x, prev_y, x, y);
        ellipse(x, y, 2);
    }
    SawToothPath.unshift(y);
    SawToothAngle += 0.01;
    line(x, y, shift, SawToothPath[0]);
    beginShape();
    noFill();
    for(let i = 0; i < SawToothPath.length; i++) {
        vertex(i + shift, SawToothPath[i]);
    }
    if(SawToothPath.length >= 500) {
        SawToothPath.pop();
    }
    endShape();
 }
