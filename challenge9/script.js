function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
    alert ("Goodbye user");
}
// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

let btn2 = document.getElementById("goodbyeBtn");
btn2.addEventListener("click", sayGoodbye);