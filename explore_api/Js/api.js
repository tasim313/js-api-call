function loadUser(){
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
       .then(response => response.json())
       .then(json => console.log(json))
}