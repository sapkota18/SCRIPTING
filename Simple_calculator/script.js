function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    let resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function appendValue(value) {
    let resultField = document.getElementById('result');
    resultField.value += value;
}

function calculateResult() {
    let resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (e) {
        alert('Invalid expression');
        clearResult();
    }
}
