const fetchBtn = document.getElementById('fetchBtn');
    const output = document.getElementById('output');

    fetchBtn.addEventListener('click', () => {
      const id = document.getElementById('postId').value.trim();

      if (id === "") {
        output.innerHTML = "<p style='color:red;'>Please enter a valid post ID.</p>";
        return;
      }

      output.innerHTML = "<p>Loading post...</p>";

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          // Check if post actually exists
          if (!data.title) {
            output.innerHTML = "<p style='color:red;'>No post found.</p>";
          } else {
            output.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
          }
        })
        .catch(error => {
          output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
          console.error('Fetch error:', error);
        });
    });