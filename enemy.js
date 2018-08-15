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