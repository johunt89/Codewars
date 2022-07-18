/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
 */

function past(h, m, s){
    let hour = h * 60 * 60 * 1000
    let minutes = m * 60 * 1000
    let seconds = s * 1000
    return hour + minutes + seconds
    }
