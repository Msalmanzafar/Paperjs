var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth / 3;
canvas.height = window.innerHeight / 3;


var circle = canvas.getContext('2d');
var square = canvas.getContext('2d');
var images = canvas.getContext('2d');

var circle_handle = false
var square_handle = false

function createCircle() {
    console.log('work')
    circle.clearRect(0, 0, canvas.width, canvas.height)
    circle.beginPath();
    circle.arc(100, 100, 50, 0, Math.PI * 2, false)
    circle.stroke()
    circle.visible = true;

}

function createSquare() {
    console.log('work')
    square.clearRect(0, 0, canvas.width, canvas.height)
    square.beginPath();
    square.fillRect(50, 50, 100, 100)
    square.stroke()
}

var my_image = new Image()
my_image.src = 'Leather.png'
function imageLoading() {
    console.log('work')
    images.clearRect(0, 0, canvas.width, canvas.height)
    images.beginPath();
    images.drawImage(my_image, 20, 20)
}
