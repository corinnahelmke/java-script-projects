//Topic 1.2
//Object orientation revisted
//UFO

var flyingSaucers;
var trees;
var clouds;
var penguinManager;

function setup()
{
    createCanvas(1600,600);
    noStroke();
    
    
    flyingSaucers = [];
    for (var i = 0; i < 3; i++)
        {
            flyingSaucers.push(new Ufo(
                100 + i * 550, //x
                100 + i * 40, //y
                100 + i * 30, //width
                0.5 + i * 0.05 //window_width
            ));
        }

    penguin = new Penguin(width/2, height - 100, 500, 1);
    
    penguinManager = new PenguinManager(-900, height - 100, 800, 0);
    
    trees =[
    {x_pos:  100,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  300,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  600,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  900,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  1500,  y_pos: height/2 + 55, width: 70, height: 120},
     ];
    
    clouds=[
        {x_pos: 250,  y_pos: 50, size:  60,  radius: 75}, 
        {x_pos: 600,  y_pos: 150, size: 60,  radius: 70}, 
        {x_pos: 1000, y_pos: 250, size: 60,  radius: 80}, 
        ];

}

function draw(){
    
    drawBackround();
    drawTrees();
    drawClouds();
    drawMoon();

    
    for(var i = 0; i < flyingSaucers.length; i++){
        
                flyingSaucers[i].draw_ufo();  
                flyingSaucers[i].hover();
    }
    
    penguinManager.update();
    penguinManager.draw()
    penguin.draw();
    
}

function drawBackround(){
    
    //Drawing Sky Background
    background(55,0,88);
    
    //Drawing Snow
    fill(255, 250, 250);
    rect(0,height - 100, width, 100);
    
}
function drawMoon(){
    
        fill(245,245,245); //Moon
        noStroke();
        ellipse(width,height-height,150);
        fill(169,169,169);
        ellipse(width-10,height-height +25,15);
        ellipse(width-40,height-height,+50, 50);
        ellipse(width-30,height-height +45,5);
    
    }		
function drawTrees(){
    for(var i = 0; i < trees.length; i++){
        
        //Trees Trunks
        fill(120, 100, 40);

        ellipse(
            trees[i].x_pos + 25,trees[i].y_pos + 85 ,trees[i].width, trees[i].height
        );

        rect(
            trees[i].x_pos, trees[i].y_pos - 5, trees[i].width - 20, trees[i].height + 30
        );

        //Trees Branches
        fill(0,100,0);

        triangle(
            trees[i].x_pos - 30, 
            trees[i].y_pos + 50, 
            trees[i].x_pos + 30, 
            trees[i].y_pos - 50, 
            trees[i].x_pos + 90, 
            trees[i].y_pos + 50
        );

        triangle(
            trees[i].x_pos - 20, 
            trees[i].y_pos, 
            trees[i].x_pos + 30, 
            trees[i].y_pos - 100, 
            trees[i].x_pos + 80, 
            trees[i].y_pos
        );

        triangle(
            trees[i].x_pos - 60, 
            trees[i].y_pos + 118, 
            trees[i].x_pos + 30, 
            trees[i].y_pos + 12, 
            trees[i].x_pos + 120, 
            trees[i].y_pos + 118
        );
        
            fill(255)
            beginShape(TRIANGLES);
                   
            //Left Branch Snow
            vertex(trees[i].x_pos + 5,
            trees[i].y_pos - 50,)
        
            vertex(trees[i].x_pos + 24, 
            trees[i].y_pos - 90,)
        
            vertex(trees[i].x_pos + 30, 
            trees[i].y_pos - 90,)
        
            //Right Branch Snow
            vertex(trees[i].x_pos + 56,
            trees[i].y_pos - 48,)
        
            vertex(trees[i].x_pos + 30, 
            trees[i].y_pos - 90,)
        
            vertex(trees[i].x_pos + 36, 
            trees[i].y_pos - 90,)
        
            //Middle Branch Snow
            vertex(trees[i].x_pos + 27,
            trees[i].y_pos - 70,)
        
            vertex(trees[i].x_pos + 25, 
            trees[i].y_pos - 90,)
        
            vertex(trees[i].x_pos + 35, 
            trees[i].y_pos - 90,)
        
            //Crown Branch Snow
            vertex(trees[i].x_pos + 24,
            trees[i].y_pos - 90,)
        
            vertex(trees[i].x_pos + 30, 
            trees[i].y_pos - 101,)
        
            vertex(trees[i].x_pos + 36, 
            trees[i].y_pos - 90,)

        endShape();
   }
}
function drawClouds(){
    
    for(var i = 0; i < clouds.length; i++){
        
        fill(220,220,220);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size + 20, clouds[i].radius + 50);
        
        ellipse(clouds[i].x_pos - 40, clouds[i].y_pos,clouds[i].size,  clouds[i].radius);
        
        ellipse(clouds[i].x_pos + 40, clouds[i].y_pos,clouds[i].size,  clouds[i].radius );
        
        ellipse(clouds[i].x_pos + 40, clouds[i].y_pos,clouds[i].size + 20,clouds[i].radius + 50);
        
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size, clouds[i].radius);
        
        ellipse(clouds[i].x_pos + 80, clouds[i].y_pos,clouds[i].size, clouds[i].radius);
        
        //Drawing Movement of Clouds
        clouds[i].x_pos+= 0.2;
        
        
        //Redrawing of Clouds that run off the Canvas
        if(clouds[i].x_pos >= 800){
            
            clouds[i].x_pos = 0;
        }
        
    }
        
}
function Ufo(x,y, width, window_width){
        
        //Public Variables
        this.x            = x;
        this.y            = y;
        this.beam_on      = false;

        //Private Variables
        var brightness    = [];
        var ufo_height    = 60;
        var window_height = 1.2;
        var base_height   = 0.45;
        var num_lights    = floor(random(10,22));
        var light_inc     = floor(random(1,4));
        var width         = width;
        var window_width  = window_width;
    
        //Private Methods
        var self          = this;

            
        this.draw_ufo = function (){
            

            //Calling Hovering Effect

            if(this.beam_on == true){

                beam();
            }


            //Drawing the UFO
            fill(175,238,238);
            arc(
                this.x,
                this.y,
                width * window_width,
                ufo_height * window_height,
                PI,
                TWO_PI
            )

            fill(150);
            arc(
                this.x,
                this.y,
                width,
                ufo_height/2,
                PI,
                TWO_PI);

            fill(50);
            arc(
                this.x,
                this.y,
                width,
                ufo_height * base_height,
                0,
                PI);
            
            brightness_arrary();
            lights_on();
            this.hover();

            
        };    
        var beam = function(){
        
 
            
            //Induces Flickering
            if(random() > 0.25){
                
                fill(255,255, 100, 150);
                beginShape();
                vertex(self.x - width * 0.25, self.y);
                vertex(self.x + width * 0.25, self.y);
                vertex(self.x + width * 0.65, height - 100);
                vertex(self.x - width * 0.65, height - 100);
                endShape(CLOSE);
            }
    };      
        this.hover = function(){
            
            this.x += random(-2, 2);
            this.y += random(-1, 1);
            
            if(this.beam_on && random() > 0.995){
                
                    this.beam_on = false;
                    }
            else if(!this.beam_on && random() > 0.999){
                
                    this.beam_on = true;
            }
        };    
        var lights_on = function(){
            
            var increment = width/(num_lights - 1);
    
            fill(255);
            for(var i = 0; i < num_lights; i++){

                fill(brightness[i])
                ellipse(
                    self.x - width/2 + increment * i, 
                    self.y, 
                    5
                    );

                //Animating lights
                brightness[i] += light_inc;
                brightness[i] =brightness[i] % 255;
        }
};     
        var brightness_arrary = function (){

            //Creating values for brightness array
             for(var i = 0; i < num_lights; i++){

             brightness.push((i * light_inc) % 255);
            }
       
};
    }  
