
// gravity ball

var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: 10,
    y: 10
}



// function randomIntFromRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomColor(colors) {
//     return colors[Math.floor(Math.random() * colors.length)]
// }

window.addEventListener('mousemove', (event) => {
    // console.log(event)
    mouse.x = event.x;
    mouse.y = event.y

    // console.log(mouse)
})
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()
})

function getCircleDistance(x1, y1, x2, y2) {
    let xDitance = x2 - x1;
    let yDitance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDitance, 2) + Math.pow(yDitance, 2))
    
}


function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius
    
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        // c.stroke()
        c.fill()
        c.closePath()
    }
    
    this.update = function () {
        // console.log(this.x,'this.x')
        // console.log(this.y,'this.y')
        this.draw()
        
    }
}
var circle1;
var circle2;
function init() {
    circle1 = new Circle(canvas.width / 2, canvas.height / 2, 100, 'red')
    circle2 = new Circle(canvas.width / 2, canvas.height / 2, 25, 'red')
}
init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
    circle1.update()
    circle2.x = mouse.x
    circle2.y = mouse.y
    circle2.update()
    if (getCircleDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = "red"
    } else {
        circle1.color = "#000"
    }
    // console.log()
}

animate();