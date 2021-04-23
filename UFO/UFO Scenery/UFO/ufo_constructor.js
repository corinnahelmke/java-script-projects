//Topic 1.2
//Object orientation revisted
//UFO

var flyingSaucers;
var trees;
var clouds;

function setup()
{
    createCanvas(1200,600);
    noStroke();
    
    
    flyingSaucers = [];
    
    for (var i = 0; i < 5; i++)
        {
            flyingSaucers.push(new Ufo(
                100 + i * 250, //x
                100 + i * 40, //y
                100 + i * 30, //width
                0.5 + i * 0.05 //window_width
            ));
        }
    
    trees =[
    {x_pos:  100,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  300,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  600,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  1000,  y_pos: height/2 + 55, width: 70, height: 120},
     ];
    
    clouds=[
        {x_pos: 250,  y_pos: 50, size: 60,  radius:  75}, 
        {x_pos: 600,  y_pos: 150, size: 60,  radius:  70}, 
        ];

}

function draw(){
    
    drawBackround();
    drawTrees();
    drawClouds();
    
    for(var i = 0; i < flyingSaucers.length; i++){
        
                flyingSaucers[i].draw_ufo();  
                flyingSaucers[i].hover();
    }



    
}



function drawBackround(){
    
    //Drawing Sky Background
    background(55,0,88);
    
    //Drawing Grass
    fill(0,55,0);
    rect(0,height - 100, width, 100);
    
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
     
        this.x      = x;
        this.y      = y;
        this.width  = width;
        this.height = 60;
            
        this.window_width  = window_width;
        this.window_height = 1.2;
        this.base_height   = 0.45;
        this.num_lights    = 20;
        this.brightness    = [];
        this.beam_on       = false;
            
        this.draw_ufo = function (){
            

            //Calling Hovering Effect

            if(this.beam_on == true){

                this.beam();
            }


            //Drawing the UFO
            fill(175,238,238);
            arc(
                this.x,
                this.y,
                this.width * this.window_width,
                this.height * this.window_height,
                PI,
                TWO_PI
            )

            fill(150);
            arc(
                this.x,
                this.y,
                this.width,
                this.height/2,
                PI,
                TWO_PI);

            fill(50);
            arc(
                this.x,
                this.y,
                this.width,
                this.height * this.base_height,
                0,
                PI);
            
            this.brightness_arrary();
            this.lights_on();
            this.hover();

            
        };    
        this.beam = function(){
        
 
            
            //Induces Flickering
            if(random() > 0.25){
                
                fill(255,255, 100, 150);
                beginShape();
                vertex(this.x - this.width * 0.25, this.y);
                vertex(this.x + this.width * 0.25, this.y);
                vertex(this.x + this.width * 0.65, height - 100);
                vertex(this.x - this.width * 0.65, height - 100);
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
        this.lights_on = function(){
            
            var increment = this.width/(this.num_lights - 1);
    
            fill(255);
            for(var i = 0; i < this.num_lights; i++){

                fill(this.brightness[i])
                ellipse(
                    this.x - this.width/2 + increment * i, 
                    this.y, 
                    5
                    );

                //Animating lights
                this.brightness[i] += 1;
                this.brightness[i] =this.brightness[i] % 255;
        }
};     
        this.brightness_arrary = function (){

            //Creating values for brightness array
             for(var i = 0; i < this.num_lights; i++){

             this.brightness.push((i * 15) % 255);
            }
       
};
    }
    