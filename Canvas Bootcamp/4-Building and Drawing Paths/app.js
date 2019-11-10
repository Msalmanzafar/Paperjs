var ctx = document.getElementById('myCanv').getContext('2d')

// ctx.beginPath()
// ctx.moveTo(20,20)
// ctx.lineTo(150,20)
// ctx.lineTo(150,80)
// ctx.lineTo(20,80)
// ctx.closePath()
// ctx.stroke()

// rectangle=============================================================

// ctx.rect(50,50,100,100)
// // ctx.rect(150,50,100,100)
// ctx.clip()
// ctx.rect(0,0,100,100)
// ctx.stroke()


//Circle==================================================================
// ctx.arc(80, 80, 50, 0,4, false)
// ctx.stroke()

// Angled line

ctx.moveTo(50,50);
ctx.lineTo(100,50)
ctx.arcTo(150,50,150,100,50)
ctx.lineTo(150,350)

ctx.stroke()
