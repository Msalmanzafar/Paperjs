var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

var colors = [
    "#00bcd4",
    "#e91e63",
    "#e65100",
    "#795548",
    '#9f0500'
]

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

window.addEventListener('mousemove', (event) => {
    // console.log(event)
    mouse.x = event.x;
    mouse.y = event.y

    // console.log(mouse)
})
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function distance(x1, y1, x2, y2) {
    let xDitance = x2 - x1;
    let yDitance = y2 - y1;

    return Math.sqrt(Math.pow(xDitance, 2) + Math.pow(yDitance, 2))

}


function rotate(velocity, angle) {
    const rotateVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    }

    return rotateVelocities;
}

function resolveCollision(particale, otherParticale) {
    // console.log(particale, otherParticale)
    const xVelocityDiff = particale.velocity.x - otherParticale.velocity.x
    const yVelocityDiff = particale.velocity.y - otherParticale.velocity.y

    const xDistance = otherParticale.x - particale.x
    const yDistance = otherParticale.y - particale.y

    //Prevent Accidental overlap of particales
    if (xVelocityDiff * xDistance + yVelocityDiff * yDistance >= 0) {
        //Grab angle the two colliding particles 
        const angle = -Math.atan2(otherParticale.y - particale.y, otherParticale.x - particale.x)

        //store mass for batter readability in collision equation
        const m1 = particale.mass
        const m2 = otherParticale.mass

        // Velocity before equation
        const u1 = rotate(particale.velocity, angle)
        const u2 = rotate(otherParticale.velocity, angle)

        //Velocity after circle collision eqaution
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y }
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y }

        //final velocity after rotating axis to original location
        const vFinal1 = rotate(v1, -angle)
        const vFinal2 = rotate(v2, -angle)

        //Swap particales velocities for realistic bounce loaction
        particale.velocity.x = vFinal1.x
        particale.velocity.y = vFinal1.y

        otherParticale.velocity.x = vFinal2.x
        otherParticale.velocity.y = vFinal2.y

    }

}


function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
        x: (Math.random() - 0.5 * 3),
        y: (Math.random() - 0.5 * 3)
    }
    this.color = color;
    this.radius = radius;
    this.mass = 1;
    this.opacity = 0

    this.update = particales => {
        this.draw()
        // console.log(particales)
        for (let k = 0; k < particales.length; k++) {
            if (this === particales[k]) continue;
            if (distance(this.x, this.y, particales[k].x, particales[k].y) - this.radius * 2 < 0) {
                // console.log("collied")
                resolveCollision(this, particales[k])
            }
        }

        if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
            this.velocity.x = -this.velocity.x
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
            this.velocity.y = -this.velocity.y
        }

        //mouse collision
        if (distance(mouse.x, mouse.y, this.x, this.y) < 80 && this.opacity < 0.4) {
            // console.log("collied")
            this.opacity += 0.04;
        } else{
            this.opacity -= 0.04
            this.opacity = Math.max(0, this.opacity)
        }
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.save()
        c.globalAlpha = this.opacity;
        c.fillStyle = this.color
        c.fill()
        c.restore()
        c.globalAlpha = 0.3;
        c.strokeStyle = this.color
        c.stroke()
        c.closePath()
    }
}

var particales = [];
var radius = 15;
function init() {
    particales = [];
    for (var i = 0; i < window.innerWidth /2.5; i++) {
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(radius, canvas.height - radius)
        
        var color = randomColor(colors)
        particales.push(new Circle(x, y, radius, color))
        
        if (i !== 0) {
            for (var j = 0; j < particales.length; j++) {
                if (distance(x, y, particales[j].x, particales[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius)

                    j = -1
                }
            }
        }
      
    }

}
init();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i < particales.length; i++) {
        particales[i].update(particales)
    }

}

animate();