/**
 * 
 * Dijkstra's Algorithm
 * 
 * Finds shortest paths from a starting node to all other nodes
 * Works on weighted graphs with non-negative edge weights
 * Maintains a set of unvisited nodes and continuously updates shortest distances
 * Uses a priority queue to always explore the node with the smallest known distance
 * Marks nodes as visited once their shortest path is determined
 * 
 * Time complexity: O(V^2) or O((V+E)logV) with an optimized implementation
 * 
 */

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(v) {
        if(!this.adjacencyList[v]) this.adjacencyList[v] = []
    }

    addEdge(v1,v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight })
        this.adjacencyList[v2].push({ node: v1, weight })
    }

}

const g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdge('A','B', 9)
g.addEdge('A','C', 5)
g.addEdge('B','C', 7)
console.log(g.adjacencyList)