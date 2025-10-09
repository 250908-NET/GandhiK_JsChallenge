function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;
  let subtract = n1 - n2;
  let multiply = n1 * n2;
  let divide = n1 / n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

function subtractNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let subtract = n1 - n2;
  
  document.getElementById("result").textContent = "Result: " + subtract;
}

function multiplyNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let multiply = n1 * n2;

  document.getElementById("result").textContent = "Result: " + multiply;
}

function divideNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let divide = n1 / n2;
  if (n2 == 0)
    alert("Can't divide by 0");

  document.getElementById("result").textContent = "Result: " + divide;
}
document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);