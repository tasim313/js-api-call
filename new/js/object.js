const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
    //    console.log(this.name, 'is participating is an exam')
         return this.name + 'is participating is an exam'
    },
    improveExam: function(subject){
        this.exam()
        console.log("Student", this.exam())
        return `${this.name} is taking improvement exam  on ${subject}`
    }
}
// console.log(student.exam())

// const reExam = student.improveExam('algebra')
// console.log(reExam)

const bottle = {
     color: "Yellow",
     price: 50,
     isCleaned: true,
     capacity:1
}

const keys = Object.keys(bottle)
console.log(keys)
const values = Object.values(bottle)
console.log(values)

const pair = Object.entries(bottle)
console.log(pair)

const twoDimension = [
  [ 'color', 'Yellow' ],[ 'price', 50 ],[ 'isCleaned', true ],[ 'capacity', 1 ]
]

console.log(twoDimension)
// seal this method protected data to delete
// Object.seal(bottle)
Object.freeze(bottle)
delete bottle.isCleaned;
bottle.price = 10000,
bottle.height =12,
console.log(bottle)