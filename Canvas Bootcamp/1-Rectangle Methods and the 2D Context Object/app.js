

var ctx = document.getElementById('myCanv').getContext('2d')
console.log(ctx)

ctx.fillStyle = "yellow"// for fill color on recangle 
ctx.fillRect(20, 20, 50, 50)
ctx.strokeRect(20, 20, 50, 50)

ctx.fillRect(80, 80, 40, 40) // for fill the shape
ctx.strokeRect(80, 80, 40, 40) // for creating border of the shape
// ctx.clearRect(0, 0, 60, 60) // for clear all rectangles