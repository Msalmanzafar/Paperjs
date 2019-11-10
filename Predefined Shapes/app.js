
//Circle Shaped Paths

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = 'black';

//Rectangular Shaped Paths
var rectangle = new Rectangle(new Point(50, 50), new Point(150, 100));
var path = new Path.Rectangle(rectangle);
path.fillColor = '#e9e9ff';
path.selected = true;

path.position.x += 120

//Rectangular Shaped Paths with Rounded Corners
var rectangle = new Rectangle(new Point(50, 50), new Point(150, 100));
var cornerSize = new Size(20, 20);
var path1 = new Path.RoundRectangle(rectangle, cornerSize);
path1.fillColor = 'black';

path1.position.x += 240

//Regular Polygon Shaped Paths

// Create a triangle shaped path 
var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 50);
triangle.fillColor = '#e9e9ff';
triangle.selected = true;
triangle.position.x += 370

// Create a decagon shaped path 
var decagon = new Path.RegularPolygon(new Point(200, 70), 10, 50);
decagon.fillColor = '#e9e9ff';
decagon.selected = true;
decagon.position.x += 360
