let currentInput = '';
let operator = '';
let previousInput = '';
let isResultDisplayed = false;

function clearResult() {
    currentInput = '';
    operator = '';
    previousInput = '';
    isResultDisplayed = false;
    document.getElementById('result').value = '';
}

function backspace() {
    if (!isResultDisplayed) {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('result').value = currentInput;
    }
}

function appendValue(value) {
    if (isResultDisplayed) {
        clearResult();
    }
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function setOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (previousInput !== '' && currentInput !== '' && !isResultDisplayed) {
        calculateResult();
    }

    operator = op;
    previousInput = document.getElementById('result').value;
    currentInput = '';
    isResultDisplayed = false;
    document.getElementById('result').value = previousInput + ' ' + operator + ' ';
}
function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Error';
            break;
        case '%':
            result = a % b;
            break;
        default:
            return;
    }

    document.getElementById('result').value = result;
    previousInput = result.toString();
    currentInput = '';
    operator = '';
    isResultDisplayed = true;
}
