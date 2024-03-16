// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Helper function to check if a number is prime
  function isPrime(number) {
    if (number <= 1) {
      return false;
    } else if (number <= 3) {
      return true;
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }
  
  // Example usage of helper functions
  console.log("Is 7 even?", isEven(7)); // Output: false
  console.log("Is 8 odd?", isOdd(8)); // Output: false
  console.log("Factorial of 5:", factorial(5)); // Output: 120
  console.log("Is 11 prime?", isPrime(11)); // Output: true
  