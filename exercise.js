class Person{
    constructor({firstName, lastName, age, gender, interests}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.interests = interests;
    }
    
    bio(){
        console.log(`${this.firstName} is ${this.age} years old. They like ${this.interests}`)
    }

    greetings(){
        console.log(`Hi! I'm ${this.firstName} ${this.lastName}`)
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, age, gender, interests, subject){
        super(firstName, lastName, age, gender, interests)
        this.subject = subject
    }

    greetings(){
        console.log(`Hi, My name is ${this.lastName}, and I teach ${this.subject}`)
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, gender, interests){
        super(firstName, lastName, age, gender, interests)
    }

    greetings(){
        console.log(`YO! I'm ${this.firstName}`)
    }
}

const personA = new Person({
    firstName: "Pessoa", lastName: "A", age: 20, gender: "Other", interests: ['Art', 'Math', 'Music']
})
const teacherA = new Teacher({
    firstName: "Mortdecai", lastName: "Blue", age: 25, gender: "Male", interests: ['Fight', 'Games', 'Music'], subject: 'Science'
})
const studentA = new Student({
    firstName: "Rigby", lastName: "Brown", age: 25, gender: "Male", interests: ['Art', 'Math', 'Music']
})

personA.greetings()
teacherA.greetings()
studentA.greetings()