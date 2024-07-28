// Q7. You are building a weather application. Write a JavaScript program that takes the current temperature  
//     as input and uses the conditional (ternary) operator to determine and print the weather condition. 
//     If the  temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate". 
    
//     Answer: 

function getWeatherCondition(temperature) {
    let condition = (temperature > 30) ? "Hot" : "Moderate";
    console.log(`The weather condition is: ${condition}`);
  }
  
  // Example usage
  getWeatherCondition(35); // Output: The weather condition is: Hot
  getWeatherCondition(25); // Output: The weather condition is: Moderate


//Output is:

// The weather condition is: Hot
// The weather condition is: Moderate
  
