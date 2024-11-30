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
        this.adjacencyList = {}
    }

    addVertex(v) {
        if(!this.adjacencyList[v]) this.adjacencyList[v] = []
    }

    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)

    }

    removeVertex(v){
        for(let edge of this.adjacencyList[v]) {
            this.removeEdge(v, edge)
        }
        delete this.adjacencyList[v]
    }

    DFSRecursion(v) {
        const res = []
        const visited = {}
        const helper = (v) => {
            if(!v) return null
            visited[v] = true
            res.push(v)
            for(let edge of this.adjacencyList[v]) {
                if(!visited[edge]) {
                    helper(edge)
                }

            }
        }
        helper(v)
        return res
    } 
    
    DFSIterative(v) {
        const stack = [v]
        const res = []
        const visited = {} 
        while(stack.length > 0) {
            const currV = stack.pop()
            if(!visited[currV]) {
                visited[currV] = true
                stack.push(...this.adjacencyList[currV])
                res.push(currV)
            }
        }
        return res
    }

    BFS(v){
        const q = [v]
        const res = []
        const visited = {}
        visited[v] = true
        while(q.length > 0){
            const currV = q.shift()
            res.push(currV)
            for(let v of this.adjacencyList[currV]) {
                if(!visited[v]){
                    visited[v] = true
                    q.push(v)
                } 

            }
        }

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
console.log(g.BFS('A'))
console.log(g)