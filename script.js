function calculateValues() {
  const operation = document.getElementById("operation").value;
  const firstValue = parseFloat(document.getElementById("firstValue").value);
  const secondValue = parseFloat(document.getElementById("secondValue").value);
  let result;

  switch (operation) {
    case "+":
      result = sum(firstValue, secondValue);
      break;
    case "-":
      result = subtraction(firstValue, secondValue);
      break;
    case "/":
      result = division(firstValue, secondValue);
      break;
    case "*":
      result = multiplication(firstValue, secondValue);
      break;
    default:
      console.log("Escolha uma operação");
  }

  document.getElementById("result").innerHTML = result;
}

calculateValues();

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}
