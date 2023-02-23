class DSPA {
    constructor (startNodeID, nodes){
        this.startNodeID = startNodeID
        this.visited = []
        this.unvisited = nodes.map(node => node.id)
        this.shortestDistances = {}
        this.unvisited.forEach(nodeID => this.shortestDistances[nodeID] = [null, Infinity])
        this.shortestDistances[this.startNodeID] = [null, 0]
        this.success = false
        
    }
    //the node.connections is an array of arrays, nodes.connections = [node, nodeDistance]
    //this.shortestDistances is a dictionary of key: [via, distance]
    //recursive function that checks every node till it reaches the destination node
    getShortestPath(nodeIDParam, targetIDParam){
        let node = getNode(nodeIDParam)
        if (node.id == targetIDParam) this.success = true
        if (this.success) return

        let closestNodeInfo = [null, Infinity]
        let nodeDist = this.shortestDistances[node.id][1]
        
        node.connections.forEach(conn => {
            let connNode = conn[0]
            let connDist = conn[1]

        if (!this.visited.includes(connNode.id)) {
            let dist = connDist + nodeDist
            if (dist < this.shortestDistances[connNode.id][1]) this.shortestDistances[connNode.id] = [node.id, dist]
        }
        })

        this.visited.push(node.id)
        this.unvisited = this.unvisited.filter(nodeID => nodeID != node.id)

        this.unvisited.forEach(nodeID => {
            if (this.shortestDistances[nodeID][1] < closestNodeInfo[1]) {
                closestNodeInfo = [nodeID, this.shortestDistances[nodeID][1]]
            }
        })
        if (closestNodeInfo[0] != null) this.getShortestPath(closestNodeInfo[0], targetIDParam)
    }

}