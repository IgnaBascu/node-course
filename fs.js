const fs = require('fs') // Modulo para trabajar con archivos y carpetas

const first = fs.readFileSync('./data/first.txt', 'utf-8') // Lee el archivo y lo muestra en consola en buffer, pero si se quiere convertirlo en string se debe poner utf-8

const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

fs.writeFileSync('./data/third.txt', `Este es un tercer archivo: ${first}, ${second}`) // Crea un archivo con el contenido que se le pase

fs.appendFileSync('./data/third.txt', `Este es un tercer archivo: ${first}, ${second}`) // Agrega contenido al archivo que se le pase