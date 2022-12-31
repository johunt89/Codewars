/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
    let length = num.toString().length;
    let digits  = num.toString().split('');
    let result = '';
    for(let i = 0; i < length; i++)
    {
      if(digits[i] != 0)
      {
        if(i > 0 && Number(digits[i]) != 0)
        {
          result += ' + '
        }
        result += `${digits[i].padEnd(length - i, 0)}`
      }
  
    }
    return result
  }