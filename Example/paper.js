
var convasSize = this.view.size;
var maxSize = Math.min(convasSize.width, convasSize.height);
var center = this.view.center;
var strokeWidth = maxSize * 0.02;

function Badge() {
	this.states ={
		idle: {duration: 150, target: 'easeOut'},
		easeOut: {degrees: 20, target: 'twirling', increment: 1},
		twirling: {degrees: 320, target: 'easeIn', increment: 5},
		easeIn: {degrees: 20, target: 'idle', increment: 1}
	}
	this.state = this.states.idle;
}

Badge.prototype = {
	constructor: Badge,
	draw: function () {
		var rectSize = new Size(maxSize * 0.6, maxSize * 0.6);
		var topLeftPositionForRec = new Point(center.x - rectSize.width / 2, center.y - rectSize.height / 2);
		this.path = new Path.Rectangle(topLeftPositionForRec, rectSize);
		this.path.style = {
			fillColor: 'black',
			strokeColor: 'lightgray',
			strokeWidth: strokeWidth
		}
		this.path.rotate(45)

		return this;
	},
	isLastFrameFoeCurrentState: function(){
		return this.state.duration == this.state.frameCount || this.state.degrees == this.state.rotation
	},

	rotate: function(){
		this.state.frameCount = this.state.frameCount || 0;
		this.state.frameCount++;

		if(this.state.increment){
				this.path.rotate(this.state.increment);
				this.state.rotation = this.state.rotation || 0;
				this.state.rotation += this.state.increment;
		}

		if(this.isLastFrameFoeCurrentState()){
			this.state.frameCount = 0;
			this.state.rotation = 0;
			this.state = this.states[this.state.target]
		}	
	}
}

var badge = new Badge().draw();

function Branch(args) {
	this.size = args.size;
	this.origin = args.origin;
	this.position = args.position;
	this.rectTop = badge.path.bounds.topLeft.y;
	this.angle = this.calculateAng(args.position);
	this.color = args.color;
}

Branch.prototype = {
	constructor: Branch,
	draw: function () {
		var resolveOrigin = new Point(center.x, this.rectTop + (maxSize * this.origin));
		var rectangle = new Rectangle(resolveOrigin, new Size(maxSize * this.size, strokeWidth));
		this.path = new Path.Rectangle(rectangle);
		this.path.rotate(this.angle, new Point(resolveOrigin.x, resolveOrigin.y + strokeWidth / 2));
		this.path.style = {
			fillColor: this.color || "#fff"
		}
		return this;
	},
	calculateAng: function (position) {
		var angles = {
			left: -135,
			right: -45,
			center: -90
		}
		return angles[position]
	}
}

var rightBottomBranch = new Branch({ size: 0.3, origin: 0.60, position: 'right' }).draw()
var leftBottomBranch = new Branch({ size: 0.3, origin: 0.60, position: 'left' }).draw()

var rightBottomBranch = new Branch({ size: 0.178, origin: 0.42, position: 'right' }).draw()
var leftBottomBranch = new Branch({ size: 0.178, origin: 0.42, position: 'left' }).draw()

var rightBottomBranch = new Branch({ size: 0.07, origin: 0.28, position: 'right', color: '#39b54a' }).draw()
var leftBottomBranch = new Branch({ size: 0.07, origin: 0.28, position: 'left', color: '#39b54a' }).draw()

var leftBottomBranch = new Branch({ size: 0.5, origin: 0.66, position: 'center' }).draw()

function onFrame(event){
	badge.rotate()
}

// // var originPoint = new Point(center.x, badge.path.bounds.topLeft.y + (maxSize * 0.58))
// // var rectangle = new Rectangle(originPoint, new Size(maxSize * 0.3, strokeWidth));
// // var path = new Path.Rectangle(rectangle);
// // path.rotate(-45, new Point(path.bounds.topLeft.x, path.bounds.topLeft.y + strokeWidth / 2));
// // path.style = {
// // 	fillColor: '#fff'
// // }

// // rectangle = new Rectangle(originPoint, new Size(maxSize * 0.3, strokeWidth));
// // path = new Path.Rectangle(rectangle);
// // path.rotate(-135, new Point(path.bounds.topLeft.x, path.bounds.topLeft.y + strokeWidth / 2));
// // path.style = {
// // 	fillColor: '#fff'
// // }


