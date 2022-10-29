class Graph {
    constructor() {
      this.node = {}
      this.edge = {}
    }
  
    addNode(id, value) {
      this.node[id] = value
    }
  
    addEdge(startNode, endNode) {
      if (this.edge[startNode] && this.edge[startNode].indexOf(endNode) === -1) {
        this.edge[startNode].push(endNode)
      } else {
        this.edge[startNode] = [endNode]
      }
    }
  
    removeNode(nodeId) {
      this.node[nodeId] = undefined
  
      Reflect.deleteProperty(this.edge, nodeId) // delete a property on an object
  
      for (const edgeId in this.edge) {
        let i = 0
        for (const endNode of this.edge[edgeId]) {
          if (endNode === nodeId) {
            this.edge[edgeId].splice(i, 1)
            break
          }
          i++
        }
      }
    }
  }
  
  const graph = new Graph()
  
  graph.addNode(1, 'Book 1')
  graph.addNode(2, 'Book 2')
  graph.addNode(3, 'Book 3')
  
  graph.addEdge(1, 2)
  graph.addEdge(1, 3)
  graph.addEdge(3, 2)
  
  graph.removeNode(2)
  
  console.log(graph)
  