const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const resultTxt = document.getElementById("result-txt");
const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  if (result === 0) {
    resultTxt.style.display = "none";
    currentResultOutput.style.display = "none";
    currentCalculationOutput.textContent = text;
  } else {
    resultTxt.style.display = "inline";
    currentResultOutput.style.display = "inline";
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
  }
}
