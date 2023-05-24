const loadQuote = () =>{
    const url = "https://api.kanye.rest/"
    fetch(url)
    .then(response => response.json())
    .then(data => displayQuote(data))

}

const displayQuote = quote => {
     const blockQuote = document.getElementById('quote')
     blockQuote.innerHTML = `
        <h1>${quote.quote}</h1>
     `
}

loadQuote();


const loadUsers = () =>{
    const url ='https://randomuser.me/api/?gender=female'
    fetch(url)
        .then(response => response.json())
        .then(data => displayUser(data))
}

const displayUser = user =>{
    const genderTag = document.getElementById('gender')
    const nameTag = document.getElementById('name')
    const imageTag = document.getElementById('image')
    const dobTag = document.getElementById('dob')
    genderTag.innerHTML = user.results[0].gender
    title = user.results[0].name.title
    first = user.results[0].name.first
    last = user.results[0].name.last
    nameTag.innerHTML = title + " " + first + " " + last
    imageTag.innerHTML = `
            <img  src="${user.results[0].picture.large}" alt="">
    `
    dobTag.innerHTML = user.results[0].dob.date
    document.getElementById('age').innerHTML = user.results[0].dob.age
}

loadUsers()

function Refresh(){
    loadQuote();
    loadUsers();
    loadCountries();
}

const loadCountries = () =>{
    const url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries')
    // console.log(country)
   countries.forEach(country =>{
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
          <h3>Name: ${country.name.common}</h3>
          <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `
        countriesContainer.appendChild(countryDiv)
   })
}

loadCountries();