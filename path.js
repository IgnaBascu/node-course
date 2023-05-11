// Nos permite trabajar con las rutas de los archivos y carpetas

const path = require('path')

// console.log(path)
console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'test.txt') // Une las rutas sin preocuparme de las barras

console.log(path.basename(filePath)) // Devuelve el nombre del archivo

console.log(path.dirname(filePath)) // Devuelve la ruta del archivo

console.log(path.parse(filePath)) // Devuelve un objeto con la informacion del archivo

console.log(path.resolve('dist') )// Devuelve la ruta absoluta del archivo completandola con la ruta actual