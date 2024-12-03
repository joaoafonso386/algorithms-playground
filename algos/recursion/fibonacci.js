/**
 * 
 * Print to the console the fibonacci sequence given a number n
 * 
 * Ex: n = 10 -> 0,1,1,2,3,5,8,13,21,34
 * 
 * Explanation for number 5 (fifth number is the sum of the fourth number + third number and so on...)
 * 
 * 4 + 3
 * 3 + 2
 * 2 + 1
 * 2 + 1
 * 1 + 1
 * 
 * Time Complexity: O(2^N)
 * 
 */

let num = 10

const fib = (n) => {
    if(n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

for(let i = 0; i < num; i++) {
    console.log(fib(i))
}

//Memoized solution
const visited = {}
const fibMemoized = (n) => {
    if(n < 2) return n
    if(visited[n]) {
       return visited[n]
    } else {
        visited[n] = fib(n - 1) + fib(n - 2)
    }
    return fib(n - 1) + fib(n - 2)
}