function Penguin(x, y, range, speed){
    
    this.x = x;
    this.y = y;
    this.range = range;
    this.speed = speed;
    
    
    this.currentX = x;
    this.increment = random(1,3);
    
    this.walk = function(){
        
        this.currentX += this.increment;
        if(this.currentX >= this.x + this.range){
            
                this.increment -= speed;
            }
        else if(this.currentX < this.x){
            
                this.increment += speed;
            }
        
    }
    this.draw = function(){   
        
        this.walk();
        fill(255,0,0)
  
      //drawing the body
        noStroke();
        fill(0);
        ellipse(this.currentX, this.y - 35, 23, 25); //draw head
        ellipse(this.currentX, this.y - 20, 33, 40); // draw body

        fill(255);
        ellipse(this.currentX, this.y - 14.5, 23.5, 28); //draw belly

        noStroke();
        ellipse(this.currentX, this.y -10, 24, 20); //drawing belly outline

        noStroke();
        smooth();
        fill(255,160, 122);
        triangle(this.currentX - 5, this.y - 34, this.currentX + 5, this.y - 34, this.currentX, this.y - 26); // drawing the mouth

        fill(255,255,240);
        ellipse(this.currentX - 2.5, this.y - 38,   7, 5 ); //draw eyes
        ellipse(this.currentX + 2.5, this.y - 37.3, 7, 8 ); //draw eyes 2

        fill(0);
        ellipse(this.currentX - 2.5, this.y - 38, 1 , 2); //draw iris
        ellipse(this.currentX + 2.5, this.y - 38, 1 , 2); //draw iris 2

        fill(255,160,122)
        stroke(0);
        strokeWeight(0.2);
        arc(this.currentX - 5, this.y + 2, 10, 10, PI, 2*PI);//draw feet
        arc(this.currentX + 5, this.y + 2, 10, 10, PI, 2*PI);//draw feet

        fill(128)
        noStroke();
        arc(this.currentX - 14, this.y - 20, 5, 20, 1.2*PI/2, 3*PI/2); //draw arm
        arc(this.currentX + 15, this.y - 20, 5, 20, 3*PI/2, 0.8*PI/2); //draw arm    
            
    }
    
    } 
function PenguinManager(){
    
        this.minPenguins = 5;
        var penguins = [];
        
        this.update = function(){
            
            if(penguins.length < this.minPenguins){
                
                    penguins.push(new Penguin(100, height - 100, 1400, 0.5 ))
            }
            for(var i = 0; i < penguins.length; i++) {
                
                penguins[i].walk();
            }
        } 
        this.draw = function(){
            
            for(var i = 0; i < penguins.length; i++){
                
                penguins[i].draw();
            }
        }
    
}
    

    