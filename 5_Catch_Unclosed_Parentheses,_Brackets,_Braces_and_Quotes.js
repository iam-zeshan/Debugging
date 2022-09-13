/*
We should takecare of bracket's opening and closing. Because it would create problems if we forgot the brackets.

Task:
Fix the two pair errors in the code.
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => (previous + current));
console.log(`Sum of array values is: ${arraySum}`);