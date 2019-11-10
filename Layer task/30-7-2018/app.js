

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
// var path = new Path.Circle(topLeftPositionForRec, rectSize)
// path.name = 'circle';
// path.visible = false


// var rectangle = new Path.Rectangle(topLeftPositionForRec, rectSize)
// rectangle.name = 'rectangle';
// rectangle.visible = false

// var layer = new Layer({
//     children: [path, rectangle],
//     strokeColor: 'black',

// });


function makeCircle() {
    // var news = new Layer()
    var path = new Path.Circle(topLeftPositionForRec, 50)
    path.name = 'circle';
    path.style = {
        strokeColor: 'black',
    }
}

function makeRectangle() {
    // var news = new Layer()
    var rectangle = new Path.Rectangle(topLeftPositionForRec, rectSize)
    rectangle.name = 'rectangle';
    rectangle.style = {
        strokeColor: 'black',
    }
}
var circle = document.getElementById('Circle')
circle.addEventListener('click', function () {
    // for (var i = 0; i < layer.children.length; i++) {
    //     if (layer.children[i].name === 'circle') {
    //         // console.log('find')
    //         layer.children[i].visible = true;
    //         layer.position = view.center;

    //         console.log(project.activeLayer)
    //     } else {
    //         layer.children[i].visible = false

    //     }
    // }
    project.activeLayer.visible = true
    
    makeCircle()
    console.log(project.activeLayer)
    // project.activeLayer.selected = true

})

var Square = document.getElementById('Square')
Square.addEventListener('click', function (event) {
    // console.log(layer.children)

    // for (var i = 0; i < layer.children.length; i++) {
    //     if (layer.children[i].name === 'rectangle') {
    //         console.log('find')
    //         layer.children[i].visible = true
    //         layer.position = view.center
    //     } else {
    //         layer.children[i].visible = false

    //     }
    // }

    project.activeLayer.visible = false
    makeRectangle()
    console.log(project.activeLayer)
    // console.log(project.activeLayer.bounds)
    // console.log(project.activeLayer.bounds.x)
    // console.log(project.activeLayer.bounds.y)
    project.activeLayer.selected = true


})
// function onMouseUp(event) {
//     console.log(event.point)
//     var point ={
//         x:event.point.x,
//         y: event.point.y
//     }
//     project.activeLayer.position = point
//     // project.activeLayer.fillColor = "rgb(" + Math.random() * 255 + "," +Math.random() * 255 + ","+Math.random() * 255 + ")"
//     // project.activeLayer.position = mouse.y
    
// }

