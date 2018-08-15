

function ShootUp () {
  this.x = 400;
  this.y = 580;
  this.gravity = 0.8;
  this.velocity = 0;

  this.render = function() {
    fill('orange');
    ellipse(this.x,this.y,15)
  }

  this.shoot = function () {
    this.velocity -= this.gravity
    this.y += this.velocity
  }
}


var row;
var ship;
var shootup;
function setup () {
  createCanvas(800,600); 
  ship = new Ship();
  row = new Row();
  shootup = new ShootUp();
}

function draw() {
  background(0);
  angleMode(DEGREES)
  ship.render();
  ship.update();
  row.render();
  shootup.render();
  //shootup.shoot();

}


