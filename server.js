const http = require("http");

const port = process.env.PORT || 3000;

// Creo il server
const server = http.createServer(function (req, res) {
  // Devo specificare come il server deve rispondere
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
})

// avvio il server
server.listen(port, function () {
    console.log("Server is running on port: " + port)
})