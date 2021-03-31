class Rubber
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        };
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
        
        this.width=50;
        this.height=50;
    };

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();     
    };
};