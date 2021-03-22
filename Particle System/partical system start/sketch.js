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
var emit2;
var emit3;

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
		noStroke;
		strokeWeight(0);
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
			random(this.x - 40, this.x + 40),
			random(this.y - 20, this.y + 20),
			random(this.xSpeed - 1, this.xSpeed + 1), 
			random(this.ySpeed - 1, this.ySpeed + 1),
			random(this.size -5, this.size + 5),
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
		-8,					    //ySpeed
		 20,					//size
		 color(255, 255,  0, 10)//colour
		);
	
	emit.startEmitter(300, 100);

	emit2 = new Emitter(
		width/2,				//x
		height - 200,			//y
		0,						//xSpeed
		-8,					    //ySpeed
		 25,					//size
		 color(255,0,10, 10)	    //colour
		);
	
	emit2.startEmitter(300, 300);

	emit3 = new Emitter(
		width/2,				//x
		height - 150,			//y
		0,						//xSpeed
		-8,					    //ySpeed
		 20,					//size
		 color(255, 140, 0, 10)	//colour
		);
	
	emit3.startEmitter(300, 300);	
}

function draw()
{
	background(0);
	emit.updateParticles();
	emit2.updateParticles();
	emit3.updateParticles();

}