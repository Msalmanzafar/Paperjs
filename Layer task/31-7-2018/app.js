
var canvasSize = this.view.size;
var maxSize = Math.min(canvasSize.width, canvasSize.height);
var center = this.view.center;
var strokeWidth = maxSize * 0.02;

var rectSize = new Size(maxSize * 0.2, maxSize * 0.2);
var topLeftPositionForRec = new Point(center.x - rectSize.width / 2, center.y - rectSize.height / 2);

var mouse = {
    x: canvasSize.width,
    y: canvasSize.height
}


var circle_layer;
var rectangle_layer;

function makeCircle() {
    var path = new Path.Circle(topLeftPositionForRec, 50)
    path.name = 'circle';
    path.style = {
        strokeColor: 'black',
    }
    // circle_layer = project.activeLayer;
}

function makeRectangle() {
    var rectangle = new Path.Rectangle(topLeftPositionForRec, rectSize)
    rectangle.name = 'rectangle';
    rectangle.style = {
        strokeColor: 'black',
    }
    // rectangle_layer = project.activeLayer;
}

// calling a function on circle button
var circle = document.getElementById('Circle')
circle.addEventListener('click', function () {

    // removing all children for new one
    project.activeLayer.removeChildren();
    // active canvas for creating new layers
    clearCanvas = false;

    makeCircle()
    // circle_layer.activate()
    console.log(project.activeLayer)

})

// calling a function on Square button
var news = new Layer()
var Square = document.getElementById('Square')
Square.addEventListener('click', function (event) {
    
    news.activate()
    // removing all children for new one
    project.activeLayer.removeChildren();
    clearCanvas = false;
    // active canvas for creating new layers
    makeRectangle()
    // rectangle_layer.activate()

    console.log(project.activeLayer)


})

