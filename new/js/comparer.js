// const first = 2;
// const second = 2;

// if(first === second){
//     console.log("They are same")
// }else{
//     console.log('different')
// }


// const first = 2;
// const second = 1;
// const third = 3

// if(third === second){
//     console.log("They are same")
// }else if( first === second){
//     console.log("They are same")
// }else if(first === third)(
//     console.log("They are same")
// );else{
//         console.log('different')
//     }

const first = {a:5, b:4, d:6};
const second = {a:5, b:6, d:8};
const third = second

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log("They are same")
}else{
    console.log('different')
}

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

console.log(compareObject(first, second))