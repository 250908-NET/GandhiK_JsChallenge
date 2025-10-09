document.getElementById('btn').addEventListener("click", function()
{
    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
    let index = 0;
    document.body.style.backgroundColor = "green";
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});