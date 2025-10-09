const postsContainer = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        // Take first 5 posts
        posts.slice(0, 5).forEach(post => {
          // Create a post element
          const item = document.createElement('div');
          item.classList.add('post');
          item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
          
          // Append to container
          postsContainer.appendChild(item);
        });
      })