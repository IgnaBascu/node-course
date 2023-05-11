const myWebAddress = 'https://www.google.com';
const myNumber = 32
const myArray = ['Hello', 'World', 'NodeJS']
const user = {
    name: 'John Doe',
    age: 25
}

const group = {
    myWebAddress : myWebAddress,
    myNumber : myNumber,
    myArray : myArray,
    user : user
}

module.exports = group; // Exporta la variable myWebAddress

// console.log(module); // Muestra la informacion del modulo actual

module.exports.myWebAddress = myWebAddress; // Exporta la variable myWebAddress

