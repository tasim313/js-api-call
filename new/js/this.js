// console.log(this)

const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
    //    console.log(this.name, 'is participating is an exam')
         return this.name + 'is participating is an exam'
    },
    examArrow: () =>{
         console.log(this);
    },
    examNested: () =>{
          const arrow = () =>{
            console.log('Hi', this)
          }
          arrow();
    },
    improveExam: function(subject){
        this.exam()
        console.log("Student", this.exam())
        return `${this.name} is taking improvement exam  on ${subject}`
    }
}

student.exam();


const clickHandler = () =>{
    console.log('Inside Click Handler', this)
}


document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this)
})

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());