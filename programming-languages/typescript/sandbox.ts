// explicit types
let character: string 
let age: number
let isLoggedIn: boolean 

// arrays
let ninjas: string[] = []

ninjas.push('test')

// union types

let mixed: (string|number)[] = []

mixed.push('test')
mixed.push(30)

console.log(mixed)

let uid = string|number 


// objects
let ninjaOne: object;
ninjaOne = {name: 'test' , age:18}

let ninjaTwo: {
    name: string,
    age: number
}