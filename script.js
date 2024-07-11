let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentNumber = '';
        shouldResetDisplay = false;
    }
    currentNumber += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber === '' ? '0' : currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    shouldResetDisplay = false;
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    shouldResetDisplay = true;
    updateDisplay();
}
