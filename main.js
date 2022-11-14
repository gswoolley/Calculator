const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const display = document.getElementById("screen");
let displayValue = "";

//The basic math functions
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
//currently operator is string, may be a potential fault. not sure
function operate(operator, a, b) {
  if (operator == "+") {
    console.log(`${a} + ${b}`);
    return add(a, b);
  } else if (operator == "-") {
    console.log(`${a} - ${b}`);
    return subtract(a, b);
  } else if (operator == "*") {
    console.log(`${a} * ${b}`);
    return multiply(a, b);
  } else if (operator == "/") {
    console.log(`${a} / ${b}`);
    return divide(a, b);
  }
}
//DOM methods:

one.onclick = () => {
  display.value += "1";
  displayValue += "1";
  console.log(displayValue);
};

two.onclick = () => {
  display.value += "2";
  displayValue += "2";
  console.log(displayValue);
};

three.onclick = () => {
  display.value += "3";
  displayValue += "3";
  console.log(displayValue);
};

four.onclick = () => {
  display.value += "4";
  displayValue += "4";
  console.log(displayValue);
};
