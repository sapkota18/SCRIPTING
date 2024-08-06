function calculateRectangleArea() {
    let length =parseFloat( document.getElementById("rectangleLength").value);
    let width = parseFloat(document.getElementById("rectangleWidth").value);
    return (length * width).toFixed(2);
}

function calculateCircleArea() {
    let radius = parseFloat(document.getElementById("radius").value);
    return (Math.PI * radius * radius).toFixed(2);
}

function convertFahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

function showInputs() {
    const operation = document.getElementById("operation").value;
    document.getElementById("rectangleInputs").style.display = "none";
    document.getElementById("fahrenheitInput").style.display = "none";
    document.getElementById("circleInput").style.display = "none";

    if (operation === "rectangleArea") {
        document.getElementById("rectangleInputs").style.display = "block";
    } else if (operation === "fahrenheitToCelsius") {
        document.getElementById("fahrenheitInput").style.display = "block";
    } else if (operation === "circleArea") {
        document.getElementById("circleInput").style.display = "block";
    }
}

function calculate() {
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === 'rectangleArea') {
        result = calculateRectangleArea();
        displayResult(`Area of Rectangle: ${result} sq units`);
    } else if (operation === 'fahrenheitToCelsius') {
        result = convertFahrenheitToCelsius();
        displayResult(`Temperature in Celsius: ${result} celcius`);
    } else if (operation === 'circleArea') {
        result = calculateCircleArea();
        displayResult(`Area of Circle: ${result} sq units`);
    }
}
function displayResult(message) {
    document.getElementById('result').innerText = message;
}
