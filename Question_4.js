//  Q4. Describe the usage of the comma operator in JavaScript and provide an example. 

/*Answer */

// The comma operator in JavaScript evaluates each of its operands (from left to right) and returns the value of the last operand. This operator is mainly used in for loops or situations where multiple expressions need to be evaluated in a place where only one is expected.

// Usage of the Comma Operator
// Multiple expressions in one statement:
// The comma operator allows you to include multiple expressions in a single statement. Each expression is evaluated, but only the result of the last expression is returned.

// For loop:
// It is commonly used in the initialization and increment parts of a for loop to handle multiple variables.

// Code Example:

let x = 10;
let y = (x++, x + 1, x * 2); // x is incremented, then x + 1 is evaluated, finally x * 2 is evaluated and assigned to y

console.log(x); // 11
console.log(y); // 22

//Output is:

//11
//22
