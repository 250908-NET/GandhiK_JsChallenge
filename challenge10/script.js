function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("colorInput").value;
  if (name.trim() === "" || color.trim() === "") {
    alert("Please enter your name first! and color");
  } else {
    alert("Hello, " + name + "! Your favorite color is " + color);
  }
}