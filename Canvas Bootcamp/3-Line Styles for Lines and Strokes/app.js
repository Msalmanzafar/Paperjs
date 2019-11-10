var ctx = document.getElementById('myCanv').getContext('2d')

ctx.lineWidth = 5
ctx.lineCap = 'butt' // butt, round, square
ctx.lineJoin = 'miter' // bevel, round, miter
ctx.miterLimit = 1
ctx.setLineDash([40,5])

ctx.beginPath()
ctx.moveTo(40,40)
ctx.lineTo(80,80)
ctx.lineTo(150,-40)
ctx.stroke()
// ctx.fill()