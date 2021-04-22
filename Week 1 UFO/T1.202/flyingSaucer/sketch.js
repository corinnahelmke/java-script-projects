//Topic 1.1 
//Object orientation revisted
//UFO

var ufo_x;
var ufo_y;

var trees;
var clouds;

function setup()
{
    createCanvas(800,600);
    noStroke();
    
    ufo_x = 500;
    ufo_y = 250;
    
    trees =[
    {x_pos:  100,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  300,  y_pos: height/2 + 55, width: 70, height: 120},
    {x_pos:  600,  y_pos: height/2 + 55, width: 70, height: 120},
     ];
    
    clouds=[
        {x_pos: 250,  y_pos: 50, size: 60,  radius:  75}, 
        {x_pos: 600,  y_pos: 150, size: 60,  radius:  70}, 
        ];
}

function draw()
{
    background(55,0,88);
    
    //Draws the Background
    fill(0,55,0);
    rect(0,height - 100, width, 100);
    
    //Drawing the UFO
    fill(175,238,238);
    arc(ufo_x,ufo_y,75,100,PI,TWO_PI)
    
    fill(150);
    arc(ufo_x,ufo_y,150,50,PI,TWO_PI);
    
    fill(50);
    arc(ufo_x,ufo_y,150,25,0,PI);
    
    ufo_x += random(-5, 5);
 
    
    
    
    drawTrees();
    drawClouds();
    
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

