const loadMeals = (searchText) =>{
    if(searchText == null){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals));
    }else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals));
    }
    
}

const displayMeals = meals =>{
    // console.log(meals);
    // step 1: container element
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal)
        // step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step-3 set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." height='600px' width='300px'>
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetail(${meal.idMeal})"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
        </div>
        `

        // step-4: appendChild
        mealsContainer.appendChild(mealDiv);

    })
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
    
}

const loadMealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
      .then(response => {
            // const status = (response.status).toString()
            // console.log("status", status)
            // if(status === "200"){
            //     data = response.json()
            //     console.log("Data", data)
            //     data.forEach(obj =>{
            //         console.log("Object Data", obj)
            //     })
            // }
            dream(response)
      })
    //   .then(data => displayMealDetails(data.meals[0]))
    //   .catch(error => console.log(error))
}

function dream(response){
    const status = (response.status).toString()
    console.log("status", status)
    if(status === "200"){
        data = response.json()
        .then(data => displayMealDetails(data.meals[0]))
    }
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}">
    `
}

// const loadMeals = (searchText) =>{
//     if(searchText == null){
//         const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
//         console.log("IF URL", url)
//         fetch(url)
//             .then(response => response.json())
//             .then(data => displayMeals(data.meals))
//     }else{
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//         console.log("Else", url)
//         fetch(url)
//             .then(response => response.json())
//             .then(data => displayMeals(data.meals))
//     }
    
// }

// const displayMeals = meals =>{
//     const divContainer = document.getElementById('meal-container')
//     console.log(meals)
//     divContainer.innerHTML = ''
//     meals.map(meal =>{
//         console.log(meal)
//         const mealDiv = document.createElement('div')
//         mealDiv.classList.add('col')
//         mealDiv.innerHTML = `
//             <div class="card">
//                 <img src="${meal.strMealThumb}" class="card-img-top" alt="..." width="100" height="500">
//                 <div class="card-body">
//                     <h5 class="card-title">${meal.strMeal}</h5>
//                     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 </div>
//             </div>
//         `
//         divContainer.appendChild(mealDiv)
//    })
// }

// const searchMeal = () =>{
//     const searchText = document.getElementById("search-field").value
//     console.log(searchText)
//     loadMeals(searchText)
    
// }

// loadMeals();

// function demo(){
//     const productList = [570, 571, 572];
//     const url = 'https://example.com/api/products';

//     console.log("Json Data", JSON.stringify(productList))
    
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(productList)
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Handle the response from the backend
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle any errors that occurred during the request
//             console.error(error);
//         });
// }

// demo()


// function demo2(){
//     const orderId = 123;
//     const productList = [570, 571, 572];
//     const url = 'https://example.com/api/products';

//     // Concatenate order ID with each product ID
//     const modifiedProductList = productList.map(productId => orderId + '-' + productId);

//     console.log("data", modifiedProductList)
//     console.log("Json data demo2", JSON.stringify(modifiedProductList))

//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(modifiedProductList)
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Handle the response from the backend
//                 console.log(data);
//             })
//             .catch(error => {
//                 // Handle any errors that occurred during the request
//                 console.error(error);
//             });

// }

// demo2()


// function demo3(){
//     const data = ['123-570', '123-571', '123-572'];

// // Convert the data to an array of objects with the "productId" property
// const formattedData = data.map(productId => ({ productId }));

// // Convert the data to JSON format
// const jsonData = JSON.stringify(formattedData);

// // Send the HTTP request
// fetch('your-api-url', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: jsonData
// })
//   .then(response => response.json())
//   .then(result => {
//     // Handle the response from the server
//     console.log(result);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
//   });

// }

// demo3()