
// gravity ball

var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

var gravity = 1;
var friction = 0.99;
var colors = [
    "#f44336",
    "#004dcf",
    "#abb8c3",
]

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

addEventListener('click',()=>{
    init()
})

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

function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.radius = radius

    // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        // c.stroke()
        c.fill()
        c.closePath()
    }

    this.update = function () {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity
            // console.log(this.dy)
        }
        if (this.x + this.radius + this.dx > canvas.width || this.dx - this.radius <= 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw()

    }
}

var ballArray = [];
// var ball;
function init() {
    ballArray = []
    for (var i = 0; i < 150; i++) {
        var radius = randomIntFromRange(15,30)
        var x = randomIntFromRange(radius, canvas.width - radius)
        var y = randomIntFromRange(0, canvas.height - radius)
        var dx = randomIntFromRange(-2, 2)
        var dy = randomIntFromRange(-2, 2)
        var color = randomColor(colors)
        //  var hue = 'rgb(' + (Math.floor(Math.random() * 200)) + ',' + (Math.floor(Math.random() * 200)) + ',' + (Math.floor(Math.random() * 200)) + ')';
        ballArray.push(new Ball(x, y, dx, dy, radius, color))
    }
    // ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 30, 'red')
    // console.log(ball)
    // console.log(ballArray)
}
init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update()
    }
    // ball.update()

}

animate();