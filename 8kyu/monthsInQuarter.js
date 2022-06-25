/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
 */
const quarterOf = (month) => {
    if(month > 0 && month < 4){
      return 1
    }
    else if(month > 3 && month < 7){
      return 2
    }
    else if(month > 6 && month < 10){
      return 3
    }
    else{
      return 4
    }
  }