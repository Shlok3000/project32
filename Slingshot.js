class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body; 
    }

    display(){
        image(this.sling1, 200, 23);
        image(this.sling2, 173, 23);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<200){
            strokeWeight(7);
            stroke(48,22,8);
            line(pointA.x-15, pointA.y, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+40, pointB.y);
            image(this.sling3, pointA.x-25, pointA.y-15, 15, 30);
            }
            else{
                strokeWeight(3);
                stroke(48,22,8);
                line(pointA.x+15, pointA.y, pointB.x, pointB.y);
                line(pointA.x+15, pointA.y, pointB.x+40, pointB.y);
                image(this.sling3, pointA.x+20, pointA.y-5, 15, 30);
            }
        }
    }
    
}