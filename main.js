canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverX=10;
roverY=10;
roverW=70;
roverH=70;

images =["1.png", "2.png, 3.jpg, 4.jpg, 5.jpg"]
var random =Math.floor(Math.random()*4);
background_image= images[random];
rover_image="rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, roverW, roverH);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38');
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40');
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37');
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39');
    {
        right();
        console.log("right");
    }
}
/*up*/
function up()
{
    if(roverY >=0)
    {
        roverY =roverY-10;
        uploadBackground();
        uploadrover();
    }
}
/*Down*/
function down()
{
    if(roverY <=500)
    {
        roverY =roverY+10;
        uploadBackground();
        uploadrover();
    }
}
/*left*/
function left()
{
    if(roverX >=0)
    {
        roverX =roverX-10;
        uploadBackground();
        uploadrover();
    }
}
/*right*/
function right()
{
    if(roverX <=700)
    {
        roverX =roverX+10;
        uploadBackground();
        uploadrover();
    }
}
