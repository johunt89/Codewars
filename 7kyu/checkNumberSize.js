/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */


function smallEnough(a, limit){
    let checker = false;
    for(i=0; i <= a.length; i++) //loop through array of numbers
      {
        if(a[i] > limit) //checks to see if current number is above limit
                         //if it is it returns false and breaks as no need to check rest
        { 
          checker = false;
          break;
        }
        else 
          checker = true; //if the number is below limit changes checker to true and continues loop
      }
    return checker; //returns checker boolean
  }