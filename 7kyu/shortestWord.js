/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    let words = s.split(' ')
    let shortestWord = words.reduce((a, b) => { return b.length < a.length ? b : a}, words[0]).length
    return shortestWord
}