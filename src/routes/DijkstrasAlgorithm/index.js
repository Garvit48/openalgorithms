

function mainloop() {
    //Clear the canvas every frame
    ctx.clearRect(0, 0, width, height)

    //Draw the lines every frame
    lines.forEach(line => {
        line.draw()
    })

    //Draw the frames every frame
    nodes.forEach(node => {
        node.hovered = node.checkOverlap(cursorPos)
        //Check for each node if it is being hovered over by checking if the cursorPos intersects with the area enclosed by the nodes of the lines making up the nodes (not the connection lines)
        
        // let actives = 0
        // node.connections.forEach(connection => {
        //     if (connection[0].hovered){
        //         actives += 1
        //     }
        //     node.selected = actives > 0
        // })
        
        if (node.hovered) {
            hoverCount += 1
            hoverNode = node
            
        }
        node.draw()
    })
    //If the cursor is over more than 0 nodes, the set isOverNode = true (hoverCount > 0 because the cursor can be over multiple nodes at once as in the case of intersecting nodes). You cannot check for individual nodes cause then every frame if the last node is not being hovered over the result a the end of each frame will be false. We need to check if any of the nodes is being hovered over.
    isOverNode = hoverCount > 0
    //Reset the hover count every frames
    hoverCount = 0

    

    if (draw) {
        connLine = new Line(startPos.x, startPos.y, cursorPos.x, cursorPos.y, ctx)
        connLine.draw(ctx)
    }
    requestAnimationFrame(mainloop)
}

mainloop()