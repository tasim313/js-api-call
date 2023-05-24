function aboutImage(){
    const url = "http://127.0.0.1:8000/10ae9fc7d453b0dd525d0edf2ede7961/?image_uid=1aa6db08-2688-422c-bf52-5be759cb2064"
    fetch(url)
      .then(response => response.json())
      .then(data => displayImage(data))

}

function displayImage(data){
    const ul = document.getElementById('about-image')
    const list = []
  
    for(const images of data.about_images){
        console.log(images)
        list.push(images)
    
    }
    console.log("Array", list)
    // for (let i = 0; i < list.length; i++) {
    //     console.log("About Info", list[i.images])
    //     console.log("Find Out Array Value" ,list[i]);
    // }
  

    list.forEach((list) => {
        console.log("image" ,list.image); 
        const li = document.createElement('li')
        li.innerText = list.about_info.title
        ul.appendChild(li)
    });
}


function loadAbout(){
    const url = 'http://127.0.0.1:8000/10ae9fc7d453b0dd525d0edf2ede7961/?image_uid=1aa6db08-2688-422c-bf52-5be759cb2064'
    fetch(url)
      .then(response => response.json())
      .then(data => displayAbout(data))
}

function displayAbout(posts){
    const AboutContainer = document.getElementById('abouts-container')
    const list = []
  
    for(const post of posts.about_images){
        console.log(post)
        list.push(post)
    
    }
    list.forEach((list) => {
        
        const div = document.createElement('div')
        
        div.innerHTML = `
             <h3>Title - ${list.about_info.title} </h4>
             <h2>Posts: ${list.about_info.description}</h5>
             <img src=${list.image.at256} ></img>
        `
        AboutContainer.appendChild(div)
    });
}

loadAbout(); 


function sliderImageURl(){
    const url = "http://127.0.0.1:8000/10ae9fc7d453b0dd525d0edf2ede7961/"
    fetch(url)
      .then(response => response.json())
      .then(data => displaySlider(data))
}

function displaySlider(data){
    const sliderContainer = document.getElementById('slider-container')
    const list = []

    for(const image of data.slider_image){
        list.push(image)
    }
    list.forEach((list) => {
        
        const div = document.createElement('div')
        console.log("List slider image", list.image)
        
        div.innerHTML = ` 
            <img src="${list.image.at256}" class="d-block w-100" alt="...">
        `
        sliderContainer.appendChild(div)
    });
}

sliderImageURl();


function deletePost(){
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    fetch(url, {
         method: 'DELETE',
    })
 }


 function PatchAPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
 }


 function createAPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
 }