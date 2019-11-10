
// var layer = new Layer();


// var path = new Path([200, 100], [200, 200]);
// var path2 = new Path([150, 150], [250, 150]);

// // Create a layer. The properties in the object literal
// // are set on the newly created layer.

// var layer = new Layer({
//     children: [path, path2],
//     strokeColor: 'black',
//     position: view.center
// });


// console.log(layer)

// Activates the layer.---------------------------------------------------------------------------

// var firstLayer = project.activeLayer;
// var secondLayer = new Layer();
// console.log(project.activeLayer == secondLayer); 
// firstLayer.activate();
// console.log(project.activeLayer == firstLayer)


var circle1 = new Path.Circle(new Point(100, 60), 50)
var circle2 = new Path.Circle(new Point(100, 170), 50)
var circle3 = new Path.Circle(new Point(100, 280), 50)
// circle1.selected = true
var layer = new Layer({
    children: [circle1,circle2,circle3],
    strokeColor: 'blue',
    // position: view.center

});
console.log(layer)

layer.selected = true
// layer.clipMask = true