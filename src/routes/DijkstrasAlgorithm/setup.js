const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const width = canvas.width
const height = canvas.height

const infoContainer = document.getElementById("info-container")

let startPos = {
    x: 0,
    y: 0
}

let cursorPos = {
    x: 0,
    y: 0
}

let appMode = "draw"

let nodeIterator = 0

let nodes = []
let lines = []

let draw = false

let connLine = null
let overlap = false

let currNode = null
let isOverNode = false
let hoverCount = 0
let hoverNode = 0
let newNode = null
let nodeDistance = 0



const emptyInfoContainer = () => {
    while (infoContainer.hasChildNodes()) {
        infoContainer.removeChild(infoContainer.firstChild)
    }
}
const showNodeInfo = (node) => {
    emptyInfoContainer()
    let nodeName = document.createElement("h1")
    nodeName.innerHTML = node.name

    let nodeID = document.createElement("h2")
    nodeID.innerHTML = "ID: " + node.id

    let tableTitle = document.createElement("h3")
    tableTitle.innerHTML = "Connections"
    
    let table = document.createElement("table")
    let tableHeader = document.createElement("tr")
    let tableHeaderColumn1 = document.createElement("th")
    let tableHeaderColumn2 = document.createElement("th")
    tableHeaderColumn1.innerHTML = "Node (Name)"
    tableHeaderColumn2.innerHTML = "Edge Weights"
    tableHeader.appendChild(tableHeaderColumn1)
    tableHeader.appendChild(tableHeaderColumn2)
    table.appendChild(tableHeader)

    node.connections.forEach(conn => {
        tableHeader = document.createElement("tr")
        tableHeaderColumn1 = document.createElement("td")
        tableHeaderColumn2 = document.createElement("td")
        tableHeaderColumn1.innerHTML = conn[0].name
        tableHeaderColumn2.innerHTML = conn[1]
        tableHeader.appendChild(tableHeaderColumn1)
        tableHeader.appendChild(tableHeaderColumn2)
        table.appendChild(tableHeader)
    })


    infoContainer.appendChild(nodeName)
    infoContainer.appendChild(nodeID)
    infoContainer.appendChild(tableTitle)
    infoContainer.appendChild(table)
}

const getNode = id => nodes.filter(node => node.id == id)[0]

const getInpVal = inpID => document.getElementById(inpID).value

const resetNodes = () => nodes.forEach(node => node.selected = false)

const resetGraph = () => {
    nodes = []
    lines = []
    nodeIterator = 0
}
const process = () => {
    resetNodes()
    let progressText = document.createElement("h2")
    let totalDistanceText = document.createElement("h2")
    
    let startNodeID = getInpVal("startNode")
    let destNodeID = getInpVal("destNode")
    let algo = new DSPA(startNodeID, nodes)
    algo.getShortestPath(startNodeID, destNodeID)
    
    let iN = destNodeID
    while (algo.shortestDistances[iN] != null) {
        let tempNode = getNode(iN)
        tempNode.selected = true
        progressText.innerHTML = " > " + tempNode.name + progressText.innerHTML       
        iN = algo.shortestDistances[iN][0]
    }

    emptyInfoContainer()

    //Editing the "Path: " text
    progressText.innerHTML = progressText.innerHTML.slice(6)
    progressText.innerHTML = "Path: " + progressText.innerHTML

    //Editiing the "Total: " text
    totalDistanceText.innerHTML = "Total: " + algo.shortestDistances[destNodeID][1]

    //Styling the display text
    progressText.style.marginTop = "40px"
    totalDistanceText.style.marginTop = "20px"
    totalDistanceText.style.marginBottom = "40px"
    totalDistanceText.style.marginRight = "40px"


    infoContainer.appendChild(progressText)
    infoContainer.appendChild(totalDistanceText)
 
}