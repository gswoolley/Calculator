let currentNum = "";
let previousNum = "";
let operator = "";
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearCalculator);
const equalsButton = document.querySelector(".equal");
const decicmalButton = document.querySelector(".decimal");

equalsButton.addEventListener("click", () => {
  if (currentNum != "" && previousNum != "") {
    calculate();
  }
});

decicmalButton.addEventListener("click", addDecimal);

const previousNumberDisplay = document.querySelector(".previousNumber");
const currentNumberDisplay = document.querySelector(".currentNumber");

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (previousNum !== "" && currentNum !== "" && operator === "") {
    previousNum = "";
    currentNumberDisplay.textContent = currentNum;
  }
  if (currentNum.length < 12) {
    currentNum += number;
    currentNumberDisplay.textContent = currentNum;
  }
}

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    operatorCheck(op);
  } else if (currentNum === "") {
    operatorCheck(op);
  } else {
    calculate();
    operator = op;
    currentNumberDisplay.textContent = "0";
    previousNumberDisplay.textContent = previousNum + " " + operator;
  }
}

function operatorCheck(text) {
  operator = text;
  previousNumberDisplay.textContent = previousNum + " " + operator;
  currentNumberDisplay.textContent = "0";
  currentNum = "";
}

function calculate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = previousNum + currentNum;
  } else if (operator === "-") {
    previousNum = previousNum - currentNum;
  } else if (operator == "*") {
    previousNum = previousNum * currentNum;
  } else if ((operator = "/")) {
    if (currentNum <= 0) {
      previousNum = "Error";
      displayResults();
      return;
    }
    previousNum = previousNum / currentNum;
  }
  previousNum = previousNum.toString();
  displayResults();
}

function displayResults() {
  if (previousNum.length <= 11) {
    currentNumberDisplay.textContent = previousNum;
  } else {
    currentNumberDisplay.textContent = previousNum.slice(0, 11) + "...";
  }
  previousNumberDisplay.textContent = "";
  operator = "";
  currentNum = "";
}

function clearCalculator() {
  currentNum = "";
  previousNum = "";
  previousNumberDisplay.textContent = "";
  currentNumberDisplay.textContent = "";
  operator = "";
}

function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentNumberDisplay.textContent = currentNum;
  }
}
