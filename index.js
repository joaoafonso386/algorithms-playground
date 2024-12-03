
const visited = {}
const fib = (n) => {
    if(n < 2) return n
    if(visited[n]) {
       return visited[n]
    } else {
        visited[n] = fib(n - 1) + fib(n - 2)
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(1000))
console.log(visited)



