/**
 * 
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * 
 * reverse('awesome') -> 'emosewa'
 * reverse('rithmschool') -> 'loohcsmhtir'
 * 
 */

const reverse = (string) => {
    let reverse = ""
    const helper = (string) => {
        if(string === "") return
        const last = string.charAt(string.length - 1)
        reverse += last
        helper(string.substring(0, string.length - 1))
    }

    helper(string)

    return reverse
}

/** Cleaner solution */

const reverse2 = (str) => {
    if(str.length <= 1) return str
    return reverse2(str.slice(1)) + str[0]
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
console.log(reverse2('awesome'));
console.log(reverse2('rithmschool'));
 