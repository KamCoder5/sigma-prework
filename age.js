/*
1. Write a short programme that, when given a date, calculates the age between the current date and the given date.
  a. An example input and output might look like:
    i. 1990-01-01 should return 31
    ii. 1972-12-04 should return 48 (this is the date format required to use Date.parse())

  - get date of birth: YYYY/MM/DD
  - get current date:  YYYY/MM/DD
  - minus current date year from DOB year 
  - return result 
  - 
*/

function calculateAge() {
  let agePrompt = prompt(
    "Please enter your age on the format of YYYY-MM-DD e.g. 1970-01-01"
  );
  let DOB = Date.parse(agePrompt);
  let currentDate = Date.now();
  let yearsDifference = (currentDate - DOB) / 31556952000;
  return Math.trunc(yearsDifference);
}

console.log(calculateAge());

/*
Input: 1997-11-05
Output:24*/
