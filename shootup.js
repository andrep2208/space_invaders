function ShootUp (x) {
    this.x = x;
    this.y = 550;
    this.speed = -10;
  
    this.render = function() {
      fill('orange');
      ellipse(this.x,this.y,15)
    }
  
    this.shoot = function () {
      this.y += this.speed;
    }
}