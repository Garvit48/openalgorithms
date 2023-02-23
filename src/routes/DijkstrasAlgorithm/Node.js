class Node {
    constructor(id=Math.random() * 10000, x, y, radius, ctx) {
        //Every node takes the context on which it was drawn, might be helpful in the future for adding multiple canvases each with their own contexts
        this.id = id
        this.name = id //Later change it to be customizable
        this.ctx = ctx
        this.pos = {
            x: x,
            y: y
        }
        this.radius = radius

        //The path of the node, this is so it is possible to check the intersection of the cursor with the node
        this.path = new Path2D()
        this.ctx.beginPath()
        this.path.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)

        this.connections = []
        this.hovered = false
        this.selected = false
    }

    checkOverlap(objectPos){
        return this.ctx.isPointInStroke(this.path, objectPos.x, objectPos.y) || this.ctx.isPointInPath(this.path, objectPos.x, objectPos.y)
    }

    setStyle(strokeColor="#000000", strokeWidth=2, fillColor="#ffffff"){
       
        this.ctx.strokeStyle = strokeColor
        this.ctx.strokeWidth = strokeWidth
        this.ctx.fillStyle = fillColor

    }

    draw() {
        
        if (this.hovered || this.selected) {
            this.setStyle("#f4f4f4", 2, "RGBA(252,29,189,0.49)")
            this.ctx.stroke(this.path)
            this.ctx.fill(this.path)
            this.ctx.font = "30px Arial"
            this.ctx.fillStyle = "#f4f4f4"
            this.ctx.fillText(this.id, this.pos.x - this.radius/2, this.pos.y - this.radius - 20)
            
        }
        else{
            this.setStyle("#f4f4f4", 2, "#202020")
            this.ctx.stroke(this.path)
            this.ctx.fill(this.path)
        }
        
    }
}