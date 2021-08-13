const defaultResult = 0;
let currentResult = defaultResult;

let calcDesc = `Initial value: ${defaultResult}`;
let histories = [];

outputResult(currentResult, calcDesc);

function addToCalcHistory(desc) {
  histories.push(`${desc} = ${currentResult}`);
}

function getUserInput() {
  return parseFloat(userInput.value);
}

function calcOperator(operator, resultBefore, calcNum) {
  const desc = `${
    Math.round(1000000000 * resultBefore) / 1000000000
  } ${operator} ${calcNum}`;
  addToCalcHistory(desc);
  console.log(histories);
  outputResult(Math.round(1000000000 * currentResult) / 1000000000, desc);
}

function calcDecider(calcType) {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === "ADD") {
    currentResult = currentResult + enteredNum;
    mathOperator = "+";
  } else if (calcType === "SUBSTRACT") {
    currentResult = currentResult - enteredNum;
    mathOperator = "-";
  } else if (calcType === "MULTIPLY") {
    currentResult = currentResult * enteredNum;
    mathOperator = "*";
  } else if (calcType === "DIVIDE") {
    currentResult = currentResult / enteredNum;
    mathOperator = "/";
  } else if (calcType === "POWER-OF") {
    const multiplier = currentResult;
    mathOperator = "^";

    if (enteredNum === 0) {
      currentResult = 1;
      return calcOperator(mathOperator, initialResult, enteredNum);
    }
    for (let index = 1; index < enteredNum; index++) {
      currentResult = currentResult * multiplier;
    }
    calcOperator(mathOperator, initialResult, enteredNum);
  } else if (calcType === "MODULO") {
    mathOperator = "%";
    currentResult = currentResult % enteredNum;
    calcOperator(mathOperator, initialResult, enteredNum);
  } else {
    console.error("FAILED TO RETRIEVE OPERATOR");
    return;
  }
  calcOperator(mathOperator, initialResult, enteredNum);
}

function addWith() {
  calcDecider("ADD");
}

function substractWith() {
  calcDecider("SUBSTRACT");
}

function multiplyWith() {
  calcDecider("MULTIPLY");
}

function divideWith() {
  // const enteredNum = getUserInput();
  // const initialResult = currentResult;
  // currentResult = currentResult / enteredNum;
  // calcOperator("/", initialResult, enteredNum);
  calcDecider("DIVIDE");
}

function reset() {
  const desc = "value has been result to 0 and logs have been cleared";
  currentResult = 0;
  histories = [];
  return outputResult(currentResult, desc);
}

function powerOf() {
  calcDecider("POWER-OF");
}

function modulo() {
  calcDecider("MODULO");
}

addBtn.addEventListener("click", addWith);
subtractBtn.addEventListener("click", substractWith);
multiplyBtn.addEventListener("click", multiplyWith);
divideBtn.addEventListener("click", divideWith);
resetBtn.addEventListener("click", reset);
powerOfBtn.addEventListener("click", powerOf);
moduloBtn.addEventListener("click", modulo);
