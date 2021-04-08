class Slingshot{
    constructor(BodyA,BodyB){
        var options ={
       bodyA:BodyA,
       bodyB:BodyB,
       stiffness:0.04,
       length:10
        }
        this.Slingshot = Constraint.create(options)
        World.add(world,this.Slingshot)
    }
    display(){
  var pointA =this.Slingshot.bodyA.position
  var pointB =this.Slingshot.bodyB.position
  line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
