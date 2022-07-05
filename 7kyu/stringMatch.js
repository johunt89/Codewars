/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

function solution(str, ending){
    let difference = str.length - ending.length
    if(difference >= 0){
      let newStr = str.substring(difference)
      if(newStr === ending){
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }