class Stone{

	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
            }
		
        this.body=Bodies.circle(x,y,r/2,options)
        this.r = r;
        this.image=loadImage("stone.png");
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			//translate(pos.x,pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS);
			image(this.image,pos.x,pos.y,this.r*2, this.r*2)
			pop()
			
	}

}