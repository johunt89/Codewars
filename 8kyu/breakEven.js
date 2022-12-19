/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.
 */

function dutyFree(normPrice, discount, hol){
    //find the savings between normal price and the discounted price and assign to variable
    let difference = normPrice * (discount/100);
    //divide the holiday price by the difference to give us the amount of bottles needed to break even
    //round down
    return Math.floor(hol/difference);
  }