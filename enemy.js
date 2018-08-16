

function Enemy (x) {
  this.speed = 0;
  this.direction = 1;
  this.x = x;
  this.y = 50;

  this.render = function() {
        noStroke();
        push();
        fill('green')
        rect(this.x+20+this.speed,this.y-40,40,40)
        pop();
        push();
        fill('yellow')
        rect(this.x+60+ this.speed,this.y,20,20)
        rect(this.x+this.speed,this.y,20,20)
        pop()
    }

  this.move = function () {
        this.speed = this.speed + this.direction;
    }

    this.closer = function () {
        this.y += 10;
    }
}