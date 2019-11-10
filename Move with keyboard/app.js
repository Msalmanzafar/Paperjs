var rectangle = new Rectangle(new Point(100, 50), new Size(180, 100));
var path = new Path.Rectangle(rectangle);

path.style = {
    fillColor: 'lightgray',
    strokeColor: 'blue',
    strokeWidh: 10
}

function onFrame(event) {
    if (Key.isDown('d')) {
        path.translate(5,0)
    }
    if (Key.isDown('a')) {
        path.translate(-5,0)
    }
    if (Key.isDown('s')) {
        path.translate(0,5)
    }
    if (Key.isDown('w')) {
        path.translate(0,-5)
    }
    if (Key.isDown('right')) {
        path.rotate(10)
    }
    if (Key.isDown('left')) {
        path.rotate(-10)
    }
    if (Key.isDown('up')) {
        path.scale(1.1)
    }
    if (Key.isDown('down')) {
        path.scale(0.9)
    }
}