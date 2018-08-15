function Row() {
  let enemy = [];

  for (var i = 0; i < 5; i++) {
    enemy[i] = new Enemy(i*150);
  }
  
  this.render = function () {

    for (var i = 0; i < enemy.length; i++) {
      enemy[i].render();
      enemy[i].move();
    }
  
    if( (enemy.length-1)*150 + enemy[enemy.length-1].speed > 720 || enemy[enemy.length-1].speed < 0 ){
      for (var i = 0; i < enemy.length; i++) {
        enemy[i].direction = enemy[i].direction*-1
      }
    }

  }

}