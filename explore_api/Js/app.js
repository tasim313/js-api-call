const user ={id:1, name:"Tasim", job:"Developer"}
const stringified = JSON.stringify(user)
console.log(user)
console.log(stringified)

const shop = {
    owner: "Alia",
    address:{
        street: 'Dhaka Bangladesh',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['Laptop', 'Mic', 'Monitor', 'Keyboard']
}
const shopStringified = JSON.stringify(shop)
console.log(shop)
console.log(shopStringified)