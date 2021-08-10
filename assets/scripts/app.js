const defaultResult = parseInt(currentResultOutput.textContent);
let currentResult = defaultResult;

let calcDesc = `${defaultResult} + 10`;
let errorMsg = "An Error has occured!";
// alert(currentResult);

outputResult(currentResult, calcDesc);

function addWith() {
  currentResult = currentResult + parseInt(userInput.value);
  return outputResult(currentResult, "");
}

function substractWith() {
  currentResult = currentResult - parseInt(userInput.value);
  return outputResult(currentResult, "");
}

function multiplyWith() {
  currentResult = currentResult * parseInt(userInput.value);
  return outputResult(currentResult, "");
}

function divideWith() {
  currentResult = currentResult / parseInt(userInput.value);
  return outputResult(currentResult, "");
}

function reset() {
  currentResult = 0;
  return outputResult(currentResult, "");
}

function powerOf() {
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
  currentResult = currentResult % parseInt(userInput.value);
}

addBtn.addEventListener("click", addWith);
subtractBtn.addEventListener("click", substractWith);
multiplyBtn.addEventListener("click", multiplyWith);
divideBtn.addEventListener("click", divideWith);
