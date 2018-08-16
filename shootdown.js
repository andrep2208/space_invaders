
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
