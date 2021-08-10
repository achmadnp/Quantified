const defaultResult = 0;
let currentResult = defaultResult;

let calcDesc = `Initial value: ${defaultResult}`;
let history = [];

outputResult(currentResult, calcDesc);

function addToCalcHistory(desc) {
  history.push(`${desc} = ${currentResult}`);
}

function getUserInput() {
  return parseFloat(userInput.value);
}

function calcOperator(operator, resultBefore, calcNum) {
  const desc = `${
    Math.round(1000000000 * resultBefore) / 1000000000
  } ${operator} ${calcNum}`;
  addToCalcHistory(desc);
  console.log(history);
  outputResult(Math.round(1000000000 * currentResult) / 1000000000, desc);
}

function addWith() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  calcOperator("+", initialResult, enteredNum);
}

function substractWith() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  calcOperator("-", initialResult, enteredNum);
}

function multiplyWith() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  calcOperator("*", initialResult, enteredNum);
}

function divideWith() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  calcOperator("/", initialResult, enteredNum);
}

function reset() {
  const desc = "value has been result to 0";
  currentResult = 0;
  return outputResult(currentResult, desc);
}

function powerOf() {
  const desc = `${currentResult} ^ ${userInput.value}`;

  input = parseInt(userInput.value);

  if (input === 0) {
    return outputResult(1, "");
  } else if (input === 1) {
    return outputResult(currentResult, "");
  }

  multiplier = currentResult;
  for (let index = 1; index < input; index++) {
    currentResult = currentResult * multiplier;
  }
  return outputResult(currentResult, "");
}

function modulo() {
  const desc = `${currentResult} % ${userInput.value}`;
  currentResult = currentResult % parseInt(userInput.value);
  return outputResult(currentResult, desc);
}

addBtn.addEventListener("click", addWith);
subtractBtn.addEventListener("click", substractWith);
multiplyBtn.addEventListener("click", multiplyWith);
divideBtn.addEventListener("click", divideWith);
