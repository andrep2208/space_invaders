function Row() {
  this.enemy = [];

  for (var i = 0; i < 5; i++) {
    this.enemy[i] = new Enemy(i*150);
  }
  
  this.render = function () {

    for (var i = 0; i < this.enemy.length; i++) {
      this.enemy[i].render();
      this.enemy[i].move();




    }
  
    if( (this.enemy.length-1)*150 + this.enemy[this.enemy.length-1].speed > 720 || this.enemy[this.enemy.length-1].speed < 0 ){
      for (var i = 0; i < this.enemy.length; i++) {
        this.enemy[i].direction = this.enemy[i].direction*-1
      }
    }

  }

}