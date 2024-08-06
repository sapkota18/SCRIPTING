function add() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 + n2;
    document.getElementById("result").innerText = "Sum: " + result;
}

function sub() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 - n2;
    document.getElementById("result").innerText = "Difference: " + result;
}

function mul() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var result = n1 * n2;
    document.getElementById("result").innerText = "Product: " + result;
}

function div() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (n2 === 0) {
        document.getElementById("result").innerText = "Error: Division by zero";
    } else {
        var result = n1 / n2;
        document.getElementById("result").innerText = "Quotient: " + result;
    }
}
