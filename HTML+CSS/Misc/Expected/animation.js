let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if(position + radius > 640) {
        moveSpeed = -speed;
    } else if(position - radius <0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 640, 480);   //clears the canvas area

    context.fillStyle = "#62687f";
    context.beginPath();  //draws the ball in its current position; used to begin a new path or reset the current path in the canvas
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate); // schedules the animate function to be called again at the end of the file

}

window.requestAnimationFrame(animate);