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

}


const g = new Graph()
g.addVertex('tokyo')
g.addVertex('lisbon')
g.addVertex('paris')
console.log(g)