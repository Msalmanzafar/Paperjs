var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle= 'rgb(100,50,0)'
// c.fillRect(100,100,100,100)
// c.fillStyle= 'rgb(50,50,100)'
// c.fillRect(400,100,100,100)
// c.fillStyle= 'rgb(50,50,50)'
// c.fillRect(240,300,100,100)

// // create a line
// c.beginPath();
// c.moveTo(50,200);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = 'darkcyan'
// c.stroke()

// // Arc or Circle
// c.beginPath();
// c.arc(300,250, 30,0,Math.PI * 2, false)
// c.stroke()

// multiple Circle using loop
// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * innerWidth;
//     var y = Math.random() * innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.stroke()

// }

//create animation 
var mouse = {
    x: undefined,
    y: undefined
}
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

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = hue
        c.fill()
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }

        this.x += this.dx
        this.y += this.dy

        // Inner Activity and new func
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < 40) {
                this.radius += 1
            }
        } else if (this.radius > 4) {
            this.radius -= 1
        }

        this.draw()

    }
}
// var circle = new Circle(200, 200, 3, 3, 30)

var circleArray = [];


function init() {
    circleArray = [];
    for (var i = 0; i < 800; i++) {
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        var dx = (Math.random() - 0.3) * 1;
        var dy = (Math.random() - 0.3) * 1;
        var radius = Math.random() * 3 + 1
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }
}
init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    // console.log(circleArray);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }

}

animate();