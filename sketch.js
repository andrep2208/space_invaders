



var row;
var ship;
function setup () {
  createCanvas(800,600); 
  ship = new Ship();
  row = new Row();
}

function draw() {
  background(0);
  ship.render();
  ship.update();
  row.render();

}


