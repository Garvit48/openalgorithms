const handleMouseDown = e => {
    if (!isOverNode) {
        //This runs if the cursor is not over any node
        draw = true
        //Add the connecting line
        lines.push(new Line(startPos.x, startPos.y, cursorPos.x, cursorPos.y, ctx))
        //Set the start position of the next line to the current node (cursorPos)
        nodeDistance = ((cursorPos.y - startPos.y) ** 2 + (cursorPos.x - startPos.x) ** 2) ** 0.5
        startPos.x = e.clientX      
        startPos.y = e.clientY
        newNode = new Node(nodeIterator, cursorPos.x, cursorPos.y, 20, ctx)
        if (currNode != null) {
            //Adds a 2 way connection between the current node and the previous so that both nodes register the connection
            currNode.connections.push([newNode, nodeDistance])
            newNode.connections.push([currNode, nodeDistance])
        }
        nodes.push(newNode)
        nodeIterator += 1
        currNode = newNode
    }

    else{
        
        if (draw){
            //This runs if the cursor is over some node already and in draw mode, basically, establish a 2 way connection, and reset th currNode, no need to make a newNode since we are already hovering over a pre-existing node, and then add the connection line and then set reset the startPos.

            nodeDistance = ((currNode.pos.y - hoverNode.pos.y) ** 2 + (currNode.pos.x - hoverNode.pos.x) ** 2) ** 0.5
            console.log(nodeDistance)
            currNode.connections.push([hoverNode, nodeDistance])
            hoverNode.connections.push([currNode, nodeDistance])
            currNode = hoverNode
            lines.push(new Line(startPos.x, startPos.y, currNode.pos.x, currNode.pos.y, ctx))
            startPos.x = currNode.pos.x
            startPos.y = currNode.pos.y
        }
        else {
            //This runs if the cursor is over some node already but not in the draw mode. This is the case when we a making a discontinuous connection. No need establish a connection or to draw a line since the connection is not continuous. This is basically setting a new start point for making new connections. So reset the currNode, set the mode to draw (draw = true) and reset the startPos.
            currNode = hoverNode
            draw = true
            startPos.x = currNode.pos.x
            startPos.y = currNode.pos.y
        }
        
        
}
}


const handleMouseMove = e => {
    //Updates the cursorPos everytime the mouse moves
    cursorPos.x = e.clientX
    cursorPos.y = e.clientY
    if (!draw) {
        //If the cursor is not in draw mode then also update the startPos every time the mouse moves so that whenever you click the node get drawn right wehre your cursor is.
        startPos.x = cursorPos.x
        startPos.y = cursorPos.y
    }
}









document.addEventListener("mousedown", e => {
    if (e.clientX < canvas.width && e.clientY < canvas.height) {
        handleClick(e)
    }
})

document.addEventListener("mousemove", e => handleMouseMove(e))

//When you press the escape key, draw mode gets turned off (draw = false)
document.addEventListener("keydown", e => { 
    if (e.key == "Escape") draw = false
    currNode = null
})

