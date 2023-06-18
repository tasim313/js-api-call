const numbers = [12, 54, 65, 3, 54]

for(const number of numbers){
    console.log(number)
}

const bottle = {
    color: "Yellow",
    price: 50,
    isCleaned: true,
    capacity:1
}

// for of can not used with objects
// for(const key of bottle){
//     console.log(key)
// }

// const keys = Object.keys(bottle)
// console.log(keys)

// // 3 way to read object properties
// // bottle.color
// // bottle['color']
// // bottle[key]
// for(const key of keys){
//     console.log(key, bottle[key])
// }

/* multiline comment  */
// advanced

const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}
/* for of use array and for in use object */
for(const key in bottle){
    const value = bottle[key]
    console.log(key, value)
}