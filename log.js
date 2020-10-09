class Log {
    constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0, angle:angle
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("blue")
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rect(0, 0,this.width,this.height);
      pop();
    }
  }
  