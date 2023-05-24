function loadTodo(){
      const url = 'https://jsonplaceholder.typicode.com/todos'
      fetch (url)
        .then(response =>response.json())
        .then(data => displayTodo(data))
}

function displayTodo(data){
    const TodoContainer = document.getElementById('todo-container')
    for(const todo of data){
        const TodoDiv = document.createElement('div');
        TodoDiv.innerHTML = `
          <h3> Title: ${todo.title}</h3>
          <h3> UserID: ${todo.userId}</h3>
          <h4> Completed: ${todo.completed === true ? 'Completed' : 'Incomplete'}</h4>
        `
        TodoContainer.appendChild(TodoDiv)
    }
}

loadTodo()