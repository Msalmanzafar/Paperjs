
// Create line use mouseDown ========================================================
// var rectangle = new Path();

// rectangle.style={
//     strokeWidth: 2,
//     strokeColor: 'black'
// }

// function onMouseDown(event){
//     rectangle.add(event.point)
// }
// Create line use mouseDown ========================================================

// Create line use mouseDown & onMouseUp ========================================================
// var myPath;
// function onMouseDown(event) {
//     myPath = new Path();
//     myPath.strokeColor = "black"
//     myPath.add(event.point);
// }
// function onMouseUp(event) {
//     myPath.add(event.point);
// }

// Create line use mouseDown & onMouseUp ========================================================


// Create line use onMouseDrag ========================================================
// var myPath = new Path();

// function onMouseDrag(event) {
//     myPath.strokeWidth = 4
//     myPath.strokeColor = 'blue'
//     myPath.add(event.point);
//     myPath.smooth(210)
// }
// Create line use onMouseDrag ========================================================

// var myPath;

// function onMouseDown(event) {
// 	myPath = new Path();
// 	myPath.strokeColor = 'black';
// }
// function onMouseDrag(event) {
// 	myPath.add(event.point);
// }

// function onMouseUp(event) {
// 	var myCircle = new Path.Circle({
// 		center: event.point,
// 		radius: 10
//     });
// 	myCircle.strokeColor = 'black';
// 	myCircle.fillColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });;
// }
//============================================================================================

//============================================================================================

// function onMouseUp(event) {
// 	var circle = new Path.Circle({
// 		center: event.middlePoint,
// 		radius: event.delta.length / 2
// 	});
// 	circle.strokeColor = 'black';
// 	circle.fillColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });;
// }
//============================================================================================


//============================================================================================

// tool.minDistance = 20;

// function onMouseDrag(event) {
// 	var circle = new Path.Circle({
// 		center: event.middlePoint,
// 		radius: event.delta.length / 2
// 	});
// 	circle.fillColor = 'black';
// }
//============================================================================================

//============================================================================================

// tool.minDistance = 20;
// function onMouseDrag(event) {
//     var circle = new Path.Circle(
//         {
//             center: event.middlePoint,
//             radius: event.delta.length / 2
//         })
//     circle.style = {
//         strokeColor: 'lightGray',
//         strokeWidth: 5,
//         fillColor: 'cyan'
//     }
// }
//============================================================================================




//============================================================================================
tool.minDistance = 10;
tool.maxDistance = 45;

// console.log(tool)
var path;

function onMouseDown(event) {
	path = new Path();
	path.fillColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });
    // console.log(path)
	path.add(event.point);
}

function onMouseDrag(event) {
	var step = event.delta / 2;
	// console.log(event.middlePoint)
	step.angle += 90;
	
	var top = event.middlePoint + step;
	var bottom = event.middlePoint - step;
    // console.log(path)
	path.add(top);
	path.insert(0, bottom);
	path.smooth();
}

function onMouseUp(event) {
    console.log(path)
	path.add(event.point);
	path.closed = true;
	path.smooth();
    console.log(path)

}