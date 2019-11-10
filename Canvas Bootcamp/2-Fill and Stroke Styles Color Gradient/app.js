

var ctx = document.getElementById('myCanv').getContext('2d');

var g1 = ctx.createLinearGradient(0, 0, 0, 200)
g1.addColorStop(0,'red')
g1.addColorStop(0.5,'yellow')
g1.addColorStop(1,'blue')
ctx.fillStyle = g1
ctx.strokeStyle = 'lightgray'
ctx.lineWidth = 10
ctx.fillRect(0, 0, 100, 100)
ctx.strokeRect(0, 0, 100, 100)

var g2 = ctx.createLinearGradient(0, 0, 200, 0)
g2.addColorStop(0,'blue')
g2.addColorStop(0.5,'green')
g2.addColorStop(1,'lightblue')
ctx.fillStyle = g2
ctx.strokeStyle = 'lightgray'
ctx.lineWidth = 10
ctx.fillRect(120, 0, 100, 100)
ctx.strokeRect(120, 0, 100, 100)
