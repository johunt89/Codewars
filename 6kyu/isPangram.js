function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let str = string.toLowerCase();
    if(alphabet.every(x => str.includes(x)))
     {
       return true;
     }
    else
    {
      return false; 
    }
  }