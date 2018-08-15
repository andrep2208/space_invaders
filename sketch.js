

function Ship() {
  this.x = 400;
  this.y = 580;
  this.speed = 10;

  this.render = function() {
    push();
    fill(255,0,0);
    noStroke();
    rect(this.x + 30,this.y -20,20,20);
    rect(this.x,this.y,80,20);
    pop();
  }
  this.update = function () {
    if (keyIsDown(LEFT_ARROW) && this.x + 30 > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x + 50 < 800) {
      this.x += this.speed;
    }
  }
}


function Enemy (x){
  this.speed = 0;
  
  this.direction = 1;
  this.render = function() {
    noStroke();
    push();
    fill('green')
    rect(x+20+ this.speed,10,40,40)
    pop();
    push();
    fill('yellow')
    rect(x+60+ this.speed,50,20,20)
    rect(x+ this.speed,50,20,20)
    pop()
  }

  this.move = function () {
    this.speed = this.speed + this.direction;
  }
  


}


var ship;
var enemy = [];

function setup () {
  createCanvas(800,600); 
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    enemy[i] = new Enemy(i*150);
  }
  
 
}


function draw() {
  background(0);
  ship.render();
  ship.update();
  for (var i = 0; i < enemy.length; i++) {
    enemy[i].render();
    enemy[i].move();

  }

  if( (enemy.length-1)*150 + enemy[enemy.length-1].speed > 720 || enemy[enemy.length-1].speed < 0 ){
    for (var i = 0; i < enemy.length; i++) {
      enemy[i].direction = enemy[i].direction*-1
    }
  }
  
  // push();
  // translate(100,100);

  // pop();

}


