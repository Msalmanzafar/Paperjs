
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

function getCircleDistance(x1, y1, x2, y2) {
    let xDitance = x2 - x1;
    let yDitance = y2 - y1;

    return Math.sqrt(Math.pow(xDitance, 2) + Math.pow(yDitance, 2))

}


function Particales(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius
    this.radians = Math.random() * Math.PI * 2
    this.velocity = 0.05
    this.distanceFromCenter = randomIntFromRange(50, 100);
    this.lastMouse = {
        x: x,
        y: y
    }

    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
    }

    this.update = function () {
        const lastPoint = {
            x: this.x,
            y: this.y

        }

        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05
        this.radians += this.velocity;
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;


        this.draw(lastPoint)

    }
}

var particales = []
function init() {
    particales = []

    for (var i = 0; i < 50; i++) {
        const radius = (Math.random() * 2) + 1
        particales.push(new Particales(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)))
    }
    // console.log(particales)
}
init();

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255,0.05)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    particales.forEach(particale => {
        particale.update()
    })

}

animate();