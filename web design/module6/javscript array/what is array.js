/*
what is array ?
   array is used to stored multiple values in a single elements or variables i.e called array
   array stored values in key=>values
   array stored to start from 0 index.  
   array is stored inside of [] in javascript
   array datatype in javascript is object.

*/

// var emp=[];
// console.log(typeof(emp));

// var emp;
// console.log(typeof(emp));


// // array as literals
// var emp=["brijesh","axay","parth","bhavik","janvi"];
// // console.log(typeof(emp));
// console.log(emp);


// array as instance
// var emp=new Array;
// var emp=["brijesh","axay","parth","bhavik","janvi"];
// // console.log(typeof(emp));
// console.log(emp);

// array as constructor

function Display(name,age,salary)
{
    var emp=new Array;
    this.name=name;
    this.age=age;
    this.salary=salary;
    

}

var employee=new Display("brijesh",34,89500);
console.log(employee);