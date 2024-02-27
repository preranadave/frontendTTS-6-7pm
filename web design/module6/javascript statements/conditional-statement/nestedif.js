/* if within if we called nested if   

   syntax : 

      if(condition)
      {
        if(condition)
        {
        statements;
      }
    }
      else 
      {
        statements
      }

*/

let a = 80;
let b = 25;
if (a > b) {
    if (a != 0 && b != 0) {
        console.log("a is greater than b and both ar positive numbers")
    }
}
else {
    console.log('a is less than b')
}