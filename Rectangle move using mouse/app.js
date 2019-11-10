

var convasSize = this.view.size;

// var path = new Path.Line({
//     from: [0, 0],
//     to: [10, 0],
//     strokeColor: 'black',
//     strokeWidth: 1.5
// })
var path = new Path.Rectangle(10, 10, 10, 10)
path.style = {
    fillColor: 'darkcyan',
}
var symbol = new Symbol(path);

for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 70; j++) {
        var position = new Point(i, j) / 60 * view.size;
        var placed = symbol.place(position);
    }
}

var items = project.activeLayer.children;

function onMouseMove(event) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        var angle = (item.position - event.point).angle;
        item.rotation = angle;
    }
}