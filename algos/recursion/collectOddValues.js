/**
 *
 * Write collectOddValues using recursion and a helper function pattern
 * The goal is to collect all the odd values in an array
 * 
 */

export const collectOddValues = (arr) => {

    const res = []

    const helper = (helperArr) => {

        const first = helperArr[0]

        if(helperArr.length === 0) return

        if(first % 2 !== 0) res.push(first)

        helper(helperArr.slice(1))
    }

    helper(arr)

    return res
}


console.log(collectOddValues([1,4,5,9,4,3,6,23]))