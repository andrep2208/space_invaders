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