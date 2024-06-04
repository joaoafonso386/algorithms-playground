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

