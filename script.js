function addListItem() {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
}