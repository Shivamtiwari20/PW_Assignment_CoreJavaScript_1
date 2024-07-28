// Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a  
//    positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the  
//    given integer. 

//    Answer: 


function calculateSum(n) {
    if (n <= 0) {
      console.log("Please enter a positive integer.");
      return;
    }
  
    let sum = 0;
    let i = 1;
  
    do {
      sum += i;
      i++;
    } while (i <= n);
  
    console.log(`The sum of all numbers from 1 to ${n} is: ${sum}`);
  }
  
  // Example usage
  calculateSum(5); // Output: The sum of all numbers from 1 to 5 is: 15
  calculateSum(10); // Output: The sum of all numbers from 1 to 10 is: 55
  calculateSum(-3); // Output: Please enter a positive integer.
  

  //Output is:

//   The sum of all numbers from 1 to 5 is: 15
//   The sum of all numbers from 1 to 10 is: 55
//   Please enter a positive integer.
