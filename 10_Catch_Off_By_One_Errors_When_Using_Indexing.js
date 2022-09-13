/*
'index out of range', we need to take care of the index of the an Array or a string. Because the Array is starting from the index '0',and the length of the Array's indexes will always be one less then it's length of the items/elements. 

Task;
Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

*/

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();