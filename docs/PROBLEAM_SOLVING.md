## HOW TO SOLVE COMPLEX EXERCISES

## -- Understand the problem --

    - Don't start immediately, understand the task ahead of you (ask questions)
    - Restate the problem in my own words (write the prompt in your own words)
    - What are the inputs for this problem?
    - What are the outputs for this problem?
    - What are the things that really matter in this problem?
    - Explore examples of inputs/outputs and edge cases


## -- How different computers will measure performance --
    - In terms of time, different computers will have different outputs when using performance.now() because some computers are more powerful than others.
    - The same computer will always give variable numbers because memory conditions will vary, making the measurements imprecise.
    - For very fast algorithms, performance.now() may not be precise enough.

```js
 const tCreate = performance.now()
 for(let i = 0; i <= 9000 ; i++) {
  console.log(i)
 }
 const tExecute = performance.now()
 console.log((tExecute - tCreate) / 1000)
```

## -- What is time complexity (like a graph) --
    - O(n) -> increasing in a straight line, the number of operations is directly linked to the value of n (straight line going up).
    - O(1) -> the number of operations is always the same regardless of the value of n (flat line).
    - O(n²) -> for each operation of n, we multiply the value of n (nested loop, for example. When i = 0 and n is 5, the loop will run 25 times because for each value of i, the loop of j will run 5 times).

