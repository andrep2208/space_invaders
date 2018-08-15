
var row;
var ship;
var shootup = [];
function setup () {
  createCanvas(800,600); 
  ship = new Ship();
  row = new Row();
}


function keyPressed () {
  if (keyCode == 32 ) {
    shootup.push(new ShootUp(ship.x+40));
  }
  
}

function draw() {
  background(0);
  angleMode(DEGREES)
  ship.render();
  ship.update();
  row.render();

  for (var i = 0; i <shootup.length ; i++) {
    shootup[i].render();
    shootup[i].shoot();

    if (shootup[i].y < 0) {
      shootup.splice(i,1);
    }
  }

  
  
}


