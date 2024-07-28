// Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment  method ("credit", "debit", or "paypal") 
//      as input and uses a switch statement to determine and print the  processing fee associated with each payment method. For example, "credit" 
//      may have a processing fee of  2%, "debit" 1.5%, and "paypal" 3%. 

// Answer: 


function getProcessingFee(paymentMethod) {
    let fee;
    switch (paymentMethod) {
      case "credit":
        fee = "2%";
        break;
      case "debit":
        fee = "1.5%";
        break;
      case "paypal":
        fee = "3%";
        break;
      default:
        fee = "Invalid payment method";
    }
    console.log(`The processing fee for ${paymentMethod} is: ${fee}`);
  }
  
  // Example usage
  getProcessingFee("credit"); // Output: The processing fee for credit is: 2%
  getProcessingFee("debit"); // Output: The processing fee for debit is: 1.5%
  getProcessingFee("paypal"); // Output: The processing fee for paypal is: 3%
  getProcessingFee("bitcoin"); // Output: The processing fee for bitcoin is: Invalid payment method
  

  //Output is:

//   The processing fee for credit is: 2%
//   The processing fee for debit is: 1.5%
//   The processing fee for paypal is: 3%
//   The processing fee for bitcoin is: Invalid payment method