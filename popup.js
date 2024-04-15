let displayValue = '';

function appendToDisplay(value) {
  const display = document.getElementById('display');
  const isResultDisplayed = display.value != displayValue;

  if (isResultDisplayed && !isNaN(value)) {
    clearDisplay();
  }

  displayValue += value;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let expression = displayValue.replace(/\^/g, '**');
    let result = eval(expression);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("equals").addEventListener("click", calculate);

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    appendToDisplay(button.textContent);
  });
});
