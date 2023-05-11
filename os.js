const os = require('os')  // Guardar modulos en constantes con su mismo nombre

console.log(os.userInfo()) // Informacion del usuario

console.log(os.uptime()) // Tiempo en seg que lleva encendido el sistema

console.log(os.type()) // Tipo de sistema operativo

console.log(os.hostname()) // Nombre del host

console.log(os.release()) // Version del sistema operativo

console.log(os.totalmem()) // Memoria total del sistema

console.log(os.freemem()) // Memoria libre del sistema

console.table({
    os: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
})