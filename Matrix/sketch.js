let streams = [];
const symbolSize =  24;
const marginPixels = 22;

function setup() {
  createCanvas(window.innerWidth - marginPixels, window.innerHeight - marginPixels);
  textSize(symbolSize);
  let x = 0
  let y = floor(random(-1000, 0));
  for(let i = 0; i <= width / symbolSize; i++) {
    let stream = new Stream();
    stream.generateSymbols(x, y);
    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
    background(0, 150);
    streams.forEach((stream) => stream.render());
}

function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.switchInterval = floor(random(2, 30));
  this.value;
  this.first = first;

  this.setToRandomSymbol = function() {
    textStyle(BOLD);
    if(frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
        // 0x0623 + round(random(0, 25 * 6)) // arabic symbols.
        0x30A0 + round(random(0, 96)) // japanese symbols.
      );
    }
  }
  this.rain = function() {
    this.y = (this.y + speed) % height;
  }
}

function Stream() {

  this.symbols = [];
  this.totalSymbols = round(random(5, 30));
  this.speed = random(2, 10);

  this.generateSymbols = function(x, y) {
    let first = (round(random(0, 1)) == 1);
    for(let i = 0; i <= this.totalSymbols; i++) {
      let symbol = new Symbol(x, y, this.speed, first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first = false;
    }
  }
  this.render = function() {
    this.symbols.forEach((symbol) => {
        if(symbol.first) {
          fill(180, 255, 180);
        }
        else {
          fill(0, 255, 50);
        }
        text(symbol.value, symbol.x, symbol.y);
        symbol.setToRandomSymbol();
        symbol.rain();
    });
  }
}
