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

    addVertex(v) {
        if(!this.adjancyList[v]) this.adjancyList[v] = []
    }

    addEdge(v1,v2) {
        this.adjancyList[v1].push(v2)
        this.adjancyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjancyList[v1] = this.adjancyList[v1].filter(v => v !== v2)
        this.adjancyList[v2] = this.adjancyList[v2].filter(v => v !== v1)

    }

    removeVertex(v){
        for(let edge of this.adjancyList[v]) {
            this.removeEdge(v, edge)
        }
        delete this.adjancyList[v]
    }
}


const g = new Graph()
g.addVertex('tokyo')
g.addVertex('lisbon')
g.addVertex('paris')
g.addVertex('madrid')
g.addVertex('london')
g.addEdge('tokyo', 'paris')
g.addEdge('tokyo', 'lisbon')
g.addEdge('tokyo', 'madrid')
g.addEdge('paris', 'madrid')
g.addEdge('london', 'paris')
g.addEdge('london', 'tokyo')
g.removeVertex('tokyo')
console.log(g)