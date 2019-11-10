
// create a circle using paperjs======================================
// also circle are moving top to bottom=============================
var circle1 = new Path.Circle(new Point(45, 150), 45)
var circle2 = new Path.Circle(new Point(140, 150), 45)
var circle3 = new Path.Circle(new Point(235, 150), 45)
var circle4 = new Path.Circle(new Point(330, 150), 45)
var circle5 = new Path.Circle(new Point(430, 150), 45)
var circle6 = new Path.Circle(new Point(530, 150), 45)

circle3.name = 'red'

project.activeLayer.firstChild.fillColor = 'orange';
project.activeLayer.lastChild.fillColor = 'pink';
project.activeLayer.children[1].fillColor = 'purple';
project.activeLayer.children['red'].fillColor = 'lightgreen';
for (var i = 3; i < 5; i++) {
    project.activeLayer.children[i].fillColor = 'tomato';
}

var obj = {
    circle1: circle1,
    circle2: circle2,
    circle3: circle3,
    circle4: circle4,
    circle5: circle5,
    circle6: circle6,
}

function onFrame(event) {
    if (Key.isDown('w')) {
        for (var key in obj) {
            obj[key].scale(1.1)
        }
    }
    if (Key.isDown('s')) {
        for (var key in obj) {
            obj[key].scale(0.9)
        }
    }
    if (Key.isDown('right')) {
        for (var key in obj) {
            obj[key].translate(5, 0)
        }
    }
    if (Key.isDown('left')) {
        for (var key in obj) {
            obj[key].translate(-5, 0)
        }
    }
    if (Key.isDown('up')) {
        for (var key in obj) {
            obj[key].translate(0, -5)
        }
    }
    if (Key.isDown('down')) {
        for (var key in obj) {
            obj[key].translate(0, 5)
        }
    }
    var x = (1 + Math.cos((event.count * 3 % 360) * (Math.PI / 180))) * 60 + 10
    var y = (Math.abs(Math.sin((event.count * 3 % 360) * (Math.PI / 180)))) * 80;
    // myRectangle.position.x = x;

    for (var key in obj) {
        obj[key].position.x 
        obj[key].position.y = 360 - y - x - y + x-y;
    }

}