const postsContainer = document.getElementById('posts');
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
  // Clear previous posts or show loading text
  postsContainer.innerHTML = '<p>Loading posts...</p>';

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      // Clear loading message
      postsContainer.innerHTML = '';

      // Display first 5 posts
      posts.slice(0, 5).forEach(post => {
        const item = document.createElement('div');
        item.classList.add('post');
        item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsContainer.appendChild(item);
      });
    })
});
