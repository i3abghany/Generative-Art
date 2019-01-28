var axiom = 'F';
var sentence = axiom;
var angle;
var len = 150;
var rules = [];
rules[0] = {
  a: 'F',
  b: 'FF+[+F-F-F]-[-F+F+F]'
}


function generate() {
  len /= 2
  var nextSentence = '';
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i)
    var found = false;
    for (var j = 0; j < rules.length; j++){
      if (current == rules[j].a) {
        found = true
        nextSentence += rules[j].b;
        break;
      }
    }
    if(!found){
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width/2, height);
  stroke(255);
  for (var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);

    if(current == 'F'){
      stroke(0, random(255), 0)
      line(0,0,0, -len)
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if(current == "-") {
      rotate(-angle);
    } else if(current == "[") {
      push();
    } else if(current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(800, 800);
  angle = radians(random(60))
  background(51);
  createP(axiom)
  turtle();
  var b = createButton('generate');
  b.mousePressed(generate);
}
