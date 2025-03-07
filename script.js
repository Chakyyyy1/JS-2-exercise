document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", calculate);
    document.getElementById("clearBtn").addEventListener("click", clearFields);
});

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    document.getElementById("sum").innerText = num1 + num2;
    document.getElementById("difference").innerText = num1 - num2;
    document.getElementById("product").innerText = num1 * num2;
    document.getElementById("quotient").innerText = num2 !== 0 ? (num1 / num2).toFixed(2) : "Undefined";
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerText = "";
    document.getElementById("difference").innerText = "";
    document.getElementById("product").innerText = "";
    document.getElementById("quotient").innerText = "";
}
