const fetchBtn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

fetchBtn.addEventListener('click', () => {
  const id = document.getElementById('postId').value.trim();

  // Check if ID is entered
  if (id === "") {
    output.innerHTML = "<p style='color:red;'>Please enter a valid post ID.</p>";
    return;
  }

  output.innerHTML = "<p>Loading post...</p>";

  // Fetch data inside the event handler
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Post not found');
      }
      return res.json();
    })
    .then(data => {
      output.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch(error => {
      output.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});
