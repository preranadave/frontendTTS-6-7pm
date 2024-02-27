/* if is executed when condition is true if elseif check multiple true conditions if elseif is false else is executed

   syntax : 

      if(condition)
      {
        statements;
      }
      elseif(conditions)
      {
        statements
      }
      
      elseif(conditions)
      {
        statements
      }
      
      elseif(conditions)
      {
        statements
      }
      else 
      {
        statements
      }

*/

let a = 100;
let b = 120;

if (a > b) {
    console.log("a is greater than b")
}
else if (b > a) {
    console.log('b  is greater than a')
}
else {
    console.log('a and b both are equal')
}