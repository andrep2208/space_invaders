
function ShootDown (x) {
  this.x = x;
  this.y = 60;
  this.speed = 10;

  this.render = function () {
    push();
    fill('green');
    ellipse (this.x, this.y, 15);
    pop();
  }

  this.shoot = function() {
    this.y += this.speed;
  }
}





var row;
var ship;
var shootup = [];
var shootdown = [];
var numberofpressed = 0;
var dashboard;
function setup () {
  createCanvas(1000,600); 
  ship = new Ship();
  row = new Row();
  dashboard = new Dashboard();

  
}


function keyPressed () {
  if (keyCode == 32 ) {
    shootup.push(new ShootUp(ship.x+30));
    numberofpressed += 1
  }
  
}




function draw() {
  background(0);
  angleMode(DEGREES)
  ship.render();
  ship.update();
  row.render();
  dashboard.render();

  for (var i = 0; i <shootup.length ; i++) {
    shootup[i].render();
    shootup[i].shoot();

    if (shootup[i].y < 0) {
      shootup.splice(i,1);
    }
  }


  row.hit(shootup)



//create shots randomly

  if (frameCount % 40 == 0) {  // happens every 40 frames
    shootdown.push(new ShootDown(row.enemy[0].speed + 40 + 150*floor(round(random(0,4)))));
  }

  for (var i = 0; i < shootdown.length; i++) {
  shootdown[i].render();
  shootdown[i].shoot();

    if (shootdown[i].y > 600) {
      shootdown.splice(i,1);
    }
  }

// check if enemy shot hit ship

for (var i = 0; i < shootdown.length; i++) {
  if(shootdown[i].x + 7.5 < ship.x + 80 && shootdown[i].x -7.5  > ship.x && shootdown[i].y > 560 ) {
    console.log('hit')
    shootdown.splice(i,1);
  }
}




  
  
}


