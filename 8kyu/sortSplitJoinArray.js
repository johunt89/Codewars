/* You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */

function twoSort(s) {
    s.sort(); //sorts the array 
    let splitS = s[0].split('') //splits the first thing in the array
    return splitS.join('***'); //joins the word back together with the *s
  }