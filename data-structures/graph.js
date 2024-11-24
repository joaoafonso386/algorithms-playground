/**
 * A graph is a collection of nodes (vertices) connected by edges.
 * - Directed: Edges have a direction. Undirected: Edges have no direction.
 * - Weighted: Edges have costs. Unweighted: Edges have no costs.
 *
 * Representations:
 * - Adjacency List: Nodes with their neighbors.
 * - Adjacency Matrix: 2D array showing edge presence/weights.
 *
 * Time complexity:
 * - Traversal (BFS/DFS): O(V + E), where V = vertices, E = edges.
 */

class Graph {
    constructor() {
        this.adjancyList = {}
    }

    addVertex(vertex) {
        if(!this.adjancyList[vertex]) this.adjancyList[vertex] = []
    }

    addEdge(v1,v2) {
        this.adjancyList[v1].push(v2)
        this.adjancyList[v2].push(v1)
    }
}


const g = new Graph()
g.addVertex('tokyo')
g.addVertex('lisbon')
g.addVertex('paris')
g.addEdge('tokyo', 'paris')
console.log(g)