function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
      .then(response => response.json())
      .then(data => displayPosts(data))
}

function displayPosts(posts){
    const PostContainer = document.getElementById('posts-container')
     for(const post of posts){
        const div = document.createElement('div')
        div.innerHTML = `
             <h3>User - ${post.userId} </h4>
             <h2>Posts: ${post.title}</h5>
             <p>Post Description: ${post.body} </p>
             <h3>Post Id: ${post.id}</h6>
        `
        PostContainer.appendChild(div)
     }
}

loadPosts();