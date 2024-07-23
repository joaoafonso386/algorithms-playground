/**
 *
 * Write collectOddValues using recursion and a helper function pattern
 * The goal is to collect all the odd values in an array
 * 
 */

const helper = (helperArr, res) => {

    const first = helperArr[0]

    if(helperArr.length === 0) return res

    if(first % 2 !== 0) res.push(first)

    helper(helperArr.slice(1), res)
}

export const collectOddValues = (arr) => {

    const res = []

    helper(arr, res)

    return res
}


console.log(collectOddValues([1,13,5,9,4,3,6,23]))