const http = require("http");

const server = http
  .createServer((request, response) => {
    console.log(request.url);

    if (request.url === "/") {
      response.write("HBienvenido al servidor");
      return response.end();
    }

    if (request.url === "/about") {
      response.write("acerca de nosotros");
      return response.end();
    }

    response.write(`
            <h1>404</h1>
            <p>no se encuentra la pagina</p>
            <a href="/">home</a>`);
    response.end();
  })


  server.listen(3000);

console.log("Servidor escuchando en puerto 3000");
