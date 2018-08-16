
function ShootDown (x,y) {
    this.x = x;
    this.y = y;
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
