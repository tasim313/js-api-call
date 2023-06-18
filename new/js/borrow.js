const kodomAli = {
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


const badam = {
    name: 'Kacha badam',
    money: 8000
}

// const result2 = kodomAli.exam.call(badam)
const result2 = kodomAli.exam.apply(badam)
console.log(result2)

const badamAli = kodomAli.exam.bind(badam)
console.log(badamAli())