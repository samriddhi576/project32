class Ground
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic : true
        }
        this.body=Bodies.rectangle(450,390,900,20,option);
        World.add(world,this.body);
        
    }

    display()
    {
        strokeWeight(2);
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,900,20); 
    }
}