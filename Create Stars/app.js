//star shape==========================================================
var star = new Path.Star({
    center: [250, 250],
    points: 5 + Math.floor(Math.random() * 2),
    radius1: 50 + Math.random() * 50,
    radius2: 25 + Math.random() * 30,
    fillColor: 'lightBlue'
})

var star1 = star.clone();
star1.fillColor = 'darkcyan'
star1.fillColor.alpha = 0.5
star1.position += [-130, 0]
star1.simplify()

var star2 = star.clone();
star2.fillColor = 'red'
star2.fillColor.alpha = 0.5
star2.position += [130, 0]
star2.simplify()

var star3 = star.clone();
star3.fillColor = 'black'
star3.fillColor.alpha = 0.5
star3.position += [280, 0]
star3.smooth()

function onFrame(event) {
    
    star.fillColor.hue += 0.5;
    
    
}
