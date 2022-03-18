/*
1. In your “Sigma Pre-Work” folder, create a file on your laptop called ‘maxmin.js’
  1. You can run this file by navigating to it in your terminal and typing deno run maxmin.js
  2. To edit this file, you’ll want to use VSCode
2. Given an array of integers, return the highest and lowest numbers in the array (without using Math.max() or Math.min())
  1. Some example inputs and outputs would look like the below:
    1. [2, 4, 1, 0, 2, -1] should return the array [-1, 4]
    2. [20, 50, 12, 6, 14, 8] should return the array [6, 50]
    3. [100, -100] should return the array [-100, 100]

- create function that takes an array of numbers 
- set Max to the 0 index of array ;
-set min to the 0 index of the array
- set maxAndMin to []
- for statement to iterate through the array to find max. for (i = 0; i< array.length; i++)
- For Max, if i > Max, set i to Max
- push Max to maxAndMin  
- new for statement to find min for (i = 0; i< array.length; i++)
- for Min < i, set min to i.
- push Min to maxAndMin
- exit if
- return maxAndMin
*/

//const arrayOfNum = [2, 4, 1, 0, 2, -1]

function findMaxAndMin(arrayOfNum) {
  let max = arrayOfNum[0];
  let min = arrayOfNum[0];
  let maxAndMin = [];

  //find Max number in array
  for (let i = 0; i < arrayOfNum.length; i++) {
    if (arrayOfNum[i] > max) {
      max = arrayOfNum[i];
      // console.log(max)
    }
  }
  for (let i = 0; i < arrayOfNum.length; i++) {
    if (arrayOfNum[i] < min) {
      min = arrayOfNum[i];
      // console.log(max)
    }
  }
  maxAndMin.push(max);
  maxAndMin.push(min);
  return maxAndMin;
}

console.log(findMaxAndMin([2, 4, 1, 0, 2, -1]));
console.log(findMaxAndMin([20, 50, 12, 6, 14, 8]));
console.log(findMaxAndMin([100, -100]));
