// creating a line left side upper corner to right side down corner 
// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0));
// myPath.add(new Point(100, 50));

//add new vector with head to tail roles

// myPath.insert(1, new Point(25, 30));
// myPath.insert(1, new Point(50, 25));

// Smooth path

// var path = new Path();
// path.strokeColor = 'black';
// path.add(new Point(30, 75)); 
// path.add(new Point(30, 25)); 
// path.add(new Point(80, 25));
// path.add(new Point(80, 75));
// path.closed = true;

// Select the path, so we can see its handles:
// path.fullySelected = true;

// // Create a copy of the path and move it 100pt to the right:
// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;

// // Smooth the segments of the copy:
// copy.smooth();

// var path2 = new Path();
// path2.add(new Point(30, 75)); 
// path2.add(new Point(80, 25)); 
// path2.add(new Point(30, 25)); 
// path2.closed = true;

// path2.fullySelected = true;
// path2.position.x += 200;

// var path3 = new Path();
// path3.add(new Point(30, 75)); 
// path3.add(new Point(80, 75)); 
// path3.add(new Point(30, 25)); 
// path3.closed = true;

// path3.fullySelected = true;
// path3.position.x += 300;

// var path4 = new Path();
// path4.add(new Point(30, 25)); 
// path4.add(new Point(-40, 75)); 
// path4.add(new Point(30, 75)); 
// path4.closed = true;

// path4.fullySelected = true;
// path4.position.x += 440;
var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(40, 90));
myPath.add(new Point(90, 40));
myPath.add(new Point(140, 90));
myPath.fullySelected = true;

myPath.closed = true;

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.strokeColor = 'black';
myCircle.selected = true;
myCircle.position.x += 100;

var myCircle1 = new Path.Circle(new Point(100, 70), 50);
myCircle1.strokeColor = 'black';
myCircle1.selected = true;
myCircle1.position.x += 230;
myCircle1.removeSegment(3)

var myCircle2 = new Path.Circle(new Point(100, 70), 50);
myCircle2.strokeColor = 'black';
myCircle2.selected = true;
myCircle2.position.x += 350;
myCircle2.removeSegment(2)

var myCircle3 = new Path.Circle(new Point(100, 70), 50);
myCircle3.strokeColor = 'black';
myCircle3.selected = true;
myCircle3.position.x += 450;
myCircle3.removeSegment(1)
myCircle3.remove()

var myCircle4 = new Path.Circle(new Point(100, 70), 50);
myCircle4.strokeColor = 'black';
myCircle4.selected = true;
myCircle4.position.x += 550;
myCircle4.removeSegment(0)
