/* switch is just like if elseif but we check a true case inside of switch case if case is false default is executed

    switch(condition)
    {
        case 'A':
            statements;
            break;
         case 'B':
            statements;
            break;

         case 'C':
            statements;
            break;

         default:
            statements;
            break;   
    
    }
 

*/

var grade = "D";
console.log("Enter grade in A,B,C");
switch (grade) {
    case "A":
        console.log("I am Topper students");
        break;
    case "B":
        console.log("I am average students");
        break;

    case "C":
        console.log("I am failed students");
        break;

    default:
        console.log("sorry wrong grade inputs please contact admin");
        break;


}