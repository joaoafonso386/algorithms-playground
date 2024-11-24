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

    DFSRecursion(v) {
        const res = []
        const visited = {}
        const helper = (v) => {
            if(!v) return null
            visited[v] = true
            res.push(v)
            for(let edge of this.adjancyList[v]) {
                if(!visited[edge]) {
                    helper(edge)
                }

            }
        }
        helper(v)
        return res
    }   



}


const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')
console.log(g.DFSRecursion('A'))
console.log(g)