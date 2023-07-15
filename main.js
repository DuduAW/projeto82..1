var mouseEvent = "empty";


canvas =document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color="black";
widthLine=2;


canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e)
{
    color=document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;


    radius=document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e)
{
    positionMouseX = e.clientX - Canvas.offsetLeft;
    positionMouseY = e.clientY - Canvas.offsetTop;

    if (mouseEvent =="mouseDown"){
        console.log("current position of x and y coordinates =");
        console.log("x =" + positionMouseX +"y =" + positionMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctxlineWidth= widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 ,2 * MathPI);
        ctx.stroke();
    }
    
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e)
{
    mouseEvent= "mouseUp";

}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent= "mouseleave";
}