class Box {
    constructor(x,y,width,height) {

        var options = {
            restitution:0.4,
            friction:0.5,
            density:0.2
        }

        this.pix = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.pix);

    }

    display(){
        var angle  = this.pix.angle;
        push()
        translate(this.pix.position.x, this.pix.position.y);
          rotate(angle);
        var cool = random(1,3);
        if (cool === 1) {
          fill("blue")
        } else if (cool === 2) {
          fill("orange")
        } else if (cool === 3) {
          fill("green")
        } 
  
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop()
      }

}