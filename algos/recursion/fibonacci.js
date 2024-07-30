/**
 * 
 * Print to the console the fibonacci sequence given a number n
 * 
 * Ex: n = 10 -> 0,1,1,2,3,5,8,13,21,34
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
