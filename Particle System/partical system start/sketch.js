/*
		               A Particle System			
********************************************************************

*Created March 2021

*Particles are individual shapes drawn to the screen
*Particles have a lifetime
*The Emitter holds the particles 
*The Emitter adds new particles and removes and dead ones
 (reached the end of their life time)

*/

var emit;

function Particle(x ,y, xSpeed, ySpeed, size, colour)
{
	this.x      = x;
	this.y      = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size   = size;
	this.colour = colour;

	//Extra property not based on parameter. Since tt has been newly created it begins at 0
	this.age = 0; 

	this.drawParticle = function()
	{	
		fill(this.colour);
		ellipse(this.x, this.y, this. size);
	}

	this.updateParticle = function()
	{
		this.x += xSpeed;
		this.y += ySpeed;
		this.age ++;

	}
}

function Emitter(x, y, xSpeed, ySpeed, size, colour)
{
	this.x      = x;
	this.y      = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size   = size;
	this.colour = colour;

	//Array to hold the new created particles
	this.particles = [];

	this.startParticles = 0;
	this.lifetime = 0;

	this.addParticle = function()
	{
		var p = new Particle(
			random(this.x - 10, this.x + 10),
			random(this.y - 10, this.y + 10),
			random(this.xSpeed - 1, this.xSpeed + 1), 
			random(this.ySpeed - 1, this.ySpeed + 1),
			random(this.size -4, this.size + 4),
			this.colour);	
		return p;
	}
	this.startEmitter = function(startParticles, lifetime)
	{
      this.startParticles = startParticles;
	  this.lifetime       = lifetime;

	  //Start Emitter with initial particles
	  for(var i = 0; i < startParticles; i++)
	  {
	    this.particles.push(this.addParticle());
	  }

	}
	this.updateParticles = function()
		{

			//Iterate through particles and draw to the screen
			var deadParticles = 0; 

			//Reverse the iteration to avoid missing an element when it has been removed
			for(var i =this.particles.length -1; i >= 0; i--)
			{
				this.particles[i].drawParticle();
				this.particles[i].updateParticle();

				if(this.particles[i].age > random(0, this.lifetime))
				{
					this.particles.splice(i, 1);
					deadParticles ++;
				}
			}
			if(deadParticles > 0)
			{
				for(var i = 0; i < deadParticles; i++)
				{
					this.particles.push(this.addParticle()); //Remove 1 element at index 1
				}
			}
		}

		
}



function setup()
{
	createCanvas(800,600);
	emit = new Emitter(
		width/2,				//x
		height - 100,			//y
		0,						//xSpeed
		-1,						//ySpeed
		 30,					//size
		 color(200, 0 , 200)	//colour
		);
	
	emit.startEmitter(300, 200);
}

function draw()
{
	background(0);
	emit.updateParticles();

}