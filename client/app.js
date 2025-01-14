function getPosts() {
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(console.error);
}

function createPost() {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'New Post' })
  })
  .then(res => res.json())
  .then(data => {
    alert('Created new post with id: ' + data.id);
  })
  .catch(console.error);
}
