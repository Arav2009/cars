canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

background_image="racing.jpg";

car1_width="100";
car1_height="90";

car1_X=10;
car1_Y=10;

car1_image="car1.png";

car2_width="100";
car2_height="90";

car2_X=50;
car2_Y=50;

car2_image="car1.png";

function add()
{
    console.log("add function;");
background_imgTag= new Image();
background_imgTag.onload= uploadbackground;
background_imgTag.src= background_image;

car1_imgTag= new Image();
car1_imgTag.onload= uploadcar1;
car1_imgTag.src= car1_image;

car2_imgTag= new Image();
car2_imgTag.onload= uploadcar2;
car2_imgTag.src= car2_image;

}

function uploadbackground()

{
   ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height) ;
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_X,car1_Y,car1_height,car1_width);
}
function uploadcar2()
{
    ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_height,car2_width);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode; 
    console.log(keypressed);
     
    if(keypressed=='38'){
        car1_up();
        console.log("up");
    }
    
    if(keypressed=='37'){
       car1_left();
        console.log("left");
    }
    if(keypressed=='39'){
        car1_right();
        console.log("right");
    }
    if(keypressed=='40'){
        car1_down();
        console.log("down");
    }
    
    if(keypressed=='87'){
        car2_up();
        console.log("key W");
    }
    
    if(keypressed=='65'){
       car2_left();
        console.log("key A");
    }
    if(keypressed=='68'){
        car2_right();
        console.log("key D");
    }
    if(keypressed=='83'){
        car2_down();
        console.log("key S");
    }
}
  function car1_up()
{
    if(car1_Y >=0)
     {
    car1_Y= car1_Y-10;
    console.log("when up arrow is pressed,x=" + car1_X + "-" + car1_Y);
    uploadbackground();
    uploadcar1();
    uploadcar2
     }
}

function car1_down()
{
    if(car1_Y<=600)
    {
        car1_Y=car1_Y+10;
        console.log("when down arrow is pressed,x=" + car1_X + "; y= " + car1_Y);
        uploadbackground();
        uploadcar1(); 
        uploadcar2
        

    }
}

function car1_left() 

{
    if(car1_X>=0)
    {
         car1_X= car1_X-10;
         console.log("when left arrow is pressed,x="+car1_X+ "; y= "+ car1_Y);
          uploadbackground();
         uploadcar1(); 
         uploadcar2
    }

} 

function  car1_right()
{
    if(car1_X<=600)
    {
        car1_X= car1_X+10;
        console.log("when up arrow is pressed,x="+car1_X+ "; x "+car1_Y); 
        uploadbackground();
        uploadcar1();  
        uploadcar2();
  }
} 
  function car2_up()
  {
    if(car2_Y >=0)
{
    car2_Y= car2_Y-10;
    console.log("when W is pressed,x=" + car2_X + "-" + car2_Y);
    uploadbackground();
    uploadcar1();
    uploadcar2();

}
}

function car2_down()
{
    if(car2_Y<=600)
    {
        car2_Y=car2_Y+10;
        console.log("when S is pressed,x=" + car1_X + "; y= " + car2_Y);
        uploadbackground();
        uploadcar2(); 
        uploadcar1();
        

    }
}

function car2_left() 

{
    if(car2_X>=0)
    {
         car2_X= car2_X-10;
         console.log("when A is pressed,x="+car2_X+ "; y= "+ car1_Y);
          uploadbackground();
         uploadcar2(); 
         uploadcar1
    }

} 

function  car2_right()
{
    if(car2_X<=600)
    {
        car2_X= car2_X+10;
        console.log("when up arrow is pressed,x="+car2_X+ "; x "+car2_Y); 
        uploadbackground();
        uploadcar2();
        uploadcar1  
  }
}
