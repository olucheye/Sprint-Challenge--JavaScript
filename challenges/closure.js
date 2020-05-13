// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();


// Explanation: 
`Nested function is able to access the variable internal becuase the both in the same local scope of myFunction(). If nestedFunction is moved outside of the myFunction scope, it would no longer be access the internal variable, save the variable is then moved out as a globally defined variable like the external variable.`

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total +=i;
  }
  return total;
}

console.log(sumation(4));