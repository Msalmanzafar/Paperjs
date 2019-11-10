// example 1------------------------------------------------------------------------------------------

// var myPath = new Path();
// myPath.strokeColor = 'black';
// function onMouseDown(event) {
// 	myPath.add(event.point);
// }

// example 2-----------------------------------------------------------------------------------------

// function onMouseUp(event) {
// 	var myPath = new Path();
//     myPath.strokeColor = 'black';
// 	myPath.add(event.downPoint);
//     myPath.add(event.point);
//     console.log(myPath,'myPath')
    
// }

// example 3-----------------------------------------------------------------------------------------

// var line;

// function onMouseDown(){
//     line = new Path();
//     line.strokeColor = 'gray';
// }

// function onMouseDrag(event){
//     line.add(event.point);
// }

// function onMouseUp(event){
//     var circle = new Path.Circle({
//         radius: 10,
//         center: event.point
//     })

//     circle.fillColor = new Color({hue: Math.random() * 360, saturation: 1, brightness: 1})
//     circle.strokeColor = 'black'
// }