/**
 * 
 * Function stringSearch takes 2 strings, a larger string a pattern to match against that string. 
 * Find in the larger string the amount of times the pattern repeats itself.
 * 
 * stringSearch("wowomgzomg", "omg") // 2
 * 
 */



const stringSearch = (large, short) => {
    
    let match = 0

    for(let i = 0; i < large.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(large[i+j] !== short[j]) break
            if(j === short.length - 1) match++          
        }
    }

    return match

}

console.log(stringSearch("wowomgzomgconaomgkysomg", "omg"))