function Row() {
  this.enemy = [];
  this.score = 0
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

  this.hit = function (shootup) {
    for (var j = 0; j < row.enemy.length ; j++) {
      for (var i = 0; i <shootup.length ; i++) {
        if (shootup[i].x +7.5 < row.enemy[j].x + 90 + row.enemy[j].speed && shootup[i].x> row.enemy[j].x + row.enemy[j].speed  &&  
            shootup[i].y < row.enemy[j].y +20) {
          //console.log("hit");
          this.score = this.score + 1;
          shootup.splice(i,1);
        }
      }
     
    }
  }


}