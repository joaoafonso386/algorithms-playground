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

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        this.values.push({val,priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

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

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }

}

const g = new WeightedGraph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B', 4)
g.addEdge('A','C', 2)
g.addEdge('B','E', 3)
g.addEdge('C','D', 2)
g.addEdge('C','F', 4)
g.addEdge('D','E', 3)
g.addEdge('D','F', 1)
g.addEdge('F','E', 1)
console.log(g.Dijkstra('A', 'E'))
console.log(g.adjacencyList)