function subtract() {
    const a = Number(document.getElementById('firstNumber').value);
    const b = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = a - b;
}