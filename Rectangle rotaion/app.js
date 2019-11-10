

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Rectangle rotation ==========================================================
var rectA = new Path.Rectangle(new Point(250, 70), new Size(120, 120));
rectA.fillColor = 'pink';

var rectB = rectA.clone();
rectB.fillColor = 'purple';
rectB.position += new Point(80, 80);
rectB.opacity = 0.6;
rectB.blendMode = 'color-burn';
rectB.scale(1.5);
rectB.rotate(45);

var rectC = rectB.clone();
rectC.fillColor = 'lightgreen';
rectC.position += new Point(-180, 0);
rectC.blendMode = 'color-dodge';
rectC.scale(1.5);


function onFrame(){
    rectA.rotate(2)
    rectB.rotate(1)
    rectC.rotate(-1)
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// var topLeft = new Point(10, 20);
// var rectSize = new Size(200, 100);
// var rect = new Path.Rectangle(topLeft, rectSize);
// rect.style ={
//     strokeColor: 'blue',
//     fillColor: 'lightgray'
// }
// rect.onDoubleClick = function(event){
//     rect.transform()
// }
// console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
// console.log(rect.point); // { x: 10, y: 20 }
// console.log(rect.size);
