document.getElementById("calculate-btn").addEventListener("click", function () {
  // Fetch user inputs as strings
  const num1Str = document.getElementById("number1").value.trim();
  const num2Str = document.getElementById("number2").value.trim();

  // Validate inputs as numbers
  if (!isValidNumber(num1Str) || !isValidNumber(num2Str)) {
    displayResult("Please enter valid numbers.");
    return;
  }

  // Parse strings into floating-point numbers
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  const operator = document.getElementById("operator").value;

  // Perform operation
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        displayResult("Division by zero is not allowed.");
        return;
      }
      result = divide(num1, num2);
      break;
    default:
      displayResult("Invalid operator.");
      return;
  }

  // Display result rounded to 2 decimal places
  displayResult(`Result = ${result.toFixed(2)}`);
});

// Validate number format using regex
function isValidNumber(value) {
  return /^[0-9]+(\.[0-9]+)?$/.test(value);
}

// Operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Helper to display result
function displayResult(message) {
  document.getElementById("result").textContent = message;
}
