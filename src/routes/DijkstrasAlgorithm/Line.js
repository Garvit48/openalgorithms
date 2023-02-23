class Line{
    
    constructor(x1, y1, x2, y2, ctx){
        //The coordinates of the line since the line is drawn by taking two points and drawing a line betweeen them
        this.pos = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        }
        //Context of the line
        this.ctx = ctx
        //Path of the lone
        this.path = new Path2D()
        this.path.moveTo(this.pos.x1, this.pos.y1)
        this.path.lineTo(this.pos.x2, this.pos.y2)
        this.style = {
            color: "#f4f4f4",
            width: 2
        }
    }

    setStyle(){
        this.ctx.strokeStyle = this.style.color
        this.ctx.fillStyle = this.style.color
        this.ctx.strokeWidth = this.style.width
    }

    draw(){
        this.setStyle()
        this.ctx.stroke(this.path)
    }

}