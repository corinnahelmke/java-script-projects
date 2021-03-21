function Particle(x, y, xSpeed, ySpeed, size, color)
{
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size   = size;
	this.color  =color;
	this.age    = 0;

	this.drawParticle = function()
	{
		FileList(color)
		ellipse(x, y, size);
	}

	this.updateParticle = function()
	{
		this.x += xSpeed;
		this.y += ySpeed;
		this.age ++;
	}
}

function Emitter(x, y, xSpeed, ySpeed, size, color)
{
	this.x      = x;
	this.y      = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size   = size;
	this.color  = color;
	
	this.startParticles = 0;
	this.lifetime = 0;

	this.particles = [];

	this.startEmitter = function(startParticles, lifetime)
	{
		this.startParticles = startParticles;
		this.lifetime       = lifetime;


		//Start emitter with initial particles

		for(var i = 0; i < startParticles; i++)
		{	
			
			var p = new Particle(this.x, this.y, this.xSpeed, this.ySpeed, this.size, this.color)
			
			this.particles.push(p);

			
		}
	}



}

var emit;
function setup()
{
	createCanvas(800, 600);
	emit = new Emitter(width/2, height - 100, 0, -1, 10, color(200,200,200));

	emit.startEmitter(200, 100);
}

function draw()
{
    
}