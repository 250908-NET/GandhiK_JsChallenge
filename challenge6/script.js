function greetUser() {
        let name = document.getElementById("nameInput").value;
        
        if (!name)
        {
          alert("Please enter your first name first")
        } else {
          alert("Hello, " + name + "!");
        }
      }