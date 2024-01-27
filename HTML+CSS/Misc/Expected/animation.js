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

/*
let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

// Initialize canvas dimensions
let canvasWidth, canvasHeight;
updateCanvasDimensions();

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function updateCanvasDimensions() {
    // Get the current dimensions of the canvas
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
}

function moveBall() {
    if (position + radius > canvasWidth) {
        moveSpeed = -speed;
    } else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "#62687f";
    context.beginPath();
    context.arc(position, canvasHeight / 2, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate() {
    updateCanvasDimensions(); // Update canvas dimensions on each frame
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.addEventListener("resize", updateCanvasDimensions); // Update canvas dimensions on window resize
window.requestAnimationFrame(animate);
*/