var tree;
var max_dist = 50;
var min_dist = 5;

function setup() {
  createCanvas(600, 780)
 tree = new Tree();
 frameRate(60);
 var button = createButton('start');
 noLoop();
 button.mousePressed(loop);
}

function draw() {
 background(240);
 tree.show();
 tree.grow();
}


class Tree {
  constructor(){
    this.leaves = [];
    this.branches = [];

    for(let i = 0; i < 600; i++) {
      this.leaves.push(new Leaf());
    }
    var pos = createVector(width / 2, height);
    var dir = createVector(0, -1);
    var root = new Branch(null, pos, dir);

    this.branches.push(root)

    var current = root;

    var found = false;

    while (!found) {
      for(var i = 0; i < this.leaves.length; i++){
        var d = p5.Vector.dist(current.pos, this.leaves[i].pos)
        if (d < max_dist) found = true;
      }
      if (!found) {
        var branch = current.next();
        current = branch;
        this.branches.push(current);
      }
    }
  }

  grow() {
    for (var i = 0; i < this.leaves.length; i++){
      var leaf = this.leaves[i];
      var closestBranch = null;
      var record = 100000;
      for (var j = 0; j < this.branches.length; j++){
        var b = this.branches[j];
        var d = p5.Vector.dist(leaf.pos, b.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d > max_dist){

        } else if (closestBranch == null || d < record) {
          closestBranch = b;
          record = d;
        }
      }
      if (closestBranch != null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (var i = this.leaves.length - 1; i >=0; i--){
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }

    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count+1);
        this.branches.push(branch.next());
        // var newPos = p5.Vector.add(branch.pos, branch.dir);
        // var newBranch = new Branch(branch, newPos, branch.dir.copy());
        // this.branches.push(newBranch);
      }
      branch.reset();
    }
  }

  show() {
    for (var i = 0; i < this.leaves.length; i++){
      this.leaves[i].show();
    }
    for (let j = 1; j < this.branches.length; j++) {
      this.branches[j].show();
    }
  }
}

class Leaf {
  constructor(){
    this.pos = createVector(50+random(width-100), 10+random(height-150));
    this.reached = false;
  }

  show() {
    fill(51);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }
}

class Branch {
  constructor(parent, pos, dir){
    this.pos = pos;
    this.parent = parent;
    this.dir = dir
    this.origDir = dir.copy();
    this.count = 0;
    this.len = 5;
  }

  reset() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }

  next() {
    var nextDir = p5.Vector.mult(this.dir, this.len)
    var nextPos = p5.Vector.add(this.pos, nextDir);
    var nextBranch = new Branch(this, nextPos, this.dir.copy())
    return nextBranch;
  }

  show() {
    if (parent != null){
      stroke(random(120, 170), random(40, 80), random(20, 50));
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y)
    }
  }
}
