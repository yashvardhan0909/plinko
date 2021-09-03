class plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,10,10,options);
     this.radius=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      circle(pos.x, pos.y,this.radius);
    }
  }