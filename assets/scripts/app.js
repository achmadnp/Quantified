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

addBtn.addEventListener("click", addWith);
subtractBtn.addEventListener("click", substractWith);
multiplyBtn.addEventListener("click", multiplyWith);
divideBtn.addEventListener("click", divideWith);
