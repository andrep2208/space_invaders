function ShootUp (x) {
    //this.x = 400;
    this.y = 550;
    this.speed = -10;
  
    this.render = function() {
      fill('orange');
      ellipse(x,this.y,15)
    }
  
    this.shoot = function () {
      this.y += this.speed;
    }
}