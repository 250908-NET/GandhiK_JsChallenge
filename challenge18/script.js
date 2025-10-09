const input = document.getElementById("taskInput");
    const button = document.getElementById("addTask");
    const list = document.getElementById("taskList");

    button.addEventListener("click", addTask);
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") addTask();
    });

    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      // Toggle done on click
      li.addEventListener("click", function() {
        li.classList.toggle("done");
      });

      // Add remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // prevent marking as done
        li.remove();
      });

      li.appendChild(removeBtn);
      list.appendChild(li);
      input.value = "";
      input.focus();
    }