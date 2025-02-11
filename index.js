const arr = [1,2,3,3,4,4,4,5,5,5,6,6,6,7,8,8,8,9,9,9]

let sorted = 1
for(let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    let next = arr[i + 1]

    if(curr !== next) {
        arr[sorted] = next
        sorted++
    } 
    
}

const clean = []
for(let i = 1; i < arr.length; i ++) {

    if(arr[i - 1] === i) {
        clean.push(arr[i - 1])
    }


}
console.log(arr, sorted, clean)
