// Q5. You're creating a basic login system. Make a login function with two things: a username and a  password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login  successful"; if not, show "Invalid credentials." 
// Answer: 


function login(username, password) {
    if (username === "admin" && password === "12345") {
      console.log("Login successful");
    } else {
      console.log("Invalid credentials");
    }
  }
  
  // Example usage
  login("admin", "12345"); // Output: Login successful
  login("user", "password"); // Output: Invalid credentials
  

  //Output is:

//   Login successful
// Invalid credentials