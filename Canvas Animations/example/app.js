
// gravity ball

var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}



function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var colors = [
    "#00bcd4",
    "#e91e63",
    "#e65100",
    "#795548",
    '#9f0500'
]
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

window.addEventListener('mousemove', (event) => {
    // console.log(event)
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    // console.log(mouse)
})
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()
})

// function getCircleDistance(x1, y1, x2, y2) {
//     let xDitance = x2 - x1;
//     let yDitance = y2 - y1;

//     return Math.sqrt(Math.pow(xDitance, 2) + Math.pow(yDitance, 2))

// }


function Particales(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this, y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    this.update = function () {

        this.draw()

    }
}

function init() {
    
}
init();

function animate() {
    requestAnimationFrame(animate);
    // c.fillRect(0, 0, canvas.width, canvas.height)
    c.clearRect(0, 0, canvas.width, canvas.height);

}

animate();