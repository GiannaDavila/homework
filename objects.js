const person = {

    name: 'Gianna',
    age: 18,
    address: '1 bocacode drive',
    address2: '1 bocacode drive'
    
}

console.log('person is', person)


//console.log('person is called: ',person.name)
//console.log('person is called: ',person.name)

//const name = person.name
//const age = person.age

const{name,age} = person
console.log(`My name is ${name} and 
Im this old: ${age}`)
