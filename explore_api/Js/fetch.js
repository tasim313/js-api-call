fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


fetch('http://127.0.0.1:8000/10ae9fc7d453b0dd525d0edf2ede7961/')
      .then(response => response.json())
      .then(json => console.log(json))

const url = 'http://127.0.0.1:8000/10ae9fc7d453b0dd525d0edf2ede7961/?slider_uid=78da2a11-cc0e-4f33-bdef-04e2af227908'

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json)) 

function loadData(){
    fetch(url)
        .then(response => response.json())
        .then(data => displaySlider(data))
    }

function displaySlider(data){
    console.log(data)
}